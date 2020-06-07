$('.owl-colab').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
$('.owl-calen').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var banner = document.getElementById("banner");

function myFunction() {
  if (window.pageYOffset >= 500) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
