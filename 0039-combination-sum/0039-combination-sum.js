/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = 0;
    let subsets = new Set();
    let dict = {};
    let result = [];
    candidates.sort((a, b) => a-b);
    function dfs(total,startIdx,path) {
        if (total > target) return;
        if (total === target) {
            dict[[...path].sort((a,b) => a-b)] = 1;
        }
        for (let i = startIdx; i < candidates.length; i++) {
            if (target-total < candidates[i]) break; //탐색하지 않는다.
            path.push(candidates[i]) //새로운 윈소 추가
            dfs(total + candidates[i], i, path);
            path.pop();
        }
    }
    dfs(0, 0, [])
    console.log(subsets)
    const answer = Object.keys(dict);
    const realAnswer = [];
    for (const a of answer) {
        realAnswer.push(a.split(',').map((element) => Number(element)))
    }
    return realAnswer;
    
};