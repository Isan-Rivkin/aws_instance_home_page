const path = require('path');
var serveStatic = require('serve-static')
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
//app.use(serveStatic(path.join(__dirname, 'public'), {'index': ['my_page.html']}));

app.get('/', (req, res) => {
    let file = path.join(__dirname,'public/my_page.html');
    res.sendFile(file);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
