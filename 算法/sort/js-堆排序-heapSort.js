var heapSort = () => {
    var array = [34, 56, 23, 12, 78, 30, 10, 18, 33]; // 9
    var heapSize = array.length;
    buildHeap(array);
    while (heapSize > 1) {
        heapSize--;
        [array[0], array[heapSize]] = [array[heapSize], array[0]];
        heapify(array, heapSize, 0);
    }
    return array;
    function buildHeap(array) {
        var heapSize = array.length;
        for (var i = Math.floor(heapSize / 2); i >= 0; i--) { // 4, 3, 2, 1, 0
            heapify(array, heapSize, i);
        }
    }
    function heapify(array, heapSize, i) { // 9, 4; i: 4, 3, 2, 1, 0
        var left = i * 2 + 1, // 9, 7, 5, 3, 1
            right = i * 2 + 2, // 10(没用), 8, 6, 4, 2
            largest = i;
        if (left < heapSize && array[left] > array[largest]) largest = left;
        if (right < heapSize && array[right] > array[largest]) largest = right;
        if (largest !== i) {
            [array[i], array[largest]] = [array[largest], array[i]];
            heapify(array, heapSize, largest);
        }
    }
};
console.log('heapSort ', heapSort());