<?php
$servername="localhost";
$username="root";
$password="";
$dbname="report_mce";

$conn=mysqli_connect($servername,$username,$password,$dbname);

if($conn)
{
    echo "Connection ok";
}
$Name=$_POST['username'];
$Email Id=$_post['email'];
$sql="INSERT INTO login(Name,Email Id) VALUES('$Name','$Email Id')";
if(!mysqli_query($conn,$sql))
{
    echo "not inserted";
    
}
else
{
    echo "inserted";
}
header("refresh:1; url=lastone.html");
?>