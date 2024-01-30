-- 코드를 입력하세요
-- 1. JOINED 2021년 회원 찾고
-- 2. 나이 20~29세 이하인 회원
-- 3. 의 총 명수 출력
SELECT COUNT(USER_ID) AS USER
FROM USER_INFO
WHERE SUBSTR(JOINED,1,4)='2021'
AND (20 <= AGE AND AGE <= 29);