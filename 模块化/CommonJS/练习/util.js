module.exports = {
    sortRandom: function (arr) {
        // 乱序 洗牌
        arr.sort(function (a, b) {
            return Math.random() - 0.5;
        })
    },
    print: function (player, pokers) {
        // 打印扑克牌
        let str = "";
        for (let i = 0; i < pokers.length; i ++) {
            str += `${pokers[i].toString()}   `;
        }
        str = `${player}:  ${str}`;
        console.log(str);
    }
}