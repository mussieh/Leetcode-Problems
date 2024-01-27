class Solution:
    def minOperations(self, nums: list[int]) -> int:
        nums_dict = {}
        min_ops = 0
        for x in nums:
            nums_dict[x] = nums_dict[x] + 1 if nums_dict.get(x) else  1
        for x in nums_dict.values():
            temp_x = x
            #  check if we can start dividing with 3
            while temp_x:
                if temp_x % 3 == 0:
                    min_ops += (temp_x // 3)
                    temp_x = 0
                elif (temp_x - 3 == 1 or temp_x < 3) and temp_x % 2 == 0:
                    min_ops += (temp_x // 2)
                    temp_x = 0
                else:
                    if temp_x > 3 and temp_x - 3 != 1:
                        temp_x -= 3
                        min_ops += 1
                    else:
                        return -1
        return min_ops


sol = Solution()
print(sol.minOperations([2,3,3,2,2,4,2,3,4]))