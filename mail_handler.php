<link rel="stylesheet" href="php.css" type="text/css">
<?php
	if(isset($_POST['submit'])){
		$name=$_POST['name'];
		$email=$_POST['email'];
		$phone=$_POST['phone'];
		$msg= $email;


		$to='siddharthbiju@gmail.com'; // Receiver Email ID, Replace with your email ID
		$subject='SHdigimedia.com';
		$message="Name :".$name."\n"."Phone :".$phone."\n"."email :".$msg;
		$headers="From: ".$email;

		if(mail($to, $subject, $message, $headers)){
			echo "<p>We will contact you shortly!</p>";
		}
		else{
			echo "<p>Something went wrong!</p>";
		}
	}
?>

