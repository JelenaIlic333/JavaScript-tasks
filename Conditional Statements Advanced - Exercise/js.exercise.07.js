/*
May and October	June and September	July and August
Studio – 50 USD/overnight 	Studio – 75.20 USD/overnight 	Studio– 76 USD/overnight 
Apartment – 65 USD/overnight	Apartment – 68.70 USD/overnight 	Apartment – 77 USD/overnight 

⦁	For a studio, with more than 7 overnights in May and October: 5% discount.
⦁	For a studio, with more than 14 overnights in May and October: 30% discount.
⦁	For a studio, with more than 14 overnights in June and September: 20% discount.
⦁	For an apartment, with more than 14 overnights, regardless of the month: 10% discount.


*/



function solve(month, overnights) {
    let priceStudio=0;
    let priceApartment=0;

    if(month=== "May" || month === "October"){
        let studio= 50;
         priceStudio=studio * overnights;

            if(overnights > 7 && overnights < 14){
                 priceStudio= priceStudio * 0.95;
            }else if(overnights > 14){
                priceStudio= priceStudio * 0.7;
            }

        let apartment= 65;
        priceApartment=apartment * overnights;

                 if(overnights >14){
                priceApartment=priceApartment * 0.9;
                 }
        

    }else if(month === "June" || month === "September"){
        let studio= 75.20;
        priceStudio = studio * overnights;

            if(overnights > 14){
                priceStudio= priceStudio * 0.8;
            }

        let apartment= 68.70;
        priceApartment=apartment * overnights;

                if(overnights >14){
                priceApartment=priceApartment * 0.9;
                }
    }else if(month === "July" || month === "August"){
        let studio=76;
        priceStudio= studio * overnights;

        let apartment=77;
        priceApartment=apartment * overnights;

                if(overnights >14){
                priceApartment=priceApartment * 0.9;
                }
    }

    console.log("Apartment: " + priceApartment.toFixed(2) + " USD.")
    console.log("Studio: " + priceStudio.toFixed(2) + " USD.")

   
}

