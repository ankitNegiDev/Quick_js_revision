console.log("oops ");

// classes 
/**
 * classes are blueprint of set of real life entity..
 * classes are going to represent how an entity should look like and behave here look like means what properties they posses and behave means what kind of action can be perofemed on them
 * properties means data member or any feature that a class contain..
 * action measn member function ..
 */


// object
/**
 * using classes the finitla entity that we create is called object.
 */

// to create class in js we have class keyword..

// syntax to create class -> classKeyword className {data member --- membr function}

// is it necessary to write the class name with capital letter ?? 
/*
* No, it is not necessary to write class names with a capital letter in JavaScript, as the language does not enforce this rule. However, it is a widely accepted convention to use PascalCase (capitalizing the first letter of each word, including the first) for class names. eg class MyClass{ ... code ...}
* This convention helps distinguish classes from regular functions and variables, making the code more readable and understandable.
* Always use PascalCase for class names to align with industry standards.
*/

// constructor -- > each class that we create have a special member function which is called constructor and when we create an object of a class the nconstructor is the very first method of the class that is automatically called by js.
// generally in constructor we write that logic which we want to execute before the creation of object.
// constructor is not reserver keyword.
// the default version of cosntructor is called default constructor and we can also write our custom constructor.

// Note -> type of clsss is a function -- so techincally classes are nothing but a wrapper over the function or we can say 

class Product{
  // data member 
  // either define data memeber like this or either define them inside the constror if nothing is used then we will get undefined ...
  // name;
  // price;
  // category;
  // description;
  // rating;
  // color;

  // member function --- constructor is also a member function 
  constructor(incomingName,incomingPrice,incomingCategory,incomingDescription,incomingRating,incomingColor){
    this.name=incomingName;
    this.price=incomingPrice;
    this.category=incomingCategory;
    this.description=incomingDescription;
    this.rating=incomingRating;
    this.color=incomingColor;
  }

  // member function
  addToCart(){
    console.log("product is added to cart");
  }

  // remove from cart
  removeFromCart(){
    console.log("product remove from cart");
  }

  // buy product
  buyProduct(){
    console.log("product bought");
  }
}

// using this class the finial entity we create is called object..

// to create object of a class in js we use new keyword ---

// sytanx --> new className(args1 , arg2 ...... argsN);
// writing this new className() -- is techinallcy we are calling constructor here . and we know that if we did not pass the argument but our function except the argument to be passed in that case paramter will hold the undefined.

let productObj=new Product("iphone",123000,"phone","best phone",4.5,"red");
console.log("product obj is : ",productObj);



// this keyword .. --->

/**
 * we can acces this keyword anywhere in our code .. like outsiee any function , class , inside any class function etc.
 * in most of the cases this will refere to caller or call site.. and caller can be any thing like an object function , or even new keyword itself it referes to the entity which is calling the this keyword.
 */

let obj={
  x:10,
  y:20,
  fn:function (){
    console.log(this.x,this.y); // 10,20
  }
}
obj.fn(); // the caller here is obj...

let obj1={
  x:100,
  y:200,
  z:{
    x:99,
    fn:function (){
      console.log(this.x,this.y); 
    }
  }
}

obj1.z.fn(); // here caller is z because fn is called by z so output will 99,undefined.. because inside z there is no y so it will give undefined ..

// Note -> inside the arrow function this keyword will not refere to call site or caller. in case of arrow function this is resolved using lexical scoping --- and lexical scoping is if we did not found this in current scope then move one step up in outer scope.... and if we did not findd then at last -- this will refere to global or windo object ( in browser) and in node (global object)

let obj2={
  x:10,
  y:20,
  fn:()=>{
    console.log(this.x,this.y);
  },
  fn1:function (){
    const f=()=>{
      console.log("inner arrow");
      console.log(this.x,this.y);
    }
    f();
  }
}
obj2.fn(); // here fn is called by obj2 and it is arrow function so this will refere to windo object and there are no x and y property in iwndo object os ouput iwll be undefined undefined.
obj2.fn1(); // here caller is obj2 for fn1 and inside arrow function this is resolved lexically so we will move one scope up which is fn1 scope and for it this referes to obj2 so oput will be 10,20


class Student{

  constructor(name,age){
    this.name=name;
    this.age=age;
  }

  showName(){
    console.log("this inside showName : ",this);
    console.log(this.name);
  }
  // here show age is a arrow function and it is caled by stuobj which means this inside the arrow function resolved lexicaly so ultimately this will point to class since we know classes are nothing but a wrapper obver function.. so this inise the shwo age will point to student class object because inside class or constructor this point to newely created object.. where as this inside the show name will point ot stuObj...diretly..
  showAge=()=>{
    console.log("this insie shwo age is : \n",this); // this point ot student class.
    console.log(this.age);
  }
}
let stuObj=new Student("bingo",23);
stuObj.showAge();
stuObj.showName();

// 'showAge' is an arrow function, and it's defined as a class field.
// Arrow functions do not have their own 'this'; they capture it lexically from where they are defined.
// Since class fields are initialized during object creation (inside the constructor),
// the 'this' inside 'showAge' refers to the newly created object (i.e., stuObj).

// Similarly, 'showName' is a regular method. When called like 'stuObj.showName()', 
// 'this' also refers to stuObj — because the call site determines 'this' for normal functions.




