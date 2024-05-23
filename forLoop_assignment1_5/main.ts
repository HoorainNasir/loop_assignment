//1. Identify and print all even numbers in an array of integers
let integers: number[] =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let evenNumber of integers) {if (evenNumber %2 === 0)
console.log(evenNumber)
}
console.log("These all are even numbers.")
console.log("====================")

//2. Find the sum of the first 10 numbers
let sum:number =0;
for(let i=1; i<=10; i++){
    sum += i
} console.log(`the sum of first 10 numbers is: ${sum}`)
console.log("====================")

//3. Print the multiplication table for the number 5
console.log('here i print the table of 5.')

let number= 5;
for(let i =1; i<=10; i++){
    console.log(`${number} X ${i} = ${number*i}`)
}
console.log('======================')

//4. Print the multiplication table for any number provided by the user
console.log('provide any number to print the table.')

import inquirer from "inquirer"
let num1 = await inquirer.prompt(
    {
        name:"number",
        message:"Enter your number.",
        type:"number"
    },
) 
let num2:number = num1.number
for(let i=1; i<=10; i++){
    console.log(`${num2} X ${i} = ${num2*i}`)
}
console.log('===================')

//5. Print the multiplication table for a number provided by the user,
//and also take the end of the table as input from the user
console.log('give any number to print the table & also give the end point of table.')

let num3 = await inquirer.prompt(
    {
        name:"number",
        message:"Enter your number.",
        type:"number"
    },
) 

let endPoint = await inquirer.prompt(
    {
        name:"number",
        message:"Enter the end point of table.",
        type:"number"
    },
) 
let digit= num3.number
let end:number = endPoint.number
for(let i=1; i<=end; i++){
    console.log(`${digit} X ${i} = ${digit*i}`)
}