function izracunaj(najlon, farba, razredjivac, satiRada){
    let total = (najlon + 2) *1.5 + farba * 1.1 * 14.50 + razredjivac * 5 + 0.40

    let suma = 0.3 * total * satiRada + total

    console.log(`${suma}`)
}