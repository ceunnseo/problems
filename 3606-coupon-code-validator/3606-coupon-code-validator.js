/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
//code : a-z, A-Z, 0-9, _ 만 가능
//businessLine : 'electronics', 'grocery', 'pharmacy', 'restaurant'
var validateCoupons = function(code, businessLine, isActive) {
    const dict = {};
    const businessList = ['electronics', 'grocery', 'pharmacy', 'restaurant']
    const n = code.length;
    const regex = /^[a-zA-Z0-9_]+$/;
    const res = [];
    for (const b of businessList) {
        dict[b] = [];
    }
    for (let i = 0; i < n; i++) {
        if(regex.test(code[i]) && isActive[i]) {
            if (dict[businessLine[i]]) {
                dict[businessLine[i]].push(code[i])
            }
        }
    }
    const t = Object.values(dict).filter((x) => x.length > 0 && x.sort());
    for (let i = 0; i < t.length; i++) {
        for (let j = 0; j < t[i].length; j++) {
            res.push(t[i][j])
        }
    }
    return res;

};