/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    function isPalindrome(s) {
        let left = 0;
        let right = s.length-1;
        while (left < right) {
            if (s[left] !== s[right]) return false;
            left++; 
            right--;
        }
        return true;
    }
    const result = [];
    function makeslices(path, s){
        //console.log('makeslices', path, s)
        if (s === "") {
            result.push([...path]);
            return;
        }
        for (let i = 1; i <= s.length; i++) {
            const s1 = s.slice(0, i);
            const s2 = s.slice(i, s.length);
            //console.log('s1, s2', s1, s2)
            if (isPalindrome(s1)) {
                path.push(s1);
                makeslices(path, s2);
                path.pop();
            }
        }
    }
    makeslices([], s);
    //console.log('result', result)
    return result;
};