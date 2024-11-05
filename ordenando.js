// a) Função swap: Troca os valores de duas posições de um vetor
const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

// b) Função shuffle: Embaralha os elementos de um vetor
const shuffle = (arr, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
        const idx1 = Math.floor(Math.random() * arr.length);
        const idx2 = Math.floor(Math.random() * arr.length);
        swap(arr, idx1, idx2);
    }
};

// c) Função bubble_sort: Ordena um vetor de inteiros usando Bubble Sort
const bubble_sort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
};

// d) Função selection_sort: Ordena um vetor de inteiros usando Selection Sort
const selection_sort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(arr, i, minIndex);
        }
    }
};

// e) Função particionamento: Função de apoio ao Quick Sort
const particionamento = (arr, low, high) => {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
};

// f) Função quick_sort: Ordena um vetor de inteiros usando Quick Sort (recursivo)
const quick_sort = (arr, low, high) => {
    if (low < high) {
        const pi = particionamento(arr, low, high);
        quick_sort(arr, low, pi - 1);
        quick_sort(arr, pi + 1, high);
    }
};


