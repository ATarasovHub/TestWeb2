<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars(trim($_POST["name"]));
    $email   = htmlspecialchars(trim($_POST["email"]));
    $subject = htmlspecialchars(trim($_POST["subject"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    $to = "kontakt@slowotok.pl"; // ← зміни на свій email
    $headers = "From: $name <$email>\r\nReply-To: $email\r\nContent-type: text/plain; charset=utf-8\r\n";
    $fullMessage = "Imię i nazwisko: $name\nEmail: $email\nTemat: $subject\n\nWiadomość:\n$message";

    if (mail($to, $subject, $fullMessage, $headers)) {
        header("Location: index.html?success=1");
    } else {
        header("Location: index.html?success=0");
    }
    exit();
}
?>
