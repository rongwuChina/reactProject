<!--
 * @LastEditors: Please set LastEditors
 * @Descripttion: 
 * @version: 
 * @Author: wurong
 * @Date: 2020-06-12 17:15:05
 * @LastEditTime: 2020-06-28 18:54:21
--> 
## start
npm install
npm start

## online
npm run build

## 项目搭建流程
## cra   react-app-rewired customize-cra
npm create react-app myapp

npm install react-app-rewired customize-cra  --save-dev

## 改写package.json 的启动命令
/* package.json */
原来的：
"scripts": {
  "start": "react-scripts start",
   "build": "react-scripts build",
   "test": "react-scripts test",
   "eject": "react-scripts eject"

}

修改后的：
"scripts": {
   "start": "react-app-rewired start",
   "build": "react-app-rewired build",
   "test": "react-app-rewired test",
   "eject": "react-scripts eject"
}

## config-overrides.js  新增/修改

override();

## react-router-dom  路由配置
Switch   Route

## braft-editor
