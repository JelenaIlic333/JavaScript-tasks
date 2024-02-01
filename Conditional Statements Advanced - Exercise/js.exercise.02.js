function summerOutfit(degrees, time){
    degrees = Number(degrees)

    let outfit;
    let shoes;

    switch(time){
        case "Morning":
            if(degrees >= 10 && degrees <= 18){
                outfit = "Sweatshirt";
                shoes = "Sneakers"
            }else if(degrees > 18 && degrees <= 24){
                outfit = "Shirt"
                shoes = "Moccasins"
            }else if(degrees >= 25){
                outfit = "T-Shirt";
                shoes = "Sandals";
            }
            break;
        case "Afternoon":
            if(degrees >= 10 && degrees <= 18){
                outfit = "Shirt";
                shoes = "Moccasins"
            }else if(degrees > 18 && degrees <=24){
                outfit = "T-Shirt";
                shoes = "Sandals"
            }else if(degrees >= 25){
                outfit= "Swim Suit";
                shoes = "Barefoot";
            }
            break;

        case "Evening":
            outfit = "Shirt";
            shoes = "Moccasins"
            break;

        default:
            console.log("Invalid time of day")
            return;
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}