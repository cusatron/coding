class Node{
    constructor(v,p){
        this.priority = p;
        this.value =v
    }
}
class PriorityQueue{
    constructor(){
        this.data =[];
    }
    enqueue(v,p){
        let node = new Node(v,p);
        this.data.push(node);
        this.bubbleUp();

    }
    dequeue(){
        this.bubbleDown();
    }
    bubbleUp(){ //also we can say this as bubble up
        let child_indx = (this.data.length)-1;
        let parent_index =parseInt((child_indx-1)/2);
        let temp;
       // console.log("start",child_indx,parent_index,this.data);
        while(child_indx>0 && (this.data[child_indx].priority < this.data[parent_index].priority)){
            //console.log("start i",child_indx,parent_index,this.data);
            temp = this.data[child_indx];
            this.data[child_indx] = this.data[parent_index];
            this.data[parent_index] = temp;
            child_indx =parent_index;
            parent_index = parseInt((parent_index-1)/2);
            //console.log("end",child_indx,parent_index,this.data);
        }
        return this.data;
    }
    bubbleDown(){ 
        this.data[0]=this.data[this.data.length-1];
        this.data.pop();
        let parent_index = 0;
        let child_indx_arry = [(parent_index*2)+1,(parent_index*2)+2];
        let child_indx = this.data[child_indx_arry[0].priority]>this.data[child_indx_arry[1].priority]?child_indx_arry[0]:child_indx_arry[1];
        let temp;
        //console.log("start",child_indx,parent_index,this.data);
        while((parent_index*2)+1 <this.data.length && (this.data[parent_index].priority < this.data[child_indx].priority)){
            //console.log("start i",child_indx,parent_index,this.data);
            temp = this.data[child_indx];
            this.data[child_indx] = this.data[parent_index];
            this.data[parent_index] = temp;
            parent_index = child_indx;
            child_indx = [(parent_index*2)+1];
            if(this.data[child_indx+1] !==undefined){
                if(this.data[child_indx+1]>this.data[child_indx]){
                    child_indx = child_indx+1;
                }
    
            }
            //console.log("end",child_indx,parent_index,this.data);
        }
        return this.data;
    
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold",5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever",4)
ER.enqueue("broken arm",2)
ER.enqueue("glass in foot",3)
console.log(ER.data);
ER.dequeue();
console.log(ER.data);