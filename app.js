
const functions=require("./functions")


const yargs = require("yargs")

yargs.command({
    command: "add",
    describe:"to add something",
    builder:{
        id:{
            describe:"id is required",
            demandOption: true,
            type:"number"
        },
        fname:{
            describe:"first name is required",
            demandOption: true,
            type:"string"
        },
        lname:{
            describe:"last name is required",
            demandOption: true,
            type:"string"
        }
    },
    handler:(x)=>{
        functions.add({
            id:x.id,
            fname:x.fname,
             lname:x.lname
         })
    }
})

yargs.command({
    command:"delete",
    describe:"this is delete command"
    ,
    handler:(x)=>{
        functions.del(x.id);
    }        

})
yargs.command({
    command:"list_data",
    handler:()=>{functions.show()}
})
yargs.command({
    command:"read",
    handler:(x)=>{
        functions.read(x.id)
    }
})
console.log(yargs.argv)