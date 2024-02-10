/**
 * Initialize your data structure here.
 */
 class Node {
    constructor() {
      this.isWord = false;
      this.children = {};
    }
  }
  class Trie {
    constructor() {
      this.root = new Node();
    }
  
    /**
     * Inserts a word into the trie.
     * @param {string} word
     * @return {void}
     */
    insert(word) {
      let current = this.root;
      let key;
      for (let i = 0; i < word.length; i++) {
        key = word.slice(0, i + 1);
        if (
          current.children[key] !== null &&
          current.children[key] !== undefined
        ) {
          if (key === word) {
            current.children[key].isWord = true;
          }
          current = current.children[key];
        } else {
          current.children[key] = new Node();
          if (key === word) {
            current.children[key].isWord = true;
          }
          current = current.children[key];
        }
      }
    }
  
    /**
     * Returns if the word is in the trie.
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
      let key;
      let current = this.root;
      for (let i = 0; i < word.length; i++) {
        key = word.slice(0, i + 1);
        if (
          current.children[key] !== null &&
          current.children[key] !== undefined
        ) {
          current = current.children[key];
        } else {
          return false;
        }
      }
      return current.isWord;
    }
  
    /**
     * Returns if there is any word in the trie that starts with the given prefix.
     * @param {string} prefix
     * @return {boolean}
     */
    //auto suggestions
    startsWith(prefix) {
      let key;
      let current = this.root;
      for (let i = 0; i < prefix.length; i++) {
        key = prefix.slice(0, i + 1);
        if (
          current.children[key] !== null &&
          current.children[key] !== undefined
        ) {
          current = current.children[key];
        } else {
          return false;
        }
      }
      let isVisited = [current];
      let childrens;
      console.log("visited 0", isVisited[0]);
      if(!Object.keys(current).length){
          return current.isWord;
  
      }
      while (
        isVisited.length > 0 &&
        current.children !== undefined &&
        current.children !== null
      ) {
        current = isVisited[0];
        childrens = Object.keys(current.children);
        for (let i of childrens) {
          isVisited.push(current.children[i]);
          if (current.children[i].isWord) {
            return true;
          }
        }
        isVisited.shift();
      }
      return false;
    }
  }
  
  // Your Trie object will be instantiated and called as such:
  var trie = new Trie();
  console.log(trie.root);
  console.log(
    trie.insert("apk"),
    trie.insert("apple"),
    trie.search("apple"), // return True
    trie.search("app"), // return False
  
    trie.insert("app"),
    trie.search("appp"),
    trie.startsWith("app")
  );
  
  //console.log(JSON.stringify(trie.root));
  
  trie.startsWith("app"); // return True
  