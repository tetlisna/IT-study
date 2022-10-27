function fuctorial(num){
    let result = 1;
    while (num){
        result *= num--;
    }
    return result;
}
console.log(fuctorial(5));
// function factorialize(num) {
//     let product = 1;
//     for (let i = 2; i <= num; i++) {
//       product *= i;
//     }
//     return product;
//   }
  
//   factorialize(5);

//Recursion 1.9k
// function factorialize(num) {
//     if (num === 0) {
//       return 1;
//     }
//     return num * factorialize(num - 1);
//   }
  
//   factorialize(5);

//In this solution, we use Tail Recursion  to optimise memory use
// function factorialize(num, factorial = 1) {
//     if (num === 0) {
//       return factorial;
//     } else {
//       return factorialize(num - 1, factorial * num);
//     }
//   }
//   factorialize(5);


//other recursion
//function factorial(n, result){
//     result = result || 1;
//     if(!n){
//         return result;
//     }else{
//         return factorial(n-1, result*n);
//     }
// }
//sum functions
//function sumTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += i;
//     }
//     return sum;
//   }
  
//   alert( sumTo(100) );
//sum thru recursion
// function sumTo(n) {
//     if (n == 1) return 1;
//     return n + sumTo(n - 1);
//   }
  
//   alert( sumTo(100) );
//the fastest method
// function sumTo(n) {
//     return n * (n + 1) / 2;
//   }
  
//   alert( sumTo(100) );
