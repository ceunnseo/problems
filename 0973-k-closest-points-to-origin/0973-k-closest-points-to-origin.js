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
    enqueue(element) { //값은 맨 끝에 넣고, 자기 위치를 찾아가도록
        this.heap.push(element);
        this.bubbleUp();
    }
    dequeue() {
        if (this.size() ===1 ) return this.heap.pop(); 
        //하나밖에 없을때는 그냥 빼면 된다

        const min = this.heap[0]; //root 값이 가장 작고
        this.heap[0] = this.heap.pop(); //미리 빼고
        this.bubbleDown();
        return min;
    }
    bubbleUp() { //자식이 부모로 올라가는 과정
        let index = this.heap.length-1; //자식 인덱스
        while (index > 0) {
            let parentIndex = Math.floor((index-1) / 2);
            if (this.heap[index].dist < this.heap[parentIndex].dist) {
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            }
            else {
                break;
            }
        }
    }
    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild.dist < element.dist) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if ((swap === null && rightChild.dist < element.dist) || (swap !== null && rightChild.dist < leftChild.dist)) {
                    swap = rightChildIndex;
                }
            }
            if (swap === null) break;
            [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
            index = swap;
        }
    }
}
var kClosest = function(points, k) {
    const pq = new MyMinPriorityQueue();
    const result = [];
    for (const [x, y] of points) {
        const dist = (x**2) + (y**2);
        pq.enqueue({dist : dist, x : x, y : y});
    }
    while (k > 0) {
        const {dist, x, y} = pq.dequeue();
        result.push([x, y])
        k--;
    }
    return result;
};