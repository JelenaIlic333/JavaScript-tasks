/*
⦁	Puzzle - 2.60 USD
⦁	Talking doll – 3 USD
⦁	Teddy bear - 4.10 USD
⦁	Minion - 8.20 USD
⦁	Truck – 2 USD 

*/

function toyShop (price, numPuzzles, numDolls, numBears, numMinions, numTrucks){
    // let price="";
    let puzzle= 2.60
    let dolls= 3
    let teddyBear= 4.10
    let minion= 8.20
    let truck= 2

    let sum= numPuzzles * puzzle + numDolls * dolls + numBears * teddyBear + numMinions * minion + numTrucks * truck;

    let sumToy= numPuzzles + numDolls + numBears + numMinions + numTrucks;

    if( sumToy >= 50){
        let discount= sum * 0.25; // 25% od sume
        let finalPrice= sum - discount;
       // console.log(`${finalPrice}`)
        let rent= finalPrice * 0.1; // 10% od sume sa popustom
        let profit= finalPrice - rent;
        //console.log(`${profit}`)

             if(price < profit){
            let left= (profit - price).toFixed(2)
            console.log(`Yes! ${left} USD left.`)
            }else {
            let needed= (price - profit).toFixed(2)
            console.log(`Not enough money! ${needed} USD needed.`)
            }

    }else{
        let rent= sum * 0.1;
        let profit= sum - rent;

            if(price < profit){
            let left= (profit - price).toFixed(2)
            console.log(`Yes! ${left} USD left.`)
            }else {
            let needed= (price - profit).toFixed(2)
            console.log(`Not enough money! ${needed} USD needed.`)
            
            }

    }
}

  toyShop(40.8, 20, 25, 30, 50, 10)
// // //solve(320,
// // 8,
// // 2,
// // 5,
// // 5,
// // 1)//

// toyShop(320, 8, 2, 5, 5, 1)