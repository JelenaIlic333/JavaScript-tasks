function stvariZaSkolu(olovke,markere,sredstvoZaCiscenje, snizenje){
    let ukupno= (olovke *5.8+markere*7.2+sredstvoZaCiscenje*1.2)
    let posleSnizenja= ukupno - (ukupno * snizenje/100)

    console.log(posleSnizenja)
}