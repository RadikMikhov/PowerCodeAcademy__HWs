let array = [1, 2, 3, 4, 5];

function newArray(){
    let add = 0;
    for (let i = 0; i < newArray.length; i++) {
      let Addindex = newArray[i];
      add += Addindex;
    }
    return add;
}
for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }

console.log(array);

//-------------------------------------------------------
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        let output = "";
        if (i%3 == 0 && i%5 == 0) {
            output = "Fizzbuzz";
        }else if (i%3 == 0) {
            output += "Fizz";
        }else if (i%5 == 0) {
            output += "Buzz"; 
        }else {
            output = i
        }
    console.log(output);
    }
}
fizzBuzz()
//-------------------------------------------------------
let A = [
    [4, 5, 13],
    [-5, 0, 4],
    [12, -3, 12]
];
let B = [
    [5, 8, 0],
    [87, 65, 7],
    [-50, 24, 43]
];

function SumMatrix() {
    let  C = [];
    for (let i = 0; i < A.length; i++){
        C [i] = [];
        for (let j = 0; j < A[0].length; j++) {
            C [i][j] = A [i][j] + B [i][j]; 
        }
        console.log(C);
    }
    return C;
};
SumMatrix()
