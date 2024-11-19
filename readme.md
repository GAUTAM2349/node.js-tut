1> What is difference between scripting language and programming language?

2> node.js is runtime environment for js in serverside. Since it is not part of frontend Windows object doesn't work here.
   Javascript v8 engine is made by c++. Javascript have many of functionality borrowed

3> npm run start and npm start both work.

4> If we just write ,
const math = require("math"); then it wil start searching in node modules.

if we want to get it from out directory, then we should specify path,
const math = require("./math");

** module.exports is used for default export.
 whreas, when u use 'exportS' keyword with fn's or anything before defining it is named export in node.js. ...(put in chatgpt)

 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 const fs = require("fs");

// Synchronous
 // fs.writeFileSync("./text.txt", "Hello World");

 
 // Asynchronous
 fs.writeFile("./test.txt", "Hello World Async", err()=>{})

 NOTE:- in asynchronous call we need to give a callback fn which throws error if it happens.