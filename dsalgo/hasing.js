class MyHasing{
    constructor(){
        this.data =[];
         this.n=26;
         this.keys =[];
         this.values =[];
        for(let i =0 ;i<this.n;i++){
            this.data[i]=[];

        }
    }

    _hash(key){

        let indx =key.charCodeAt(0)-96;
        let m = indx % this.n;
        return m;
    }
    showData(){
        for (let i in this.data){
            console.log(i, this.data[i]);
        }
    }
    set(key, value){
        let m = this._hash(key);
        //console.log(indx,m);
        if (this.data[m].length === 0){
             this.data[m].push({key:key,value:value});
             this.keys.push(key);
             this.values.push(value);

        }
        else {
            for (let i =0 ;i < this.data[m].length ;i++){
                if(this.data[m][i].key === key){
                    return "key alredy present"
                }
            }
             this.data[m].push({key:key,value:value});
             this.keys.push(key);
             this.values.push(value);
        }

        
        
    }
    get(key){
        let m = this._hash(key);
        //console.log(indx, m)
       if (this.data[m].length ===0){
            return undefined;

        }
        
        else {
            for (let i =0 ;i < this.data[m].length ;i++){
                if(this.data[m][i].key === key){
                    //console.log(m,i);
                    return this.data[m][i];
                }
            }
            return "key not present";
        }
    }
    
}

let myhasing = new MyHasing();
 let test_str ="aqwertyuiopasdfghjklxcvbnmokmqazmlpvoir";
let r = 9;
let k = "a";
 for (let i =0 ;i<test_str.length;i++){
    r =parseInt(Math.random()*10)+1;
    k = test_str[i];
    //console.log(r,k);
    myhasing.set(k,k+k);
}
//console.log(myhasing.showData());
console.log(myhasing.keys);
