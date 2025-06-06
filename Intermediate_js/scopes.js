// scopes in js
console.log("scopes in js ");
//? randomNumber=Math.floor(Math.random() * (max - min + 1)) + min

// js is a hybrid programming language that uses both compilation and interpretation for the exection of code.

// compilation : read the whole code and analyze it for error even if signle error is found no executable file will be generated. just like c, c++
// interpretated languag: read the code line by line and execute it line by line if error occured no code after error will be executed.. just like bash. .sh


// this example shows that js is not a interprated language.
console.log("hello this is the first line that should execute if js is interpreted language");
// ler name="hello";
// console.log(name);

/**
 * if js was supposed  to be a intereped language then console.log() first statement should have been executed but it is not executed because of the error in the second line. that measn js is checking syntax before even executing the code that means compiler is involved in js execution
 */

// this example shows that js is not a compiled languag

console.log("helo how i are u");
// console.love("i am fine");
/**
 * the first conslelog() is executed even though cosnole.love does not exist in js that means js did not throw error at the compile time .. which proves that js is not a compiled language
 */

// initially js was interprated language but Modern JavaScript engines use JIT compilation, making it a hybrid language (both interpreted and compiled). This hybrid approach makes JavaScript much faster and more efficient for execution.

// now for every js code a global execution context is created and it have two phae mcp (compilation and scope resolution phae) and cep (intreperation or code execution phase) and for every function call a new executino context is created which has same name as the function and its also have to phae mcp and cep.

// scopes in js 

/**
 * (1) global scope -- it means variable/function are accessible from anywhere in the code
 * (2) function scope
 * (3) block scope
 */

// NOte -> lexical scope is a algorithm or mechaning using which js resolve the scope of a variable/function. sometimes lexical socping is also called lexical parsing or static socping. 
// in lexical scoping scope to a variable is given or decided duing the mcp or compilation phase where as values to a varaible are given in phase 2 or cep or code execution phase.

// global scope 
let x=10;
function fun(){
  console.log("x inside the function is : ",x);
}
fun();
function fun2(){
  for(let i=0;i<5;i++){
    console.log("x inside the loop is : ",x); 
  }
}
fun2();
console.log("x outside the function is : ",x);

// (2) function scope -> it means variable/function are accessible only inside the function outside the function we can not access those varaible/function
// a variable that have function scope can be accessed from anywhere inside the function it doesn't matter where it is defined inside the function ..... like if defined a varabile inside the for loop and and at the top of function we can access it ..
function f(){
  console.log("l at the top of function f is : ",l); // ehre we are accessing the function scoped varabile before it s declartion so it iwll have undefined..becauseo f hoisting where as in case block scope or in case of let and cosnt we will have reference error becuse in that case this area will be called as tdz.
  {
    var l=100000000000000000; // here x is function scope and we create function scope only with the help of var ... 
    console.log("l inside the block of f () function is : ",l);
  }
}
f();

function fun3(){
  let p=100;
  console.log("p inside the function is : ",p);
}
fun3();
// console.log("p outside the function is : ",p); // here error because p is a function scope varaible and we can't access it outside the function.



// (3) block scope -> it means variable/function are accessible only inside the block outside the block we can not access those varaible/function

// block is a collection or group of statements that are enclosed in curly braces {}.
// statement is a valid js instruction like let a=10;

{ 
  let b=100; // b is a blcok scoped varaible.
  console.log("b inside the block is : ",b);
}
// console.log("b outside the block is : ",b);  // here error because b is a block scope varaible and we can't access it outside the block.

if(true){
  // blcok
}
for(let i=0;i<5;i++){
  // blcok
}
// if ,while,for,switch,etc.



// scope of  a varaible is depend on two thing -- (a) how a varaible is declared (let,const var) and (b) where a variable is declared (global, inside the function, inside the block etc)

// to decalre varabile we have three ways or three keyword  let,const var... and they helps in definging the scope of a variable.

// (a) var -- > var helps us to declare function scope varaible and global scope variable. with var we can't create block scope varaible..

// (b) let/const -- > let helps us to declare block scope variable

// Note -> a varaible can only be used as either container or content.. means if varaible is in lhs then it is used as container and when variable is in rhs then we are consuming it that means varaible will act as a content.
// eg => let x=10; here x variable is used in lhs so it act as container , but let y=x+x; here x is used in rhs or we are consuming the value of varaible that means it is sued as a conent.

var teacher="sundar pichai"; // where - outside the function , how - with var ---> global scope // in cep value assigned.
function fun(){
  var teacher="bill gates"; // where - inside function , how - with var ---> functio nscope // in cep value assigned 
  console.log("teacher inside the function is : ",teacher); // billgates 
}

function gun(){
  var student = "elon musk"; // where - inside function , how - with var -- > function scope in code execution phase value assigned..
  console.log("student inside the function is : " , student); // elon musk
}
fun();
gun();
/**
 * this is output ------>
 * teacher inside the function is :  bill gates
 * student inside the function is :  elon musk
 */


// (2) 
var teacher="sundar pichai"; // where - outside the function , how - var ---> global scope // in code execution phase -> value assignem
function fun1(){
  var teacher="bill gates"; // where - inside function , how - var --> function scope // in code exection phase value assigneme
  console.log("teacher inside fun1 is : ",teacher); // billgates.
}

function gun1(){
  var student = "elone musk"; // where inside function , how - var -> function scope  // in cep value asigned.
  console.log("teacher inside gun1 is : ",teacher); // teacher will be sundar pichae because fun1() teacher is limited to fun1() scope  so here we will first check in current scope if not found any teacher then we will move one scope up and this is global scope so in global scope we ahve teacher varaible whose value is bill gater.
  console.log("student inside gun1 is : ",student); // elon chaha
}
fun1();
gun1();

// (3) 
var teacher="sundar chacha"; // outside - > global scope // cep - value asigned 
function fun2(){
  var teacher = "bill chacha"; // isnde function fun2 and var -> functio scope in phase 2 value is assigned
  console.log("teacher inside fun2 is : ",teacher); // value is : bill chacha
  function gun2(){
    var student = " elon chacha"; // inside function gun2 and var --> function scope and here value is elon chacha -- 
    console.log(`student in gun2 is : ${student} and teacher in gun 2 is ${teacher}`);
    // now here first we will see is student in current scope yes -- elon chacha , now is teacher in current scoep no -- move one scope up which is fun2() scope and is teacher is there yes -- so output will be elon chach and bill chacha
  }
  gun2();
}
fun2();


// (4) 

var teacher="sundar chacha"; // global  // in cep value assigned.. // updated -- bill chaacha
function fun3(){
  // now here in cep or code esxecution phase if we have ssomethign like this then first we will see is teacher is present in courrent scope if yes then fine else we move one step up in global scope where teacher is prsent so it will be updated -- so now teacher is --- bill chanach
  // now same for comapy -- is it present in current scope if not move one step up in global scoep we did not find and since it is last scope and avobe it we can't move so here js will see since the variable is used as lhs means as a container s o js will create it as a global varaible only if we did not find it in entire scope chanin.. so company will now become the global varaible and thsi is called auto globals.
  teacher="bill chacha"; // no formal declaration
  company="microsoft" // no formal declaration..
  console.log("teacher in fun3 is : ",teacher , "and compay is : ",company); // bill chacha and microsoft
}

fun3();
console.log("teachr is : ",teacher); // bill chaha
console.log("comapy is : ",company); // micorso s f


// (5) 

var teacher="sundar chacha"; // global
function fun4(){
  teacher="bill chacha"; 
  company="micro";
  console.log("teacher in fun3 is : ",teacher , "and compay is : ",company);
}
console.log("teacher outside the function is : ",teacher); // sundar chacha
console.log("company outside the fucntion is : ",company); // here no compay is present in entire scope chaning and it is used as content or in rhs so js will not create auto globals here --- 
// NOte => js will create auto globals only first -- that varaible is not a formal declaration means it is not decalred with let , var , const , second is : that varaible does not found in the entire scope chaning... thried is that varaible should be used as lhs or as a container not a conent. // so error will be comes on run times..
fun4();


// case 6 =>

var a = 10; // global scope 
if (true)
{
  // these block has no effect on var..
    var a = 20; // still global scope same as a and 20 will be assigned..
    var b = 20; // still global varable 
    console.log(a, b); // 20 ,20
}
console.log(a, b); // 20, 20


// case 7 -> 
var a1=10; // global 
console.log("a1 is : ",a1); // 10
console.log("b1 is : ",b1); // undefiend --- global scope 
if(true){
  var a1=20;
  var b1=20;
  console.log(a1,b1); // 20,20
}
console.log(a1,b1); // 20,20


//NOte -> in strict mode -- auto global will not work ---- if we write "use strict " at the top of our js code . when strict mode is enalbled is it cal led strict mode and when it is not then it sis called sloopy mode - mdn


// case 8 =>
var p = 10;
// console.log(q); // error function fact is never called 
function fact()
{
    var r = 40; // functio nscope ..
    q = 30;
    console.log(q, r);
}
// if we call fact() ---then q will become the auto global..
fact();
// console.log(q);

// (2) let -- > when a varaible is declared with let then the varaible will get scoe of nearest block if nearest block is of if then variable have if block scope and if it is loop then varaible have loop block scope and if neareset block is function the n variable gets block scope inside the function 
// both function scope and block scope insiee the functio nare different --- in function scope varaible is accisible throught function no matter where it is declared but in case of block scope inside function -- varabiel will be only accessible after its declaration not before 

function g(){
  // this si function scope 
  console.log("lvoe is : ",love);
  var love="hii";
  console.log("lvoe is : ",love);

  // console.log("block scope is : ",block); // here it will throw erro (tdz) thsi si the area where we are accessign the varaible before its decalaration and this area is callded tdz
  // in block scope varaibel we can access varaible before its declaration and the regiion before the block scope declaration is called temporal dead zone
  let block="some";
  console.log("block scope is : ",block);

}
g();

function xx(){
  // this is the ara of tdz for the varabile x --- from the start of the block to till the varaible is not decalrated and insitialized..
  let x=10;

  {
    // thsi is the tdz area for the y .... outside this block there is no tdz ara for th y becase y has n o scope outside it ..
    let y=100;
  }
}

// var : ---> redeclaraiton yes , re-initialization yes 
// let : ---> redeclaration no , re-initilaizion yes
// const: ---> redeclaration no , re-initliaziton no


// use case of var 

function useCase(id){
  // else we will use let like this 
  let errrr=null;
  try{
    if(!id){
      
  
    var err=new Error("sorry error occured"); // function scope ---
    errrr= new Error("hii error occured"); // block scope 
    // here if we want some thing like this then we need to use the var ...
      throw err,errrr;
    }
  }catch(error){
    console.log("error is : ",err.message);
    console.log("errrr is : ",errrr.message); 
  }
}
useCase();

