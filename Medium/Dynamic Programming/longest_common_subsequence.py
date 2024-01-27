class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        pass


sol = Solution()
print(sol.longestCommonSubsequence("mhunuzqrkzsnidwbun", "szulspmhwpazoxijwbq"))

# m h u n u z q r k z s n i d w b u n
# l1
# r1

# s z u l s p m h w p a z o x i j w b q
# l2
#   r2
# a
# b c d e
sfa = set("abc")
sfa.add("san")
sfa.update(set(["p", "q"]))
print(sfa)
fgas = (["ass"],)
fgas[-1].append("bag")
