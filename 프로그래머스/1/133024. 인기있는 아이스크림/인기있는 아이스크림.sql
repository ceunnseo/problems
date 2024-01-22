-- 코드를 입력하세요
-- 총주문량 내림차순 (같으면 출하번호 오름차순 )
-- 아이스크림 맛
SELECT 
FLAVOR
FROM FIRST_HALF
ORDER BY TOTAL_ORDER DESC, SHIPMENT_ID ASC;