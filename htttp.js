const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Hello this is the Home Page')
    }
    else if(req.url === "/about"){
        res.end('This is our short history that we would like to share with yall!!')
    }
    else{
        res.end(`
        <h1> OOps!! </h1>
        <p> This route is not decleared please return to home</p>
        <a href="/">back home </a>
        `
        )
    }
})

server.listen(5000)