function evenSizedString(str){
    const size=str.length;
    if(size%2==0){
        console.log("evenSize");
        return true;
    }
    else{
        console.log("odd size ");
        return false;
    }
    console.log(str,size);
}
evenSizedString("dhaka bd")