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

 NOTE:- in asynchronous call we need to give a callback fn which takes 'error' and 'result' as argument. In sychronous calls result is returned
        and then code is executed ahead, but asynchronous calls does not return anything, hence it except a callback through which result or 
        error will be handled.

** because result is immediately available in synchronous call, so we can use try catch to handle the immediately available data, but in
   case of asynchronous call since output is not available their is nothing deciding factor on which try catch can be used , hence we  
   pass a callback fn to handle error and results too.        