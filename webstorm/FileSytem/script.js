const fs = require('fs');

fs.readFile('../.././mongo/teoriaMONGO.txt','utf-8', (error, data)=>{
  if(error){
    console.log(error);
  }else{
    console.log(data);
  }
})
