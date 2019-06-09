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

 $(".trigger_popup_fricc").click(function(){
       $('.hover_bkgr_fricc').show();
    });
    $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    });