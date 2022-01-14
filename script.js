var slideIndex = 0
showSlides()
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";// dar inja be komak java script display ra none kardim
    }
    slideIndex++;
    if (slideIndex > slides.length)// dar inja goftim agar tedad azaye slide ha bishtar az tedad bood slide ha ra dobare be yek bargardan
    {
        slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");// dar inja goftim ooni ke class active ro darad barabar kon ba hich kelasi

    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 5000)
}