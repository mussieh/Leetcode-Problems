class Solution:
    def findSubstring(self, s: str, words: list[str]) -> list[int]:
        l = 0
        r = len(words[0]) * len(words) - 1
        str_map = {}
        result = []
        for word in words:
          if str_map.get(word):
            str_map[word] += 1 
          else:
            str_map[word] = 1
        while r < len(s):
          temp_map = dict(str_map)
          for i in range(l, r + 1, len(words[0])):
            word = s[i:i+len(words[0])]
            if word in temp_map:
              temp_map[word] -= 1
          if max(temp_map.values()) == 0:
            result.append(l)
          l += 1
          r += 1
        return result

              

        
  

sol = Solution()

print(sol.findSubstring("lingmindraboofooowingdingbarrwingmonkeypoundcake", ["fooo", "barr", "wing", "ding", "wing"]))

# barfoofoobarthefoobarman
# l  m    r  