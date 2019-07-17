/**Creating an Object using Object literals */

const a={}; // {} - This is a object literal

const circle = { // An obect has members like properties and methods

    //properties of an object
    radius:1,
    location:{
        x:1,
        y:2
    },
    //Technically this should be called as method instead of function 
    //because it is inside an object
    draw: function(){ 
        console.log('draw');
    }
};

circle.draw();
console.log(circle.constructor);
/**Creating an Object using Factories */

function createCirle(radius, location){
    return {
        radius:radius,
        location:location,
        draw(){
            console.log('draw from factory created object');
        }
    };
}

const circle1 = createCirle(5, {x:1, y:2});
circle1.draw();
console.log(circle1.constructor);

/**Creating an Object using Constructors function*/
function Circle(radius){
    //console.log('this', this);
    this.radius = radius;
    this.draw = function (){console.log('draw from constructor')}
}


const circle2 = new Circle(2); //create an object using constructor
const circle3 = Circle(2); //treat regular function instead constructor global object will get modify instead of creating an object

circle2.draw();
console.log(circle2.constructor);

/**Built in Constructors */

new Object(); //when we create an object using object literals let x ={},  internally it call new Object()
new String();
new Boolean();
new Number();

/**Functions are Objects: calling its inbuilt properties and methods */

console.log(Circle.name);
console.log(Circle.constructor);
console.log(Circle.length);
console.log(Circle.prototype);

/** If the function f was invoked by the top level code, the value of f.caller is null ,
 *  otherwise it's the function that called f . 
 * This property replaces the obsolete arguments.caller property of the arguments object */
console.log(Circle.caller);
console.log(Circle.toString());

Circle.call({x:1}, 1);
Circle.apply({x:1}, [1]);
Circle.bind({x:1})();

const Circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function (){console.log('draw from Funtion constructor')};
`);

const circle4 = new Circle1(1);
console.log(circle4.constructor);
console.log(circle4);
circle4.draw();


/**Value Types vs Reference Types */

//Primitive type: Copied by value: Call by value

let x =10;
let y =x;
x=20;
console.log(x);
console.log(y);

//Reference type : Copied by reference: Call by reference

let k = {x:20};
let l = k;
 k.x=30;

console.log(k);
console.log(l);

/**Adding properties of an object */

circle.size=10;
console.log(circle);

// we can easily use bracket notation for properties which have (space or - or special character)
const propertyName = 'diameter length'; 
circle[propertyName] = 20;
console.log(circle);

/**Removing properties of an object */
delete circle.size;
console.log(circle);

/**Enumerating properties */

for(key in circle) {
    if(typeof circle[key] !== 'function'){
    console.log('key: '+ key +' value: ' + circle[key]);
    }   
}

const keys = Object.keys(circle);
console.log(keys);
const values = Object.values(circle);
console.log(values);
const entries = Object.entries(circle);
console.log(entries);

if('radius' in circle) console.log('circle has a radius');

/**Abstraction: Hide the details-Show the essentials 
 * Private properties and methods using let instead of this
 * Closure properties
 * */

 function Circle9(radius){
    this.radius = radius;
    let defaultLocation = {x:10,y:10}; // Private attribute
    let computeLocation = function(){console.log('private compute location method')};// Private method
    this.draw = function(){ //child funtion
        let x,y; /// local scope variable and will garbage collected
        console.log(defaultLocation);///closure properties from parent object and they will stay in memory
        computeLocation(); ///closure properties from parent object  and they will stay in memory
        console.log('draw');
    }
 }

 const circle9 = new Circle9(5);
 circle9.draw();