//ES6 Modules : used with browser : by default everything in this file is private
//Implementation details: hidden: private properties
const _radius = new WeakMap();
const _move = new WeakMap();
const privateProps = new WeakMap();
//Public Interface: exposed
export class Circle{
    constructor(radius){
        privateProps.set(this, {   //not recommendable but can do like this(better will be seperate each properties as a weak map)
            radius:radius,
            move:()=>console.log(this, 'move')
        });
        _radius.set(this, radius);  
        _move.set(this, /**function(){
            console.log('move', this); //here 'this' will undefined because body of the class execute in strict mode
        } */
        ()=>console.log('move', this) // if we use arrow function then 'this' will be the Circle object
        );
    }

    draw(){
        console.log(_radius.get(this));
    }

    move(){
        _move.get(this)();
    }
    //Getter : Poor approach : for better approach 
    getRadius(){  // in this getter approach we need to call getRadius() method every time
        return _radius.get(this);
    }
    /**Getters and Setters */

    //Getter: better approach : ES6 classes
    get radius() {
        return _radius.get(this);
    }

    //Setter: better approach : ES6 classes
    set radius(radius) {
        if(radius<=0) throw new Error("invalid radius");
        _radius.set(this, radius);
    }
}