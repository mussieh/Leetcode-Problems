class Solution:
    def maxLength(self, arr: list[str]) -> int:
        max_length = 0

        def unique(i, word_set):
            nonlocal max_length
            if i >= len(arr):
                return
            print(arr[i], word_set)
            word_set.update([x for x in arr[i]])
            for j in range(i + 1, len(arr)):
                if not self.contains(word_set, arr[j]):
                    unique(j + 1, word_set)

        unique(0, set())
        return max_length

    def contains(self, word_set, word2):
        for letter in word2:
            if letter in word_set:
                return True
        return False


sol = Solution()
print(sol.maxLength(["cha", "r", "act", "ers"]))
