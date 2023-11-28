<?php 
include("mydb.php");

$username = "battu";
$password = "battu2010";
$hash = password_hash($password, PASSWORD_DEFAULT);
 $sql = "INSERT INTO users (user, password)
            VALUES ('$username','$hash')";
try{
mysqli_query($conn, $sql);
echo "user registered";
}
catch(mysqli_sql_exception){
echo "user not registered";
}
mysqli_close($conn);
?>