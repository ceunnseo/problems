/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function(points) {
    const n = points.length;
    let cnt = 0;
    for (let i = 0; i < n-1; i++) {
        for (let j = i+1; j < n; j++) {
            const [x1, y1] = points[i]; 
            const [x2, y2] = points[j];
            if (!((x1 <= x2 && y1 >= y2) || (x2 <= x1 && y2 >= y1))) continue; //왼쪽 위가 아닌 경우
            let flag = true;
            const minX = Math.min(x1, x2);
            const maxX = Math.max(x1, x2);
            const minY = Math.min(y1, y2);
            const maxY = Math.max(y1, y2);
            for (let k = 0; k < n; k++) { //왼쪽 위 혹은 직선인 경우
                if (k === i || k === j) continue;
                const [xi, yi] = points[k];
                if (minX <= xi && xi <= maxX && minY <= yi && yi <= maxY) { //경계에 포함된 경우
                    flag = false;
                    break;
                }
            }
            if (flag) cnt += 1;
        }
    }
    return cnt;
};