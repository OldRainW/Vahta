<?php

use PHPMailer\PHPMailer\PHPMailer;

require './phpmailer/PHPMailer.php';
require './phpmailer/SMTP.php';
require './phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];

$title;
$body;

if ($email == "") {
    $title = "Сервис Вахта заказ звонка";
    $body = "
            <h2>Заказ звонка</h2>
            <b>Имя:</b> $name<br>
            <b>Номер телефона:</b> $phone<br><br>";
} else if ($name != "" && $email != "" && $phone != "") {
    $title = "Сервис Вахта заказ консультации";
    $body = "
            <h2>Заказ консультации</h2>
            <b>Имя:</b> $name<br>
            <b>Почта:</b> $email<br>
            <b>Номер телефона:</b> $phone<br><br>";
} else if ($email != "") {
    $title = "Сервис Вахта заказ презентации";
    $body = "
            <h2>Заказ презентации</h2>
            <b>Почта:</b> $email<br>";
}

// Настройки PHPMailer
$mail = new PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'service.vahta'; // Логин на почте
    $mail->Password   = 'Af0PEjcrbKqPPLYZDBFs'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('service.vahta@mail.ru', 'Сервис вахта'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('sergo.ivanow99@mail.ru');

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    // Проверяем отправленность сообщения
    if ($mail->send()) {
        $result = "success";
    } else {
        $result = "error";
    }
} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
