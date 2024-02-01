/*
A fruit shop works on weekdays at the following prices:
fruit	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
price	2.50	1.20	0.85	1.45	2.70	5.50	3.85

On Saturdays and Sundays, the shop sells at higher prices:
fruit	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
price	2.70	1.25	0.90	1.60	3.00	5.60	4.20

( Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday)
*/

function calculatePrice(fruit, day, number){
     
    let price=0;
    if(day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
        switch(fruit){
            case 'banana':
                price=2.50;
                console.log((number * price).toFixed(2));
                break;
            case 'apple':
                price=1.20;
                console.log((number * price).toFixed(2));
                break;
            case 'orange':
                price=0.85;
                console.log((number * price).toFixed(2));
                break;
            case 'grapefruit':
                price=1.45;
                console.log((number * price).toFixed(2));
                break;
            case 'kiwi':
                price=2.70;
                console.log((number * price).toFixed(2));
                break;
            case 'pineapple':
                price=5.50;
                console.log((number * price).toFixed(2));
                break;
            case 'grapes':
                price=3.85;
                console.log((number * price).toFixed(2));
                break;
            default:
                console.log("error")
                break;
        }
    }else if(day === "Saturday" || day === "Sunday"){
        switch(fruit){
            case 'banana':
                price=2.70;
                console.log((number * price).toFixed(2));
                break;
            case 'apple':
                price=1.25;
                console.log((number * price).toFixed(2));
                break;
            case 'orange':
                price=0.90;
                console.log((number * price).toFixed(2));
                break;
            case 'grapefruit':
                price=1.60;
                console.log((number * price).toFixed(2));
                break;
            case 'kiwi':
                price=3.00;
                console.log((number * price).toFixed(2));
                break;
            case 'pineapple':
                price=5.60;
                console.log((number * price).toFixed(2));
                break;
            case 'grapes':
                price=4.20;
                console.log((number * price).toFixed(2));
                break;
           default:
                console.log("error")
                break;
        }
    }else{
        console.log("error")
    }

}

calculatePrice('apple', 'Tuesday', 2)