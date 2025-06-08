// ways to initalize data member --- 
/**
 * (1) either by using --- constructor.
 * (2) create the object of a class and then assgin the new property to it just we do for the normal object. if thre are multiple properties then we can create the object and pass it ot constructor. or assgined it to newely created object of a class
 * (3) by using getter and setter function.
 */

class Product{
  
  // member function..
  constructor(incomingName,incomingPrice){
    this.name=incomingName;
    this.price=incomingPrice;
  }

  // show product details.
  showProductDetails(){
    console.log("product details : ",this);
  }

  updateObj(obj){
    this.name=obj.name;
    this.price=obj.price;
    this.rating=obj.rating;
  }

  setName(incomingName){
    this.name=incomingName;
  }

  // no recustion with normal setter.... but but a nice problem will occure -- 
  setStock(incomingStock){
    this.setStock=incomingStock; // by doing this we are saying that setStock function is not incomingStock and its no loger a member function so in first case it might work proeprly and set the value of setStock as passed value but again when we call setStock() then we will get a error that setStock() is not a function --- so keep this also in mind............
  }

  // another way of using setter is :: 
  // keep in mind that if set function name is same as the property that we want to add then in that we will face a infinite recursion problem like this -- set color(incomingColor){this.color=incomingColor} in this case setter function name and the proeprty we want to add in object both are same so it will lead to infinite recustion when we will write this line this.color=incomingColor because it will call setter function color again and again... this problem will not arrived with normal setter function where we did not use set keyword...
  set colorValue(incomingColor){
    this.color=incomingColor;
  }
  get colorValue() {
    return this.color;
  }
}

let obj=new Product("iphone",12300);
console.log("obj : ",obj);

// (2) adding new property or proeprty manually.
obj.rating=4.5;
obj.showProductDetails();

// or creating a object and assigning to it ..
const tempObj={
  name:"samsung",
  price:45000,
  rating:5
}
// obj=tempObj; // show copy
// obj.showProductDetails();  // but the problem in this is we will loose the access of the object that is created using Product class so to avoid it is best to pass this objet in constructor and then assgine it insie the constructor by destructoring it..
// or we can create a setterFunction () to update the object of calls..

// (3) using setter function
obj.updateObj(tempObj);
obj.showProductDetails();

// another way of using setter is --- we can defaine individual getter and setter for each propty of object of a calss .. like setName() , getPrice() etc..

obj.setName("anki");
obj.showProductDetails();

obj.colorValue="red";
obj.showProductDetails();
console.log(obj.colorValue);

// obj.setStock(24);
// obj.showProductDetails();

// obj.setStock(50);
// obj.showProductDetails();

