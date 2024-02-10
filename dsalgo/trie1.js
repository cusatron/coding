
class Node {
    constructor(){
        this.isWord = false;
        this.count =0;
        this.children ={};
    }
}
class Trie{
    constructor(){
        this.root = new Node()
    }


/** 
 * @param {string} word
 * @return {void}
 */
insert(word) {
    let current = this.root;
    let key;
    for(let i =0 ; i < word.length ;i++){
        key = word.slice(0,i+1);
        if(current.children[key] !== null && current.children[key] !==undefined){
            if(word === key){
               current.children[key].isWord = true;
                   current.children[key].count = current.children[key].count +1;
            }
            current = current.children[key];
        }else {
            current.children[key] = new Node();
              if(word === key){
               current.children[key].isWord = true;
                current.children[key].count = current.children[key].count +1;
            }
            current = current.children[key];
        }
        
    }
    
};

/** 
 * @param {string} word
 * @return {number}
 */
countWordsEqualTo(word) {
    let current = this.root;
    let key ;
    for(let i=0; i < word.length ;i++){
        key = word.slice(0,i+1);
        if(current.children[key] !== null && current.children[key] !== undefined){
            current = current.children[key];
            
    } }
    console.log("test",current);
        return current.count;
    
    
    
};

/** 
 * @param {string} prefix
 * @return {number}
 */
countWordsStartingWith(prefix) {
    let current = this.root;
    let key;
    for(let i=0; i < prefix.length ;i++){
        key = prefix.slice(0,i+1);
        if(current.children[key] !== null && current.children[key] !==undefined){
            current = current.children[key];
            
    } else {
            return 0;
    }
    }
    if(Object.keys(current.children).length === 0){
        return current.count;
    }
    let isVisited = [current];
        let masterCount =0;
        let suggestions =[];
        let keys;
    while(isVisited.length >0){
        current =isVisited[0];
        keys = Object.keys(current.children);
        for (let key of keys){
             if(current.children[key] !== null && current.children[key] !==undefined){
                   if(current.children[key].isWord){
                       masterCount=masterCount+current.children[key].count;
                   }
                
                 isVisited.push(current.children[key]);
            
        }
        
        
    }
        isVisited.shift();
    }
        return masterCount;
    
};

/** 
 * @param {string} word
 * @return {void}
 */
erase(word) {
    let current = this.root;
    let key;
    for(let i =0 ; i < word.length ;i++){
        key = word.slice(0,i);
        if(current.children[key] !== null && current.children[key] !==undefined){
            if(word === key){
                 current.children[key].count = current.children[key].count - 1;
                if(current.children[key].count === 0){
                    current.children[key].isWord = false;
                }
            }
            current = current.children[key];
        }
        
    }
    return current.count;
    
};
}

//console.log(trie.root);
const trie = new Trie();
console.log(
  trie.insert("apk"),
  trie.insert("apple"),
  trie.insert("apple"),
  trie.insert("apple"),
  trie.countWordsEqualTo("apple"), // return True
  trie.countWordsEqualTo("app"), // return False
    trie.erase("apple"),
  trie.insert("app"),
  trie.countWordsEqualTo("appp"),
  trie.countWordsStartingWith("app")
);
console.log(JSON.stringify(trie.root));