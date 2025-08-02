function isOddOrEven(number) {
    if (number%2 === 0) {
        console.log("This is an even number");       
    }else if(typeof number !== 'number') {
        console.log("Please insert only number");
    }else{
        console.log("This is an odd number");
        
    }
}
isOddOrEven('test')