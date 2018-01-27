var express = require('express');
var app     = express();
var bodyParser = require('body-parser');
var GoogleSpreadSheet = require('google-spreadsheet');
var creds = require('./client/secret_client.json');

//*********************************************************************************
// Events docs
//***************************************************************************
var fast18 = new GoogleSpreadSheet('1V43sVSIw02fyEKAVX4k-8ZEdhVQnjCbwkAzzWiUoiFE');
var datahack = new GoogleSpreadSheet('12uoeKxrVWIGNJJVBca9-i8cdNvbVTAmfFIPoPexwU4o');
var quidditch = new GoogleSpreadSheet('1BqA0QemJMzsJ5WJ3OmxIrhWP8gyGoTmdOCar3yXw8_Q');
var simulate = new GoogleSpreadSheet('1eGCTEUuiDQ8R6OAL5J6j1Q6mXw84Jy3Um2w3hH_pNww');
var siliconvalley = new GoogleSpreadSheet('1N-xbj9-oev5uQOdbBt6hOzaL_4JGAJG7UoLnXQn_zpU');
var lazermaze = new GoogleSpreadSheet('1BeUDaPDQRiBHVWvXztYsZeA5lvFmGWB9KXKurkAMcLY');
var botzilla = new GoogleSpreadSheet('1rdnDk19swv6eQWXJvJ1O07IXXRx8NUYhj10T9cRBpH4');
var robosoccer = new GoogleSpreadSheet('1DKo50hJflVvCThr5ct-9AugNDOObXhO_MThA0B-9y2k');
var lfr = new GoogleSpreadSheet('1oKdlSAaQs81VGV4TQo0V7cMnT7Y6wquXFSeimH-ZAW4');
var codesafari = new GoogleSpreadSheet('14q7bRS9YekmDEAWMAtdiQ80rBi5cITrWVWWi8kr3P-4');

var quizzardz = new GoogleSpreadSheet('1m-7zpx2LnkFvuhX8uvO80MSiQgeV_poEpx2mtxl_nCs');
var crackCompany = new GoogleSpreadSheet('1yx9OEU_x8rKLA0RdA1-A8RNk3XPPaKGztTbCceiIWZI');

var mockstock = new GoogleSpreadSheet('1lKiw4BKqp5JJR_uSbs6I13oRbQzVDm2M9YXPmOL9LDI');




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

        res.render('gallery2');
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

app.post('/fast18',function(req,res)
    {

        var data = req.body;

        // Authenticate with the Google Spreadsheets API.
    fast18.useServiceAccountAuth(creds, function (err) {

        // Get all of the rows from the spreadsheet.

        fast18.addRow(1, { Full_Name: data.fullname, Email_Address: data.email ,Contact_No: data.contactno,College: data.college,Year:data.year,Course:data.course}, function(err) {
            if(err) {
                throw err;
            }
            res.redirect('/events');
        });
    });

    }


);

app.post('/datahack',function(req,res)
    {

        var data = req.body;

        // Authenticate with the Google Spreadsheets API.
        datahack.useServiceAccountAuth(creds, function (err) {

            // Get all of the rows from the spreadsheet.

            datahack.addRow(1, { Full_Name: data.fullname, Email_Address: data.email ,Contact_No: data.contactno,College: data.college,Year:data.year,Course:data.course}, function(err) {
                if(err) {
                    throw err;
                }
                res.redirect('/events');
            });
        });

    }


);

app.post('/quidditch',function(req,res)
    {

        var data = req.body;

        // Authenticate with the Google Spreadsheets API.
        quidditch.useServiceAccountAuth(creds, function (err) {

            // Get all of the rows from the spreadsheet.

            quidditch.addRow(1, { Full_Name: data.fullname, Email_Address: data.email ,Contact_No: data.contactno,College: data.college,Year:data.year,Course:data.course}, function(err) {
                if(err) {
                    throw err;
                }
                res.redirect('/events');
            });
        });

    }


);

app.post('/simulate',function(req,res)
    {

        var data = req.body;

        // Authenticate with the Google Spreadsheets API.
        simulate.useServiceAccountAuth(creds, function (err) {

            // Get all of the rows from the spreadsheet.

            simulate.addRow(1, { Full_Name: data.fullname, Email_Address: data.email ,Contact_No: data.contactno,College: data.college,Year:data.year,Course:data.course}, function(err) {
                if(err) {
                    throw err;
                }
                res.redirect('/events');
            });
        });
    }


);

app.post('/siliconvalley',function(req,res)
    {

        var data = req.body;

        // Authenticate with the Google Spreadsheets API.
        siliconvalley.useServiceAccountAuth(creds, function (err) {

            // Get all of the rows from the spreadsheet.

            siliconvalley.addRow(1, { Full_Name: data.fullname, Email_Address: data.email ,Contact_No: data.contactno,College: data.college,Year:data.year,Course:data.course}, function(err) {
                if(err) {
                    throw err;
                }
                res.redirect('/events');
            });
        });
    }


);

app.post('/lasermaze',function(req,res)
    {

        var data = req.body;

        // Authenticate with the Google Spreadsheets API.
        lazermaze.useServiceAccountAuth(creds, function (err) {

            // Get all of the rows from the spreadsheet.

            lazermaze.addRow(1, { Full_Name: data.fullname, Email_Address: data.email ,Contact_No: data.contactno,College: data.college,Year:data.year,Course:data.course}, function(err) {
                if(err) {
                    throw err;
                }
                res.redirect('/events');
            });
        });
    }


);

app.post('/botzilla',function(req,res)
    {

        var data = req.body;

        // Authenticate with the Google Spreadsheets API.
        botzilla.useServiceAccountAuth(creds, function (err) {

            // Get all of the rows from the spreadsheet.

            botzilla.addRow(1, { Full_Name: data.fullname, Email_Address: data.email ,Contact_No: data.contactno,College: data.college,Year:data.year,Course:data.course}, function(err) {
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

app.post('/lfr',function(req,res)
    {

        var data = req.body;

        // Authenticate with the Google Spreadsheets API.
        lfr.useServiceAccountAuth(creds, function (err) {

            // Get all of the rows from the spreadsheet.

            lfr.addRow(1, { Full_Name: data.fullname, Email_Address: data.email ,Contact_No: data.contactno,College: data.college,Year:data.year,Course:data.course}, function(err) {
                if(err) {
                    throw err;
                }
                res.redirect('/events');
            });
        });
    }


);

app.post('/codesafari',function(req,res)
    {

        var data = req.body;

        // Authenticate with the Google Spreadsheets API.
        codesafari.useServiceAccountAuth(creds, function (err) {

            // Get all of the rows from the spreadsheet.

            codesafari.addRow(1, { Full_Name: data.fullname, Email_Address: data.email ,Contact_No: data.contactno,College: data.college,Year:data.year,Course:data.course}, function(err) {
                if(err) {
                    throw err;
                }
                res.redirect('/events');
            });
        });
    }


);

app.post('/quizzardz',function(req,res)
    {

        var data = req.body;

        // Authenticate with the Google Spreadsheets API.
        quizzardz.useServiceAccountAuth(creds, function (err) {

            // Get all of the rows from the spreadsheet.

            quizzardz.addRow(1, { Full_Name: data.fullname, Email_Address: data.email ,Contact_No: data.contactno,College: data.college,Year:data.year,Course:data.course}, function(err) {
                if(err) {
                    throw err;
                }
                res.redirect('/events');
            });
        });
    }


);

app.post('/crackCompany',function(req,res)
    {

        var data = req.body;

        // Authenticate with the Google Spreadsheets API.
        crackCompany.useServiceAccountAuth(creds, function (err) {

            // Get all of the rows from the spreadsheet.

            crackCompany.addRow(1, { Full_Name: data.fullname, Email_Address: data.email ,Contact_No: data.contactno,College: data.college,Year:data.year,Course:data.course}, function(err) {
                if(err) {
                    throw err;
                }
                res.redirect('/events');
            });
        });
    }


);
app.post('/socco',function(req,res)
    {

        var data = req.body;

        // Authenticate with the Google Spreadsheets API.
        socco.useServiceAccountAuth(creds, function (err) {

            // Get all of the rows from the spreadsheet.

            socco.addRow(1, { Full_Name: data.fullname, Email_Address: data.email ,Contact_No: data.contactno,College: data.college,Year:data.year,Course:data.course}, function(err) {
                if(err) {
                    throw err;
                }
                res.redirect('/events');
            });
        });
    }


);

app.post('/creativetalk',function(req,res)
    {

        var data = req.body;

        // Authenticate with the Google Spreadsheets API.
        creativetalk.useServiceAccountAuth(creds, function (err) {

            // Get all of the rows from the spreadsheet.

            creativetalk.addRow(1, { Full_Name: data.fullname, Email_Address: data.email ,Contact_No: data.contactno,College: data.college,Year:data.year,Course:data.course}, function(err) {
                if(err) {
                    throw err;
                }
                res.redirect('/events');
            });
        });
    }


);

app.post('/eureka',function(req,res)
    {

        var data = req.body;

        // Authenticate with the Google Spreadsheets API.
        eureka.useServiceAccountAuth(creds, function (err) {

            // Get all of the rows from the spreadsheet.

            eureka.addRow(1, { Full_Name: data.fullname, Email_Address: data.email ,Contact_No: data.contactno,College: data.college,Year:data.year,Course:data.course}, function(err) {
                if(err) {
                    throw err;
                }
                res.redirect('/events');
            });
        });
    }


);

app.post('/lazermaze',function(req,res)
    {

        var data = req.body;

        // Authenticate with the Google Spreadsheets API.
        lazermaze.useServiceAccountAuth(creds, function (err) {

            // Get all of the rows from the spreadsheet.

            lazermaze.addRow(1, { Full_Name: data.fullname, Email_Address: data.email ,Contact_No: data.contactno,College: data.college,Year:data.year,Course:data.course}, function(err) {
                if(err) {
                    throw err;
                }
                res.redirect('/events');
            });
        });
    }


);

app.post('/bombbarage',function(req,res)
    {

        var data = req.body;

        // Authenticate with the Google Spreadsheets API.
        bombbarage.useServiceAccountAuth(creds, function (err) {

            // Get all of the rows from the spreadsheet.

            bombbarage.addRow(1, { Full_Name: data.fullname, Email_Address: data.email ,Contact_No: data.contactno,College: data.college,Year:data.year,Course:data.course}, function(err) {
                if(err) {
                    throw err;
                }
                res.redirect('/events');
            });
        });
    }


);

app.post('/mockstock',function(req,res)
    {

        var data = req.body;

        // Authenticate with the Google Spreadsheets API.
        mockstock.useServiceAccountAuth(creds, function (err) {

            // Get all of the rows from the spreadsheet.

            mockstock.addRow(1, { Full_Name: data.fullname, Email_Address: data.email ,Contact_No: data.contactno,College: data.college,Year:data.year,Course:data.course}, function(err) {
                if(err) {
                    throw err;
                }
                res.redirect('/events');
            });
        });
    }


);


app.get('/form',function(req,res)
    {
        res.render('form');

    }

);

//***********************





//**************************

app.listen(process.env.PORT||8080,function(req,res)
    {

        console.log('serving starting on port 8080')
    }

);
