function dostavaHrane(pileciMeni, ribljiMeni, vegeMeni){
    let totalMenija= pileciMeni * 10.35 + ribljiMeni * 12.40 + vegeMeni * 8.15;
    let dessert= totalMenija * 0.2;
    let krajnjiTotal= totalMenija + dessert + 2.5;

    console.log(`${krajnjiTotal}`)
}