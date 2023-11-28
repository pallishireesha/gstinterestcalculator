<?php 

$username = $_POST['username'];
$password = $_POST['password'];

$conn = new mysqli('localhost','root','','test');
if($conn ->connect_error){
    die('connection failed'.$conn ->connect_error);
    }
    else{
        $stmt = $conn->prepare("SELECT * FROM registration WHERE username = ? ");
        $stmt->bind_param('s', $username);
        $stmt-> execute();
        $stmt_result = $stmt->get_result();
        if($stmt_result->num_rows >0)
        {
     $data = $stmt_result-> fetch_assoc();
     if($data['password']===$password){
        include("home.php");
     }
     else{
        echo"Invalid password";
     }
        }
        else{
        echo"Invalid UserName or PassWord.";
        }
    }
?>
