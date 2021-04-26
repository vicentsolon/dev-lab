// 利用对象进行数组去重

Array.prototype.unique = function () {
    const obj = {},
    newArr = [];
    for (let i = 0; i < this.length; i ++) {
        if (obj[this[i]] == undefined) {
            obj[this[i]] = this;
            newArr.push(this[i]);
        }
    }
    return newArr;
}

const arr = [];
newArr = arr.unique();
console.log(newArr);