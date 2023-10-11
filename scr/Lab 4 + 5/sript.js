function openNav(){
    document.getElementById("sidebar").style.cssText="width:250px; display:content;";
    document.getElementById("main").style.marginLeft = "250px";
    console.log("Clicked Open");
}

function closeNav(){
    document.getElementById("sidebar").style.cssText="width:0; display:none;";
    document.getElementById("main").style.marginLeft = "0";
    console.log("CLicked closed");
}
