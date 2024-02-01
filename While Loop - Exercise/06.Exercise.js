function solve(input){

    let widthOfTheCake = input[0];
    let lengthOfTheCake = input[1];

    let totalPiece = widthOfTheCake * lengthOfTheCake;
    let currentSumOfPieces = 0;
    

    while(true){
        let currentlyTakenPieceString = String(input[index++]);
            if(currentSumOfPieces === "STOP"){
                let  remainingPiece = totalPiece - currentSumOfPieces;
                console.log(`${remainingPiece} pieces are left.`)
              return;
            }

            let currentlyTakenPiece = Number(currentlyTakenPieceString);
            currentSumOfPieces = currentSumOfPieces + currentlyTakenPiece;

            if(currentSumOfPieces > totalPiece){
                let cakeIsMissing = currentlyTakenPiece - totalPiece;

                console.log(`No more cake left! You need ${cakeIsMissing} pieces more.`);
                    return;
            }
    }
   
}

solve[(10,
    10,
    20,
    20,
    20,
    20,
    21)]