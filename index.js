const http=require("http");

const { handleReqRes } = require("./helpers/handleReqRes");
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
app.handleReqRes=handleReqRes
app.createServer()
console.log(app);