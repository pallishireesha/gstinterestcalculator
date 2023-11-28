<?php 
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
<?php 
$db_server = "localhost";
$db_username = "root";
$db_password = "";
$db_name = "logindb";
$conn = "";
try{
    $conn = mysqli_connect($db_server,$db_username,$db_password,$db_name);
}
catch(mysqli_sql_exception){
    echo "couldnot connect <br>";
}
<?php
if($_SERVER["REUEST_METHOD" == "POST"]){
    $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
    $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);
    $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_SPECIAL_CHARS);
    $mobile = filter_input(INPUT_POST, "mobile", FILTER_SANITIZE_SPECIAL_CHARS);
    $services = filter_input(INPUT_POST, "services", FILTER_SANITIZE_SPECIAL_CHARS);

    if(empty($username)){
        echo "please enter username;";
    }
    elseif (empty($password)) {
        echo "please enter password;";
    } 
    else{
        $hash = password_hash($password, PASSWORD_DEFAULT);
        $sql = "INSERT INTO register (username,password,email,mobile,services )
        VALUES ('$username','$hash','$email','$mobile','$services')";
        mysqli_query($conn, $sql);
    }
}
mysqli_close($conn);
?>