from collections import deque

class Solution:
    def predictPartyVictory(self, senate: str) -> str:
      senate = list(senate)
      d, r = deque(), deque()
      
      for i, c in enumerate(senate):
        if c == "R":
          r.append(i)
        else:
          d.append(i)
      
      while d and r:
        dTurn = d.popleft()
        rTurn = r.popleft()
        
        if rTurn < dTurn:
          r.append(dTurn + len(senate))
        else:
          d.append(rTurn + len(senate))
      
      return "Radiant" if r else "Dire"

sol = Solution()

print(sol.predictPartyVictory("RDD"))

# DDRRR
# DDRRR
# R,D
# RD

# R