<?php
// Din e-postadress dit formuläret ska skickas
$to = "liliya.sayfutdinova1@gmail.com"; // ÄNDRA DENNA till din önskade e-postadress

// Hämtar data från formuläret
$name = $_POST['name'];
$email = $_POST['email'];
$company = $_POST['company'];
$message = $_POST['message'];

// Ämne för e-postmeddelandet
$subject = "Nytt meddelande från SKATEORDIE kontaktformulär";

// Bygga e-postmeddelandets innehåll
$email_content = "Fullständigt namn: $name\n";
$email_content .= "E-postadress: $email\n";
$email_content .= "Företag: $company\n\n";
$email_content .= "Meddelande:\n$message\n";

// E-postheaders
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Skicka e-postmeddelandet
if (mail($to, $subject, $email_content, $headers)) {
    // Vid framgång - omdirigera till tack-sida
    header('Location: thank_you.html');
    exit();
} else {
    // Vid fel - visa felmeddelande
    echo "<h1>Ett fel uppstod</h1>";
    echo "<p>Meddelandet kunde inte skickas. Vänligen försök igen senare.</p>";
    echo '<p><a href="index.html#contact">Gå tillbaka</a></p>';
}
?>
