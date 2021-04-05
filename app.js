
const express=require("express");
const app=express();
const path=require("path");
const bodyparser=require("body-parser");
// express stff
app.use('/static',express.static('static'));
app.use(express.urlencoded());

// pug stuff

app.set('view engine','pug');
app.set('views', path.join(__dirname,'views'));

// endpoints stuff
app.get('/',(req,res)=>{
     res.status(200).render('index.pug');
})

// start the server
// const port=process.env.PORT ||3000;
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`server running at:${port}`);
})