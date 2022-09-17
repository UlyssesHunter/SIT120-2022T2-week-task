let fruits = ['Banana','Orange','Apple','Mango'];
console.log(fruits);

console.log(fruits.find((fruit) => fruit === 'Apple'));
console.log(fruits.find((fruit) => fruit === 'Apple1'));

console.log(fruits.findIndex((fruit) => fruit === 'Apple'));
console.log((firstIndex = fruits.findIndex((fruit) => fruit === 'Apple1')));

//push
console.log(fruits.push('kiwi'));
console.log(fruits);

//pop
console.log(fruits.pop());
console.log(fruits);

let numbers = [3,2,5,4,7];
console.log(numbers.sort());

//slice
console.log(fruits.slice(1,3));

console.log(fruits.slice(1));
console.log(fruits.slice(-1));

fruits.forEach((fruit)=>console.log(fruit));

//task2
let text1 = "     Bingo     ";
let text2 = text1.trimStart();
console.log(text1);
console.log(text2);
let text = "Nice day!";
let char = text[5];
console.log(text);
console.log(char);