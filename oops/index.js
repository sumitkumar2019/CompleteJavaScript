//procedural way
let baseSalary = 30000;
let overtime = 30;
let rate = 20;

function getWage(baseSalary, overtime, rate){
    return baseSalary+(overtime*rate);
}

///Object oriented way
let employee = {
    baseSalary:30000,
    overtime:30,
    rate:20,
    /**Best functions are those which have no parameters: Uncle Bob */
    getWage:function(){
        return this.baseSalary+(this.overtime*this.rate);
    }
};

console.log(employee.getWage());