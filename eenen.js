function even(array){
    let even_array=[];
for(let prop of array){
    if(prop%2===0){
          even_array.push(prop)
    }
}


return even_array;
}
const age=[23,5,67,86,56,92,12,35]
const result=even(age);
console.log(result);