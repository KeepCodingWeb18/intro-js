import playlist from '../playlist.js';

const musicCatalog = playlist();

const playlistForm = document.querySelector("#playlist");

const renderSong = (playlistName, song) => {
  return `
    <div class="song">
      <h3>${song.title}</h3>
      <p>Artist: ${song.artist}</p>
      <p>Genre: ${song.genre}</p>
      <p>Duration: ${song.duration}</p>
      ${song.favorite ? '<p>One of my favorites</p>' : `
        <button class="favorite-song" data-playlist="${playlistName}" data-id="${song.title}">Favorite</button>
      `}
      <button class="remove-song" data-playlist="${playlistName}" data-id="${song.title}">Remove</button>
    </div>
  `;
}

const renderPlayList = (playlist) => {
  return `
    <section>
      <h2>${playlist.name} - Playlist</h2>
      <form class="song-form" data-id="${playlist.name}">
        <div class="form-control">
          <label for="title">Title</label>
          <input type="text" name="title" placeholder="Title" required>
        </div>
        <div class="form-control">
          <label for="artist">Artist</label>
          <input type="text" name="artist" placeholder="Artist" required>
        </div>
        <div class="form-control">
          <label for="genre">Genre</label>
          <input type="text" name="genre" placeholder="Genre" required>
        </div>
        <div class="form-control">
          <label for="duration">Duration (Seconds)</label>
          <input type="number" name="duration" placeholder="Duration">
        </div>
        <button type="submit">Add Song</button>
      </form>
      <p><b>Sort songs</b></p>
      <div class="sort-songs">
        <button class="criterion" data-id="${playlist.name}" data-criterion="duration">Sort by duration</button>
        <button class="criterion" data-id="${playlist.name}" data-criterion="title">Sort by title</button>
        <button class="criterion" data-id="${playlist.name}" data-criterion="artist">Sort by artist</button>
      </div>
      ${playlist.songs.map(song => renderSong(playlist.name, song)).join('')}
      <button class="remove-playlist" data-id="${playlist.name}">Remove playlist</button>
      <hr>
    </section>
  `;
}

const initEventListeners = () => {
  const playlistsElement = document.querySelector("#playlists");
  playlistsElement.addEventListener('click', (event) => {
    if (event.target.matches('button.remove-playlist')) { // removePlaylist listener
      musicCatalog.removePlaylist(event.target.dataset.id);
      const updatedPlaylists = musicCatalog.getAllPlaylists();
      renderPlaylists(updatedPlaylists);
    } else if (event.target.matches('button.criterion')) { // sortSongs listener
      const criterion = event.target.dataset.criterion;
      musicCatalog.sortSongs(event.target.dataset.id, criterion);
      const updatedPlaylists = musicCatalog.getAllPlaylists();
      renderPlaylists(updatedPlaylists);
    } else if (event.target.matches('button.remove-song')) { // removeSong listener
      const playlistId = event.target.dataset.playlist;
      const songId = event.target.dataset.id;
      musicCatalog.removeSongFromPlaylist(playlistId, songId);
      const updatedPlaylists = musicCatalog.getAllPlaylists();
      renderPlaylists(updatedPlaylists);
    } else if (event.target.matches('button.favorite-song')) { // favoriteSong listener
      const playlistId = event.target.dataset.playlist;
      const songId = event.target.dataset.id;
      musicCatalog.favoriteSong(playlistId, songId);
      const updatedPlaylists = musicCatalog.getAllPlaylists();
      renderPlaylists(updatedPlaylists);
    }
  });
  // addSong listener
  playlistsElement.addEventListener('submit', (event) => {
    if (event.target.matches('form.song-form')) {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const songData = Object.fromEntries(formData);
      musicCatalog.addSongToPlaylist(form.dataset.id, songData);
      const updatedPlaylists = musicCatalog.getAllPlaylists();
      renderPlaylists(updatedPlaylists);
    }
  });
};

const renderPlaylists = (playlists) => {
  const playlistsElement = document.querySelector("#playlists");
  const playlistsHTML = playlists.map(renderPlayList).join('');
  playlistsElement.innerHTML = playlistsHTML;
};

playlistForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(playlistForm); // FormData es un objeto que nos permite obtener los datos de un formulario
  const cartData = Object.fromEntries(formData); // Object.fromEntries nos permite convertir un objeto iterable en un objeto. { name: 'playlist' }
  musicCatalog.createPlaylist(cartData.name);
  const playlists = musicCatalog.getAllPlaylists();
  renderPlaylists(playlists);
});

initEventListeners();
