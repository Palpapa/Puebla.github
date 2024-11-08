
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);

}

let currentImageIndex = 0;
const images = [
    "https://www.elfinanciero.com.mx/resizer/dxNA2gyytJUuqy6FZSsXk8ESrNY=/arc-photo-elfinanciero/arc2-prod/public/YO6HPESDSBGN7BCTJBWH52OKMI.png",
    "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/67000/67703-Puebla.jpg",
    "https://cdn.pixabay.com/animation/2024/05/18/20/16/20-16-48-323_512.gif"
];

function showImage(index) {
    const carouselImage = document.getElementById("carousel-image");
    carouselImage.src = images[index];
}

function prevImage() {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
    showImage(currentImageIndex);
}

function nextImage() {
    currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
    showImage(currentImageIndex);
}
