function godzilla(budget, people, pricePerClothes){

    let scenery= budget * 0.10;
    let clothing=people * pricePerClothes;
    let sumForFilm;
    let sum;

    if(people > 150){
        let discountOnClothing= clothing * 0.1;
        let withDiscount= clothing - discountOnClothing;
         sum=scenery + withDiscount;
        //  sumForFilm= budget - sum;

            if(budget < sum){
                sumForFilm=(sum - budget).toFixed(2);
                console.log("Not enough money!")
                console.log(`Wingard needs ${sumForFilm} USD more.`)
        
            }else{
                let sumForFilm=(budget - sum).toFixed(2);
                console.log("Action!");
                console.log(`Wingard starts filming with ${sumForFilm} USD left.`)
                
            }
    }else{
         sum=scenery + clothing;
        //  sumForFilm=(budget - sum).toFixed(2);

            if(budget < sum){
                sumForFilm=(sum - budget).toFixed(2);
                console.log("Not enough money!")
                console.log(`Wingard needs ${sumForFilm} USD more.`)
        
            }else{
                sumForFilm=(budget - sum).toFixed(2);
                console.log("Action!");
                console.log(`Wingard starts filming with ${sumForFilm} USD left.`)
                
            }
    }

  

}

// godzilla(20000, 120, 55.5)
// godzilla(9587.88,
//     222,
//     55.68)