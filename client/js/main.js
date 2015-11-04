'use strict'
jQuery(document).ready(function() {
  var offset = 220;
  var duration = 500;

  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.back-to-top').fadeIn(duration);
    } else {
     jQuery('.back-to-top').fadeOut(duration);
    }
  });

  jQuery('.back-to-top').click(function(event) {
    event.preventDefault();
    jQuery('html, body').animate({scrollTop: 0}, duration);
    return false;
  })
});

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: 'slide',
    start: function(slider){
      $('body').removeClass('loading')
    }
  })
});

// Used for navbar
$('.flexnav').flexNav();

function loadHead() {
  $("#head").load("components/head.html")
}

function GetDateTime() {
  var weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  var month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  var current_date = new Date()
  var weekday_value = current_date.getDay()
  var month_value = current_date.getMonth()

  var dateString = weekdays[weekday_value] + '  ' + current_date.getDate() + ' ' + month[month_value] + ' ' + current_date.getFullYear()
  document.getElementById('lbltxt').innerHTML = dateString
}

/* REALLY not sure what all this is for. Apparently some JS form that doesn't exist anymore?
function hide() {
  document.getElementById('showResult').innerHTML='';
}

function Index() {
  document.getElementById('showResult').innerHTML='';
  document.getElementById('showMsg').innerHTML='<h4>Sign up for our email newsletter today!</h4><label>first name:</label><input type='text' name='name'><label>email:</label><input type='text' name='email'><input type='submit' name='submit' value='Subscribe'>';
  //document.getElementById('showResult').innerHTML='';

  //document.form1.action='index.html';
  //document.form1.submit();
}

function closeWin() {
  var n=document.form1.hname.value;
  var e=document.form1.hemail.value;

  document.getElementById('showMsg').innerHTML='<h4>Sign up for our email newsletter today!</h4><label>first name:</label><input type='text' name='name' value='+n+'><label>email:</label><input type='text' name='email' value='+e+'><input type='submit' name='submit' value='Subscribe'>';
  // document.getElementById('showResult').innerHTML='';
  document.form1.name.value=n;
  document.form1.email.value=e;
}

function nextWin() {
  var name = document.form1.name.value;
  var email = document.form1.email.value;
  document.form1.hname.value = name;
  document.form1.hemail.value = email;

  if(name == '') {
    alert('Please enter your name');
    document.form1.name.focus();
    return false;
  }

  if(email == '') {
    alert('Please enter your email id');
    document.form1.email.focus();
    return false;
  }

  var emailRegEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!email.match(emailRegEx)){
    alert('Please enter a valid email address');
    document.form1.email.focus();
    return false;
  }

  document.getElementById('showMsg').innerHTML='';
  document.getElementById('showMsg').innerHTML='<h4>Please Check and Confirm your details!</h4><label>'+name+'</label><label>'+email+'</label><input type='button' name='back' value='Back' onclick='closeWin()' />&nbsp;<input type='button' name='next' value='Confirm' onclick='checkForm()' />';
  return false;
}

function checkForm() {
  var name = document.form1.hname.value;
  var email = document.form1.hemail.value;
  var urr1 = 'n=' + name;
  var urr2 = 'e=' + email;

  try {
    xmlhttp=new XMLHttpRequest();
  } catch (e) {
    try {
      xmlhttp=new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e) {
      try {
        xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
      } catch (e) {
        alert('Your browser does not support AJAX!');
        return false;
      }
    }
  }

  xmlhttp.onreadystatechange = processStateChange;
  xmlhttp.open('GET','fyn_mail.jsp?'+urr1+'&'+urr2, true);
  xmlhttp.send(null);
  document.getElementById('showResult').innerHTML='<div align='center'><h4><strong>Processing.<br>Please Wait...</strong></h4></div>';
  document.getElementById('showMsg').innerHTML='';
}

function processStateChange() {
  if(xmlhttp.readyState == 4) {
    if(xmlhttp.status == 200) {
      //var message = xmlhttp.responseXML.getElementsByTagName('read')[0];
      document.getElementById('showResult').innerHTML='<div align='center'><h4><strong>Thank you for your interest!<br /><br />You will be included in our mailing list right away.</strong><br><br><input type='button' name='back' value='Show Form' onclick='Index()'></h4></div>';
      document.getElementById('showMsg').innerHTML='';
    }
  }
}

jQuery(function($) {
  $('#searchbox input[name=searchword]').search({
    'url': '/component/search/?tmpl=raw&amp;amp;type=json&amp;amp;ordering=&amp;amp;searchphrase=all',
    'param': 'searchword',
    'msgResultsHeader': 'Search Results',
    'msgMoreResults': 'More Results',
    'msgNoResults': 'No results found'
  }).placeholder();
});*/
