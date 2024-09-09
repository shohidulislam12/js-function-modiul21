//Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(number){
    let sum=0;
for (let i=0;i<number.length;i++){

if(number[i]==="0"){
    sum=sum+1;

}
}
return sum;
}
let num="10100220320";
console.log(count_zero(num));