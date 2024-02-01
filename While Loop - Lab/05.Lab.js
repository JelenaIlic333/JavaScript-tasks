function accountBalance(input){

    let deposit = input[0];

    let balans = 0;

    let index = 1;

    while (deposit !== "NoMoreMoney"){

        let amount = Number(deposit);

        if(amount < 0){

            console.log("Invalid operation!");
            break;
        }

        balans += amount;

        console.log(`Increase: ${amount.toFixed(2)}`);

        deposit = input[index];
        index++;
    }

    console.log(`Total: ${balans.toFixed(2)}`);
}