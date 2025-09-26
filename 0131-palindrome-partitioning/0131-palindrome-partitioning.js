/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res = [];
    function validPalindrome(s) {
        let left = 0, right = s.length-1;
        while (left < right) {
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    }
    function makePalindrome(path, s){
        if (s === "") {
            res.push([...path]);
            return;
        }
        for (let i = 1; i <= s.length; i++) {
            const quo = s.slice(0, i); //몫
            const re = s.slice(i, s.length) //나머지
            if (validPalindrome(quo)) { //몫이 팰린드롬이라면
                path.push(quo);
                makePalindrome(path, re); 
                path.pop();
            }
        }
    }
    makePalindrome([],s);
    return res;
};