var quickSort = () => {
    var array = [34, 56, 23, 12, 78, 30, 10, 18, 33];
    quick(array, 0, array.length - 1);
    return array;
    function quick(array, left, right) {
        if (array.length === 1) return;
        var index = partition(array, left, right);
        if (left < index - 1) quick(array, left, index - 1);
        if (index < right) quick(array, index, right);
    }
    function partition(array, left, right) {
        var pivot = array[Math.floor( (left + right) / 2 )],
            i = left,
            j = right;
        while(i <= j) {
            while (array[i] < pivot) i++;
            while (array[j] > pivot) j--;
            if (i <= j) {
                [array[i], array[j]] = [array[j], array[i]];
                i++;
                j--;
            }
        }
        return i;
    }
}
console.log('quickSort ', quickSort());