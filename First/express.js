const path =require('path')

const express =require('express'); 
const bodyParser =require('body-parser');

const app = express();

// const adminRoutes = require('./routes/admin');
const shopRoutes = require('E:/books/node/.vscode/routes/shop');
const adminRoutes = require("E:/books/node/.vscode/routes/admin");


// .use method is used for using middleware 
//this bodyparser is used to parse the body
//with this we don't have to use split function 
//extended to false is used to remove the error undefined extended option


app.use(bodyParser.urlencoded({extended:false} ));
app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use((req,res,next)=>{
res.status(404).send('<h1>Page not found</h1>');
});

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'../','views','add-product.html'))
})
//to shorten create server code
//with .listen method we can also remove http import
app.listen(3000,()=>console.log('app is running on port 3000'));
// const server =http.createServer();
// server.listen(3000);




