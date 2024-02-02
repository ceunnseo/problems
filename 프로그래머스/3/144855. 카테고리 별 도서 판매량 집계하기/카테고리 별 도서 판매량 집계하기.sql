-- 코드를 입력하세요
-- 1. 2022년 1월 카테고리별 도서 판매량 계산
-- 2. 카테고리별 총 판매량 출력
-- 3. 카테고리 ASC
-- book sales와 book을 id로 inner join -> category 구분해주고
-- 구분해준 book sales 테이블에서 카테고리별로 group by
-- group by 후에 개수 세어서 book 테이블의 price * 개수
SELECT CATEGORY, SUM(SALES) AS TOTAL_SALES
FROM BOOK_SALES
JOIN BOOK
ON BOOK_SALES.BOOK_ID = BOOK.BOOK_ID
WHERE DATE_FORMAT(BOOK_SALES.SALES_DATE, '%Y-%m') = '2022-01'
GROUP BY CATEGORY
ORDER BY CATEGORY ASC;