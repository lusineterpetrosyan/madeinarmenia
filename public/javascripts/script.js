$(document).ready(function (){

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
	$('#join').click(function(){
		console.log("click works");
		$('#form').animate({'margin-left':'60%'},1000);
		$(this).html("Submit"),addClass('submit');
	});
	$('#close').click(function(){
		$('#form').animate({'margin-left':'-60%'},1000);
		$('#join').html("Join Us");
		$('#join').removeClass('submit');
	});
	$()

});