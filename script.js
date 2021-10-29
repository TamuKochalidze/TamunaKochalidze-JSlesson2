//homeworks
//number1 შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
// 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;

function sum(...args) {
    let newSum = 0;
    
    for (let item of args) {
        if (item > 0) {
            newSum = newSum + item;
        }
    }
    return newSum;
}

let result = sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log(result);

//--------------------------------------------

//number 2 
//ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
// 10, 50, 6, 7, 8, 11, 6, 3, 9

function sum(...args) {
        let numberSum = 0; 
    
        for (let item of args) {
            numberSum = numberSum + item
        }
        console.log(numberSum);
    }
sum(10, 50, 6, 7, 8, 11, 6, 3, 9)

//-----------------------------------------

//number 3
// შექმენით ფუნქცია სახელად printname რომელსაც პარამეტრად გადაეცემა ობიექტი. ობიექტს ექნება შემდეგი ფორმა:

// let user = {
//   firstname: 'giorgi',
//   lastname: 'saakadze',
//   age: 32,
//   isloggedin: true
// }

// ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;


function printname() {
  let person = {
      firstname: 'giorgi',
      lastname: 'saakadze',
      age: 32,
      isloggedin: true
      }

      if (person.isloggedin === true) {
          return 'giorgi saakadze';
      }else{
          return 'false';
      }
}

let answer = printname();
console.log(answer);

//------------------------------------------------ 

//number 4
//შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:


const array = [1, 5, 110, 133, 150, 67, 99, 999];

console.log(Math.max(...array));

