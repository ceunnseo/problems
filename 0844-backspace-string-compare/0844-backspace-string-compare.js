/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    new_s = []
    new_t = []
    for (let i = 0; i <s.length; i++) {
        if (s[i] !== '#') {
            new_s.push(s[i])
        }
        else {
            new_s.pop()
        }
    }
    for (let j = 0; j <t.length; j++) {
        if (t[j] !== '#') {
            new_t.push(t[j])
        }
        else {
            new_t.pop()
        }
    } 

    if (new_s.join('') === new_t.join('')) return true
    return false;
};