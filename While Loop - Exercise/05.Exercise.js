function solve(input){
    let coin1= 2.0 * 100;
    let coin2= 1.0 * 100;
    let coin3= 0.5 * 100;
    let coin4= 0.2 * 100;
    let coin5= 0.1 * 100;
    let coin6= 0.05 * 100;
    let coin7= 0.02 * 100;
    let coin8= 0.01 * 100;

    let amountOfMoney= input * 100;
    let currentCoin = coin1;
    let coinCounter = 0;

    while(amountOfMoney != 0){
        amountOfMoney= Math.floor(amountOfMoney);

        if(amountOfMoney - currentCoin >= 0){
            amountOfMoney = amountOfMoney - currentCoin;
            coinCounter++;
        }else{
            if(currentCoin == coin1){
                currentCoin = coin2;
            }else if(currentCoin == coin2){
                currentCoin = coin3;
            }else if(currentCoin == coin3){
                currentCoin = coin4;
            }else if(currentCoin == coin4){
            currentCoin = coin5;
            }else if(currentCoin == coin5){
                currentCoin = coin6;
            }else if(currentCoin == coin6){
                currentCoin = coin7;
            }else if(currentCoin == coin7){
                currentCoin = coin8;
            }
        }
    }
    console.log(coinCounter);

    

}

// solve(1.23)