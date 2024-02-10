/* An important difference between function declarations and class declarations is that function declarations are hoisted
 and class declarations are not. You first need to declare your class and then access it, otherwise code like the following will 
 throw a ReferenceError:

 A class expression is another way to define a class. Class expressions can be named or unnamed. The name given to a 
 named class expression is local to the class's body. (it can be retrieved through the class's (not an instance's) name property, though).
 */
class Calculator {
    static log=[];
constructor(){
    this.out =0;
    

}
static cmp (a, b){
    return a.out -b.out
}
static show_logs(){
    return Calculator.log;
}
static logs(a){
    Calculator.log.push(a);
    //return log;
}
add (a){
    this.out = this.out+a;
    Calculator.log.push(a);
    return this.out
    
}

subtract(a){
    this.out = this.out-a;
    Calculator.log.push(a);
    return this.out
    
}
multiply(a){
    this.out = this.out*a;
    Calculator.log.push(a);
    return this.out
    
}

}
//prototye inheritance 
Calculator.prototype.display = function (){return this.out};

class AjeebCalc extends Calculator {
    constructor(){
        super();    /// super() is used to call parent constructor and makes us use the value of parent "this"
    }
    kuch(a){
        super.out= super.out+100+a;
        return super.out;
    }

}

let c1= new AjeebCalc();
console.log(c1.add(4));
console.log(c1.add(2));
console.log(c1.multiply(7));
console.log(c1.subtract(9));
console.log(c1.add(5));
//Calculator.logs("done");
console.log("c1",c1.multiply(4));

let c2= new AjeebCalc();
console.log(c2.add(10000));

console.log(c2.multiply(4));
console.log(c2.subtract(4));
//Calculator.logs("bus");
console.log("c2",c2.add(4));


console.log(AjeebCalc.show_logs());
console.log(Calculator.cmp(c1,c2));

console.log(c1.display());





