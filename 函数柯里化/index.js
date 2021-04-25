//curry：柯里化，用户固定某个函数的前面的参数，得到一个新的函数，新的函数调用时，接收剩余的参数
function curry(func, ...args) {
    return function(...subArgs) {
        const allArgs = [...args, ...subArgs];
        if (allArgs.length >= func.length) {
            //参数够了
            return func(...allArgs);
        } else {
            //参数不够，继续固定
            return curry(func, ...allArgs);
        }
    }
}
