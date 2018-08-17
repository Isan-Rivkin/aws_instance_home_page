const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Nuni I Love you gozal katan!!'))

app.listen(80, () => console.log('Example app listening on port 80!'))
