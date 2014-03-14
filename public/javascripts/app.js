var submit = false;
$(document).ready(function(){
    
    $('.list').click(function(e){
        e.preventDefault();     
        console.log('class listView added');
        $('li').removeClass('gridView');
        $('li').addClass('listView');
    });
    $('.grid').click(function(){
        $('li').removeClass('listView');
        $('li').addClass('gridView');
    });

    $('.join').click(function(){
        $('#form')
            .animate({'margin-left':'60%'},1000, function(){
                submit = true;
                console.log("open",submit)
            });
        $(this)
            .html("Submit");
        
    }); //join click

    $('.close').click(function(){
        submit = false;
        console.log("close",submit)
        $('#form')
            .animate({'margin-left':'-60%'},1000);
        $('.submit')
            .html("Join Us");
        return false;
    });

    if(submit==true){
        console.log("1",submit);
        
        $(".add_founder").click(function(){
            if ($('.founder_input').val().length>2){
                $(".founders").append(
                    "<li><h3>"+$('.founder_input').val()+"</h3><button class='remove_founder'>-</button></li>"
                );
            }
            else{
                $('.founder_input').attr("placeholder","please add more shit");
            }
            $('.founder_input').val("");            
            $(".remove_founder").click(function(){              
                $(this).parent().remove();
            });
        });

        $(".submit").click(function(){
            console.log("2",submit);
            var title = $("input[name='cName']").val()
                , email = $("input[name='email']").val()
                , url = $("input[name='url']").val()
                , city = $("input[name='city']").val();
                
            var founders = [];
            $(".founders li").each(function(){
                founders.push($(this).children("h3").html());
            });
            if((title.length>3)&&(email.length>3)&&(url.length>3)&&(city.length>3)){
                $.when(                                                      
                    $.post("/create",
                        {
                            "title":title,
                            "city":city,
                            "email":email,
                            "url":url,
                            "founders":founders
                        },  function(data) {
                            console.log(data)
                     })
                    )
                .then(function() {
                    console.log("3",submit);
                    $('#form')
                        .html("Thanks FOr submitting")
                        .delay(2000)
                        .animate({'margin-left':'-60%'},1000);
                    $('.submit').html("Join Us");

                    submit = false;     
                    console.log("4",submit);
                });
            }else{
                submit=false;
                alert("please complete the form")
            }    
        });
    }

});

