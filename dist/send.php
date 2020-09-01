<?php

$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$userPhone = $_POST['userPhone'];

// Load Composer's autoloader
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->Charset = 'UTF-8';                      
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'nneqm388@gmail.com';                     // SMTP username
    $mail->Password   = 'assasin47';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('nneqm388@gmail.com', 'Юрий');
    $mail->addAddress('2091god@mail.ru');     // Add a recipient

    if ( $_FILES['file']['error']==0 ) {
        move_uploaded_file($_FILES['file']['tmp_name'], 'upload/'.$_FILES['file']['name']);
        $mail->addAttachment('upload/'.$_FILES['file']['name']);
    }

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    = 'Имя пользователья: ' .$userName. '<br> Номер телефона: ' .$userPhone. '<br> E-mail адрес: ' .$userEmail;

    if ($mail->send()) {
        echo "ok";
    } else {
        echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
    }
    unlink('upload/'.$_FILES['file']['name']);
    
} 
catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}
