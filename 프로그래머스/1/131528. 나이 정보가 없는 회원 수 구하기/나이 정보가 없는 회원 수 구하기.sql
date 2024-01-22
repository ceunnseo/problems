-- 코드를 입력하세요
-- 나이 정보가 없는 회원 -> GENDER NULL인 데이터 뽑고
-- 개수 세기 (USER_ID)
SELECT
COUNT(USER_ID) AS USERS
FROM USER_INFO
WHERE AGE IS NULL;