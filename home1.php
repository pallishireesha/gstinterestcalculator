<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTT-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>KRR Tax Management</title>
  </head>
  <body>
    This is login page<br>
    <a href="index.php" >Home</a><br><br><br>
    <form action="home.php" method="post">
    <input type="submit"  name="logout" value="logout" /><br>
    </form><br>
  </body>
</html>
<?php 
echo $_SESSION["username"]."<br>";
echo $_SESSION["password"]."<br>";
if (isset($_POST["logout"])) {
    header("Location: index.php");
   }
?>