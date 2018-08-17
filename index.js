
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     let file = path.join(__dirname,'public/my_page.html');
//     res.sendFile(file);
// });

// app.get('/.well-known/acme-challenge/Q29yPuzyrG8toy0FKSmGRFAaUOwUM3PDRil4ptg0UAw', (req,res)=> {
// 	let cert = path.join(__dirname,'public/.well-known/acme-challenge/Q29yPuzyrG8toy0FKSmGRFAaUOwUM3PDRil4ptg0UAw');
// 	res.sendFile(cert);
// });

// app.get('/.well-known/acme-challenge/mNvuGsW1_Fd42_LxZTsYzW-mFROb0b8kv2-8toH485M', (req,res)=> {
//         let cert = path.join(__dirname,'public/.well-known/acme-challenge/mNvuGsW1_Fd42_LxZTsYzW-mFROb0b8kv2-8toH485M');
//         res.sendFile(cert);
// });
// app.listen(80, () => console.log('Example app listening on port 3000!'));

///


// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/isan.cf/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/isan.cf/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/isan.cf/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

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
// Starting both http & https servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});