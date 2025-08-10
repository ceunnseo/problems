/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function(nums1, nums2) {
    this.nums1 = nums1;
    this.nums2 = nums2;
    this.n1 = this.nums1.length;
    this.n2 = this.nums2.length;
    this.dict = {};
    for (let i = 0; i < this.n1; i++) {
        if (!this.dict[this.nums1[i]]) this.dict[this.nums1[i]] = 0;
        this.dict[this.nums1[i]] += 1;
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
    this.nums2[index] += val;
};

/** 
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
    let cnt = 0;
    for (let i = 0; i < this.n2; i++) {
        let target = tot - this.nums2[i];
        if (this.dict[target]) cnt += this.dict[target];
    }
    return cnt;
};

/** 
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */