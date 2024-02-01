function solve(input){

    let moneyNeeded = input[0]; 
    let availableMoney = input[1];
    
    let index=2;
    let count=0;
    let countForSpend= 0;
    
    while(true){

/**⦁	Action type – text with "spend" and "save" options */

        count++;
    let actionType = input[index++];
    let amountToSaveSpend = input[index ++]; 

        if(actionType === "spend"){
            availableMoney = availableMoney - amountToSaveSpend;
            if(availableMoney < 0){
                availableMoney= 0;
            }
            countForSpend++;
            
                if(countForSpend == 5){
                    console.log("You can't save the money.")
                    console.log(`${count}`)
                    return;
                }

        }else if(actionType === "save"){
            availableMoney = availableMoney + amountToSaveSpend;
            if(availableMoney >= moneyNeeded){
                console.log(`You saved the money for ${count} days.`)
                return;
             }
             countForSpend=0;
        }

    }

}
solve([250,
150,
"spend",
50,
"spend",
50,
"save",
100,
"save",
100])

// solve([2000,
//     1000,
//     "spend",
//     1200,
//     "save",
//     2000])

// solve([110,
//     60,
//     "spend",
//     10,
//     "spend",
//     10,
//     "spend",
//     10,
//     "spend",
//     10,
//     "spend",
//     10])