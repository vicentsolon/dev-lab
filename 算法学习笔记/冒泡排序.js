// 排序算法核心在于比较与交换

// function compare(a, b) {
//     return a > b ? true : false;
// }

// function exchange(arr, a, b) {
//     let temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
// }

// function sort(arr) {
//     let len = arr.length;
//     for (let i = 0; i < len - 1; i ++) {
//         for (let j = 0; j < len - 1 - i; j ++) {
//             if (compare(arr[j], arr[j+1])) {
//                 exchange(arr, j, j + 1);
//             }
//         }
//     }
// }

// const arr = [0, 2, 9, 2, 8, 6, 5, 6, 4, 6, 3, 7, 1];
// sort(arr)
// console.log(arr)

// // Array.prototype.unique = function () {
// //     const newArr = [],
// //     obj = {};
// //     for (let i = 0; i < this.length; i ++) {
// //         if (obj[this[i]] == undefined) {
// //             obj[this[i]] = this;
// //             newArr.push(this[i]);
// //         }
// //     }
// //     return newArr;
// // }



// function compare(a, b) {
//     return a > b ? true : false;
// }

// function exchange(arr, a, b) {
//     let temp = arr[b];
//     arr[b] = arr[a];
//     arr[a] = temp;
// }

// function sort(arr) {
//     let len = arr.length;
//     for (let i = 0; i < len - 1; i ++) {
//         for (let j = 0; j < len - 1 - i; j ++) {
//             if(compare(arr[j], arr[j + 1])) {
//                 exchange(arr, j, j + 1);
//             }
//         }
//     }
// }

// Array.prototype.unique = function () {
//     const obj = {},
//     newArr = [];
//     for (let i = 0; i < this.length; i ++) {
//         if (obj[this[i]] == undefined) {
//             obj[this[i]] = this;
//             newArr.push(this[i]);
//         }
//     }
//     return newArr;
// }

// const newArr = arr.unique();
// console.log(newArr);

function getType(target) {
    return Object.prototype.toString.call(target).slice(8, -1);
}

function deepClone(origin) {
    let target,
    originType = getType(origin);
    if (originType == "Object") {
        target = {};
    } else if (originType == "Array") {
        target = [];
    } else {
        return origin;
    }

    for (let prop in origin) {
        if (origin.hasOwnProperty(prop)) {
            let valueType = getType(origin[prop]);
            if (valueType == "Object" || valueType == "Array") {
                target[prop] = deepClone(origin[prop]);
            } else {
                target[prop] = origin[prop];
            }
        }
    }
    return target;
}

const obj = {
    a : "a1",
    b : "b1",
    arr : [1,2,3],
    obj1 : {
        c : "c1",
        arr1: [4,5, [6,7]]
    },
    d: "d1"
}
const obj1 = obj;
const newObj = deepClone(obj);
newObj.arr = [9,10];
obj1.arr = [11,12];
console.log(newObj, obj);