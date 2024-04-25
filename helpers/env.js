const environment={};
environment.staging={
    port:3000,
    envName:"staging"

}
environment.production={
    port:3000,
    envName:"production"

}
const currentEnvironment=typeof(process.env.NODE_ENV)==="string"?process.env.NODE_ENV:"staging"
module.exports=environment