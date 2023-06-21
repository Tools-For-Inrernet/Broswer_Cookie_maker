<?php
// Database Configuration
$servername = "localhost";
$database = "DATABASE_NAME";
$username = "USERNAME";
$password = "DATABSEPASSWORD";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
