const swap = (vetor, i, j) => {
    let temp = vetor[i];
    vetor[i] = vetor[j];
    vetor[j] = temp;
};

const shuffle = (vetor, numTrocas) => {
    for (let i = 0; i < numTrocas; i++) {
        let idx1 = Math.floor(Math.random() * vetor.length);
        let idx2 = Math.floor(Math.random() * vetor.length);
        swap(vetor, idx1, idx2);
    }
};

const bubble_sort = (vetor) => {
    let len = vetor.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }
};

const selection_sort = (vetor) => {
    let len = vetor.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (vetor[j] < vetor[min]) {
                min = j;
            }
        }
        if (min !== i) {
            swap(vetor, i, min);
        }
    }
};

const particionamento = (vetor, inicio, fim, pivot) => {
    let i = inicio;
    let j = fim;
    while (i <= j) {
        while (vetor[i] < pivot) {
            i++;
        }
        while (vetor[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(vetor, i, j);
            i++;
            j--;
        }
    }
    return i;
};

const quick_sort = (vetor, inicio, fim) => {
    if (inicio < fim) {
        let pivot = vetor[Math.floor((inicio + fim) / 2)];
        let index = particionamento(vetor, inicio, fim, pivot);
        if (inicio < index - 1) {
            quick_sort(vetor, inicio, index - 1);
        }
        if (index < fim) {
            quick_sort(vetor, index, fim);
        }
    }
};