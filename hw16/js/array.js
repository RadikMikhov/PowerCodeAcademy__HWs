function doubleArr(arr) {
    let newArr = [];
    for (i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);  
    }
    return newArr;
}

console.log(doubleArr([3, 5, 18]))


//-------------------------------------------------------
function fizzBuzz (n) {
    for (let i = 0; i < n; i++) {
        if ( i%3 === 0 && i%5 === 0 ){
            console.log('FizzBuzz')
        } else if ( i%3 === 0) {
            console.log('Fizz');
        } else if ( i%5 === 0) {
            console.log('Buzz');
        }else {
            console.log(i);
        }
    }
}

let count = +prompt('Введите количество');
fizzBuzz(count);

//-------------------------------------------------------
let arr1 = [
    [4, 5, 13],
    [-5, 0, 4],
    [12, -3, 12]
];
let arr2 = [
    [5, 8, 0],
    [87, 65, 7],
    [-50, 24, 43]
];

let resArr= [];

for (let i = 0; i < arr1.length; i++){
    resArr[i] = [];
    for (let j = 0; j < arr1[i].length; j++){
        resArr [i][j] = arr1 [i][j] + arr2 [i][j];
    }
}
console.log(resArr);