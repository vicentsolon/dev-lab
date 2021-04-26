Array.prototype.binarySearch = function (target) {
    let len = this.length,
    mid = Math.floor(len/2),
    leftmark = 0,
    rightmark = len,
    result = false;
    while (!result) {
        if (target > this[mid]) {
            leftmark = mid;
            mid = leftmark +  Math.floor((rightmark - leftmark)/2);
        } else if (target < this[mid]) {
            rightmark = mid;
            mid = leftmark + Math.floor((rightmark - leftmark)/2);
        } else if (target == this[mid]){
            result = true;
        }
        if (leftmark >= rightmark) {
            return -1;
        }
    }
    return result;
}


const arr = [1,2,3,4,5,6,7,8,9];
let flag = arr.binarySearch(10);
console.log(flag)
