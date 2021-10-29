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
