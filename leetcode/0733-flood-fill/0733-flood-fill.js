/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const originColor = image[sr][sc];
    const m = image.length;
    const n = image[0].length;
    if (originColor === color) return image;
    const dfs = (r, c) => {
        if (r < 0 || r >= m || c < 0 || c >=n) return;
        if (image[r][c] !== originColor) return; //탐색할 색상이 아님
        image[r][c] = color;
        dfs(r-1, c);
        dfs(r+1, c);
        dfs(r, c-1);
        dfs(r, c+1);
    }
    dfs(sr, sc)
    return image
};