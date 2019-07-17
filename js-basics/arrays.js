const numbers = [1,2];

//**Adding new element: End */
numbers.push(3,4);
numbers.push(5);
console.log(numbers);

//**Adding new element: Begining */
numbers.unshift(0);
numbers.unshift(0,1);
console.log(numbers);

//**Adding new element: Middle*/
numbers.splice(2,0,'a', 'b');
console.log(numbers);
numbers.splice(2,1,'c', 'd');
console.log(numbers);
/*******************************/

//**Finding element: Primitives */

console.log(numbers.indexOf('a'));
console.log(numbers.indexOf(1));
console.log(numbers.indexOf(1,2));
console.log(numbers.indexOf('c'));

console.log(numbers.lastIndexOf(0));
console.log(numbers.indexOf(5) !== -1);
console.log(numbers.includes(1));
console.log(numbers.includes('a'));

//**Finding element: References */

const courses = [{id:1, name:'a'},{id:1, name:'b'},{id:1, name:'c'}];
console.log(courses.find(function(course){return course.name === 'a'}));
console.log(courses.findIndex(function(course){return course.name === 'a'}));
console.log(courses.find(course=>course.name === 'a'));
console.log(courses.findIndex(course=>course.name === 'a'));

//**Removing element : End*/
console.log(numbers.pop());
//**Removing element: Begining */
console.log(numbers.shift());
//**Removing element: Middle */
console.log(numbers.splice(2,1));
console.log(numbers);

//**Empty an array*/
let numbers1 = [1,2,3];
let another = numbers1;
let another1 = numbers1;
let another2 = numbers1;
numbers1 = [];
console.log(numbers1);
console.log(another.length=0);
console.log(another);
console.log(another1.splice(0, another1.length));

while(another2.length>0)
another2.pop();
console.log(another2);

//**Combining and slicing an arrays */

const first = [1,2,3];
const second = [4,5,6];
const third = [{id:1}];

const combined = first.concat(second).concat(third);
console.log(combined);
console.log(combined.slice(2,4));
console.log(combined.slice(6,7));

//**Spread operator */
const concatnated = [...first, ...second];
console.log(concatnated);
console.log(concatnated.slice());

//**Iterating an array */
concatnated.forEach(i => console.log(i));

concatnated.forEach((i, index) => console.log(i, index));

for(let number of numbers)console.log(number);

//**Joining an array */
console.log(concatnated.join(','));

//**Spliting as an array */
const str = "This is a String";
const splitArray = str.split(' ');
console.log(splitArray);

console.log(splitArray.join('-'));

//**Sorting as an array */
const numberArray = [3,1,2];
numberArray.sort();
console.log(numberArray);
numberArray.reverse();
console.log(numberArray);

const courses1 = [{id:1, name:'Node JS'},{id:2, name:'Java'}];
console.log(courses1.sort((x, y)=>{
    const a = x.name.toUpperCase();
    const b = y.name.toUpperCase();
    if(a < b) return -1;
    if(a > b) return 1;
    if(a == b) return 0;
}));

//**Testing elements of an array */
const everyValues = [1,2,3,4,5];
const someValues = [1,2,3,-4,5];

const allPositives = everyValues.every(value => value>=0);
const somePositives = someValues.some(value => value>=0);

console.log(allPositives);
console.log(somePositives);

console.log(someValues.every(value => value>=0));
console.log(everyValues.some(value => value>=0));

//**Filtering an array */

const filteredArray = someValues.filter(value=>value>=0);
console.log(filteredArray);

//**Mapping an array */

const mappedArray = filteredArray.map(value=>'<li>' + value + '</li>');
const html = mappedArray.join(' ');
console.log(html);

const mappedArray1 = someValues
                        .filter(value=>value>=0)
                        .map(value=>({value: value}))
                        .filter(obj=>obj.value>1)
                        .map(obj=>obj.value);
console.log(mappedArray1);

//**Reducing an array */
const result = someValues.reduce((accumlator, currentValue)=>accumlator+currentValue,0);
console.log(result);