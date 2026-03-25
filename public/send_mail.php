<?php
function sendContactMailWithPHPMail(array $data):bool|string {

    $to="bienthaibao111@gmail.com";
    $subject =$data['subject']??"Thông tin đăng ký dịch vụ";
    $name = $data['name'] ?? '';
    $email = $data['email'] ?? '';
    $phone = $data['phone'] ?? '';
    $service = $data['service'] ?? '';
    $messageText = $data['message'] ?? '';

    $message = <<<EOD
Họ tên: {$name}
Email: {$email}
Số điện thoại: {$phone}
Dịch vụ đăng ký: {$service}
Lời nhắn kèm theo: {$messageText}
EOD;


    $headers = "From: AnHuyGlobalLink Contact <no-reply@anhuygloballink.com>\r\n";
    $headers .= "Reply-To: {$email}\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $parameters = "-f no-reply@anhuygloballink.com";
    
    if (@mail($to, $subject, $message, $headers, $parameters)) {
        return true;
    } else {
        return "Không gửi được email. Hãy kiểm tra cấu hình máy chủ.";
    }
}