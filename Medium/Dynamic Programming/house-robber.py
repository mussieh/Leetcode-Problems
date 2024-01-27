class Solution:
    def rob(self, nums: list[int]) -> int:
        memo = [-1] * len(nums)

        def rob_house(j):
            if j >= len(nums):
                return 0

            if memo[j] >= 0:
                return memo[j]

            result = max(
                rob_house(j + 2) + nums[j],
                rob_house(j + 1),
            )
            memo[j] = result
            return result

        return rob_house(0)


sol = Solution()

print(
    sol.rob(
        [
            183,
            219,
            57,
            193,
            94,
            233,
            202,
            154,
            65,
            240,
            97,
            234,
            100,
            249,
            186,
            66,
            90,
            238,
            168,
            128,
            177,
            235,
            50,
            81,
            185,
            165,
            217,
            207,
            88,
            80,
            112,
            78,
            135,
            62,
            228,
            247,
            211,
        ]
    )
)

# [6,3,10,8,2,10,3,5,10,5,3]
#  i                      j

# 6
# 1
# 3 4
# 2
# 4
# 3
# 4
