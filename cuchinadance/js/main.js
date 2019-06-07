$(".background > div:gt(0)").hide();

setInterval(function() { 
  $('.background > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.background');
},  3000);

function about() {
  var x = document.getElementById("information");
  if (x.style.display === "none") {
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
  if (x.style.display === "none") {
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
  if (x.style.display === "none") {
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
  if (x.style.display === "none") {
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
