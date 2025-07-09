/**
 * @param {number[][]} events
 * @return {number}
 */

 class MinHeap {
    constructor() {
        this.heap = [];
    }
    push(val) {
        this.heap.push(val);
        this._bubbleUp();
    }
    pop() {
        if (this.size() === 0) return null;
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.size() > 0) {
            this.heap[0] = last;
            this._sinkDown();
        }
        return min;
    }
    peek() {
        return this.heap[0] || null;
    }
    size () {
        return this.heap.length;
    }
    _bubbleUp() {
        let i = this.heap.length-1;
        const val = this.heap[i];
        while (i > 0) {
            let parentIdx = Math.floor((i-1) / 2);
            let parent = this.heap[parentIdx];
            if (val >= parent) break;
            this.heap[i] = parent;
            this.heap[parentIdx] = val;
            i = parentIdx;
        }
    }
    _sinkDown() {
        let i = 0;
        const val = this.heap[0];
        const length = this.heap.length;
        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;
            if (left < length && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < length && this.heap[right] < this.heap[smallest]) smallest = right;
            if (smallest === i) break;
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
    }
 }
var maxEvents = function(events) {
    // 이벤트를 시작일 기준으로 정렬
    events.sort((a, b) => a[0] - b[0]);
    
    let pq = new MinHeap();
    let day = 0, i = 0, count = 0;
    let n = events.length;

    while (i < n || pq.size() > 0) {
        if (pq.size() === 0 && events[i][0] > day) {
            day = events[i][0];
        }
        while (i < n && events[i][0] <= day) {
            pq.push(events[i][1]);
            i++;
        }
        while (pq.size() > 0 && pq.peek() < day) {
            pq.pop();
        }
        if (pq.size() > 0) {
            pq.pop();
            count++;
        }
        day ++;
    }
    return count;
};