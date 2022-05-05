// Basic Types
let id: number = 5;
let company: string = 'TS Course';
let isPublished: boolean = true;
let x: any = 'Hello';
// x = true;
// x = 3;

// Initialize
// let age: number;
// age = 21;
// age = '21';

// With arrays 
// We specify the value types we want inside the array and then we add a pair of brackets
let ids: number[] = [1, 2, 3, 4];
// ids.push('Hello'); // Error
let arr: any[] = [1, true, 'Hello'];

// Tuple
// Need to place the values on the exact spot 
let person: [number, string, boolean] = [1, 'Hi', false];
// let person: [number, string, boolean] = [1, 'Hi', 2]; // err
// let person: [number, string, boolean] = [true, 'Hi', false]; // err
// let person: [number, string, boolean] = ['Hello', 'Hi', false]; // err

// Tuple Array
let employee: [number, string][];

employee = [
  [1, 'Hi'],
  [2, 'Hello'],
  // [true, 'Hi'] // err
]

// Union
// If u want a particular variable to be able to hold more than one type u can do that with an union
let pid: string | number;

pid = 22;
pid = '22';

// Enum
// Allows us to define a set of named constants either numeric or string
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
};

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
};

// Objects
type User = {
  id: number,
  name: string
}

const user: User = {
  id: 1,
  name: 'John'
};

// Type Assertion
// Tells the compiler that we want to treat an entity as a different type
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

// Functions
// function addNum(x: parameterType, y: parameterType): returnType {}
function addNum(x: number, y: number): number {
  return x + y;
};

// console.log(addNum(1, 2));
// console.log(addNum(1, '2')); // err

// Void
// void is used where there is no data. For example, if a function does not return any value then you can specify void as return type.
function log(msg: string | number): void {
  console.log(msg);
}

// Interfaces
interface UserInterface {
  // readonly
  readonly id: number,
  name: string,
  // Optional properties ↓
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: 'John'
};

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number,
  name: string,
  register(): string,
}

// Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp1 = new Employee(1, 'Eduardo', 'Boss');
// console.log(emp1);
// console.log(emp1.register());

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArr = getArray<number>([1, 2, 3, 4]);
let strArr = getArray<string>(['Hi', 'Hello', 'June']);
