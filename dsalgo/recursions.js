
function reverse(str){
 
     if(str.length === 1){
        return str;
    }
    return str.pop().concat(reverse(str));
    
 
}
function curry(f) { // curry(f) does the currying transform
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }
//console.log(reverse(["m","n","b","c","x","z"]));
function isPalindrome(str){
    let l = str.length-1;
    let i=0;
    // add whatever parameters you deem necessary - good luck!
     if(str[0] !== str[l]){
         return false
     }
     if(l <=0 ){
        return true ;
    }
    return isPalindrome(str.slice(i+1,l));
    
  }

  /// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
// reverse('awesome') // 'emosewa'
//console.log(isPalindrome('amanaplanacanalpanama') );// 'loohcsmhtir'


const isOdd = val => val % 2 !== 0;
function someRecursive(arr, callback){
    let l = arr.length;
    let last =arr.pop();
    console.log("ese",arr);
           if(arr.length === 0)
           {
               return false;
           }
           if(callback(last)){
           
            return true;
            
        }
       return someRecursive(arr,callback);

    // add whatever parameters you deem necessary - good luck!
  }
  function flatten(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
          if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
          } else {
                newArr.push(oldArr[i])
          }
    } 
    return newArr;
  }
  // flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]



 function simpleCallBack(param, calback){
     let a =[1,2,3,4];
     let s = a.reduce((sum, i) => sum=sum+i);
    return calback("true");
 }
  // SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

//console.log("out",flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
//console.log(someRecursive([4,6,8], val => val > 10)); // false

/*
console.log(simpleCallBack([1,2,3,4,5],function(a){
    a=a+"ok";
return a;

}));
*/


function capitalizeFirst (arr) {
    // add whatever parameters you deem necessary - good luck!
    let caps_array = [];
   
    function caps(arr){
        let cap_str ="";
        //console.log("arr",arr);
        if(arr.length === 0){
            return caps_array;
        }

    cap_str = arr[0].toString().charAt(0).toUpperCase()+arr[0].slice(1);
    caps_array.push(cap_str);
  
    return caps(arr.slice(1));

           
        
        
    }
     
    return caps(arr);

  }

  //console.log(capitalizeFirst(['Car','Taco','Banana']));
  // ['Car','Taco','Banana']

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr){
    if(arr.length === 0){
       return 0;
   }
    else {
   if(arr.length === 1){
       return arr[0];
   }
   else {
  
       return arr.pop()*productOfArray(arr);
   }
    }
   
}
//console.log(productOfArray([3,4,1,1,9,1]));

function fib_memo(n,memoized = []){
    //let memoized = new Map();
    let res =1;
    if(memoized[n] !== undefined){
        return memoized[n];
    }
    if(n === 1 || n===2){
        return 1;
    }
    res = fib_memo(n-1,memoized)+fib_memo(n-2,memoized);
    memoized[n] = res;
       // memoized.set(fib_memo(n),fib_memo(n-1,memoized)+fib_memo(n-2,memoized));
        return res;
    

    
}
//memoization suing map
function fib_memo_map(n,memoized = new Map()){
    //let memoized = new Map();
    let res =1;
    if(memoized.has(n)){
        return memoized.get(n);
    }
    if(n === 1 || n===2){
        return 1;
    }
    memoized.set(n,fib_memo(n-1,memoized)+fib_memo(n-2,memoized));
 
        return memoized.get(n);
    

    
}
//console.log(fib_memo(11));///


/// this is example of no linkking but just getting the answer the at end like a product/sum problem
//its called tail recursion ...different from defferer recusrion which builds up as in factorial
function hcf(a,b){
    if(a > b){
        x=a;y=b;
    }
    else{
        x=b;y=a;
    }

    if(y === 0){
        return x;
    }
    return hcf(y , x%y);
}

function towerOfHonoi(n){

    if(n ===1){
        return 1;
    }
    return 1+ 2*towerOfHonoi(n-1);

}

function binarySearch(arr, str){
    let first =0;
    let last = arr.length;
    let middle = parseInt((first+last)/2);
    let i=0;
    function binarySearchAlgo (first,last){
        middle = parseInt((first+last)/2);
        console.log(arr,str,middle, first, last);
        if(arr[middle] === str ){
            return middle;
        }
        else if (middle === first || middle === last){
            return -1;
        }
        else if( str < arr[middle] ){
            return binarySearchAlgo(first,middle);
            
        } else if( str > arr[middle]){
            return binarySearchAlgo(middle,last);
        }
       
        
        
    }
    return binarySearchAlgo(first,last);
}


//heaps algorithm
function swap(str,l,r){
     str = str.split("");
    //console.log(str);
    temp =  str[l];
    str[l]=str[r];
    str[r]=temp;
    str = str.join("");
    //console.log(str);
    return str;
}
function permutaion(arr){
    let data =[];
    function helper(subarr, s,l){
        console.log(subarr,s,l);
        if(s === l ){
            data.push(subarr);
            //currentperms="";
            //return data;

        }

        else {
            for (let i=s; i<=l;i++){
                subarr = swap(subarr,s,i);
                helper(subarr,s+1,l);
                subarr = swap(subarr,s,i);
            }
    
        }

        }
        
    helper(arr,0,arr.length-1);
 return data;

}

function curryin(a,b){ return a+b}
let impcurry= curry(curryin);
console.time();
//console.log(binarySearch([2,5,7,11,15,19,21,34,56,89,90],-2));
//console.log(permutaion('abc') );
//console.log(impcurry('abc')('uisyi') );
// true
console.timeEnd();


function generateParentheses(n) {
    //let a = 
    // devashish@fabric.inc
    let open  ="(";
    let close =")";
    let valid_parentheses = [];
    let i=0;
    let o=0;
    let c=0;
        function helper(parantheses,open_count,closed_count){
             i++;
            console.log(i,parantheses);
            if(parantheses.length === (n*2)){
                valid_parentheses.push(parantheses);
                console.log("return wala ",parantheses,open_count,closed_count);
                return;
            }            
            if(open_count < n){
                o++;
                 console.log("open",o,parantheses,open_count,closed_count);
               helper(parantheses+open,open_count+1,closed_count);
            }
             if(open_count > closed_count) {
                  c++;
                 console.log("closed",c,parantheses,open_count,closed_count);
                helper(parantheses+close,open_count,closed_count+1);    
            }
              
         }
         helper("",0,0);
         return valid_parentheses;
        
     }
  
    
    


     console.log(generateParentheses(4));