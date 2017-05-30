# mongodDb+express+node
```
bodyParser:解析post请求数据

cookies：读写cookie

swig：模板解析引擎

mongoose：操作mongoose

markdown:markdown语法解析生成模块
```
## 目录结构
```
db:数据库存储目录

models：数据库模型文件目录

node_modules：node第三方模块目录

public：公共文件目录/js/css/images

routes：路由文件目录

schems：数据库结构文件目录

views：模板视图文件目录

app.js应用入口文件

package.json
```
### 创建应用、监听端口
```
var express=require("express");

var app=express();

app.listen(8081);
```
### 用户的访问
```
用户通过url访问web应用，如http://localhost:8081/

web后端根据用户访问的url处理不同的业务逻辑
```
### 路由绑定
```
通过app.get()或app.post()等方法可以把一个url路径和一个或n个函数进行绑定

app.get('/',function(req,res,next){})
req:request对象--保存客户端请求相关的一些数据http.request
res:response对象--服务端输出对象，提供一些服务器端输出相关的一些方法-http-response
next:方法，用于执行下一个和路径匹配的函数
```
### 内容输出
通过res.send(string)发送内容至客户端
### 模板的使用
后端逻辑和页面表现分离----前后端分离

### 模块划分
```
根据功能进行模块划分

前台模块

后台管理模块

Api模块

使用app.use()进行模块划分

        app.use('/admin',require('./routers/admin'))
        app.use('/api',require('./routers/api'))
        app.use('/',require('./routers/main'))


main模块
/   首页
/view  内容页


api模块
/              首页
/register      用户注册
/login         用户登录
/comment       评论获取
/comment/post  评论提交

admin模块
/               首页
/user           用户列表
/category       分类列表
/category/add   分类添加
/category/edit  分类修改
/category/delete分类删除

················
```

