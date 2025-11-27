/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const brackets = {')' : '(', '}' : '{' , ']' : '['};
    const open = new Set(Object.values(brackets)); //여는 괄호 set
    for (const str of s) {
        if (open.has(str)) { //여는 괄호를 만났으면 = stack에 추가
            console.log('open', str);
            stack.push(str);
        }
        else if (stack.length && stack[stack.length-1] === brackets[str]) {
            console.log('짝을 만남', stack[stack.length-1], str);
            stack.pop();
        }
        else {
            console.log('짝이 아님', stack[stack.length-1], str);
            return false;
        }
    }
    return true;
};