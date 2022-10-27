import { compose, pipe } from "ramda";

//  for (val in object1) {
//     action1(val);
// }

// object1 = {a: 1, b: 2, c: 3};
// function action1(){
//     for (val in object1) {
//         action1(val);
// }
// }
// console.log(action1);

// object1 = {a: 1, b: 2, c: 3};
// object.keys(object1).forEach(val =>action1(object1[val]));

// let object1 = {a: 1, b: 2, c: 3};

// let action1 =function(val)=> {object.keys(object1).forEach(val =>action1(val));}*/

//let inp = $('input');
// inp.on('keyup',function(){
//     console.log('preessed the key');
// })
// inp.on('keydown', function(e) {
//     if(e.which === 13 && e.shiftKey){ //13 stands for enter key in unicode
//         console.log('preessed the key');
//     }
// })
// let textInp = $('input[type=text]');
// let fileInp = $('input[type=file]');
// let formInp = $('form');

// textInp.on('focus', function(){
//     $(this).addClass('focused');
// })
// textInp.on('blur', function(){
//     $(this).removeClass('focused');
// });
// fileInp.on('change', function(){
//     console.log('the file has been chosen');
// });
// formInp.on('submit', function(){
//     alert('your messege has been sent');
// })

/*
function getDrinks(numberOfDrinks, step){
    let sum=0;
    for (let i=1; i <= numberOfDrinks; i+=step) {
        sum +=i;
    }
    return sum;
}
console.log(getDrinks(5,3));


$(window).on('resize', function(){
    console.log(`Width:${$(window).width()}); Height:${$(window).height()}`);

})
$(window).on('scroll', function(){
    console.log(` top: ${$(window).scrollTop()}`)
})*/

// let btn = $('.btn');
// let block1 =$('#block1');
// btn.on('click', function(){
//     block1.css('width', '400px');
//     block1.css('background-color', '#fff000');
//     let b2 = $('.block2');
//     let style = {
//         width: block1.css('width'),
//         height: block1.css('height'),
//         backgroundColor: block1.css('background-color')
//     }
//     b2.css(style);
// b2.css('width', block1.css('width'));
// b2.css('height', block1.css('height'));
// b2.css('background-color', block1.css('background-color'));
//})
// let toggleBtn = $('.toggle-btn');
// let showBtn = $('.showBlock');
// let block1 = $('#block1');
// let hideBtn = $('.hideBlock');
// hideBtn.on('click', function(){
//     block1.hide();

// })
// showBtn.on('click', function(){
//     block1.show();

// })
// hideBtn.on('click', function(){
//     block1.slideUp();

// })
// showBtn.on('click', function(){
//     block1.slideDown();

// })
// toggleBtn.on('click', function(){
//     block1.fadeToggle();
// })
// toggleBtn.on('click', function(){
//     block1.slideToggle();
// })
// let btn1 = $('.animate')
// btn1.on('click', function(){
//     $('#block1').animate(
//         {
//             width:'400px',
//             height:'400px',
//             marginTop:'100px',
//             opacity: '1.0'
//         }
//     )
// })
// let btn = $('button');
// btn.on('click', function(){
// $('.img-1').attr('src', 'img/2.jpg');

// let src1 = $('.img-1').attr('src');
// $('.img-2').attr('src', src1);
//     let b1=$('.block0');
//     b1.attr('class', 'circle');

//     let b2=$('.block2');
//     b2.attr('class', b1.attr('class'));

// })
// let val1 = $('input[type=text]').val();
// console.log(val1);

// let val2 = $('input[type=range]').val();
// console.log(val2);

// $('input[type=text]').on('change', function(){
//     console.log($(this).val());
// })
//JS variant of adding Item 4 element
// let el = document.createElement('li');
// el.className = 'red';
// el.textContent = 'Item4';
// let list = document.querySelector('ul');
// list.appendChild(el);
//JS query of adding Item 4 element
// $('<li></li>').addClass('red').text('Item 4').prependTo($('ul'));

// var f = function() {
//     console.log(1);
//     }
// var execute = function(f) {
//     setTimeout(f, 1000);
//     }
// execute(f);
// f = function() {
//     console.log(2);
//     }
// let userAge = prompt('Enter your age', 18);
// let numberAge = Number(userAge);
// let statusUser = numberAge>=18 ? "allow":'not allow';
// console.log(statusUser);
// let member = "Tanya";
// let userMember = (member == "Tanya");
// if (userMember && numberAge >= 18) {
//     console.log('allow to enter');
// } else {
//     console.log('not allow to enter');
// }

//Hello world counter times
// let var1 = "Hello world";
// let count = 0;
// function myFirst(var1){
//     count++;
//     let temp = count + "time run";
//     console.log(var1);
//     console.log(temp);
// }
// myFirst(var1);
// myFirst(var1);
// myFirst(var1)
//плюсує 10 до заданого числа
// let myNum = 1000;
// addTen(myNum);

// function addTen(myNum){
//     let temp = Number(myNum);
//     console.log(temp+10);
// }

/* // FUNCTION #1 - 3 DIFFERENT WAYS TO 
SET A DEFAULT VALUE IF A FUNCTION IS MISSING 
AN ARGUMENT// 

function adder1(num1, num2=4, other){
 console.log("number 1 - "+ num1);
 console.log("number 2 - "+ num2);
 console.log("number 3 - "+ other);

}
adder1(100);

function adder2(num1, num2){
    num2 = num2 || 4;
    console.log("number 1 - "+ num1);
    console.log("number 2 - "+ num2);
}
adder2(100);

function adder3(num1, num2){
    num2 = typeof num2 !==  'undefined' ? num2 : 4; 
    console.log("number 1 - "+ num1);
    console.log("number 2 - "+ num2);
   
}
adder3(100);



let num1 = 100;
let num2 = 100;
console.log(mult(num1,num2));

function mult(num1, num2){ // this exmpl function declaration
    let temp = num1*num2;
    return temp;
}
*/
// below exmpl of function expression

// */
// let mult = function(num1, num2){ // this exmpl function declaration
//     let temp = num1*num2;
//     return temp;
// }
// console.log(mult(100,100));
/*


// FUNCTION #2 - create

const btns = document.querySelector('.animate');
console.log(btns);
let var1, var2, var3;
var1 = var2 = var3 = 0;
btns[0].onclick = message;
btns[1].onclick = message1;
btns[2].onclick = message2;

function message1() {
    var1++;
    message();
}

function message2() {
    var2++;
    message();
}

function message3() {
    var3++;
    message();
}

function message() {
    console.log(var1 + ' ' + var2 + ' ' + var3);
} */
// FUNCTION #3 - recursion function/ asks the user to gues
//the number until he guessed
/*
let nedeedNum = 2;
let guess;
userGuess();
function userGuess(){
    guess = +prompt('Enter a number');
    if(guess == 2){
        console.log('you guessed the number');
        return;
    }else {
        let messege = (guess<nedeedNum)? 'higher': 'lower';
        console.log(messege);
        userGuess();
    }
}
*/
//IIFE JavaScript immediate function Exp below
// (function(name){
//     console.log('Hello '+name);
// })('Tanya');

//same

// let resUlt = (function(name){
//     return "Hello "+name;
// });
// console.log(resUlt('Tanya'));
// Select smth, your comp and describe as an object//
// function getS(statistics){
// for (char in statistics){
//     let count=0;
//     if(char==1){
//         count++;
//         console.log(count);
//     }

// }
// console.log(char);

// }
// getS('1110001');
// $(function(){
//     let h1 = $('h1');
//     console.log(h1);
//     let a =$('a.blue-link');
//     console.log(a);
// })

// function duplicateEncode(word){
//   word.toLowerCase();
//   let emptyStr = "";
//     for (let i in word) {
//         let is_unique = true;

//         for (let j in word) {
//             if (i !== j && word[i] === word[j])  is_unique = false;
//         }

//         if (is_unique) emptyStr += '(';
//         else emptyStr += ')';
//     }

//     return emptyStr;
// }

// function duplicateEncode(word){
//     return word
//       .toLowerCase()
//       .split('')
//       .map( function (a, i, w) {
//         return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//       })
//       .join('');
//   }

// console.log(duplicateEncode("reCEde"));
// console.log(duplicateEncode("din"));
// first unique elem of array
// const ar = [1,4,5,7,7];
// function indexOfEl(ar,i, from=0) {
//     for (let index = from; index < ar.length; index++) {
//         if(ar[index]===i){
//             return index;
//         }
//     }
//     return -1;
// }
// console.log(indexOfEl(ar,4));

// const results = { foo: 69, baz: 42, java: 42, ruby: 95 };
// function myLanguages(results) {
//   let result = Object.entries(results)
//     .filter(([key, value]) => value >= 60)
//     .sort((arr1, arr2) => arr2[1] - arr1[1])
//     .map(([key, value]) => key);
//   return result;
// }
// console.log(myLanguages(results));

// const a = [3, 8, 3, 6, 5, 7, 9, 1];

// function sortByBit(arr) {
//   let output = arr.sort((value1, value2) => {
//     let bNum1 = Number(value1)
//       .toString(2)
//       .split("")
//       .filter((digit) => Number(digit)).length;

//     let bNum2 = Number(value2)
//       .toString(2)
//       .split("")
//       .filter((digit) => Number(digit)).length;
//     if (bNum1 === bNum2) return value1 - value2;
//     return bNum1 - bNum2;
//   });
//   return output;
// }
// console.log(sortByBit(a));

// for (let value in values.value) {
//     console.log(value);
//     for (let j = 0; j < value.length; j++) {
//         if (value) {
//             console.log(value.length);
//         }
//     }
//   };

// let d = [3, 8, 3, 6, 5, 7, 9, 1];
// function sortByBit2(arr2) {
//   arr2.sort(
//     (c, b) =>
//       c.toString(2).split`1`.length - b.toString(2).split`1`.length || c - b
//   );
// }
// console.log(sortByBit2(d));

// let array = [3, 8, 3, 6, 5, 7, 9, 1];

// const sortByBit3 = (array) => {
//   const bitCount = (n) => n.toString(2).replace(/0/g, "").length;
//   return array.sort(
//     (val1, val2) => bitCount(val1) - bitCount(val2) || val1 - val2
//   );
// };
// console.log(sortByBit3(array));

// function calculate() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }

//   return function () {
//     for (let j = 0; j < arguments.length; j++) {
//       sum += arguments[j];

//     }

//     return sum;
//   };
// }
// console.log(calculate(1, 1)(1,1));
// Array.prototype.map = function (callbackFunc, thisArg){
//     const newArray = [];

//     for (let i = 0; i < this.length; i++) {
//         let output = callbackFunc.call(thisArg, this[i],i,this);
//         if(i in this){
//             newArray.push(output);
//         } else {
//             newArray.push(undefined);
//         }
//     }
//     return newArray;

// }

// const array1 = [6,,77,90];
// console.log(array1.map(x=>x));

// function phoneticLookup(val) {
//   let result = "";

//   Only change code below this line
//   const lookup = {
//     alpha: "Adams",
//     bravo: "Boston",
//     charlie: "Chicago",
//     delta: "Denver",
//     echo: "Easy",
//     foxtrot: "Frank",
//   };
//   result = lookup[val];
//   // Only change code above this line
//   return result;
// }

// console.log(phoneticLookup("charlie"));

// const recordCollection = {
//   2548: {
//     albumTitle: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"],
//   },
//   2468: {
//     albumTitle: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"],
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [],
//   },
//   5439: {
//     albumTitle: "ABBA Gold",
//   },
// };

// function updateRecords(records, id, prop, value) {
//   const album = records[id];
//   if (prop !== "tracks" && value !== "") {
//     album[prop] = value;
//   } else if (prop === "tracks" && album.hasOwnAttribute("tracks") === false) {
//     album[prop] = [value];
//   } else if (prop === "tracks" && value !== "") {
//     album[prop].push(value);
//   } else if (prop !== value) {
//     delete album[prop];
//   }
//   return console.log(records);
// }
// updateRecords(recordCollection, 5439, "artist", "ABBA");

//    If value is an empty string, delete the given prop property from the album
//   if (value === "") {
//     delete album[prop];
//   }
//   If prop isn't tracks, update or set that album's prop to value
//   else if (prop !== "tracks") {
//     album[prop] = value;
//   }
//   If prop is tracks, add value to the end of the album's existing tracks array
//   else {
//     album["tracks"] = album["tracks"] || [];
//     album["tracks"].push(value);
//   }

//   Your function must always return the entire record collection object return records;
// function multiplyAll(arr) {
//     let product = 1;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//        product *= arr[i][j];
//     }
//   }
//     return product;
//   }
//   console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
// Setup
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   for (let i = 0; i < contacts.length; i++) {
//     if ((prop = "firstName" && value)) {
//       prop;
//     }
//   }
// }

// lookUpProfile("Akira", "likes");

// function lookUpProfile2(name2, prop2) {
//   for (let x = 0; x < contacts.length; x++) {
//     if (contacts[x].firstName === name2) {
//       if (contacts[x].hasOwnProperty(prop2)) {
//         return contacts[x][prop2];
//       } else {
//         return "No such property";
//       }
//     }
//   }
//   return "No such contact";
// }
// console.log(lookUpProfile2("Alice", "run"));

// function countdown(n) {
//   let arr = [];
//   if (n < 1) {
//     return [];
//   } else {
//     arr = countdown(n - 1);
//     arr.unshift(n);
//     return arr;
//   }
// }
// console.log(countdown(6));

// //  function rangeOfNumbers(startNum, endNum){//1, 4
// //     let arr2 = [];
// //     if(startNum>endNum)
// //     return [];
// //     arr2 = rangeOfNumbers(startNum,(endNum-1));
// //     arr2.push(endNum);
// //     return arr2;
// //  }
// //  console.log(rangeOfNumbers(1,4));
// function checkScope() {
//   let i = "function scope";
//   if (true) {
//     let i = "block scope";
//     console.log("Block scope i is: ", i);
//   }
//   console.log("Function scope i is: ", i);
//   return i;
// }
// console.log(checkScope());
// var numArray = [];
// var i;
// for (i = 0; i < 3; i++) {
//   numArray.push(i);
// }
// console.log(checkScope());
// console.log(numArray);
// console.log(i);

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function removeFirstTwo(list) {
//   let arr3 = list.slice(2);
//   list = [...arr3];

//   // Change this line
//   // Only change code above this line
//   return console.log(arr3);
// }

// const arr3 = removeFirstTwo(source);

// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"],
// };
// function makeList(arr5) {
//   // Only change code below this line
//   const failureItems = result["failure"];
//   let arr6 = [];
//   for (let i = 0; i < failureItems.length; i++) {
//     failureItems += `<li class="text-warning">${arr6.push(
//       failureItems[i]
//     )}</li>`;
//   }
//   // Only change code above this line

//   return failureItems;
// }
// const failuresList = makeList(result.failure);
// console.log(makeList(result.failure));

// const result2 = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"],
// };
// function makeList(arr7) {
//   const failureItems = arr7.map(
//     (item) => `<li class="text-warning">${item}</li>`
//   );
//   return failureItems;
// }
// const failuresList2 = makeList(result2.failure);

//   Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.
//   In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature in Celsius.

//   Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.

//   Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.

//   This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.
//   In other words, you are abstracting implementation details from the user.
// class Thermostat {
//   constructor(fahrenheit) {
//     this.fahrenheit = fahrenheit;
//   }

//   get temperature() {
//     return (5 / 9) * (this.fahrenheit - 32);
//   }

//   set temperature(celsius) {
//     this.fahrenheit = (celsius * 9.0) / 5 + 32;
//   }
// }
// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in Celsius
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in Celsius
// console.log(temp);

// const puser = {
//   id: 25,
//   isVerified: true,
// };
// const { id: number, isVerified: isApproved } = puser;
// console.log(number);
// console.log(isApproved);

// const student = {
//   direction: "Programming",
//   displayName: "Joe",
//   fullName: {
//     firstName: "David",
//     lastName: "Smith",
//   },

//   isVerif: true,
// };
// function studDestr({ displayName, fullName: { lastName: name } }) {
//   return ` ${displayName} is ${name}`;
// }
// console.log(studDestr(student));
// function pow(a, b = 9) {
//   return a ** b;
// }
// console.log(pow(2, 3));

// function doSmth(w, pop) {
// 	if(typeof(w) === 'object') {
// 		return [w.w, pop.pop];
// 	} else {
// 		return [w, pop];
// 	}
// }

// console.log(doSmth(3, 4));
// console.log(doSmth({w: 3, pop: 4}));

//----********----// Spread та Rest оператори //----********----//

// додавання елементів існуючого масиву
// let addsubj = ["Ukrainian history", "the art of war"];
// let subj = ["Mat", "English", ...addsubj];
// console.log(subj);
// копіювання існуючого масиву
// let num1 = [1, 2, 3];
// let num2 = [...num1];
// console.log(num2);
// let num3 = [3, 4, 5];
// console.log(num2.concat(num3));
// console.log([...num1, ...num2, 777, ...num3]);
// передача елементів масиву в ролі аргументів

// function perimeter(c, e, k) {
//   return c + e + k;
// }
// let any = [2, 3, 4];
// console.log(perimeter(...any));
// // REST збирає окремі елементи в масив
// function addExpl(...fuh) {
//   return fuh.map((el) => el + "kok");
// }
// console.log(addExpl(1, 3, "hello", "rest"));
// //шаблонні літерали
// function isLargeScreen() {
//   return false;
// }
// const isCollapsed = false;

// let classes = "header";

// classes += isLargeScreen()
//   ? ""
//   : isCollapsed
//   ? " icon-expander"
//   : " icon-collapser";
// console.log(classes);

// classes += `header${
//   isLargeScreen() ? "" : isCollapsed ? " icon-expander" : " icon-collapser"
// }`;
// console.log(classes);

// classes += `header${
//   isLargeScreen() ? "" : ` icon-${isCollapsed ? "expander" : "collapser"}`
// }`;
// console.log(classes);

// let person = "Mike";
// let age = 28;
// function myTag(string, personExp, ageExp) {
//   let str0 = string[0];
//   let str1 = string[1];
//   let str2 = string[2];
//   let ageStr;
//   if (ageStr > 99) {
//     ageStr = "centenarian";
//   } else {
//     ageStr = "youngster";
//   }
//   return `${str0}${personExp}${str1}${ageExp}${str2}`;
// }
// let output = myTag`That ${person} is a ${age}.`;
// console.log(`That ${person} is a ${age}.`);
// console.log(output);

// sprint 2
// Implement the getModifiedArray(array) function, which takes an arbitrary array, and returns an array
// with the value of the first element of the array equal to “Start”, the last element of the array equal
// to “End” and the rest of elements should be the same as in an initial array. The initial array should stay unchanged.

// Function example:

// getModifiedArray([12, 6, 22, 0, -8])); // [‘Start’, 6, 22, 0, ‘End’]
//
// }
// function getModifiedArray(array) {
//   array.pop();
//   array.shift();
//   array.unshift("Start");
//   array.push("End");
//   return array;
// }
// console.log(getModifiedArray([12, 6, 22, 0, -8]));
// function getModifiedArray(array) {

//    if(array[0] && array[array.length-1] && array.length>2){
//      array[0] = "Start";
//      array[array.length-1] = "End";
//    }

//   return array;
// }
// console.log(getModifiedArray([100, 200]));
// function getModifiedArray(array) {
//   const arrayNew = [...array];
//      arrayNew[0] = "Start";
//      arrayNew[arrayNew.length-1] = "End";
//     return arrayNew;
// }
// console.log(getModifiedArray([100, 200]));

// The function filterByN receives an array of integers, a number and a parameter (greater, less).
// Print a new array, where all elements will be greater/less than this number
// By default, the number is 0, the parameter is greater.

// const filterNums = (arr, number, state) => {
//   if (state === "greater") {
//     return arr.filter((el) => el > number);
//   } else if (state === "less") {
//     return arr.filter((el) => el < number);
//   } else if (!number && !state) {
//     return arr.filter((el) => el > 0);
//   } else if (!number || !state) {
//     return arr.filter((el) => el > number);
//   }
// };
// Example:

// console.log(filterNums([-1, 2, 4, 0, 55, -12, 3], 11, "greater")); // [55]
// console.log(filterNums([-2, 2, 3, 0, 43, -13, 6], 6, "less")); // [-2, 2, 3, 0, -13]);
// console.log(filterNums([-2, 2, 3, 0, 43, -13, 6], -33, "less")); //  []
// console.log(filterNums([-2, 2, 3, 0, 43, -13, 6])); // [2, 3, 43, 6]
// console.log(filterNums([-2, 2, 3, 0, 43, -13, 6], 23)); // [43]

// Find the maximum interval between two consecutive numbers. Numbers are entered as arguments

// const maxInterv = (...args) => {
//   let maxInt = 0;
//   for (let i = 0; i < args.length-1; i++) {
//     let interval = Math.abs(args[i + 1] - args[i]);
//     if(interval > maxInt) maxInt = interval;
//   }
//   return maxInt;
// };
// console.log(maxInterv(3, 5, 2, 7)); // 5
// console.log(maxInterv(3, 5, 2, 37, 11, 0, -2)); //35
// console.log(maxInterv(3, 5, 2, 7, 11, 0, -2)); //11
// console.log(maxInterv(3, 5)); //2
// console.log(maxInterv(3)); //0

// The function takes any number of strings and returns the sum of their lengths.

// const sumOfLen = (...args) => {
//    args.reduce((a,b) => console.log(a.length + b.length));
//    return args;
// };

// const sumOfLen = (...strings) => {
//   let letterSum = strings.map((e) => e.length).reduce((a, b) => a + b, 0);
//   return letterSum;
// };

// console.log(sumOfLen("hello", "hi")); //7
// console.log(sumOfLen("hi")); //2
// console.log(sumOfLen()); //0
// console.log(sumOfLen("hello", "hi", "my name", "is")); //16

//Write a function combineArray(arr1, arr2), which takes 2 arrays, and returns a new array consisting only of
// numeric elements of arrays arr1 and arr2.

// function combineArray(arr1, arr2) {
//   return arr1
//     .filter((e) => typeof e === "number")
//     .concat(arr2.filter((e) => typeof e === "number"));
// }

// console.log(combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15])); // [12, 22, -8, 6, 15];

// Implement the longestLogin(loginList) function, which takes an array of user logins loginList  and returns
// the longest login. If the logins of the same length are the longest in the array, the login element with the largest index is returned. Tip: You can use the reduce() method to solve the task.

//Function examples:

// function longestLogin(loginList) {
//   return loginList.reduce((prev, curr) => (prev.length > curr.length) ? prev : curr);
// }

// console.log(longestLogin(["serg22", "tester_2", "Prokopenko", "guest"])); //  Prokopenko
// console.log(longestLogin(["user1", "user2", "333", "user4", "aa"])); //  user4

//Implement the processArray(arr, factorial) function, which takes the first parameter of the array arr, and the second parameter the function factorial and processes each element of the array arr with the function factorial, returning a new array (the source array arr does not change)

//The function factorial(n) calculates and returns the factorial of the number n. For example factorial(4) returns 24.

// Example

// determines the factorial of the number n

// function factorial(n) {
//   return (n !== 1 && n !==0) ? factorial(n-1) * n : 1;
// };
// function processArray(arr, factorial) {
//   return arr.map((e) => (factorial(e)));
// }
// console.log(processArray([1, 2, 3, 4, 5], factorial)); // [1, 2, 6, 24, 120];
// console.log(processArray([0, 9, 4, 12], factorial)); [ 1, 362880, 24, 479001600 ]

// Using the default parameter technique, overload the overloadedFunc() function, which takes 3 arguments.
// For the 1st argument of the function set the default value [1, 2, 3], for the 2nd - the value 2, for the 3rd -
// the function that returns the product of the first two arguments, and the function can multiply both arrays and numbers.
// The overloadedFunc() function returns the result of the default function.

//Usage example:
// function overloadedFunc(arr = [1, 2, 3], b = 2, cb = (arr, b) => {
//     return ( typeof arr === 'number') ? b * arr:arr.map(e => e*b);
// }){
//     return cb(arr,b)
// }
// overloadedFunc()

//  compose

// function a(value) {
//   value += "a";
//   return value;
// }
// function b(value) {
//   value += "b";
//   return value;
// }
// function c(value) {
//   value += "c";
//   return value;
// }
// console.log(a("_"));
// console.log(b(a("_")));
// console.log(c(b(a("_")))); // below is the same with ramda librarycompose(c, b, a) //
// is executing function a, result
// of which is to function b, result of b to goes to function c
// Save the result of this function
// const f = compose(c, b, a); // output =abc
// console.log(f("=")); // same output =abc
// pipe works like compose but in other functions a first
// pipe(a, b, c, console.log)('_')

// function negate(x) {return -x;}
// negate();
// function halve(x) {return x/2;}
// halve();
// function square(x) {return x*x;}
// square();
// function double(x) {return 2*x;}
// double();

// const combineFunctions  = compose(square, halve, negate);
// console.log(combineFunctions(3));

// compose(combineFunctions(square, halve))(3);

// const combineFunctions1 = compose(negate, double)
// console.log(combineFunctions1(3));

// compose(console.log, c, b, a)('=');
// pipe(a, b, c, console.log)('***')

//Please, implement a function combineFunctions that takes any number of functions as an argument and returns a function that is a composition of the arguments.

// For example:

//negate = function(x){ return -x; };
//halve = function(x){ return x / 2; };
//square = function(x){ return x * x; };
//double = function(x){ return 2 * x; };
//combineFunctions(negate, halve, square) should return a function
//square(halve(negate(x)))

// const combineFunctions = (...args) => (x) => {
//     return args.reduce((val, arg) => arg(val), x);
// }
// combineFunctions();

// Suppose, you have an array of students:

// Please, implement a function getLanguages.
// The function takes an array of students as a first parameter
// and a condition on a student (function)
// getLanguages should return an array of languages from students that satisfy a condition.

// For example:
// getLanguages(students, student => student.age < 26) should return
// ['English', 'Ukrainian',  'Italian', 'Russian']
// getLanguages(students, student => student.name === 'Alice') should return
// ['Italian', 'Russian']
// getLanguages(students) should return
// ['English', 'Ukrainian','Polish', 'Spanish', 'Italian', 'Russian']

// let condition =(students)=>{
//   return students.filter(student, val => Object.keys(val));
// }
// let condition = (student) => student.age < 21;
// const getLanguages = (students, condition) => {
//   const filteredStudent = students.filter((student) => {
//     return condition ? condition(student) : true;
//   });

//   return filteredStudent.reduce((arr, student) => {
//     return arr.concat(student.languages);
//   }, []);
// };

// let students = [
//   {
//     name: "Anna",
//     languages: ["English", "Ukrainian"],
//     age: 21,
//   },
//   {
//     name: "Bob",
//     languages: ["Polish", "Spanish"],
//     age: 26,
//   },
//   {
//     name: "Alice",
//     languages: ["Italian", "Russian"],
//     age: 18,
//   },
// ];
// condition(students);

// console.log(getLanguages(students, student => student.name.length > 2));

// Implement 5 functions that take strings of data and process them in a certain way.
// 1) The upperCase() function takes string data as an argument and returns it to uppercase.
// 2) The tripleExclaim() function takes string data as an argument and returns it by adding three exclamation marks to it.
// 3) The split() function takes a separator as an argument, returns a function that accepts string data split by the separator character
//into an ordered set of substrings, and returns an array of those substrings.
// 4) The join() function takes separator as an argument, returns a function that takes an array of string data that are concatenated into
// a string by separator, and returns that string.
// 5) The copy() function takes string data as an argument and returns it repeating 2 times.
// Implement the createComposition() function, which can take any number of functions as arguments, and create a composition from them.
// The createComposition() function takes our 5 functions as arguments. The createComposition() function returns a function that takes its 
// initial value as an argument.
// This nested function successively passes through an array of functions with each iteration returning the
// result of calling the accumulated value of the current function argument. The reduce() method can be used here.
// The final function result is assigned the function createComposition(), which takes our 5 functions as arguments in the appropriate order.
//(split with '_' argument, join with ' ' argument)

// Tips.
// Consider that the result of one function can be passed as an argument to another function.
// Pay attention to the order of the function arguments.
// If you have difficulty implementing the createComposition() function, check out the "Useful links" for
// the material on function composition.

// Usage example:
// implementation of 5 atomic functions
// implementation of createComposition function
// const result = createComposition( // 5 function-arguments )
// console.log(result("by_ticket_now"));  //  BY TICKET NOW!!! BY TICKET NOW!!!
// console.log(result("total sale")); //  TOTAL SALE!!! TOTAL SALE!!!
// let string = "trata, goof, loo";
// let array = ['trata','goof','loo'];
// const upperCase = (string) => string.toUpperCase();
// const tripleExclaim = (string) => string + "!!!";
// const split = (separator) => {
//   return function (array) {
//     return array.split(separator);
//   };
// };
// const join = (separator) => {
//     return function (string) {
//         return string.join(separator);
//   };
// };
// const copy = (string) => {
//     return string + " " + string;
// };

// const createComposition = (...fns) => (v) => fns.reduce((val, fn) => fn(val), v);
// // implementation of createComposition function
// const splitFn = split('_');
// const joinFn = join(' ');

// const result = createComposition(upperCase, tripleExclaim, copy, splitFn, joinFn);
// console.log(result);
// console.log(upperCase(string));
// console.log(tripleExclaim(string));
// console.log(split(string));
// const splitF = split('_');
// console.log(splitF(string));
// console.log(join(array));
// const joinF = join(' ');
// console.log(joinF(array));

