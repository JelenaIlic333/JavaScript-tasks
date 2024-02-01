function solve(n1, n2, operator) {
/*
Addition(+), Subtraction(-), Multiplication(*), Division(/) and Modular division(%). 
*/
    if(operator === "+"){
        let addition= n1 + n2;

        if(addition % 2 === 0){
            console.log(`${n1} + ${n2} = ${addition} - even`)
        }else{
            console.log(`${n1} + ${n2} = ${addition} - odd`)
        }
    } else if(operator === "-"){
        let subtraction= n1 - n2;

        if(subtraction % 2 === 0){
            console.log(`${n1} - ${n2} = ${subtraction} - even`)
        }else{
            console.log(`${n1} - ${n2} = ${subtraction} - odd`)
        }
    }else if(operator === "*"){
        let multiplication= n1 * n2;

        if(multiplication % 2 === 0){
            console.log(`${n1} * ${n2} = ${multiplication} - even`)
        }else{
            console.log(`${n1} * ${n2} = ${multiplication} - odd`)
        }
    }else if(operator === "/"){
        let division= (n1 / n2).toFixed(2);

        if(n1 === 0 || n2 === 0){
            console.log(`Cannot divide ${n1} by zero`)
        }else{
            console.log(`${n1} / ${n2} = ${division}`)
        }
    }else if(operator === "%"){
        let modularDivision= n1 % n2;

        if(n1 === 0 || n2 === 0){
            console.log(`Cannot divide ${n1} by zero`)
        }else{
            console.log(`${n1} % ${n2} = ${modularDivision}`)
        }
    }
}


