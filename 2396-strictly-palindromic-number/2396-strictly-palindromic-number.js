/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    const isPalindromic = (str) => {
        let left = 0, right = str.length-1;
        while (left < right) {
            if (str[left]!== str[right]) return false;
            left +=1;
            right -=1;
        }
        return true;
    }
    const makeBaseN = (number, i) => {
        let div = Math.floor(number / i); //몫
        let mod = number % i; //나머지
        const res = [mod];
        while (div > 0) {
            mod = div % i;
            div = Math.floor(div / i);
            res.push(mod);
        }   
        return res.join(''); //뒤집히지만 팰린드롬 보는데는 상관없음
    }
    for (let i = 2; i <= n-2; i++) { //진법
        const Ijinsu = makeBaseN(n, i)
        //console.log(Ijinsu)
        if (!isPalindromic(Ijinsu)) return false;
    }
    return true;
};