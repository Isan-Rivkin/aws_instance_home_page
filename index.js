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

app.get('/.well-known/acme-challenge/Q29yPuzyrG8toy0FKSmGRFAaUOwUM3PDRil4ptg0UAw', (req,res)=> {
	let cert = path.join(__dirname,'public/.well-known/acme-challenge/Q29yPuzyrG8toy0FKSmGRFAaUOwUM3PDRil4ptg0UAw');
	res.sendFile(cert);
});

app.get('/.well-known/acme-challenge/mNvuGsW1_Fd42_LxZTsYzW-mFROb0b8kv2-8toH485M', (req,res)=> {
        let cert = path.join(__dirname,'public/.well-known/acme-challenge/mNvuGsW1_Fd42_LxZTsYzW-mFROb0b8kv2-8toH485M');
        res.sendFile(cert);
});
app.listen(80, () => console.log('Example app listening on port 3000!'));
