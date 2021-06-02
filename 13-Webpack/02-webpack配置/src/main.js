/*
 * CopyRight (c) 2021 ShaoxiongDu<dev@shaoxiongdu.cn>  All Rights Reserved
 * 入口
 */
console.log("Hello Webpack!")

/*CommonJS导入*/
const {add} = require('./js/mathUtils')


console.log( ' 结果:' + add(1, 2));
