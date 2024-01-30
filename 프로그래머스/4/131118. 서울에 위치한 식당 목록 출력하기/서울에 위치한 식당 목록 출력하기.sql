-- 코드를 입력하세요
-- REST_INFO : 식당 정보, REST_REVIEW : 식당 리뷰 정보
-- "서울에: 위치한 식당들의 ID, 이름, 음식 종류, 즐겨찾기수, 주소, 리뷰평균점수 조회
-- 리뷰 평균 점수 소수점 세 자리에서 반올림, 평균점수로 내림차순 정렬, 즐겨찾기 내림차순 정렬
-- 
SELECT 
I.REST_ID, I.REST_NAME, I.FOOD_TYPE, I.FAVORITES, I.ADDRESS,
ROUND(AVG(R.REVIEW_SCORE), 2) AS SCORE
FROM REST_INFO I
JOIN REST_REVIEW R
ON I.REST_ID = R.REST_ID
WHERE I.ADDRESS LIKE '서울%'
GROUP BY I.REST_ID
ORDER BY SCORE DESC, I.FAVORITES DESC;