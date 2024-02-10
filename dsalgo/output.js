function a(){
    console.log("a");

}
 function b(){
    setTimeout(()=>console.log(a()),0);
    console.log("b");
}

async function main(){
    await b();
     a();
   
}
main();
