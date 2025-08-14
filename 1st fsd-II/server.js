
import http from 'http';
import { hostname } from 'os';
const hostName="127.0.0.1"
const port=3000;
const server=http.createServer((req,res)=>{
    if (req.url==='/') {
     res.statusCode=200
    res.getHeader("content type","text/plain")
    res.end("this is the first message from mani-shankar")   
    }
    if (req.url==='/vinay') {
     res.statusCode=200
    res.getHeader("content type","text/plain")
    res.end("this is the first message from vinay")   
    }
    else{
    res.statusCode=404
    res.getHeader("content type","text/plain")
    res.end("oh noo !! mani-shankar passed away")
    }   
})

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostName}:${port}/`);})