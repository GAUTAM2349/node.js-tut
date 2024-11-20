const fs = require("fs");


/* WRITING FILE SYNCHRONOUSLY */

fs.writeFileSync(
  "./syncWriteTest.txt",
  "Hello this file is created using synchronous file writer"
);
// if the string is changed and method is run again then it will not append to existing file rather create new file(if not created)
// change the whole content.


/* WRITING FILE SYNCHRONOUSLY */

fs.writeFile(
  './asyncWriteTest',
  "Hello this file is created using ASYNChronous file writer",
  (err) => {
    if (err)
      console.log("some error occured during writing file asynchronously");
  }
);


/************************************************************************************************************************************* */

/* SYNCHRONOUSLY READING FILE */

let result = fs.readFileSync('syncWriteTest.txt','utf-8'); // we are reading texts of specified file
console.log(result); //outputs whatever is written in mentioned file


/* ASYNCHRONOUSLY READING FILE */

fs.readFile('asyncWriteTest.txt','utf-8', (error,result)=>{
    
    if(error) console.log("an ERROR occured while reading file asynchronously");
    else console.log(result);
});

//you must not forget to include extension of file too.


/************************************************************************************** */

fs.appendFile('./asyncWriteTest.txt', new Date().getDate().toLocaleString(), 
(err)=>{
    console.log("error occured in appending asynchronously")
});




