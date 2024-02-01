function solve([age, priceLaundry, priceToy]){
    let moneyReceived = 0;
    let toyCounter = 0;

    let moneyGift = 10;

    for (let i=1; i <= age; i++){
        if(i % 2 === 0){
            moneyReceived += moneyGift;
            moneyGift += 10;
            moneyReceived -= 1;
        }else{
            toyCounter++;
        }
    }
    moneyReceived += toyCounter * priceToy;

    if(moneyReceived >= priceLaundry){
        console.log(`Yes! ${(moneyReceived - priceLaundry).toFixed(2)}`)
    }else{
        console.log(`No! ${(priceLaundry - moneyReceived).toFixed(2)}`)
    }
}