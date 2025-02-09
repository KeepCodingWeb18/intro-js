const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false, NaN];

let evenNumbers = []; // Array para almacenar números pares
let oddNumbers = [];  // Array para almacenar números impares

for (const number of numbers) {
    if (!number) continue
    if (number % 2 === 0) {
        evenNumbers = [...evenNumbers, number]
    } else {
        oddNumbers = [...oddNumbers, number]
    }
}

console.log(evenNumbers, oddNumbers);
/* sin continue
const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false, NaN];

let evenNumbers = [];
let oddNumbers = [];

for (number of numbers) {
    if (number) {
        if (number % 2 === 0) {
            evenNumbers = [...evenNumbers, number];
        } else {
            oddNumbers = [...oddNumbers, number];
        }
    }
}
console.log(`Even numbers: ${evenNumbers}
Odd numbers: ${oddNumbers}`);
*/