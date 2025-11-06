/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    const digit = []; //최소 1개 ~ 9개
    let maximum = 0;
    const LEN = 2;
    function getDigits(n) {
        let number = n;
        while (number) {
            let div = number % 10; //나머지
            digit.push(div);
            number = Math.floor(number / 10);
        }
    }
    getDigits(n);

    
    for (let i = 0; i < digit.length; i++) {
        for (let j = i+1; j < digit.length; j++) {
            if (digit[i] * digit[j] > maximum) maximum = digit[i] * digit[j] 
        }
    }
    return maximum;
    
};