// this is array of object
const products = [
    { name: 'Laptop', Price: 30000, Brand: 'Lenevo', color: 'Silver' },
    { name: 'Phone', Price: 80000, Brand: 'iphone', color: 'golden' },
    { name: 'Watch', Price: 3000, Brand: 'casio', color: 'pink' },
    { name: 'Sunglass', Price: 2000, Brand: 'ray', color: 'black' },
    { name: 'Camera', Price: 35000, Brand: 'canon', color: 'blue' }
];
//map 
//map return kore ei jonno sei value variable rakhte hoi
const productNames = products.map(product => product.name);
//console.log(productNames);
const prices = products.map(productPrice => productPrice.Price);
//console.log(prices);

//forEach
// forEach return kore na, tai value rakhar jonno variable rakhte hoi na
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));
//multi line forEach
products.forEach(product => {
    const brands = product.Brand;
    console.log(`item of Brands: ${brands}`);
})

//Filter
//filter array of object create kore,
const lowestProduct = products.filter(product => product.Price <= 36000);
console.log(lowestProduct);
console.log(lowestProduct[0].Brand);

const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);

//find
// find just first value ber kore dei tai, single object dei
const specil = products.find(product => product.name.includes('n'));
console.log(specil);
