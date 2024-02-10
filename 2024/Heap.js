class minHeap{
    constructor (){
        this.data = []
    }
    insert(a){
  
            this.data.push(a)
            this.heapifyUp();
        

        

    }
    delete(){
        let l =  this.data.length;
        [this.data[0],this.data[l-1]] = [this.data[l-1],this.data[0]];
        this.data.pop();
        this.heapifyDown()
        

    }

    heapifyUp(){
        let c =  this.data.length-1;
        let p= parseInt((c-1)/2);  
          console.log(c,p);
            while(this.data[c]< this.data[p]){

                [this.data[c], this.data[p]] = [this.data[p],this.data[c]];   
                c = p;
                p = parseInt((c-1)/2);
            }
            
         console.log(this.data)        
        


    }
    heapifyDown(){
        let p=0;
        let c1 = 2*p+1;
        let c2 = 2*p+2;
        if(this.data[c1] < this.data[p] || this.data[c2] < this.data[p]){

            if(this.data[c1] < this.data[c2]){
                [this.data[c1], this.data[p]] = [this.data[p],this.data[c1]];
                p = c1;

            }
            else {
                [this.data[c2], this.data[p]] = [this.data[p],this.data[c2]];   
                p = c2;
                
            }
         c1 = 2*p+1;
          c2 = 2*p+2;
            


        }


    }
    getMin(){
        return this.data[0];
    }
    
}

class maxHeap{
    constructor (){
        this.data = []
    }
    insert(a){
  
            this.data.push(a)
            this.heapifyUp();
        

        

    }
    delete(){
        let l =  this.data.length;
        [this.data[0],this.data[l-1]] = [this.data[l-1],this.data[0]];
        this.data.pop();
        this.heapifyDown()
        

    }

    heapifyUp(){
        let c =  this.data.length-1;
        let p= parseInt((c-1)/2);  
          
            while(this.data[c]> this.data[p]){

                [this.data[c], this.data[p]] = [this.data[p],this.data[c]];   
                c = p;
                p = parseInt((c-1)/2);
            }
            
         //   console.log(this.data)        
        


    }
    heapifyDown(){
        let p=0;
        let c1 = 2*p+1;
        let c2 = 2*p+2;
        if(this.data[c1] > this.data[p] || this.data[c2] > this.data[p]){

            if(this.data[c1] > this.data[c2]){
                [this.data[c1], this.data[p]] = [this.data[p],this.data[c1]];
                p = c1;

            }
            else {
                [this.data[c2], this.data[p]] = [this.data[p],this.data[c2]];   
                p = c2;
                
            }
         c1 = 2*p+1;
          c2 = 2*p+2;
            


        }


    }
    getMax(){
        return this.data[0];
    }
    
}

const minH= new minHeap();
let a =[9, 7, 5, 2, -3];
for(let x of a){
    minH.insert(x);
}
// minH.insert(8);
// minH.insert(15);
// minH.insert(20);
// minH.insert(30);
// minH.insert(1);
// minH.insert(2);
// minH.insert(5);
console.log(minH);
// minH.delete();
// console.log(minH);
// minH.delete();
// console.log(minH);