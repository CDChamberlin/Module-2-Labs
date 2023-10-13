function openNav(){
    document.getElementById("sidebar").style.cssText="width:250px; display:content; padding:15px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("openNav").style.display = "none";
}

function closeNav(){
    document.getElementById("sidebar").style.cssText="width:0; display:none;";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("openNav").style.display = "initial";
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 
