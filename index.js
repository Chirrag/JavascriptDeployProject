require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/services',(req,res)=>{
    res.send('Welcome Serivces Page')
})
app.get('/contact',(req,res)=>{
    res.send('<h3>Welcome contact Page</h3>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})