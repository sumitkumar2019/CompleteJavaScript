/**
 * ***********************
 * Modules: Advantages:-
 * *********************** 
 * Increase maintainibility
 * Reuse
 * Abstract
 * 
 * *********************
 * Available Modules:-
 * *********************
 * AMD: Asynchronous module definition : used in browser only
 * UMD: Universal module definition : used in browser/Node js
 * *********************
 * CommonJS: : used in node js only
 * ES6 Modules: from ES6 javascript natively supports modules : used in browsers
 * *********************
*/

/**Common JS modules */
const Circle = require('./index.js');

const c = new Circle(10);
c.draw();
console.log(c);

/**ES6 Modules: not work with node:  see es6module.js and index.html
 * 
 * special note: define type="module" in src tag of html page where we are loading the script file
 * <script type="module" src="es6module.js"></script>
 * 
*/
