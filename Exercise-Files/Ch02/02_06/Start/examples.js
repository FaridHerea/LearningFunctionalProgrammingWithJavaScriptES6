const createPrinter = () => {
    const myFavouriteNumber = 42;

    return () => console.log(`My favorite number is ${myFavouriteNumber}`);
}

const printer = createPrinter();
printer();
