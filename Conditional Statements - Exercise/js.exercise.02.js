function bonus(a){
    let broj= Number(a)
    let bonus=0;

    if( broj <= 100){
        bonus=5;
    }else if(broj <= 1000){
        bonus=broj * 0.2
    }else{
        bonus= broj * 0.1
    }

    if(broj % 2 === 0){
        bonus += 1;
    }

    if(broj % 10 === 5){
        bonus += 2;
    }

    console.log(bonus)
    console.log(broj + bonus)
    
}