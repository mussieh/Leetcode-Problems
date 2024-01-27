class Solution:
    def numberOfBeams(self, bank: list[str]) -> int:
        devices = []
        count = 0
        for device in bank:
            devices.append(device.count("1"))
        for i in range(len(devices)):
          if devices[i] == 0: continue
          for j in range(i + 1, len(devices)):
            if devices[i] > 0 and devices[j] > 0:
              count += (devices[i] * devices[j])
              break
        return count


sol = Solution()
print(sol.numberOfBeams(["000000","010100","001000"]))