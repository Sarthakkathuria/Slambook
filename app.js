const http = require('http');
const fs =require('fs');


const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    const method =req.method;
    const url = req.url; 
    //to check if url is / only
    if (url=== '/'){
        res.setHeader('Content-Type','text.html');
    res.write('<html>');
    res.write('<head><title>Mu first page</title></head>');
    //redirect it to /message 
    res.write('<body><form action="/message" method="POST"><input type="Text"><button type="submit"></button></form></body>');
    res.write('</html>');
    return res.end();

    }
    //if it is message 
    if (url ==='/message' && method==='POST'){
        const body=[];
        //for getting data we use req.on for buffer
        req.on('data',(chunk) =>{
            console.log(chunk);
            body.push(chunk); 
        });
        //for checking if the data is still available
        req.on('end',()=>{

        })
        fs.writeFileSync('message.text','DUMMY')
         //for creating new file 
        res,statusCode=302;
        res.setHeader('Location','/');
        return res.end();
         
    }

    res.setHeader('Content-Type','text.html');
    res.write('<html>');
    res.write('<head><title>Mu first page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server</h1></body>');
    res.write('</html>');

    res.end();
});
server.listen(3000);

