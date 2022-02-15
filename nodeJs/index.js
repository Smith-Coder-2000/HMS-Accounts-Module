const express = require('express')
const app = express()
const port = 3000
const fs = require("fs");

app.get('/getdata', (req, res) => {
  fs.readFile("./employee.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    try{
        const data= JSON.parse(jsonString);
        console.log(data.employees[0].full_name);
        res.send(data)
    }catch (err) {
        console.log('error parsing JSON',err)
    }
  });
});

app.listen(port,'127.0.0.1', () => {
  console.log(`Example app listening on port ${port}`)
})