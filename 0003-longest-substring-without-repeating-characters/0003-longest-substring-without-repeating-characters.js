/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const dict = {};
    let length = 0;
    let result = 0;
    let left = 0;
    let right = left;
    while (right < s.length) {
        if (!(s[right] in dict)) {
            console.log('중복이 없음', left, right)
            dict[s[right]] = right;
            right++;
            length = Math.max(length, right-left);
        }
        else { //중복 문자를 만난 경우
            console.log('중복 발생', left, right) 
            //left = dict[s[right]] + 1; //left : 중복이 일어나지 않은 위치로
            if (dict[s[right]] >= left) {
                //left = Math.max(left, dict[s[right]] + 1);
                left = dict[s[right]] + 1;
            }
            dict[s[right]] = right; //마지막으로 나온 중복 단어 인덱스 갱신
            right++;
            length = Math.max(length, right-left);
        }
        console.log('left', left, 'right', right, 'length', length);
    }
    console.log('=======length=======', length);
    return length;
};