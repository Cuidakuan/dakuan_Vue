//这是Node中向外暴露成员的形式
//module.exports={}

//在ES6中也用过规范的形式，规定了ES6中如何 导入 和 导出 模块
/*
    在ES6中导入模块，使用  import 模块名称 from '模块标识符'  css的是import '表示路径'
    在ES6中，使用 export default 和 export  向外暴露成员：
* */

  
  var info={
  	name:'zs',
  	age:20
  }
  
  export default info;
  
  export var title='小星星'
  export var content='哈哈哈'



/*
     在Node中，使用 var 名称 = require('模块标识符')
   module.exports 和 exports 来暴露成员
*/