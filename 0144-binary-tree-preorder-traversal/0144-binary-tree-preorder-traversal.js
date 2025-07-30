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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const stack = []
    const res = []
    if (root) stack.push(root)
    console.log(stack)
    while (stack.length > 0) {
        const node = stack.pop(); //스택에서 노드 꺼내기
        res.push(node.val) //현재 노드의 값을 결과에 저장하기
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return res
};