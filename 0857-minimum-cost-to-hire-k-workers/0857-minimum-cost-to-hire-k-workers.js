class MyMaxHeap {
  constructor() {
    this.data = [];
  }

  size() {
    return this.data.length;
  }

  push(item) {
    this.data.push(item);
    this._bubbleUp(this.data.length - 1);
  }

  pop() {
    if (this.data.length === 1) return this.data.pop();
    const top = this.data[0];
    this.data[0] = this.data.pop();
    this._bubbleDown(0);
    return top;
  }

  _bubbleUp(idx) {
    while (idx > 0) {
      const parent = Math.floor((idx - 1) / 2);
      if (this.data[parent][0] >= this.data[idx][0]) break;
      [this.data[parent], this.data[idx]] = [this.data[idx], this.data[parent]];
      idx = parent;
    }
  }

  _bubbleDown(idx) {
    const n = this.data.length;
    while (true) {
      let largest = idx;
      const left = idx * 2 + 1;
      const right = idx * 2 + 2;

      if (left < n && this.data[left][0] > this.data[largest][0]) {
        largest = left;
      }
      if (right < n && this.data[right][0] > this.data[largest][0]) {
        largest = right;
      }
      if (largest === idx) break;
      [this.data[idx], this.data[largest]] = [this.data[largest], this.data[idx]];
      idx = largest;
    }
  }
}

var mincostToHireWorkers = function (quality, wage, k) {
  const n = quality.length;
  const ratioInfo = Array.from({length : n}, () => []);
  for (let i = 0; i < n; i++) {
    ratioInfo[i] = [quality[i], wage[i]/quality[i]];
  }
  ratioInfo.sort((a, b) => a[1]-b[1]);
  console.log('ratioInfo', ratioInfo)
  console.log(ratioInfo)
  let totalQuality = 0;
  let cnt = 0;
  let result = Infinity; //최소 cost
  let heap = new MyMaxHeap();
  for (let i = 0; i < n; i++) {
    const [q, r] = ratioInfo[i];
    heap.push([q, r]);
    totalQuality += q;
    if (heap.size() > k) {
        const [removedQ] = heap.pop();
        totalQuality -= removedQ;
    }
    if (heap.size() === k) { //cost 계산
        result = Math.min(result, totalQuality * r);
    }
  }
  return result;
};
