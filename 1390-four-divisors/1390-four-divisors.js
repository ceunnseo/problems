/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let result = 0; // BigInt
    for (const n of nums) {
        let cnt = 0;
        let tot = 0;
        for (let i = 1; i*i <= n; i++) {
            if (cnt > 4) {
                break;
            }
            if ((n/i) === i) {
                cnt += 1;
                break; 
            }
            if (n % i === 0 && (n/i) !== (i)) {
                cnt += 2;
                tot = tot + (i + (n / i))
            }
        }
        if (cnt === 4) {
            result += tot;
            //console.log('result : ', result, "n :", n)
        }
    }
    return result;
};