$('.submit-event').on('click', function(){
   var url =  $(this).parent().attr('class');

  var formVal = $('.'+url).serializeArray();
    var data = {
        fullname : formVal[0].value,
        email : formVal[1].value,
        contactno : formVal[2].value,
        college : formVal[3].value,
        year: formVal[4].value,
        course : formVal[5].value
    };

    if(!(data.fullname && data.email && data.contactno && data.college && data.year && course))
    {
        alert('Registration Unsuccessfull! All fields are mandatory');
    }
    else{
        var ajaxRequest = $.ajax({
            url: "/"+url,
            method: "POST",
            data:data,

        });


        ajaxRequest.done(function(data) {
            $('.close').click();
            alert('Registration was successful');
            $('.'+url).find("input[type=text]").val("");
            $('.'+url).find("input[type=tel]").val("");
            $('.'+url).find("input[type=email]").val("");

            // $('.alert').alert()
        });

        ajaxRequest.fail(function(data) {
            console.dir(data);
            alert('Registration was unsuccessful. Try again!');
        });
    }



});

$('.submit-event-datahack').on('click',function(){
    var url =  $(this).parent().attr('class');
    var formVal = $('.'+url).serializeArray();
    var data = {
        team_name : formVal[0].value,
        team_leader : formVal[1].value,
        member_2 : formVal[2].value,
        email : formVal[3].value,
        contactno : formVal[4].value,
        year_1: formVal[5].value,
        year_2 : formVal[6].value

    };
    if(!(data.team_name && data.team_leader && data.email && data.contactno && data.year_1 ))
    {
        alert("Registration Unsuccessfull! '*' Marked fields are mandatory");
    }
    else {
        var ajaxRequest = $.ajax({
            url: "/" + url,
            method: "POST",
            data: data,
        });

        ajaxRequest.done(function(data) {
            console.log('yo');
            $('.close').click();
            alert('Registration was successful');
            $('.'+url).find("input[type=text]").val("");
            $('.'+url).find("input[type=tel]").val("");
            $('.'+url).find("input[type=email]").val("");

            // $('.alert').alert()
        });

        ajaxRequest.fail(function(data) {
            console.dir(data);
            alert('Registration was unsuccessful. Try again!');
        });

    }


});


