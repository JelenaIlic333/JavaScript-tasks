function solve(budget, season, fisherman) {
    /*
Spring", "Summer", "Autumn", "Winter"
    */
let price=0;
let finalPrise=0;

if(season === "Spring"){
    price=3000;
}else if(season === "Summer"){
    price=4200;
}else if(season === "Autumn"){
    price=4200;
}else if(season === "Winter"){
    price=2600;
}

if(fisherman <= 6){
    finalPrise= price * 0.90;
}else if(fisherman >= 7 && fisherman <=11){
    finalPrise= price * 0.85;
}else if(fisherman > 12){
    finalPrise= price * 0.75;
}

if(fisherman % 2 === 0 && season !== "Autumn"){
    finalPrise= finalPrise * 0.95;
}


if(budget < finalPrise){
    let needed= (finalPrise - budget).toFixed(2);
    console.log(`Not enough money! You need ${needed} USD.`)
}else{
    let remainingAmount= (budget - finalPrise).toFixed(2);
    console.log(`Yes! You have ${remainingAmount} USD left.`)
}
}

// solve(3000,
//     "Summer",
//     11)
solve(2000,
    "Winter",
    14)