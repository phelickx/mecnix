<?php
$host= "sql304.epizy.com";
$dbuser = "epiz_28647911";
$pass = "Idu.felix,?";
$db = "epiz_28647911_btrend";
 
// Create connection
$conn = mysqli_connect($host, $dbuser, $pass, $db);
 
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$name = mysqli_real_escape_string($conn, $_REQUEST['name']);
$email = mysqli_real_escape_string($conn, $_REQUEST['email']);
$messages = mysqli_real_escape_string($conn, $_REQUEST['messages']);

$sql = "INSERT INTO messages (name, email, messages) VALUES ('$name', '$email', '$messages')";
if (mysqli_query($conn, $sql)) {
      header("location: index.php");
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
?>