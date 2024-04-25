const { StringDecoder } = require("string_decoder");
const url=require("url");
const router=require("../routes");
const { notFoundHandlers } = require("../handlers/route-handlers/notFoundHandlers");

const handle={}

handle.handleReqRes=(req,res)=>{
    const parseUrl=url.parse(req.url,true)
    const path=parseUrl.pathname
    const trimPath=path.replace(/^\/+|\/+$/g,'');
    const method=req.method.toLowerCase();
    const queryStringObject=parseUrl.query
    const  headers=req.headers;
    const requestProperties={
        parseUrl,path,trimPath,method,queryStringObject,headers
    }
    const decoder=new StringDecoder('utf-8')
    let realData=''
    const chosenHandler=router[trimPath]?router[trimPath]:notFoundHandlers;
    chosenHandler(requestProperties,(statusCode,payload)=>{
      statusCode=typeof(statusCode)==="number"?statusCode:500;
      payload=typeof(payload)==="object"?payload:{};
      const payLoadString=JSON.stringify(payload);
      res.writeHead(statusCode);
      res.end(payLoadString)
    })
    req.on("data",(buffer)=>{
    realData+=decoder.write(buffer)
    })
    req.on("end",()=>{
    realData+=decoder.end()
    console.log(realData);
    console.log(router[trimPath]);
    res.end('hello programmers')
    })
    
    
}

module.exports=handle