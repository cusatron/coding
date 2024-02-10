function StringZigzag(strArr) { 
    let r = parseInt(strArr[1]);
    let strstr = strArr[0];
    let arr =[];
    let i=1;
     let reverse = false;
     if(arr[0] = strstr[0]);
   while(i < strstr.length){
    
     reverse = !reverse;
    // console.log(reverse,arr);
     
 if(reverse){
 
 
      for(let j =1; j<r ;j++){
         if(arr[j] === null ||arr[j] === undefined){
 arr[j] ="";
      }
      
      if(strstr[i] === undefined){
        break;
      }
        arr[j] = arr[j]+strstr[i];
       // console.log(i,j,arr);
        i = i+1;
   
    }
 
    
 
    }
    
 
 
 else {
   
      for(let j =r-1-1; j>=0 ;j--){
         if(arr[j] === null ||arr[j] === undefined){
 arr[j] ="";
      }
      
      if(strstr[i] === undefined){
        break;
      }
        arr[j] = arr[j]+strstr[i];
        //console.log(i,j,arr);
        i = i+1;
   
    }
}
 
 }
 
 console.log();
 
   // code goes here  
   console.log(arr.join(""));
   return arr.join(""); 
 
 
 
 }
 
 
 
    
 // keep this function call here 
 console.log('Test -1 passing: ' + (StringZigzag(["coderbyte", "3"]) === "creoebtdy"));
 console.log('Test  0 passing: ' + (StringZigzag(["coderbyt", "3"]) == 'croebtdy'));
 console.log('Test  1 passing: ' + (StringZigzag(["cat", "5"]) == 'cat'));
 console.log('Test  2 passing: ' + (StringZigzag(["kaamvjjfl", "4"]) == 'kjajfavlm'));
 
 
 /*
 1 cre
 2 oebt
 3 dy
 
 
 1 cey
 2 ort
 3 dbe
 ***/