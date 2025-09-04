/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
//code : a-z, A-Z, 0-9, _ 만 가능
//businessLine : 'electronics', 'grocery', 'pharmacy', 'restaurant'
var validateCoupons = function(code, businessLine, isActive) {
    const businessMap = new Map();
    const businessList = ['electronics', 'grocery', 'pharmacy', 'restaurant']
    const n = code.length;
    const regex = /^[a-zA-Z0-9_]+$/;
    const res = [];

    for (const b of businessList) {
        businessMap.set(b, []);
    }
    //key : electronices -> value : [], ...

    for (let i = 0; i < n; i++) {
        if(regex.test(code[i]) && isActive[i]) {
            const currentBusiness = businessLine[i];
            if (businessMap.has(currentBusiness)) {
                businessMap.get(currentBusiness).push(code[i])
            }
        }
    }
    for (const b of businessList) {
        const coupons = businessMap.get(b);
        console.log(b, coupons);
        if (coupons.length > 0) {
            coupons.sort();
            res.push(...coupons);
        }
    }
    return res;
};