function akvarijum(duzina, sirina, visina, pesak){
    let zapreminaCm3= duzina * sirina * visina;
    let zapreminaLitara= zapreminaCm3 * 0.001;
    let zapreminaSaPeskom= zapreminaLitara * (1- pesak / 100);
    
    console.log(zapreminaSaPeskom)

}