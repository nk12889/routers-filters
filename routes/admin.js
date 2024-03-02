const express= require('express');
// const router = require('Router');


const router = express.Router();


router.get('/add-product',(req,res,next)=>{
    console.log(1)
    res.send('<form action="/product" method="POST"><input type="text" name="title" placeholder="Enter Product"><input type="text" name="size"  placeholder="Enter size"><button>Add Product</button></form>')
})

router.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})



module.exports = router;