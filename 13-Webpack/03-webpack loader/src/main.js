/*
 * CopyRight (c) 2021 ShaoxiongDu<dev@shaoxiongdu.cn>  All Rights Reserved
 * 入口
 */
console.log("Hello Webpack!")

/*CommonJS导入*/
const {add} = require('./js/mathUtils')

import css from "file.css";;


console.log( ' 结果:' + add(1, 2));


/*
依赖CSS文件*/
require('./css/normal.css')
