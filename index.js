const buffer = new Buffer.from("Ethereum", "utf-8");

console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());

/*
<Buffer 45 74 68 65 72 65 75 6d> // hexadecimal
Ethereum
{
  type: 'Buffer',
  data: [
     69, 116, 104,
    101, 114, 101,
    117, 109
  ]
}
*/

buffer.write("Blockchain");
console.log(buffer);
console.log(buffer.toString());

/*
<Buffer 42 6c 6f 63 6b 63 68 61>
Blockcha // Buffer size is limited
{
  type: 'Buffer',
  data: [
     66, 108, 111, 99,
    107,  99, 104, 97
  ]
}
*/

