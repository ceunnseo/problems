-- 1. 첫번째 테이블에서 view 최대인 테이블을 고르고
-- 2. 그 테이블에서 board_id랑 이어서 file-name 생성한다.
-- /home/grep/src/ + BOARD_ID/ + FILE_ID + FILE_NAME + FILE_EXT 
-- 301. hong02 + B0008
SELECT CONCAT("/home/grep/src/", B.BOARD_ID, '/', F.FILE_ID, F.FILE_NAME, F.FILE_EXT) AS FILE_PATH
FROM USED_GOODS_BOARD B
JOIN USED_GOODS_FILE F
ON B.BOARD_ID = F.BOARD_ID
WHERE VIEWS = (SELECT MAX(VIEWS) FROM USED_GOODS_BOARD)
ORDER BY F.FILE_ID DESC;