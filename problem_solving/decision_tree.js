/**
 * @param {number[]} input
 * @return {number}
 */
 var calculateEntropy = function(input) {
    var len = input.length;
    var freq = new Map();
    var prob_dist = new Map();
    for(let i in input){
        if(freq.has(input[i])){
            temp = freq.get(input[i]);
            temp++;
            freq.set(input[i],temp);
        }
        else {
            freq.set(input[i],1)
        }
        console.log("i",1);
        
    }
    console.log("freq",freq);
    for ( let [key,value] of freq.entries() ){
        prob_dist.set(key, value/len);
        
    } 
   
    console.log("prob_dist",prob_dist);
    //calculate entopy
    let enttopy = 0;
    for (let value of prob_dist.values()){
        enttopy = enttopy -(value* (Math.log2(value)));
    }
    
    return enttopy;
    
};

console.log(calculateEntropy([2,4,2,4]));