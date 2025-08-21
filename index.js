const fs = require("node:fs");

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

const writeableStream = fs.createWriteStream("./file2.txt");

readableStream.on("data", (chunk) => {
  console.log(chunk);
  writeableStream.write(chunk);
});

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