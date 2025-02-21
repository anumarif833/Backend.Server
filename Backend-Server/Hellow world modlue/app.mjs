import  express from 'express';
const app = express()
// const express = require('express')


const port = 3000
//192.168.228.132:3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})