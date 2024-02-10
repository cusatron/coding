//not so optimal solution but works

var DistinctCharLen =  function (arr){
    let set = new Set(arr);
    return [...set].length;

}
 var longest_substring_with_k_distinct = function(s, k) {
    let max =0;
    let window =[];
    let len = s.length;
    let start=0;
    let current_length;
    for(let i=0; i < s.length ;i++){
        window.push(s[i]); 
        current_length= DistinctCharLen(window.slice(start));   
        if(current_length <= k && window.slice(start).length > max ){
            max = Math.max(window.slice(start).length,max);
        } 
        //console.log("start",i,window,current_length);
        while(current_length > k){
            start++;
            current_length= DistinctCharLen(window.slice(start))
            
        }
           //console.log("end",i,max,window,current_length);

    }
    return max;

   
    
};



console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 2)}`);
//console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 1)}`);
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('cbbebi', 3)}`);



console.log(`Maximum number of fruits: ${longest_substring_with_k_distinct(['A', 'B', 'C', 'A', 'C'],2)}`);
