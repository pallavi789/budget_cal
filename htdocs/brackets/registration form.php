<?php
include("login_connection.php");
    ?>
    <html>
<head>
    <title>
   Registration Form 
    </title>
    <link rel="stylesheet" href="sig.css">
    <?php include 'sig.css' ?>
    </head>
    <body>
     <?php
    include 'login_connection.php';
    if(isset($_POST["submit"])){
        $Name=mysqli_real_escape_string($con,$_POST["Name"]);
        $Email Id=mysqli_real_escape_string($con,$_POST["Email Id"]);
        $Password(Min. 6 characters)=mysqli_real_escape_string($con,$_POST["Password(Min. 6 characters)"]);
        $Enter Vlid Phone Number(EX:844844853)=mysqli_real_escape_string($con,$_POST["Enter Vlid Phone Number(EX:844844853)"]);
        $pass=password_hash($Password(Min. 6 characters),PASSWORD_BCRYPT);
        $emailquery="select * from login where email='$email'";
        $query=mysqli_query($con,$emailquery);
        $data=mysqli_query($conn,$query);
        $emailcount=mysqli_num_rows($query);
        $insertquery="insert into login(Name,Email Id,Password,Phone Number) values('$Name','$EmailId','$Password','$PhoneNumber')";
    }
        ?>
    <div class="login-page">
    <div class="form">
        <form action="validation.php" methods="post">
        <input type="text" placeholder="Name" name="name"/>
        <input type="text" placeholder="Email Id" name="email_id"/>
        <input type="text" placeholder="Password(Min. 6 characters)" name="password"/>
        <input type="text" placeholder="Enter Vlid Phone Number(EX:844844853)" name="phone_number"/>
        
        <button type="submit" name="submit">Sign Up</button>
            <p class="message"> Already Registered?<a href="login.html">Log In</a> </p>
        </form>
        </div>
        </div>
    </body>
        
</html>


