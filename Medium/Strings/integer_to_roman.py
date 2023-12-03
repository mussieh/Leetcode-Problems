class Solution:
    def intToRoman(self, num: int) -> str:
        mapping = {1: "I", 4: "IV", 5: "V", 9: "IX", 10: "X", 40: "XL", 50: "L", 90: "XC", 100: "C", 400: "CD", 500: "D", 900: "CM", 1000: "M"}
        
        def closest_roman(num, result):
          if (num == 0): return result
          min_dec = num
          for x in mapping:
            if num - x >= 0:
              min_dec = x
          result += mapping[min_dec]
          return closest_roman(num - min_dec, result)
        return closest_roman(num, "")
          
          
        

sol = Solution()

print(sol.intToRoman(1999))