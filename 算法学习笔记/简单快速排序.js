function compare(a, b) {
    return a > b ? true : false;
}

function exchange(arr, a, b) {
    let temp = arr[b];
    arr[b] = arr[a];
    arr[a] = temp;
}

function quickSort(arr) {
    let left = [],
    right = [],
    len = arr.length,
    leader = arr[0];
    if (arr == null || len == 0) {
        return [];
    }
    for (let i = 1; i < len; i ++) {
        if (compare(leader, arr[i])) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    console.log(left, right);
    left = quickSort(left);
    right = quickSort(right);
    return [...left, leader,...right];
}

const arr = [4,1,3,2,0,5,9,7,5,10,6,8];
const newArr = quickSort(arr);
console.log(newArr);
