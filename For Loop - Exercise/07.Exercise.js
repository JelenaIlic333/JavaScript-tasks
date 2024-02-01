function solve(input){

    let numberOfGroups= input[0];

    let broj_planinara;
    let first_row=0;
    let second_row=0;
    let third_row=0;
    let fourth_row=0;
    let fifth_row=0;

    for (let i=1; i <= numberOfGroups; i++){

        broj_planinara= input[i];

            if (broj_planinara <= 5){
                first_row=first_row + broj_planinara;
            } else if (broj_planinara <= 12){
                second_row=second_row + broj_planinara;
            } else if (broj_planinara <= 25){
                third_row=third_row + broj_planinara;
            } else if (broj_planinara <= 40){
                fourth_row=fourth_row + broj_planinara;
            } else if (broj_planinara >= 41 && broj_planinara<=1000){
                fifth_row=fifth_row + broj_planinara;
            }
        } 
        
        let ukupno= first_row + second_row + third_row + fourth_row + fifth_row;
        let ukupno_first_row=first_row / ukupno * 100;
        console.log(`${(ukupno_first_row).toFixed(2)}%`)

        let ukupno_second_row=second_row / ukupno * 100;
        console.log(`${(ukupno_second_row).toFixed(2)}%`)

        let ukupno_third_row=third_row/ukupno * 100;
        console.log(`${(ukupno_third_row).toFixed(2)}%`)

        let ukupno_fourth_row=fourth_row/ukupno * 100;
        console.log(`${(ukupno_fourth_row).toFixed(2)}%`)

        let ukupno_fifht_row=fifth_row/ukupno * 100;
        console.log(`${(ukupno_fifht_row).toFixed(2)}%`)
    
}

// solve([10, 10, 5, 1, 100, 12, 26, 17, 37, 40, 78])