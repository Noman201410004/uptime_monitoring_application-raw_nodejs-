const http=require("http");

const { handleReqRes } = require("./helpers/handleReqRes");
const environment=require('./helpers/env')
// adding a scaffolding 
const app={};

app.createServer=()=>{
    const server=http.createServer(app.handleReqRes)
    server.listen(environment.port,()=>{
        console.log(`listing a port ${environment.port}`);
        
    })
}
console.log(app.handleReqRes);
app.handleReqRes=handleReqRes
app.createServer()
console.log(app);