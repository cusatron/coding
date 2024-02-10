/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
    this.num =nums;
    
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    console.log("o",this.num);
    return this.num;
    
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {//naive solution
     let shuffle = [...this.num];
    
    let length = shuffle.length;
    let max = parseInt(Math.random()*length);
    for (i in shuffle) {
        random_index = parseInt(Math.random()*length);
        temp = shuffle[random_index];
        shuffle[random_index] =shuffle[i];
        shuffle[i] =temp;
        //console.log(random_index);
    }
    console.log("s",this.num,shuffle);
    
};


 let nums =[1,2,3];
 var obj = new Solution(nums)
 //var param_1 = obj.reset()
  obj.shuffle();
  //obj.reset();
 //console.log(param_2);


