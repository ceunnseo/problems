/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
//한 번 바꿔서 s === goal 같게 만들 수 있는지
var buddyStrings = function(s, goal) {
    if (s.length !== goal.length) return false;
    if (s === goal) { //글자가 같은 경우 (ex2 - ex3 구분)
        const dict = {};
        for (let i = 0; i < s.length; i++) {
            if (!dict[s[i]]) dict[s[i]] = 0;
            dict[s[i]] += 1;
            if (dict[s[i]] >= 2) return true; 
        }
        return false;
    }
    else { //글자가 다른 경우
        const idx = []; 
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== goal[i]) idx.push(i)
        }
        if (idx.length > 2) return false;
        if (s[idx[0]] === goal[idx[1]] && s[idx[1]] === goal[idx[0]]) return true;
        else return false;
    }
};