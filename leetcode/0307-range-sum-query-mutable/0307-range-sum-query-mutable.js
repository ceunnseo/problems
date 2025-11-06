/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
    this.n = nums.length;
    this.tree = new Array(this.n * 4);
    this.buildTree(0, 0, this.n - 1);
};

NumArray.prototype.buildTree = function(node, start, end) {
    if (start === end) {
        this.tree[node] = this.nums[start];
    } else {
        const mid = Math.floor((start + end) / 2);
        const left = 2 * node + 1;
        const right = 2 * node + 2;
        this.buildTree(left, start, mid);
        this.buildTree(right, mid + 1, end);
        this.tree[node] = this.tree[left] + this.tree[right];
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    this._update(0, 0, this.n - 1, index, val);
};

NumArray.prototype._update = function(node, start, end, index, val) {
    if (start === end) {
        this.nums[index] = val;
        this.tree[node] = val;
    } else {
        const mid = Math.floor((start + end) / 2);
        const left = 2 * node + 1;
        const right = 2 * node + 2;
        if (index <= mid) {
            this._update(left, start, mid, index, val);
        } else {
            this._update(right, mid + 1, end, index, val);
        }
        this.tree[node] = this.tree[left] + this.tree[right];
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this._sumRange(0, 0, this.n - 1, left, right);
};

NumArray.prototype._sumRange = function(node, start, end, left, right) {
    if (right < start || end < left) {
        return 0;
    }
    if (left <= start && end <= right) {
        return this.tree[node];
    }
    const mid = Math.floor((start + end) / 2);
    const sumLeft = this._sumRange(2 * node + 1, start, mid, left, right);
    const sumRight = this._sumRange(2 * node + 2, mid + 1, end, left, right);
    return sumLeft + sumRight;
};