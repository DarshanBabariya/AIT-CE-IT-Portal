var x = 1;
function openNav(){
    if (x == 1) {
        document.getElementById("mob-navbar").style.width="70%";
        return x=0;
    }
    else{
        document.getElementById("mob-navbar").style.width="0";
        return x=1;
    }
}

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}