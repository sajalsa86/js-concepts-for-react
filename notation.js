const info = {
    firstName: 'Sajal',
    lastName: 'Hossain',
    age: 30,
    proffesion: "Web Developer",
    25: 'Road Number', // must be use bracket
    'zip Code': 6596 // must be use bracket
};
//dot notation
const first = info.firstName;
const last = info.lastName;

//vs

//bracket notation
const getAge = info['age'];// or

const prof = 'proffesion'
const getProf = info[prof];

const getRoad = info[25];

const zip = info['zip Code'];

