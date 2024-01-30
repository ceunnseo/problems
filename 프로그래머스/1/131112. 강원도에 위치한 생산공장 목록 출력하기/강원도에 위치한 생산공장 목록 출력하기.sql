-- 코드를 입력하세요
-- "강원도"에 위치한 식품공장 id, 이름, 주소 조회
-- 공장 id 오름차순
SELECT
FACTORY_ID, FACTORY_NAME, ADDRESS
FROM FOOD_FACTORY
WHERE ADDRESS LIKE '강원도%'
ORDER BY FACTORY_ID ASC;