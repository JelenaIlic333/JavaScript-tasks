function solve(input){
    
    let actorName = String(input[0]);
    let academyPoints = Number(input[1]);
    let numberOfAssessors = Number(input[2]);
    
    let sumPointsAssessors=0;
    let sumPoints=0;

    for(let i=3; i< input.length; i++){
        let nameOfAssessors = String(input[i]);
        let numberPoints= input[i+1];
        i++;
        let numberAssessorsName= (nameOfAssessors).length;

        let actorNumberPoints= numberPoints * numberAssessorsName / 2;

        sumPointsAssessors= sumPointsAssessors + actorNumberPoints;

        sumPoints = academyPoints + sumPointsAssessors;

        if (sumPoints >= 1250.5){
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(sumPoints).toFixed(1)}!`)
            return;
        }
    }
        let needed_points=1250.5 - sumPoints;

        console.log(`Sorry, ${actorName} you need ${(needed_points).toFixed(1)} more!`)

    

    
}

solve(['Tom Hanks', 205, 4, 'Johhny Depp', 45, 'Will Smith', 29, 'Jet Lee', 10, 'Matthew McConaughey', 39])