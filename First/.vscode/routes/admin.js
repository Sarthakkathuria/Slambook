const express =require('express');
const path =require('path');
const router =express.Router();
//this routes is reached under admin/add-product but we have filtering at express file
router.get('/add-product',(req,res,next)=> {
   
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
     //Allows the request to continue to the next middlewarein line 
     
});
router.post('/add-product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
});

module.exports =router;
