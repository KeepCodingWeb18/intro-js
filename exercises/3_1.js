const input1 = [
  'Downloads',
  'Videos',
  'capture',
  'mp4',
];

const getPath = (values) => {
  const extension = values[values.length - 1];
  const path = values.slice(0, values.length - 1).join('/');
  return `${path}.${extension}`;
};

let result = getPath(input1); // 'Downloads/Videos/capture.mp4'
console.log(result);

const input2 = [
'CodinGame',
'python',
'py',
];
result = getPath(input2); // 'CodinGame/python.py'
console.log(result);

const input3 = [
'programming',
'languages',
'easy',
'beginner',
'useful',
'pythonstuff',
'py',
];

result = getPath(input3);
console.log(result);
// 'programming/languages/easy/beginner/useful/pythonstuff.py'
