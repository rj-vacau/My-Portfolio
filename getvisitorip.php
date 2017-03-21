<?php 
	require 'PHPMailerAutoload.php';
    
	$ip = getenv('HTTP_CLIENT_IP')?:
	getenv('HTTP_X_FORWARDED_FOR')?:
	getenv('HTTP_X_FORWARDED')?:
	getenv('HTTP_FORWARDED_FOR')?:
	getenv('HTTP_FORWARDED')?:
	getenv('REMOTE_ADDR');
	
	$details = file_get_contents('http://freegeoip.net/json/'.$_SERVER['REMOTE_ADDR']);
	 
	$to = "";
	$password = "";
    $message = 'From IP Address:' .$ip. 'Additionad Details:' .$details;
    $subject = "Email from my portfolio, someone visited your website!";
    
	$mail = new PHPMailer;
	$mail->isSMTP();
	$mail->Host = 'smtp.gmail.com';
	$mail->Port = 587;
	$mail->SMTPSecure = 'tls';
	$mail->SMTPAuth = true;
	$mail->Username = $to;
	$mail->Password = $password;
	
	// Email Sending Details
	$mail->addAddress($to);
	$mail->Subject = $subject;
	$mail->msgHTML($message);//user's message
	
	// Success or Failure
	if (!$mail->send()) {
		$error = "Mailer Error: " . $mail->ErrorInfo;
		echo '.$error.';
	}
	else {
		echo 'Message sent!';
	}
?>