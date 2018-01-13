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
var pullit = new GoogleSpreadSheet('1ChbfyrN_UJF_xXipmVBGm5SrIkWEVi4DO0PNZslzw84');
var lfr = new GoogleSpreadSheet('1ChbfyrN_UJF_xXipmVBGm5SrIkWEVi4DO0PNZslzw84');
var quidditch = new GoogleSpreadSheet('1ChbfyrN_UJF_xXipmVBGm5SrIkWEVi4DO0PNZslzw84');
var crackCompany = new GoogleSpreadSheet('1ChbfyrN_UJF_xXipmVBGm5SrIkWEVi4DO0PNZslzw84');
var quizzard = new GoogleSpreadSheet('1ChbfyrN_UJF_xXipmVBGm5SrIkWEVi4DO0PNZslzw84');
var icart = new GoogleSpreadSheet('1ChbfyrN_UJF_xXipmVBGm5SrIkWEVi4DO0PNZslzw84');
var codesaffari = new GoogleSpreadSheet('1ChbfyrN_UJF_xXipmVBGm5SrIkWEVi4DO0PNZslzw84');

var java = new GoogleSpreadSheet('1ChbfyrN_UJF_xXipmVBGm5SrIkWEVi4DO0PNZslzw84');
var siliconvalley = new GoogleSpreadSheet('1ChbfyrN_UJF_xXipmVBGm5SrIkWEVi4DO0PNZslzw84');
var socco = new GoogleSpreadSheet('1ChbfyrN_UJF_xXipmVBGm5SrIkWEVi4DO0PNZslzw84');
var creativetalk = new GoogleSpreadSheet('1ChbfyrN_UJF_xXipmVBGm5SrIkWEVi4DO0PNZslzw84');
var eureka = new GoogleSpreadSheet('1ChbfyrN_UJF_xXipmVBGm5SrIkWEVi4DO0PNZslzw84');
var lazermaze = new GoogleSpreadSheet('1ChbfyrN_UJF_xXipmVBGm5SrIkWEVi4DO0PNZslzw84');
var bombbarage = new GoogleSpreadSheet('1ChbfyrN_UJF_xXipmVBGm5SrIkWEVi4DO0PNZslzw84');
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

app.post('/roborace',function(req,res)
    {

        var data = req.body;

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

        var data = req.body;

        // Authenticate with the Google Spreadsheets API.
        pullit.useServiceAccountAuth(creds, function (err) {

            // Get all of the rows from the spreadsheet.

            pullit.addRow(1, { Full_Name: data.fullname, Email_Address: data.email ,Contact_No: data.contactno,College: data.college,Year:data.year,Course:data.course}, function(err) {
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

app.post('/quizzard',function(req,res)
    {

        var data = req.body;

        // Authenticate with the Google Spreadsheets API.
        quizzard.useServiceAccountAuth(creds, function (err) {

            // Get all of the rows from the spreadsheet.

            quizzard.addRow(1, { Full_Name: data.fullname, Email_Address: data.email ,Contact_No: data.contactno,College: data.college,Year:data.year,Course:data.course}, function(err) {
                if(err) {
                    throw err;
                }
                res.redirect('/events');
            });
        });
    }


);

app.post('/icart',function(req,res)
    {

        var data = req.body;

        // Authenticate with the Google Spreadsheets API.
        icart.useServiceAccountAuth(creds, function (err) {

            // Get all of the rows from the spreadsheet.

            icart.addRow(1, { Full_Name: data.fullname, Email_Address: data.email ,Contact_No: data.contactno,College: data.college,Year:data.year,Course:data.course}, function(err) {
                if(err) {
                    throw err;
                }
                res.redirect('/events');
            });
        });
    }


);

app.post('/codesaffari',function(req,res)
    {

        var data = req.body;

        // Authenticate with the Google Spreadsheets API.
        codesaffari.useServiceAccountAuth(creds, function (err) {

            // Get all of the rows from the spreadsheet.

            codesaffari.addRow(1, { Full_Name: data.fullname, Email_Address: data.email ,Contact_No: data.contactno,College: data.college,Year:data.year,Course:data.course}, function(err) {
                if(err) {
                    throw err;
                }
                res.redirect('/events');
            });
        });
    }


);

app.post('/java',function(req,res)
    {

        var data = req.body;

        // Authenticate with the Google Spreadsheets API.
        java.useServiceAccountAuth(creds, function (err) {

            // Get all of the rows from the spreadsheet.

            java.addRow(1, { Full_Name: data.fullname, Email_Address: data.email ,Contact_No: data.contactno,College: data.college,Year:data.year,Course:data.course}, function(err) {
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