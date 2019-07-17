
//Circle.prototype.constructor = Circle (before): new Circle.prototype.constructor(10)
//Circle.prototype.constructor = Shape (now)
//Circle.prototype = Object.create(Shape.prototype);
//console.log(new Circle.prototype.constructor(10));
//To get rid of Shape contructor object instead of circle we need to explicitly assign it to Circle Constructor
//Circle.prototype.constructor = Circle;
//console.log(new Circle.prototype.constructor(10));


/**Intermediate Function Inheritance */

function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);  /**Create your own Prototypical  Inheritence*/
    Child.prototype.constructor = Child; /**Resetting the constructors */
}

function Circle(radius, color){
    Shape.call(this, color); /**calling the super constructor */
    this.radius = radius;
}

function Shape(color){
    this.color = color;
}

function Square(size){
    this.size =size;
}

Circle.prototype.draw = function(){
    console.log('draw prtotype method'); 
}

Shape.prototype.duplicate = function(){
    console.log(' Shape duplicate prtotype method'); 
}

extend(Circle, Shape);

//must declare after extending from shape otherwise it will disappear
/**Method  Overriding*/
Circle.prototype.duplicate = function(){
    //Shape.prototype.duplicate.call(this); // in case if we need to call super method
    console.log(' Circle duplicate prtotype method'); 
}

extend(Square, Shape);

/**Method  Overriding*/
Square.prototype.duplicate = function(){
    console.log(' Square duplicate prtotype method'); 
}

const shape = new Shape(10, 'red');
const circle = new Circle(10, 'red');

console.log(circle);
console.log(circle.__proto__);
console.log(shape.duplicate()); // it will execute duplicate method from shape: due to method overidding
console.log(circle.__proto__.duplicate());
console.log(circle.duplicate()); // it will execute duplicate method from circle: due to method overidding

const s = new Square(10);
console.log(s);

/**Polymorphism */
const shapes = [new Shape(), new Circle(), new Square()];
for(let shape of shapes) shape.duplicate();

/**Mixins :Composition */
const canEat = {
    eat: function(){
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function(){
        console.log('walking');
    }
};

const o = Object.assign({}, canEat, canWalk);
console.log(o);

function Person(){}

const person = Object.assign(new Person(), canEat, canWalk);
console.log(person);

Object.assign(Person.prototype, canEat, canWalk);
const person1 = new Person();
console.log(person1);
console.log(person1.__proto__);

/**in general Mixin: */
function mixin(target, ...sources){
    Object.assign(target, ...sources);
}

function GoldFish(){}

mixin(GoldFish.prototype, canEat, canWalk);
const goldfish = new GoldFish();
console.log(goldfish);
console.log(goldfish.__proto__);

