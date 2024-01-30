-- 코드를 입력하세요
-- 맛만 출력
-- FIRST_HALF 테이블에서 총 주문량 3000보다 높은 것 먼저 거르고
-- ICECREAM_INFO 테이블에서 주성분 과일인거 데려오고
-- 총주문량이 큰 순서대로 조회
SELECT F.FLAVOR
FROM FIRST_HALF F
JOIN ICECREAM_INFO I
ON F.FLAVOR = I.FLAVOR
WHERE F.TOTAL_ORDER > 3000 AND I.INGREDIENT_TYPE = 'fruit_based'
ORDER BY F.TOTAL_ORDER DESC;