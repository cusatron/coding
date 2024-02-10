function swap(a,b){
    a = a ^ b;
    b = b ^ a ;
    a= a ^ b;

    console.log(a,b);

}

swap(2,8);