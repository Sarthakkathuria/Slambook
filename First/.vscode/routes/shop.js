const path =require('path');
const express =require('express');

const router =express('Router');



router.get('/',(req, res, next) => {
    console.log('In another middleware!');
    //we are using this path because it will build path for both linux and html
    res.sendFile(path.join(__dirname,'../','../','views','shop.html'))
});
module.exports = router; 
