function rezultat(town, sales){

    sales=Number(sales);


    switch(town){
         case "London":
             if(sales<= 500 && sales > 0){
                console.log((sales * 0.05).toFixed(2));
             }else if(sales > 500 && sales <= 1000){
                console.log((sales * 0.07).toFixed(2));
             }else if(sales > 1000 && sales <= 10000){
                console.log((sales * 0.08).toFixed(2));
             }else if(sales > 10000){
                console.log((sales * 0.12).toFixed(2))
             }else{
                console.log("error")
             }
             break;
                case "Rome":
                    if(sales<= 500 && sales > 0){
                    console.log((sales * 0.045).toFixed(2));
                    }else if(sales > 500 && sales <= 1000){
                    console.log((sales * 0.075).toFixed(2));
                    }else if(sales > 1000 && sales <= 10000){
                    console.log((sales * 0.1).toFixed(2));
                    }else if(sales > 10000){
                    console.log((sales * 0.13).toFixed(2))
                    }else{
                    console.log("error")
                    }
                    break;
                    case "Paris":
                        if(sales<= 500 && sales > 0){
                           console.log((sales * 0.055).toFixed(2));
                        }else if(sales > 500 && sales <= 1000){
                           console.log((sales * 0.08).toFixed(2));
                        }else if(sales > 1000 && sales <= 10000){
                           console.log((sales * 0.12).toFixed(2));
                        }else if(sales > 10000){
                           console.log((sales * 0.145).toFixed(2))
                        }else{
                           console.log("error")
                        }
                        break;

                        default:
                            console.log("error")
                            break;

}
}