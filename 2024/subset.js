function subset(arr){
    let subsets =[];

    function solver(start = 0, sets =[]) {
       
            subsets.push([...sets]);
        for(let i = start;i < arr.length ; i++){
            sets.push(arr[i]);
            console.log(start,i,sets);
            solver(i+1, sets);
            sets.pop();

        }

    }
    solver();
return subsets;

}

function permutaion(str){

    function helper(){

    }



}
function isValidParentheses(s) {
    let stack = [];
    for (let char of s) {
        if (char === '(') {
            // Push any opening parenthesis onto the stack
            stack.push(char);
        } else if (char === ')') {
            // Pop the opening parenthesis if there's a matching closing parenthesis
            if (stack.length === 0) {
                // If the stack is empty, there's no opening parenthesis to match with
                return false;
            }
            stack.pop(); // Pop the top of the stack as it matches
        }
    }
    // If the stack is empty, all parentheses were validly closed
    return stack.length === 0;
}

// Examples
console.log(isValidParentheses("()")); // true
console.log(isValidParentheses("())")); // false
console.log(isValidParentheses("(())")); // true
console.log(isValidParentheses("(()")); // false

/// partially done by me ;
function genParantheses(n){
let lc=0;
let rc=0;
let solution =[];
 function helper(lc = 0,rc=0,para =""){
    if(lc ===n && rc ===n){
        //if(isValidParentheses(para)){

        solution.push(para);

        }
        else {
            console.log("not valid", para);
        }

    // if(para.length === n*2){
    //     solution.push(para);
    // }

    if(lc <n){

        helper(lc+1,rc,para+'(');
    }
    if(rc < lc){ /// logic
        helper(lc,rc+1,para+')');
    }


 }
 helper();
 return solution;

}


/// find a Bit manupulation answer to the problem aswell


// function findAllSubsets(array) {
//     let subsets = [];

//     function backtrack(start = 0, currentSubset = []) {
//         subsets.push([...currentSubset]);
//         for (let i = start; i < array.length; i++) {
//             currentSubset.push(array[i]); // Include the current element
//             backtrack(i + 1, currentSubset); // Explore further with the current element
//             currentSubset.pop(); // Exclude the current element and backtrack
//         }
//     }

//     backtrack();
//     return subsets;
// }

// // const array = [1, 2, 3, 4];
// // console.log(findAllSubsets(array));


// const  sample =[1,2,3,4];

// console.log(subset(sample));

console.log(genParantheses(2));