process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    process.stdout.write("Hi, " + input + ".\n");    
      // Writing output to STDOUT
    console.log("gcd", gcd(5,[1,2,3,8,6]));
}
function gcd(l,arr){
    let newarr=[];let val;;
    let leastval = new Map();
    arr = arr.sort();
    let add =0;
    if(arr[0]>1){
        start = arr[0];
        next = arr[1];
        add=0;
    }
    else {
        start =2;
        next =3;
        add =1;
    }
    for(let i=0;i<l;i++){
        for(let j=1 ;j<l;j++){

              if(arr[i] >1 && arr[j]>1){

        if(arr[j] % arr[i] !== 0){

            if(leastval.has(arr[i])){
                val =  leastval.get(arr[i]);
                val++;
                leastval.set(arr[i], val);
               
            }
            else {
                leastval.set(arr[i],1);
            }
        }
        
    }

        }
      
        }
    let min_value =  [...leastval.values()].sort()[0];

return min_value+add;
}




