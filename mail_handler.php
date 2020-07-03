<link rel="stylesheet" href="php.css" type="text/css">
<?php

		$name=$_POST['name'];
		$email=$_POST['email'];
		$phone=$_POST['phone'];
		$msg= $email;

		$to='siddharthbiju@gmail.com'; // Receiver Email ID, Replace with your email ID
		$subject='New reply from shdigimedia.com';
		$message="Name :".$name."\r\n"."Phone :".$phone."\r\n"."email :".$msg;

		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

		$headers .= 'From: <website@shdigimedia.com>' . "\r\n";

		if(mail($to, $subject, $message, $headers)){
			echo "<p>We will contact you shortly!</p>";
		}
		else{
			echo "<p>Something went wrong!</p>";
		}
	
?>


