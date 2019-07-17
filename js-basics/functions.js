/**Function declaration vs Expression */
function walk(){
    console.log('walk');
}
/**Named Function */
let x = function run(){
    console.log('run');
};
/**Anonymous Function */
let run = function(){
    console.log('run');
};
walk();run();x();

/**Hoisting: Moving function declaration to the top of the file automatically by javascript 
 * (not work in case of function expression)
 * */

a();

function a(){
    console.log('a');
}
/**Arguments */
function sum(a, b){
    console.log(arguments);
    return a+b;
}

function add(){
    console.log(arguments);
    let total = 0;
    for(let value of arguments) total+=value;
    return total;
}
console.log(sum());//undefined +undefined = NaN
console.log(sum(1));//1 +undefined = NaN
console.log(sum(1,2))
console.log(add(1,2,3,4,5))

/**The Rest operator (not spread operator: Don't confuse)
 * The Rest operator parameter should be the last parameter(Rest of the parameters) in method always else error
*/
function add1(...args){
    return args.reduce((a,b)=>a+b);
}
console.log(add1(1,2,3,4,5))

function sum1(discount, ...prices){
    total = prices.reduce((a,c)=>a+c);
    return total * (1-discount);
}

console.log(sum1(0.1, 20,30));

/**Default Parameters */

function add3(x=3,y,z=5){
    return x+y+z;
}
console.log(add3(20,30));
console.log(add3(undefined,20,30));
console.log(add3(10,20,undefined));
console.log(add3(10));

/**Getter and Setters */

const employee = {
    firstName:'Sumit',
    lastName:'Kumar',
    get fullName(){
        return `${employee.firstName} ${employee.lastName}`;
    },
    set fullName(value){
    /**Exception handling with try catch and throw exception */
        if(typeof value !=='string') throw new Error('Value is not a String');

        const parts = value.split(' ');

        if(parts.length !== 2) throw new Error('Enter a first and a last name');

        employee.firstName = parts[0];
        employee.lastName = parts[1];
    }
}

employee.fullName = 'Anil Kumar';
/**Try and catch */
try{
    employee.fullName = 'Ram chandra bhansal';
}catch(e){
    console.log(e.message);
}


console.log(employee.fullName);


/**Local vs Global Scope */
const message = 'Hi';
console.log(message);

//blocked scope
{
    const message1 = 'Hello';
}
///console.log(message1); //ReferenceError: message1 is not defined

//local variable take precedence over global variable

const message2 = 'I am Global variable';
function a1(){
    console.log(message2);
}
function a2(){
    console.log(message2);
}
function a3(){
    const message2 = 'I am Local variable'
    console.log(message2);
}

a1();
a2();
a3();

/**let vs var 
 * let and const: create block scope variable (ES2015:ES6)
 * var: create function scope variable  
*/
function letstart(){
    for(let i=0; i<5; i++){
        console.log(i);
    }
   // console.log(i); // In case of let://ReferenceError: i is not defined
}
function varstart(){
    for(var i=0; i<5; i++){
        console.log(i);
    }
    console.log(i); // In case of var it will run without issue
    
}
// console.log(i); //Due to function scope:// In case of let or var://ReferenceError: i is not defined
{
    var m = 'access';
}
console.log(m); // allowed due to block scope
letstart();
varstart();

/**this keyword : see output to understand which one returns what*/
const video ={
    title:'a',
    tags:['a', 'b', 'c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this, tag); // here this is global object: it print 3 times global object
        });
    },
    showTags2(){
        this.tags.forEach(function(tag){
            console.log(this, tag); // here this is current object: it print 3 times current object
        }, this); // because of second argument to for each loop which takes an object
    },
    play(){
        console.log(this);
    }
};
video.play();
video.showTags();
video.showTags2();
function playVideo(){
    console.log(this);    
}
playVideo();
function Video(title){
    this.title = title;
    console.log(this);    
}
const v = new Video('a');

console.log(this);
video.showTags();
video.showTags2();

/**Changing this: Solution 1: not a prefered approach but why ?  */

const video1 = {
    title:'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        const that = this;
        this.tags.forEach(function(tag){
            console.log(that.title,tag);
        });
    }
};
video1.showTags();


/**Changing this: Solution 2 : using call, apply, bind functions*/
function playVideo5(a, b){
    console.log(this);
}

playVideo5();//call global oject
playVideo5.call({name:'sumit'}, 1,2);//call specified oject in first argument of call with comma sepereated argument
playVideo5.apply({name:'sumit'},[1,2]);//call specified oject in first argument of call with array based argument
playVideo5.bind({name:'sumit'})();

const video2 = {
    title:'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title,tag);
        }.bind(this));
    }
};
video2.showTags();

/**Changing this: Solution 3 : using arrow function from ECMA2015 ES6*/

const video3 = {
    title:'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach(tag=>
            console.log(this.title,tag) /// arrow function will inherit this object from the top
        );
    }
};
video3.showTags();
