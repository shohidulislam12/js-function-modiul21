// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arry){
    let sum=0;
   for(let prop of arry){
       sum=sum+prop;
   }
   let avg=sum/arry.length;
   return avg;

}
const numbers=[12,34,3,4,24,5]
let result=make_avg(numbers);
console.log(result);