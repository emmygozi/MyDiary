/* eslint-disable */
function manipulate(p1, p2, submitid, match) {
    var mail2 = document.getElementById(p2);
  var mail1 = document.getElementById(p1);
  
  mail2.onkeyup = function () {
    document.getElementById(submitid).disabled = true;
    var a = document.getElementById(p1).value;
    var b = document.getElementById(p2).value;
  
    if ((a == b) && (a != '')) {
  
      var matching = document.getElementById(match).style.color = "#0EFF00";
      document.getElementById(match).innerHTML = "Password matched!";
        document.getElementById(submitid).disabled = false;
    }else{
      document.getElementById(match).style.color = "red";
      document.getElementById(match).innerHTML = "Password do not match!"
    }
  
  
  
  }
  
  
  
  mail1.onkeyup = function () {
    document.getElementById(submitid).disabled = true;
    var a = document.getElementById(p1).value;
    var b = document.getElementById(p2).value;
  
    if ((a == b) && (a != '')) {
  
      var matching = document.getElementById(match).style.color = "#0EFF00";
      document.getElementById(match).innerHTML = "Password matched!";
        document.getElementById(submitid).disabled = false;
    }else{
      document.getElementById(match).style.color = "red";
      document.getElementById(match).innerHTML = "Password do not match!"
    }
  
  
  
  }
  
  
  }
