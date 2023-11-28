<?php 
$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$conn = new mysqli('localhost','root','','test');
if($conn ->connect_error){
    die('connection failed'.$conn ->connect_error);
    }
    else{
        $stmt = $conn ->prepare("insert into registration(username,password,email,mobile) 
        values(?,?,?,?)");
        $stmt->bind_param("sssi",$username,$password,$email,$mobile);
        $stmt->execute();
        echo"registered successfully";
        include("home.php");
        $stmt->close();
        $conn->close();
    }
?>
<?php
session_start();
?>
<?php 
$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$conn = new mysqli('localhost','root','','test');
if($conn ->connect_error){
    die('connection failed'.$conn ->connect_error);
    }
    else{
        $stmt = $conn ->prepare("insert into registration(username,password,email,mobile) 
        values(?,?,?,?)");
        $stmt->bind_param("sssi",$username,$password,$email,$mobile);
        $stmt->execute();
        echo"registered successfully";
        include("home.php");
        $stmt->close();
        $conn->close();
    }

if (isset($_POST["login"])) {
    if(!empty($_POST["username"]) && !empty($_POST["password"]))
    {
    $_SESSION["username"] = $_POST["username"];
    $_SESSION["password"] =$_POST["password"];
    header("Location: home.php");
    }
    else{
        echo"missing username or password";
    }
}
?>