const handlers={}

handlers.sampleHandlers=(requestProperties,callback)=>{
    console.log(requestProperties);
    callback(200,{
        message:"this is sample "
    })
console.log("simple founded");
}

module.exports=handlers