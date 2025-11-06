/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {}; //정렬된 문자열을 키로 하는 딕셔너리
    for (const str of strs) {
        const key = str.split('').sort().join('');
        if (!map[key]) {
            map[key] = []; //키가 없으면 새 배열을 생성
        }
        map[key].push(str); //해당 키에 문자열 추가하기
    }
    return Object.values(map);
};