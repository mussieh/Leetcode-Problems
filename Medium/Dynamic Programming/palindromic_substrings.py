class Solution:
    def countSubstrings(self, s: str) -> int:
        max_subs = 0

        for i in range(len(s)):
            for j in range(len(s)):
                if i <= j and self.is_palindrome(i, j, s):
                    print(s[i : j + 1])
                    max_subs += 1

        return max_subs

    def is_palindrome(self, i, j, s):
        if i > j:
            return True
        if s[i] != s[j]:
            return False
        return self.is_palindrome(i + 1, j - 1, s)


sol = Solution()
print(
    sol.countSubstrings(
        "dnncbwoneinoplypwgbwktmvkoimcooyiwirgbxlcttgteqthcvyoueyftiwgwwxvxvg"
    )
)
