import musicCatalog from '../playlist/js/playlist';

describe('playlist', () => {
  const song = { title: 'Billie Jean', artist: 'Michael Jackson', genre: 'Pop', duration: 300 };
  it('should add a new playlist to the catalog', () => {
    const catalog = musicCatalog();
    catalog.createPlaylist('my playlist');
    expect(catalog.getAllPlaylists()).toEqual([{ name: 'my playlist', songs: [] }]);
  });

  it('should avoid mutation of the catalog', () => {
    const catalog = musicCatalog();
    catalog.createPlaylist('Rock Classics');
    catalog.createPlaylist('Pop Hits');
    catalog.addSongToPlaylist('Rock Classics', song);
    const originalPlaylistWithoutPopHitSong = catalog.getAllPlaylists();
    catalog.addSongToPlaylist('Pop Hits', song);
    const playlistAfterAddingSongToPop = catalog.getAllPlaylists();
    expect(originalPlaylistWithoutPopHitSong[0].songs).toHaveLength(1);
    expect(playlistAfterAddingSongToPop[0].songs).toHaveLength(1);
  });

  it('should remove a playlist from the catalog', () => {
    const catalog = musicCatalog();
    catalog.createPlaylist('my playlist');
    catalog.removePlaylist('my playlist');
    expect(catalog.getAllPlaylists()).toEqual([]);
  });

  describe('addSongToPlaylist', () => {
    it('should add a song to a specific playlist', () => {
      const catalog = musicCatalog();
      catalog.createPlaylist('my playlist');
      const expectedSong = { title: 'Billie Jean', artist: 'Michael Jackson', genre: 'Pop', duration: 300, favorite: false };
      catalog.addSongToPlaylist('my playlist', song);
      expect(catalog.getAllPlaylists()[0].songs).toEqual([expectedSong]);
    });
  
    it('should throw an error if the playlist is not found', () => {
      const catalog = musicCatalog();
      expect(() => catalog.addSongToPlaylist('my playlist', song)).toThrow('Playlist not found');
    });
  });

  describe('removeSongFromPlaylist', () => {
    it('should remove a song from a specific playlist', () => {
      const catalog = musicCatalog();
      catalog.createPlaylist('my playlist');
      catalog.createPlaylist('my other playlist');
      catalog.addSongToPlaylist('my playlist', song);
      catalog.removeSongFromPlaylist('my playlist', 'Billie Jean');
      expect(catalog.getAllPlaylists()[0].songs).toEqual([]);
    });

    it('should throw an error if the playlist is not found', () => {
      const catalog = musicCatalog();
      expect(() => catalog.removeSongFromPlaylist('my playlist', 'Billie Jean')).toThrow('Playlist not found');
    });

    it('should throw an error if the song is not found', () => {
      const catalog = musicCatalog();
      catalog.createPlaylist('my playlist');
      catalog.addSongToPlaylist('my playlist', song);
      expect(() => catalog.removeSongFromPlaylist('my playlist', 'Thriller')).toThrow('Song not found');
    });
  });

  describe('favoriteSong', () => {
    it('should favorite a song', () => {
      const catalog = musicCatalog();
      catalog.createPlaylist('my playlist');
      catalog.createPlaylist('my other playlist');
      catalog.addSongToPlaylist('my playlist', song);
      catalog.addSongToPlaylist('my playlist', { title: 'Red flavor', artist: 'Red Velvet', genre: 'K-pop', duration: 300 });
      catalog.favoriteSong('my playlist', 'Billie Jean');
      expect(catalog.getAllPlaylists()[0].songs[0].favorite).toBe(true);
    });
  });

  describe('sortSongs', () => {
    it('should throw an error if the playlist is not found', () => {
      const catalog = musicCatalog();
      expect(() => catalog.sortSongs('my playlist', 'title')).toThrow('Playlist not found');
    });

    it('should throw an error if the sort type is not valid', () => {
      const catalog = musicCatalog();
      catalog.createPlaylist('my playlist');
      expect(() => catalog.sortSongs('my playlist', 'invalid')).toThrow('Invalid sorting criterion');
    });

    it('should sort songs by title', () => {
      const catalog = musicCatalog();
      catalog.createPlaylist('my playlist');
      catalog.addSongToPlaylist('my playlist', { title: 'Thriller', artist: 'Michael Jackson', genre: 'Pop', duration: 300, favorite: false });
      catalog.addSongToPlaylist('my playlist', { title: 'Billie Jean', artist: 'Michael Jackson', genre: 'Pop', duration: 300, favorite: false });
      catalog.sortSongs('my playlist', 'title');
      expect(catalog.getAllPlaylists()[0].songs).toEqual([
        { title: 'Billie Jean', artist: 'Michael Jackson', genre: 'Pop', duration: 300, favorite: false },
        { title: 'Thriller', artist: 'Michael Jackson', genre: 'Pop', duration: 300, favorite: false },
      ]);
    });

    it('should sort songs by artist', () => {
      const catalog = musicCatalog();
      catalog.createPlaylist('my playlist');
      catalog.addSongToPlaylist('my playlist', { title: 'Thriller', artist: 'Michael Jackson', genre: 'Pop', duration: 300, favorite: false });
      catalog.addSongToPlaylist('my playlist', { title: 'Master of Puppets', artist: 'Metallica', genre: 'Metal', duration: 300, favorite: false });
      catalog.sortSongs('my playlist', 'artist');
      expect(catalog.getAllPlaylists()[0].songs).toEqual([
        { title: 'Master of Puppets', artist: 'Metallica', genre: 'Metal', duration: 300, favorite: false },
        { title: 'Thriller', artist: 'Michael Jackson', genre: 'Pop', duration: 300, favorite: false },
      ]);
    });

    it('should sort songs by duration', () => {
      const catalog = musicCatalog();
      catalog.createPlaylist('my playlist');
      catalog.createPlaylist('my other playlist');
      catalog.addSongToPlaylist('my playlist', { title: 'Thriller', artist: 'Michael Jackson', genre: 'Pop', duration: 300, favorite: false });
      catalog.addSongToPlaylist('my playlist', { title: 'Master of Puppets', artist: 'Metallica', genre: 'Metal', duration: 400, favorite: false });
      catalog.sortSongs('my playlist', 'duration');
      expect(catalog.getAllPlaylists()[0].songs).toEqual([
        { title: 'Thriller', artist: 'Michael Jackson', genre: 'Pop', duration: 300, favorite: false },
        { title: 'Master of Puppets', artist: 'Metallica', genre: 'Metal', duration: 400, favorite: false },
      ]);
    });
  });
});
