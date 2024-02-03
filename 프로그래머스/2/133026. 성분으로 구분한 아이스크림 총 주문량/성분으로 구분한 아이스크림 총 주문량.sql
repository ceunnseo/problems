-- 코드를 입력하세요
-- 아이스크림 성분 타입과 총주문량을 총 주문량이 작은 순서로 조회
-- 1. FLAVOR에 따른 성분으로 먼저 합치고 (INNER JOIN)
-- 2. 재료로 그룹화하여 주문량 합계를 구하고
-- 3. 총 주문량이 작은 순서로 조회
SELECT INGREDIENT_TYPE, SUM(H.TOTAL_ORDER) ASTOTAL_ORDER
FROM FIRST_HALF H
JOIN ICECREAM_INFO I
ON H.FLAVOR = I.FLAVOR
GROUP BY I.INGREDIENT_TYPE;
