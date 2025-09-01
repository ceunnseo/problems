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
    if (!root) return [];
    const result = [];
    let cur = root;
    const queue = [root];
    while (queue.length) {
        const size = queue.length;
        const res = [];
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            res.push(node.val);
            if (node.children && node.children.length) {
                for (const c of node.children) {
                    if (c) queue.push(c);
                }
            }
        }
        result.push(res);
    }
    return result;
    
};