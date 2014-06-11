$(document).ready(function(){
	var show = false;
	$('#nav_navMenu').hide();
	
	$('#nav_homeButton').click(function(){
		$('body').animate({scrollTop:0}, 'slow')
	}),
	
	$('#nav_navButton').click(function(){
		if(show){
			$('#nav_navMenu').hide(),
			show = false
		}
		else{
			$('#nav_navMenu').show(),
			show = true
		}
		/*function(){$('#nav_navMenu').slideToggle()*/
	}),
	
	/*navMenu buttons*/
	$('#navMenu_home').click(function(){
		$('body').animate({scrollTop:0}, 'slow');
	})
	
	$('#navMenu_aboutme').click(function(){
		$('body').animate({scrollTop:$('#about').position().top}, 'slow');
	})
	
	$('#navMenu_contact').click(function(){
		$('body').animate({scrollTop:$('#contact').position().top}, 'slow');
	})
})