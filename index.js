const fs = require("node:fs/promises");

fs.readFile("file.txt", "utf-8")
.then(data => console.log(data))
.catch(error => console.log(error));

async function readFile() {
  try{
    const data = await fs.readFile("file.txt", "utf-8");
  }
  catch(error){
    console.log(error);
  }
};

readFile();

// const fs = require("node:fs");

// const fileContents = fs.readFileSync("./file.txt");
// console.log(fileContents);
// // <Buffer 54 68 69 73 20 69 73 20 61 20 66 69 6c 65 2e>

// const fileContents1 = fs.readFileSync("./file.txt", "utf-8");
// console.log(fileContents1);
// // This is a file.

// fs.readFile("./file.txt", (error, data) => {
//   if(error){
//     console.log(error);
//   }
//   else{
//     console.log(data);
//     // <Buffer 54 68 69 73 20 69 73 20 61 20 66 69 6c 65 2e>
//   }
// });

// // Synchronous
// fs.writeFileSync("./greet.txt", "Hello Ethereum!");
// // Asynchronous
// fs.writeFileSync("./greet.txt", " Hello Aave!", { flag: "a"}, (error) => {
//   if(error){
//     console.log(error);
//   }
//   else{
//     console.log("File written successfully");
//   }
// });