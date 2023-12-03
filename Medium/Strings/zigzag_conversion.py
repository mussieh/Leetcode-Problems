import math

class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if (numRows == 1): return s
        matrix = [["" for j in range(len(s))] for i in range(numRows)]
        
        def fill_matrix(matrix, s_pos, x, y):
            if (s_pos == len(s)): return matrix
            x = x
            y = y
            s_pos = s_pos
            col = min(numRows, len(s) - s_pos)
            
            
            # Fill the column
            while y < col:
                matrix[y][x] = s[s_pos]
                s_pos += 1
                y += 1
            y -= 1
            
            # Fill the diagonal
            while y != 0 and s_pos < len(s):
                y -= 1
                x += 1
                if y == 0: break
                matrix[y][x] = s[s_pos]
                s_pos += 1
            return fill_matrix(matrix, s_pos, x, y)
        
        matrix = fill_matrix(matrix, 0, 0, 0)
        result = "".join([item for sublist in matrix for item in sublist])
        return result
      
sol = Solution()
print(sol.convert("ABCD", 2))

# P A Y P A L I S H I R I N G
# P Y A I H R N
# A P L S I I G

# s_pos = 6
# x = 3
# y = 0

# PAYP ALISHIRING
# l r

# [
#   P00, 01,  02 I03  04  05  N06
#   A10  11  L12 S13  14  I15 G16
#   Y20  A21  22 H23  R24 25
#   P30  31   32 I33  34  35
  
# ]