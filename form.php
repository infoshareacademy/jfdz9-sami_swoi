<?php

$server = "sql7.freesqldatabase.com";
$user = "sql7253459";
$pword = "PRbmWaLTsE";
$datab = "sql7253459";

$conn = mysqli_connect($server, $user, $pword, $datab);

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$sql = "INSERT INTO newsletter (Name, Email, Message)
VALUES ('$name', '$email', '$message')";
$result = $conn->query($sql);

header("refresh:.5; url=index.html");

?>