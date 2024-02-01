function solve(input){
    let numTour= Number(input[0]);
    let startPoints= Number(input[1]);

    let endPointsW = 0;
    let endPointsF = 0;
    let endPointsSF = 0;

    let wins= 0;

    for (let i = 2; i <= numTour + 2; i++){

        if(input[i] === "W"){
            endPointsW += 2000;
            wins++;
        }else if(input[i] === "F"){
            endPointsF += 1200;
        }else if(input[i] === "SF"){
            endPointsSF += 720;
        }
    }

    let finalPoints = startPoints + endPointsW + endPointsF + endPointsSF;

    let averagePoints = (endPointsW + endPointsF + endPointsSF) / numTour;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${((wins / numTour) * 100).toFixed(2)}%`);

}