function factorial(anyNumber){  
    let result = 1; 

    if (anyNumber<0) {
        anyNumber = Math.abs(anyNumber); // Changes negative number input to positive value

        for (let i = anyNumber; i>0; i--) {
            result = result * i;
        }
        
    } else {
        for (let i = anyNumber; i>0; i--) {
            result = result*i;
        }
    }
    return result;
}

console.log(factorial(-4));
console.log(factorial(4));
