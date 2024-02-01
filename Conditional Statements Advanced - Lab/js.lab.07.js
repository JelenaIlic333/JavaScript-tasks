function workingHours(number, day){

        if(number >= 10 && number <= 18){
            switch(day){
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                case "Saturday":
                    console.log("open")
                    break;
                default:
                    console.log("closed")
                    break;
                
            }
        }else{
            console.log("closed")
        }
}
// workingHours(11, "Monday")
workingHours(11, "Sunday")