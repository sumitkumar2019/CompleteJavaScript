// due to 'use strict' (Strict check) 'this' will be undefined not global object or window object
//(inside class body by default 'this' will be undefined): without 'use strict'
//'use strict'; 
/**ES6:ES2015: Classes */
class Circle{
    constructor(radius){
        this.radius = radius; //This will go inside Circle
        this.move = function (){ //This will go inside Circle
            console.log('move');
        }
    }

    /**Instance methods */
    draw(){ //This will go inside prototype __proto__
        console.log('draw');
    }

    /**static method */
    static parse(str){
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

const c = new Circle(10);
// const c = Circle(10); //without new :  Error 
console.log(typeof c); //object
console.log(typeof Circle); //function
c.draw();
c.move();
const b = Circle.parse('{ "radius":1 }');
console.log(b);

/**Hoisting
 * Function declaration can be hoisted
 * Function expression cannot be hoisted
 */

 sayHello(); //Function declaration can be hoisted
 
 //Function declaration: not terminated with ; 
 
 function sayHello(){
     console.log('sayHello');
 }

 // sayHi(); //ReferenceError: sayHi is not defined
 //Function expression: terminated with ; Function expression cannot be hoisted
 const sayHi = function(){
    console.log('sayHi');
};


 //Class declaration can not be hoisted

 // const a = new Rectange(); //ReferenceError: Rectange is not defined

//Class declaration
class Rectange{

}

//Class expression
const rectangle = class{

};

/**this keyword */
const Circle1 = function(){
    this.draw = function(){console.log(this)};
}

const c1 = new Circle1();
/**Method Call */
c1.draw(); // Circle object

const draw = c1.draw;
/**Method Call */
draw(); //Global object in node js or Window object in browsers

const c2 = Circle1(); // global object or window object because of no new operator

/**Symbols & private members using symbols */
//const _radius = new Symbol(); // Error if used with new operator: TypeError: Symbol is not a constructor

console.log(Symbol() === Symbol()); // Every Symbol is unique

const _radius = Symbol();
const _draw = Symbol();
class Circle2{
    constructor(radius){
        this[_radius] = radius;
    }

    [_draw](){
        console.log('_draw');
    }
}

const circle2 = new Circle2(10);
console.log(Object.getOwnPropertySymbols(circle2)); //[ Symbol() ]

const key = Object.getOwnPropertySymbols(circle2)[0];
console.log(key);
console.log(circle2[key]);

/**Weakmap & private members using weakmap */
const _radius1 = new WeakMap();
const _move1 = new WeakMap();
const privateProps = new WeakMap();
class Circle3{
    constructor(radius){
        privateProps.set(this, {   //not recommendable but can do like this(better will be seperate each properties as a weak map)
            radius:radius,
            move:()=>console.log(this, 'move')
        });
        _radius1.set(this, radius);  
        _move1.set(this, /**function(){
            console.log('move', this); //here 'this' will undefined because body of the class execute in strict mode
        } */
        ()=>console.log('move', this) // if we use arrow function then 'this' will be the Circle object
        );
        
        //Getter: Complex approach

        /**Object.defineProperties(this, 'radius', { 
            get: function(){
                return _radius1.get(this);
            }
        }); */  
    }

    draw(){
        console.log(_radius1.get(this));
    }

    move(){
        _move1.get(this)();
    }
    //Getter : Poor approach : for better approach 
    getRadius(){  // in this getter approach we need to call getRadius() method every time
        return _radius1.get(this);
    }
    /**Getters and Setters */

    //Getter: better approach : ES6 classes
    get radius() {
        return _radius1.get(this);
    }

    //Setter: better approach : ES6 classes
    set radius(radius) {
        if(radius<=0) throw new Error("invalid radius");
        _radius1.set(this, radius);
    }
}
const circle3 = new Circle3(10)
console.log(circle3);
circle3.draw();
circle3.move();
console.log(circle3.getRadius());
console.log(circle3.radius);
circle3.radius = 15;
console.log(circle3.radius);

/**Inheritance */

class A{
    constructor(color){
        this.color = color;
    }
    move(){
        console.log('move from A')
    }
}

class B extends A{
    constructor(color){
        super(color);
    }
    /**Method overriding */
    move(){
        super.move();
        console.log('move from B');
    }
    draw(){
        console.log('draw from B')
    }
}

const z = new B('red');
z.move();
z.draw();
console.log(z);


