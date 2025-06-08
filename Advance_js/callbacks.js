// callback -- callback is a function that is being passed to another function as an argument --

// writing our custom map function --- 

function myMap(callback){
  let result=[];
  for(let i=0; i<this.length; i++){
    result.push(callback(this[i],i,this)); // currentElement,index,array
  }
  return result;
}
Array.prototype.customMap=myMap;

let arr=[1,2,3,4,5];
let ans = arr.customMap(function square (currentElement,index,array){
  return currentElement*currentElement;
});
console.log("square array returned by our map is : ",ans);

// here our custommap is a higher order function and the square function which is being passed to customap is called callback function ...

// higer order function are those function which has capability to accept the anohter function and use them or they have capabitlity to return a function 

// callback is a function that is being passed as an argument to a higher order function..
