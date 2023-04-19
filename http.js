const http =require("http")

http.createServer(function (req,res) {
    console.log("hello world")
    res.end()
}).listen(8080)