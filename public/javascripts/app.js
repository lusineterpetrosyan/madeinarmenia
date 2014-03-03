!function ($) {
    $(function(){
    	$("#submit").click(function(){
    		var company = $("input").attr("name")
                , email = $("input").attr("email")
                , url = $("input").attr("url")
    		$.when(                                                      
                  $.get("/create/"+company+"/"+email+"/"+url+"/", function(data) {

                    }
                  })
                ).then(function() {                    
                });
    	});
    });

}(window.jQuery)