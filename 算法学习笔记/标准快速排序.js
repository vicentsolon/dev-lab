// function compare(a, b) {
//     return a > b ? true : false;
// }

function exchange(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function quickSort(arr) {
    sortHelper(arr, 0, arr.length);
}

function sortHelper(arr, first, last) {
    if (first < last) {
        splitPoint = sort(arr, first, last);
        sortHelper(arr, first, splitPoint);
        sortHelper(arr, splitPoint + 1, last);
    }
}

function sort(arr, first, last) {
    let pivot = arr[first],
        leftmark = first + 1,
        rightmark = last - 1,
        flag = false;
    while (!flag) {
        while (leftmark <= rightmark && arr[leftmark] <= pivot) {
            leftmark ++;
        }
        while (leftmark <= rightmark && arr[rightmark] >= pivot) {
            rightmark --;
        }

        if (leftmark >= rightmark) {
            flag = true;
        } else {
            exchange(arr, leftmark, rightmark);
        }
    }

    exchange(arr, first, rightmark);
    return rightmark;
}

const arr = [4, 10, 3, 5, 1, 6, 2, 7, 9, 8, 0];
quickSort(arr);
console.log(arr);