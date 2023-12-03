//JSON
const student = {
    name: 'Salib khan',
    age: 28,
    movies: ['king khan', 'dhakar mastan', 'number one']
};
//stringify
const exampleStringify = JSON.stringify(student);
console.log(exampleStringify);

//parse
const exampleParse = JSON.parse(exampleStringify);
console.log(exampleParse);

//fetch
/* fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
 */
// get keys and value form object
const getKeys = Object.keys(student);
const getValue = Object.values(student);
console.log(getKeys);
console.log(getValue);

//most of the case a forEach use korbo,
//jodi kono kisur value return pete chai tahole map use korbo
const numbers = [10, 20, 30, 40, 50, 60];
numbers.forEach(num => console.log(num));
numbers.map(num => {
    const multiply = num * 2;
    console.log(multiply);
})

//add or remove item form an array of object
// this is array of object
const products = [
    { name: 'Laptop', Price: 30000, Brand: 'Lenevo', color: 'Silver' },
    { name: 'Phone', Price: 80000, Brand: 'iphone', color: 'golden' },
    { name: 'Watch', Price: 3000, Brand: 'casio', color: 'pink' },
    { name: 'Sunglass', Price: 2000, Brand: 'ray', color: 'black' },
    { name: 'Camera', Price: 35000, Brand: 'canon', color: 'blue' }
];

const newProduct1 = { name: 'wEBcAM', Price: 1500, Brand: 'REALME', color: 'WHITE' };
products.push(newProduct1);
//console.log(products)
//copy products array and and new product
const newProduct2 = { name: 'Desktop', Price: 4000, Brand: 'core i3', color: 'black' };
const currentProduct = [...products, newProduct2];
//console.log(currentProduct);

//create new array without one specific item
//remove phone means create a new array without phone

const withoutPhone = products.filter(product => product.name !== 'Phone');
console.log(withoutPhone);