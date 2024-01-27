class Solution:
    def findWinners(self, matches: List[List[int]]) -> List[List[int]]:
        won_matches = set()
        lost_matches = {}
        lost_one_match = set()
        for i in range(len(matches)):
            won_matches.add(matches[i][0])
            lost_matches[matches[i][1]] = lost_matches.get(matches[i][1]) + 1  if lost_matches.get(matches[i][1]) else 1
        for i in range(len(matches)):
            if matches[i][1] in won_matches:
                won_matches.remove(matches[i][1])
        for i in lost_matches:
            if lost_matches[i] == 1:
                lost_one_match.add(i)
        won_matches = list(won_matches)
        lost_one_match = list(lost_one_match)
        won_matches.sort()
        lost_one_match.sort()
        return [won_matches, lost_one_match]
  
