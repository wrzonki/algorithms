//Find 2 numbers that sum gives 0;

let example = [-4, -3, -2, 1, 3 ,5, 8];

const findNum = (arr) => {
    let left = Math.abs(arr[0]);
    let right = Math.abs(arr[arr.length -1]);

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

findNum(example)







