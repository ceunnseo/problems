-- 코드를 입력하세요
-- 고유한 동물 이름 세기 
-- 이름이 null이면 집계하지 않는다
SELECT COUNT(DISTINCT NAME) AS COUNT
FROM ANIMAL_INS;