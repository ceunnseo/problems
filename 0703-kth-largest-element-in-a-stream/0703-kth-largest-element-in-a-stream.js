/**
 * @param {number} k
 * @param {number[]} nums
 */
//k개의 최소힙을 유지하며, 루트값을 리턴
//KthLargest = 최소힙
var KthLargest = function(k, nums) { //k, 배열
    this.k = k; //최소 크기
    this.nums = nums;
    this.queue = [];
    for (let i = 0; i < nums.length; i++) {
        this.add(nums[i]); 
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if (this.size() < this.k) { //add가 가능한 경우
        this.queue.push(val); //맨 끝에 원소 넣고
        this.bubbleUp(); //위로 올라가며 정렬
    }
    else if (this.size() === this.k) { //사이즈가 다 찬 경우
        if (val > this.queue[0]) { //더 큰 숫자가 등장한거라면? 갱신이 필요
            this.pop(); //루트를 제거하고
            this.queue.push(val); //맨 끝에 원소를 넣고
            this.bubbleUp(); //위로 올라가며 정렬
        }
    }
    return this.queue[0];   
};

//가장 작은 원소를 pop 하기
KthLargest.prototype.pop = function() {
    if (!this.size()) return; //pop할 수 없으면 종료
    const last = this.queue.pop(); //가장 끝에 있던 원소를 먼저 pop 한 다음에
    if (this.size() > 0) {
        this.queue[0] = last; //pop한 값을 노드로 올리고
        this.bubbleDown(); //아래로 내려가면서 정렬
    }
}
//최소힙을 맞추는 bubbleDown 방식
KthLargest.prototype.bubbleDown = function() {
    let current = 0;
    const length = this.size();
    const element = this.queue[0]; //부모
    while (true) {
        let left = current * 2 + 1;
        let right = current * 2 + 2;
        let leftChild, rightChild;
        let swapIdx = null;
        if (left < length) {
            leftChild = this.queue[left];
            if (element > leftChild) { //최소힙에 위반되는 경우
                swapIdx = left;
            }
        }
        if (right < length) {
            rightChild = this.queue[right];
            if ((swapIdx === null && element > rightChild) || (swapIdx !== null && rightChild < leftChild)) {
                swapIdx = right;
            }
        }
        if (swapIdx === null) break;
        [this.queue[current], this.queue[swapIdx]] = [this.queue[swapIdx], this.queue[current]];
        current = swapIdx;
    }
}

//맨 끝에 추가된 원소를 맨 위로 올려가며 정렬하는 방식
KthLargest.prototype.bubbleUp = function() {
    let val = this.queue[this.size()-1]; //맨 끝 원소
    let current = this.size()-1; //현재의 인덱스 번호
    let parent = Math.floor((current-1) / 2);
    //최소힙의 조건 (parent <= current)을 만족하지 않을 때까지 swap
    while (this.queue[parent] > this.queue[current]) {
        [this.queue[parent], this.queue[current]] = [this.queue[current], this.queue[parent]]
        current = parent;
        parent = Math.floor((current-1) / 2);
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