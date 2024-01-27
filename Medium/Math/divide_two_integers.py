class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        quotient = 0
        is_dividend_positive = True if dividend >= 0 else False
        is_divisor_positive = True if divisor > 0 else False
        dividend = abs(dividend)
        old_divisor = abs(divisor)
        divisor = abs(divisor)
        
        if divisor == 1:
          quotient = dividend
        else:
          while divisor <= dividend:
            quotient += 1
            divisor += old_divisor
        
        if is_dividend_positive and not is_divisor_positive or not is_dividend_positive and is_divisor_positive:
          quotient = -quotient
       
        if quotient > 2**31 - 1:
         return 2**31 - 1
        elif quotient < -2**31:
         return -2**31
        else :
         return quotient


sol = Solution()
print(sol.divide(-2147483648, -1))