/**
 * ***********
 * Prototypes: 
 * ***********
 * means Parent(it is just a regular object)
 * Every object has a prototype except root
 * 
 * *************************
 * Prototypical Inheritence:
 * *************************
 * 
 * */
let x = {};
let y = {};

console.log(Object.getPrototypeOf(x)===Object.getPrototypeOf(y));

console.log(x.__proto__===y.__proto__); //This is deprecated recommended to be no use

//here every object is inherited from a prototype:parent object i.e Object
//x-->Object(__proto__) - Prototype
//y--> Object(__proto__)- Prototype

/**Multilevel Inheritence */

function Circle(radius){
    //Instance members
    this.radius = radius;
    this.draw = function (){
        console.log('draw');
    }
}

const circle = new Circle(5);
console.log(Object.getPrototypeOf(circle));

console.log(Object.getPrototypeOf(circle)===Object.getPrototypeOf(y));

console.log(circle.__proto__===y.__proto__); //This is deprecated recommended to be no use

//Now let us check one level up
// we can easily verify here multilevel inheritence where circle-->Circle-->Object
console.log(circle.__proto__.__proto__===y.__proto__); 

/**Property Descriptors */

let person = {name:'Sumit'};
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);
Object.defineProperty(person, 'name', {
    writable:false, // we cannot write
    enumerable:true, // we cannot iterate
    configurable:false // we cannot configure the property eg: can't delete
});
person.name = 'JOHN';
console.log(person);
console.log(Object.keys(person));
delete person.name;
console.log(person);

let nameDescriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log(nameDescriptor);

/**Constructor Prototypes */

console.log(circle.__proto__ === Circle.prototype);


/**Prototype and Instance members*/

//Prototype members
Circle.prototype.draw1 = function(){
    console.log('draw1');
}
const c1 = new Circle(1);
console.log(c1);
console.log(c1.__proto__);
console.log(c1.__proto__.draw1());
console.log(c1.draw1());

/**Iterating instance and Prototype members */
//it will only return keys associated to the Circle object (Instance memebers)not __proto__ object(Prototype members)
console.log(Object.keys(c1)); //[ 'radius', 'draw' ] - draw1 is not available because its a prototype's method

for(let key in c1) console.log(key); // it returns instance + prototype memebers

console.log(c1.hasOwnProperty('radius')); // instance memeber : true
console.log(c1.hasOwnProperty('draw')); // instance memeber : true
console.log(c1.hasOwnProperty('draw1'));// Prototype memeber : false

/**We can extend built in object 
 *          but 
 * Avoid extending built in objects: 
 * Don't modify object you don't own 
 * */
