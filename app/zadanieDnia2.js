//Twój kod
const http = require('http');

const serv = http.createServer((req, res) => {
    const userAgent = req.headers['user-agent'];
res.setHeader("Content-Type", "text/html","charset=utf-8");
res.end(userAgent);
});
serv.listen(3000, ()=> {
    console.log("Server works on port 3000")
})