console.log(typeof 'Hello');

//Node js: based on Event Driven/Non-blocing IO model
//Java script:  Dynamically typed
//--Object :
//dot notation
//bracket notation
//template literals


/**
 * Falsy values:
 * undefined
 * false
 * null
 * ' '
 * 0
 * NaN
 * 
 * Anything that is not falsy is truthy 
 */

 /**
  * let colors = ['red', 'green'];
  * for(let index in colors)
  * for(let color of colors) // use for array not for object
  * 
  * let person = {name:'sumit', age='20'}
  * for(let key in person)
  * 
  */


let person = {
    name:'Sumit',
    age:20
}

person.name = 'Anil';
console.log(person.name);

let x = 'name';
person[x]='Cutu';

console.log(person.name);

let y = function(){
    console.log("hello");
}


let Person = {name:'sumit', age:'20'}
   for(let key in Person){
       console.log(key);
   }


/**
 * OBJECT Oriented style programming
 */

 let circle = createCirle(1, {x:5, y:2}, [10,20]);

 circle.area();


 //Factory Function

 function createCirle(radius, location, size){
     return {
        radius:radius,
        /**Another object */
        location:location,
        /**Array */
        size:size,
        /**Function */
        area(){
            console.log('displaying area')
        }
    };
 }

 //Constructor Function

 function createCirleByConstructor(radius){
    return new Circle(radius);
 }

function Circle(radius, size){
    this.radius = radius;
    this.size = size;
    this.draw = function (){
        console.log('draw');
    }
}


const circle1 = new Circle(1);
const circle2 = new Circle(2);
console.log(circle1.constructor);

//check practically
Circle.call(x, 1, 2);
Circle.apply(x, [1, 2]);

/**
 * ********************************
 * Value Types    Reference Types
 * *******************************
 *  Number          Object
 *  String          Function (object)
 *  Boolean         Array (Object)
 *  Symbol (ES6)
 *  undefined
 *  null
 */

 /**Enumerating properties of an object */
 for(let key in circle)
 console.log(circle[key]);

 console.log('**************************');

 for(let key of Object.keys(circle))
 console.log(circle[key]);
 console.log('**************************');
 for(let entry of Object.entries(circle)){
 console.log(entry);
 }

 if('radius' in circle) console.log('yes');

 /**Cloning an object */

 const newCircle = Object.assign({
     color:'yellow'
 }, circle); // using object.assign
 console.log(newCircle);

 const newCircle1 = {...circle}; //using spread operator
 console.log(newCircle1);

 //using for looop
 const newCircle2 = {};
 for(let k in circle)
 newCircle2[k]=circle[k];
 console.log(newCircle2); 