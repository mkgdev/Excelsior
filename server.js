var express = require('express');
var app     = express();
var bodyParser = require('body-parser');


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(__dirname+'/public'));


//*************************
// Router configuration
//***********************
app.get('/',function(req,res)
    {
        res.render('index');

    }

);

//Events
app.get('/events',function(req,res)
    {

        res.render('events');
    }

);

//sponsors
app.get('/sponsors',function(req,res)
    {

        res.send('Sponsors page')
    }

);


//Team page
app.get('/team',function(req,res)
    {

        res.render('team');
    }

);

//Gallery page

app.get('/gallery',function(req,res)
    {

        res.render('gallery');
    }


);

//About page

app.get('/about',function(req,res) {

    res.send('about page')
});

//Contact page
app.get('/contact',function(req,res) {

    res.send('contact page');
});





//**************************

app.listen(3000,function(req,res)
    {

        console.log('serving starting on port 3000')
    }

);