//a3+b3 = c3+d3...check for all values from 1 to 10000;

//optimise the code 

function optimise_cube(n){
    let first = new Map();
    let final  = new Map();
    let result =0;
    let st;
    for (let i=1 ;i<n ;i++){
        for (let j=1 ;j<n ;j++){
             result = Math.pow(i,3)+Math.pow(j,3);
            if(first.has(result)){
                arr  =  first.get(result);
                arr.push(i);
                arr.push(j);
                st = new Set(arr);
                arr = [...st];
                first.set(result,arr);
                if(arr.length % 4 === 0 || arr.length % 6 === 0){
                    final.set(result,arr);
//console.log(final);
                }
             

            }
            else {
                first.set(result,[i,j]);
            }
           // console.log(first);
            

        }

      

    }



    return final.size;

}

//find all permutaion of the given test string in main string
//sliding window problem type ha kuch
function findPermutaionStringIn(sub_str, main_str){
let sub_len = sub_str.length;
sub_str = sub_str.split().sort().join();
console.log("sub",sub_str);
let count=0;
let index =[];
let sstr;
if(sub_len > main_str.length){
    return count;
}
for(i =0;i<main_str.length - sub_len;i++){
    if(smain_str[i]){

    
    sstr =main_str;
    sstr = sstr.slice(i,sub_len+i);
    console.log(i, "original",sstr);
    sstr = sstr.split("").sort().join("");
    console.log("after",sstr);
    if(sub_str === sstr){
        count++;
        index.push(i);
    }
}
}
return index;
}

function allpermutation(str){
    

}

console.time();
console.log(findPermutaionStringIn("abc","cbaoisdbcabcba"));
console.timeEnd();