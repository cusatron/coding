//concept in a prime number factor pn2 factor will in within squore toon of n .. n =a*b wjere a and b is factor ..one will be small other will be big..even the small
//even small one will be less than factor squore root of n and
//see of eargthenese

let findPrime = function (end){
    let numbers =[];
    let primes =[];
    let max = parseInt(Math.sqrt(end));
    for ( let i = 0; i< end;i++){
        numbers.push(true);
    }

   

    for ( let i = 0; i< end;i++){
        numbers.push(true);
    }
    console.log("no count",numbers.length);
        
        
        for (let j =2;j <= max;j++){
          
                if(numbers[j]){
                  
                    for( let k =j+j;k<end;k=k+j){
                        numbers[k]=false;
                        //console.log(j,"numbers",k,numbers)
                    }

                }
                
            }
           

        
        for ( let i = 2; i< end;i++){
            if(numbers[i] === true){  primes.push(i);}
           
        }
       return primes.length;
    }


let decoratorPrime =  function(start,end){
    console.time();
    let p1 = findPrime(start);
    console.timeEnd();
    ///
    console.time();
    let p2 = findPrime(end);
    console.timeEnd();
    console.log(p2,p1);
    console.log(p2-p1);
}

decoratorPrime(1000,20000);
