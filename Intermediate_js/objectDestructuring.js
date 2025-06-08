console.log("object destructuring");
// object destructuring --
// object destructuring is a mechanism using which we try to extract values from the object and store them into a varaibles..

let obj={
  name:"bingolive",
  age:23,
  isStudent:true,
  city:"seattle",
  country:"valdivostok"
}
console.log("obj is : ",obj);
console.log("\n\n");

// we can give default value while de-structuring --- 
// in object destructuring we have to use the same for the varaible as the key name of the object
let {name,age}=obj; // here we are extracting the name and age from the object and storing them into the varaible name and age
console.log(name,age);

// if we want to give alias then we can use :
let {name:myName, age:myAge}=obj;
console.log("name as myName is : ",myName);
console.log("age as myAge is : ",myAge);


// destructuring of nested object.....
let nestedObject={
  name:"nestedObject",
  category:{
    categoryName:"mae nahi bata raha",
    categoryId:"kyu batuuu",
    categoryCount:"chal hatt ja na"
  }
}

// now if we want the categoryname, id,count then we have two ways ..
// (a) traditional way...

let {category}=nestedObject;
console.log("category is : ",category);
let {categoryName,categoryId,categoryCount:count}=category;
console.log("categoryname :",categoryName);
console.log("categoryId : ",categoryId);
console.log("category count  as count is : ",count);
console.log("\n\n");

let x={
  a:{
    b:{
      c:{
        love:"no love"
      }
    }
  }
}
let {a:{b:{c:{love}}}}=x;
console.log("love is : ",love);
console.log("\n\n");


// (b) easier way ...
let {category:{categoryName : Catname, categoryCount}}=nestedObject;
console.log("category Name  as Catname is : ",Catname);
console.log("category count is : ",categoryCount);



// Array destructiong --
// for array only sequencing matter names does not matter.so while destructuring of array we can give any names to the variable and sequentially they will be allocated.
console.log("\n\n");

let deArr=[1,2,3];
let [fir,sec]=deArr;
console.log("fir is : ",fir);
console.log("sec is : ",sec);
console.log("\n\n");


// spread operator ---
// the spread operator is used to spread the items or unpacks the items ..


// spread operator in array ---
// (a) copying an array
let arr=[1,2,3,4,5,6,7];
console.log("arr is : ",arr);

let copyiedArr=[...arr];
console.log("copyied arr is : ",copyiedArr);

// (b) combining two array.
let arr2=[10,20,30,"love","hii","helo"];
let mergedArr=[...arr, ...arr2]; // in which order we spread it the items or data in merged array will also come in the same order...
console.log("merged array is : ",mergedArr);


// (c) spread in nested array -- in case of nested array spread will not spread or flat the nested array -- it will only spread the top level element..
let nestedArr=[1,2,"top level",[4,5,"one level in",[6,7,"two level in",10,4]]];
console.log("the value of nested arr is : ",nestedArr);
let spreadInNestedArr=[...nestedArr];
console.log("spred in nested arr is : ",spreadInNestedArr);


// spread operator in function --- in function we used it to pass multiple arguments.
function calculateFactorialOfAllElementsOfArray(...args){
  let result=[];
  function findFact(element){
    if(element===1){
      return 1;
    }
    return element*findFact(element-1);
  }
  for(let i=0; i<args.length; i++){
   result.push(findFact(args[i])); 
  }
  return result;
}
let factArr=[1,2,3,4,5,6];
console.log(calculateFactorialOfAllElementsOfArray(...factArr)); // we are passing individual args here using spread and collecting them in parameter as a single array using rest operator .... ha ha ha ha 🤣🤣🤣🤣

// spread in object--
console.log("\n\n");
let tempObj={
  name:"firstObject",
  city:"a",
  country:"seattle"
}
let copyiedObj={...tempObj};
console.log("temp obj after spreding is : ",tempObj);
console.log("copyied object is : ",copyiedObj);
console.log("\n\n");

// merging tow object..
let secondObj={
  name:"second object",
  city:"b",
  age:23
}
let mergedObj={...tempObj,...secondObj}; // in which order we will spread in the same order data will come in original object.
console.log("merged object is : ",mergedObj);

// Note : keep in mind that if two object are having same properties and we are spreading them into the single object then keep in mind that --- the object which spread last will have comman properties value means keys will be of first object but its value will be overwirrten if any duplicate found in rest spread object. just in above case.. name and city are same same in obht object..


// spread with string -- 

let str="bingolive";
console.log(...str); // string will be spreaed into individual characters..



// ======================== rest paramter or rest operator======================


// rest parameter or rest operator can be used to collect the items ... or we can say its just apposite of spread operator ........

// rest in function .... 

function print(...args){
  args.forEach(function callback(currentElement,index){
    console.log("current element is : ",currentElement);
  })
}
print("apple","mango","litchi","banana");

// rest in array to collect remaining items.. in array destructuring 
let myArr=[1,2,"love","no","i","hii"];
[item1,item2,item3 , ...restItemOfArray]=myArr;
console.log("item 1 is : ",item1);
console.log("\n\n");

console.log("item 2 is : ",item2);
console.log("item 3 is : ",item3);
console.log("rest item of array are : ",restItemOfArray);
console.log("\n\n");

// rest in object destructuring to collect remainging items .....
const person = { namee: 'Alice', age: 25, city: 'Wonderland' };
const { namee, ...rest } = person;
console.log("namee is : ",namee);
console.log("rest is : ",rest);
