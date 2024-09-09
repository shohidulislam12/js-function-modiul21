
// function sumOfNumber(numbers){
//     let  summ=0;
// for(const number of numbers){
//     summ=summ+number;
    
// }
// return summ;
// }

// const num=[23,3,4,4,3,3,4]
// const sum=sumOfNumber(num);
// console.log("sum of all number is : "+ sum);

function multiply(array){
    let mul=1;
  for(let prop of array){
    mul=mul*prop;
  }
  return mul;

}

const cost=[20,30,40,50]
const result=multiply(cost)
console.log(result);