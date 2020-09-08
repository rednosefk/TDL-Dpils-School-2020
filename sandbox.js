// Loops

// for loop

for(let i = 0; i < 5; i++){
    console.log(i);
}

const names = ['Alex', 'Deniss', 'Max', 'Ivan'];

for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

// while loop

let j = 0;

while(j < 5){
    console.log(`Current number: ${j}`);
    j++;
}

//if statement

const age = 18;

if (age > 21){
    console.log('Welcome to our page');
}

const workers = ['Deniss', 'Alex', 'Ina', 'Maria'];

if (workers.length > 3){
    console.log('That is big company');
}

// else if 

const password = 'pssword123121';

if(password.length > 12 && password.includes('@')){
    console.log('password is strong');
} else if(password.length > 8 || password.includes('@')){
    console.log('Password is too short or not strong');
} else if(!password.length == 10){
    console.log('We do not like your password');
} else {
    console.log('Password is weak');
}

console.log(!true);
console.log(!false);

//let ages = [9, 18, 35, 15]
//Loops through all elemnt (ages) and
// print if this person can drink alcohol

let ages = [9, 18, 35, 15];
let time = 21;
//If time > 22 - age doesn't matter, no alco
for (let i = 0; i < ages.length; i++){
    if(ages[i] >= 18){
        console.log(`You can drink alco, you are ${ages[i]}`);
    } else {
        console.log('You too young for alco');
    }
}


// functions

// function greet(){
//     console.log('hello world')
// }

// greet();

// function expression

const speak = function(name = 'Maris', surname = 'Petrov'){
    console.log(`hello ${name} ${surname}`)
}

speak();

const calculateArea = function(radius) {
    let area = 3.14 * radius**2;
    return area;
}

const myCircle = calculateArea(5);
console.log(myCircle);

// arrow function

// const arrowCalculateArea = (radius) => {
//     return 3.14 * radius**2;
// };

// console.log(`Area is ${arrowCalculateArea(8)}`)

// if you only have 1 variable and return smth

const arrowCalculateArea = radius => 3.14 * radius**2;

//

// const bill = function(product, tax) {
//     let total = 0;
//     for (let i=0; i < product.length; i++) {
//         total += product[i] + product[i] * tax;
//     }
//     return total;
// }

const bill = (product, tax) => {
    let total = 0;
    for (let i=0; i < product.length; i++) {
        total += product[i] + product[i] * tax;
    }
    return total;
}

// for each loop

// let people = ['Max', 'Deniss', 'Alex', 'Ivan'];

// // for (let i = 0; i < people.length; i++) {
// //     console.log(people[i]);
// // }

// people.forEach(person => {
//     console.log(person);
// });

// task
//

let arr = [89, 46, 0, 35, 35, -35];

const sortArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let total = arr[i];
                arr[i] = arr[j];
                arr[j] = total;
            }
        }
    }
    return arr;
}

console.log(sortArray(arr));
