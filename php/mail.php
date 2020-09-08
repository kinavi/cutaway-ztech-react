<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$comment = $_POST['user_comment'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'mail.hosting.reg.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'web@disin-tech.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '4E3e0T9s'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('web@disin-tech.com'); // от кого будет уходить письмо?
$mail->addAddress('order@disin-tech.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта disin-tech.com';
$mail->Body    = 'Пользователь: ' .$name . ' оставил заявку. <br> Его телефон: ' .$phone. '<br>Почта этого пользователя: ' .$email.'<br> Сообщение: '.$comment;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: /');
}
?>