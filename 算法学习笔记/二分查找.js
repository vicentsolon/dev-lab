// 对顺序表的二分查找
Array.prototype.binarySearch = function (target) {
    let leftmark = 0,
    rightmark = this.length - 1,
    found = false;
    while (leftmark <= rightmark && !found) {
        let mid = Math.floor((rightmark+leftmark)/2);
        if (this[mid] == target) {
            found = true;
        } else if (target < this[mid]) {
            rightmark = mid - 1;
        } else if (target > this[mid]) {
            leftmark = mid + 1;
        }
    }
    return found;
}


const arr = [1,2,3,4,5,6,7,8,9];
let flag = arr.binarySearch(3);
console.log(flag)
