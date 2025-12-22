class MyMinHeap {
    constructor() {
        this.heap = [];
    }
    //배열 맨 끝에 넣고 bubbleUp 정렬 (가장 작은 값은 root로 올린다)
    push(item) {
        this.heap.push(item);
        this.bubbleUp();
    }
    //배열의 가장 앞에 있는 것을 뺀 다음 bubbleDown 정렬 (마지막 노드를 root로 보내고 정렬)
    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return top;
    }
    //배열 맨 끝에다가 push를 하고 작은 값을 위로 올리는 bubbleUp 과정
    bubbleUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (this.heap[p][0] <= this.heap[i][0]) break; //부모 <= 자식 => okay
            [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]]; //부모 > 자식인 경우 -> 자식을 위로
            i = p;
        }
    }

    //배열의 맨 앞에 있던 원소를 pop 하고나서 root 값을 아래로 내리는 bubbleDown
    bubbleDown() {
        let i = 0;
        const n = this.heap.length;
        while (true) {
            let l = i * 2 + 1; //왼쪽 트리의 idx
            let r = i * 2 + 2; //오른쪽 트리의 idx
            let smallest = i; //parent

            if (l < n && this.heap[l][0] < this.heap[smallest][0]) { //왼쪽 노드 < parent 인 경우 -> 왼쪽 노드를 위로 올림
                smallest = l;
            }
            if (r < n && this.heap[r][0] < this.heap[smallest][0]) { //오른쪽 노드 < parent 인 경우 -> 오른쪽 노드를 위로 올림
                smallest = r;
            }
            if (smallest === i) break; //swap 할 노드가 없는 경우 break

            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

var networkDelayTime = function(times, n, k) {
    const INF = 1e4;

    const dist = Array(n + 1).fill(INF);
    const graph = Array.from({ length: n + 1 }, () =>
        Array(n + 1).fill(INF)
    );

    // 1. 그래프 연결
    for (const [n1, n2, t] of times) {
        graph[n1][n2] = t;
    }
    //자기자신으로 가는 비용은 0
    for (let i = 1; i <= n; i++) {
        graph[i][i] = 0;
    }

    // 2. 다익스트라 (최소힙을 이용)
    const pq = new MyMinHeap();
    pq.push([0, k]); // [time, startNode]
    dist[k] = 0;

    while (!pq.isEmpty()) {
        //console.log(pq);
        const [t, node] = pq.pop();

        // 이미 더 짧은 거리로 방문한 경우 -> 갱신할 필요가 없다
        if (dist[node] < t) continue;

        for (let i = 1; i <= n; i++) {
            if (t + graph[node][i] < dist[i]) {
                dist[i] = t + graph[node][i];
                pq.push([dist[i], i]); //거리값과 idx
            }
        }
    }

    // 3. 최대값 찾기
    let res = 0;
    for (let i = 1; i <= n; i++) {
        if (dist[i] === INF) return -1;
        res = Math.max(res, dist[i]);
    }

    return res;
};
