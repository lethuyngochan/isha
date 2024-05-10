// Active item onclick
// var sidebarItems = document.querySelectorAll('.sidebar a');

// sidebarItems.forEach(function (item) {
//     item.onclick = function () {
//         sidebarItems.forEach(function (link) {
//             link.classList.remove('active');
//         });
//         item.classList.add('active');
//     };
// });

// lightbox
function openModal() {
    document.getElementById("spacesModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("spacesModal").style.display = "none";
}

var slideIndex = 1;
    showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("spacesSlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}

// active on scroll


