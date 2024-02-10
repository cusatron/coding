function Palindrime(str){
    let flag =true;
    function helper(str,s,l) {
        console.log(s,l);
        if(l-s <= 0){
            return true;
           
        }
        else if(str[s] !== str[l]){
            return false
        }
        
        return helper(str,s+1,l-1);
        
        
    }
    return helper(str,0,str.length-1);
   
}
function longestPossiblePalindrome(str){
    let l =0 ;
    let m=1;
    let r=2;
    let palindrome = new Map();
    for (let m =1;m < str.length-1 ;m++)
    {
        for (let i=1;i<=m;i++){
            if(str[m+i] === undefined && str[m+1] ==null){
                break;
            }
          else {
            if(str[m+i] === str[m-i]){
                if(palindrome.has(2*i+1)){
                    palindrome.set()
                }
                palindrome[r-l]=str.slice(l,r+1);
        
            }

          }
        
    }
        }
    }
    
    
    



console.log(longestPossiblePalindrome("aabaaklopiopl"));