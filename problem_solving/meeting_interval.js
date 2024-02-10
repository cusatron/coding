function merge_interval(arr) {
    let output =[];
    let updated_arr =[arr[0]];
    let start;
    let end;
    console.log("updted",updated_arr);
    for (let j in updated_arr)
    { 


    for (let i=1; i< arr.length -1; i++){
        //console.log(updated_arr[j][1] ,arr[i][0] ,arr[i][1] ,updated_arr[j][0] );
        if(updated_arr[j][1] >= arr[i][0] || arr[i][1] >= updated_arr[j][0]  ){
           start = Math.min(updated_arr[j][0],arr[i][0]);
            end = Math.max(updated_arr[j][1],arr[i][1]);
            updated_arr[j][0]= start;
            updated_arr[j][1]= end;
          console.log("con",start,end)
        }
        
        else {
            updated_arr.push(arr[i]);
        }
        console.log("out",i,"up",updated_arr);

    }
   
   
}

   
return updated_arr;

}



console.log("out",merge_interval([[3,4],[6,7],[8,11],[9,18]]));