var app = app || {};

app.Home = Backbone.View.extend({
    el: $('body'), 
    events: {
        'click .moreInfo': 'moreInfo'            
       , 'click .moreClose': 'moreInfo'            
      , 'click .action_grid': 'displayGrid'
      , 'click .action_list': 'displayList'      

    },
    initialize: function(){
        _.bindAll(this, 'render', 'moreInfo');
        this.render();
    },    
    render: function(){
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) 
        if(w <= 830){
          $('.moreInfoText').css('margin-left', '-100%')
        }
    }, 
    displayGrid: function(e){
        $("article ul.startups").addClass("grid").removeClass("list");

        this.$(".welcomeTextWrap nav button").removeClass("active");
        $(e.currentTarget).addClass("active");

    }, 
    displayList: function(e){
        $("article ul.startups").addClass("list").removeClass("grid");

        this.$(".welcomeTextWrap nav button").removeClass("active");
        $(e.currentTarget).addClass("active");

    },
    moreInfo: function(e){  
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
                  
        if($(e.currentTarget).hasClass("open")){
            $(e.currentTarget).removeClass("open")

            if(w>830) {
                $(e.currentTarget).html("Close").addClass("close"); 
            }else{
                $(e.currentTarget).addClass('none');
                $('.moreInfoText').append('<div class="moreClose close"></div>');
            }
            this.$(".welcomeText").fadeOut(1000);        
            this.$('.moreInfoText').animate({'margin-left': '0%'}, 1000, function(){});
        }
        else{
            
            if(w <= 830){
                this.$('.moreInfoText').animate({'margin-left': '-100%'}, 1000, function(){});
                
            }else{
                $(e.currentTarget).html("More Info").removeClass("close").addClass("open");
                this.$('.moreInfoText').animate({'margin-left': '-60%'}, 1000, function(){});
            }
            this.$(".welcomeText").fadeIn(1000);            
        }

    }

});

new app.Home();


