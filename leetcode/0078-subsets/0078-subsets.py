class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        visited = set()
        n = len(nums)
        ans = []
        def recur(idx, temp):
            if idx == n:
                return
            ans.append(temp)
            for i in range(idx, n):
                recur(i+1, temp+[nums[i]])
        recur(-1, [])
        return ans