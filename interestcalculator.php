<?php 
include("header.html");
?>

  <!DOCTYPE html>
<!-- Created By CodingLab - www.codinglabweb.com -->
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <title> CSS Vertical Tabs | CodingLab </title>
  </head>
  <body>
    <div class="m-2 p-2">
    <h1>GST Interest Calculator</h1>
      <!-- Nav tabs -->
      <ul class="nav nav-tabs bg-secondary" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="201718" aria-selected="true">Calculator For 2017-18</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="201819" aria-selected="false">Calculator For 2018-19</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="201920" aria-selected="false">Calculator For 2019-20</button>
        </li>
      </ul>
      
      <!-- Tab panes -->
      <div class="tab-content">
        <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab"> <h1>GST Tax Interest Calculator for 2017-18</h1>
<div class="table-responsive">
<table class="table table-bordered">
<thead>
<tr>
<th scope="col">-</th>
<th scope="col">Month</th>
<th scope="col">Due Date(considering Extension If Any)</th>
<th scope="col">Filed On (dd-mm-yyyy)</th>
<th scope="col">No Of Days Delay</th>
<th scope="col">CGST Amount</th>
<th scope="col">CGST Interest @ 18%</th>
<th scope="col">SGST Amount</th>
<th scope="col">SGST Interest @ 18%</th>
<th scope="col">IGST Amount</th>
<th scope="col">IGST Interest @ 18%</th>
<th scope="col">Total Amount</th>
<th scope="col">Total Interest @ 18%</th>
<th scope="col">Related Notification</th>
</tr>
<tr>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
<th>5</th>
<th>6</th>
<th>7</th>
<th>8</th>
<th>9</th>
<th>10</th>
<th>11</th>
<th>12</th>
<th>13</th>
<th>14</th>
</tr>
</thead>
<tbody>
<tr>
<th rowspan="9" scope="row">2<br />0<br />1<br />7<br />-<br />1<br />8</th>
<td>Jul-17</td>
<td>25-08-2017</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" action="" onselect="interestAmount()"/></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>(1) 21/2017 CT-08.08.2017 (2) 24/2017 CT-21.08.2017</td>
</tr>
<tr>
<td>Aug-17</td>
<td>20-09-2017</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>21/2017 CT - 08.08.2017</td>
</tr>
<tr>
<td>Sep-17</td>
<td>20-10-2017</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>35/2017 CT - 15.09.2017</td>
</tr>
<tr>
<td>Oct-17</td>
<td>20-11-2017</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>35/2017 CT - 15.09.2017</td>
</tr>
<tr>
<td>Nov-17</td>
<td>20-12-2017</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>35/2017 CT - 15.09.2017</td>
</tr>
<tr>
<td>Dec-17</td>
<td>22-01-2018</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>(1) 35/2017 CT-15.09.2017 (2)02/2018 CT-20.01.2018</td>
</tr>
<tr>
<td>Jan-18</td>
<td>20-02-2018</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>56/2017 CT-15.11.2017</td>
</tr>
<tr>
<td>Feb-18</td>
<td>20-03-2018</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>56/2017 CT-15.11.2017</td>
</tr>
<tr>
<td>Mar-18</td>
<td>20-04-2018</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>56/2017 CT-15.11.2017</td>
</tr>
<tr>
<th scope="row">&nbsp;</th>
<td colspan="3">
<h4>Total</h4>
</td>
<td>&nbsp;</td>
<td>
<h4 class="ng-binding">0</h4>
</td>
<td>
<h4 class="ng-binding">0</h4>
</td>
<td>
<h4 class="ng-binding">0</h4>
</td>
<td>
<h4 class="ng-binding">0</h4>
</td>
<td>
<h4 class="ng-binding">0</h4>
</td>
<td>
<h4 class="ng-binding">0</h4>
</td>
<td>
<h4><strong class="ng-binding">0</strong></h4>
</td>
<td>
<h4><strong class="ng-binding">0</strong></h4>
</td>
</tr>
</tbody>
</table>
</div> </div>
        <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab"> <h1>GST Tax Interest Calculator for 2018-19</h1>
<div class="table-responsive">
<table class="table table-bordered">
<thead>
<tr>
<th scope="col">Year</th>
<th scope="col">Month</th>
<th scope="col">Due Date(considering Extension If Any)</th>
<th scope="col">Filed On(dd-mm-yyyy)</th>
<th scope="col">No Of Days Delay</th>
<th scope="col">CGST Amount</th>
<th scope="col">CGST Interest @ 18%</th>
<th scope="col">SGST Amount</th>
<th scope="col">SGST Interest @ 18%</th>
<th scope="col">IGST Amount</th>
<th scope="col">IGST Interest @ 18%</th>
<th scope="col">Total Amount</th>
<th scope="col">Total Interest @ 18%</th>
<th scope="col">Related Notification</th>
</tr>
<tr>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
<th>5</th>
<th>6</th>
<th>7</th>
<th>8</th>
<th>9</th>
<th>10</th>
<th>11</th>
<th>12</th>
<th>13</th>
<th>14</th>
</tr>
</thead>
<tbody>
<tr>
<th rowspan="12" scope="row">2<br />0<br />1<br />8<br />-<br />1<br />9</th>
<td>Apr-18</td>
<td>22-05-2018</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>(1)16/2018 CT-23.03.2018 (2)23/2018 CT-18.05.2018</td>
</tr>
<tr>
<td>May-18</td>
<td>20-06-2018</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>16/2018 CT-23.03.2018</td>
</tr>
<tr>
<td>Jun-18</td>
<td>20-07-2018</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>16/2018 CT-23.03.2018</td>
</tr>
<tr>
<td>Jul-18</td>
<td>24-08-2018</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>(1)34/2018 CT-10.08.2018 (2)35/2018 CT-21.08.2018</td>
</tr>
<tr>
<td>Aug-18</td>
<td>20-09-2018</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>34/2018 CT-10.08.2018</td>
</tr>
<tr>
<td>Sep-18</td>
<td>25-10-2018</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>(1)34/2018 CT-10.08.2018 (2)55/2018 CT-21.08.2018</td>
</tr>
<tr>
<td>Oct-18</td>
<td>20-11-2018</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>34/2018 CT-10.08.2018</td>
</tr>
<tr>
<td>Nov-18</td>
<td>20-12-2018</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>34/2018 CT-10.08.2018</td>
</tr>
<tr>
<td>Dec-18</td>
<td>20-01-2019</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>34/2018 CT-10.08.2018</td>
</tr>
<tr>
<td>Jan-19</td>
<td>22-02-2019</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>(1)34/2018 CT-10.08.2018 (2)09/2019 CT-20.02.2019</td>
</tr>
<tr>
<td>Feb-19</td>
<td>20-03-2019</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>34/2018 CT-10.08.2018</td>
</tr>
<tr>
<td>Mar-19</td>
<td>23-04-2019</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>(1)34/2018 CT-10.08.2018 (2)09/2019 CT-22.04.2019</td>
</tr>
<tr>
<th scope="row">&nbsp;</th>
<td colspan="3">
<h4>Total</h4>
</td>
<td>&nbsp;</td>
<td>
<h4 class="ng-binding">0</h4>
</td>
<td>
<h4 class="ng-binding">0</h4>
</td>
<td>
<h4 class="ng-binding">0</h4>
</td>
<td>
<h4 class="ng-binding">0</h4>
</td>
<td>
<h4 class="ng-binding">0</h4>
</td>
<td>
<h4 class="ng-binding">0</h4>
</td>
<td>
<h4><strong class="ng-binding">0</strong></h4>
</td>
<td>
<h4><strong class="ng-binding">0</strong></h4>
</td>
</tr>
</tbody>
</table>
</div> </div>
        <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab"> <h1>GST Tax Interest Calculator for 2019-20</h1>
<div class="table-responsive">
<table class="table table-bordered">
<thead>
<tr>
<th scope="col">Year</th>
<th scope="col">Month</th>
<th scope="col">Due Date(Considering Extensions If Any)</th>
<th scope="col">Filed On(dd-mm-yyyy)</th>
<th scope="col">No Of Days Delay</th>
<th scope="col">CGST Amount</th>
<th scope="col">CGST Interest @ 18%</th>
<th scope="col">SGST Amount</th>
<th scope="col">SGST Interest @ 18%</th>
<th scope="col">IGST Amount</th>
<th scope="col">IGST Interest @ 18%</th>
<th scope="col">Total Amount</th>
<th scope="col">Total Interest @ 18%</th>
<th scope="col">Related Notification</th>
</tr>
<tr>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
<th>5</th>
<th>6</th>
<th>7</th>
<th>8</th>
<th>9</th>
<th>10</th>
<th>11</th>
<th>12</th>
<th>13</th>
<th>14</th>
</tr>
</thead>
<tbody>
<tr>
<th rowspan="12" scope="row">2<br />0<br />1<br />9<br />-<br />2<br />0</th>
<td>Apr-19</td>
<td>20-05-2019</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>13/2019 CT-07.03.2019</td>
</tr>
<tr>
<td>May-19</td>
<td>20-06-2019</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>13/2019 CT-07.03.2019</td>
</tr>
<tr>
<td>Jun-19</td>
<td>20-07-2019</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>13/2019 CT-07.03.2019</td>
</tr>
<tr>
<td>Jul-19</td>
<td>22-08-2019</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>(1)29/2019 CT-28.06.2019 (2)37/2019 CT-21.08.2019</td>
</tr>
<tr>
<td>Aug-19</td>
<td>20-09-2019</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>29/2019 CT-28.06.2019</td>
</tr>
<tr>
<td>Sep-19</td>
<td>20-10-2019</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>29/2019 CT-28.06.2019</td>
</tr>
<tr>
<td>Oct-19</td>
<td>20-11-2019</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>44/2019 CT-09.10.2019</td>
</tr>
<tr>
<td>Nov-19</td>
<td>23-12-2019</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>(1)44/2019 CT-09.10.2019 (2) 73/2019 CT-23.12.2019</td>
</tr>
<tr>
<td>Dec-19</td>
<td>20-01-2020</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>44/2019 CT-09.10.2019</td>
</tr>
<tr>
<td>Jan-20</td>
<td>22-02-2020</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>(1)44/2019 CT-09.10.2019 (2) 07/2020 CT-03.02.2020</td>
</tr>
<tr>
<td>Feb-20</td>
<td>20-03-2020</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>(1)44/2019 CT-09.10.2019 (2) 07/2020 CT-03.02.2020</td>
</tr>
<tr>
<td>Mar20</td>
<td>20-04-2020</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" /></td>
<td class="ng-pristine ng-untouched ng-valid ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" /></td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td class="ng-binding">0</td>
<td>(1)44/2019 CT-09.10.2019 (2) 07/2020 CT-03.02.2020</td>
</tr>
<tr>
<th scope="row">&nbsp;</th>
<td colspan="3">
<h4>Total</h4>
</td>
<td>&nbsp;</td>
<td>
<h4 class="ng-binding">0</h4>
</td>
<td>
<h4 class="ng-binding">0</h4>
</td>
<td>
<h4 class="ng-binding">0</h4>
</td>
<td>
<h4 class="ng-binding">0</h4>
</td>
<td>
<h4 class="ng-binding">0</h4>
</td>
<td>
<h4 class="ng-binding">0</h4>
</td>
<td>
<h4><strong class="ng-binding">0</strong></h4>
</td>
<td>
<h4><strong class="ng-binding">0</strong></h4>
</td>
</tr>
</tbody>
</table>
</div>
 </div>
      </div>
    </div>
   
  </body> 
  <script>
    let interestAmount = () => {
      let username=document.getElementById("username").value;
      var date1 = document.getElementById("duedate").value;
      var date2 = document.getElementById("dateoffiling").value;
      alert("Welcome  " + username+"\nDate of filing  "+date2+"\nDuedate  "+date1);
      var date1=new Date(date1);
      var date2= new Date(date2);
      var tax1 = document.getElementById("igsttax").value;
      var tax2 = document.getElementById("cgsttax").value;
      var tax3 = document.getElementById("sgsttax").value;
      var time_difference = date2.getTime() - date1.getTime(); 
      var delaydays = time_difference / (1000 * 60 * 60 * 24); 
      if(delaydays>0){
          var interest1=(delaydays/365)*(18/100)*tax1;
          var interest2=(delaydays/365)*(18/100)*tax2;
          var interest3=(delaydays/365)*(18/100)*tax3;
          alert("Delaydays  " + delaydays+"\n\nIGST Interest Amount is  " +interest1.toFixed(2)+  "\nCGST Interest Amount is  " +interest2.toFixed(2)+  "\nSGST Interest Amount is  " +interest3.toFixed(2));
      }
      else{
          //alert("Do not have any interest to Pay ");
          document.getElementById("result").innerHTML="Do not have any interest to Pay ";
      }
    }
  </script>
 </html>
 <?php 
include("footer.html");
?>

