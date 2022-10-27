// // const message = 'Hello JavaScript!';
// // alert(message);

// const { zoomSettings } = require("lightgallery/plugins/zoom/lg-zoom-settings");

// const userAge = parseFloat(prompt('Введіть свій вік'));
// alert('Ваш вік: ' + userAge);

// debugger;

// const nextAge = add(userAge,  1);
// alert('Наступний вік: ' + nextAge);

// // Boolean
// // true, false

// if (userAge >= 18) { // < > <= === !== && ||
//   alert('Повнолітній');
// } else {
//   alert('Неповнолітній');
// }

// function add(a, b) {
//   return a + b;
// }

// function squareSum(numbers) {
//   var sum = 0,
//     i = numbers.length;
//     while (i--)
//      sum += Math.pow(numbers[i], 2);
//     return sum;
//   }
// console.log(squareSum([3,7]));

// let newstring;
// function numberToString(num) {
//   // Return a string of the number here!
// newstring =  num.toString();
// }
// numberToString(7)

// console.log(newstring + 7);
//______
//task 1
//______
// let makeNegative =(num) => num = (num > 0) ?-num:num;
// console.log(makeNegative(9));
// or
// function makeNegative(num) {
//    return Math.abs(num);
// }
// console.log(makeNegative(-6));
//______
//task 2
//______
// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//   // code goes here
//   return laLigaGoals+copaDelReyGoals+championsLeagueGoals;
// }
// console.log(goals(1,2,1));
//______
//task 3
//______
/* Create a function that gives a personalized greeting.
This function takes two parameters: name and owner.
Use conditionals to return the proper message:case	return
name equals owner	'Hello boss' otherwise	'Hello guest'*/

// function greet(name, owner) {
//   return name === owner ? "Hello boss" : "Hello guest";
// }
//______
//task 4
//______
/**/
// function move (position, roll) {
//   // return the new position
//   return position + roll*2;
// }

// console.log(move(1, 4));
// function lovefunc(flower1, flower2){
//   return ((flower1 + flower2) % 2 === 0) ? false : true;
// }
// console.log(lovefunc(9, 2))
// function litresNumber(time) {
//   return Math.floor(time * 0.5);(~~(time/2))
// }
// console.log(litresNumber(7));

// function getSum(a, b) {
//   //Good luck!
//   let n;
//   if (0 < a && b > 0) {
//     return a + b;
//   } else if (0 > a || b < 0) {
//     return n*(n+1)/2;
//   }
// }

// console.log(getSum(2, -2));
// const sumTo(n) = (a+b)*(n+1)/2;

// console.log(sumTo(2,-2));

// console.log(Math.sign(-2));

// function GetSum(a,b)
// {
//   return (Math.abs(a - b) + 1) * (a+b) / 2;
// }
// for(let i = 100; i>1; i-=2){
//   console.log(i);
// }

// function min(arr, toReturn) {
//   let minValue = Math.min(...arr);

//   // TODO find the smallest value of arr
//   // find the position of the smallest value
//    if(toReturn === 'index'){
//      return arr.indexOf(minValue);
//    } else if(toReturn === 'value'){
//      return minValue;
//    }
//   console.log(minValue);
// }

// console.log(min([9, 0, 4, 8, 1], 'index'))

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   return Math.abs(dadYearsOld - sonYearsOld * 2);
// }
// console.log(twiceAsOld(42, 18));

// function stringToArray(string){
//   return string.split(" ");
// }
// console.log(stringToArray("I love arrays they are my favorite"));
// or
// stringToArray=(s)=>s.split(' ')
// function DNAtoRNA(dna) {
//   return dna.replace(/T/g, "U");
// }
// console.log(DNAtoRNA("UTCCT"));

// var min = (list) => Math.min(...list);
// var max = (list) => Math.max(...list);

// console.log(max([-1, 23, 89, 9]));
// console.log(min([-1, 23, 89, 9]));
//or
//var min = function(list){
//   list.sort((a, b) => (a - b));
//   return list[0];
// }
//}
// var max = function(list){
//   list.sort((a, b) => (b - a));
//   return list[0];
// }
// function warnTheSheep(queue) {
//   let positionWolf = queue.reverse().indexOf("wolf");

//   if (positionWolf === 0) {
//     return "Pls go away and stop eating my sheep";
//   } else {
//     return `Oi! Sheep number ${positionWolf}! You are about to be eaten by a wolf!`;
//   }
// }
// console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep"]));

// console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "wolf"]));

// function warnTheSheep(queue) {
//   let shipPosition = queue.reverse().indexOf("wolf");
//   if (queue.indexOf("wolf") === queue.length-1) {
//     return "Pls go away and stop eating my sheep";
//   } else {
//     return `Oi! Sheep number ${shipPosition}! You are about to be eaten by a wolf!`;
//   }
// }
// console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "wolf"]));

// function getRealFloor(n) {
//   if (n > 13) {
//     return n - 2;
//   }
//   if (n < 1) {
//     return n;
//   }
//     return n - 1;
// }

// console.log(getRealFloor(13));
// function past(h, m, s) {
//   return  h * 3600000 + m * 601000 + s * 1000;
//   }
// console.log(past(1,2,1));

// function nthnum(n){
//   return n-- *2;
// }
// console.log(5)
// function howMany(...args) {
//   return "You have passed " + args.length + " arguments.";
// }
// console.log(howMany(0, 1, 2));
// console.log(howMany("string", null, [1, 2, 3], { }));

// function reverseString(str) {
//     let newArr = str.split("");
//     let newStr = newArr.reverse();
//     newStr = newArr.join("");
//     return newStr;
//   }

//   console.log(reverseString("hello"));

// function factorialize(num) {
//     for(let i = 1; i <= num; i++){
//       if(i > 0){
//         return num;
//         } if(i === 0) {
//                   return 1;
//         }
//     }
//   }
// console.log(factorialize(9));

// (function (){ //
//     const clockContainer = document.querySelector('.clock');//DOM
//     function updateClock() {

//         clockContainer.innerText = new Date().toLocaleTimeString();
//     }
//     setInterval(updateClock, 1000);

// })();
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//        return Math.min(...args);
//    }
//  }



//   function findLongestWordLength(str) {
//     return str.length;
//   }

//   findLongestWordLength("The quick brown fox jumped over the lazy dog");

// function giveFive(obj) {
//     let Arr = [];
//     for (var key in obj) {
//       if (obj[key].length === 5) Arr.push(obj[key]);
//       if (obj.length === 5) Arr.push(key);
//     }
//     return Arr;
//   }
// console.log(giveFive({Pears:"than",apple:"sweet"}))

// function circleCircumference(circle){
//     return 2 * Math.PI * circle.radius;
// } 

// or
//const circleCircumference = circle => 2 * Math.PI * circle.radius;
// function prepare(boxes {
//   const boxStorage = [...boxes];
//   return function pack(item){

//   }
// })
// function pack(item, boxes){
//   return boxes.pop() + item + " , boxes left";
// }
// let boxes = Array.from("111111")
// console.log(pack('1', boxes));



// 1

// let x = 1;
// let y = 2;

// let res1 = x + "" + y// Допишіть код, необхідно використовувати змінні x і y
// console.log(res1); // "12"
// console.log(typeof res1); // "string"

// // 2

// let res2 = Boolean(y-x) + String(y) // Допишіть код, необхідно використовувати змінні x і y
// console.log(res2); // "true2"
// console.log(typeof res2); // "string"

// //3

// let res3 = (x + y) ? Number// Допишіть код, необхідно використовувати змінні x і y
// console.log(res3); // true
// console.log(typeof res3); // "boolean"

// //4

// let res4 = parseInt(Boolean(x*y));// Допишіть код, необхідно використовувати змінні x і y parseInt(Boolean(x)) or 
// let x = 1;
// let y = 2;

// let res4 = parseFloat(!(x-y));
// console.log(res4); // NaN
// console.log(typeof res4); // "number"

// //3

// let x = 1;
// let y = 2;

// let res3 = !!(x + y);

// console.log(res3); // true
// console.log(typeof res3); // "boolean"

//Arrays method

// let userInput = prompt("Enter a number ", "");
// // let userInput = 700;
// if (userInput % 2 === 0 ) {
//   console.log(`The number - ${userInput} is even `);
// };
// if (userInput % 7 === 0) {
//   console.log(`The number - ${userInput}  is multiply of 7 `);
// } else console.log("the number is not a multiply of 7");

// Користувач вводить число (використовуйте prompt (). Необхідно перевірити чи є введене число
// 	a) парним додатним;
// 	b) кратним числу 7.
// Результат перевірки вивести в консоль.

// Створіть порожній масив;
// 1) У перший елемент масиву запишіть будь-яке число;
// 2) У другий елемент масиву запишіть будь-який рядок;
// 3) У третій елемент масиву запишіть будь-яке логічне значення;
// 4) У четвертий елемент масиву запишіть значення null;
// 5) Виведіть на екран число елементів, яке зберігається в масиві;
// 6) Запитайте у користувача ввести будь-яке значення і запишіть це значення в п'ятий елемент масиву;
// 7) Виведіть на екран п'ятий елемент масиву.
// 8) Видаліть 1-ий елемент масиву і виведіть масив на екран.

// const  arr = [];
// arr[0] = 1;
// arr[1] = "Ukraine";
// arr[2] = true;
// arr[3] = null;
// console.log(arr);
// const askUser = prompt("Enter any number of array ", "");
// arr[4] = askUser;
// console.log(arr[4]);
// arr.shift();
// console.log(arr);


// 4. Напишіть програму, яка об’єднує всі наявні елементи масиву в стрічку і розділяє їх символом “*”.
// Початковий масив:Результат:"Rome*Lviv*Warsaw"

// let cities = ["Rome", "Lviv", "Warsaw"]; 
// const str = cities.join("*");
// console.log(str);

// 5. Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult.
// В залежності від отриманого значення виведіть відповідне повідомлення про статус особи. Наприклад: при виконанні умови вік більше 18 вивести 
//“Ви досягли повнолітнього віку”. Якщо вік менше 18 років вивести “Ви ще надто молоді”, 
// let isAdult = prompt("How old are you? ", "");
// if (isAdult >= 18){
//   alert("Youa are an Adult");
// } else {
//   alert("Youa are too young");
// }
// 6. Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
// Необхідно 
// 	a) визначити і вивести в консоль площу трикутника 
// 	b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
// Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 'Incorrect data‘.
// Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424).  

// let userA = +prompt("Enter a side A of a triangle", );
// let userB = +prompt("Enter a side B of a triangle", );
// let userC = +prompt("Enter a side C of a triangle", );
// if (Number(userA, userB, userC)){
// let p = 0.5*(userA + userB + userC);
// let sqrABC = Math.sqrt(p*(p - userA)*(p - userB)*(p - userC));
// console.log(Math.trunc(sqrABC*1000)/1000);
// } else {
//   console.log("Incorrect data");
// }

// 7. Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. 
// Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
// В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
// В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
// В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
// В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.
// let currentDate = Date();
// let currentTime = +currentDate.slice(16, 18);
// let currentTime = datenow.getHours();

  // default: console.log("Доброго вечора");

// console.log(currentTime);
// console.log(typeof currentTime)
// const datenow = new Date();
// let currentTime = datenow.getHours();
// switch(currentTime){
//    case x>=23 && x<6:
//     console.log("Доброї ночі");
//    break;
//    case x>=11 && x<18:
//     console.log("Доброго дня");
//    break;
//    case x>=5 && x<12 :
//     console.log("Доброго ранку");
//    break;
//    default:
//     console.log("Доброго вечора");
//    break;
// }

// console.log(x);

// const datenow = new Date();
// let x = datenow.getHours();
// if (x>=23 && x<6){
//   console.log("Доброї ночі");
// } else if (x>=11 && x<18){
//   console.log("Доброго дня");
// } else if (x>=5 && x<12){
//   console.log("Доброго ранку");
// } else {
//   console.log("Доброго вечора");
// }

// console.log(x);
// Practical task 3

//1. Заданий масив з елементами [2, 3, 4, 5]. За допомогою циклу for знайдіть добуток елементів цього масиву. Також реалізуйте завдання через while.
// const arr = [2, 3, 4, 5];
// let result = 1;
// for (let i = 0; i < arr.length; i++) {
//   result *= arr[i];
// }
// or with while
// let result = 1;
// let i = 0;
// while (i < arr.length) {
//   result *= arr[i];
//   i++;
// }
// console.log(result);
// 2. Напишіть JavaScript for цикл, який буде ітеруватися від 0 до 15. Для кожної ітерації він перевірятиме, чи є поточне число парним чи непарним, і відображатиме повідомлення на екрані.
// Sample Output: 
// "0 is even" 
// "1 is odd" 
// "2 is even" 
// let num = 15;

// for(let i = 0; i <= 15; i++){
//   if(i % 2 === 0){
//     return i +" is even";
//   } else {
//     return i +" is odd";
//   }
// }
// console.log(i);
// 3. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.

// Sample Output:
// randArray(5);  // [399,310,232,379,40]


// 4. Напишіть функцію raiseToDegree(a,b), яка повертає результат піднесення числа a до степеня b. Функція працює тільки з цілими числами. Реалізувати інтерфейс введення чисел a, b з клавіатури.

// Sample Output:
// raiseToDegree(3, 4);  // 81
// function raiseToDegree(a,b){
//   return a**b;
// }
// console.log(raiseToDegree(3,4));

// 5. Реалізуйте функцію – findMin(), яка повинна приймати довільну кількість числових аргументів і повертати той, який має найменше значення. Порада: для розв’язку можете скористатися спеціальним масивом arguments.
// Sample Output:
// findMin(12, 14, 4, -4, 0.2); // => -4

// / function findMin(arguments) {
// //   return Math.min(...arguments);
// // }

// 6. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
// Sample Output:
// findUnique([1, 2, 3, 5, 3]);  // => false
// findUnique([1, 2, 3, 5, 11]); // => true



// 7. Напишіть функцію, яка повертає останній елемент масиву. Функція може приймати 2 параметра: 1-ий масив, 2-ий числовий параметр, що відповідає кількості 'х' останніх елементів масиву, які треба вивести.

// Sample Output:
// console.log(lastElem([3, 4, 10, -5]));      // -5
// console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
// console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]


// 8. Напишіть функцію, яка приймає рядок як параметр і перетворює першу букву кожного слова рядка в верхній регістр.

// // Input string: 'i love java script' 
// // Output string: 'I Love Java Script'


// function sqrtRect(width, height){
//     try {
//       if (!Number(b)||!Number(a)) {
//         throw "not a number";
//       }
//     } catch (e) {
//       console.log(e);
//     }
//     return a*b;

// }
// sqrtRect(1,m);

// let calcRectisArea = function (width,height) {
//   if (isNaN(width||isNaN(height)){
//     {
//       throw new Error("not a number");
//   } else {
//     return width * height;

// } )

// console.log(calcRectangleArea (r,2));

//   function findMult(integer, limit) {
//     //потрібно мати змінну з результ, яка буде зберігати кілька зачень
//    // перевіряємо всі числа від integer до limit
//     const result = [];
//     for (let i = integer; i <= limit; i++) {
//         if (i % integer === 0) {
//         // якщо залишку немає - зберігаємо число у рез-т
//         result.push(i);
//         }
//         //якщо залишок є - ігноруємо
//     }
//     //повертаємо рез-т
//     return result;
// }
// console.log(findMult(4, 99));

function bubbleSort(arr) {
  for (var i = 0, endI = arr.length - 1; i < endI; i++) {
      var wasSwap = false;
      for (var j = 0, endJ = endI - i; j < endJ; j++) {
          if (arr[j].name > arr[j + 1].name) {
              var swap = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = swap;
              wasSwap = true;
          }
      }
      if (!wasSwap) break;
  }
  return arr;
}

bubbleSort(product)
const product = {Бакажан, price: "14"}, {"Мороженное", price: 10}, {"Помидор", price: 16}, {"Слива", price: 15}, {"Чеснок", price: 5};