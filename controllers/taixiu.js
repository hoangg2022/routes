const { errorHandler } = require("../utils");

exports.taixiu = async (req, res, next) => {
  let input = req.query.chon;
  let one = Math.ceil(Math.random()*6);
  let two = Math.ceil(Math.random()*6);
  let three = Math.ceil(Math.random()*6);
var one1 = (one == "1") ? "https://i.imgur.com/DLDPhla.png" : (one == "2") ? "https://i.imgur.com/TR8L7oG.png" : (one == "3") ? "https://i.imgur.com/9GRAb8v.png" : (one == "4") ? "https://i.imgur.com/0BeBUj2.png" : (one == "5") ? "https://i.imgur.com/Zx8aNWj.png" : "https://i.imgur.com/IrjSaAD.png";
var two1 = (two == "1") ? "https://i.imgur.com/DLDPhla.png" : (two == "2") ? "https://i.imgur.com/TR8L7oG.png" : (two == "3") ? "https://i.imgur.com/9GRAb8v.png" : (two == "4") ? "https://i.imgur.com/0BeBUj2.png" : (two == "5") ? "https://i.imgur.com/Zx8aNWj.png" : "https://i.imgur.com/IrjSaAD.png";
var three1 = (three == "1") ? "https://i.imgur.com/DLDPhla.png" : (three == "2") ? "https://i.imgur.com/TR8L7oG.png" : (three == "3") ? "https://i.imgur.com/9GRAb8v.png" : (three == "4") ? "https://i.imgur.com/0BeBUj2.png" : (three == "5") ? "https://i.imgur.com/Zx8aNWj.png" : "https://i.imgur.com/IrjSaAD.png";
var images = [ one1 , two1 , three1 ];
let total = (one == two == three) ? "thua" : (one + two + three <= 10) ? (["x"].includes(input)) ? "thắng" : "thua" : (["t"].includes(input)) ? "thắng" : "thua";
let result = (one == two && two == three) ? "3 nút bằng nhau" : (one + two + three <= 10) ? "xỉu" : "tài";
var hi = {}
    hi.total = total
    hi.input = input
    hi.result = result
    hi.images = images
    hi.author = `HoangG`
res.header("Content-type", "application/json; charset=utf-8")
res.send(JSON.stringify(hi, null, 2))
var he = []
    he.taixiu = hi
console.log(he)
};
