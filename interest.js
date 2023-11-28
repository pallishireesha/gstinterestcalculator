/*Interest calculation for 2017-18 start*/
let interestAmount = () => {
  var date1 = document.getElementById("duedate").textContent;
  var chunks = date1.split('-');
  var date1 = [chunks[1],chunks[0],chunks[2]].join("-");
  var date2 = document.getElementById("dateoffiling").value;
  var date1=new Date(date1);
  var date2= new Date(date2);
  var time_difference = date2.getTime() - date1.getTime(); 
  var delaydays = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
  document.getElementById("delaydays").innerHTML=delaydays;
  var cgstamount = document.getElementById("cgstamount").value;
  var sgstamount = document.getElementById("cgstamount").value;
  document.getElementById("sgstamount").innerHTML=sgstamount;
  var cgstinterest= (delaydays/365)*(18/100)*cgstamount;
  var cgstinterest = cgstinterest.toFixed(2);
  document.getElementById("cgstinterest").innerHTML = cgstinterest;
  var sgstinterest = cgstinterest;
  document.getElementById("sgstinterest").innerHTML = sgstinterest;

  var igstamount = document.getElementById("igstamount").value;
  var igstinterest = (delaydays/365)*(18/100)*igstamount;
  var igstinterest =igstinterest.toFixed(2);
  document.getElementById("igstinterest").innerHTML = igstinterest;

  var totalamount = Number(cgstamount) + Number(sgstamount) + Number(igstamount);
  var totalamount = totalamount.toFixed(2);
  document.getElementById("totalamount").innerHTML = totalamount;

  var totalinterest = Number(cgstinterest) + Number(sgstinterest) + Number(igstinterest);
  var totalinterest = totalinterest.toFixed(2);
  document.getElementById("totalinterest").innerHTML = totalinterest;

}

let interestAmount1 = () => {
  var datea = document.getElementById("duedate1").textContent;
  var chunks = datea.split('-');
  var datea = [chunks[1],chunks[0],chunks[2]].join("-");
  var dateb = document.getElementById("dateoffiling1").value;
  var datea=new Date(datea);
  var dateb= new Date(dateb);
  var time_difference = dateb.getTime() - datea.getTime(); 
  var delaydays1 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
  document.getElementById("delaydays1").innerHTML=delaydays1;
  var cgstamount1 = document.getElementById("cgstamount1").value;
  var sgstamount1 = document.getElementById("cgstamount1").value;
  document.getElementById("sgstamount1").innerHTML=sgstamount1;
  var cgstinterest1= (delaydays1/365)*(18/100)*cgstamount1;
  var cgstinterest1 = cgstinterest1.toFixed(2);
  document.getElementById("cgstinterest1").innerHTML = cgstinterest1;
  var sgstinterest1 = cgstinterest1;
  document.getElementById("sgstinterest1").innerHTML = sgstinterest1;

  var igstamount1 = document.getElementById("igstamount1").value;
  var igstinterest1 = (delaydays1/365)*(18/100)*igstamount1;
  var igstinterest1 =igstinterest1.toFixed(2);
  document.getElementById("igstinterest1").innerHTML = igstinterest1;

  var totalamount1 = Number(cgstamount1) + Number(sgstamount1) + Number(igstamount1);
  var totalamount1 = totalamount1.toFixed(2);
  document.getElementById("totalamount1").innerHTML = totalamount1;

  var totalinterest1 = Number(cgstinterest1) + Number(sgstinterest1) + Number(igstinterest1);
  var totalinterest1 = totalinterest1.toFixed(2);
  document.getElementById("totalinterest1").innerHTML = totalinterest1;
}

let interestAmountsep17 = () => {
    var datea = document.getElementById("duedatesep17").textContent;
    var chunks = datea.split('-');
    var datea = [chunks[1],chunks[0],chunks[2]].join("-");
    var dateb = document.getElementById("dateoffilingsep17").value;
    var datea=new Date(datea);
    var dateb= new Date(dateb);
    var time_difference = dateb.getTime() - datea.getTime(); 
    var delaydayssep17 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
    document.getElementById("delaydayssep17").innerHTML=delaydayssep17;
    var cgstamountsep17 = document.getElementById("cgstamountsep17").value;
    var sgstamountsep17 = document.getElementById("cgstamountsep17").value;
    document.getElementById("sgstamountsep17").innerHTML=sgstamountsep17;
    var cgstinterestsep17= (delaydayssep17/365)*(18/100)*cgstamountsep17;
    var cgstinterestsep17 = cgstinterestsep17.toFixed(2);
    document.getElementById("cgstinterestsep17").innerHTML = cgstinterestsep17;
    var sgstinterestsep17 = cgstinterestsep17;
    document.getElementById("sgstinterestsep17").innerHTML = sgstinterestsep17;
  
    var igstamountsep17 = document.getElementById("igstamountsep17").value;
    var igstinterestsep17 = (delaydayssep17/365)*(18/100)*igstamountsep17;
    var igstinterestsep17 =igstinterestsep17.toFixed(2);
    document.getElementById("igstinterestsep17").innerHTML = igstinterestsep17;
  
    var totalamountsep17 = Number(cgstamountsep17) + Number(sgstamountsep17) + Number(igstamountsep17);
    var totalamountsep17 = totalamountsep17.toFixed(2);
    document.getElementById("totalamountsep17").innerHTML = totalamountsep17;
  
    var totalinterestsep17 = Number(cgstinterestsep17) + Number(sgstinterestsep17) + Number(igstinterestsep17);
    var totalinterestsep17 = totalinterestsep17.toFixed(2);
    document.getElementById("totalinterestsep17").innerHTML = totalinterestsep17;
  }
  
  let interestAmountoct17 = () => {
    var datea = document.getElementById("duedateoct17").textContent;
    var chunks = datea.split('-');
    var datea = [chunks[1],chunks[0],chunks[2]].join("-");
    var dateb = document.getElementById("dateoffilingoct17").value;
    var datea=new Date(datea);
    var dateb= new Date(dateb);
    var time_difference = dateb.getTime() - datea.getTime(); 
    var delaydaysoct17 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
    document.getElementById("delaydaysoct17").innerHTML=delaydaysoct17;
    var cgstamountoct17= document.getElementById("cgstamountoct17").value;
    var sgstamountoct17 = document.getElementById("cgstamountoct17").value;
    document.getElementById("sgstamountoct17").innerHTML=sgstamountoct17;
    var cgstinterestoct17 = (delaydaysoct17/365)*(18/100)*cgstamountoct17;
    var cgstinterestoct17 = cgstinterestoct17.toFixed(2);
    document.getElementById("cgstinterestoct17").innerHTML = cgstinterestoct17;
    var sgstinterestoct17 = cgstinterestoct17;
    document.getElementById("sgstinterestoct17").innerHTML = sgstinterestoct17;
  
    var igstamountoct17 = document.getElementById("igstamountoct17").value;
    var igstinterestoct17 = (delaydaysoct17/365)*(18/100)*igstamountoct17;
    var igstinterestoct17 =igstinterestoct17.toFixed(2);
    document.getElementById("igstinterestoct17").innerHTML = igstinterestoct17;
  
    var totalamountoct17 = Number(cgstamountoct17) + Number(sgstamountoct17) + Number(igstamountoct17);
    var totalamountoct17 = totalamountoct17.toFixed(2);
    document.getElementById("totalamountoct17").innerHTML = totalamountoct17;
  
    var totalinterestoct17 = Number(cgstinterestoct17) + Number(sgstinterestoct17) + Number(igstinterestoct17);
    var totalinterestoct17 = totalinterestoct17.toFixed(2);
    document.getElementById("totalinterestoct17").innerHTML = totalinterestoct17;
  }

  let interestAmountnov17 = () => {
    var datea = document.getElementById("duedatenov17").textContent;
    var chunks = datea.split('-');
    var datea = [chunks[1],chunks[0],chunks[2]].join("-");
    var dateb = document.getElementById("dateoffilingnov17").value;
    var datea=new Date(datea);
    var dateb= new Date(dateb);
    var time_difference = dateb.getTime() - datea.getTime(); 
    var delaydaysnov17 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
    document.getElementById("delaydaysnov17").innerHTML=delaydaysnov17;
    var cgstamountnov17= document.getElementById("cgstamountnov17").value;
    var sgstamountnov17 = document.getElementById("cgstamountnov17").value;
    document.getElementById("sgstamountnov17").innerHTML=sgstamountnov17;
    var cgstinterestnov17 = (delaydaysnov17/365)*(18/100)*cgstamountnov17;
    var cgstinterestnov17 = cgstinterestnov17.toFixed(2);
    document.getElementById("cgstinterestnov17").innerHTML = cgstinterestnov17;
    var sgstinterestnov17 = cgstinterestnov17;
    document.getElementById("sgstinterestnov17").innerHTML = sgstinterestnov17;
  
    var igstamountnov17 = document.getElementById("igstamountnov17").value;
    var igstinterestnov17 = (delaydaysnov17/365)*(18/100)*igstamountnov17;
    var igstinterestnov17 =igstinterestnov17.toFixed(2);
    document.getElementById("igstinterestnov17").innerHTML = igstinterestnov17;
  
    var totalamountnov17 = Number(cgstamountnov17) + Number(sgstamountnov17) + Number(igstamountnov17);
    var totalamountnov17 = totalamountnov17.toFixed(2);
    document.getElementById("totalamountnov17").innerHTML = totalamountnov17;
  
    var totalinterestnov17 = Number(cgstinterestnov17) + Number(sgstinterestnov17) + Number(igstinterestnov17);
    var totalinterestnov17 = totalinterestnov17.toFixed(2);
    document.getElementById("totalinterestnov17").innerHTML = totalinterestnov17;
  }
  let interestAmountdec17 = () => {
    var datea = document.getElementById("duedatedec17").textContent;
    var chunks = datea.split('-');
    var datea = [chunks[1],chunks[0],chunks[2]].join("-");
    var dateb = document.getElementById("dateoffilingdec17").value;
    var datea=new Date(datea);
    var dateb= new Date(dateb);
    var time_difference = dateb.getTime() - datea.getTime(); 
    var delaydaysdec17 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
    document.getElementById("delaydaysdec17").innerHTML=delaydaysdec17;
    var cgstamountdec17= document.getElementById("cgstamountdec17").value;
    var sgstamountdec17 = document.getElementById("cgstamountdec17").value;
    document.getElementById("sgstamountdec17").innerHTML=sgstamountdec17;
    var cgstinterestdec17 = (delaydaysdec17/365)*(18/100)*cgstamountdec17;
    var cgstinterestdec17 = cgstinterestdec17.toFixed(2);
    document.getElementById("cgstinterestdec17").innerHTML = cgstinterestdec17;
    var sgstinterestdec17 = cgstinterestdec17;
    document.getElementById("sgstinterestdec17").innerHTML = sgstinterestdec17;
  
    var igstamountdec17 = document.getElementById("igstamountdec17").value;
    var igstinterestdec17 = (delaydaysdec17/365)*(18/100)*igstamountdec17;
    var igstinterestdec17 =igstinterestdec17.toFixed(2);
    document.getElementById("igstinterestdec17").innerHTML = igstinterestdec17;
  
    var totalamountdec17 = Number(cgstamountdec17) + Number(sgstamountdec17) + Number(igstamountdec17);
    var totalamountdec17 = totalamountdec17.toFixed(2);
    document.getElementById("totalamountdec17").innerHTML = totalamountdec17;
  
    var totalinterestdec17 = Number(cgstinterestdec17) + Number(sgstinterestdec17) + Number(igstinterestdec17);
    var totalinterestdec17 = totalinterestdec17.toFixed(2);
    document.getElementById("totalinterestdec17").innerHTML = totalinterestdec17;
  }

  let interestAmountjan18 = () => {
    var datea = document.getElementById("duedatejan18").textContent;
    var chunks = datea.split('-');
    var datea = [chunks[1],chunks[0],chunks[2]].join("-");
    var dateb = document.getElementById("dateoffilingjan18").value;
    var datea=new Date(datea);
    var dateb= new Date(dateb);
    var time_difference = dateb.getTime() - datea.getTime(); 
    var delaydaysjan18 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
    document.getElementById("delaydaysjan18").innerHTML=delaydaysjan18;
    var cgstamountjan18= document.getElementById("cgstamountjan18").value;
    var sgstamountjan18 = document.getElementById("cgstamountjan18").value;
    document.getElementById("sgstamountjan18").innerHTML=sgstamountjan18;
    var cgstinterestjan18 = (delaydaysjan18/365)*(18/100)*cgstamountjan18;
    var cgstinterestjan18 = cgstinterestjan18.toFixed(2);
    document.getElementById("cgstinterestjan18").innerHTML = cgstinterestjan18;
    var sgstinterestjan18 = cgstinterestjan18;
    document.getElementById("sgstinterestjan18").innerHTML = sgstinterestjan18;
  
    var igstamountjan18 = document.getElementById("igstamountjan18").value;
    var igstinterestjan18 = (delaydaysjan18/365)*(18/100)*igstamountjan18;
    var igstinterestjan18 =igstinterestjan18.toFixed(2);
    document.getElementById("igstinterestjan18").innerHTML = igstinterestjan18;
  
    var totalamountjan18 = Number(cgstamountjan18) + Number(sgstamountjan18) + Number(igstamountjan18);
    var totalamountjan18 = totalamountjan18.toFixed(2);
    document.getElementById("totalamountjan18").innerHTML = totalamountjan18;
  
    var totalinterestjan18 = Number(cgstinterestjan18) + Number(sgstinterestjan18) + Number(igstinterestjan18);
    var totalinterestjan18 = totalinterestjan18.toFixed(2);
    document.getElementById("totalinterestjan18").innerHTML = totalinterestjan18;
  }

  let interestAmountfeb18 = () => {
    var datea = document.getElementById("duedatefeb18").textContent;
    var chunks = datea.split('-');
    var datea = [chunks[1],chunks[0],chunks[2]].join("-");
    var dateb = document.getElementById("dateoffilingfeb18").value;
    var datea=new Date(datea);
    var dateb= new Date(dateb);
    var time_difference = dateb.getTime() - datea.getTime(); 
    var delaydaysfeb18 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
    document.getElementById("delaydaysfeb18").innerHTML=delaydaysfeb18;
    var cgstamountfeb18= document.getElementById("cgstamountfeb18").value;
    var sgstamountfeb18 = document.getElementById("cgstamountfeb18").value;
    document.getElementById("sgstamountfeb18").innerHTML=sgstamountfeb18;
    var cgstinterestfeb18 = (delaydaysfeb18/365)*(18/100)*cgstamountfeb18;
    var cgstinterestfeb18 = cgstinterestfeb18.toFixed(2);
    document.getElementById("cgstinterestfeb18").innerHTML = cgstinterestfeb18;
    var sgstinterestfeb18 = cgstinterestfeb18;
    document.getElementById("sgstinterestfeb18").innerHTML = sgstinterestfeb18;
  
    var igstamountfeb18 = document.getElementById("igstamountfeb18").value;
    var igstinterestfeb18 = (delaydaysfeb18/365)*(18/100)*igstamountfeb18;
    var igstinterestfeb18 =igstinterestfeb18.toFixed(2);
    document.getElementById("igstinterestfeb18").innerHTML = igstinterestfeb18;
  
    var totalamountfeb18 = Number(cgstamountfeb18) + Number(sgstamountfeb18) + Number(igstamountfeb18);
    var totalamountfeb18 = totalamountfeb18.toFixed(2);
    document.getElementById("totalamountfeb18").innerHTML = totalamountfeb18;
  
    var totalinterestfeb18 = Number(cgstinterestfeb18) + Number(sgstinterestfeb18) + Number(igstinterestfeb18);
    var totalinterestfeb18 = totalinterestfeb18.toFixed(2);
    document.getElementById("totalinterestfeb18").innerHTML = totalinterestfeb18;
  }

  let interestAmountmarch18 = () => {
    var datea = document.getElementById("duedatemarch18").textContent;
    var chunks = datea.split('-');
    var datea = [chunks[1],chunks[0],chunks[2]].join("-");
    var dateb = document.getElementById("dateoffilingmarch18").value;
    var datea=new Date(datea);
    var dateb= new Date(dateb);
    var time_difference = dateb.getTime() - datea.getTime(); 
    var delaydaysmarch18 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
    document.getElementById("delaydaysmarch18").innerHTML=delaydaysmarch18;
    var cgstamountmarch18= document.getElementById("cgstamountmarch18").value;
    var sgstamountmarch18 = document.getElementById("cgstamountmarch18").value;
    document.getElementById("sgstamountmarch18").innerHTML=sgstamountmarch18;
    var cgstinterestmarch18 = (delaydaysmarch18/365)*(18/100)*cgstamountmarch18;
    var cgstinterestmarch18 = cgstinterestmarch18.toFixed(2);
    document.getElementById("cgstinterestmarch18").innerHTML = cgstinterestmarch18;
    var sgstinterestmarch18 = cgstinterestmarch18;
    document.getElementById("sgstinterestmarch18").innerHTML = sgstinterestmarch18;
  
    var igstamountmarch18 = document.getElementById("igstamountmarch18").value;
    var igstinterestmarch18 = (delaydaysmarch18/365)*(18/100)*igstamountmarch18;
    var igstinterestmarch18 =igstinterestmarch18.toFixed(2);
    document.getElementById("igstinterestmarch18").innerHTML = igstinterestmarch18;
  
    var totalamountmarch18 = Number(cgstamountmarch18) + Number(sgstamountmarch18) + Number(igstamountmarch18);
    var totalamountmarch18 = totalamountmarch18.toFixed(2);
    document.getElementById("totalamountmarch18").innerHTML = totalamountmarch18;
  
    var totalinterestmarch18 = Number(cgstinterestmarch18) + Number(sgstinterestmarch18) + Number(igstinterestmarch18);
    var totalinterestmarch18 = totalinterestmarch18.toFixed(2);
    document.getElementById("totalinterestmarch18").innerHTML = totalinterestmarch18;
  }


var total = () =>{
var cgstamount = document.getElementById("cgstamount").value;
var cgstamount1 = document.getElementById("cgstamount1").value;
var cgstamountsep17 = document.getElementById("cgstamountsep17").value;
var cgstamountoct17 = document.getElementById("cgstamountoct17").value;
var cgstamountnov17 = document.getElementById("cgstamountnov17").value;
var cgstamountdec17 = document.getElementById("cgstamountdec17").value;
var cgstamountjan18 = document.getElementById("cgstamountjan18").value;
var cgstamountfeb18 = document.getElementById("cgstamountfeb18").value;
var cgstamountmarch18 = document.getElementById("cgstamountmarch18").value;
var totalcgstamount = Number(cgstamount)+Number(cgstamount1)+Number(cgstamountsep17)+Number(cgstamountoct17)+Number(cgstamountnov17)+
Number(cgstamountdec17)+Number(cgstamountjan18)+Number(cgstamountfeb18)+Number(cgstamountmarch18);
var totalcgstamount = totalcgstamount.toFixed(2);
document.getElementById("totalcgstamount").innerHTML = totalcgstamount;

var sgstamount = document.getElementById("sgstamount").textContent;
var sgstamount1 = document.getElementById("sgstamount1").textContent;
var sgstamountsep17 = document.getElementById("sgstamountsep17").textContent;
var sgstamountoct17 = document.getElementById("sgstamountoct17").textContent;
var sgstamountnov17 = document.getElementById("sgstamountnov17").textContent;
var sgstamountdec17 = document.getElementById("sgstamountdec17").textContent;
var sgstamountjan18 = document.getElementById("sgstamountjan18").textContent;
var sgstamountfeb18 = document.getElementById("sgstamountfeb18").textContent;
var sgstamountmarch18 = document.getElementById("sgstamountmarch18").textContent;
var totalsgstamount = Number(sgstamount)+Number(sgstamount1)+Number(sgstamountsep17)+Number(sgstamountoct17)+Number(sgstamountnov17)+
Number(sgstamountdec17)+Number(sgstamountjan18)+Number(sgstamountfeb18)+Number(sgstamountmarch18);
var totalsgstamount = totalsgstamount.toFixed(2);
document.getElementById("totalsgstamount").innerHTML = totalsgstamount;

var igstamount = document.getElementById("igstamount").value;
var igstamount1 = document.getElementById("igstamount1").value;
var igstamountsep17 = document.getElementById("igstamountsep17").value;
var igstamountoct17 = document.getElementById("igstamountoct17").value;
var igstamountnov17 = document.getElementById("igstamountnov17").value;
var igstamountdec17 = document.getElementById("igstamountdec17").value;
var igstamountjan18 = document.getElementById("igstamountjan18").value;
var igstamountfeb18 = document.getElementById("igstamountfeb18").value;
var igstamountmarch18 = document.getElementById("igstamountmarch18").value;
var totaligstamount = Number(igstamount)+Number(igstamount1)+Number(igstamountsep17)+Number(igstamountoct17)+Number(igstamountnov17)+
Number(igstamountdec17)+Number(igstamountjan18)+Number(igstamountfeb18)+Number(igstamountmarch18);
var totaligstamount = totaligstamount.toFixed(2);
document.getElementById("totaligstamount").innerHTML = totaligstamount;

var cgstinterest = document.getElementById("cgstinterest").textContent;
var cgstinterest1 = document.getElementById("cgstinterest1").textContent;
var cgstinterestsep17 = document.getElementById("cgstinterestsep17").textContent;
var cgstinterestoct17 = document.getElementById("cgstinterestoct17").textContent;
var cgstinterestnov17 = document.getElementById("cgstinterestnov17").textContent;
var cgstinterestdec17 = document.getElementById("cgstinterestdec17").textContent;
var cgstinterestjan18 = document.getElementById("cgstinterestjan18").textContent;
var cgstinterestfeb18 = document.getElementById("cgstinterestfeb18").textContent;
var cgstinterestmarch18 = document.getElementById("cgstinterestmarch18").textContent;
var totalcgstinterest = Number(cgstinterest)+Number(cgstinterest1)+Number(cgstinterestsep17)+Number(cgstinterestoct17)
+Number(cgstinterestnov17)+Number(cgstinterestdec17)+Number(cgstinterestjan18)+Number(cgstinterestfeb18)+Number(cgstinterestmarch18);
var totalcgstinterest = totalcgstinterest.toFixed(2);
document.getElementById("totalcgstinterest").innerHTML = totalcgstinterest;

var sgstinterest = document.getElementById("sgstinterest").textContent;
var sgstinterest1 = document.getElementById("sgstinterest1").textContent;
var sgstinterestsep17 = document.getElementById("sgstinterestsep17").textContent;
var sgstinterestoct17 = document.getElementById("sgstinterestoct17").textContent;
var sgstinterestnov17 = document.getElementById("sgstinterestnov17").textContent;
var sgstinterestdec17 = document.getElementById("sgstinterestdec17").textContent;
var sgstinterestjan18 = document.getElementById("sgstinterestjan18").textContent;
var sgstinterestfeb18 = document.getElementById("sgstinterestfeb18").textContent;
var sgstinterestmarch18 = document.getElementById("sgstinterestmarch18").textContent;
var totalsgstinterest = Number(sgstinterest)+Number(sgstinterest1)+Number(sgstinterestsep17)+Number(sgstinterestoct17)
+Number(sgstinterestnov17)+Number(sgstinterestdec17)+Number(sgstinterestjan18)+Number(sgstinterestfeb18)+Number(sgstinterestmarch18);
var totalsgstinterest = totalsgstinterest.toFixed(2);
document.getElementById("totalsgstinterest").innerHTML = totalsgstinterest;

var igstinterest = document.getElementById("igstinterest").textContent;
var igstinterest1 = document.getElementById("igstinterest1").textContent;
var igstinterestsep17 = document.getElementById("igstinterestsep17").textContent;
var igstinterestoct17 = document.getElementById("igstinterestoct17").textContent;
var igstinterestnov17 = document.getElementById("igstinterestnov17").textContent;
var igstinterestdec17 = document.getElementById("igstinterestdec17").textContent;
var igstinterestjan18 = document.getElementById("igstinterestjan18").textContent;
var igstinterestfeb18 = document.getElementById("igstinterestfeb18").textContent;
var igstinterestmarch18 = document.getElementById("igstinterestmarch18").textContent;
var totaligstinterest = Number(igstinterest)+Number(igstinterest1)+Number(igstinterestsep17)+Number(igstinterestoct17)
+Number(igstinterestnov17)+Number(igstinterestdec17)+Number(igstinterestjan18)+Number(igstinterestfeb18)+Number(igstinterestmarch18);
var totaligstinterest = totaligstinterest.toFixed(2);
document.getElementById("totaligstinterest").innerHTML = totaligstinterest;

var totalamount = document.getElementById("totalamount").textContent;
var totalamount1 = document.getElementById("totalamount1").textContent;
var totalamountsep17 = document.getElementById("totalamountsep17").textContent;
var totalamountoct17 = document.getElementById("totalamountoct17").textContent;
var totalamountnov17 = document.getElementById("totalamountnov17").textContent;
var totalamountdec17 = document.getElementById("totalamountdec17").textContent;
var totalamountjan18 = document.getElementById("totalamountjan18").textContent;
var totalamountfeb18 = document.getElementById("totalamountfeb18").textContent;
var totalamountmarch18 = document.getElementById("totalamountmarch18").textContent;
var amounttotal = Number(totalamount)+Number(totalamount1)+Number(totalamountsep17)+Number(totalamountoct17)+Number(totalamountnov17)
+Number(totalamountdec17)+Number(totalamountjan18)+Number(totalamountfeb18)+Number(totalamountmarch18);
var amounttotal = amounttotal.toFixed(2);
document.getElementById("amounttotal").innerHTML = amounttotal;

var totalinterest = document.getElementById("totalinterest").textContent;
var totalinterest1 = document.getElementById("totalinterest1").textContent;
var totalinterestsep17 = document.getElementById("totalinterestsep17").textContent;
var totalinterestoct17 = document.getElementById("totalinterestoct17").textContent;
var totalinterestnov17 = document.getElementById("totalinterestnov17").textContent;
var totalinterestdec17 = document.getElementById("totalinterestdec17").textContent;
var totalinterestjan18 = document.getElementById("totalinterestjan18").textContent;
var totalinterestfeb18 = document.getElementById("totalinterestfeb18").textContent;
var totalinterestmarch18 = document.getElementById("totalinterestmarch18").textContent;
var interesttotal = Number(totalinterest)+Number(totalinterest1)+Number(totalinterestsep17)+Number(totalinterestoct17)+Number(totalinterestnov17)
+Number(totalinterestdec17)+Number(totalinterestjan18)+Number(totalinterestfeb18)+Number(totalinterestmarch18);
var interesttotal = interesttotal.toFixed(2);
document.getElementById("interesttotal").innerHTML = interesttotal;

}
/*Interest calculation for 2017-18 end*/

/*Interest calculation for 2018-19 start*/

let interestAmountapr18 = () => {
  var date1 = document.getElementById("duedateapr18").textContent;
  var chunks = date1.split('-');
  var date1 = [chunks[1],chunks[0],chunks[2]].join("-");
  var date2 = document.getElementById("dateoffilingapr18").value;
  var date1=new Date(date1);
  var date2= new Date(date2);
  var time_difference = date2.getTime() - date1.getTime(); 
  var delaydaysapr18 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
  document.getElementById("delaydaysapr18").innerHTML=delaydaysapr18;
  var cgstamountapr18 = document.getElementById("cgstamountapr18").value;
  var sgstamountapr18 = document.getElementById("cgstamountapr18").value;
  document.getElementById("sgstamountapr18").innerHTML=sgstamountapr18;
  var cgstinterestapr18= (delaydaysapr18/365)*(18/100)*cgstamountapr18;
  var cgstinterestapr18 = cgstinterestapr18.toFixed(2);
  document.getElementById("cgstinterestapr18").innerHTML = cgstinterestapr18;
  var sgstinterestapr18 = cgstinterestapr18;
  document.getElementById("sgstinterestapr18").innerHTML = sgstinterestapr18;

  var igstamountapr18 = document.getElementById("igstamountapr18").value;
  var igstinterestapr18 = (delaydaysapr18/365)*(18/100)*igstamountapr18;
  var igstinterestapr18 =igstinterestapr18.toFixed(2);
  document.getElementById("igstinterestapr18").innerHTML = igstinterestapr18;

  var totalamountapr18 = Number(cgstamountapr18) + Number(sgstamountapr18) + Number(igstamountapr18);
  var totalamountapr18 = totalamountapr18.toFixed(2);
  document.getElementById("totalamountapr18").innerHTML = totalamountapr18;

  var totalinterestapr18 = Number(cgstinterestapr18) + Number(sgstinterestapr18) + Number(igstinterestapr18);
  var totalinterestapr18 = totalinterestapr18.toFixed(2);
  document.getElementById("totalinterestapr18").innerHTML = totalinterestapr18;

}

let interestAmountmay18 = () => {
  var date1 = document.getElementById("duedatemay18").textContent;
  var chunks = date1.split('-');
  var date1 = [chunks[1],chunks[0],chunks[2]].join("-");
  var date2 = document.getElementById("dateoffilingmay18").value;
  var date1=new Date(date1);
  var date2= new Date(date2);
  var time_difference = date2.getTime() - date1.getTime(); 
  var delaydaysmay18 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
  document.getElementById("delaydaysmay18").innerHTML=delaydaysmay18;
  var cgstamountmay18 = document.getElementById("cgstamountmay18").value;
  var sgstamountmay18 = document.getElementById("cgstamountmay18").value;
  document.getElementById("sgstamountmay18").innerHTML=sgstamountmay18;
  var cgstinterestmay18= (delaydaysmay18/365)*(18/100)*cgstamountmay18;
  var cgstinterestmay18 = cgstinterestmay18.toFixed(2);
  document.getElementById("cgstinterestmay18").innerHTML = cgstinterestmay18;
  var sgstinterestmay18 = cgstinterestmay18;
  document.getElementById("sgstinterestmay18").innerHTML = sgstinterestmay18;

  var igstamountmay18 = document.getElementById("igstamountmay18").value;
  var igstinterestmay18 = (delaydaysmay18/365)*(18/100)*igstamountmay18;
  var igstinterestmay18 =igstinterestmay18.toFixed(2);
  document.getElementById("igstinterestmay18").innerHTML = igstinterestmay18;

  var totalamountmay18 = Number(cgstamountmay18) + Number(sgstamountmay18) + Number(igstamountmay18);
  var totalamountmay18 = totalamountmay18.toFixed(2);
  document.getElementById("totalamountmay18").innerHTML = totalamountmay18;

  var totalinterestmay18 = Number(cgstinterestmay18) + Number(sgstinterestmay18) + Number(igstinterestmay18);
  var totalinterestmay18 = totalinterestmay18.toFixed(2);
  document.getElementById("totalinterestmay18").innerHTML = totalinterestmay18;

}

let interestAmountjune18 = () => {
  var date1 = document.getElementById("duedatejune18").textContent;
  var chunks = date1.split('-');
  var date1 = [chunks[1],chunks[0],chunks[2]].join("-");
  var date2 = document.getElementById("dateoffilingjune18").value;
  var date1=new Date(date1);
  var date2= new Date(date2);
  var time_difference = date2.getTime() - date1.getTime(); 
  var delaydaysjune18 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
  document.getElementById("delaydaysjune18").innerHTML=delaydaysjune18;
  var cgstamountjune18 = document.getElementById("cgstamountjune18").value;
  var sgstamountjune18 = document.getElementById("cgstamountjune18").value;
  document.getElementById("sgstamountjune18").innerHTML=sgstamountjune18;
  var cgstinterestjune18= (delaydaysjune18/365)*(18/100)*cgstamountjune18;
  var cgstinterestjune18 = cgstinterestjune18.toFixed(2);
  document.getElementById("cgstinterestjune18").innerHTML = cgstinterestjune18;
  var sgstinterestjune18 = cgstinterestjune18;
  document.getElementById("sgstinterestjune18").innerHTML = sgstinterestjune18;

  var igstamountjune18 = document.getElementById("igstamountjune18").value;
  var igstinterestjune18 = (delaydaysjune18/365)*(18/100)*igstamountjune18;
  var igstinterestjune18 =igstinterestjune18.toFixed(2);
  document.getElementById("igstinterestjune18").innerHTML = igstinterestjune18;

  var totalamountjune18 = Number(cgstamountjune18) + Number(sgstamountjune18) + Number(igstamountjune18);
  var totalamountjune18 = totalamountjune18.toFixed(2);
  document.getElementById("totalamountjune18").innerHTML = totalamountjune18;

  var totalinterestjune18 = Number(cgstinterestjune18) + Number(sgstinterestjune18) + Number(igstinterestjune18);
  var totalinterestjune18 = totalinterestjune18.toFixed(2);
  document.getElementById("totalinterestjune18").innerHTML = totalinterestjune18;

}

let interestAmountjuly18 = () => {
  var date1 = document.getElementById("duedatejuly18").textContent;
  var chunks = date1.split('-');
  var date1 = [chunks[1],chunks[0],chunks[2]].join("-");
  var date2 = document.getElementById("dateoffilingjuly18").value;
  var date1=new Date(date1);
  var date2= new Date(date2);
  var time_difference = date2.getTime() - date1.getTime(); 
  var delaydaysjuly18 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
  document.getElementById("delaydaysjuly18").innerHTML=delaydaysjuly18;
  var cgstamountjuly18 = document.getElementById("cgstamountjuly18").value;
  var sgstamountjuly18 = document.getElementById("cgstamountjuly18").value;
  document.getElementById("sgstamountjuly18").innerHTML=sgstamountjuly18;
  var cgstinterestjuly18= (delaydaysjuly18/365)*(18/100)*cgstamountjuly18;
  var cgstinterestjuly18 = cgstinterestjuly18.toFixed(2);
  document.getElementById("cgstinterestjuly18").innerHTML = cgstinterestjuly18;
  var sgstinterestjuly18 = cgstinterestjuly18;
  document.getElementById("sgstinterestjuly18").innerHTML = sgstinterestjuly18;

  var igstamountjuly18 = document.getElementById("igstamountjuly18").value;
  var igstinterestjuly18 = (delaydaysjuly18/365)*(18/100)*igstamountjuly18;
  var igstinterestjuly18 =igstinterestjuly18.toFixed(2);
  document.getElementById("igstinterestjuly18").innerHTML = igstinterestjuly18;

  var totalamountjuly18 = Number(cgstamountjuly18) + Number(sgstamountjuly18) + Number(igstamountjuly18);
  var totalamountjuly18 = totalamountjuly18.toFixed(2);
  document.getElementById("totalamountjuly18").innerHTML = totalamountjuly18;

  var totalinterestjuly18 = Number(cgstinterestjuly18) + Number(sgstinterestjuly18) + Number(igstinterestjuly18);
  var totalinterestjuly18 = totalinterestjuly18.toFixed(2);
  document.getElementById("totalinterestjuly18").innerHTML = totalinterestjuly18;

}

let interestAmountaug18 = () => {
  var date1 = document.getElementById("duedateaug18").textContent;
  var chunks = date1.split('-');
  var date1 = [chunks[1],chunks[0],chunks[2]].join("-");
  var date2 = document.getElementById("dateoffilingaug18").value;
  var date1=new Date(date1);
  var date2= new Date(date2);
  var time_difference = date2.getTime() - date1.getTime(); 
  var delaydaysaug18 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
  document.getElementById("delaydaysaug18").innerHTML=delaydaysaug18;
  var cgstamountaug18 = document.getElementById("cgstamountaug18").value;
  var sgstamountaug18 = document.getElementById("cgstamountaug18").value;
  document.getElementById("sgstamountaug18").innerHTML=sgstamountaug18;
  var cgstinterestaug18= (delaydaysaug18/365)*(18/100)*cgstamountaug18;
  var cgstinterestaug18 = cgstinterestaug18.toFixed(2);
  document.getElementById("cgstinterestaug18").innerHTML = cgstinterestaug18;
  var sgstinterestaug18 = cgstinterestaug18;
  document.getElementById("sgstinterestaug18").innerHTML = sgstinterestaug18;

  var igstamountaug18 = document.getElementById("igstamountaug18").value;
  var igstinterestaug18 = (delaydaysaug18/365)*(18/100)*igstamountaug18;
  var igstinterestaug18 =igstinterestaug18.toFixed(2);
  document.getElementById("igstinterestaug18").innerHTML = igstinterestaug18;

  var totalamountaug18 = Number(cgstamountaug18) + Number(sgstamountaug18) + Number(igstamountaug18);
  var totalamountaug18 = totalamountaug18.toFixed(2);
  document.getElementById("totalamountaug18").innerHTML = totalamountaug18;

  var totalinterestaug18 = Number(cgstinterestaug18) + Number(sgstinterestaug18) + Number(igstinterestaug18);
  var totalinterestaug18 = totalinterestaug18.toFixed(2);
  document.getElementById("totalinterestaug18").innerHTML = totalinterestaug18;

}

let interestAmountsep18 = () => {
  var datea = document.getElementById("duedatesep18").textContent;
  var chunks = datea.split('-');
  var datea = [chunks[1],chunks[0],chunks[2]].join("-");
  var dateb = document.getElementById("dateoffilingsep18").value;
  var datea=new Date(datea);
  var dateb= new Date(dateb);
  var time_difference = dateb.getTime() - datea.getTime(); 
  var delaydayssep18 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
  document.getElementById("delaydayssep18").innerHTML=delaydayssep18;
  var cgstamountsep18 = document.getElementById("cgstamountsep18").value;
  var sgstamountsep18 = document.getElementById("cgstamountsep18").value;
  document.getElementById("sgstamountsep18").innerHTML=sgstamountsep18;
  var cgstinterestsep18= (delaydayssep18/365)*(18/100)*cgstamountsep18;
  var cgstinterestsep18 = cgstinterestsep18.toFixed(2);
  document.getElementById("cgstinterestsep18").innerHTML = cgstinterestsep18;
  var sgstinterestsep18 = cgstinterestsep18;
  document.getElementById("sgstinterestsep18").innerHTML = sgstinterestsep18;

  var igstamountsep18 = document.getElementById("igstamountsep18").value;
  var igstinterestsep18 = (delaydayssep18/365)*(18/100)*igstamountsep18;
  var igstinterestsep18 =igstinterestsep18.toFixed(2);
  document.getElementById("igstinterestsep18").innerHTML = igstinterestsep18;

  var totalamountsep18 = Number(cgstamountsep18) + Number(sgstamountsep18) + Number(igstamountsep18);
  var totalamountsep18 = totalamountsep18.toFixed(2);
  document.getElementById("totalamountsep18").innerHTML = totalamountsep18;

  var totalinterestsep18 = Number(cgstinterestsep18) + Number(sgstinterestsep18) + Number(igstinterestsep18);
  var totalinterestsep18 = totalinterestsep18.toFixed(2);
  document.getElementById("totalinterestsep18").innerHTML = totalinterestsep18;
}

let interestAmountoct18 = () => {
  var datea = document.getElementById("duedateoct18").textContent;
  var chunks = datea.split('-');
  var datea = [chunks[1],chunks[0],chunks[2]].join("-");
  var dateb = document.getElementById("dateoffilingoct18").value;
  var datea=new Date(datea);
  var dateb= new Date(dateb);
  var time_difference = dateb.getTime() - datea.getTime(); 
  var delaydaysoct18 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
  document.getElementById("delaydaysoct18").innerHTML=delaydaysoct18;
  var cgstamountoct18= document.getElementById("cgstamountoct18").value;
  var sgstamountoct18 = document.getElementById("cgstamountoct18").value;
  document.getElementById("sgstamountoct18").innerHTML=sgstamountoct18;
  var cgstinterestoct18 = (delaydaysoct18/365)*(18/100)*cgstamountoct18;
  var cgstinterestoct18 = cgstinterestoct18.toFixed(2);
  document.getElementById("cgstinterestoct18").innerHTML = cgstinterestoct18;
  var sgstinterestoct18 = cgstinterestoct18;
  document.getElementById("sgstinterestoct18").innerHTML = sgstinterestoct18;

  var igstamountoct18 = document.getElementById("igstamountoct18").value;
  var igstinterestoct18 = (delaydaysoct18/365)*(18/100)*igstamountoct18;
  var igstinterestoct18 =igstinterestoct18.toFixed(2);
  document.getElementById("igstinterestoct18").innerHTML = igstinterestoct18;

  var totalamountoct18 = Number(cgstamountoct18) + Number(sgstamountoct18) + Number(igstamountoct18);
  var totalamountoct18 = totalamountoct18.toFixed(2);
  document.getElementById("totalamountoct18").innerHTML = totalamountoct18;

  var totalinterestoct18 = Number(cgstinterestoct18) + Number(sgstinterestoct18) + Number(igstinterestoct18);
  var totalinterestoct18 = totalinterestoct18.toFixed(2);
  document.getElementById("totalinterestoct18").innerHTML = totalinterestoct18;
}

let interestAmountnov18 = () => {
  var datea = document.getElementById("duedatenov18").textContent;
  var chunks = datea.split('-');
  var datea = [chunks[1],chunks[0],chunks[2]].join("-");
  var dateb = document.getElementById("dateoffilingnov18").value;
  var datea=new Date(datea);
  var dateb= new Date(dateb);
  var time_difference = dateb.getTime() - datea.getTime(); 
  var delaydaysnov18 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
  document.getElementById("delaydaysnov18").innerHTML=delaydaysnov18;
  var cgstamountnov18= document.getElementById("cgstamountnov18").value;
  var sgstamountnov18 = document.getElementById("cgstamountnov18").value;
  document.getElementById("sgstamountnov18").innerHTML=sgstamountnov18;
  var cgstinterestnov18 = (delaydaysnov18/365)*(18/100)*cgstamountnov18;
  var cgstinterestnov18 = cgstinterestnov18.toFixed(2);
  document.getElementById("cgstinterestnov18").innerHTML = cgstinterestnov18;
  var sgstinterestnov18 = cgstinterestnov18;
  document.getElementById("sgstinterestnov18").innerHTML = sgstinterestnov18;

  var igstamountnov18 = document.getElementById("igstamountnov18").value;
  var igstinterestnov18 = (delaydaysnov18/365)*(18/100)*igstamountnov18;
  var igstinterestnov18 =igstinterestnov18.toFixed(2);
  document.getElementById("igstinterestnov18").innerHTML = igstinterestnov18;

  var totalamountnov18 = Number(cgstamountnov18) + Number(sgstamountnov18) + Number(igstamountnov18);
  var totalamountnov18 = totalamountnov18.toFixed(2);
  document.getElementById("totalamountnov18").innerHTML = totalamountnov18;

  var totalinterestnov18 = Number(cgstinterestnov18) + Number(sgstinterestnov18) + Number(igstinterestnov18);
  var totalinterestnov18 = totalinterestnov18.toFixed(2);
  document.getElementById("totalinterestnov18").innerHTML = totalinterestnov18;
}
let interestAmountdec18 = () => {
  var datea = document.getElementById("duedatedec18").textContent;
  var chunks = datea.split('-');
  var datea = [chunks[1],chunks[0],chunks[2]].join("-");
  var dateb = document.getElementById("dateoffilingdec18").value;
  var datea=new Date(datea);
  var dateb= new Date(dateb);
  var time_difference = dateb.getTime() - datea.getTime(); 
  var delaydaysdec18 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
  document.getElementById("delaydaysdec18").innerHTML=delaydaysdec18;
  var cgstamountdec18= document.getElementById("cgstamountdec18").value;
  var sgstamountdec18 = document.getElementById("cgstamountdec18").value;
  document.getElementById("sgstamountdec18").innerHTML=sgstamountdec18;
  var cgstinterestdec18 = (delaydaysdec18/365)*(18/100)*cgstamountdec18;
  var cgstinterestdec18 = cgstinterestdec18.toFixed(2);
  document.getElementById("cgstinterestdec18").innerHTML = cgstinterestdec18;
  var sgstinterestdec18 = cgstinterestdec18;
  document.getElementById("sgstinterestdec18").innerHTML = sgstinterestdec18;

  var igstamountdec18 = document.getElementById("igstamountdec18").value;
  var igstinterestdec18 = (delaydaysdec18/365)*(18/100)*igstamountdec18;
  var igstinterestdec18 =igstinterestdec18.toFixed(2);
  document.getElementById("igstinterestdec18").innerHTML = igstinterestdec18;

  var totalamountdec18 = Number(cgstamountdec18) + Number(sgstamountdec18) + Number(igstamountdec18);
  var totalamountdec18 = totalamountdec18.toFixed(2);
  document.getElementById("totalamountdec18").innerHTML = totalamountdec18;

  var totalinterestdec18 = Number(cgstinterestdec18) + Number(sgstinterestdec18) + Number(igstinterestdec18);
  var totalinterestdec18 = totalinterestdec18.toFixed(2);
  document.getElementById("totalinterestdec18").innerHTML = totalinterestdec18;
}

let interestAmountjan19 = () => {
  var datea = document.getElementById("duedatejan19").textContent;
  var chunks = datea.split('-');
  var datea = [chunks[1],chunks[0],chunks[2]].join("-");
  var dateb = document.getElementById("dateoffilingjan19").value;
  var datea=new Date(datea);
  var dateb= new Date(dateb);
  var time_difference = dateb.getTime() - datea.getTime(); 
  var delaydaysjan19 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
  document.getElementById("delaydaysjan19").innerHTML=delaydaysjan19;
  var cgstamountjan19= document.getElementById("cgstamountjan19").value;
  var sgstamountjan19 = document.getElementById("cgstamountjan19").value;
  document.getElementById("sgstamountjan19").innerHTML=sgstamountjan19;
  var cgstinterestjan19 = (delaydaysjan19/365)*(18/100)*cgstamountjan19;
  var cgstinterestjan19 = cgstinterestjan19.toFixed(2);
  document.getElementById("cgstinterestjan19").innerHTML = cgstinterestjan19;
  var sgstinterestjan19 = cgstinterestjan19;
  document.getElementById("sgstinterestjan19").innerHTML = sgstinterestjan19;

  var igstamountjan19 = document.getElementById("igstamountjan19").value;
  var igstinterestjan19 = (delaydaysjan19/365)*(18/100)*igstamountjan19;
  var igstinterestjan19 =igstinterestjan19.toFixed(2);
  document.getElementById("igstinterestjan19").innerHTML = igstinterestjan19;

  var totalamountjan19 = Number(cgstamountjan19) + Number(sgstamountjan19) + Number(igstamountjan19);
  var totalamountjan19 = totalamountjan19.toFixed(2);
  document.getElementById("totalamountjan19").innerHTML = totalamountjan19;

  var totalinterestjan19 = Number(cgstinterestjan19) + Number(sgstinterestjan19) + Number(igstinterestjan19);
  var totalinterestjan19 = totalinterestjan19.toFixed(2);
  document.getElementById("totalinterestjan19").innerHTML = totalinterestjan19;
}

let interestAmountfeb19 = () => {
  var datea = document.getElementById("duedatefeb19").textContent;
  var chunks = datea.split('-');
  var datea = [chunks[1],chunks[0],chunks[2]].join("-");
  var dateb = document.getElementById("dateoffilingfeb19").value;
  var datea=new Date(datea);
  var dateb= new Date(dateb);
  var time_difference = dateb.getTime() - datea.getTime(); 
  var delaydaysfeb19 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
  document.getElementById("delaydaysfeb19").innerHTML=delaydaysfeb19;
  var cgstamountfeb19= document.getElementById("cgstamountfeb19").value;
  var sgstamountfeb19 = document.getElementById("cgstamountfeb19").value;
  document.getElementById("sgstamountfeb19").innerHTML=sgstamountfeb19;
  var cgstinterestfeb19 = (delaydaysfeb19/365)*(18/100)*cgstamountfeb19;
  var cgstinterestfeb19 = cgstinterestfeb19.toFixed(2);
  document.getElementById("cgstinterestfeb19").innerHTML = cgstinterestfeb19;
  var sgstinterestfeb19 = cgstinterestfeb19;
  document.getElementById("sgstinterestfeb19").innerHTML = sgstinterestfeb19;

  var igstamountfeb19 = document.getElementById("igstamountfeb19").value;
  var igstinterestfeb19 = (delaydaysfeb19/365)*(18/100)*igstamountfeb19;
  var igstinterestfeb19 =igstinterestfeb19.toFixed(2);
  document.getElementById("igstinterestfeb19").innerHTML = igstinterestfeb19;

  var totalamountfeb19 = Number(cgstamountfeb19) + Number(sgstamountfeb19) + Number(igstamountfeb19);
  var totalamountfeb19 = totalamountfeb19.toFixed(2);
  document.getElementById("totalamountfeb19").innerHTML = totalamountfeb19;

  var totalinterestfeb19 = Number(cgstinterestfeb19) + Number(sgstinterestfeb19) + Number(igstinterestfeb19);
  var totalinterestfeb19 = totalinterestfeb19.toFixed(2);
  document.getElementById("totalinterestfeb19").innerHTML = totalinterestfeb19;
}

let interestAmountmarch19 = () => {
  var datea = document.getElementById("duedatemarch19").textContent;
  var chunks = datea.split('-');
  var datea = [chunks[1],chunks[0],chunks[2]].join("-");
  var dateb = document.getElementById("dateoffilingmarch19").value;
  var datea=new Date(datea);
  var dateb= new Date(dateb);
  var time_difference = dateb.getTime() - datea.getTime(); 
  var delaydaysmarch19 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
  document.getElementById("delaydaysmarch19").innerHTML=delaydaysmarch19;
  var cgstamountmarch19= document.getElementById("cgstamountmarch19").value;
  var sgstamountmarch19 = document.getElementById("cgstamountmarch19").value;
  document.getElementById("sgstamountmarch19").innerHTML=sgstamountmarch19;
  var cgstinterestmarch19 = (delaydaysmarch19/365)*(18/100)*cgstamountmarch19;
  var cgstinterestmarch19 = cgstinterestmarch19.toFixed(2);
  document.getElementById("cgstinterestmarch19").innerHTML = cgstinterestmarch19;
  var sgstinterestmarch19 = cgstinterestmarch19;
  document.getElementById("sgstinterestmarch19").innerHTML = sgstinterestmarch19;

  var igstamountmarch19 = document.getElementById("igstamountmarch19").value;
  var igstinterestmarch19 = (delaydaysmarch19/365)*(18/100)*igstamountmarch19;
  var igstinterestmarch19 =igstinterestmarch19.toFixed(2);
  document.getElementById("igstinterestmarch19").innerHTML = igstinterestmarch19;

  var totalamountmarch19 = Number(cgstamountmarch19) + Number(sgstamountmarch19) + Number(igstamountmarch19);
  var totalamountmarch19 = totalamountmarch19.toFixed(2);
  document.getElementById("totalamountmarch19").innerHTML = totalamountmarch19;

  var totalinterestmarch19 = Number(cgstinterestmarch19) + Number(sgstinterestmarch19) + Number(igstinterestmarch19);
  var totalinterestmarch19 = totalinterestmarch19.toFixed(2);
  document.getElementById("totalinterestmarch19").innerHTML = totalinterestmarch19;
}


var total1819 = () =>{
  var cgstamountapr18 = document.getElementById("cgstamountapr18").value;
  var cgstamountmay18 = document.getElementById("cgstamountmay18").value;
  var cgstamountjune18 = document.getElementById("cgstamountjune18").value;
  var cgstamountjuly18 = document.getElementById("cgstamountjuly18").value;
  var cgstamountaug18 = document.getElementById("cgstamountaug18").value;
  var cgstamountsep18 = document.getElementById("cgstamountsep18").value;
  var cgstamountoct18 = document.getElementById("cgstamountoct18").value;
  var cgstamountnov18 = document.getElementById("cgstamountnov18").value;
  var cgstamountdec18 = document.getElementById("cgstamountdec18").value;
  var cgstamountjan19 = document.getElementById("cgstamountjan19").value;
  var cgstamountfeb19 = document.getElementById("cgstamountfeb19").value;
  var cgstamountmarch19 = document.getElementById("cgstamountmarch19").value;
  var totalcgstamount1819 = Number(cgstamountapr18)+Number(cgstamountmay18)+Number(cgstamountjune18)+Number(cgstamountjuly18)+Number(cgstamountaug18)
  +Number(cgstamountsep18)+Number(cgstamountoct18)+Number(cgstamountnov18)+Number(cgstamountdec18)+Number(cgstamountjan19)+Number(cgstamountfeb19)+Number(cgstamountmarch19);
  var totalcgstamount1819 = totalcgstamount1819.toFixed(2);
  document.getElementById("totalcgstamount1819").innerHTML = totalcgstamount1819;
  
  var sgstamountapr18 = document.getElementById("sgstamountapr18").textContent;
  var sgstamountmay18 = document.getElementById("sgstamountmay18").textContent;
  var sgstamountjune18 = document.getElementById("sgstamountjune18").textContent;
  var sgstamountjuly18 = document.getElementById("sgstamountjuly18").textContent;
  var sgstamountaug18 = document.getElementById("sgstamountaug18").textContent;
  var sgstamountsep18 = document.getElementById("sgstamountsep18").textContent;
  var sgstamountoct18 = document.getElementById("sgstamountoct18").textContent;
  var sgstamountnov18 = document.getElementById("sgstamountnov18").textContent;
  var sgstamountdec18 = document.getElementById("sgstamountdec18").textContent;
  var sgstamountjan19 = document.getElementById("sgstamountjan19").textContent;
  var sgstamountfeb19 = document.getElementById("sgstamountfeb19").textContent;
  var sgstamountmarch19 = document.getElementById("sgstamountmarch19").textContent;
  var totalsgstamount1819 = Number(sgstamountapr18)+Number(sgstamountmay18)+Number(sgstamountjune18)+Number(sgstamountjuly18)+Number(sgstamountaug18)
  +Number(sgstamountsep18)+Number(sgstamountoct18)+Number(sgstamountnov18)+Number(sgstamountdec18)+Number(sgstamountjan19)+Number(sgstamountfeb19)+Number(sgstamountmarch19);
  var totalsgstamount1819 = totalsgstamount1819.toFixed(2);
  document.getElementById("totalsgstamount1819").innerHTML = totalsgstamount1819;
  
  var igstamountapr18 = document.getElementById("igstamountapr18").value;
  var igstamountmay18 = document.getElementById("igstamountmay18").value;
  var igstamountjune18 = document.getElementById("igstamountjune18").value;
  var igstamountjuly18 = document.getElementById("igstamountjuly18").value;
  var igstamountaug18 = document.getElementById("igstamountaug18").value;
  var igstamountsep18 = document.getElementById("igstamountsep18").value;
  var igstamountoct18 = document.getElementById("igstamountoct18").value;
  var igstamountnov18 = document.getElementById("igstamountnov18").value;
  var igstamountdec18 = document.getElementById("igstamountdec18").value;
  var igstamountjan19 = document.getElementById("igstamountjan19").value;
  var igstamountfeb19 = document.getElementById("igstamountfeb19").value;
  var igstamountmarch19 = document.getElementById("igstamountmarch19").value;
  var totaligstamount1819 = Number(igstamountapr18)+Number(igstamountmay18)+Number(igstamountjune18)+Number(igstamountjuly18)+Number(igstamountaug18)
  +Number(igstamountsep18)+Number(igstamountoct18)+Number(igstamountnov18)+Number(igstamountdec18)+Number(igstamountjan19)+Number(igstamountfeb19)+Number(igstamountmarch19);
  var totaligstamount1819 = totaligstamount1819.toFixed(2);
  document.getElementById("totaligstamount1819").innerHTML = totaligstamount1819;
  
  
  var cgstinterestapr18 = document.getElementById("cgstinterestapr18").textContent;
  var cgstinterestmay18 = document.getElementById("cgstinterestmay18").textContent;
  var cgstinterestjune18 = document.getElementById("cgstinterestjune18").textContent;
  var cgstinterestjuly18 = document.getElementById("cgstinterestjuly18").textContent;
  var cgstinterestaug18 = document.getElementById("cgstinterestaug18").textContent;
  var cgstinterestsep18 = document.getElementById("cgstinterestsep18").textContent;
  var cgstinterestoct18 = document.getElementById("cgstinterestoct18").textContent;
  var cgstinterestnov18 = document.getElementById("cgstinterestnov18").textContent;
  var cgstinterestdec18 = document.getElementById("cgstinterestdec18").textContent;
  var cgstinterestjan19 = document.getElementById("cgstinterestjan19").textContent;
  var cgstinterestfeb19 = document.getElementById("cgstinterestfeb19").textContent;
  var cgstinterestmarch19 = document.getElementById("cgstinterestmarch19").textContent;
  var totalcgstinterest1819 = Number(cgstinterestapr18)+Number(cgstinterestmay18)+Number(cgstinterestjune18)+Number(cgstinterestjuly18)+Number(cgstinterestaug18)
  +Number(cgstinterestsep18)+Number(cgstinterestoct18)+Number(cgstinterestnov18)+Number(cgstinterestdec18)+Number(cgstinterestjan19)+Number(cgstinterestfeb19)+Number(cgstinterestmarch19);
  var totalcgstinterest1819 = totalcgstinterest1819.toFixed(2);
  document.getElementById("totalcgstinterest1819").innerHTML = totalcgstinterest1819;
  
  
  var sgstinterestapr18 = document.getElementById("sgstinterestapr18").textContent;
  var sgstinterestmay18 = document.getElementById("sgstinterestmay18").textContent;
  var sgstinterestjune18 = document.getElementById("sgstinterestjune18").textContent;
  var sgstinterestjuly18 = document.getElementById("sgstinterestjuly18").textContent;
  var sgstinterestaug18 = document.getElementById("sgstinterestaug18").textContent;
  var sgstinterestsep18 = document.getElementById("sgstinterestsep18").textContent;
  var sgstinterestoct18 = document.getElementById("sgstinterestoct18").textContent;
  var sgstinterestnov18 = document.getElementById("sgstinterestnov18").textContent;
  var sgstinterestdec18 = document.getElementById("sgstinterestdec18").textContent;
  var sgstinterestjan19 = document.getElementById("sgstinterestjan19").textContent;
  var sgstinterestfeb19 = document.getElementById("sgstinterestfeb19").textContent;
  var sgstinterestmarch19 = document.getElementById("sgstinterestmarch19").textContent;
  var totalsgstinterest1819 = Number(sgstinterestapr18)+Number(sgstinterestmay18)+Number(sgstinterestjune18)+Number(sgstinterestjuly18)+Number(sgstinterestaug18)
  +Number(sgstinterestsep18)+Number(sgstinterestoct18)+Number(sgstinterestnov18)+Number(sgstinterestdec18)+Number(sgstinterestjan19)+Number(sgstinterestfeb19)+Number(sgstinterestmarch19);
  var totalsgstinterest1819 = totalsgstinterest1819.toFixed(2);
  document.getElementById("totalsgstinterest1819").innerHTML = totalsgstinterest1819;
  
  var igstinterestapr18 = document.getElementById("igstinterestapr18").textContent;
  var igstinterestmay18 = document.getElementById("igstinterestmay18").textContent;
  var igstinterestjune18 = document.getElementById("igstinterestjune18").textContent;
  var igstinterestjuly18 = document.getElementById("igstinterestjuly18").textContent;
  var igstinterestaug18 = document.getElementById("igstinterestaug18").textContent;
  var igstinterestsep18 = document.getElementById("igstinterestsep18").textContent;
  var igstinterestoct18 = document.getElementById("igstinterestoct18").textContent;
  var igstinterestnov18 = document.getElementById("igstinterestnov18").textContent;
  var igstinterestdec18 = document.getElementById("igstinterestdec18").textContent;
  var igstinterestjan19 = document.getElementById("igstinterestjan19").textContent;
  var igstinterestfeb19 = document.getElementById("igstinterestfeb19").textContent;
  var igstinterestmarch19 = document.getElementById("igstinterestmarch19").textContent;
  var totaligstinterest1819 = Number(igstinterestapr18)+Number(igstinterestmay18)+Number(igstinterestjune18)+Number(igstinterestjuly18)+Number(igstinterestaug18)
  +Number(igstinterestsep18)+Number(igstinterestoct18)+Number(igstinterestnov18)+Number(igstinterestdec18)+Number(igstinterestjan19)+Number(igstinterestfeb19)+Number(igstinterestmarch19);
  var totaligstinterest1819 = totaligstinterest1819.toFixed(2);
  document.getElementById("totaligstinterest1819").innerHTML = totaligstinterest1819;
  
  var totalamountapr18 = document.getElementById("totalamountapr18").textContent;
  var totalamountmay18 = document.getElementById("totalamountmay18").textContent;
  var totalamountjune18 = document.getElementById("totalamountjune18").textContent;
  var totalamountjuly18 = document.getElementById("totalamountjuly18").textContent;
  var totalamountaug18 = document.getElementById("totalamountaug18").textContent;
  var totalamountsep18 = document.getElementById("totalamountsep18").textContent;
  var totalamountoct18 = document.getElementById("totalamountoct18").textContent;
  var totalamountnov18 = document.getElementById("totalamountnov18").textContent;
  var totalamountdec18 = document.getElementById("totalamountdec18").textContent;
  var totalamountjan19 = document.getElementById("totalamountjan19").textContent;
  var totalamountfeb19 = document.getElementById("totalamountfeb19").textContent;
  var totalamountmarch19 = document.getElementById("totalamountmarch19").textContent;
  var amounttotal1819 = Number(totalamountapr18)+Number(totalamountmay18)+Number(totalamountjune18)+Number(totalamountjuly18)+Number(totalamountaug18)+Number(totalamountsep18)+Number(totalamountoct18)+Number(totalamountnov18)
  +Number(totalamountdec18)+Number(totalamountjan19)+Number(totalamountfeb19)+Number(totalamountmarch19);
  var amounttotal1819 = amounttotal1819.toFixed(2);
  document.getElementById("amounttotal1819").innerHTML = amounttotal1819;
  
  var totalinterestapr18 = document.getElementById("totalinterestapr18").textContent;
  var totalinterestmay18 = document.getElementById("totalinterestmay18").textContent;
  var totalinterestjune18 = document.getElementById("totalinterestjune18").textContent;
  var totalinterestjuly18 = document.getElementById("totalinterestjuly18").textContent;
  var totalinterestaug18 = document.getElementById("totalinterestaug18").textContent;
  var totalinterestsep18 = document.getElementById("totalinterestsep18").textContent;
  var totalinterestoct18 = document.getElementById("totalinterestoct18").textContent;
  var totalinterestnov18 = document.getElementById("totalinterestnov18").textContent;
  var totalinterestdec18 = document.getElementById("totalinterestdec18").textContent;
  var totalinterestjan19 = document.getElementById("totalinterestjan19").textContent;
  var totalinterestfeb19 = document.getElementById("totalinterestfeb19").textContent;
  var totalinterestmarch19 = document.getElementById("totalinterestmarch19").textContent;
  var interesttotal1819 = Number(totalinterestapr18)+Number(totalinterestmay18)+Number(totalinterestjune18)+Number(totalinterestjuly18)+Number(totalinterestaug18)+Number(totalinterestsep18)+Number(totalinterestoct18)+Number(totalinterestnov18)
  +Number(totalinterestdec18)+Number(totalinterestjan19)+Number(totalinterestfeb19)+Number(totalinterestmarch19);
  var interesttotal1819 = interesttotal1819.toFixed(2);
  document.getElementById("interesttotal1819").innerHTML = interesttotal1819;

  }

/*Interest calculation for 2018-19 end*/
/*Interest calculation for 2019-20 start*/


let interestAmountapr19 = () => {
  var date1 = document.getElementById("duedateapr19").textContent;
  var chunks = date1.split('-');
  var date1 = [chunks[1],chunks[0],chunks[2]].join("-");
  var date2 = document.getElementById("dateoffilingapr19").value;
  var date1=new Date(date1);
  var date2= new Date(date2);
  var time_difference = date2.getTime() - date1.getTime(); 
  var delaydaysapr19 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
  document.getElementById("delaydaysapr19").innerHTML=delaydaysapr19;
  var cgstamountapr19 = document.getElementById("cgstamountapr19").value;
  var sgstamountapr19 = document.getElementById("cgstamountapr19").value;
  document.getElementById("sgstamountapr19").innerHTML=sgstamountapr19;
  var cgstinterestapr19= (delaydaysapr19/365)*(18/100)*cgstamountapr19;
  var cgstinterestapr19 = cgstinterestapr19.toFixed(2);
  document.getElementById("cgstinterestapr19").innerHTML = cgstinterestapr19;
  var sgstinterestapr19 = cgstinterestapr19;
  document.getElementById("sgstinterestapr19").innerHTML = sgstinterestapr19;

  var igstamountapr19 = document.getElementById("igstamountapr19").value;
  var igstinterestapr19 = (delaydaysapr19/365)*(18/100)*igstamountapr19;
  var igstinterestapr19 =igstinterestapr19.toFixed(2);
  document.getElementById("igstinterestapr19").innerHTML = igstinterestapr19;

  var totalamountapr19 = Number(cgstamountapr19) + Number(sgstamountapr19) + Number(igstamountapr19);
  var totalamountapr19 = totalamountapr19.toFixed(2);
  document.getElementById("totalamountapr19").innerHTML = totalamountapr19;

  var totalinterestapr19 = Number(cgstinterestapr19) + Number(sgstinterestapr19) + Number(igstinterestapr19);
  var totalinterestapr19 = totalinterestapr19.toFixed(2);
  document.getElementById("totalinterestapr19").innerHTML = totalinterestapr19;

}

let interestAmountmay19 = () => {
  var date1 = document.getElementById("duedatemay19").textContent;
  var chunks = date1.split('-');
  var date1 = [chunks[1],chunks[0],chunks[2]].join("-");
  var date2 = document.getElementById("dateoffilingmay19").value;
  var date1=new Date(date1);
  var date2= new Date(date2);
  var time_difference = date2.getTime() - date1.getTime(); 
  var delaydaysmay19 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
  document.getElementById("delaydaysmay19").innerHTML=delaydaysmay19;
  var cgstamountmay19 = document.getElementById("cgstamountmay19").value;
  var sgstamountmay19 = document.getElementById("cgstamountmay19").value;
  document.getElementById("sgstamountmay19").innerHTML=sgstamountmay19;
  var cgstinterestmay19= (delaydaysmay19/365)*(18/100)*cgstamountmay19;
  var cgstinterestmay19 = cgstinterestmay19.toFixed(2);
  document.getElementById("cgstinterestmay19").innerHTML = cgstinterestmay19;
  var sgstinterestmay19 = cgstinterestmay19;
  document.getElementById("sgstinterestmay19").innerHTML = sgstinterestmay19;

  var igstamountmay19 = document.getElementById("igstamountmay19").value;
  var igstinterestmay19 = (delaydaysmay19/365)*(18/100)*igstamountmay19;
  var igstinterestmay19 =igstinterestmay19.toFixed(2);
  document.getElementById("igstinterestmay19").innerHTML = igstinterestmay19;

  var totalamountmay19 = Number(cgstamountmay19) + Number(sgstamountmay19) + Number(igstamountmay19);
  var totalamountmay19 = totalamountmay19.toFixed(2);
  document.getElementById("totalamountmay19").innerHTML = totalamountmay19;

  var totalinterestmay19 = Number(cgstinterestmay19) + Number(sgstinterestmay19) + Number(igstinterestmay19);
  var totalinterestmay19 = totalinterestmay19.toFixed(2);
  document.getElementById("totalinterestmay19").innerHTML = totalinterestmay19;

}

let interestAmountjune19 = () => {
  var date1 = document.getElementById("duedatejune19").textContent;
  var chunks = date1.split('-');
  var date1 = [chunks[1],chunks[0],chunks[2]].join("-");
  var date2 = document.getElementById("dateoffilingjune19").value;
  var date1=new Date(date1);
  var date2= new Date(date2);
  var time_difference = date2.getTime() - date1.getTime(); 
  var delaydaysjune19 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
  document.getElementById("delaydaysjune19").innerHTML=delaydaysjune19;
  var cgstamountjune19 = document.getElementById("cgstamountjune19").value;
  var sgstamountjune19 = document.getElementById("cgstamountjune19").value;
  document.getElementById("sgstamountjune19").innerHTML=sgstamountjune19;
  var cgstinterestjune19= (delaydaysjune19/365)*(18/100)*cgstamountjune19;
  var cgstinterestjune19 = cgstinterestjune19.toFixed(2);
  document.getElementById("cgstinterestjune19").innerHTML = cgstinterestjune19;
  var sgstinterestjune19 = cgstinterestjune19;
  document.getElementById("sgstinterestjune19").innerHTML = sgstinterestjune19;

  var igstamountjune19 = document.getElementById("igstamountjune19").value;
  var igstinterestjune19 = (delaydaysjune19/365)*(18/100)*igstamountjune19;
  var igstinterestjune19 =igstinterestjune19.toFixed(2);
  document.getElementById("igstinterestjune19").innerHTML = igstinterestjune19;

  var totalamountjune19 = Number(cgstamountjune19) + Number(sgstamountjune19) + Number(igstamountjune19);
  var totalamountjune19 = totalamountjune19.toFixed(2);
  document.getElementById("totalamountjune19").innerHTML = totalamountjune19;

  var totalinterestjune19 = Number(cgstinterestjune19) + Number(sgstinterestjune19) + Number(igstinterestjune19);
  var totalinterestjune19 = totalinterestjune19.toFixed(2);
  document.getElementById("totalinterestjune19").innerHTML = totalinterestjune19;

}

let interestAmountjuly19 = () => {
  var date1 = document.getElementById("duedatejuly19").textContent;
  var chunks = date1.split('-');
  var date1 = [chunks[1],chunks[0],chunks[2]].join("-");
  var date2 = document.getElementById("dateoffilingjuly19").value;
  var date1=new Date(date1);
  var date2= new Date(date2);
  var time_difference = date2.getTime() - date1.getTime(); 
  var delaydaysjuly19 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
  document.getElementById("delaydaysjuly19").innerHTML=delaydaysjuly19;
  var cgstamountjuly19 = document.getElementById("cgstamountjuly19").value;
  var sgstamountjuly19 = document.getElementById("cgstamountjuly19").value;
  document.getElementById("sgstamountjuly19").innerHTML=sgstamountjuly19;
  var cgstinterestjuly19= (delaydaysjuly19/365)*(18/100)*cgstamountjuly19;
  var cgstinterestjuly19 = cgstinterestjuly19.toFixed(2);
  document.getElementById("cgstinterestjuly19").innerHTML = cgstinterestjuly19;
  var sgstinterestjuly19 = cgstinterestjuly19;
  document.getElementById("sgstinterestjuly19").innerHTML = sgstinterestjuly19;

  var igstamountjuly19 = document.getElementById("igstamountjuly19").value;
  var igstinterestjuly19 = (delaydaysjuly19/365)*(18/100)*igstamountjuly19;
  var igstinterestjuly19 =igstinterestjuly19.toFixed(2);
  document.getElementById("igstinterestjuly19").innerHTML = igstinterestjuly19;

  var totalamountjuly19 = Number(cgstamountjuly19) + Number(sgstamountjuly19) + Number(igstamountjuly19);
  var totalamountjuly19 = totalamountjuly19.toFixed(2);
  document.getElementById("totalamountjuly19").innerHTML = totalamountjuly19;

  var totalinterestjuly19 = Number(cgstinterestjuly19) + Number(sgstinterestjuly19) + Number(igstinterestjuly19);
  var totalinterestjuly19 = totalinterestjuly19.toFixed(2);
  document.getElementById("totalinterestjuly19").innerHTML = totalinterestjuly19;

}

let interestAmountaug19 = () => {
  var date1 = document.getElementById("duedateaug19").textContent;
  var chunks = date1.split('-');
  var date1 = [chunks[1],chunks[0],chunks[2]].join("-");
  var date2 = document.getElementById("dateoffilingaug19").value;
  var date1=new Date(date1);
  var date2= new Date(date2);
  var time_difference = date2.getTime() - date1.getTime(); 
  var delaydaysaug19 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
  document.getElementById("delaydaysaug19").innerHTML=delaydaysaug19;
  var cgstamountaug19 = document.getElementById("cgstamountaug19").value;
  var sgstamountaug19 = document.getElementById("cgstamountaug19").value;
  document.getElementById("sgstamountaug19").innerHTML=sgstamountaug19;
  var cgstinterestaug19= (delaydaysaug19/365)*(18/100)*cgstamountaug19;
  var cgstinterestaug19 = cgstinterestaug19.toFixed(2);
  document.getElementById("cgstinterestaug19").innerHTML = cgstinterestaug19;
  var sgstinterestaug19 = cgstinterestaug19;
  document.getElementById("sgstinterestaug19").innerHTML = sgstinterestaug19;

  var igstamountaug19 = document.getElementById("igstamountaug19").value;
  var igstinterestaug19 = (delaydaysaug19/365)*(18/100)*igstamountaug19;
  var igstinterestaug19 =igstinterestaug19.toFixed(2);
  document.getElementById("igstinterestaug19").innerHTML = igstinterestaug19;

  var totalamountaug19 = Number(cgstamountaug19) + Number(sgstamountaug19) + Number(igstamountaug19);
  var totalamountaug19 = totalamountaug19.toFixed(2);
  document.getElementById("totalamountaug19").innerHTML = totalamountaug19;

  var totalinterestaug19 = Number(cgstinterestaug19) + Number(sgstinterestaug19) + Number(igstinterestaug19);
  var totalinterestaug19 = totalinterestaug19.toFixed(2);
  document.getElementById("totalinterestaug19").innerHTML = totalinterestaug19;

}

let interestAmountsep19 = () => {
  var datea = document.getElementById("duedatesep19").textContent;
  var chunks = datea.split('-');
  var datea = [chunks[1],chunks[0],chunks[2]].join("-");
  var dateb = document.getElementById("dateoffilingsep19").value;
  var datea=new Date(datea);
  var dateb= new Date(dateb);
  var time_difference = dateb.getTime() - datea.getTime(); 
  var delaydayssep19 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
  document.getElementById("delaydayssep19").innerHTML=delaydayssep19;
  var cgstamountsep19 = document.getElementById("cgstamountsep19").value;
  var sgstamountsep19 = document.getElementById("cgstamountsep19").value;
  document.getElementById("sgstamountsep19").innerHTML=sgstamountsep19;
  var cgstinterestsep19= (delaydayssep19/365)*(18/100)*cgstamountsep19;
  var cgstinterestsep19 = cgstinterestsep19.toFixed(2);
  document.getElementById("cgstinterestsep19").innerHTML = cgstinterestsep19;
  var sgstinterestsep19 = cgstinterestsep19;
  document.getElementById("sgstinterestsep19").innerHTML = sgstinterestsep19;

  var igstamountsep19 = document.getElementById("igstamountsep19").value;
  var igstinterestsep19 = (delaydayssep19/365)*(18/100)*igstamountsep19;
  var igstinterestsep19 =igstinterestsep19.toFixed(2);
  document.getElementById("igstinterestsep19").innerHTML = igstinterestsep19;

  var totalamountsep19 = Number(cgstamountsep19) + Number(sgstamountsep19) + Number(igstamountsep19);
  var totalamountsep19 = totalamountsep19.toFixed(2);
  document.getElementById("totalamountsep19").innerHTML = totalamountsep19;

  var totalinterestsep19 = Number(cgstinterestsep19) + Number(sgstinterestsep19) + Number(igstinterestsep19);
  var totalinterestsep19 = totalinterestsep19.toFixed(2);
  document.getElementById("totalinterestsep19").innerHTML = totalinterestsep19;
}

let interestAmountoct19 = () => {
  var datea = document.getElementById("duedateoct19").textContent;
  var chunks = datea.split('-');
  var datea = [chunks[1],chunks[0],chunks[2]].join("-");
  var dateb = document.getElementById("dateoffilingoct19").value;
  var datea=new Date(datea);
  var dateb= new Date(dateb);
  var time_difference = dateb.getTime() - datea.getTime(); 
  var delaydaysoct19 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
  document.getElementById("delaydaysoct19").innerHTML=delaydaysoct19;
  var cgstamountoct19= document.getElementById("cgstamountoct19").value;
  var sgstamountoct19 = document.getElementById("cgstamountoct19").value;
  document.getElementById("sgstamountoct19").innerHTML=sgstamountoct19;
  var cgstinterestoct19 = (delaydaysoct19/365)*(18/100)*cgstamountoct19;
  var cgstinterestoct19 = cgstinterestoct19.toFixed(2);
  document.getElementById("cgstinterestoct19").innerHTML = cgstinterestoct19;
  var sgstinterestoct19 = cgstinterestoct19;
  document.getElementById("sgstinterestoct19").innerHTML = sgstinterestoct19;

  var igstamountoct19 = document.getElementById("igstamountoct19").value;
  var igstinterestoct19 = (delaydaysoct19/365)*(18/100)*igstamountoct19;
  var igstinterestoct19 =igstinterestoct19.toFixed(2);
  document.getElementById("igstinterestoct19").innerHTML = igstinterestoct19;

  var totalamountoct19 = Number(cgstamountoct19) + Number(sgstamountoct19) + Number(igstamountoct19);
  var totalamountoct19 = totalamountoct19.toFixed(2);
  document.getElementById("totalamountoct19").innerHTML = totalamountoct19;

  var totalinterestoct19 = Number(cgstinterestoct19) + Number(sgstinterestoct19) + Number(igstinterestoct19);
  var totalinterestoct19 = totalinterestoct19.toFixed(2);
  document.getElementById("totalinterestoct19").innerHTML = totalinterestoct19;
}

let interestAmountnov19 = () => {
  var datea = document.getElementById("duedatenov19").textContent;
  var chunks = datea.split('-');
  var datea = [chunks[1],chunks[0],chunks[2]].join("-");
  var dateb = document.getElementById("dateoffilingnov19").value;
  var datea=new Date(datea);
  var dateb= new Date(dateb);
  var time_difference = dateb.getTime() - datea.getTime(); 
  var delaydaysnov19 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
  document.getElementById("delaydaysnov19").innerHTML=delaydaysnov19;
  var cgstamountnov19= document.getElementById("cgstamountnov19").value;
  var sgstamountnov19 = document.getElementById("cgstamountnov19").value;
  document.getElementById("sgstamountnov19").innerHTML=sgstamountnov19;
  var cgstinterestnov19 = (delaydaysnov19/365)*(18/100)*cgstamountnov19;
  var cgstinterestnov19 = cgstinterestnov19.toFixed(2);
  document.getElementById("cgstinterestnov19").innerHTML = cgstinterestnov19;
  var sgstinterestnov19 = cgstinterestnov19;
  document.getElementById("sgstinterestnov19").innerHTML = sgstinterestnov19;

  var igstamountnov19 = document.getElementById("igstamountnov19").value;
  var igstinterestnov19 = (delaydaysnov19/365)*(18/100)*igstamountnov19;
  var igstinterestnov19 =igstinterestnov19.toFixed(2);
  document.getElementById("igstinterestnov19").innerHTML = igstinterestnov19;

  var totalamountnov19 = Number(cgstamountnov19) + Number(sgstamountnov19) + Number(igstamountnov19);
  var totalamountnov19 = totalamountnov19.toFixed(2);
  document.getElementById("totalamountnov19").innerHTML = totalamountnov19;

  var totalinterestnov19 = Number(cgstinterestnov19) + Number(sgstinterestnov19) + Number(igstinterestnov19);
  var totalinterestnov19 = totalinterestnov19.toFixed(2);
  document.getElementById("totalinterestnov19").innerHTML = totalinterestnov19;
}
let interestAmountdec19 = () => {
  var datea = document.getElementById("duedatedec19").textContent;
  var chunks = datea.split('-');
  var datea = [chunks[1],chunks[0],chunks[2]].join("-");
  var dateb = document.getElementById("dateoffilingdec19").value;
  var datea=new Date(datea);
  var dateb= new Date(dateb);
  var time_difference = dateb.getTime() - datea.getTime(); 
  var delaydaysdec19 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
  document.getElementById("delaydaysdec19").innerHTML=delaydaysdec19;
  var cgstamountdec19= document.getElementById("cgstamountdec19").value;
  var sgstamountdec19 = document.getElementById("cgstamountdec19").value;
  document.getElementById("sgstamountdec19").innerHTML=sgstamountdec19;
  var cgstinterestdec19 = (delaydaysdec19/365)*(18/100)*cgstamountdec19;
  var cgstinterestdec19 = cgstinterestdec19.toFixed(2);
  document.getElementById("cgstinterestdec19").innerHTML = cgstinterestdec19;
  var sgstinterestdec19 = cgstinterestdec19;
  document.getElementById("sgstinterestdec19").innerHTML = sgstinterestdec19;

  var igstamountdec19 = document.getElementById("igstamountdec19").value;
  var igstinterestdec19 = (delaydaysdec19/365)*(18/100)*igstamountdec19;
  var igstinterestdec19 =igstinterestdec19.toFixed(2);
  document.getElementById("igstinterestdec19").innerHTML = igstinterestdec19;

  var totalamountdec19 = Number(cgstamountdec19) + Number(sgstamountdec19) + Number(igstamountdec19);
  var totalamountdec19 = totalamountdec19.toFixed(2);
  document.getElementById("totalamountdec19").innerHTML = totalamountdec19;

  var totalinterestdec19 = Number(cgstinterestdec19) + Number(sgstinterestdec19) + Number(igstinterestdec19);
  var totalinterestdec19 = totalinterestdec19.toFixed(2);
  document.getElementById("totalinterestdec19").innerHTML = totalinterestdec19;
}

let interestAmountjan20 = () => {
  var datea = document.getElementById("duedatejan20").textContent;
  var chunks = datea.split('-');
  var datea = [chunks[1],chunks[0],chunks[2]].join("-");
  var dateb = document.getElementById("dateoffilingjan20").value;
  var datea=new Date(datea);
  var dateb= new Date(dateb);
  var time_difference = dateb.getTime() - datea.getTime(); 
  var delaydaysjan20 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
  document.getElementById("delaydaysjan20").innerHTML=delaydaysjan20;
  var cgstamountjan20= document.getElementById("cgstamountjan20").value;
  var sgstamountjan20 = document.getElementById("cgstamountjan20").value;
  document.getElementById("sgstamountjan20").innerHTML=sgstamountjan20;
  var cgstinterestjan20 = (delaydaysjan20/365)*(18/100)*cgstamountjan20;
  var cgstinterestjan20 = cgstinterestjan20.toFixed(2);
  document.getElementById("cgstinterestjan20").innerHTML = cgstinterestjan20;
  var sgstinterestjan20 = cgstinterestjan20;
  document.getElementById("sgstinterestjan20").innerHTML = sgstinterestjan20;

  var igstamountjan20 = document.getElementById("igstamountjan20").value;
  var igstinterestjan20 = (delaydaysjan20/365)*(18/100)*igstamountjan20;
  var igstinterestjan20 =igstinterestjan20.toFixed(2);
  document.getElementById("igstinterestjan20").innerHTML = igstinterestjan20;

  var totalamountjan20 = Number(cgstamountjan20) + Number(sgstamountjan20) + Number(igstamountjan20);
  var totalamountjan20 = totalamountjan20.toFixed(2);
  document.getElementById("totalamountjan20").innerHTML = totalamountjan20;

  var totalinterestjan20 = Number(cgstinterestjan20) + Number(sgstinterestjan20) + Number(igstinterestjan20);
  var totalinterestjan20 = totalinterestjan20.toFixed(2);
  document.getElementById("totalinterestjan20").innerHTML = totalinterestjan20;
}

let interestAmountfeb20 = () => {
  var datea = document.getElementById("duedatefeb20").textContent;
  var chunks = datea.split('-');
  var datea = [chunks[1],chunks[0],chunks[2]].join("-");
  var dateb = document.getElementById("dateoffilingfeb20").value;
  var datea=new Date(datea);
  var dateb= new Date(dateb);
  var time_difference = dateb.getTime() - datea.getTime(); 
  var delaydaysfeb20 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
  document.getElementById("delaydaysfeb20").innerHTML=delaydaysfeb20;
  var cgstamountfeb20= document.getElementById("cgstamountfeb20").value;
  var sgstamountfeb20 = document.getElementById("cgstamountfeb20").value;
  document.getElementById("sgstamountfeb20").innerHTML=sgstamountfeb20;
  var cgstinterestfeb20 = (delaydaysfeb20/365)*(18/100)*cgstamountfeb20;
  var cgstinterestfeb20 = cgstinterestfeb20.toFixed(2);
  document.getElementById("cgstinterestfeb20").innerHTML = cgstinterestfeb20;
  var sgstinterestfeb20 = cgstinterestfeb20;
  document.getElementById("sgstinterestfeb20").innerHTML = sgstinterestfeb20;

  var igstamountfeb20 = document.getElementById("igstamountfeb20").value;
  var igstinterestfeb20 = (delaydaysfeb20/365)*(18/100)*igstamountfeb20;
  var igstinterestfeb20 =igstinterestfeb20.toFixed(2);
  document.getElementById("igstinterestfeb20").innerHTML = igstinterestfeb20;

  var totalamountfeb20 = Number(cgstamountfeb20) + Number(sgstamountfeb20) + Number(igstamountfeb20);
  var totalamountfeb20 = totalamountfeb20.toFixed(2);
  document.getElementById("totalamountfeb20").innerHTML = totalamountfeb20;

  var totalinterestfeb20 = Number(cgstinterestfeb20) + Number(sgstinterestfeb20) + Number(igstinterestfeb20);
  var totalinterestfeb20 = totalinterestfeb20.toFixed(2);
  document.getElementById("totalinterestfeb20").innerHTML = totalinterestfeb20;
}

let interestAmountmarch20 = () => {
  var datea = document.getElementById("duedatemarch20").textContent;
  var chunks = datea.split('-');
  var datea = [chunks[1],chunks[0],chunks[2]].join("-");
  var dateb = document.getElementById("dateoffilingmarch20").value;
  var datea=new Date(datea);
  var dateb= new Date(dateb);
  var time_difference = dateb.getTime() - datea.getTime(); 
  var delaydaysmarch20 = Math.round(time_difference / (1000 * 60 * 60 * 24)); 
  document.getElementById("delaydaysmarch20").innerHTML=delaydaysmarch20;
  var cgstamountmarch20= document.getElementById("cgstamountmarch20").value;
  var sgstamountmarch20 = document.getElementById("cgstamountmarch20").value;
  document.getElementById("sgstamountmarch20").innerHTML=sgstamountmarch20;
  var cgstinterestmarch20 = (delaydaysmarch20/365)*(18/100)*cgstamountmarch20;
  var cgstinterestmarch20 = cgstinterestmarch20.toFixed(2);
  document.getElementById("cgstinterestmarch20").innerHTML = cgstinterestmarch20;
  var sgstinterestmarch20 = cgstinterestmarch20;
  document.getElementById("sgstinterestmarch20").innerHTML = sgstinterestmarch20;

  var igstamountmarch20 = document.getElementById("igstamountmarch20").value;
  var igstinterestmarch20 = (delaydaysmarch20/365)*(18/100)*igstamountmarch20;
  var igstinterestmarch20 =igstinterestmarch20.toFixed(2);
  document.getElementById("igstinterestmarch20").innerHTML = igstinterestmarch20;

  var totalamountmarch20 = Number(cgstamountmarch20) + Number(sgstamountmarch20) + Number(igstamountmarch20);
  var totalamountmarch20 = totalamountmarch20.toFixed(2);
  document.getElementById("totalamountmarch20").innerHTML = totalamountmarch20;

  var totalinterestmarch20 = Number(cgstinterestmarch20) + Number(sgstinterestmarch20) + Number(igstinterestmarch20);
  var totalinterestmarch20 = totalinterestmarch20.toFixed(2);
  document.getElementById("totalinterestmarch20").innerHTML = totalinterestmarch20;
}


var total1920 = () =>{
  var cgstamountapr19 = document.getElementById("cgstamountapr19").value;
  var cgstamountmay19 = document.getElementById("cgstamountmay19").value;
  var cgstamountjune19 = document.getElementById("cgstamountjune19").value;
  var cgstamountjuly19 = document.getElementById("cgstamountjuly19").value;
  var cgstamountaug19 = document.getElementById("cgstamountaug19").value;
  var cgstamountsep19 = document.getElementById("cgstamountsep19").value;
  var cgstamountoct19 = document.getElementById("cgstamountoct19").value;
  var cgstamountnov19 = document.getElementById("cgstamountnov19").value;
  var cgstamountdec19 = document.getElementById("cgstamountdec19").value;
  var cgstamountjan20 = document.getElementById("cgstamountjan20").value;
  var cgstamountfeb20 = document.getElementById("cgstamountfeb20").value;
  var cgstamountmarch20 = document.getElementById("cgstamountmarch20").value;
  var totalcgstamount1920 = Number(cgstamountapr19)+Number(cgstamountmay19)+Number(cgstamountjune19)+Number(cgstamountjuly19)+Number(cgstamountaug19)
  +Number(cgstamountsep19)+Number(cgstamountoct19)+Number(cgstamountnov19)+Number(cgstamountdec19)+Number(cgstamountjan20)+Number(cgstamountfeb20)+Number(cgstamountmarch20);
  var totalcgstamount1920 = totalcgstamount1920.toFixed(2);
  document.getElementById("totalcgstamount1920").innerHTML = totalcgstamount1920;
  
  var sgstamountapr19 = document.getElementById("sgstamountapr19").textContent;
  var sgstamountmay19 = document.getElementById("sgstamountmay19").textContent;
  var sgstamountjune19 = document.getElementById("sgstamountjune19").textContent;
  var sgstamountjuly19 = document.getElementById("sgstamountjuly19").textContent;
  var sgstamountaug19 = document.getElementById("sgstamountaug19").textContent;
  var sgstamountsep19 = document.getElementById("sgstamountsep19").textContent;
  var sgstamountoct19 = document.getElementById("sgstamountoct19").textContent;
  var sgstamountnov19 = document.getElementById("sgstamountnov19").textContent;
  var sgstamountdec19 = document.getElementById("sgstamountdec19").textContent;
  var sgstamountjan20 = document.getElementById("sgstamountjan20").textContent;
  var sgstamountfeb20 = document.getElementById("sgstamountfeb20").textContent;
  var sgstamountmarch20 = document.getElementById("sgstamountmarch20").textContent;
  var totalsgstamount1920 = Number(sgstamountapr19)+Number(sgstamountmay19)+Number(sgstamountjune19)+Number(sgstamountjuly19)+Number(sgstamountaug19)
  +Number(sgstamountsep19)+Number(sgstamountoct19)+Number(sgstamountnov19)+Number(sgstamountdec19)+Number(sgstamountjan20)+Number(sgstamountfeb20)+Number(sgstamountmarch20);
  var totalsgstamount1920 = totalsgstamount1920.toFixed(2);
  document.getElementById("totalsgstamount1920").innerHTML = totalsgstamount1920;
  
  var igstamountapr19 = document.getElementById("igstamountapr19").value;
  var igstamountmay19 = document.getElementById("igstamountmay19").value;
  var igstamountjune19 = document.getElementById("igstamountjune19").value;
  var igstamountjuly19 = document.getElementById("igstamountjuly19").value;
  var igstamountaug19 = document.getElementById("igstamountaug19").value;
  var igstamountsep19 = document.getElementById("igstamountsep19").value;
  var igstamountoct19 = document.getElementById("igstamountoct19").value;
  var igstamountnov19 = document.getElementById("igstamountnov19").value;
  var igstamountdec19 = document.getElementById("igstamountdec19").value;
  var igstamountjan20 = document.getElementById("igstamountjan20").value;
  var igstamountfeb20 = document.getElementById("igstamountfeb20").value;
  var igstamountmarch20 = document.getElementById("igstamountmarch20").value;
  var totaligstamount1920 = Number(igstamountapr19)+Number(igstamountmay19)+Number(igstamountjune19)+Number(igstamountjuly19)+Number(igstamountaug19)
  +Number(igstamountsep19)+Number(igstamountoct19)+Number(igstamountnov19)+Number(igstamountdec19)+Number(igstamountjan20)+Number(igstamountfeb20)+Number(igstamountmarch20);
  var totaligstamount1920 = totaligstamount1920.toFixed(2);
  document.getElementById("totaligstamount1920").innerHTML = totaligstamount1920;
  
  
  var cgstinterestapr19 = document.getElementById("cgstinterestapr19").textContent;
  var cgstinterestmay19 = document.getElementById("cgstinterestmay19").textContent;
  var cgstinterestjune19 = document.getElementById("cgstinterestjune19").textContent;
  var cgstinterestjuly19 = document.getElementById("cgstinterestjuly19").textContent;
  var cgstinterestaug19 = document.getElementById("cgstinterestaug19").textContent;
  var cgstinterestsep19 = document.getElementById("cgstinterestsep19").textContent;
  var cgstinterestoct19 = document.getElementById("cgstinterestoct19").textContent;
  var cgstinterestnov19 = document.getElementById("cgstinterestnov19").textContent;
  var cgstinterestdec19 = document.getElementById("cgstinterestdec19").textContent;
  var cgstinterestjan20 = document.getElementById("cgstinterestjan20").textContent;
  var cgstinterestfeb20 = document.getElementById("cgstinterestfeb20").textContent;
  var cgstinterestmarch20 = document.getElementById("cgstinterestmarch20").textContent;
  var totalcgstinterest1920 = Number(cgstinterestapr19)+Number(cgstinterestmay19)+Number(cgstinterestjune19)+Number(cgstinterestjuly19)+Number(cgstinterestaug19)
  +Number(cgstinterestsep19)+Number(cgstinterestoct19)+Number(cgstinterestnov19)+Number(cgstinterestdec19)+Number(cgstinterestjan20)+Number(cgstinterestfeb20)+Number(cgstinterestmarch20);
  var totalcgstinterest1920 = totalcgstinterest1920.toFixed(2);
  document.getElementById("totalcgstinterest1920").innerHTML = totalcgstinterest1920;
  
  
  var sgstinterestapr19 = document.getElementById("sgstinterestapr19").textContent;
  var sgstinterestmay19 = document.getElementById("sgstinterestmay19").textContent;
  var sgstinterestjune19 = document.getElementById("sgstinterestjune19").textContent;
  var sgstinterestjuly19 = document.getElementById("sgstinterestjuly19").textContent;
  var sgstinterestaug19 = document.getElementById("sgstinterestaug19").textContent;
  var sgstinterestsep19 = document.getElementById("sgstinterestsep19").textContent;
  var sgstinterestoct19 = document.getElementById("sgstinterestoct19").textContent;
  var sgstinterestnov19 = document.getElementById("sgstinterestnov19").textContent;
  var sgstinterestdec19 = document.getElementById("sgstinterestdec19").textContent;
  var sgstinterestjan20 = document.getElementById("sgstinterestjan20").textContent;
  var sgstinterestfeb20 = document.getElementById("sgstinterestfeb20").textContent;
  var sgstinterestmarch20 = document.getElementById("sgstinterestmarch20").textContent;
  var totalsgstinterest1920 = Number(sgstinterestapr19)+Number(sgstinterestmay19)+Number(sgstinterestjune19)+Number(sgstinterestjuly19)+Number(sgstinterestaug19)
  +Number(sgstinterestsep19)+Number(sgstinterestoct19)+Number(sgstinterestnov19)+Number(sgstinterestdec19)+Number(sgstinterestjan20)+Number(sgstinterestfeb20)+Number(sgstinterestmarch20);
  var totalsgstinterest1920 = totalsgstinterest1920.toFixed(2);
  document.getElementById("totalsgstinterest1920").innerHTML = totalsgstinterest1920;
  
  var igstinterestapr19 = document.getElementById("igstinterestapr19").textContent;
  var igstinterestmay19 = document.getElementById("igstinterestmay19").textContent;
  var igstinterestjune19 = document.getElementById("igstinterestjune19").textContent;
  var igstinterestjuly19 = document.getElementById("igstinterestjuly19").textContent;
  var igstinterestaug19 = document.getElementById("igstinterestaug19").textContent;
  var igstinterestsep19 = document.getElementById("igstinterestsep19").textContent;
  var igstinterestoct19 = document.getElementById("igstinterestoct19").textContent;
  var igstinterestnov19 = document.getElementById("igstinterestnov19").textContent;
  var igstinterestdec19 = document.getElementById("igstinterestdec19").textContent;
  var igstinterestjan20 = document.getElementById("igstinterestjan20").textContent;
  var igstinterestfeb20 = document.getElementById("igstinterestfeb20").textContent;
  var igstinterestmarch20 = document.getElementById("igstinterestmarch20").textContent;
  var totaligstinterest1920 = Number(igstinterestapr19)+Number(igstinterestmay19)+Number(igstinterestjune19)+Number(igstinterestjuly19)+Number(igstinterestaug19)
  +Number(igstinterestsep19)+Number(igstinterestoct19)+Number(igstinterestnov19)+Number(igstinterestdec19)+Number(igstinterestjan20)+Number(igstinterestfeb20)+Number(igstinterestmarch20);
  var totaligstinterest1920 = totaligstinterest1920.toFixed(2);
  document.getElementById("totaligstinterest1920").innerHTML = totaligstinterest1920;
  
  var totalamountapr19 = document.getElementById("totalamountapr19").textContent;
  var totalamountmay19 = document.getElementById("totalamountmay19").textContent;
  var totalamountjune19 = document.getElementById("totalamountjune19").textContent;
  var totalamountjuly19 = document.getElementById("totalamountjuly19").textContent;
  var totalamountaug19 = document.getElementById("totalamountaug19").textContent;
  var totalamountsep19 = document.getElementById("totalamountsep19").textContent;
  var totalamountoct19 = document.getElementById("totalamountoct19").textContent;
  var totalamountnov19 = document.getElementById("totalamountnov19").textContent;
  var totalamountdec19 = document.getElementById("totalamountdec19").textContent;
  var totalamountjan20 = document.getElementById("totalamountjan20").textContent;
  var totalamountfeb20 = document.getElementById("totalamountfeb20").textContent;
  var totalamountmarch20 = document.getElementById("totalamountmarch20").textContent;
  var amounttotal1920 = Number(totalamountapr19)+Number(totalamountmay19)+Number(totalamountjune19)+Number(totalamountjuly19)+Number(totalamountaug19)+Number(totalamountsep19)+Number(totalamountoct19)+Number(totalamountnov19)
  +Number(totalamountdec19)+Number(totalamountjan20)+Number(totalamountfeb20)+Number(totalamountmarch20);
  var amounttotal1920 = amounttotal1920.toFixed(2);
  document.getElementById("amounttotal1920").innerHTML = amounttotal1920;
  
  var totalinterestapr19 = document.getElementById("totalinterestapr19").textContent;
  var totalinterestmay19 = document.getElementById("totalinterestmay19").textContent;
  var totalinterestjune19 = document.getElementById("totalinterestjune19").textContent;
  var totalinterestjuly19 = document.getElementById("totalinterestjuly19").textContent;
  var totalinterestaug19 = document.getElementById("totalinterestaug19").textContent;
  var totalinterestsep19 = document.getElementById("totalinterestsep19").textContent;
  var totalinterestoct19 = document.getElementById("totalinterestoct19").textContent;
  var totalinterestnov19 = document.getElementById("totalinterestnov19").textContent;
  var totalinterestdec19 = document.getElementById("totalinterestdec19").textContent;
  var totalinterestjan20 = document.getElementById("totalinterestjan20").textContent;
  var totalinterestfeb20 = document.getElementById("totalinterestfeb20").textContent;
  var totalinterestmarch20 = document.getElementById("totalinterestmarch20").textContent;
  var interesttotal1920 = Number(totalinterestapr19)+Number(totalinterestmay19)+Number(totalinterestjune19)+Number(totalinterestjuly19)+Number(totalinterestaug19)+Number(totalinterestsep19)+Number(totalinterestoct19)+Number(totalinterestnov19)
  +Number(totalinterestdec19)+Number(totalinterestjan20)+Number(totalinterestfeb20)+Number(totalinterestmarch20);
  var interesttotal1920 = interesttotal1920.toFixed(2);
  document.getElementById("interesttotal1920").innerHTML = interesttotal1920;

  }

/*Interest calculation for 2019-20 end*/