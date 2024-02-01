function solve(productName){

    /*
⦁	Fruits "fruit" has the following possible values:  banana, apple, kiwi, cherry, lemon, and grapes
⦁	Vegetables "vegetable" has the following possible values:  tomato, cucumber, pepper, and carrot
⦁	Everything else is "unknown"

    */
    

    switch(productName){
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
            console.log("fruit")
            break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'carrot':
            console.log("vegetable")
            break;
        default:
            console.log("unknown");
    }
}

// solve('banana')
solve('tomato')