function exam(input){
    let index = 0;
    let maxPoorGrades = Number(input[index++]);
    let totalGrades = 0;
    let numProblems = 0;
    let lastProblem = "";
    let numPoorGrades = 0;

    while (true){

        let problemName = input[index++];
        let grade = Number(input[index++]);
            
            if(problemName === "Enough" || numPoorGrades === maxPoorGrades){
                break;
            }

            totalGrades += grade;
            numProblems++;
            lastProblem = problemName;

            if(grade <= 4){
                numPoorGrades++;
            }
    }
    if(numPoorGrades === maxPoorGrades){
        console.log(`You need a break, ${maxPoorGrades} poor grades.`);
    }else{
        console.log(`Average score: ${(totalGrades / numProblems).toFixed(2)}`);
        console.log(`Number of problems: ${numProblems}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}
exam([3,
    "Money",
    6,
    "Story",
    4,
    "Spring Time",
    5,
    "Bus",
    6,
    "Enough"])