// filter method
function filterMethod(input1) {
   // input1 = any number
   var k = [13, 24, 18, 57, 4, 59, input1]; // original array
   k.filter = function (callback) {
      var newArr = []; // creates a new empty array

      // will go through each element (num) one by by in the array above
      for (let i = 0; i < k.length; i++) if (callback(k[i])) newArr.push(k[i]); // if the num in the array is divisable by 3, then it will pushed into the new array
      return newArr;
   };
   // below is the callback (a function that is executed after another function has finished executing)
   // the var divByThree takes the array and filters out the numbers that are divisable by 3
   // ... it basically returns the elements in the array that meet the condion of the callback
   var divByThree = k.filter(function (num) {
      return num % 3 === 0; // takes the num, divides it by 3. if the num is didsable by 3, no remainder = true.
   });
   return divByThree;
}

// slice
function sliceArr(input1, input2) {
   // input1 (argument 1) = gives the index of where to begin the slice
   // input2 (argument 2) = gives the index of where to end the slice (non -inclusise)
   let chips = ["Doritos", "Cheetos", "Pringles", "Ruffles", "Lay's"];

   let newChipsArr = chips.slice(input1, input2);
   return newChipsArr;
}

// remove elements using slice - pretty much the same slice (right above)
function sliceNotSplice(input1) {
   // input1 (argument 1) = gives the index of where to begin the slice
   let iceCreamFlavors = ["Vanilla", "Chocolate", "Strawberry", "Pistachio"];

   let newIceCreamFlavors = iceCreamFlavors.slice(input1);
   return newIceCreamFlavors;
}

// concatnating
function concatArr(input1) {
   // input1 = array of input1 will be added to original arr animalSounds

   let animalSounds = ["Bark", " Meow", " Oink", " Quack"];

   let newAnimalSounds = animalSounds.concat([input1]);
   return newAnimalSounds;
}

// concatnate not push
// concatnate both arrays
function concatNotPush(input1, input2) {
   // input1 = array 1
   // input2 = array 2
   return input1.concat(input2);
}

// reduce method
function reduceMethod(input1) {
   // input1 = any number
   let arr = [13, 27, 8, 46, input1];
   // acc = accumulator. the acc value will increase until the function is complete
   // val = the current value being processes. so the first value would be 13, then it moves down the array till the end
   // starts at 0. can change to any number to start off with by add num after val. ex: ... => acc + val, 1
   let sum = arr.reduce((acc, val) => acc + val);
   return sum;
}

// higher-order fucntions
function higherOrder(input1) {
   // input1 = any number
   let arr = [-3.1, 2, -10, 8, -7, input1];
   let positiveIntegerCubed = arr
      .filter(function (num) {
         if (Number.isInteger(num) && num > 0) {
            // Number.isInteger determines if num is an integer (no decimal)
            return num;
         }
      })
      .map(function (num) {
         return Math.pow(num, 3); // map creates a new array w/passed num & Math.pow takes num to the 3rd power (cubed)
      });
   return positiveIntegerCubed;
}

// sort
function sortArr(input1, input2) {
   // input1 = any fruit
   // input2 = any fruit
   // defualt sort order is accending
   let fruits = ["banana", "papaya", "apple", "mango", input1, input2];

   return fruits.sort();
}

// return sorted array w/o changing the origianl array
function returnSortedArr(input1) {
   // input1
   let snacksArr = ["fruit", "cookies", "chips", "candy", input1];
   let newSnacksArr = snacksArr.concat(); // concatnate a new array so original array does not change
   return newSnacksArr.sort();
}

// split method

function splitArr(input1) {
   // input1 = any value
   let str = [input1.split(" ")];
   return str;
}

// join method
function joinMethod(input1) {
   // input1 = any name
   let greeting = ["Hello", "world", "my", "name", "is", input1];
   let str = greeting.join(" ");
   return str;
}

// convert string to URL Slug
// URL Slug = part of the URL or link that comes after the domain extension.
/// "...URL slug can be used to SEO optimize the URL by showing Google the structure of your site and the contents of the page in question"
function stringToSlug(input1) {
   // input1 = any value
   return input1
      .slice()
      .toLowerCase()
      .split(" ")
      .filter(function (word) {
         if (word != "") {
            return word;
         }
      })
      .join("-"); // joins the elements in the array and makes it into URL slug form
}

// every method
// returns as a boleen (true or false)
// once an array element passes false, it returns the whole array as false
function everyMethod(input1) {
   // input1 = age
   let age = [input1];
   let ageLimit = age.every(function (num) {
      return num >= 21;
   });
   return ageLimit;
}

// some method
// returns as a boleen (true or false)
// once an array element passes true, it returns the whole array as true
function someMethod(input1) {
   let numbers = [input1];
   let anyNumber = numbers.some(function (num) {
      return num > 0;
   });
   return anyNumber;
}
