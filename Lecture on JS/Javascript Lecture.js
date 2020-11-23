class Person {
    // in Python `def __init__(self, ...):`
    constructor(firstName, lastName, email, hairColor = 'black') {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.hairColor = hairColor;
    }
    //say the name 
    sayName() {
      console.log('My name is ' + this.firstName);
    }
  //getter method
  get fullName(){
      return this.firstName + ' ' +this.lastName;
  }
}

//creating a new person -- this does't give any good extra functionality
    const griffin = new Person('Griffin', 'McManus', 'g@m.com', 'red')

    // if we don't want it default
    griffin.hairColor = 'red';

    console.log(griffin);

    // this is a JavaScript getter
    get fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  //-- this does't give any good extra functionality ^^^
  class Course {
    constructor(name, teacher, day, time) {
      this.name = name;
      this.teacher = teacher;
      this.day = day;
      this.time = time;
    }
  }
  
  // in Python `class Student(Person):`, student inherits from Person
  class Student extends Person {
    constructor(firstName, lastName, email, hairColor) {
      super(firstName, lastName, email, hairColor);
  
      this.courses = [];
    }
  //methods within the class
    addCourse(course) {
      this.courses.push(course);
    }
  }

  const griffin = new Student('Griffin', 'McManus', 'g@m.com');
  const morley = new Person('Morley', 'Tatro', 'm@t.com');
  const edward = new Person('Edward', 'Im', 'e@i.com');
  
  const mern = new Course('MERN', morley, 'M-F', '9:00 AM');
  const java = new Course('Java', edward, 'M-F', '9:00 AM');
  
  griffin.addCourse(java);
  griffin.addCourse(mern);
  
  console.log(griffin.courses[0].teacher.fullName);

  /**
 * Array.prototype.forEach
 * calls a given function against each array element
 */

const arr = [1, 2, 3, 4, 5];

// for(let i = 0; i < arr.length; i++) {
//   console.log('The number is ' + arr[i]);
// }
const myCallback = (value, index, arr) => {
  console.log('The number is ' + value + '; the index is ' + index);
  console.log('The original array is ' + arr);
}

arr.forEach(myCallback);

// in Python, we would do for user in users:

/**
 * Array.prototype.map
 * creates a NEW array
 * by invoking the callback function against each array element
 */

// const multipliedByTwo = [];

// for(let i = 0; i < arr.length; i++) {
//   const newVal = arr[i] * 2;
//   multipliedByTwo.push(newVal);
// }

// console.log(multipliedByTwo);

const multiplyByTwo = num => num * 2

// const isTrue = true
//   ? 'yes it is true'
//   : 'no, it is false'

// console.log(isTrue);

const multipliedByTwo = arr.map(multiplyByTwo);
console.log(multipliedByTwo);

/**
 * Array.prototype.filter
 * creates a NEW array
 * with ONLY the elements that meet a certain condition
 * the callback function must return a boolean
 */

// const evens = [];

// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] % 2 === 0) {
//     evens.push(arr[i]);
//   }
// }

// console.log(evens);
// const isEven = num => num % 2 === 0

function isEven(num) {
  return num % 2 === 0;
}

const evens = arr.filter(isEven);

console.log(evens);

// the original array remains unaltered
// .map and .filter create new arrays
console.log('the original is ', arr);