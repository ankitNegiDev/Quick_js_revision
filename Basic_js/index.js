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

// opeators in js--- opeator are symbol using which we can perform any operation on the data or we can do some computation or calcaulatoion on the data.
// operand - on which opeator will work is called operand or on which value we will opearate is called opearand. and by whom we are operating is called oeprator.

// (1) Arithmetic opeator.. are alwasys used with number---
/**
 * + -> addition
 * - -> substraction
 * * -> multiplication
 * / -> division gives us quotent like 10/2 = 5 so it will give us 5
 * % -> modulus gives us remainder like 10%2 = 0 so it will give us 0 or 10%3 = 1 so it will give us 1
 * and important this is if we do modulus of smaller number with larger number then it will give us smaller number as result like 2%10 -> so ans will be 2 but in case of 10%2 -> ans or reminder willl be 0.
 * ** -> exponentiation means 2**3 = 2*2*2 = 8
 */
let num1=10;
let num2=20;
console.log("num1 is :",num1, "num2 is :",num2);
console.log("num1 + num2 is : ",num1+num2);
console.log("num2 - num1 is : ",num2-num1);
console.log("num1 * num2 is : ", num1*num2);
console.log("num2 / num1 is : ", num2/num1);
console.log("num1 % num2 is : ", num1%num2);
console.log("num2 % num1 is : ", num2%num1);
console.log("2**3 is : ",2**3);
console.log("\n\n-------------------------\n\n");

// (2) Assignment operator.. assignment oepatro are used to assign a value or express to a varaible.. there are compund assignment oeprator also.

let x=10; // asignment operator.
let x1=x*x// assigning the express into a variable.
// on the lhs of assigment we can have only variable or container but on the rhs we can either hve any vlaue or express or any content.
// a variable can behave as cotnainer and content depend on where we are using it if we use it on the lhs then it will behave as container and if we are using it on the rhs then it will bheave as content. 

// compund assignment oepator.
console.log("x = x +1 : ",x+=1);
console.log("x = x-1 is : ",x-=1);
console.log("x=x*2 is : ",x*=2);
console.log("x = x/2 is : ", x/=2);
console.log("x=x%4 is : ",x%=4);
console.log("x = x**2 is : ", x**=2);

console.log("\n\n-------------------------\n\n");


// (3) logical opeator -- logical operatro are used to combine the condition

// truthy and flasy values --- > values which are converted into true in ToBoolean() algo are called truthy value and values which are converted into false in ToBoolean() algo are called falsy value.

// falsy values are -> +0|0,-0,null,undefined,NaN,document.all, empty string"",false REST ALL ARE TRUTHY VALUES.

/**
 * NOTE : operand of a logical operator are always boolean if we do not pass boolean then js will automatically convert them into boolean by using ToBoolean () algo
 * but keep in mind js convert the operand of logical operator into boolean only at the time of evaluation js will not convert the result of logical operator into boolean. eg -> let a = 10 && 20 ; so output will be 20  not true or any boolean value but internally at the time of evaluation the 10 is considered as truty value and 20 is also considred as truthy value so if both condition are true or both operaand are true the iti will return second operand.
 */

// (1) logical AND (&&) operaotr--- gives tru only when both are true.
/**
 * true && true = true
 * true && false = false
 * false && true = > don't even check the second condition if first is false.
 * false && false = => don't even check the second condition if first is false.
 */

// short cirucusting 

/**
 * in AND logical operator if the first opeand is false the nit will not even check the second operand it will directly return the fsle in case of conditional and in general it will return the frist operand.
 * in first opeand is true then it will check second operand and if second operand is true it iwll return true in case of condition and in general it return sedond operand , but if second oeprand is fasle then it iwll return false in case of condition and in general it will return second operand.
 */
console.log("true && true is : ", 5>2 && 3>1); // output will be true.
console.log("true && tru is : ", 10 && 5); // 5 second operand
console.log("true && false is : ", 10>4 && 0>10); // output will be false.
console.log("true && false is : ", 10 && undefined) // 0 second operand
console.log("false && true is : ", 0>10 && 10>0); // output will be false
console.log("fasle && true is : ", 0 && 10) // 0 first operand did not even check the second operand
console.log("false && false is : ", null && 0); // null

// short circutting in || logical OR operator..

/**
 * if the first opeand of the logical or oprator is fasle then it will check the sedond operand and return it.. for condition it will return true if second operand is true and false if second operand is false. and for normal it will retun second operand.
 * if first operand is truen it will not even check the secodn operand and reutrn the first opernad in genral and for condition it will return true.
 */

console.log("true || true is : ", 10>0 || 20>10); // true 
console.log("true || true is : ", 10 || 20); // 10
console.log("false || true is : ", 10>20 || 20>10)// output will be true
console.log("false || true is : ", null || 20); // output will be  20

// empty array and object are truthy value in js
if({} && []){
  console.log("true------------");
}else{
  console.log("false------------");
}

// (3) Comparision operaotr or relational operator--- > helps us to compare two values and result will e always a boolean value..

/**
 * < - less than
 * > - greater than
 * <= - less than or equal to
 * >= - greater than or equal to
 * == - double equal to or abstract equality ---> it emans js will check are both orpeand are same or not if they are not same then js will check can we make them same by changin their types.
 * in abstract equality it is not required that both operand are of the same type before comparision start by js instead js pefrom the type cocerion to make values comparible..This means that before comparing the values JavaScript will automatically tries to convert the operands to a common type if they are of different types. after conversion if values are still not comparible then it iwll return false else true.
 * eg -> "1111" and 1111 are same in abstract equality because js will convert 1111number into string and then compare them.
 * eg -> 'NaN' == NaN -> fsle because NaN is not equal to any number including itself so js will not convert NaN into a string and compare it.
 * === - triple equal to or strict equality
 * The === (strict equality) operator in JavaScript requires the operands to have the same type and the same value before comparison.
 * != - not equal to
 * !== - strict not equal to
 */

console.log(5>10); // false
console.log(5<10); // true
console.log(5<=10); // true
console.log(5>=1); // true
console.log(5 == "5"); // true becuase of coercion
console.log("5"===5); // false 
console.log(5 !=5); // false because 5 is equal to 5
console.log(5 !== "5"); // true because 5 is not equal to "5" in strict equality

// comments ---> for devloper understanding and for code documentation

// conditional statement ---> if else , switch case, ternary operator , nested if else
// statement is one valid peice of js instruction.
// block is a group of statement. and block is always enclosed in {} curly braces.

// (1) if 
let isAdult=true;
if(isAdult){
  console.log("you are adult");
}

// (2) if - else // else will never exist without if.

if(!isAdult){
  console.log("you are adult");
}else{
  console.log("you are not adult");
}

// (3) if - else if - else

// let random=Math.floor(Math.random() * (max-min+1)) + min;
let random=Math.floor(Math.random() * (10-0+1)) + 0; // random number between 0 and 10
console.log("random number is : ",random);
if(random > 5){
  console.log("random number is greater than 5");
}else if (random < 5){
  console.log("random number is less than 5");
}else if(random === 5){
  console.log("random number is equal to 5");
}else{
  console.log("random number is not in the range");
}

// switch case

const day = 6;
switch(day){
  case 1:
    console.log("Today is Monday");
    break;

  case 2:
    console.log("Tody is Tuesday");
    break;
    
  case 3:
    console.log("tody is Wednesday");
    break;

  case 4:
    console.log("Tody is Thursday");
    break;

  case 5:
    console.log("Tody is Friday");
    break;

  case 6:
    console.log("Tody is Saturday");
    break;

  case 7:
    console.log("Tody is Sunday");
    break;

  default: 
    console.log("Invalid day");
}