var fi = function(words) {
    var trie = new Trie();
    words.sort(function(a, b) {
        return a.length - b.length;
    });
    var res = [];
    for (var i = 0; i < words.length; i++) {
        if (trie.search(words[i])) {
            res.push(words[i]);
        }
        trie.insert(words[i]);
    }
    return res;
}

var Trie = function() {
    this.root = new TrieNode();
}

Trie.prototype.insert = function(word) {
    var node = this.root;
    for (var i = 0; i < word.length; i++) {
        if (!node.children[word[i]]) {
            node.children[word[i]] = new TrieNode();
        }
        node = node.children[word[i]];
    }
    node.isWord = true;
}

Trie.prototype.search = function(word) {
    var node = this.root;
    for (var i = 0; i < word.length; i++) {
        if (!node.children[word[i]]) {
            return false;
        }
        node = node.children[word[i]];
    }
    return node.isWord;
}

var TrieNode = function() {
    this.children = {};
    this.isWord = false;
}

