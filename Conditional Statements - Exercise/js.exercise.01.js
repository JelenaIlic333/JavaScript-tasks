function sumiraj(a, b, c){
    let prveMinute= Number(a)
    let drugeMinute= Number(b)
    let treceMinute= Number(c)

    let totalnoVreme= prveMinute + drugeMinute + treceMinute

    let minuti= totalnoVreme / 60

    let totalnoMinuta= Math.floor(minuti)

    let sekunde= totalnoVreme % 60

    if(sekunde < 10){
        console.log(`${totalnoMinuta}:0${sekunde}`)
    }else{
        console.log(`${totalnoMinuta}:${sekunde}`)
    }
}

// sumiraj(35,45,44)