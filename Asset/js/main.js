// Toggle menu


let Menuitems = document.getElementById("Menuitems");

Menuitems.style.maxHeight = "0px";

function menutoggle(){
    if(Menuitems.style.maxHeight == "0px")
    {
        Menuitems.style.maxHeight="200px";  
    }
    else
    {
        Menuitems.style.maxHeight="0px"; 
    }
}



