/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length; //배열의 길이
    const stack = [n-1]; //마지막 날 인덱스 넣기
    const result= Array(n).fill(0); //결과 배열 0으로 초기화

    for (let i = n-2; i >= 0; i--) {
        //탐색 대상 (현재) >= 스택의 맨 위 값 (미래) -> 더 큰 값이 나올 때 까지 pop 한다
        //console.log(temperatures[i], temperatures[stack[stack.length-1]], stack)
        while (stack.length && temperatures[i] >= temperatures[stack[stack.length-1]]) {
            stack.pop();
        }
        //탐색 대상 (현재) < 스택의 맨 위 값 (미래) -> 더 따뜻한 날을 만났기 때문에 idx 를 저장
        if (stack.length && temperatures[i] < temperatures[stack[stack.length-1]]) {
            result[i] = stack[stack.length-1] - i;
            stack.push(i);
        }
        else {
            stack.push(i);
        }
    }
    return result;
};