console.log("hello this is starting of js revision");
// Basic --- js --- starting ----------------------

/**
 * js is for all the logical and interectivity part of a web-page (web-site)
 * js is programming language and it has feature like -- (capability of descision, task reptions, we can build our own logic, we can do computation and so on.)
 * thre are three way to execute js ---> (1) directly using browser console , (2) using node , (3) using html and linking js file and all output will be shown in browser console.
 * programme -> a file where we write our logical piece of code
 * process -> programm under execution is called process. whenever we run any program in our machine that become the process..
*/

// variable -> variable are used to store data during execution of program -- we can crate any number of varaible and these variable will be uniquely identified based on there name and using this varaible name we can  fetch , update and store data in the varaibles.

// inorder to create varaible we have let ,var,const..

// console is a object and log() is a function which is a property of a console object or we can sya its method of console object.
let variableCreatedUsingLet="bingolive";
console.log("let varaible is : ",variableCreatedUsingLet);
const variableCreatedUsingConst="secret-key";
console.log("const varaible is : ",variableCreatedUsingConst);

var variableCreatedUsingVar="some-variable-name";
console.log("var varaible is : ",variableCreatedUsingVar);

// varaible naming rule
/**
 * a varaible name can contain letter,digit,_ and $
 * variable name can start with letter,_ and $
 * varaible name are case sensitive
 * reserved word can't be variable name..
 * by default in js we use camelCase..
 */
let a=10;
let A=100; // case sensitive a and A are diff
let _my="lii"; // valid
let $_so="ii"; // valid
// let 8age="some"  // error varaible start with digit..
// let if="some" // error - keyword used

// Data types -- primitive  and non-primitev

// number -- we can store number +ve , -ve ,0,-0 , and NaN, point number
let age=23;
console.log("age is : ",age);

// string
let name="bingo";
console.log("name is : ",name);

// boolean
let bool=true;
console.log("bool is : ",bool);

// null
let currentDay=null;
console.log("currentDay is : ",currentDay);

// undefined
let mars;
console.log("mars is : ",mars);

// symbol


// bigint -- n at the last of value.
/**
 * this data type represent the higher value --- in js if any num ends with n then it is bigint like val=4555n;
 * to compute bigint js puts extra efforts so using multiple bigint will lead to slowing our application..
 */
let largeNum=34n;
console.log("large num is : ",largeNum);



// null , undefined
/**
 * undefined means that does not exist.. means a varaible that is declared but never defined..
 * null means varaible is declared and defined but with null explictely or with an empty value..
 * eg -> if there is a bottle and there is no water in bottle that means it is null (water bottle is empty) but if bootle does not exist that means it is undefined means water bottle does not exist at all..
 */

// primitive ----

// (1) object 

/**
 * object is a data structyure in the js in which we store data in the key-value parits form
 * key is always in the string format either we write it in string format or not js will internally convert key into the string..
 * a key-value pair will be seprated by a , comma.
 * inside a object we can store any type of data like number,string,boolean,array,object,function and so on..
 * but we can't store object inside anther object directly but we can store object inside another object using key-value pair..
 * we can store function inside the object and that function is now called as method for that object.
 * plse avoid the reserverd word as a key name in the object.. like function , object, array, string and so on. it will work but it is not a good practice..
 * if two keys are same then the last key will be considered..
 */

let myObj={
  "firstName":"bingo",
  // firstName:"love", // this will overwrite the firstName key value..
  "lastName":"live",
  age:23,
  greet:function welcome(name){
    console.log("hello ",name);
  },
  student:{
    studentName:"anku",
    studentAge:23
  },
  country:["seattle","vladivostok","moscow"],
  array:[1,2,3,4,5,6,7,8,9,10], // not a good pratics to us key name as array.
};
 console.log("my obj is : ", myObj);