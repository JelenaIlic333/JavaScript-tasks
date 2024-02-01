function solve(input){
    let numString = String(input);

    let sum=0;

    for(let i=0; i < numString.length; i++){
        let digit = parseInt(numString[i]);
        sum += digit;
    }
    console.log(`The sum of the digits is:${sum}`);
}