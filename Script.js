//1.Class - Movie
class movie{
  constructor(title,studio,rating){
  this.title=title
  this.studio=studio
  this.rating=rating
  }
  getPG(){
      console.log(`Title: ${this.title}`);
      console.log(`Studio: ${this.studio}`);
      console.log(`Rating: ${this.rating}`);
  }
  setPG(){
    return this.rating
    }
  
  }
var a = new movie("Casino Royale", "Eon production", "PG13");
a.getPG();
console.log(a.setPG());


//2.Class - circle
//2.a
class circle{
  constructor(){

  }
  }
var a = new circle();
console.log(a);

//2.b
var double = Number.parseFloat(1.0).toFixed(1);
class circle{
  constructor(radius){
    this.radius=radius
  }
  }
var a = new circle(double);
console.log(a);

//2.c
var double = Number.parseFloat(1.0).toFixed(1);
class circle{
  constructor(radius, color){
    this.radius=radius
    this.color=color
  }
  }
var a = new circle(double,"red");
console.log(a);


//2d,2e,2f,2g,2h,2i,2j
var double = Number.parseFloat(1.0).toFixed(1);
var double1 = Number.parseFloat(2.5).toFixed(1);
class circle{
  constructor(radius, color){
    this.radius=radius
    this.color=color
  }
  getRadius(){
    return this.radius
    }
  setRadius(radius){
    this.radius=radius
    return radius
    }
  getColor(){
    return this.color
    }
  setColor(color){
    this.color=color
    return color
    }
  tostring(){
    var str =(`"circle[radius: ${this.radius},colour: ${this.color}]"`);
    return str;
    }
  getArea(){
    return Math.PI*double*double;
    }
  getCircumference(){
    return 2*Math.PI*double;
    }
  }
var a = new circle(double,"red");
console.log(a.getRadius());
console.log(a.setRadius(double1));
console.log(a.getColor());
console.log(a.setColor("blue"));
console.log(a.tostring());
console.log(a.getArea());
console.log(a.getCircumference());



// 3. Write a “person” class to hold all the details.
class Person {
    constructor(name, age, address, gender, contactNo, qualification) {
      this.name = name;
      this.age = age;
      this.address = address;
      this.gender = gender;
      this.contactNo = contactNo;
      this.qualification = qualification;
    }
  
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Address: ${this.address}`);
      console.log(`Gender: ${this.gender}`);
      console.log(`ContactNo: ${this.contactNo}`);
      console.log(`qualification: ${this.qualification}`);
    }
  }
  
  var person1 = new Person("Jebamani", 28, "Chennai", "Male", 7397651756, "BE");
  
  console.log("Person 1 Details:");
  person1.displayDetails()


//4. write a class to calculate the Uber price.
  class price{
    constructor(perKmRate,km){
    this.perKmRate=perKmRate  
    this.km=km
    }
    uperPrice(){
      return this.perKmRate*this.km
    
    }
    
    }
  var value = new price(15,20);
  console.log(value.uperPrice());
