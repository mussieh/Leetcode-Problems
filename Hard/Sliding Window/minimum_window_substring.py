from collections import Counter


class Solution:
    def minWindow(self, s: str, t: str) -> str:
        start = 0
        end = 0
        current_len = len(s)
        temp_start = 0
        temp_end = 0
        min_start = 0
        min_end = len(s) - 1

        if not self.is_substring(start, len(s) - 1, s, t):
            return ""

        # find substring first
        for i in range(len(s)):
            if self.is_substring(start, i, s, t):
                end = i
                break

        # slide window of this substring
        while end < len(s):
            if self.is_substring(start, end, s, t):
                temp_start = start
                temp_end = end
                # Shrink Left
                while True:
                    temp_start += 1
                    if not self.is_substring(temp_start, temp_end, s, t):
                        temp_start -= 1
                        start = temp_start
                        break

                # Shrink Right
                while True:
                    temp_end -= 1
                    if not self.is_substring(temp_start, temp_end, s, t):
                        temp_end += 1
                        end = temp_end
                        break
                if end - start + 1 < current_len:
                    min_start = start
                    min_end = end
            start += 1
            end += 1

        return s[min_start : min_end + 1]

    def is_substring(self, start, end, s, t):
        t_count = Counter(t)
        for i in range(start, end + 1):
            if s[i] in t_count:
                t_count[s[i]] -= 1
        for key in t_count:
            if t_count[key] > 0:
                return False
        return True


sol = Solution()
print(sol.minWindow("aaaaaaaaaaaabbbbbcdd", "abcdd"))


"ADOBECODEBANC"
