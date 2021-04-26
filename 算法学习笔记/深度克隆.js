// 定义一个类型返回函数
function getType(item) {
    return Object.prototype.toString.call(item).slice(8, -1);
}

// 深度克隆
function deepClone(origin) {
    let originTyep = getType(origin),
    target;
    if (originTyep == "Object") {
        target = {};
    } else if (originTyep == "Array") {
        target = [];
    } else {
        return origin;
    }

    for (let prop in origin) {
        if (origin.hasOwnProperty(prop)) {
            let valueType = getType(prop);
            if ( valueType == "Object" || valueType == "Array") {
                target[prop] = deepClone(origin[prop]);
            } else {
                target[prop] = origin[prop];
            }
        }
    }
    return target;
}

const obj = {
    a: "a1",
    b: "b1",
    arr1: [1,2,[3,4,[5,6]]],
    arr2: [7,8,{c: "c1", d: "d1", arr2: [9,10]}],
    obj2: {
        e: "e1",
        f: "f1",
        arr3: [11,12]
    }
}

newObj = deepClone(obj);
console.log(newObj);