<!-- <style>
  .echo {
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .link {
    color: white;
    background: red;
    padding: 16px 20px;
    border-radius: 5px;
    text-decoration: none;
    transition: 0.5s
  }
  .link:hover {
    background: green;
  }
</style>
<div class="echo">
  <span>Умничка!</span>
  <a href="index.html" class="link">Перейти назад</a>
</div> -->
<?php

$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$userPhone = $_POST['userPhone'];

// Load Composer's autoloader
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->Charset = 'UTF-8';                      
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = '123@gmail.com';                     // SMTP username
    $mail->Password   = '123';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('123@gmail.com', 'Юрий');
    $mail->addAddress('123@mail.ru');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    = "Имя пользователья ${userName}, его телефон: ${userPhone}. Его почта: ${userEmail};

    if ($mail->send()) {
        echo "ok";
    } else {
        echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
    }
    
} catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}
