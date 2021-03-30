const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')

var slideindex = 1
showSlides(slideindex)

function plusSides(n){
    showSlides(slideindex += n)
}

function currentSlide(n){
    showSlides(slideindex = n)
}

function showSlides(n){
    var i
    var slides = document.querySelectorAll('.image-1')
    var dots = document.querySelectorAll('.dot')

    if(n > slides.length) { slideindex = 1 }
    if(n < 1){ slideindex = slides.length }

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");

        const text = document.getElementById('changeText');
        if(n==1){
            text.innerHTML = 'deserves'
        }
        else if(n==2){
            text.innerHTML = 'needs'
        }
        else{
            text.innerHTML = 'demands'
        }
    }

    slides[slideindex-1].style.display = "block"
    dots[slideindex-1].className += " active" 
}