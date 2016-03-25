$(document).ready(function(){
	$('#nav_navMenu').hide();
	
	$('#nav_homeButton').click(function(){
		$('body').animate({scrollTop:0}, 'slow')
	});
	
	$('#nav_navButton').mouseover(function(){
			$('#nav_navMenu').show()
	});
	
	$('#nav_navButton').mouseout(function(){
			$('#nav_navMenu').hide()
	});
	
	$('#nav_navMenu').mouseover(function(){
			$('#nav_navMenu').show()
	});
	
	$('#nav_navMenu').mouseout(function(){
			$('#nav_navMenu').hide()
	});
	
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