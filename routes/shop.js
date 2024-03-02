const express= require('express');
// const router = require('Router');


const router = express.Router();


router.get('/',(req,res,next)=>{
res.send('<h1>Welcome to express js</h1>')
})



module.exports = router;