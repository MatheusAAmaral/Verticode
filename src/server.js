const express = require('express')

const app = express()
const PORT = 3334
// app.use(express.json())

app.listen(PORT,  () => {
    console.log('Running in port',PORT)
})