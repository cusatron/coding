class Loggerwa{
    constructor() { 
        if(Loggerwa.instance == null){
            this.logs =[];
            Loggerwa.instance =this;
        }
        Object.freeze(Loggerwa.instance); //to freeze the object to create new 
        return Loggerwa.instance;
        
    }
    log(messg){
        this.logs.push(messg);
    }
    print(){
        console.log(this.logs);
    }
}

let p1 = new Loggerwa();
p1.key ="keys";
p1.log("p1 la message ha ye");
let p2 = new Loggerwa();
p2.log("p2 ka message ha ye");
p2.print();
console.log(p1);
