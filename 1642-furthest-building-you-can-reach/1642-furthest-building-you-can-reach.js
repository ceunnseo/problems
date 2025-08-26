/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
class MyMinHeap {
    constructor(){
        this.heap = [];
    }
    size() {
        return this.heap.length;
    }
    enqueue(value) {
        this.heap.push(value); //맨 끝에 원소를 넣고
        this.bubbleUp();
    }
    bubbleUp() { //현재 맨 끝 원소를 맨 위로 올리는 과정
        let curIdx = this.size()-1;
        while (curIdx > 0) {
            let parIdx = Math.floor((curIdx-1) / 2);
            if (this.heap[curIdx] < this.heap[parIdx]) {
                [this.heap[curIdx], this.heap[parIdx]] = [this.heap[parIdx], this.heap[curIdx]] 
                curIdx = parIdx;
            }
            else {
                break;
            }
        }
    }
    dequeue() {
        if (this.size() === 0) return;
        if (this.size() ===1 ) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return root;
    }
    bubbleDown() { //맨 위 원소가 자기 자리 찾아가는 과정
        let curIdx = 0;
        while (true) {
            const left = curIdx * 2 + 1;
            const right = curIdx * 2 + 2;
            let swap = null;
            if (left < this.size() && this.heap[left] < this.heap[curIdx]) {
                swap = left;
            }
            if (right < this.size() && this.heap[right] < this.heap[curIdx]) {
                if (swap === null) swap = right;
                else if (swap === left && this.heap[right] < this.heap[left]) {
                    swap = right;
                }
            }
            if (swap === null) break;
            [this.heap[curIdx], this.heap[swap]] = [this.heap[swap], this.heap[curIdx]];
            curIdx = swap;
        }
    }
}
var furthestBuilding = function(heights, bricks, ladders) {
    const pq = new MyMinHeap();
    for (let i = 0; i < heights.length-1; i++) {
        const diff = heights[i+1] - heights[i];
        if (diff > 0) { //사다리 혹은 벽돌이 필요한 경우
            pq.enqueue(diff)
            if(pq.size() > ladders) { //사다리 이상이 필요할 때
                bricks -= pq.dequeue();
                //console.log('bricks', bricks);
                if (bricks < 0) return i;
            }
        }
    }
    return heights.length-1;
};