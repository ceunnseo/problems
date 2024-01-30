-- 코드를 입력하세요
-- 아픈 동물(intake_condition = sick)의 아이디, 이름 조회
-- 아이디 순 조회
SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE INTAKE_CONDITION = 'SICK'
ORDER BY ANIMAL_ID;