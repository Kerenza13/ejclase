import matplotlib.pyplot as plt
import time
import random

def bubbleSort(arr):
    n = len(arr)
    if arr == sorted(arr):
        random.shuffle(arr)
    for i in range(n-1):
        for j in range(0, n-i-1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                plt.clf()  # Clear current figure
                plt.bar(range(len(arr)), arr, color='blue')
                plt.draw()
                plt.pause(0.000000001)

arr = list(range(1, 61))

plt.bar(range(len(arr)), arr, color='blue')
plt.show(block=False)

bubbleSort(arr)

print("Sorted array is:")
for i in range(len(arr)):
    print("% d" % arr[i], end=" ")
