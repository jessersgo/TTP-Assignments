//forEach()
function myEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i]);
    }
  }
   //checking 
  let nums = [1, 2, 3, 4, 5]; 
  myEach(numbers, function(number) {
    console.log(number); // 1 2 3 4 5
  })
  
  //map()
  function myMap(array, callback){
    const result = [];
    for(let i =0; i<array.length; i++){
        result[i] = callback(array[i]);
    }

    return result;
  }
//checking 
let numb = [1, 2, 3, 4, 5];
let doubledNumbers = myMap(numbers, function(number) {
  return number * 2;
});

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
  
//Filter() 
function myFilter(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) { //create a copy to push 
        result.push(array[i]);
      }
    }
    return result;
  }
  // checking 
  let numbs = [1, 2, 3, 4, 5];
  let evenNumbers = myFilter(numbers, function(number) {
    return number % 2 === 0;
  });
  console.log(evenNumbers); // [2, 4]
  
  //mySome()
  function mySome(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        return true;
      }
    }
    return false;
  }
   //checking 
  let number = [1, 2, 3, 4, 5];
  let hasEvenNumber = mySome(numbers, function(num) {
    return num % 2 === 0;
  });
  console.log(hasEvenNumber); // true
  
  //every() 
  function myEvery(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (!callback(array[i])) {
        return false;
      }
    }
    return true;
  }
   //checking 
  let numbr = [2, 4, 6, 8, 10];
  let allNumbersEven = myEvery(numbers, function(num) {
    return num % 2 === 0;
  });
  console.log(allNumbersEven); // true
  
  //reduce() 
  function myReduce(array, callback, initialValue) {
    let total = initialValue;
    for (let i = 0; i < array.length; i++) {
      total = callback(accumulator, array[i]);
    }
    return total;
  }
   //checking 
  let numbers = [1, 2, 3, 4, 5];
  let sum = myReduce(numbers, function(acc, num) {
    return acc + num;
  }, 0);
  console.log(sum); // 15
  
  //include() 
  function myIncludes(array, value) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return true;
      }
    }
    return false;
  }
   //checking 
  const fruit = ['apple', 'banana', 'orange', 'grape'];
  const hasBanana = myIncludes(fruits, 'banana');
  console.log(hasBanana); // true
  
  //indexOf() 
  function myIndexOf(array, target) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return i;
      }
    }
    return -1;
  }
   //checking 
  const fruta = ['apple', 'banana', 'orange', 'grape'];
  const indexOrange = myIndexOf(fruits, 'orange');
  console.log(indexOrange); // 2
  const indexPear = myIndexOf(fruits, 'pear');
  console.log(indexPear); // -1
  
  //push() 
  function myPush(array, elementToAdd) {
    array[array.length] = elementToAdd;
    return array.length;
  }
   //checking 
  let fruits = ['apple', 'banana'];
  let length = myPush(fruits, 'orange');
  console.log(fruits); // ['apple', 'banana', 'orange']
  console.log(length); // 3
  

//lastIndedOf()
function myLastIndexOf(array, target) {
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i] === target) {
        return i;
      }
    }
    return -1;
  }
 //checking 
  const animals = ['cat', 'dog', 'bird', 'dog', 'fish'];
  
  const lastIndexDog = myLastIndexOf(animals, 'dog');
  console.log(lastIndexDog); // 3
  
  const lastIndexCow = myLastIndexOf(animals, 'cow');
  console.log(lastIndexCow); // -1

  //object.Keys()
  function grabKeys(obj) {
    const keys = [];
    for (let key in obj) {
      keys.push(key);
    }
    return keys;
  } 
 //checking 
  const student = {
    firstname: 'John',
    lastname: 'Doe',
    age: 22,
    gender: 'male'
  };
  const keys = grabKeys(student);
  console.log(keys); // ['firstname', 'lastname', 'age', 'gender']
  
  //Object.values()
  function grabValues(obj) {
    const values = [];
    for (let key in obj) {
      values.push(obj[key]);
    }
    return values;
  }
  //checking
  const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020
  };
  const values = grabValues(car);
  console.log(values); // ["Toyota", "Corolla", 2020]

  //sum of a range problem
  const range = (start, end) => {
    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  };
  
  const sumT = (numbers) => numbers.reduce((total, num) => total + num, 0);
   
  //reversing an array problem 
  const reverseArray = (arr) => {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  };
  
  const reverseArrayInPlace = (array) => {
    const length = array.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
      const temp = array[i];
      array[i] = array[length - 1 - i]; //swarping in reverse order
      array[length - 1 - i] = temp;
    }
  };
  
  //a list problem 
  //create a list node and set to null
function createNode(value, next = null) {
    return { value, next };
  }
  
  //onvert an array to a list
  function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = createNode(array[i], list);
    }
    return list;
  }
  
  //convert a list to an array
  function listToArray(list) {
    let array = [];
    let node = list;
    while (node) {
      array.push(node.value);
      node = node.next;
    }
    return array;
  }
  
  //prepend function (element to list)
  function prepend(element, list) {
    return createNode(element, list);
  }
  
//deep equal problem 

function deepEqual(a, b) {
    //primitive values check
    if (a === b) {
      return true;
    }
  
    // null or object
    if (a === null || b === null) {
      return false;
    }
  
    // Check if both values are objects
    if (typeof a === "object" && typeof b === "object") {
      //property keys of objects to compare 
      const keysA = Object.keys(a);
      const keysB = Object.keys(b);
      if (keysA.length !== keysB.length) { //length to compare
        return false;
      }
      //compare
      for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
          return false;
        }
      }
      return true;
    }
  
    // Values are of different types and not equal
    return false;
  }
  
