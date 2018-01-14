$('.submit-event').on('click', function(){
   var url =  $(this).parent().attr('class');

  var formVal = $('.'+url).serializeArray();
    var data = {
        fullname : formVal[0].value,
        email : formVal[1].value,
        contactno : formVal[2].value,
        college : formVal[3].value,
        college: formVal[4].value,
        course : formVal[5].value
    };


   var ajaxRequest = $.ajax({
        url: "/"+url,
        method: "POST",
        data:data,

    });


    ajaxRequest.done(function(data) {
        $('.close').click();
        alert('Registration was successful');
        $('.'+url).find("input[type=text]").val("");

        // $('.alert').alert()
    });

    ajaxRequest.fail(function(data) {
        console.dir(data);
        alert('Registration was unsuccessful. Try again!');
    });
});


