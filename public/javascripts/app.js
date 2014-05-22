var app = app || {};

app.Home = Backbone.View.extend({
    el: $('body'), 
    events: {
        'click .moreInfo': 'moreInfo'            
      , 'click .action_grid': 'displayGrid'
      , 'click .action_list': 'displayList'      

    },
    initialize: function(){
        _.bindAll(this, 'render', 'moreInfo');
        this.render();
    },    
    render: function(){
             
    }, displayGrid: function(e){
        $("article ul").addClass("grid").removeClass("list");

        this.$(".welcomeTextWrap nav button").removeClass("active");
        $(e.currentTarget).addClass("active");

    }, displayList: function(e){
        $("article ul").addClass("list").removeClass("grid");

        this.$(".welcomeTextWrap nav button").removeClass("active");
        $(e.currentTarget).addClass("active");

    }, moreInfo: function(e){        
        if($(e.currentTarget).hasClass("open")){
            $(e.currentTarget).html("Cose").removeClass("open").addClass("close"); 
            this.$(".welcomeText").fadeOut(1000);        
            this.$('.moreInfoText').animate({'margin-left': '0%'}, 1000, function(){});
        }
        else{
            $(e.currentTarget).html("More Info").removeClass("close").addClass("open");
            this.$('.moreInfoText').animate({'margin-left': '-60%'}, 1000, function(){});
            this.$(".welcomeText").fadeIn(1000);            
        }

    }

});

new app.Home();


