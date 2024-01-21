const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url ==='/'){
        res.end('this is our first home page')
    }
    if(req.url==='/about'){
        res.end('here is a short history')
    }
    res.end(`
    <h1>oops!!!</h1>
    <p> here we can't find the page u were looking for</p>
    <a herf="/">back home</a>
    `)
   
})
server.listen(5000)
