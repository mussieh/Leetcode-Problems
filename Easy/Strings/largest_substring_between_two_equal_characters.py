class Solution:
    def maxLengthBetweenEqualCharacters(self, s: str) -> int:
        strs = {}
        longest = -1
        for i in range(len(s)):
            if strs.get(s[i]):
                strs[s[i]].append(i)
                longest = max(longest, strs[s[i]][-1] - strs[s[i]][0] - 1)
            else:
                strs[s[i]] = [i]
        return longest

sol = Solution()
print(sol.maxLengthBetweenEqualCharacters("abca"))