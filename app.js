const express = require('express')
const session = require('express-session')
const app = express()

app.use(session({
    secret: 'kanikuriimukorokke',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: true,
}))

app.get('/',(req,res) => {
    req.session.count = req.session.count ? req.session.count + 1 : 1;
    res.send('<p id="count">count: ' + req.session.count + '</p>')
})

app.listen('3000',() => {
    console.log('Server running at http://127.0.0.1:8000/')
})