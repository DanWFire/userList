const express = require('express')
const router = require('./router')
const cors = require('cors')

//create a web server
const app = express()
//解析body数据
app.use(express.json())


//加载路由器router之前解决跨域cors问题
app.use(cors())
app.use('/api',router)

const PORT = 8000;
app.listen(PORT,function(){
    console.log('server is running on http://localhost')
})