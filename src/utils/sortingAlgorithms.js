
// Bubble Sort Algorithm
export const bubbleSort = (array) => {
    const animations = [];
    const arr = [...array];
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // Push the comparison animation
            animations.push({ type: 'compare', indices: [j, j + 1], array: [...arr] });
            if (arr[j] > arr[j + 1]) {
                // Swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                // Push the swap animation
                animations.push({ type: 'swap', indices: [j, j + 1], array: [...arr] });
            }
        }
    }
    return animations;
};

// Selection Sort Algorithm
export const selectionSort = (array) => {
    const animations = [];
    const arr = [...array];
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            // Push the comparison animation
            animations.push({ type: 'compare', indices: [minIndex, j], array: [...arr] });
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            // Swap
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            // Push the swap animation
            animations.push({ type: 'swap', indices: [i, minIndex], array: [...arr] });
        }
    }
    return animations;
};

// Insertion Sort Algorithm
export const insertionSort = (array) => {
    const animations = [];
    const arr = [...array];
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            // Push the comparison animation
            animations.push({ type: 'compare', indices: [j, j + 1], array: [...arr] });
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
        // Push the final position of the key
        animations.push({ type: 'swap', indices: [j + 1, i], array: [...arr] });
    }
    return animations;
};


export const BubbleSortCodeSnippets = {
    JavaScript: `function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }`,
    Python: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
      for j in range(n - 1 - i):
        if arr[j] > arr[j + 1]:
          arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr`,
    Java: `public class BubbleSort {
    static void bubbleSort(int[] arr) {
      int n = arr.length;
      for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            int temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }
    }
  }`,
};

export const QuickSortCodeSnippets = {
    JavaScript: `function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = [], right = [];
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) left.push(arr[i]);
      else right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
  }`,
    Python: `def quick_sort(arr):
    if len(arr) <= 1:
      return arr
    pivot = arr[-1]
    left = [x for x in arr[:-1] if x < pivot]
    right = [x for x in arr[:-1] if x >= pivot]
    return quick_sort(left) + [pivot] + quick_sort(right)`,
    Java: `public class QuickSort {
    public static void quickSort(int[] arr, int low, int high) {
      if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
      }
    }
  
    private static int partition(int[] arr, int low, int high) {
      int pivot = arr[high];
      int i = (low - 1);
      for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
          i++;
          int temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
      int temp = arr[i + 1];
      arr[i + 1] = arr[high];
      arr[high] = temp;
      return i + 1;
    }
  }`,
};
  
export const SelectionSortSnippets = {
    JavaScript: `function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      if (minIdx !== i) {
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      }
    }
    return arr;
  }`,
    Python: `def selection_sort(arr):
    n = len(arr)
    for i in range(n):
      min_idx = i
      for j in range(i + 1, n):
        if arr[j] < arr[min_idx]:
          min_idx = j
      arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr`,
    Java: `public class SelectionSort {
    static void selectionSort(int[] arr) {
      int n = arr.length;
      for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++) {
          if (arr[j] < arr[minIdx]) {
            minIdx = j;
          }
        }
        int temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
      }
    }
  }`
  };
