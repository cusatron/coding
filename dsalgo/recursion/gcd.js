function gcd(a, b){
    
if ( a % b === 0 || b % a ===0){
    return (a >b ? b : a);
}
let gc =  helper(a,b, a < b ? parseInt(a/2) : parseInt(b/2));
console.log("gc",gc);
return gc;
   

}

function helper (sm,lg,i){
    console.log("1",sm,lg,i);
   

     if(i > 1 ){
        if(i === 2 ){
            console.log("2",sm,lg,i);
            return 2;
        }

    if(sm % i === 0 && lg % i ==0){
    console.log("3",sm,lg,i);
        return i;
    }
    else {
        console.log("4",sm,lg,i);
        helper(sm,lg,i-1);
    }
     
}


}

console.log(gcd(27,36));