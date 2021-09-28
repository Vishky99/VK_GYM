
function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
  }

function currentTime() {
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
  }
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }

/*document.getElementsByClassName("clock").innerHTML = hour + " : " + min + " : " + sec; /* adding time to the div */

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementsById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }



/* Registration Form Validation */

function uppercase() {
  var x = document.getElementById("k_up");
  x.value = x.value.toUpperCase();
}

function cons() {
  var x = document.getElementById("k_down");
  console.log(x.value);
}


let fn = document.getElementById("fname");
function validate_fn(){
  let fname = fn.value;
  if(fname=='')
  {
      alert("This field is required");
      fn.style.border="3px solid red"
  }
  else if(fname.includes(' ')){
      alert("space not allowed");
      fn.style.border="3px solid red";
  }
  else
  {
      fn.style.border="3px solid green";
  }
}

let ln = document.getElementById("lname");
function validate_ln(){
  let lname = ln.value;
  if(lname=='')
  {
      alert("This field is required");
      ln.style.border="3px solid red"
  }
  else if(lname.includes(' ')){
      alert("space not allowed");
      ln.style.border="3px solid red";
  }
  else
  {
      ln.style.border="3px solid green";
  }
}



let eml = document.getElementById("email");
function validate_em(){
  let email = eml.value;
  let subs=email.substring(email.indexOf('@')+1);
  if(email=='')
  {
      alert("This field is required");
      eml.style.border="3px solid red"
  }
  else if(!email.includes('@') || subs=='')
  {
      alert("Invalid Email Id");
      eml.style.border="3px solid red";
  }
  else
  {
      eml.style.border="3px solid green";
  }
}


let ps = document.getElementById("password");
function validate_ps(){
  let pass = ps.value;
  let regExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
  console.log(ps.value);
  console.log(regExp.test(pass));
  if(pass=='')
  {
      alert("This field is required");
      ps.style.border="3px solid red"
  }
  else if(pass.length<6 || pass.length>20){
      alert("Password should be 6 to 20 characters long");
      ps.style.border="3px solid red";
  }
  else if(regExp.test(pass)==false){
      alert("Password should be alphanumeric with special symbols");
      ps.style.border="3px solid red";
  }
  else
  {
      ps.style.border="3px solid green";
  }
}



let cps = document.getElementById("cpassword");
function conf_ps(){
  let cpass = cps.value;
  let regExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
  console.log(cps.value);
  console.log(regExp.test(cpass));
  if(cpass=='')
  {
      alert("This field is required");
      cps.style.border="3px solid red"
  }
  else if(cpass!=ps.value)
  {
      alert("Password should match");
      cps.style.border="3px solid red";
  }
  else
  {
      cps.style.border="3px solid green";
  }
}


let phn = document.getElementById("tele");
function validate_pn(){
  let phno = phn.value;
  /*var x = /^\d{10}$/;*/
  console.log(phno.length);
  if(phno=='')
  {
      alert("This field is required");
      phn.style.border="3px solid red"
  }
  else if(phno.length!=10){
      alert("Number should be of 10 digits");
      phn.style.border="3px solid red";
  }
  else
  {
      phn.style.border="3px solid green";
  }
}


let ag = document.getElementById("age");
function validate_age(){
  let agen = ag.value;
  if(agen=='')
  {
      alert("This field is required");
      ag.style.border="3px solid red"
  }
  else if(agen<0 || agen>100){
      agen("Age should not be negative or above 100");
      ag.style.border="3px solid red";
  }
  else
  {
      ag.style.border="3px solid green";
  }
}
