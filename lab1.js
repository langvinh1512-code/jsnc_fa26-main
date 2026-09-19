//bai2
let age = 20;
console.log("Tuoi: ",age);
age = 21;
console.log("Tuoi2: ",age);

//bai3
const a = 10;
const b = 5;
console.log("Tổng: ",a+b);
console.log("Hiệu: ",a-b);
console.log("Tích: ",a*b);
console.log("Thương: ",a/b);

//bai4
function sayHello(name){
console.log("Xin chao ", name);
}
sayHello("An");

//bai5
function sum(a,b){
    return a + b;
}
const result = sum(1,2);
console.log(result);

//bai6
function calculateTotal(price,quantity){
    return price * quantity;
}
const total = calculateTotal(10000,3);
console.log(total);

//bai7
function calculateAverage(math, english, javascript){
    return (math + english + javascript)/3;
}
const average = calculateAverage(8, 7, 9);
console.log(average);

