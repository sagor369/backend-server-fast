const express = require('express')
const app = (express())
const port = process.env.PROT || 5000 
const cors = require('cors')
app.use(express.json())

const users = [
    {"name": "sabana", "email": "sabana@gmail.com"},
    {"name": "sabnur", "email": "sabnur@gmail.com"},
    {"name": "sahanaj", "email": "sahanaj@gmail.com"},
    {"name": "sakila", "email": "sakila@gmail.com"}
]

app.use(cors())

app.get('/', (req, res) =>{
    res.send('server site running ')
})

app.get('/users' , (req, res) =>{
    res.send(users)
})

app.post('/users' , (req, res) =>{
    // console.log('cline site data send ')
    // console.log(req.body)
    const newUser = req.body
    newUser.id = users.length
    users.push(newUser)
    res.send(users)

})

app.listen(port, ()=>{
    console.log(`server site running port ${port}`)
})