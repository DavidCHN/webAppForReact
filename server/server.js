const express=require('express')
const ReactSSR=require('react-dom/server')
const path=require('path')
const fs=require('fs')
const serverEntry=require("../dist/server-entry").default
const app=express()
app.use('/public',express.static(path.join(__dirname,'../dist')))
const template=fs.readFileSync(path.join(__dirname,'../dist/index.html'),'utf8')
app.get('*',function(req,res){

    const appString=ReactSSR.renderToString(serverEntry)
    res.send(template.replace('<app></app>',appString))


})

app.listen(3000,function(){
    console.log("Server is listened on 3000")
})