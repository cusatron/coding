
 var isValidSudoku = function(board) {
    let l= 9;
    let temp;
    let set;
    function checkData(type,iter,arr){
        console.log(type,iter,arr);
        temp = arr.filter( val => val !==".");
        set = new Set(temp);
        console.log("data,set",temp,set,[...set].length);
        if(temp.length !==  [...set].length){
            console.log("inside this");
            return true;
        }
        else {
            console.log("inside false");
            return false;
        }
       
    }
    function rowCheck(k){
        checkData("row",k,board[k]);
    }
    function columnCheck(k){
        let coldata =[];
        for (let j =0;j<9;j++){
            coldata.push(board[j][k]);
        }
        checkData("col",k,coldata);
        
    }
    function cellCheck(k){
        let r = parseInt(k/3);
        let c = k - r*3;
        let celldata =[];
        for (let i =0;i<3;i++){
            celldata.push(...board[i+3*r].slice(3*c,3+3*c));
           // console.log(k,celldata);
    }
        checkData("cell",k,celldata);
    }
    
    for (let i=0;i < 9;i++){
        console.log(rowCheck(i),columnCheck(i), cellCheck(i));
       if(rowCheck(i) || columnCheck(i) || cellCheck(i)){
          return false;
          }
    }
    return true;
       
}
let test = [["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],
            ["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],
            [".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
console.log(isValidSudoku(test));