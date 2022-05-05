"use strict";
// Basic Types
let id = 5;
let company = 'TS Course';
let isPublished = true;
let x = 'Hello';
// x = true;
// x = 3;
// Initialize
// let age: number;
// age = 21;
// age = '21';
// With arrays 
// We specify the value types we want inside the array and then we add a pair of brackets
let ids = [1, 2, 3, 4];
// ids.push('Hello'); // Error
let arr = [1, true, 'Hello'];
// Tuple
// Need to place the values on the exact spot 
let person = [1, 'Hi', false];
// let person: [number, string, boolean] = [1, 'Hi', 2]; // err
// let person: [number, string, boolean] = [true, 'Hi', false]; // err
// let person: [number, string, boolean] = ['Hello', 'Hi', false]; // err
// Tuple Array
let employee;
employee = [
    [1, 'Hi'],
    [2, 'Hello'],
    // [true, 'Hi'] // err
];
// Union
// If u want a particular variable to be able to hold more than one type u can do that with an union
let pid;
pid = 22;
pid = '22';
// Enum
// Allows us to define a set of named constants either numeric or string
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
;
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
;
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion
// Tells the compiler that we want to treat an entity as a different type
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
// Functions
// function addNum(x: parameterType, y: parameterType): returnType {}
function addNum(x, y) {
    return x + y;
}
;
// console.log(addNum(1, 2));
// console.log(addNum(1, '2')); // err
// Void
// void is used where there is no data. For example, if a function does not return any value then you can specify void as return type.
function log(msg) {
    console.log(msg);
}
const user1 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad');
const mike = new Person(2, 'Mike');
// console.log(brad, mike);
// console.log(brad.register());
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp1 = new Employee(1, 'Eduardo', 'Boss');
// console.log(emp1);
// console.log(emp1.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 2, 3, 4]);
let strArr = getArray(['Hi', 'Hello', 'June']);
