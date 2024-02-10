
//method 1
class User{
    constructor(name,{age, ph, email}={}){ /// adding this 2nd orgument as object makes like a builder pattern
        this.name = name;
        this.age =age;
        this.ph =ph;
        this.email =email;
    }


}


let user = new User("ronal");
let user2  = new User("kumar",{age:90});
console.log(user2,user);


//method 2

class User2{
    constructor(name){
        this.name =name;
    }
    

}

class Builder{
    constructor(user){
        this.user = new User2(user);
    }
    setAge(age){
        this.user.age =age;return this;
    }
    setEmail(email){
        this.user.email =email;return this;
    }
    setPh(ph){
        this.user.ph =ph;return this;
    }
    build(){
        return this.user;
    }
}

let builder_useer = new Builder("name").setAge(80).build();
console.log(builder_useer);