$(".background-wide > div:gt(0)").hide();

setInterval(function() { 
  $('.background-wide > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.background-wide');
},  3000);

$(".background-mobi > div:gt(0)").hide();

setInterval(function() { 
  $('.background-mobi > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.background-mobi');
},  3000);

function about() {
  var x = document.getElementById("information");
  console.log(x)
  if (x.style.display != "block") {
    if(document.getElementById("team").style.display =="block"){
      document.getElementById("team").style.display="none"
    }
    if(document.getElementById("calendar").style.display =="block"){
      document.getElementById("calendar").style.display="none"
    }
    if(document.getElementById("gallery").style.display =="block"){
      document.getElementById("gallery").style.display="none"
    }
    if(document.getElementById("contact").style.display =="block"){
      document.getElementById("contact").style.display="none"
    }


    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function team() {
  var x = document.getElementById("team");
  if (x.style.display != "block") {
    if(document.getElementById("information").style.display =="block"){
      document.getElementById("information").style.display="none"
    }
    if(document.getElementById("calendar").style.display =="block"){
      document.getElementById("calendar").style.display="none"
    }
    if(document.getElementById("gallery").style.display =="block"){
      document.getElementById("gallery").style.display="none"
    }
    if(document.getElementById("contact").style.display =="block"){
      document.getElementById("contact").style.display="none"
    }
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  }

  function calendar() {
  var x = document.getElementById("calendar");
  if (x.style.display != "block") {
    if(document.getElementById("information").style.display =="block"){
      document.getElementById("information").style.display="none"
    }
    if(document.getElementById("team").style.display =="block"){
      document.getElementById("team").style.display="none"
    }
    if(document.getElementById("gallery").style.display =="block"){
      document.getElementById("gallery").style.display="none"
    }
    if(document.getElementById("contact").style.display =="block"){
      document.getElementById("contact").style.display="none"
    }
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  }

    function gallery() {
  var x = document.getElementById("gallery");
  if (x.style.display != "block") {
    if(document.getElementById("information").style.display =="block"){
      document.getElementById("information").style.display="none"
    }
    if(document.getElementById("team").style.display =="block"){
      document.getElementById("team").style.display="none"
    }
     if(document.getElementById("calendar").style.display =="block"){
      document.getElementById("calendar").style.display="none"
    }
    if(document.getElementById("contact").style.display =="block"){
      document.getElementById("contact").style.display="none"
    }
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  }



  function contact() {
  var x = document.getElementById("contact");
  if (x.style.display != "block") {
    if(document.getElementById("information").style.display =="block"){
      document.getElementById("information").style.display="none"
    }
    if(document.getElementById("team").style.display =="block"){
      document.getElementById("team").style.display="none"
    }
     if(document.getElementById("calendar").style.display =="block"){
      document.getElementById("calendar").style.display="none"
    }
    if(document.getElementById("gallery").style.display =="block"){
      document.getElementById("gallery").style.display="none"
    }
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  }

  function slideshow(){
    if(document.getElementById("information").style.display =="block"){
      document.getElementById("information").style.display="none"
    }
    if(document.getElementById("team").style.display =="block"){
      document.getElementById("team").style.display="none"
    }
     if(document.getElementById("calendar").style.display =="block"){
      document.getElementById("calendar").style.display="none"
    }
    if(document.getElementById("gallery").style.display =="block"){
      document.getElementById("gallery").style.display="none"
    }
    if(document.getElementById("contact").style.display =="block"){
      document.getElementById("contact").style.display="none"
    }
  }

 $(".trigger_popup_fricc").click(function(){
       $('.hover_bkgr_fricc').show();
    });
    $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    });

// $(document).ready(function() {
//   setTimeout(function() { 
//     if(document.getElementById("information").style.display=="" && document.getElementById("team").style.display=="" && document.getElementById("calendar").style.display =="" &&
//      document.getElementById("gallery").style.display =="" && document.getElementById("contact").style.display ==""){
//     $("#information").delay(1000).fadeIn(500);}
//     }
//   }
//     , 3600);
  
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
