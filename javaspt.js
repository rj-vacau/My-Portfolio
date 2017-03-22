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
					document.getElementById('user-names').value='';
					document.getElementById('user-emails').value='';
					document.getElementById('user-messages').value='';
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

$(function () {
	$('#accordion').on('shown.bs.collapse', function (e) {
		var offset = $('.panel.panel-default > .panel-collapse.in').offset();
		if(offset) {
			$('html,body').animate({
				scrollTop: $('.panel-title a').offset().top -70
			}, 600); 
		}
	});
});

$(document).ready(function() { 
	var gotIP = CryptoJS.MD5('GetIP').toString();
	var isTrue = CryptoJS.MD5('true').toString();
	if(localStorage.getItem(gotIP) != isTrue){
		window.smartlook||(function(d) {
			var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
				var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
				c.charset='utf-8';c.src='//rec.smartlook.com/recorder.js';h.appendChild(c);
			})(document);
			smartlook('init', 'ccae83adb6e6d4555bb3e3b0d494b0b03476e404');
	
		var dataString='';
		$.ajax({
			type:"POST",
			url: "php/getvisitorip.php",
			data: dataString ,
			cache:false,
			success: function(data){
			}
		});
		localStorage.setItem(gotIP,isTrue)
		return false;
	}
	}); 		