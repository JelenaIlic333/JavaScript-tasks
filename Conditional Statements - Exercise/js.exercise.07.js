/*
⦁	Video card – 250 USD/per piece.
⦁	Processor – 35% of the price of purchased video cards/per piece.
⦁	RAM – 10% of the price of purchased video cards/per piece.

*/
function calculate(budget, numberVideoCards, numberProcessors, numberRAMs) {
        let videoCard= 250;
        let amountForvideoCard= numberVideoCards * videoCard;

        let processors= amountForvideoCard * 0.35;
        let amountForProcessor= numberProcessors * processors;

        let ram= amountForvideoCard * 0.1;
        let amountForRam= numberRAMs * ram;

        let totalAmount= amountForvideoCard + amountForProcessor + amountForRam;

        if( numberVideoCards > numberProcessors){
            let discount= totalAmount * 0.15;
            let totalPrice= totalAmount - discount;

                if (budget > totalPrice ){
                        
                let count=(budget - totalPrice).toFixed(2)

                console.log(`You have ${count} USD left!`)
                }else{
                    let needed= (totalPrice - budget).toFixed(2);
                    console.log(`Not enough money! You need ${needed} USD more!`)
                }

        }else{
            if (budget > totalAmount ){
                        
                let count=(budget - totalAmount).toFixed(2)

                console.log(`You have ${count} USD left!`)
                }else{
                    let needed= (totalAmount - budget).toFixed(2);
                    console.log(`Not enough money! You need ${needed} USD more!`)
                }

        }

    
}
calculate (920.45,
    3,
    1,
    1)