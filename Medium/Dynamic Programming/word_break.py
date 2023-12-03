class Solution:
    def wordBreak(self, s: str, wordDict: list[str]) -> bool:
      for i in range(len(wordDict)):
        new_word = s.replace(wordDict[i], ",")
        print(new_word)
        if new_word.replace(",", "") == "" or s.replace(wordDict[i], ""):
          return True
        for j in range(i + 1, len(wordDict)):
          new_word = new_word.replace(wordDict[j], ",")
          print(new_word)
          if new_word.replace(",", "") == "":
            return True
      return False

sol = Solution()

print(sol.wordBreak("ccaccc", ["cc","ac"]))