"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//6. Print the elements of an array in reverse
let array = [1, 2, 3, 4, 5];
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}
console.log("==============");
//7. Find the largest number in an array
let number = [10, 20, 30, 40, 50, 100];
let largest = number[0];
for (let i = 1; i < number.length; i++) {
    if (number[i] > largest) {
        largest = number[i];
    }
}
console.log(`Largest number of array is: ${largest}`);
console.log('================');
//8. Find the shortest number in an array
let short = number[0];
for (let i = 1; i < number.length; i++) {
    if (number[i] < short) {
        short = number[i];
    }
}
console.log(`shortest number of array is: ${short}`);
console.log("================");
//9. Find prime numbers within a range of 1 to 100
for (let num = 2; num <= 100; num++) {
    let prime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        console.log(num);
    }
}
console.log('They all are prime numbers under 100.');
