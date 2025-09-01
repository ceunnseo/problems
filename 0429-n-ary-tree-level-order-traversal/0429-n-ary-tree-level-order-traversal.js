/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === []) return [];
    const result = [];
    const queue = [[root, 0]];
    while (queue.length) {
        const [node, idx] = queue.shift();
        if (node && node.children) {
            if (!result[idx]) result[idx] = [];
            result[idx].push(node.val);
            for (const c of node.children) {
                queue.push([c, idx+1]);
            }
        }
    }
    return result;
};