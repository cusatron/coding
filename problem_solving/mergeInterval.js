/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    intervals.sort((a,b) =>  (a[0] - b[0]));
    let merge =[intervals[0]];
    let k =0;
    for(let i=1; i < intervals.length ;i++){
        if(intervals[i][0] <= merge[k][1]){
            merge[k][1]= Math.max(merge[k][1],intervals[i][1])
        }
        else {
            merge.push(intervals[i]);
            k++;
        }
    }
    return merge;s
    
    
};


console.log(merge([[1, 4] ,[2, 6] ,[3, 5] ]));

