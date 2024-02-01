function solve(input){
    let counter = [0, 0, 0, 0, 0];

    let n = Number(input[0]);

for(let i=1; i <= n; i++){
    let num = Number(input[i]);

    if(num < 200){
        counter[0]++;
    }else if(num < 400){
        counter[1]++;
    }else if(num < 600){
        counter[2]++;
    }else if(num < 800){
        counter[3]++;
    }else{
        counter[4]++;
    }
}

for (let i = 0; i< counter.length; i++){
    let percent = (counter[i] / n) * 100;
    console.log(`${percent.toFixed(2)}%`);
}
}