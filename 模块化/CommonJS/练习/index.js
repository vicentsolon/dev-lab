// 入口文件

// 生成54张扑克牌
let Poker = require("./poker");
let pokers = []; // 初始化牌组
for (let i = 1; i <= 13; i ++) {
    for (let j = 1; j <= 4; j ++) {
        pokers.push(new Poker(j, i));
    }
}
pokers.push(new Poker(null, 14), new Poker(null, 15));

// 洗牌
let util = require("./util");
util.sortRandom(pokers);

// 生成玩家
let player1 = pokers.slice(0, 17);
let player2 = pokers.slice(17, 34);
let player3 = pokers.slice(34, 51);
let desk = pokers.slice(51)

util.print("player1", player1);
util.print("player2", player2);
util.print("player3", player3);
util.print("desk", desk);
