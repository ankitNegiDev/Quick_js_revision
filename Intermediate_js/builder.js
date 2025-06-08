// // builder desgn patrn

// class Product{
//   // data member

//   // member function
//   constructor(builder){
//     // validation for product name 
//     console.log(builder.name);
//     if(builder.name.length===0 || builder.name.length>100){
//       console.log("product name is not valid");
//     }
//     this.name=builder.name;
//     if(builder.price<0){
//       console.log("product price is not valid");
//     }
//     this.price=builder.price;
//     this.rating=builder.rating;
//     this.color=builder.color;
//     this.description=builder.description;
//     this.category=builder.category;
//     this.brand=builder.brand;
//   }

//   showProductDetails(){
//     console.log("product details : ",this);
//   }

//   // custom getter and setter...
//   setName (incomingName){
//     this.name=incomingName;
//   }
//   getName(){
//     return this.name;
//   }

//   set priceValue(incomingPrice){
//     if(incomingPrice>0){
//       this.price=incomingPrice;
//     }
//   }
//   get priceValue(){
//     return this.price;
//   }
// }
// let productObj=new Product({
//   name:"iphone",
//   price:123000,
//   rating:4.5,
//   color:"red",
//   description:"best phone",
//   category:"phone",
//   brand:"apple"
// });
// productObj.showProductDetails();
// productObj.setName("samsung");
// productObj.priceValue=100000;
// productObj.showProductDetails();
// productObj.getName();
// console.log(productObj.price);

// more improve --


class Product {
  // data member
  // #name;
  // #price;
  // #rating;
  // #color;
  // #description;
  // #category;
  // #brand;
  // if we make them private then we can't access these data member or proptery outside the class so we need to use getter and setter to access these data member outside the class.
  

  // member functions

  constructor(builder){
    // some validation -- 
    if(builder.name.length===0 || builder.name.length>100){
      console.log("product name is not valid");
    }
    this.name=builder.name;
    if(builder.price<0){
      console.log("sorry price can't be in -ve");
    }
    this.price=builder.price;
    this.rating=builder.rating;
    this.color=builder.color;
    this.description=builder.description;
    this.category=builder.category;
    this.brand=builder.brand;
  }

  // creating a static getter Builder method to create a builder object
  static get Builder(){
    // creating a builder class here
    class Builder{

      // data member


      // member function 
      constructor(){
        // setting default values 
        this.name="";
        this.price=0;
        this.rating=0;
        this.color="";
        this.description="";
        this.category="";
        this.brand="";
      }

      // now creating the getter and setter..
      setName(incomingName){
        this.name=incomingName;
        return this;
      }
      // to set the prive
      setPrice(incomingPrice){
        this.price=incomingPrice;
        return this;
      }
      setRating(incomingRating){
        this.rating=incomingRating;
        return this;
      }
      setColor(incomingColor){
        this.color=incomingColor;
        return this;
      }
      setDescription(incomingDescription){
        this.description=incomingDescription;
        return this;
      }
      setCategory(incomingCategory){
        this.category=incomingCategory;
        return this;
      }
      setBrand(incomingBrand){
        this.brand=incomingBrand;
        return this; // here it will point to builder class objec t... 
      }

      // now we will create a build method to create a product object
      build(){
        return new Product(this);
      }
    }
    // returning the class fro mhere 
    return Builder;
  }
  showProductDetails(){
    console.log("product details : ",this);
  }
}

// here if we do Product or className.Builder then it will call the static getter method and it will return the builder class.. but if we want to call the constructor of Builder call then we need to do like this new Product.Builder() and it will call the constructor of Builder class. and it have setter to set price ,name etcc and these setter again return the builder class object so we can do chaining here and at last we will call the build method which will return the product object.
let productObj= new Product.Builder().setName("iphone").setPrice(123000).setRating(4.5).setColor("red").setDescription("best phone").setCategory("phone").setBrand("apple").build();
productObj.showProductDetails();

