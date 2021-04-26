// 找出最小值
// function findSmallest(arr) {
//     let smallest = arr[0];
//     let smallest_index = 0;
//     for (let i = 1; i < arr.length; i ++) {
//         if (arr[i] < smallest) {
//             smallest = arr[i];
//             smallest_index = i;
//         }
//     }
//     return smallest_index;
// }

// function selectionSort(arr) {
//     const newArr = [];
//     const len = arr.length;
//     for (let i = 0; i < len; i ++) {
//         let smallest_index = findSmallest(arr);
//         newArr.push(arr.splice(smallest_index,1)[0])
//     }
//     return newArr;
// }

// 比较
function compare(a, b) {
    return a > b ? true : false;
}

// 交换
function exchange(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

// 选择排序关键在于遍历数组找到最大（最小）的值放在右（左）端
function sort(arr) {
    let len = arr.length;
    for (let j = 0; j < len; j ++) {
        let maxIndex = 0;
        for (let i = 1; i < len - j; i++) {
            if (compare(arr[i], arr[maxIndex])) {
                maxIndex = i;
            }
        }
        exchange(arr, maxIndex, len - 1 - j);
    }
}

const arr = [0, 9, 2, 8, 6, 1, 5, 6, 4, 6, 3, 7, 10];
sort(arr);
console.log(arr);

