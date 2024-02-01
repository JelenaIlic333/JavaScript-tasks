function solve(num1, num2) {
    let sum=0; 
    const deljivSa9=[];
    let broj;
    let index=0;

    for(i= num1; i<= num2; i++){
        if(i % 9 == 0){
             sum = sum + i;
              broj=i;
            deljivSa9[index]=broj;
            index++;
            

            
        }
    }
    console.log(`The sum: ${sum}`)

    for(i=0; i< deljivSa9.length; i++){
        console.log(deljivSa9[i]);
    }
     
}
//  solve(100,200)