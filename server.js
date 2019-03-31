
const path = require('path');
const express = require('express');
const http = require('http');
const https = require('https');
const app = express();
const fs = require('fs');
app.use(express.static(path.join(__dirname, 'public')));

// Certificate
// const privateKey = fs.readFileSync('/etc/letsencrypt/live/isan.cf/privkey.pem', 'utf8');
// const certificate = fs.readFileSync('/etc/letsencrypt/live/isan.cf/cert.pem', 'utf8');
// const ca = fs.readFileSync('/etc/letsencrypt/live/isan.cf/chain.pem', 'utf8');

// const credentials = {
// 	key: privateKey,
// 	cert: certificate,
// 	ca: ca
// };

app.get('/', (req, res) => {
    let file = path.join(__dirname,'public/my_page.html');
    res.sendFile(file);
});
const getRand = (list)=>{
    return list[Math.floor(Math.random()*list.length)];
}
const iluz_is = ()=> {
    let appearance = [
        "attractive",
        "bald",
        "beautiful",
        "chubby",
        "clean",
        "dazzling",
        "drab",
        "elegant",
        "fancy",
        "fit",
        "flabby",
        "glamorous",
        "gorgeous",
        "handsome",
        "long",
        "magnificent",
        "muscular",
        "plain",
        "plump",
        "quaint",
        "scruffy",
        "shapely",
        "short",
        "skinny",
        "stocky",
        "ugly",
        "unkempt",
        "unsightly",
    ];
    let positivePersonality = [
        "aggressive",
        "agreeable",
        "ambitious",
        "brave",
        "calm",
        "delightful",
        "eager",
        "faithful",
        "gentle",
        "happy",
        "jolly",
        "kind",
        "lively",
        "nice",
        "obedient",
        "polite",
        "proud",
        "silly",
        "thankful",
        "victorious",
        "witty",
        "wonderful",
        "zealous",
    ];
    let negativePersonality = [
        "angry",
        "bewildered",
        "clumsy",
        "defeated",
        "embarrassed",
        "fierce",
        "grumpy",
        "helpless",
        "itchy",
        "jealous",
        "lazy",
        "mysterious",
        "nervous",
        "obnoxious",
        "panicky",
        "pitiful",
        "repulsive",
        "scary",
        "thoughtless",
        "uptight",
        "worried",
    ];    
    let size = [
        "big",
        "colossal",
        "fat",
        "gigantic",
        "great",
        "huge",
        "immense",
        "large",
        "little",
        "mammoth",
        "massive",
        "microscopic",
        "miniature",
        "petite",
        "puny",
        "scrawny",
        "short",
        "small",
        "tall",
        "teeny",
        "tiny",
    ];
    // story 
    let posWord = getRand(positivePersonality) 
    let negWord = getRand(negativePersonality)
    let sizeWord = getRand(size)
    let appWord = getRand(appearance)
    let text = `Iluz is so ... ${posWord}, too bad because he is also very ${negWord}, his ${sizeWord} brain is very ${appWord}`
    return text
}
app.get('/iluz_is',(req,res) => {
    res.end(iluz_is())
});

// app.get('/.well-known/acme-challenge/Q29yPuzyrG8toy0FKSmGRFAaUOwUM3PDRil4ptg0UAw', (req,res)=> {
// 	let cert = path.join(__dirname,'public/.well-known/acme-challenge/Q29yPuzyrG8toy0FKSmGRFAaUOwUM3PDRil4ptg0UAw');
// 	res.sendFile(cert);
// });

// app.get('/.well-known/acme-challenge/mNvuGsW1_Fd42_LxZTsYzW-mFROb0b8kv2-8toH485M', (req,res)=> {
//         let cert = path.join(__dirname,'public/.well-known/acme-challenge/mNvuGsW1_Fd42_LxZTsYzW-mFROb0b8kv2-8toH485M');
//         res.sendFile(cert);
// });
// Starting both http & https servers
const httpServer = http.createServer(app);
// const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

// httpsServer.listen(443, () => {
// 	console.log('HTTPS Server running on port 443');
// });
