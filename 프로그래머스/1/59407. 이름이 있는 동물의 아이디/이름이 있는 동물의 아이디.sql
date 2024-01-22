-- 코드를 입력하세요
-- 이름이 있는 동물 id 조회 -> 이름 컬럼에서 null이 아닌 경우만 뽑아내고
-- id 오름차순
SELECT
ANIMAL_ID
FROM ANIMAL_INS
WHERE NAME IS NOT NULL
ORDER BY ANIMAL_ID ASC;