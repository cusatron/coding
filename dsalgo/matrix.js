/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

//rotate matrix
///[[1,2,3],[4,5,6],[7,8,9]] -Input
//[[7,4,1],[8,5,2],[9,6,3]]
 var rotate = function(matrix) {
    let l = matrix.length;
    let a=0;
    let temp ;
    for (let i=a ;i< l ;i++){   
        for(let j=a+i; j <l ;j++){
            if( i !== j){
                temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
              
        }
        matrix[i].reverse();
    }
    return matrix;
    
};

var zero = function(matrix){
    let l = matrix.length;
    let point; let index =[]
    for (let i =0; i< l ;i++){

        if(matrix[i].indexOf(0) >= 0){
           
            point = matrix[i].indexOf(0);
            index.push(point);
            matrix[i] = matrix[i].map( k => k="x");

        }
       

        
    }
     if(index.length > 0){
        for (let j in index){
            for (let i =0; i< l ;i++){
                matrix[i][index[j]]= "x";
            }
           
        }
       
    }

    return matrix;


}

console.log(zero([[1,4,1,11],[8,5,0,12],[9,6,3,13],[20,30,40,50]]));