-- 코드를 입력하세요
-- 2022년 10월 16일 대여중인 자동차 -> 대여중, 대여 x -> 대여 가능 컬럼 추가
-- 반납일이 10/16일 경우에도 대여중으로 표시
-- start_date ~ end_date에 10/16일이 포함되는 경우 -> 대여중
SELECT CAR_ID,
    CASE
        WHEN CAR_ID IN (SELECT CAR_ID
                       FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
                       WHERE '2022-10-16' BETWEEN START_DATE AND END_DATE) THEN '대여중'
        ELSE '대여 가능'
    END "AVAILABILITY"
FROM CAR_RENTAL_COMPANy_RENTAL_HISTORY
GROUP BY CAR_ID
ORDER BY CAR_ID DESC;
