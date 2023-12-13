class Solution:
    def compress(self, chars: list[str]) -> int:
      char_count = 0
      l = 0
      while l < len(chars):
        char_count = chars[l: self.group_end(l, chars)].count(chars[l])
        if char_count > 1:
          if char_count >= 10:
            char_str = str(char_count)
            char_index = 0
            for i in range(l + 1, l + 1 + len(char_str)):
              chars[i] = char_str[char_index]
              char_index += 1
            current_char = chars[l]
            l = l + 1 + len(char_str)
            while l < len(chars):
              if current_char == chars[l]:
                chars.pop(l)
              else:
                break
          else:
            if l + 1 < len(chars):
              chars[l + 1] = str(char_count)
            current_char = chars[l]
            l = l + 2
            while l < len(chars):
              if current_char == chars[l]:
                chars.pop(l)
              else:
                break
        else:
          l += 1
      return chars
    
    def group_end(self, start, chars):
      for i in range(start, len(chars)):
        if i + 1 < len(chars) and chars[i] == chars[i + 1]:
          pass
        else:
          return i + 1
          
sol = Solution()
print(sol.compress(["a","b","b","b","b","b","b","b","b","b","b","b","b","c","c"]))

# ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
#       l   r