class Solution:
    def numDecodings(self, s: str) -> int:
      zero_index = s.find("0")
      if zero_index != -1 and zero_index != len(s) - 1:
        return 0
      alphas = {}
      alpha_digit = 65
      for i in range(1, 27):
        alphas[f"{i}"] = chr(alpha_digit)
        alpha_digit += 1
        
      def decode(n):
        if n == 1:
          return 1
        elif n == 2:
          return 2
        else:
          return decode(n - 1) + decode(n - 2)
    
      
      return valid_two_digit(s)



sol = Solution()
print(sol.numDecodings("11106"))

# 12
# 1 1

# 1  (1) sin
# 12 (2) sin sin, doub
# 226 (3) sin sin sin, sin doub, doub sin,
# 11106 (2) doub doub sin,  sin sin doub sin
# 22212324 6 * 
#     11106
# 11106
# 11 10 6 (1)
# 1 1 10 6 (1)
