-- 동일한 회원이 동일한 상품을 재구매한 데이터를 조회해야 한다.
-- 따라서 회원 ID와 상품 ID를 각각 의미하는 USER_ID, PRODCU_ID 컬럼을 기준으로
-- GROUP BY 문을 이용하여 집계하고
-- 집계 결과에서 2회 이상 구매한 내역만 조회하면 된다
SELECT USER_ID, PRODUCT_ID
FROM ONLINE_SALE
GROUP BY USER_ID, PRODUCT_ID
HAVING COUNT(*) > 1
ORDER BY USER_ID, PRODUCT_ID DESC;