function even(array){
    let sum=0;
for(let prop of array){
    if(prop%2===0){
         sum=sum+prop;
    }
}


return sum;
}
const age=[2,3,6,6,4,5]
const result=even(age);
console.log("sum of these array is "+ result);