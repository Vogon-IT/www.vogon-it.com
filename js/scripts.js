$(document).ready(function(){

	$('video').on('mouseover mouseout', function(event) {
		if(event.type === 'mouseover') { 
			$(event.target).attr('controls', 'controls'); 
		} else { 
			$(event.target).removeAttr('controls'); 
		}
	});  

});