
/*
    Conider a binary number 10000010001
    We have to calculate the gap of '0' between two '1'

    Steps to calculate gap:
    1. Have two pointers i and j pointing at location 0 of the binary number.
    2. Iterate j over the binary number until we find the binary number 1;
    3. Calculate the gap between i & j i.e j-i-1
    4. Move i to j's position i.e. i=j;
    5. Repeat to the lenght of the binary number.

    Diagram:
        10000010001
      ->i
      ->j


        10000010001
        i
              j

        
        10000010001
              i
              j

*/



function solution(N) {
    // Implement your solution here

    let binaryNumber = N.toString(2);
    let max=0;

    //console.log(binaryNumber);

    for(let i=0; i<binaryNumber.length;i++){
        for(let j=i+1; j<binaryNumber.length;j++){
            if(binaryNumber[i]==1 && binaryNumber[j]==1){
                if(max<j-i-1){
                    max=j-i-1
                }
            i=j;
            }

        }
    }
    return max
}

solution(1041);

