/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    const set = new Set(words);
    const result = [];
    
    for (let word of words) {
        if (dfs(word, 0, set, 0)) {
            result.push(word);
        }
    }
    
    return result;
    
};

function dfs(word, start, set, count) {
    if (start === word.length) {
        return count > 1;
    }
    
    for (let i = start + 1; i <= word.length; i++) {
        const prefix = word.substring(start, i);
        if (set.has(prefix)) {
            if (dfs(word, i, set, count + 1)) {
                return true;
            }
        }
    }
    
    return false;
}