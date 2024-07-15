const fs=require("fs");

function loadata(){
    try{
        return JSON.parse(fs.readFileSync("data.json"))
    }
    catch{
        return []
    }
}


function savedata(data){
    fs.writeFileSync("data.json",JSON.stringify(data))
}

function addperson(data){
    const database=loadata();
    const find=database.find((x)=>x.id===data.id)
    if(find){
        console.log("alreadt exist");
    }
    else{
        database.push(data);
        savedata(database);
    }
}
function deletee(num){
    const database=loadata();
    const newdata =database.filter((x)=>{
        return x.id!=num;
    })
    savedata(newdata)
}

function listdata(){
    const database=loadata();
    database.forEach((x)=>{
        console.log(x.fname,x.lname);
    })
}
function read(num){
      const database=loadata();
      var temp= database.find((x)=>{
          return  x.id==num
        })
        if (temp){
        console.log(temp)}
        else{
            console.log("item is not found")
        }
}

module.exports={
    load:loadata,
    add:addperson,
    del:deletee,
    show:listdata,
    read:read
};
