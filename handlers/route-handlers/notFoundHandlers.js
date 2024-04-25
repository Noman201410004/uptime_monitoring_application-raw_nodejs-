const handlers={}

handlers.notFoundHandlers=(requestProperties,callback)=>{
     console.log(requestProperties);
    callback(404,{
        message:"you requested url not founded"
    })
console.log("not founded");
}

module.exports=handlers