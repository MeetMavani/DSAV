
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
