const numbers = [10, 20, 30, 40, 50];
const student = {
    name: 'Salib khan',
    age: 28,
    movies: ['king khan', 'dhakar mastan', 'number one']
};
// template string
const about = `his name is ${student.name} and age is ${student.age}
 has number ${numbers[2]} also liked movies ${student.movies[0]}
`;
console.log(about);

//arrow function
const getFivtyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 === 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

//spread operator
const newNumber = [...numbers, 52];