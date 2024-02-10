//ultimate question to understand lo of things
const generate_valid_parentheses = function(num) {
    result = [];
    let open ="(";
    let closed =")";
    var helper =  function(countOpen,countclosed, parans){
      console.log(countOpen,countclosed, parans.join(""),parans.length);
      if(countOpen === countclosed && parans.length === (2*num)){
        let strParan = parans.join("");
        result.push(strParan);

      }
      if(countOpen < num){
        parans.push(open);
        helper(countOpen+1,countclosed,parans);
        parans.pop();
        console.log("1st",countOpen,countclosed, parans.join(""),parans.length);
      }
      if(countclosed < countOpen){
        parans.push(closed);
    helper(countOpen,countclosed+1,parans);
    parans.pop();
    console.log("2nd",countOpen,countclosed, parans.join(""),parans.length);
      }
     
  
    }
    helper(0,0,[]);
    // TODO: Write your code here
    return result;
  };
  
  
  console.log(`All combinations of balanced parentheses are: ${generate_valid_parentheses(3)}`)
  //console.log(`All combinations of balanced parentheses are: ${generate_valid_parentheses(3)}`)
  