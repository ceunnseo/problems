-- 코드를 입력하세요
-- PRODUCT의 PK : PRODUCT_ID
-- OFFLINE_SALE의 PK : OFFLINE_SALE_ID & FK : PRODUCT_ID
-- 판매량 정보가 주어짐 (SALES_AMOUNT)
SELECT P.PRODUCT_CODE, P.PRICE * SUM(SALES_AMOUNT) AS SALES
FROM OFFLINE_SALE OFF
JOIN PRODUCT P
ON OFF.PRODUCT_ID = P.PRODUCT_ID
GROUP BY PRODUCT_CODE
ORDER BY SALES DESC, P.PRODUCT_CODE ASC;
