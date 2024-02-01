function depositCalculator(input1, input2, input3){
    let deposit= input1;
    let depositPeriod= input2;
    let interestRate= input3 / 100;
    let result= deposit + depositPeriod * ((deposit * interestRate) / 12)

    console.log(result)
}