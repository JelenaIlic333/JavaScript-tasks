function svetskiRekord(rekordUSekundama, udaljenostUMetrima, sekundePoMetrima){
    rekordUSekundama= Number(rekordUSekundama)
    udaljenostUMetrima= Number(udaljenostUMetrima)
    sekundePoMetrima= Number(sekundePoMetrima)

    let vremeZaPlivanje=udaljenostUMetrima * sekundePoMetrima

    let usporenje=Math.trunc(udaljenostUMetrima / 15)
    usporenje= usporenje * 12.5;

    let ukupnoVreme= vremeZaPlivanje + usporenje;

    let razlika= Math.abs(ukupnoVreme - rekordUSekundama)

    if(ukupnoVreme < rekordUSekundama){
        console.log(`Yes, he succeeded! The new world record is ${ukupnoVreme.toFixed(2)} seconds.`)

    }else{
        console.log(`No, he failed! He was ${razlika.toFixed(2)} seconds slower.`)
    }
}