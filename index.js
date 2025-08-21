/*
3. Types of Streams

Node.js defines four main stream types:

Readable Streams → data can be read (fs.createReadStream, http.IncomingMessage)

Writable Streams → data can be written (fs.createWriteStream, http.ServerResponse)

Duplex Streams → both readable and writable (net.Socket)

Transform Streams → duplex + data can be modified as it passes through (zlib.createGzip)
*/

const fs = require("node:fs");
const zlib = require("node:zlib");

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

// readable to transformable, and then to writeable stream
readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));

const writeableStream = fs.createWriteStream("./file2.txt");

readableStream.pipe(writeableStream);

/*readableStream.on("data", (chunk) => {
  console.log(chunk);
  writeableStream.write(chunk);
});*/

// for highWaterMark: 2, the output be like
/*
Et
he
re
um
 i
s 
a 
de
ce
nt
ra
li
ze
d 
bl
oc
kc
ha
in
 w
it
h 
sm
ar
t 
co
nt
ra
ct
 f
un
ct
io
na
li
ty
.
*/