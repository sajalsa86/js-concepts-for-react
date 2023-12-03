//truthy
//true, 5, 'text', [], {}

//false
//'', 0, null, false, undefined

//check truthy
let myVar = 5;
if (myVar) {
    myVar = myVar * 10;
}
else {
    myVar = 0;
}

//check nagative or falsy anything
let myMoney = 50;
if (!myMoney) {
    console.log(`My Money is : ${myMoney}`)
}
else {
    console.log('There is no money in my poket')
}
const isMoney = 80;
let food;
if (isMoney > 100) {
    food = "biriyani";
} else {
    food = 'Cha Biscuit'
}
//Ternary
let food1 = isMoney > 100 ? 'birayani' : 'cha-biscuit';
console.log(food1);

let drink = isMoney > 100 && myMoney > 100 ? 'Coke' : 'filter water';
console.log(drink);

//number to string convertion
const num1 = 70;
const numStr = num1 + '';
console.log(numStr, typeof (numStr));

// string to number convertion
const strVar = '570';
const convertNum = +strVar;
console.log(convertNum, typeof (convertNum));

let isActive = false;
const showUser = () => console.log('Show User');
const hideUser = () => console.log('Hide User');
isActive ? showUser() : hideUser();
// more shortcurt way
//use &&
isActive && showUser();
//use ||
isActive || hideUser();

//toggle boolean
isActive = !isActive;