function doDoubleorTriple(number ,double){
     if(double===true){
        const result= number*2;
        return result;
     }
     else{
        const result=number*3;
        return result;
     }
}
console.log(doDoubleorTriple(20,true));
console.log(doDoubleorTriple(34,false));