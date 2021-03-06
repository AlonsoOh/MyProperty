const express = require('express')
const app = express()
app.use(express.json())
require('date-utils')
port = 8000

// http://localhost:8000/capston2020?name=kim&color=red
app.get('/capston2020', function(req, res) {
    r = req.query
    r.ip = req.ip.replace(/^.*:/, '')
    r.time = (new Date()).toFormat("YYYY-MM-DD HH:MM:SS")
    r.email = "jrboyosa1126@naver.com"
    r.stuno = "20141547"
    console.log(r)
    res.send(JSON.stringify(r))
})

app.post('/capston2020', function(req, res) {
    r = req.body
    r.ip = req.ip.replace(/^.*:/, '')
    r.time = (new Date()).toFormat("YYYY-MM-DD HH:MM:SS")
    r.email = "jrboyosa1126@naver.com"
    r.stuno = "20141547"
    console.log(req.body)
    res.send(JSON.stringify(r))
})

// http://localhost:8000/capston2020/kim/red
app.get('/capston2020/:a/:b', function(req, res) {
    r = req.params
    ip = req.ip.replace(/^.*:/, '')
    r.time = (new Date()).toFormat("YYYY-MM-DD HH:MM:SS")
    r.email = "jrboyosa1126@naver.com"
    r.stuno = "20141547"
    console.log(r)
    res.send(JSON.stringify(r))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

