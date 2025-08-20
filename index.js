const path = require('node:path');

console.log('basename:', path.basename(__filename)); // e.g., index.js
console.log('dirname:', path.dirname(__filename)); // directory of this file
console.log('extname:', path.extname(__filename)); // .js

console.log('format:', path.format({
  dir: __dirname,
  base: 'file.txt'
})); // e.g., /path/to/dir/file.txt

console.log('isAbsolute:', path.isAbsolute(__filename)); // true

console.log('join:', path.join(__dirname, 'foo', 'bar')); // e.g., /path/to/dir/foo/bar

console.log('normalize:', path.normalize(__dirname + '/../foo//bar//baz/..')); // normalized path

console.log('parse:', path.parse(__filename)); // object with root, dir, base, ext, name

console.log('relative:', path.relative(__dirname, __filename)); // e.g., index.js

console.log('resolve:', path.resolve(__dirname, 'foo/bar')); // absolute path to foo/bar

console.log('sep:', path.sep); // / (on Mac/Linux)

console.log('delimiter:', path.delimiter); // : (on Mac/Linux)

console.log('toNamespacedPath:', path.toNamespacedPath(__filename)); // same as __filename on Mac/Linux

// POSIX and WIN32 examples
console.log('posix.join:', path.posix.join('/foo', 'bar', 'baz/asdf', 'quux', '..')); // /foo/bar/baz/asdf
console.log('win32.join:', path.win32.join('C:\\foo', 'bar', 'baz\\asdf', 'quux', '..'));