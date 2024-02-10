var DistinctCharLen =  function (arr){
  let set = new Set(arr);
  return [...set].length;

}
const non_repeat_substring = function(str) {

    // TODO: Write your code here
    let max =0;
    let window =[];
    let current_length;
    let start=0;
    for (let i in str){
      window.push(str[i]);
      current_length = DistinctCharLen(window.slice(start));
      if(window.slice(start).length === current_length && current_length > max){
        max = current_length;

      }
      while(current_length < window.slice(start).length){
        start++;
        current_length = DistinctCharLen(window.slice(start));
      }
    }
    return max;
  };
console.log(`Length of the longest substring: ${non_repeat_substring('aabccbb')}`);
console.log(`Length of the longest substring: ${non_repeat_substring('abbbb')}`);
console.log(`Length of the longest substring: ${non_repeat_substring('abccde')}`);