/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
//가장 작은 *좋은 정수의 최소값
//[1] 그 정수가 어떤 카드 뒷면에 나타나고
//[2] 어떤 카드의 앞면에도 나타나 있으면 안됨

// 앞 [1,1] 뒤 [2,2] -> 그대로 있으면 -> goodNumber = 1
// 앞 [1,2] 뒤 [2,1] -> 카드1를 뒤집으면 -> 앞 [2,2] 뒤 [1,1] -> goodNumber = 1
// 앞 [1,1] 뒤 [1,2] -> 뒤집지 않고, goodNumber = 2

// 앞 [1,2] 뒤 [1,2] -> 카드 2를 뒤집든 1을 뒤집든 똑같음 -> goodNumber 없음
// 앞 [1] 뒤 [1] -> 어떻게 해도 똑같음 -> goodNumber 없음
// 앞 [1,2,2] 뒤 [1,3,3] -> 카드2와 카드 3을 뒤집으면 -> [1,3,3], [1,2,2] -> goodNumber = 2
// 똑같다 = 앞면과 뒷면이 같다 = 뒤집을 필요가 없다

// 앞 [1,2,4,4,7] 뒤 [1,3,4,1,3] -> 카드 2를 뒤집으면 -> 앞 [1, 3, 4, 4, 7] 뒤 [1, 2, 4, 1, 3] -> goodNumber = 2
var flipgame = function(fronts, backs) {
    let goodNumber = 2001;
    const n = fronts.length;
    const dict = {}; //dict[i] = [0, 0] 앞면에 나온 숫자 개수, 뒷면에 나온 숫자 개수
    const key = []
    for (let i = 0; i < n; i++) {
        if (fronts[i] !== backs[i]){
            console.log(fronts[i], backs[i])
            key.push([fronts[i], backs[i]]); //뒤집을 숫자 후보
        }
        if (!dict[fronts[i]]) {
            dict[fronts[i]] = [0,0]
        }
        dict[fronts[i]][0] += 1;
        if (!dict[backs[i]]) {
            dict[backs[i]] = [0,0]
        }
        dict[backs[i]][1] += 1;
    }
    for (let i = 0; i < key.length; i++) {
        let flag = false;
        let flag2 = false;
        for (let j = 0; j < n; j++) {
            if (key[i][0] === backs[j]) { //앞면
                flag = true;
                break;
            }
            if (key[i][1] === fronts[j]) { //뒷면
                flag2 = true;
                break;
            }
        }
        if (!flag) goodNumber = Math.min(goodNumber, key[i][0])
        if (!flag2) goodNumber = Math.min(goodNumber, key[i][1])
    }
    return goodNumber === 2001 ? 0 : goodNumber;
    


};