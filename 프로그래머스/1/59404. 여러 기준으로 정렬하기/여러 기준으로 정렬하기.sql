-- 코드를 입력하세요
-- 이름순 조회, 이르이 같으면 나중에 보호한 동물먼저
-- 이름 asc, datetime desc
SELECT ANIMAL_ID, NAME, DATETIME
FROM ANIMAL_INS
ORDER BY NAME ASC, DATETIME DESC