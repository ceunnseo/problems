/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} queries
 * @return {number[][]}
 */
// 매번 쿼리에 대해 이진 탐색을 수행하면
// 편향 트리의 경우에 O(n) 만큼 시간복잡도가 발생할 수 있다 (평균 O(logN))

var closestNodes = function(root, queries) {
    const ans = [];
    /*function searchTree(target) { //평균 O(logN), 최악 O(n)
        let cur = root;
        let min = 1000001, max = -1;
        while (cur) {
            if (target < cur.val) {
                max = cur.val;
                cur = cur.left; //왼쪽 이동
            }
            else if (target > cur.val) {
                min = cur.val;
                cur = cur.right; //오른쪽 이동
            }
            else {
                min = cur.val;
                max = cur.val;
                break;
            }
        }
        if (min === 1000001) min = -1;
        return [min, max]
    }*/
    /*for (let i = 0; i < queries.length; i++) { // 10^5
        const result = searchTree(queries[i]) 
        ans.push(result)
    }*/
    //return ans;
    const arr = [];
    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        arr.push(node.val);
        inorder(node.right);
    }
    inorder(root);
    //console.log(arr);

    function searchTree(target) {
        let left = 0, right = arr.length-1;
        let min = 1000001, max = -1
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (target < arr[mid]) {
                max = arr[mid];
                right = mid-1;
            }
            else if (target > arr[mid]) {
                min = arr[mid];
                left = mid+1;
            }
            else {
                min = arr[mid];
                max = arr[mid];
                break;
            }
        }
        if (min === 1000001) min = -1;
        return [min, max]
    }
    for (let i = 0; i < queries.length; i++) { // 10^5
        const result = searchTree(queries[i]) 
        //console.log(result)
        ans.push(result);
    }
    return ans;
};