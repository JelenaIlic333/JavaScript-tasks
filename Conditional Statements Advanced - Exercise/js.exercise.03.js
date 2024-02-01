function calculate(flower, number , budget){
    number= Number(number)
    budget = Number(budget)

    let price= 0;

    if(flower === 'Roses'){
        price = number * 5;

        if(number > 80){
            price = price * 0.9// 10%
        }
    }else if(flower === 'Dahlias'){
        price = number * 3.8;
        if(number > 90){
            price = price * 0.85;//15%
        }
    }else if(flower === 'Tulips'){
        price = number * 2.8;
        if(number > 80){
            price = price * 0.85;//15%
        }
    }else if(flower === 'Narcissus'){
        price = number * 2.5
        if(number < 120){
            price = price * 1.15//povecanje 15%
        }
    }else if(flower === 'Gladiolus'){
        price = number * 2.5
        if(number < 80){
            price = price * 1.2//povecanje 20%
        }
    }

    if(budget >= price){
        let left = budget - price;
        console.log(`Hey, you have a great garden with ${number} ${flower} and ${left.toFixed(2)} USD left.`)
    }else{
        let left= price - budget;
        console.log(`Not enough money, you need ${left.toFixed(2)} USD more.`)
    }
}

// calculate("Tulips",
// 88,
// 260)
calculate("Narcissus",
119,
360)

