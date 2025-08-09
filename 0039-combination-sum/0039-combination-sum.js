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
    function dfs(total,startIdx,path) {
        if (total > target) return;
        if (total === target) {
            dict[[...path].sort((a,b) => a-b)] = 1;
        }
        for (let i = startIdx; i < candidates.length; i++) {
            if (target-total < candidates[i]) continue; //탐색하지 않는다.
            let res = total + candidates[i];
            let paths = [...path];
            paths.push(candidates[i])
            dfs(res, i, paths);
            paths.pop();
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