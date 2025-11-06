/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let low = 0, high = (m*n)-1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        const r = Math.floor(mid / n);
        const c = mid % n;
        if (matrix[r][c] > target) { //
            high = mid-1;
        }
        else if (matrix[r][c] < target) {
            low = mid + 1;
        }
        else {
            return true;
        }
    }
    return false;
};