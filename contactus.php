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
        <section class="container-fluid bg-dark p-5">
            <div class="row">
                <div class="col-12 col-md-12 col-sm-6 col-lg-6 col-xl-6">
                <form action="connect.php" method="post">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="username"
                      class="form-control"
                      required
                    />
                    <label>username</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="form-control"
                      placeholder="Email"
                      required
                    />
                    <label>Email</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="tel"
                      name="mobile"
                      id="mobile"
                      class="form-control"
                      placeholder="Mobile Number"
                      required
                    />
                    <label>Mobile Number</label>
                  </div>
                  <div class="mb-3">
                    <select class="form-select form-select-lg" name="" id="">
                      <option hidden>Select services</option>
                      <option value="">GST Registration</option>
                      <option value="">GST Interest Calculation</option>
                      <option value="">Appeals</option>
                      <option value="">Monthly Returns</option>
                    </select>
                  </div>
                    <textarea class="form-control mb-3" rows="5"
                      name="message"
                      id="message"
                      placeholder="Message"
                      required></textarea>
                  <div class="mb-3 form-floating">
                    <input type="submit" class="form-control btn btn-danger" />
                  </div>
                </form>
                </div>
                <div class="col-12 col-md-12 col-sm-6 col-lg-6 col-xl-6 bg-light justify-center p-5">
                <h2 class="text-danger">Address</h2>
        <h4>
          Flat.No-100<br />
          Near RTC Bustand<br />
          Shodhan Nagar<br />
          Nellore.<br />
          524003<br />
          Andhrapradesh
</h4>
                </div>
            </div>

        </section>
    </body>
<?php 
include("footer.html");
?>
