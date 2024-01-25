-- 코드를 입력하세요
-- 가격대가 만원 -> 만원으로 나누기
-- PRICE_GROUP으로 그룹화하고 product_id 개수 구하기
SELECT
FLOOR((PRICE/10000))*10000 AS PRICE_GROUP,
COUNT(product_code) AS PRODUCTS
FROM PRODUCT
GROUP BY PRICE_GROUP
ORDER BY PRICE_GROUP;

