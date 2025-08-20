/**
 * @param {number} k
 * @param {number[]} nums
 */

var KthLargest = function(k, nums) {
    this.k = k; //min-heap 의 크기
    this.nums = nums;
    this.queue = [];
    for (let i = 0; i < nums.length; i++) {
        this.add(nums[i])
    } //초기화
    
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if (this.size() < this.k) {
        this.queue.push(val);
        this.bubbleUp();
    }
    else if (this.size() === this.k) {
        if (val > this.queue[0]) {
            this.pop(); //루트 제거
            this.queue.push(val);
            this.bubbleUp(); //재정렬
        }
    }
    return this.queue[0];
}; //enqueue

KthLargest.prototype.pop = function() {
    if (!this.size()) return; //pop 할 것이 없음
    const last = this.queue.pop();
    if (this.size() > 0) {
        this.queue[0] = last;
        this.bubbleDown();
    }
}
KthLargest.prototype.bubbleUp = function() { //가장 작은 원소를 맨 위로 올리는 방식
    let val = this.queue[this.size()-1]; //가장 끝 원소
    let current = this.size()-1;
    let parent = Math.floor((current - 1 ) / 2);
    while (this.queue[parent] > this.queue[current]) {
        [this.queue[parent], this.queue[current]] = [this.queue[current], this.queue[parent]];
        current = parent;
        parent = Math.floor((current - 1 ) / 2);
    }
}

KthLargest.prototype.bubbleDown = function() { //root가 자기 자리를 찾아가는 방식
    let current = 0;
    const length = this.size();
    const element = this.queue[0];
    while (true) {
        let left = current * 2 + 1;
        let right = current * 2 + 2;
        let leftChild, rightChild;
        let swapIdx = null; //바꿀 자식의 인덱스
        if (left < length) {
            leftChild = this.queue[left];
            if (element > leftChild) {
                swapIdx = left;
            }
        }
        if (right < length) {
            rightChild = this.queue[right];
            if (swapIdx === null && element > rightChild || swapIdx !== null && rightChild < leftChild) {
                swapIdx = right;
            }
        }
        if (swapIdx === null) break;
        [this.queue[current], this.queue[swapIdx]] = [this.queue[swapIdx], this.queue[current]];
        current = swapIdx;
    }

}
KthLargest.prototype.size = function() {
    return this.queue.length;
}

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */