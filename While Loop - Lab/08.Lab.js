function solve(input){

    let studentName = input[0];

    let gradeCount = 1;

    let totalGrades = 0;

    let failures = 0;

    let index = 1;

    while ( gradeCount <= 12){

        let currentGrade = Number(input[index]);

        if(currentGrade < 4.0){
            failures++;
        

        if(failures > 1){
            console.log(`${studentName} has been excluded at ${gradeCount} grade`);
            break;
        }
    }

    totalGrades += currentGrade;

    if(failures < 1 || (failures === 1 && currentGrade >= 4.0)){
        gradeCount++;
    }
    index++;
}

if(failures < 2){
    let averageGrade = totalGrades / 12;

    console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`);
}
}