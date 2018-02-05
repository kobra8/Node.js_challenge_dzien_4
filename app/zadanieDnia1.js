//Twój kod
const http = require('http');

const serv = http.createServer((req, res) => {
res.setHeader("Content-Type", "text/html","charset=utf-8");
res.end("Hello, World from back-end!");
});
serv.listen(3000, ()=> {
    console.log("Server works on port 3000")
})