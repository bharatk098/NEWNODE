const express = require('express')
const app = express()


app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/',(req,resp)=>{
    resp.render('index')
})

app.listen(3000)