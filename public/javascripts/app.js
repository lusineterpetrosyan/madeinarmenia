var app = app || {};

app.Home = Backbone.View.extend({
    el: $('body'), 
    events: {
        'click .join': 'openForm'
      //,'click .submit': 'submitForm'
      , 'click .close': 'closeForm'
      //, 'submit form': "fileUpload"
      //, 'click .removeImage': "removeImage"
      //, 'click .add_founder': 'add_founder'
    },
    initialize: function(){
        _.bindAll(this, 'render', 'openForm',/*'submitForm'*/'closeForm');
        this.render();
    },    
    render: function(){
             
    },closeForm: function(e){                      
      this.$('#form')
        .animate({'margin-left':'-60%'},1000); 
        $(".join").html("More");
        $(".span").removeClass("hide");
      // this.$(".submit")
      //   .removeClass("submit")
      //   .addClass("join")            
      //   .html("Join");
    },openForm: function(e){
      console.log("sss");
       this.$('#form').animate({'margin-left':'0%'},1000, function(){
           // submit = true;
            //console.log("open",submit)
            $(".join").html("Apply");
            $(".span").addClass("hide");
        });
        $(e.currentTarget)
            //.removeClass("join")
            //.addClass("submit")
            //.html("Submit");
    }

    // fileUpload : function(e){
                
    //   e.preventDefault();
    //   var formData = new FormData(this.$("form")[0]);
       
    //   $.ajax({
    //       url: 'https://dev-madeinyerevan.lsq.io/file/aws/upload',
    //       type: 'POST',
    //       data: formData,
    //       async: false,
    //       cache: false,
    //       contentType: false,
    //       processData: false,
    //       success: function (returndata) {
    //         console.log("image upload clicked");
    //         var returndata = JSON.parse(returndata);
    //          $("#logos")
    //           .html('<img src="https://dev-madeinyerevan.lsq.io/file/aws/upload/'+returndata.filepath+'" data-filename="'+returndata.filename+'">')
    //           .html('<input type="button" class="removeImage">X</input>');
              
    //       }
    //   });

    // },removeImage: function(e){
    //     e.preventDefault();
    //     $("#logos").empty();
    // },,submitForm: function(e){      
    //     console.log("submit clicked")
    //     console.log("2",submit);
    //     var title = $("input[name='cName']").val()
    //         , email = $("input[name='email']").val()
    //         , url = $("input[name='url']").val()
    //         , city = $("input[name='city']").val()
    //         , logo = ($("#logos img").attr("src"));
    //         $("input[name='cName']").val('');
    //         $("input[name='email']").val('');
    //         $("input[name='url']").val('');
    //         $("input[name='city']").val('');
    //         $("#logos").empty();
            
    //     var founders = [];
    //     this.$(".founders li").each(function(){
    //         founders.push($(this).children("h3").html());
    //     });
    //     if((title.length>3)&&(email.length>3)&&(url.length>3)&&(city.length>3)){
    //         $.when(                                                      
    //             $.post("/create",
    //                 {
    //                     "title":title,
    //                     "city":city,
    //                     "email":email,
    //                     "url":url,
    //                     "founders":founders,
    //                     "logo" : logo
    //                 },  function(data) {
    //                     console.log(data)
    //              })
    //             )
    //         .then(function() {
    //             $(e.currentTarget)
    //                 .removeClass("submit")
    //                 .addClass("join")            
    //                 .html("Join");
    //             $('#form')
    //                 .delay(2000)
    //                 .animate({'margin-left':'-60%'},1000);
    //                 alert("Thanks for submitting")
    //         });

    //     } else {
    //         submit=false;
    //         alert("please complete the form")
    //     } 
    // },    
    // add_founder: function(e){                      
    //   if (this.$('.founder_input').val().length>2){
    //       this.$(".founders").append(
    //           "<li><h3>"+this.$('.founder_input').val()+"</h3><button class='remove_founder'>-</button></li>"
    //       );
    //   }
    //   else{
    //       this.$('.founder_input').attr("placeholder","please add more shit");
    //   }
    //   this.$('.founder_input').val("");            
    //   this.$(".remove_founder").click(function(){              
    //       $(this).parent().remove();
    //   });
    // }

});

new app.Home();


