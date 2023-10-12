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
