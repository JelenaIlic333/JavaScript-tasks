function izracunaj(cenaTreninga){
    let patike= cenaTreninga * ( 100 - 40 ) / 100; // 40% ->( 100 - 40)
    let tim= patike * ( 100 - 20 ) / 100;
    let lopta= tim * 0.25; // 0.25 -> 1/4
    let dodaci= lopta * 0.20; // 0.20 -> 1/5
    
    let ukupno= cenaTreninga + patike + tim + lopta + dodaci;

    console.log(`${ukupno}`)


}