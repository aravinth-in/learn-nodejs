const crypto = require("node:crypto");


const password = "secret";
const salt = "salt";
const iterations = 100000;
const keylen = 64;
const digest = "sha512";
const count = 16;

// Synchronous
console.time("pbkdf2Sync");
for (let i = 0; i < count; i++) {
    crypto.pbkdf2Sync(password, salt, iterations, keylen, digest);
}
console.timeEnd("pbkdf2Sync");

// Asynchronous
console.time("pbkdf2Async");
let completed = 0;
for (let i = 0; i < count; i++) {
    crypto.pbkdf2(password, salt, iterations, keylen, digest, (err, hashAsync) => {
        if (err) throw err;
        completed++;
        if (completed === count) {
            console.timeEnd("pbkdf2Async");
        }
    });
}
/*
pbkdf2Sync: 3.342s
pbkdf2Async: 922.079ms
*/

/*
learn-nodejs % UV_THREADPOOL_SIZE=16 node index.js
pbkdf2Sync: 3.345s
pbkdf2Async: 476.308ms
*/