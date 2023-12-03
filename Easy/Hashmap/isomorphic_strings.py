class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
      s_dict = {}
      t_dict = {}
      mapping = {}
      
      # Make s & t frequency dictionary
      for i in range(len(s)):
        if s_dict.get(s[i]):
          s_dict[s[i]] += 1
        else:
          s_dict[s[i]] = 1
          
        if t_dict.get(t[i]):
          t_dict[t[i]] += 1
        else:
          t_dict[t[i]] = 1
      
      # Make s & t mapping
      for i in range(len(s)):
        if not mapping.get(s[i]):
          mapping[s[i]] = t[i]
      
      # check if strings are isomorphic
      for i in range(len(s)):
        if mapping[s[i]] != t[i]:
          return False
      s_freq = list(s_dict.values())
      t_freq = list(t_dict.values())
      if s_freq != t_freq: return False
      return True
      
      
  
  
sol = Solution()
print(sol.isIsomorphic("aaa", "ccc"))

# p a p e r
# t i t l e

#  p: 2 a: 1 e: 1 r: 1
#  t: 2 i: 1 l: 1 e: 1
#  p: t a: i e: l r: e