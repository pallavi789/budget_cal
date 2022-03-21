<?php
session_start();
header('location:registration form.php');
$servername="localhost";
$username="root";
$password="";
$dbname="report_mce";

$conn=mysqli_connect($servername,$username,$password,$dbname);

if($conn)
{
    echo "Connection ok";
}
?>