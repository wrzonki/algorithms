//Find 2 numbers that sum gives 0;

let example = [-4, -3, -2, 1, 3 ,5, 8];
let edgeCase1 = [0,1];
let edgeCase2 = [0];
let edgeCase3 = ['test', 'test2'];
let edgeCase4 = 'test';

const findNum = (arr) => {
    if (arr.constructor !== Array) {
        console.warn(`Argument is not an array`);
        return;
    }
    if (arr.length < 2) {
        console.warn(`Array length is less than 2`);
        return;
    }

    let left = Math.abs(arr[0]);
    let right = Math.abs(arr[arr.length -1]);

    if (isNaN(left) || isNaN(right)) {
        console.warn(`Elements in array are not number`);
        return;
    }

    if (!left || !right) {
        console.log(`I found 0.`);
        return;
    }

    if (left === right) {
        console.log(`You are looking for: ${left}`);
        return;
    }
    if (left > right) {
        arr.shift();
    } else {
        arr.pop();
    }
    findNum(arr);
};
console.log(`===example===`);
findNum(example)
console.log(`===edgeCase1===`);
findNum(edgeCase1)
console.log(`===edgeCase2===`);
findNum(edgeCase2)
console.log(`===edgeCase3===`);
findNum(edgeCase3)
console.log(`===edgeCase4===`);
findNum(edgeCase4)








