from collections import Counter


class Solution:
    def frequencySort(self, s: str) -> str:
        letter_counts = Counter(s)
        sorted_letters = dict(
            sorted(letter_counts.items(), key=lambda item: item[1], reverse=True)
        )
        return "".join([x * sorted_letters[x] for x in sorted_letters])


sol = Solution()
print(sol.frequencySort("tree"))
