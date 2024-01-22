-- 코드를 입력하세요
-- "이름이 없는 채로 들어온 동물" 조회 -> name 컬럼이 null인걸 찾아야 함
-- id 오름차순 order by
SELECT ANIMAL_ID
FROM ANIMAL_INS
WHERE NAME IS NULL
ORDER BY ANIMAL_ID ASC;

