/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    //조건1. 문자열의 시작과 끝이 모두 대문자만
    //조건2. 문자열의 시작과 끝이 모두 소문자만
    //조건3. 앞에만 대문자, 이후는 소문자
    const regexp1 = /^[A-Z]+$/;
    const regexp2 = /^[a-z]+$/;
    const regexp3 = /^[A-Z][a-z]+$/;
    return regexp1.test(word) || regexp2.test(word) || regexp3.test(word);
};