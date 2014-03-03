!function ($) {
    $(function(){
    	$(".create").click(function(){
    		var company = $("input").attr("name"),
    			url = $("input").attr("name")
    		$.when(                                                      
                  $.get("/create/"+company+"/", function(data) {

                    }
                  })
                ).then(function() {                    
                });
    	});
    });

}(window.jQuery)