<?php 
include("header.html");
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTT-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>KRR Tax Management</title>
   
  </head>
  <body>
    <section class="container-fluid p-2 w-50 mt-5 text-center bg-dark mb-5">
    <form action="loginvalidate.php" method="post" class="justify-center ">
    <div class="form-floating mb-3">
        <input type="text" name="username" id="username" placeholder="username" class="form-control mt-3 p-3"  />
        <label>username</label>
    </div>
    <div class="form-floating mb-3">
        <input type="password" name="password" id="password" placeholder="password" class="form-control p-3" />
        <label>password</label>
    </div>
    <input type="submit" class="form-control btn btn-danger" name="login" />
    </form>
    </section>
  </body>
</html>
<?php 
include("footer.html");
?>

