const express = require('express')
require('dotenv').config()
const app = express();
const  route = require ( './routes/route')
//IMPORT MODEL

//TO FIX PROBPLEM PETWEEN CLIENT AND SERVER
const cors = require('cors')
app.use(cors())

//TO MAKE THE DATA SHOW IN REACT APP
app.use(express.json())
app.use(route)
//PORT

//CONNECT WITH MONGO DB
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL).then(()=>{
    const port = process.env.PORT;
app.listen(port, () => {
    console.log(`localhost working in ${port}`)
})
})
