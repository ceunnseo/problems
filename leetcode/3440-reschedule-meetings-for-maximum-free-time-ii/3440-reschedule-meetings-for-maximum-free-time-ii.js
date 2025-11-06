/**
 * @param {number} eventTime
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
function maxFreeTime(eventTime, startTime, endTime) {
  const n = startTime.length;
  const gap = new Array(n + 1);

  // 1. gap 배열 생성
  gap[0] = startTime[0] - 0;
  for (let i = 0; i < n - 1; ++i) {
    gap[i + 1] = startTime[i + 1] - endTime[i];
  }
  gap[n] = eventTime - endTime[n - 1];

  // 2. prefix / suffix 최대값
  const pref = new Array(n + 2).fill(0);
  for (let i = 1; i <= n + 1; ++i) {
    pref[i] = Math.max(pref[i - 1], gap[i - 1]);
  }
  const suff = new Array(n + 2).fill(0);
  for (let i = n; i >= 0; --i) {
    suff[i] = Math.max(suff[i + 1], gap[i]);
  }

  const initialMaxGap = pref[n + 1]; // 전체 gap 최대값
  let answer = initialMaxGap;

  // 3. 각 회의 k 에 대해 후보 계산
  for (let k = 0; k < n; ++k) {
    const dk = endTime[k] - startTime[k];
    const gapL = gap[k];
    const gapR = gap[k + 1];

    const newGap = gapL + dk + gapR;          // 회의 제거 후 합쳐진 초대형 빈구간
    const othersMax = Math.max(pref[k], suff[k + 2]); // 나머지 빈구간 중 최대

    let candidate;
    if (othersMax >= dk) {
      // 다른 빈구간에 회의를 넣을 수 있음 → newGap 손실 없음
      candidate = newGap;
    } else {
      // newGap 안에 다시 넣어야 함
      candidate = Math.max(gapL + gapR, othersMax);
    }
    answer = Math.max(answer, candidate);
  }

  return answer;
}
