// log ages -
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);
// subract age value
let subtractAge = ages[ages.length - 1] - ages[0];
console.log(subtractAge);
//  add number value
ages.push(99);
console.log(ages);
// re-subtracting
let subtractAgeAgain = ages[ages.length - 1] - ages[0];
console.log(subtractAgeAgain);
// for loop for avergage age
sumOfAges = 0;
for (let i = 0; i < ages.length; i++) {
  sumOfAges += ages[i];
  console.log(i, sumOfAges);
}
let averageAge = sumOfAges / ages.length;
console.log(averageAge);
// Names Array + Average Letters
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let totalLetters = 0;
for (i = 0; i < names.length; i++) {
  console.log(i);
  totalLetters += names[i].length;
  console.log(i, names[i], totalLetters);
}
let averageLetters = totalLetters / names.length;
console.log(averageLetters);
// for loop concat
let concatNames = ``;
for (let i = 0; i < names.length; i++) {
  concatNames = concatNames.concat(names[i] + " ");
  console.log(i, concatNames);
}
// last element
console.log(ages[ages.length - 1]);
// first element
console.log(ages[0]);
// Name Lengths Array
let namesLengths = [];
for (let i = 0; i < names.length; i++) {
  namesLengths.push(names[i].length);
  console.log(namesLengths);
}
// name lengths loop + sum
let charsTotal = 0;
for (let i = 0; i < namesLengths.length; i++) {
  charsTotal += namesLengths[i];
  console.log(charsTotal);
}
// function hellohellohello
function concatWords(word, n) {
  console.log(word, n);
  let concat = word.repeat(n);
  console.log(concat);
}
concatWords("Hello", 3);
// function fullname
function fullName(firstName, lastName) {
  let fullName = firstName + "" + lastName;
  console.log(fullName);
}
fullName(`Sean Lunny`);
//array of Numbers > 100

let numbers1 = [100, 200, 300, 400];
let numbers2 = [1, 2, 3, 4];

function sumNumbersArray(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
    console.log(total);
  }
  if (total > 100) {
    console.log(total, true);
    return true;
  } else {
    console.log(total, false);
    return false;
  }
}
sumNumbersArray(numbers1);

//funtions for average numbers
function calculateNumbersAverage(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    // console.log(i);
    total += array[i];
    console.log(total);
  }
  let average = total / array.length;
  console.log(average);
}
calculateNumbersAverage(numbers1);
// two arrays of functions and averages
let numbers3 = [100, 100, 100];
let numbers4 = [100, 100, 99];
function twoAverages(array1, array2) {
  let total1 = 0;
  let total2 = 0;
  for (const number of array1) {
    total1 += number;
    console.log(number, total1);
    for (const number of array2) {
      total2 += number;
      console.log(number, total2);
    }
  }

  let average1 = total1 / array1.length;
  let average2 = total2 / array2.length;
  console.log(average1, average2);
  if (average1 > average2) {
    console.log(true);
    return true;
  } else if (average1 < average2) {
    console.log(false);
    return false;
  } else {
    console.log("numbers are equal");
  }
}
twoAverages(numbers3, numbers4);
//boolean money // hot outside

function willBuyDrink(isHotOutside, moneyInPocket) {
  console.log(isHotOutside, moneyInPocket);
  let BuyDrink = hotOutside === true && moneyInPocket > 10.5;
  return BuyDrink;
}
willBuyDrink(true, 11);

class Student {
  constructor() {
    this.firstName = "sam";
    this.lastName = "smith";
    this.phoneNumber = "5089541248";
    this.grade = "a";
  }
  introduce() {
    console.log(
      `${this.firstName} ${lastNme} can be reached at ${this.phoneNumber}`
    );
  }
}
let student1 = new Student(`Tom`, `Sawyer`, `5089660296`, `A`);
let studnet2 = new Student(`Sam`, ` Smith`, `5089541236`, `A`);
student1.introduce();
studnet2.introduce();
