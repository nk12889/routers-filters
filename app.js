const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({extended:false}))


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errRoutes = require('./routes/404');



app.use(adminRoutes);
app.use(shopRoutes);
app.use(errRoutes);










app.listen(4000,()=>{
    console.log(`Server started at port ${4000}`)
})