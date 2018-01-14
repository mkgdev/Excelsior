var express = require('express');
var app     = express();
var bodyParser = require('body-parser');
var GoogleSpreadSheet = require('google-spreadsheet');
var creds = require('./client/secret_client.json');

//*********************************************************************************
// Events docs
//***************************************************************************
var fast18 = new GoogleSpreadSheet('10F7fBLEx8R1SC-vnPwvmoPUzuzgA0aqdKoCEWOs1oJc');
var datahack = new GoogleSpreadSheet('1K1mCBqxspSXDrJALEnYQDWnPmVbzAs7talwr2WkNJDs');
var quidditch = new GoogleSpreadSheet('1ChbfyrN_UJF_xXipmVBGm5SrIkWEVi4DO0PNZslzw84');
var simulate = new GoogleSpreadSheet('1ChbfyrN_UJF_xXipmVBGm5SrIkWEVi4DO0PNZslzw84');
var siliconvalley = new GoogleSpreadSheet('1ChbfyrN_UJF_xXipmVBGm5SrIkWEVi4DO0PNZslzw84');
var lazermaze = new GoogleSpreadSheet('1ChbfyrN_UJF_xXipmVBGm5SrIkWEVi4DO0PNZslzw84');
var botzilla = new GoogleSpreadSheet('1ChbfyrN_UJF_xXipmVBGm5SrIkWEVi4DO0PNZslzw84');
var robosoccer = new GoogleSpreadSheet('1ChbfyrN_UJF_xXipmVBGm5SrIkWEVi4DO0PNZslzw84');
var lfr = new GoogleSpreadSheet('1ChbfyrN_UJF_xXipmVBGm5SrIkWEVi4DO0PNZslzw84');
var codesafari = new GoogleSpreadSheet('1ChbfyrN_UJF_xXipmVBGm5SrIkWEVi4DO0PNZslzw84');

var quizzardz = new GoogleSpreadSheet('1ChbfyrN_UJF_xXipmVBGm5SrIkWEVi4DO0PNZslzw84');
var crackCompany = new GoogleSpreadSheet('1ChbfyrN_UJF_xXipmVBGm5SrIkWEVi4DO0PNZslzw84');

var mockstock = new GoogleSpreadSheet('1ChbfyrN_UJF_xXipmVBGm5SrIkWEVi4DO0PNZslzw84');




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




//***********************





//**************************

app.listen(process.env.PORT||8000,function(req,res)
    {

        console.log('serving starting on port 3000')
    }

);