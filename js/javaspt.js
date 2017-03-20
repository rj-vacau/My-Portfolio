$(document).ready(function() { 
	var dataString='';
	$.ajax({
		type:"POST",
		//url: "php/getvisitorip.php",
		data: dataString ,
		cache:false,
		success: function(data){
		}
	});
	return false;
}); 

function submitForm(){
	var name=document.getElementById('user-names').value;
	var email=document.getElementById('user-emails').value;
	var messages=document.getElementById('user-messages').value;
	if(name != '' && email != '' && messages != ''){	
		var dataString=name;
		var dataString1=email;
		var dataString2= messages;
		document.getElementById("submit").disabled = true;
		$.ajax({
			type:"POST",
			url: "php/contactus.php",
			data: {'user-names':dataString , 'user-emails':dataString1,'user-messages':dataString2 },
			cache:false,
			success: function(data){
				document.getElementById("submit").disabled = false;
				if(data.toString() != '.$error.'){
					toastr.success('Your message has been successfully sent!');
					$('#contactForm').validator('destroy');
				}
				else{
					toastr.error('Ooops! Looks like there was an error trying to send your message, please try again later!');
				}
			}
		});
	}
	else{
		$('#contactForm').validator('validate');
	}
	return false;
}