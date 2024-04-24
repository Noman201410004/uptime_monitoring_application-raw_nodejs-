const http=require("http");
const { StringDecoder } = require("string_decoder");
const url=require("url")
// adding a scaffolding 
const app={};
app.config={
    port:3000,
}
app.createServer=()=>{
    const server=http.createServer(app.handleReqRes)
    server.listen(app.config.port,()=>{
        console.log(`listing a port ${app.config.port}`);
    })
}
app.handleReqRes=(req,res)=>{
    const parseUrl=url.parse(req.url,true)
    const path=parseUrl.pathname
    const trimPath=path.replace(/^\/+|\/+$/g,'');
    const method=req.method.toLowerCase();
    const queryStringObject=parseUrl.query
    const  headers=req.headers;
    const decoder=new StringDecoder('utf-8')
    let realData=''
    req.on("data",(buffer)=>{
    realData+=decoder.write(buffer)
    })
    req.on("end",()=>{
    realData+=decoder.end()
    console.log(realData);
    console.log(parseUrl,path,trimPath,method,queryStringObject,headers);
    })
    
    res.end('hello programmers')
}
app.createServer()
console.log(app);