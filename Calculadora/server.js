const express = require('express')

let app = express()

let port = process.env.port

if (port == null || port == ""){
    port = 8000
}

app.listen(port)