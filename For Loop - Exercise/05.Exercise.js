function solve(index){
    n = Number(index[0]);
    salary = Number(index[1])
    // let result;
    // Array=[];
    // for(i=2; i<=n; i++){
    //     Array.push(index[i]);
    // }
    

    for(let i=1; i <= n; i++){
        // let nameWebsite= Array[i]
        if( index[i] === "Facebook"){
            salary= salary - 150;
        }else if(index[i] === "Instagram"){
            salary= salary - 100;
        }else if(index[i] === "Reddit"){
            salary = salary - 50;
        }
    }

    if(salary <= 0){
        console.log("You have lost your salary.")
    }else{
        console.log(Math.round(salary))
    }
}
// solve([3,500, 'Github.com', 'Stackoverflow.com', 'Softuni.bg'])
// solve([10,750, 'Facebook', 'Stackoverflow.com', 'Instagram', 'Facebook', 'Reddit', 'Facebook', 'Facebook'])
// solve([3,500, 'Facebook', 'Stackoverflow.com', 'Softuni.bg'])