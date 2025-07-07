/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function(nums1, nums2) {
    this.nums1 = nums1;
    this.nums2 = nums2;
    this.freq = new Map(); //map 생성
    for (let num of nums2) {
        this.freq.set(num, (this.freq.get(num) || 0) + 1)
    }
    
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
    const oldVal = this.nums2[index];
    const newVal = oldVal + val;

    //freq 업데이트
    this.freq.set(oldVal, this.freq.get(oldVal)-1);
    if (this.freq.get(oldVal) === 0) this.freq.delete(oldVal);

    this.freq.set(newVal, (this.freq.get(newVal) || 0)+1);
    this.nums2[index] = newVal;
    
};

/** 
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
    let cnt = 0
    for (let num of this.nums1) {
        let b = tot-num
        if (this.freq.get(b)) {
            cnt += this.freq.get(b)
        }
    }
    return cnt;
    
};

/** 
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */

var nums1 = [1,1,2,2,2,3];
var nums2 = [1,4,5,2,5,4];
var obj = new FindSumPairs(nums1, nums2);