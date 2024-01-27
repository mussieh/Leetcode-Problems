class Solution:
    def halvesAreAlike(self, s: str) -> bool:
        vowels = set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
        half_ind = len(s) // 2
        first_half_count = 0
        second_half_count = 0
        for i in range(len(s)):
            if i < half_ind and s[i] in vowels:
                first_half_count += 1
            elif i >= half_ind and s[i] in vowels:
                second_half_count += 1
        return first_half_count == second_half_count




sol = Solution()
print(sol.halvesAreAlike("book"))