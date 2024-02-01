function solve(budget, season) {


    if(budget <= 100){

        if(season === "summer"){
            let rez= (budget * 0.3).toFixed(2);

            console.log(`Somewhere in Bulgaria`);
            console.log(`Camp - ${rez}`);
        }else if(season === "winter"){
            let rez= (budget * 0.7).toFixed(2);

            console.log(`Somewhere in Bulgaria`);
            console.log(`Hotel - ${rez}`);
        }
    }else if(budget <= 1000){

        if(season === "summer"){
            let rez= (budget * 0.4).toFixed(2);

            console.log(`Somewhere in Balkans`);
            console.log(`Camp - ${rez}`);
        }else if(season === "winter"){
            let rez= (budget * 0.8).toFixed(2);

            console.log(`Somewhere in Balkans`);
            console.log(`Hotel - ${rez}`);
        }
    }else if(budget > 1000){
        
        if(season === "summer"){
            let rez= (budget * 0.9).toFixed(2);

            console.log(`Somewhere in Europe`);
            console.log(`Hotel - ${rez}`);
        }else if(season === "winter"){
            let rez= (budget * 0.9).toFixed(2);

            console.log(`Somewhere in Europe`);
            console.log(`Hotel - ${rez}`);
    }
}

}