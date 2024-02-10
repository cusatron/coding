function generateSubsets(nums) {
    const result = [];
    function backtrack(start = 0, current = []) {
      result.push([...current]);
      console.log("master",start,current, result);
      for (let i = start; i < nums.length; i++) {
        console.log("for look #######",i);
        current.push(nums[i]);
        console.log("psuh",i,start,current, result);
        backtrack(i + 1, current);
        console.log("pop with i",i,start,current, result);
        current.pop();
      }
    }
    backtrack();
    return result;
  }
  
  function solveNQueens(n) {
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    const solutions = [];
  
    function isValid(row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') {
                return false; // Check same column
            }
            if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') {
                return false; // Check left diagonal
            }
            if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') {
                return false; // Check right diagonal
            }
        }
        return true;
    }
  
    function backtrack(row = 0) {
        if (row === n) {
            const stringBoard = board.map(row => row.join(''));
            solutions.push(stringBoard);
            return;
        }
  
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q'; // Place queen
                backtrack(row + 1); // Move to the next row
                board[row][col] = '.'; // Remove queen (backtrack)
            }
        }
    }
  
    backtrack(); // Start backtracking from the first row
    return solutions;
}



function isValid(matrix,r,c,n){
    //let sample =[...matrix];
    for (let i =0;i<n;i++){
        // if(matrix[r][i] === "Q"){
        //     console.log("false row aaya ");
        //     return false ;
        // }

        if(matrix[i][c] === "Q"){
            console.log("false col aaya ");
            return false ;
        }


        if(r+i < n && c+i < n){
           // sample[r+i][c+i] = "Q";
            if(matrix[r+i][c+1] === "Q"){
                console.log("false d1 aaya ");
                return false ;
            }

        }
        if(r-i >=0  && c-i >=0){
           // sample[r-i][c-i] = "Q";
            if(matrix[r-i][c-i] === "Q"){
                console.log("false d2 aaya ");
                return false ;
            }

        }
        if(r-i >=0  && c+i < n){
           // sample[r-i][c+i] = "Q";
            if(matrix[r-i][c+i] === "Q"){
                console.log("false d3 aaya ");
                return false ;
            }

        }
        if(r+i < n  && c-i >=0){
          //  sample[r+i][c-i] = "Q";
            if(matrix[r+i][c-i] === "Q"){
                console.log("false d4 aaya ");
                return false ;
            }

        }
        
      
    }
    console.log("true aaya ");
    return true;

    //return sample;
    

}

// isme n queen ghusana ha warna its invalid ..aur kaha gusana ha wo alag invalid check kerna ha 
//perfect solution
function nQueen(n){
    let matrix = Array.from({length:n},()=> Array.from({length:n},()=>"*"));
    console.log("before",matrix);
    let solutions =[];
    function solver(r=0){
        if(r === n ){
            console.log(matrix);
            const arr  =  matrix.map(r => r.join(""));
            solutions.push(arr);
            return ;
        }
        for(let c=0; c <n ;c++){
            console.log(r,c);
            if(isValid(matrix,r,c,n)){
                matrix[r][c] = "Q";
                solver(r+1);
                matrix[r][c] ="*";
                
                
            }
           

        }
            
          
        
           
          
        }
        solver();
        return solutions;
       

    }












/*

how to solve n queen problem 

lets

*/



// Example usage:
const n = 4;
const solutions = nQueen(n);

console.log(solutions);


 // console.log(generateSubsets([1, 2, 3]));