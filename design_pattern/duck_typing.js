//is a type sytem where type or class is less improatnt then the object
//ductyoing is kind of polymorphism of methods as same method behave differently in different class. so here methos is more importtant than we thousght
//so lthats the whole criz of the mater//
class Tesla{
    constructor(user){
        this.user =user;

    }

    run(){
        console.log(` tesla ! whay i am using tis called ${this.user}`);
    }
}
class Maruti{
    constructor(user){
        this.user =user;

    }

    run(){
        console.log(` maruti !whay i am using tis called ${this.user}`);
    }
}
class Tata{
    constructor(user){
        this.user =user;

    }

    run(){
        console.log(` Tata ! whay i am using tis called ${this.user}`);
    }
}

let t= new Tata("raju");
let ts= new Tesla("raju");
let m= new Maruti("raju");
t.run();
ts.run();
m.run();

// so here Run function makes great impact