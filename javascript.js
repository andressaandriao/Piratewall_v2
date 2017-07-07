function main(){
	$(".photoPositioning img").mouseover(function(){
		$(this).fadeTo('fast', 0.5);
	});
	$(".photoPositioning img").mouseleave(function(){
		$(this).fadeTo('fast', 1);
	});
	$('#menuBar ul li').mouseover(function (){
		$(this).fadeTo('fast', 0.5);
	});
	$('#menuBar ul li').mouseleave(function (){
		$(this).fadeTo(10, 1);
	});
	$('.opButton').mouseover(function(){
		$(this).fadeTo('fast', 0.5);
	});
	$('.opButton').mouseleave(function(){
		$(this).fadeTo(10, 1);
	});
}

$(document).ready(main);