<?php 

if (isset($_POST["name"]) && isset($_POST["email"])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = "hellojacobmartinez@gmail.com";

    $email_subject =  "New Form Submission";

    $email_body = "User Name: $name.\n".
                  "User Email: $email.\n".
                  "User Message: $message.\n";

    $to = "hellojacobmartinez@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-to: $email \r\n";
    
    mail($to,$email_subject,$email_body);

    header("Location: contact.html");
    
}
    ?>