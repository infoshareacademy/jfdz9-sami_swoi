<?php

$server = "sql7.freesqldatabase.com";
$user = "sql7253459";
$pword = "p3lz3bub";
$datab = "sql7253459";

$conn = mysqli_connect($server, $user, $pword, $datab);

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$sql = "INSERT INTO newslet (Name, Email, Message)
VALUES ('$name', '$email', '$message')";
$result = $conn->query($sql);

