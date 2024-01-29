
/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let odd = 81;
let even = 206;
let sumOdd = 0;
let sumEven = 0;

while (odd <= 131) {
    sumOdd += odd;
    console.log(odd);
    odd+=2;
}
console.log("81 to 131 all odd num. sum is : ",sumOdd);


while (even <= 311) {
    sumEven += even;
    console.log(even);
    even+=2;
}
console.log("206 to 311 all even num. sum is : ",sumEven);