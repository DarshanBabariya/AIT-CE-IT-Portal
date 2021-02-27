var x = 1;
function openNav(){
    if (x == 1) {
        document.getElementById("mob-navbar").style.width="40%";
        return x=0;
    }
    else{
        document.getElementById("mob-navbar").style.width="0";
        return x=1;
    }
}