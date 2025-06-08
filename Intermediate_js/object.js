const { isObject } = require("util");

// object --- about mutability and immutability..
console.log("object : ");

let obj={
  name:"bingolive",
  age:20,
  isStudent:true,
  hobbies:["coding","reading","writing"],
  address:{
    city:"delhi",
    state:"delhi",
    pincode:110001,
  },
}
console.log("obj: ",obj);
console.log("\n\n");


// now all the keys of the object are always strting and unique if we try give duplicate key then the last key value overwrite the previous key value.

// object methods ..

// (1) to get all the keys of the object.
let keysArray=Object.keys(obj); // Object.keys() is a method that returns an array of a given object keys......... and Object.keys() will take a argument which is object whose keys we want.
console.log("keysArray: ",keysArray);
console.log("\n\n");

// (2) to get all the values of the object.
let valuesArray=Object.values(obj); // Object.values() takes the argument as object whose keys values we want and it will reutrn an array of all the values of the object.
console.log("valuesArray: ",valuesArray);
console.log("\n\n");


// (3) if we want to get the key and value both then we can use Object.entries() method. which takes the object as argument and return an array of arrays where each array have two elements first is keyName and secodn is keyvalue..
let keyValueArray=Object.entries(obj);
console.log("keyvaluearray : ",keyValueArray);
console.log("\n\n");

// Note -> if we want to check tot al number of keys or values or total number of key-value pair in the object then we can use Object.keys|values|entries and then return the length of array that these method reutrn and that would be our ans for how many keyvalue pair exist--
console.log(keysArray.length,valuesArray.length,keyValueArray.length);
console.log("\n\n");

// mutability --> it means if we are able to modify or update the variable value that means it is mutable..
let x=100;
x=1000000;
// here we are able to change the valeu of x that means it is mutable..

// immutability --> when we can't do changes in the variable value -- and we can achive immutablity by const..
const p=100;
// p=1000; // now it will trhow error that assignment to constant varaible is not allowed.
// Note -> keep in mind that if we are declaring the a varaible iwth const then keep in mind that it is imp to intialize it at the same time.

// why do we need immutability -- (a) suppose we have a db connection string and most of time or even 99% time we even did not want to do any changes in this so we can make it immutable. (b) let say we have a secret key so we did not want that some other part of code re-initialize it so for that also we make it immutable.

// immutability in object --- 

/**
 * if we do a const based initialisization of a object then that object is not fully immutable becsase we can still add , update , and delte the key-value pair from that object only what we can't do is we can't assign the new object reference to it that simply means const in object just prevent the reference re-assignment.
 */

const myObj={
  name:"ankit",
  age:23,
  isMarried:false,
  city:"seattle",
  country:"valadivostok"
}

console.log("my object is : ",myObj);
console.log("\n\n");


// adding a new key value pair 
myObj.subject="computer";
console.log("my object after adding new key-value pair",myObj);
console.log("\n\n");


// adding a multi-word key value --- so for this we can't use dot operator we need to use square bracket 
myObj["is liked music"]=true;
console.log("my object after adding a multiword new key-value pair",myObj);
console.log("\n\n");

// updating existing key -value pair .
myObj.city="russia";
console.log("my object after updation is : ",myObj);
console.log("\n\n");


// deleting existing key-value pair
delete myObj.city;
console.log("my object after deletion is : ",myObj);
console.log("\n\n");

// but we are not able ot assign the new object reference ..
// myObj={
//   love:true
// }
// console.log("my object wit hnew reference is : ",myObj);

// here we will get assignment to contant varaible error ---- 


// so const here is actually stopping the re-assignments and just because of this with const object are pseudo immutable..


// now can we make object fully immutable so the ans is yes using Object.seal() and Object.freeze() inbuilt method of Object prototype.

// (1) Object.seal() --- this methoda takes an argument which is the object takes an argument which is the object which we want to seal..

const obj1={
  name:"anki",
  age:23,
  city:"seattle"
}
Object.seal(obj1);

// now seal will do few things --- 
/**
 * (1) by doing Object.seal() we can add any new key value pair
 * (2) we can't deelte any existing key value pair
 * (3) But we can update existing key value pair
 */

// checking is my Obj1 object sealed or not 
console.log("object is sealed : ",Object.isSealed(obj1));
console.log("\n\n");


// trying to add a new key value pair.
obj1.country="validvostok";
console.log("object 1 after adding the new key value pair is : ",obj1);
console.log("\n\n");


// trying to delete existing key value pair.
delete obj1.city;
console.log("obj1 after deleting the new key value pair is : ",obj1);
console.log("\n\n");


// trying to update existing key value pair 
obj1.city="mumbai";
console.log("obj1 after updatinon is : ",obj1);
console.log("\n\n");

/**
 * thsi si the output we got..

  object is sealed :  true
  
  object 1 after adding the new key value pair is :  
    { 
      name: 'anki',
      age: 23, 
      city: 'seattle' 
    }
  obj1 after deleting the new key value pair is : 
  {
    name: 'anki', 
    age: 23, 
    city: 'seattle' 
  }
  obj1 after updatinon is : 
  { 
    name: 'anki', 
    age: 23, 
    city: 'mumbai'
  }
 */

// (2) Object.freeze() --- > this methods takes an argument as the object whom we want to freeze and it does -- (a) did not allow to add new key value pair , (b) did not allow to delete existing key value pair , (c) did not allow to update existing key value pair..

const obj2={
  name:"anku",
  age:23,
  city:"copenhegen",
  country:"denmark"
}
console.log("object 2 is : ",obj2);
console.log("\n\n");

Object.freeze(obj2);

// Note : if we do Object.isFrozen() for freezed object then it will return true which is fine but isSealed () will also be true for freeze object. because all the properties of sealed object are inside the frozen object .

console.log("isSealed object 2 : ",Object.isSealed(obj2));
console.log("\n\n");

console.log("isFrozen object 2 is : ",Object.isFrozen(obj2));
console.log("\n\n");

// (a) trying to add new key-value apir.
obj2.isStudent=true;
console.log("object2 after adding new key - value pair is : ",obj2);
console.log("\n\n");

// (b) trying to update existing key-value pair
obj2.city="settle";
console.log("obj2 after update is : ",obj2);
console.log("\n\n");

// (c) trying to delete existing key-value pair..
delete obj2.city;
console.log("obj2 after deletin is : ",obj2);
console.log("\n\n");

// by using Object.freeze () we can achive the highest level of immutability ---- 


// (3) Object.preventExtension()
/**
 * this method also takes an argument as the object to whom we want to apply it.. and it does 50% of what seal does.
 * (a) we can't add new keyvalue pair
 * (b) we can update existing key-value pair
 * (c) we can remove existing key-value pair.
 */

const obj3={
  name:"anki",
  age:23
}

Object.preventExtensions(obj3);

// adding new key-value pair..
obj3.city="seattle";
console.log("obj3 after adding new key-value pair is : ",obj3);
console.log("\n\n");

// updating exising key-value pair
obj3.name="bingolive";
console.log("obj3 after updating key value pair is : ",obj3);
console.log("\n\n");

// deleting existing key-value pair.
delete obj3.age;
console.log("obj3 after deleting key value pair is : ",obj3);
console.log("\n\n");



// (4) Object.defineProperty(nameOfObject,keyNameInString or (if inside array then we can do like this keys[i] works fine), {descriptor of the propty like enumerable,configurable,writable}) etc.

const obj4={
  name:"sonali",
  age:22,
  city:"seattle",
  country:"valdivostok"
}

console.log("obj4 is : ",obj4);
console.log("\n\n");


// writable means - can we update the proptey or not ,
// configurable means -> can we delete theprop or not .

console.log(Object.defineProperty(obj4,'name',{writable:false,configurable:false})); // this means name key can't be updated and delted.
console.log("\n\n");


delete obj4.name;
console.log("obj4 is : ",obj4);
console.log("\n\n");

console.log(Object.defineProperty(obj4,'name',{configurable:false})); // this means name key can't be deleted but we can update it.
obj4.name="updatedname";
console.log("obj4 is : ",obj4);

console.log(Object.defineProperty(obj4,'name',{writable:false})); // this means name can't be updated but we can delete it .
delete obj4.name;
console.log(obj4);


// now custom Object.seal() method --- 

function customSeal(obj){
  // step 1 -> first  get all keys of object.
  const keys=Object.keys(obj);
  for(let i=0; i<keys.length; i++){
    // step 2 => 
    Object.defineProperty(obj,keys[i],{configurable:false}); // by doing this we make sure that we can't delte the key value pair.
  }
  // step 3 => to prevent from adding the new key value pair we cna use 
  Object.preventExtensions(obj);
}

// to attach it to prototype
Object.prototype.mySeal=customSeal;

let o={
  name:"som"
}
Object.mySeal(o);
console.log(Object.isSealed(o));

// now our custom Object.freeze() method --- 

function customFreeze(obj){
  // step 1 -> to get all the keys
  const keys=Object.keys(obj);
  // step 2 => prvent the keys from updation , deletion
  for(let i=0; i<keys.length; i++){
    Object.defineProperty(obj,keys[i],{writable:false,configurable:false}); // by doing this we prevent from updation and deltion
  }
  // step 3= > now to prevent from additon we can use preventExt
  Object.preventExtensions(obj);
}

Object.prototype.myFreeze=customFreeze;
Object.myFreeze(o);
console.log(Object.isFrozen(o));