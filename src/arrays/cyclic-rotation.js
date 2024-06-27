/*
Cycle Rotation 
A=[3,8,9,7,6]
K=3;
Rotated Array = [9,7,6,3,8]


Diagram:
[6,3,8,9,7] -> [7,6,3,8,9] -> [9,7,6,3,8]



Steps:
1. Create a new array
2. Shift it to the right K times.
3. Shifted element comes to the begining of the new array
*/




// solution without inbuilt JS functions
function solution(A, K) {

    if(A.length===0) return A;

    for (let i = 0; i < K; i++) {
        A = shiftArray(A)
    }

    return A;

}


//shift the array 1 postion each time
function shiftArray(A) {
    let ALength = A.length;

    let B = new Array(ALength);

    B[0] = A[ALength - 1]
    for (let i = 1; i < ALength; i++) {
        B[i] = A[i - 1]
    }

    console.log('Original Array: ' + A)
    console.log('Shifted  Array: ' + B)

    return B
}



//console.log(solution([3, 8, 9, 7, 6], 3))


let A = shiftArray([3, 8, 9, 7, 6])
let B = shiftArray(A)