!function ($) {
    $(function(){
    	$(".submit").click(function(){
            console.log("foo");
    		var company = $("input[name='name']").val()
                , email = $("input[name='email']").val()
                , url = $("input[name='url']").val()
                , city = $("input[name='city']").val();
            
            var founders = [];
            $(".founders li").each(function(){
                founders.push($(this).children("h3").html());
            });
                
    		$.when(                                                      
                $.get("/create/"+company+"/"+email+"/"+url+"/"+city+"/", function(data) {

                    })
                )
            .then(function() {                    
            });
    	});


        $(".add_founder").click(function(){
            add_founder();
        }); var add_founder = function(){
                var that = this;
                if ($('.founder_input').val().length>2){
                    $(".founders").append(
                        "<li><h3>"+$('.founder_input').val()+"</h3><button class='remove_founder'>-</button></li>"
                    );
                }
                else{
                    $('.founder_input').attr("placeholder","please add more shit");
                }
                $('.founder_input').val("");
            };

        $(".remove_founder").click(function(){            
            $(this).parent().remove();
        }); 
    });

}(window.jQuery)