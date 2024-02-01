function oldBooks(input){

    let favoritebook = input[0];
    let index = 1;
    let books = input[index];
    let booksIsFound = false;

    while (books != "No More Books"){

        if(books === favoritebook){
            console.log(`You checked ${index - 1} books and found it.`);
            booksIsFound = true;
            break;
        }
        index++;

        books = input[index];
    }
    if(booksIsFound == false){
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    }
}