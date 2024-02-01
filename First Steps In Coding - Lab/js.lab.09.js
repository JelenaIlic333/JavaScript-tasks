function gardening(meter){
    let cena=Number(meter) * 7.61;
    let popust= cena * 0.18;
    let konacnaCena= cena - popust;

    console.log(`The final price is: ${konacnaCena} USD.`)
    console.log(`The discount is: ${popust} USD.`)


}