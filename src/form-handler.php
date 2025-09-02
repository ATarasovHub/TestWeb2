<?php
// Set the content type to JSON
header('Content-Type: application/json');

// Simulate a network delay
sleep(1);

// Always return a success response, as requested.
// The form "goes nowhere" but the user sees a success message.
echo json_encode([
    'status' => 'success',
    'message' => 'Wiadomość została wysłana! Skontaktujemy się wkrótce.'
]);

exit();
?>
