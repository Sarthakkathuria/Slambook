const express =require('express'); 
const bodyParser =require('body-parser');

 
const app = express();
const adminRoutes= require('./routes/admin.js');
// .use method is used for using middleware 

//this bodyparser is used to parse the body
//with this we don't have to use split function 
//extended to false is used to remove the error undefined extended option


app.use(bodyParser.urlencoded({extended:false} ));

app.use('/',(req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});


//to shorten create server code
//with .listen method we can also remove http import
app.listen(3000);
// const server =http.createServer();
// server.listen(3000);





