// array is nothing but a data structure in js which can store similar type of data or different type of data --- (homo genious and hetro genious)..



// ways to create array ... 
// (1) using square breackt notation
let arr=["first",2,4.5,true,null,undefined,function love(){console.log("hello i am function")},[1,2,3,4,5,6,7,8,9,10],];
console.log("arr is : ",arr);

// (2) using Array constructor..
let arr1= new Array(10); // array of size 10 with all undefined value.
console.log("arr1 is : ",arr1);
arr1.fill(-1); 
console.log("arr1 after fill is : ",arr1);
let arr2= new Array(1,2,3,4,5,6,7,8,9,10); // array with value
console.log("arr2 is : ",arr2);

// (3) using array literal syntax ..
let arr3=Array(10,20,30); // ehre we idid not use new keyword
console.log("arr3 is : ",arr3);

// array are mutable in js and they have zero based index.. and they are special type of object in js. where index become the key and value is stored at that index.

console.log("arr[0] is : ",arr[0]); // access value at index 0 
console.log(arr[0]="love");
console.log(arr);


// methods in array ...


let arr4=[1,2,3,4,5,6,7,8,9,10];

arr4.push(11); // add the new element at the end of array and return new length of array.
arr4.pop(); // remove the last element from thearr y and return poped item
arr4.shift(); // remove the first element from array and return removed item
arr4.unshift(0); // add the new element at the start of array and return new length of array.
let arr5= arr4.concat([11,12,13,14,15,16,17,18,19,20]);
console.log("arr5 is : ",arr5); // it will arr4 values as well as new values..

let newArr=arr4.slice(2,5); // return new array with element from index 2 to 4
console.log("newArr is : ",newArr);

// splice -- it will change the original array , using it we can add , remove and update the data in the array..
// syntax -> arr.splice(startIndex,deleteCount, items to add);

arr4.splice(0,0,"added");
console.log("arr4 after splice is : ",arr4);



// update  for update first delete it then add it ...
arr4.splice(0,1,"updated");
console.log("arr4 after update is : ",arr4);


// eelete 
arr4.splice(0,1);
console.log("arr4 after delete is : ",arr4);


// includes ..
console.log(arr4.includes(10)); // if arr4 will ahve 10 then it will return true else false

