-- 코드를 입력하세요
-- 1. 2022년 5월 사람들만 먼저 뽑는다 => WHERE
-- 2. 이 사람들을 진료과코드별로 그룹화한다음에 개수 센다.
-- 3. 정렬 : 환자수 오름차순, 환자수가 같다면 진료과 코드 오름차수 
SELECT 
MCDP_CD AS 진료과코드, count(*) AS 5월예약건수
FROM APPOINTMENT
WHERE DATE_FORMAT(APNT_YMD, '%Y-%m') = '2022-05'
GROUP BY MCDP_CD
ORDER BY 5월예약건수 ASC, 진료과코드 ASC;
