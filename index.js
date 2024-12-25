const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(req.params.id)
  console.log(req.params);
  
})
// app.get("/html", (req,res)=>{
//     res.sendFile()
// })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})