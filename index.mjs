//by npm install, package.json is config file, important file for node.js
/*
function sum(a,b){
    return a+b;
}
console.log("Sum:", sum(1,2));

/*
//above is version 1.0.0 lets say
function smultiply(a,b){
    return a*b;
}
//above is version 1.0.1 lets say
function divide(a,b){
    return a/b;
}

//above is version 1.0.2 lets say
//something wrto versions
//name represts folder name simply
//main means main file
//all above three are external dependencies 
//scripts let us add bunch of scripts , whenever something in script  is written inside it, it will run accordingly
//"keywords": [],
  "author": "",
  "license": "ISC" : these all are just meta data, not very important
//all above are important while deploying in npm registry 
//"dependencies": "", are also important, 
*/
//whatever dependencieswe add they wil lbe automatically added in package.json  
//importing library
import chalk from "chalk";//modern importing syntax of js
console.log(chalk.blue("Hello World!")); //blue color
console.log(chalk.red.bold("Hello World!")); //red color
console.log(chalk.green.italic.bold("Hello World!")); //green color
//we dont push node modules folder on github , anyone who is using your code can install dependencies separately, it also prevents huge load on transfering
//lock file is used to pin the dependencies version which will be automatically added when other person adds dependencies on their device after copying your code (so everyone using same project will have same version, to prevent installing other versions automatically)