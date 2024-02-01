function racunajVreme(startHour, startMinutes){

    startHour= Number(startHour)
    startMinutes= Number(startMinutes)

    let minutes= startHour * 60 + startMinutes + 15;

    let currentHour= 0;
    let currentMinutes= 0;

    if(minutes / 60 !==0){
        currentHour= Math.trunc(minutes / 60)
        currentMinutes= minutes % 60

        if(currentHour > 23){
            currentHour = 0
        }
    }else if( minutes / 60 === 0){
        currentHour = 0;
        currentMinutes = 0;
    }

    if(currentMinutes <= 9){
        console.log(`${currentHour}:0${currentMinutes}`)
    }else{
        console.log(`${currentHour}:${currentMinutes}`)
    }
 
}

racunajVreme(1, 46)
