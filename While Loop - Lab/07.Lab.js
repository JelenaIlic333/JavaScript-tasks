function solve(input){

    let index=0;

    let min= Number.MAX_SAFE_INTEGER;

    while( input[index] !== "Stop"){

        let num = Number(input[index]);

        if (num < min){
            min = num;
        }

        index++;
    }
    console.log(min);
}

// solve([-10,
//     20,
//     -30,
//     "Stop"])