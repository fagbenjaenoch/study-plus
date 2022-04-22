window.onscroll = function(){stick()};

var header = document.getElementById("header");

var sticky = header.offsetTop;

function stick() {
    if (window.pageYOffset > sticky){
        header.classList.add("sticky");
    }

    else{
        header.classList.remove("sticky");
    }
}