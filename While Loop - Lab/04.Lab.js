function solve(n){
  
   let result=0;
   let counter=1;

    while(true){
        result= result * 2 + 1;
        counter++;
        
        if(result <= n){
        console.log(result)
        }else{
            return;
        }

    }
}
// solve(17)