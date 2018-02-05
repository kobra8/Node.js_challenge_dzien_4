const http =  require('http');

const srv = http.createServer((req, res) => {
    console.log("Someone knock to backend door");
    const userAgent = req.headers['user-agent'];
    console.log("Twój system: ", userAgent);
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("Wysłano stringa z serewera");
})

srv.listen(3000, ()=> {
    console.log("Serwer uruchomiony na porcie 3000")
})