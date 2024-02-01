/*
⦁	The exam hour – an integer from 0 to 23.
⦁	The exam minute – an integer from 0 to 59.
⦁	The arrival hour – an integer from 0 to 23.
⦁	The arrival minute – an integer from 0 to 59.
*/

function solve(examHour, examMin, arrivalHour, arrivalMin) {

    let vreme_pocetka_ispita_minuti= examHour * 60 + examMin;
    let vreme_dolazak_ispit_minuti = arrivalHour * 60 + arrivalMin;

    let razlika_od_pocetka_ispita = vreme_pocetka_ispita_minuti - vreme_dolazak_ispit_minuti;

   
    if (razlika_od_pocetka_ispita < 0){
        console.log("Late");
        let vreme_pozitivno = -razlika_od_pocetka_ispita;

        if (vreme_pozitivno > 59){
            let sati = vreme_pozitivno / 60;
            let minuti = (vreme_pozitivno % 60).toFixed(2);
            console.log(`${sati} : ${minuti} hours after the start`);
        }else{
           console.log(vreme_pozitivno + " minutes after the start");
        }

    } else if (razlika_od_pocetka_ispita == 0){
        console.log("On time");
    } else if (razlika_od_pocetka_ispita <= 30){
        console.log("On time");
        console.log(razlika_od_pocetka_ispita + " minutes before the start");
    } else {
        /// zelim da ispisem format u satima koliko je poranio, ako minuti predju
        /// vrednost 59
        console.log("Early");
        if (razlika_od_pocetka_ispita > 59){ /// ako je preko 59 minuta, konvertujemo ih u sate
            /// 210 / 60 = 3( 30 )
            let broj_sati = razlika_od_pocetka_ispita / 60;
            let preostalo_minuta = (razlika_od_pocetka_ispita % 60);
            console.log(broj_sati + `:`  + preostalo_minuta + "hours before the start");
        } else { // ako je poranio manje od 1h pisemo minute
            console.log(razlika_od_pocetka_ispita + " minutes before the start");
        }
    }

}

// solve(16,
//     0,
//     15,
//     0)