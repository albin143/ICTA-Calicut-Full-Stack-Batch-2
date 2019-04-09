const express=require('express');
const exphbs=require('express-handlebars');

var app=express();

app.engine('handlebars',exphbs({defaultLayout:'mainpage'}));
app.set('view engine', 'handlebars');

app.use(express.static('views/static')); 


app.get('/', (req,res)=>{

res.render('index');
} );

app.get('/gallery', (req,res)=>{

    res.render('gallery');
    } );



app.listen(3000);