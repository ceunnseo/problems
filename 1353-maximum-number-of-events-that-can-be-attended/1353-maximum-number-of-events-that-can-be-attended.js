/**
 * @param {number[][]} events
 * @return {number}
 */
//많은 이벤트에 참여 -> 종료 날짜가 빠른 이벤트부터 참여한다 (우선순위큐)
//
class MyMinHeap {
    constructor() {
        this.heap = [];
    }
    size() {
        return this.heap.length;
    }
    peek() {
        if (this.size() > 0) return this.heap[0];
        else return -1;
    }
    enqueue(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    bubbleUp() {
        let cur = this.size()-1; //자식 노드 인덱스
        while (cur > 0) {
            let parent = Math.floor((cur-1) / 2);
            if (this.heap[cur] < this.heap[parent]) {
                [this.heap[cur], this.heap[parent]] = [this.heap[parent], this.heap[cur]];
                cur = parent;
            }
            else {
                break;
            }
        }
    }
    dequeue() {
        if (this.size() < 1) return;
        if (this.size() ===1 ) return this.heap.pop();
        const mini = this.heap[0];
        const last = this.heap.pop();
        this.heap[0] = last;
        this.bubbleDown(); //정렬
        return mini;
    }
    bubbleDown() { //맨 위 원소를 자기 자리로
        let cur = 0;
        while (true) {
            let left = cur * 2  + 1;
            let right = cur * 2  + 2;
            let swap = null;
            if (left < this.size() && this.heap[left] < this.heap[cur]) {
                swap = left;
            }
            if (right < this.size() && this.heap[right] < this.heap[cur]) {
                if (swap === null) {
                    swap = right;
                }
                else if (swap != null && this.heap[right] < this.heap[left]) {
                    swap = right;
                }
            }
            if (swap === null) break;
            [this.heap[cur], this.heap[swap]] = [this.heap[swap], this.heap[cur]];
            cur = swap;
        }
    }
}
var maxEvents = function(events) {
    const pq = new MyMinHeap
    events.sort((a,b) => a[0]-b[0]) //시작 날짜 빠른 순으로 정렬
    let startDay = events[0][0]; //가장 빠른 이벤트의 시작 날짜
    let endDay = 0;
    for (let i = 0; i < events.length; i++) {
        endDay = Math.max(endDay, events[i][1])
    }
    let day = startDay;
    let cnt = 0;
    let idx = 0;
    console.log(events, endDay)
    while (day <= endDay) {
        console.log('day : ',day)
        while (idx < events.length && events[idx][0] <= day) {
            pq.enqueue(events[idx][1]);
            idx += 1;
        } //오늘(day) 참여할 수 있는 모든 이벤트들을 후보로 지정
        while (pq.size() > 0 && pq.peek() < day) {
            pq.dequeue();
        }//이미 지나버린 이벤트가 있는 경우 -> 삭제 (예시 : day 3, 이벤트 종료일 2일)
        if (pq.size() > 0) { 
            pq.dequeue();
            cnt += 1;
        } //그 중에서 가장 빨리 끝나는 스케줄을 먼저 처리
        day += 1; //그 다음날
    }
    return cnt;
};