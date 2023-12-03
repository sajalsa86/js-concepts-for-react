//array Destructuring
const numbers = [10, 20];
//old Destructuring
const x1 = numbers[0];
const y1 = numbers[1];
//console.log(x1, y1);

//new Destructuring
const [x, y] = [10, 20] // or
const [num1, num2] = numbers;

// with function
const example = (num1, num2) => {
    const sum = [num1, num2];
    return sum;
}


console.log(example(30, 40));// or
const [first, secound] = example(50, 60);
console.log(first, secound);

const student = {
    name: 'Salib khan',
    age: 28,
    movies: ['king khan', 'dhakar mastan', 'number one']
};
const [firstMovie, secoundMovie] = student.movies;
console.log(firstMovie, secoundMovie);

//object Destructuring
const { name, age } = { id: '01', name: "SajaL Hossain", salary: '$3000', age: 30 };
console.log(name, age);

const employee = {
    ide: 'Vs code',
    desination: 'Web Developer',
    machine: 'Windows',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 55,
        address: 'Naogaon',
        drink: 'water',
        more: {
            homeTown: 'atrai',
        }
    }
};
const { ide, machine } = employee;
const { address, drink } = employee.specification;
const { homeTown } = employee.specification.more;
const [html, css] = employee.languages;
console.log(html, css)
