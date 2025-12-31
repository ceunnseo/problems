/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    for (const s of strs) {
        const key = s.split('').sort().join(''); //글자를 정렬
        if (!map.has(key)) map.set(key, []); //아직 등록이 안 된 글자라면 map 에 등록
        map.get(key).push(s); //글자 추가
    }
    return Array.from(map.values());
};