function solve(input){

    let index=0;

    let max= Number.MIN_SAFE_INTEGER;

    while( input[index] !== "Stop"){

        let num = Number(input[index]);

        if (num > max){
            max = num;
        }

        index++;
    }
    console.log(max);
}