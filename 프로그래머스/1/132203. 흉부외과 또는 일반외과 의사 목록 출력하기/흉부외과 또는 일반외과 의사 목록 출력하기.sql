-- 코드를 입력하세요
-- 진료과 MCDP_CD가 흉부 CS OR 일반 GS -> WHERE
-- 이름, ID, 진료과, 고용일자 조회
-- 고용일자 내림차순 -> 이름 오름차순
SELECT
DR_NAME, 
DR_ID, 
MCDP_CD, 
DATE_FORMAT(HIRE_YMD, '%Y-%m-%d') AS HIRE_YMD
FROM DOCTOR
WHERE MCDP_CD IN ('CS', 'GS')
ORDER BY HIRE_YMD DESC, DR_NAME ASC;