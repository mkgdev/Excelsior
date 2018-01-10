var express = require('express');
var app     = express();
var bodyParser = require('body-parser');
var GoogleSpreadSheet = require('google-spreadsheet');
var creds = require('./client/secret_client.json');

//*********************************************************************************
// Events docs
//***************************************************************************
var roborace = new GoogleSpreadSheet('10F7fBLEx8R1SC-vnPwvmoPUzuzgA0aqdKoCEWOs1oJc');
var robosoccer = new GoogleSpreadSheet('1K1mCBqxspSXDrJALEnYQDWnPmVbzAs7talwr2WkNJDs');

var robowar = new GoogleSpreadSheet('1ChbfyrN_UJF_xXipmVBGm5SrIkWEVi4DO0PNZslzw84');
//*********************************************************************************



app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(__dirname+'/public'));


//*************************
// Router configuration
//***********************
app.get('/', function(req,res){
    res.redirect("/index");
});
app.get('/index',function(req,res)
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

        res.render("coming_soon");
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

    res.render("about");
});

//Contact page
app.get('/contact',function(req,res) {

    res.render("contact");
});

//****************
// Registration Routes
//********************

app.post('/roborace',function(req,res)
    {

        var data = req.body;
        console.log(data.contactno);
        // Authenticate with the Google Spreadsheets API.
    roborace.useServiceAccountAuth(creds, function (err) {

        // Get all of the rows from the spreadsheet.

        roborace.addRow(1, { Full_Name: data.fullname, Email_Address: data.email ,Contact_No: data.contactno,College: data.college,Year:data.year,Course:data.course}, function(err) {
            if(err) {
                throw err;
            }
            res.redirect('/events');
        });
    });

    }


);

app.post('/robosoccer',function(req,res)
    {

        var data = req.body;
        console.log(data.contactno);
        // Authenticate with the Google Spreadsheets API.
        robosoccer.useServiceAccountAuth(creds, function (err) {

            // Get all of the rows from the spreadsheet.

            robosoccer.addRow(1, { Full_Name: data.fullname, Email_Address: data.email ,Contact_No: data.contactno,College: data.college,Year:data.year,Course:data.course}, function(err) {
                if(err) {
                    throw err;
                }
                res.redirect('/events');
            });
        });

    }


);

app.post('/robowar',function(req,res)
    {

        var data = req.body;
        console.log(data.contactno);
        // Authenticate with the Google Spreadsheets API.
        robowar.useServiceAccountAuth(creds, function (err) {

            // Get all of the rows from the spreadsheet.

            robowar.addRow(1, { Full_Name: data.fullname, Email_Address: data.email ,Contact_No: data.contactno,College: data.college,Year:data.year,Course:data.course}, function(err) {
                if(err) {
                    throw err;
                }
                res.redirect('/events');
            });
        });

    }


);

app.post('/pullit',function(req,res)
    {

        res.render('register/register1.ejs');
    }


);

app.post('/lfr',function(req,res)
    {

        res.render('register/register1.ejs');
    }


);

app.post('/quidditch',function(req,res)
    {

        res.render('register/register1.ejs');
    }


);

app.post('/crackCompany',function(req,res)
    {

        res.render('register/register1.ejs');
    }


);

app.post('/quizzard',function(req,res)
    {

        res.render('register/register1.ejs');
    }


);

app.post('/icart',function(req,res)
    {

        res.render('register/register1.ejs');
    }


);

app.post('/codesafari',function(req,res)
    {

        res.render('register/register1.ejs');
    }


);

app.post('/java',function(req,res)
    {

        res.render('register/register1.ejs');
    }


);

app.post('/siliconvalley',function(req,res)
    {

        res.render('register/register1.ejs');
    }


);
app.post('/socco',function(req,res)
    {

        res.render('register/register1.ejs');
    }


);

app.post('/creativetalk',function(req,res)
    {

        res.render('register/register1.ejs');
    }


);

app.post('/eureka',function(req,res)
    {

        res.render('register/register1.ejs');
    }


);

app.post('/lazermaze',function(req,res)
    {

        res.render('register/register1.ejs');
    }


);

app.post('/bombbarage',function(req,res)
    {

        res.render('register/register1.ejs');
    }


);

app.post('/mockstock',function(req,res)
    {

        res.render('register/register1.ejs');
    }


);




//***********************





//**************************

app.listen(process.env.PORT||8000,function(req,res)
    {

        console.log('serving starting on port 3000')
    }

);