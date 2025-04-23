var test = function(n) {
    let result = [];
    for (let i = 0; i <= n; i++) {
        result.push(i.toString(2).split('').filter(e => e === '1').length);
    }
    return result;
    
};