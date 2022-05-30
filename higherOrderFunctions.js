//Activity 1
/*
const greeting = () => {
    console.log("Hello Codenation");
}
const repeat = (greeting, rep) => {
    for (i = 0; i < rep; i++) {
        greeting();
    }
}

repeat(greeting, 5);
*/

//Activity 2
/*
const array1 = [12, 6, 67, 22];

const multiplyByThree = (num) => {
   return num * 3;
}

const map1 = array1.map(multiplyByThree);

console.log(map1);

*/

//Activity 3
/*
const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
const multiply = (a, b) => {
    return a * b;
};
const divide = (a, b) => {
    return a / b;
};
const doMaths = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
    };
};
console.log(doMaths(add(3, 4)));


console.log(doMaths(10) (5, divide));

console.log(doMaths(7)(11, add));

console.log(doMaths(19)(7, multiply));
*/