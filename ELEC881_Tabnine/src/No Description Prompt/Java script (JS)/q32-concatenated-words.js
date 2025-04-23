/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    const set = new Set(words);
    const res = [];

    for (let word of words) {
        if (dfs(word, 0, set, 0)) {
            res.push(word);
        }
    }

    return res.sort((a, b) => a.length - b.length);
};

function dfs(word, start, set, count) {
    if (count === 2) {
        return true;
    }

    for (let i = start; i < word.length; i++) {
        const sub = word.slice(start, i + 1);
        if (set.has(sub) && dfs(word, i + 1, set, count + 1)) {
            return true;
        }
    }

    return false;
}