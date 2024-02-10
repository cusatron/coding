function makeHash(n){
    let str ="#";
    for(let i=1; i< ((2*n)-1) ;i++){
       str +="#";
    }
    return str;
}
function makeSpace(n){
    let str ="";
    for(let i=0; i< n ;i++){
       str +=" ";
    }
    return str;
}
function pyramid(n) {
    for(let i=1; i <= n ;i++){
        console.log(makeSpace(n-i)+makeHash(i)+"\n");
    }
    
    
}

pyramid(4);