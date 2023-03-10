var slideIndex = 1;
// Initially showSlides was executed before HTML document is fully loaded, thus event handler to make sure it waits
window.onload = function () {
	showSlides(slideIndex);
};
// Next/previous controls
function plusSlides(n) {
	showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	// console.log(slides);
	// console.log(slides.length);

	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	// set current visable
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}
