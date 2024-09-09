//Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function numbers(number){
    if(number%2===1){
        let mul=number*2;
        return mul;
    }
    else {
        let div=number/2;
        return div;
    }

}
let result=numbers(13);
console.log(result);