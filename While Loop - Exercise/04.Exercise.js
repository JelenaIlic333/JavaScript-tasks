function steps(input){
    let target = 10000; 
    let i = 0;
    let steps = 0;

    while (input[i]){
        if (input[i] === "Going home"){
            steps += Number(input[i + 1]);
            break;
        }
        steps += Number(input[i]);

        if(steps >= target) break;

        i++;
    }
        if(steps >= target){
            console.log(`Goal reached! Good job`);
            console.log(`${steps - target} steps over the goal!`);
        }else{
            console.log(`${target - steps} more steps to reach goal.`)
        }
    }
