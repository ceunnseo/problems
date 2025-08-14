/**
 * @param {number[]} plants
 * @param {number} capacityA
 * @param {number} capacityB
 * @return {number}
 */
var minimumRefill = function(plants, capacityA, capacityB) {
    let left = 0, right = plants.length-1;
    let a = capacityA, b = capacityB;
    let refill = 0;
    while (left < right) {
        //리필이 필요한 경우
        if (a < plants[left]) {
            a = capacityA;
            refill += 1;
        }
        if (b < plants[right]) {
            b = capacityB;
            refill += 1;
        }
        a -= plants[left];
        b -= plants[right];
        left += 1;
        right-= 1;
    }
    if (left === right) {
        if (a < plants[left] && b < plants[left]) {
            refill += 1;
        }
    }
    return refill;
};