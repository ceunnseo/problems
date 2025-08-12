/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function(s) {
    const dict = {};
    for (let left = 0; left < s.length; left++) {
        let ch = s[left];
        let right = left;
        while (right < s.length && s[right] === ch) {
            const word = s.slice(left, right + 1);
            if (!dict[word]) dict[word] = 0;
            dict[word] += 1;
            right += 1;
        }
    }
    let answer = -1;
    for (const word in dict) {
        if (dict[word] >= 3) answer = Math.max(answer, word.length);
    }
    return answer;
};