// problem in current class implementation ...

class Product{

  // data member 
  // name;
  // price;
  #color;
  #rating;

  
  // member function..
  constructor(incomingName,incomingPrice,incomingColor){
    this.name=incomingName;
    this.price=incomingPrice;
    this.#color=incomingColor;
    this.#rating=0;
  }

  // show product details.
  showProductDetails(){
    console.log("rating : ",this.#rating);
    console.log("color : ",this.#color);
    console.log("product details : ",this);
  }

  updateObj(obj){
    this.name=obj.name;
    this.price=obj.price;
    this.rating=obj.rating;
  }
  set colorValue(incomingColor){
    this.#color=incomingColor;
  }
  get colorValue(){
    return this.#color;
  }

  set rating(r){
    this.#rating=r;
  }
  get rating(){
    return this.#rating;
  }
}

let obj=new Product("iphone",12300,"pink");
console.log("obj : ",obj);
obj.price=-1000;
obj.showProductDetails(); // voilets encapusulation --- // leads to security... and to avoid this we can hide our dta member -- by using private data member..

// console.log(obj.#color); // now we can't access it outside the class
// obj.#color="red"; // error -- private field #color muste be declared in an enclosing class. 
// obj.colorValue("yello"); // this is wrong becues its not a function nw o
obj.colorValue="yellow";
obj.rating=5;

obj.showProductDetails();
console.log(obj.rating);
console.log(obj.colorValue);


/**
 * output
     obj :  Product { name: 'iphone', price: 12300 }
     rating :  0
     color :  pink
     product details :  Product { name: 'iphone', price: -1000 }
     rating :  5
     color :  yellow
     product details :  Product { name: 'iphone', price: -1000 }
     5
     yellow
 */


// function as class---

// this is how we can implement or create object without using class... so there are three way to create object -- (a) class , (b) function constructor , (c) normal object syntax.

// this is function constructor -- that helps to create new object..
function Student(name,age){
  this.name=name;
  this.age=age;

  // if we define a normal function here then it won't be avilable for the object of this function constructor -- so to make it avilabe we need to add that function as a proptty of new object.
  // this is member function---
  this.displayStudent=function (){
    console.log("student details : ",this);
  }
  
}
const studentObj= new Student("bingo",23); 
// if we call like this Student("anki",34); now this will execute like the normal function..
console.log("student obj is : ",studentObj);
console.log("\n\n");
studentObj.displayStudent();


// static keyword in js --- // static is associteed with class not with object...

class Fun{
  static love="yes";
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
}
let funObj=new Fun("ak",23);
console.log("funObj is : ",funObj);
console.log("funObj . love is : ",funObj.love);
console.log("class.love is : ",Fun.love);

// static varaible will be created at that time when class will load into memory and they will not wait for object creation means even if we did not create any object of a class and it have static member then those can be acessed directly with class name..

// usecase -- if we need something before the object creatoin -- like before creating the db object we need the connection string --
// in builderrr degisn pattern

