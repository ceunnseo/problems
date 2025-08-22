/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
class MyMinPriorityQueue {
    constructor() {
        this.heap = [];
    }
    size() {
        return this.heap.length;
    }
    enqueue(element) {
        this.heap.push(element); //맨 끝에 넣고
        this.bubbleUp();
    }
    dequeue() {
        //사이즈가 한 개면 그냥 pop 해서 리턴해주면 된다
        if (this.size() === 1) return this.heap.pop();

        //그렇지 않은 경우에는 
        const min = this.heap[0]; //가장 작은 값 = root
        this.heap[0] = this.heap.pop(); //맨 끝 자식값이 위로 올라가고
        this.bubbleDown();
        return min;
    }
    bubbleUp() {
        let child = this.size()-1; //맨 끝 인덱스
        while (child > 0) {
            let parent = Math.floor((child-1) / 2); 
            if (this.heap[parent].dist > this.heap[child].dist) { //자식이 더 작으면 위로 올라가야 함
                [this.heap[parent], this.heap[child]] = [this.heap[child], this.heap[parent]]
                child = parent;
            }
            else { //그렇지 않으면 bubbleUp 종료
                break;
            }
        }
    } //root -> 자기 자리 (자식)으로 조건에 따라 이동시킨다.
    bubbleDown() {
        let idx = 0;
        let length = this.size();
        let element = this.heap[idx];
        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let left, right;
            let swap = null;
            if (leftIdx < length) {
                left = this.heap[leftIdx];
                if (left.dist < element.dist) {
                    swap = leftIdx;
                }
            }
            if (rightIdx < length) {
                right = this.heap[rightIdx];
                if ((swap === null && right.dist < element.dist) || (swap !== null && right.dist < left.dist)) {
                    swap = rightIdx;
                }
            }
            if (swap === null) break;
            [this.heap[idx], this.heap[swap]] = [this.heap[swap], this.heap[idx]];
            idx = swap;
        } 
    }
}
var kClosest = function(points, k) {
    const pq = new MyMinPriorityQueue();
    const res = [];
    for (const [x, y] of points) {
        const dist = x**2 + y**2
        pq.enqueue({dist : dist, x : x, y : y});
    }
    while (k) {
        const {dist, x, y} = pq.dequeue();
        res.push([x,y])
        k--;
    }
    return res;

};