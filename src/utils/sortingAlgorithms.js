
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

export const mergeSort = (array) => {
  const animations = [];
  const arr = [...array];
  const helper = Array(arr.length);

  const merge = (start, mid, end) => {
    let i = start;
    let j = mid + 1;
    let k = start;

    while (i <= mid && j <= end) {
      animations.push({ type: 'compare', indices: [i, j], array: [...arr] });
      if (arr[i] <= arr[j]) {
        helper[k++] = arr[i++];
      } else {
        helper[k++] = arr[j++];
      }
    }

    while (i <= mid) {
      helper[k++] = arr[i++];
    }

    while (j <= end) {
      helper[k++] = arr[j++];
    }

    for (let l = start; l <= end; l++) {
      arr[l] = helper[l];
      animations.push({ type: 'swap', indices: [l], array: [...arr] });
    }
  };

  const mergeSortRecursive = (start, end) => {
    if (start < end) {
      const mid = Math.floor((start + end) / 2);
      mergeSortRecursive(start, mid);
      mergeSortRecursive(mid + 1, end);
      merge(start, mid, end);
    }
  };

  mergeSortRecursive(0, arr.length - 1);
  return animations;
};

export const quickSort = (array) => {
  const animations = [];
  const arr = [...array];

  const partition = (low, high) => {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      animations.push({ type: 'compare', indices: [j, high], array: [...arr] });
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        animations.push({ type: 'swap', indices: [i, j], array: [...arr] });
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    animations.push({ type: 'swap', indices: [i + 1, high], array: [...arr] });
    return i + 1;
  };

  const quickSortRecursive = (low, high) => {
    if (low < high) {
      const pivotIndex = partition(low, high);
      quickSortRecursive(low, pivotIndex - 1);
      quickSortRecursive(pivotIndex + 1, high);
    }
  };

  quickSortRecursive(0, arr.length - 1);
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

export const InsertionSortCodeSnippets = {
    JavaScript: `function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
    return arr;
  }`,
    Python: `def insertion_sort(arr):
    for i in range(1, len(arr)):
      key = arr[i]
      j = i - 1
      while j >= 0 and arr[j] > key:
        arr[j + 1] = arr[j]
        j -= 1
      arr[j + 1] = key
    return arr`,
    Java: `public class InsertionSort {
    static void insertionSort(int[] arr) {
      for (int i = 1; i < arr.length; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          j = j - 1;
        }
        arr[j + 1] = key;
      }
    }
  }`,
};
  
export const MergeSortCodeSnippets = {
  JavaScript: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}`,
  Python: `def merge_sort(arr):
  if len(arr) <= 1:
    return arr

  mid = len(arr) // 2
  left = merge_sort(arr[:mid])
  right = merge_sort(arr[mid:])

  return merge(left, right)

def merge(left, right):
  result = []
  i = j = 0

  while i < len(left) and j < len(right):
    if left[i] < right[j]:
      result.append(left[i])
      i += 1
    else:
      result.append(right[j])
      j += 1

  result.extend(left[i:])
  result.extend(right[j:])
  return result`,
  Java: `public class MergeSort {
  public static void mergeSort(int[] arr, int left, int right) {
    if (left < right) {
      int mid = (left + right) / 2;
      mergeSort(arr, left, mid);
      mergeSort(arr, mid + 1, right);
      merge(arr, left, mid, right);
    }
  }

  private static void merge(int[] arr, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;

    int[] L = new int[n1];
    int[] R = new int[n2];

    for (int i = 0; i < n1; ++i)
      L[i] = arr[left + i];
    for (int j = 0; j < n2; ++j)
      R[j] = arr[mid + 1 + j];

    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k++] = L[i++];
      } else {
        arr[k++] = R[j++];
      }
    }

    while (i < n1)
      arr[k++] = L[i++];
    while (j < n2)
      arr[k++] = R[j++];
  }
}`,
};

