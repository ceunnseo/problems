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
    function dfs(total, path) {
        if (total > target) return;
        if (total === target) {
            dict[[...path].sort((a,b) => a-b)] = 1;
        }
        for (let i = 0; i < candidates.length; i++) {
            let res = total + candidates[i];
            let paths = [...path];
            paths.push(candidates[i])
            dfs(res, paths);
            paths.pop();
        }
    }
    dfs(0, [])
    console.log(subsets)
    const answer = Object.keys(dict);
    const realAnswer = [];
    for (const a of answer) {
        realAnswer.push(a.split(',').map((element) => Number(element)))
    }
    return realAnswer;
    
};