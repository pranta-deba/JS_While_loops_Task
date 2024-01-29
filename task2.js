/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

let num = 61;

while (num <= 100) {
    if (num % 2 !== 0) {
        console.log(num, "is odd!");
    }else{
        console.log(num, "is even!");
    }
    num++;
}