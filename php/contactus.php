<?php 
	require 'php/PHPMailerAutoload.php';
    
	$ip = getenv('HTTP_CLIENT_IP')?:
	getenv('HTTP_X_FORWARDED_FOR')?:
	getenv('HTTP_X_FORWARDED')?:
	getenv('HTTP_FORWARDED_FOR')?:
	getenv('HTTP_FORWARDED')?:
	getenv('REMOTE_ADDR');
	
	$to = ""; // this is your Email address
	$password = "";
    $from = $_POST['user-emails']; // this is the sender's Email address
    $name = $_POST['user-names'];
    $message = 'Name: ' .$name .  ' Email: '  . $from.  ' Message: '  .$_POST['user-messages']. 'From IP Address:' .$ip;
    $subject = "Email from my portfolio";
    
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