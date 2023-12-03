//variabke declaretion
const fatherName = 'Shahajan';
let season = 'winter';
season = 'rainy';

//sic single conditin : <, >, ===, !==, <= , >=
// multiple condition : &&, ||
if (fatherName === 'shahajan' || season === 'rainy') {
    console.log(fatherName);
}
else if (fatherName === 'Shahajan') {
    console.log(season);
}
else {
    console.log('there is no variable for consle');
}
//array
const numbers = [10, 20, 30, 40, 50];
numbers[0] = 12;
console.log(numbers.length);
console.log(numbers[2]);
numbers.push(60);
numbers.pop();

//for loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
};

//function

function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}
const output = multiply(10, 10);
console.log(output);

//object
// 3 way access property by name
const student = {
    name: 'Salib khan',
    age: 28,
    movies: ['king khan', 'dhakar mastan', 'number one']
};
const myVariable = 'age';
console.log(student.age);
console.log(student['age']);
console.log(student[myVariable]);