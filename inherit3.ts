class Person {
    _name: string;
    _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }
}

class Employee extends Person {
    _salary: number
    constructor(name: string, age: number, salary: number) {
        super(name, age);
        this._salary = salary;
    }
}

let emp = new Employee("Nark Sakaberg", 25, 35000);
console.log(`${emp._name} ${emp._age} ${emp._salary}`);