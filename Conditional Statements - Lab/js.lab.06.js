function oceniBrzinu(brzina){

    let rezultat="";

    if(brzina <= 10){
        rezultat="slow"
    }else if(brzina > 10 && brzina <= 50){
        rezultat="average"
    }else if(brzina > 50 && brzina <= 150){
        rezultat="fast"
    }else if(brzina > 150 && brzina <= 1000){
        rezultat="ultra fast"
    }else{
        rezultat="extremely fast"
    }

    console.log(rezultat)
}