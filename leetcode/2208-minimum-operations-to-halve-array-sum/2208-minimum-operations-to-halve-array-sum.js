/**
 * @param {number[]} nums
 * @return {number}
 */
class MyPriorityQueue {
    constructor() {
        this.heap = [];
    }
    size() {
        return this.heap.length;
    }
    enqueue(value) {
        this.heap.push(value); //값을 push
        this.bubbleUp(); //가장 큰 값이 맨 위로
    }
    bubbleUp() {
        const root = this.heap[0];
        let child = this.size()-1;
        const childValue = this.heap[child];
        while (child > 0) {
            const parent = Math.floor((child-1) / 2);
            if (this.heap[parent] < this.heap[child]) { //swap
                [this.heap[parent], this.heap[child]] = [this.heap[child], this.heap[parent]]
                child = parent;
            }
            else break; //바꾸지 않아도 됨
        }
    }
    dequeue() {
        if (this.size() === 0 ) return;
        const root = this.heap[0];
        this.heap[0] = this.heap.pop(); //맨 끝 원소를 root 자리로
        this.bubbleDown(); //정렬
        return root;
    }
    bubbleDown() {
        let parent = 0;
        while (true) {
            let swap = null;
            const left = parent * 2 + 1;
            const right = parent * 2 + 2;
            if (left < this.size() &&  this.heap[parent] < this.heap[left]) {
                swap = left;
            }
            if (right < this.size() &&  this.heap[parent] < this.heap[right]) {
                if (swap !== null && this.heap[left] < this.heap[right]) {
                    swap = right
                }
                else if (swap === null) swap = right;
            }
            if (swap === null) break;
            [this.heap[parent], this.heap[swap]] = [this.heap[swap], this.heap[parent]]
            parent = swap;
            
        }
    }
}
var halveArray = function(nums) {
    let tot = nums.reduce((cur, acc) => cur + acc, 0);
    const target = tot / 2;
    let cnt = 0;
    const pq = new MyPriorityQueue();
    for (let n of nums) {
        pq.enqueue(n);
    }
    while (tot > target) {
        const val = pq.dequeue();
        const half = val / 2;
        tot -= half;
        cnt += 1;
        pq.enqueue(half);

    }
    return cnt;
};