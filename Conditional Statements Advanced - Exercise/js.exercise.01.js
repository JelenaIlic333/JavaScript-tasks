
function bioskop(projectionType, numRows, numCols){

    numRows = Number(numRows)
    numCols = Number(numCols)

    let pricePerSeat = 0;

    switch(projectionType){
        case "Premiere":
            pricePerSeat = 12;
            break;
        case "Normal":
            pricePerSeat = 7.5
            break;
        default:
            pricePerSeat = 5;
            break;
    }

    let totalPrice = numRows * numCols * pricePerSeat;

    console.log(totalPrice.toFixed(2) + " USD")
}