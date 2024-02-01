/*
⦁	"room for one person" – 18.00 USD/per overnight
⦁	"apartment" – 25.00 USD per overnight
⦁	"president apartment" – 35.00 USD/per overnight


The discounts are as follows:

Room type	             Less than 10 days	         Between 10 and 15 days  	    More than 15 days
room for one person	     no discount 	                no discount	                      no discount
apartment	             30% of the final price	       35% of the final price	      50% of the final price
president apartment	    10% of the final price	      15% of the final price	       20% of the final price

*/

function solve(days, room, feedback) {
    let price=0;
    let totalPrice=0;
    let discount=0;

    if(room === "room for one person"){
        price=18.00;
        totalPrice= price * (days-1);
        
    }else if(room === "apartment"){
        price=25.00;
        totalPrice= price * (days-1);
            if(days < 10){
            totalPrice= totalPrice * 0.7;
            }else if(days >= 10 && days <= 15){
                totalPrice=totalPrice * 0.65;
            }else if(days > 15){
                totalPrice= totalPrice * 0.5;
            }
    }else if(room === "president apartment"){
        price=35.00;
        totalPrice= price * (days-1);
            if(days < 10){
            totalPrice= totalPrice * 0.9;
            }else if(days < 10 && days > 15){
                totalPrice=totalPrice * 0.85;
            }else if(days > 15){
                totalPrice= totalPrice * 0.80;
            }
    }

    if(feedback === "positive"){
         discount= totalPrice * 1.25;
    }else if(feedback === "negative"){
         discount= totalPrice * 0.90;
    }
    
    console.log(discount.toFixed(2))
   
}
// solve(14,
//     "apartment",
//     "positive")
// solve( 30, "president apartment", "negative")