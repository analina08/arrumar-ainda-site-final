window.onscroll = function() 
{
    const scroll = document.getElementById("scroll")

    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
    {
        scroll .style.display = "block";
        
    }
    else{
        scroll .style.display = "none";
    }
};
document.getElementById("scroll").addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener('load', () => {
    const carousel = document.querySelector('.carousel');
    const passar1 = document.getElementById('passar1');
    const passar2 = document.getElementById('passar2');

    let index = 0;

    function updateCarousel() {
        const width = document.querySelector('.book1').offsetWidth;
        carousel.style.transform = `translateX(${ -width * index } px)`
    }

    passar2.addEventListener('click', () => {
        if (index < carousel.children.length - 1) {
            index++;
        } else {
            index = 0;
        }
        updateCarousel('carousel');
    });

    passar1.addEventListener('click', () => {
        if (index > 0) {
            index--;
        } else {
            index = carousel.children.length - 1;
        }
        updateCarousel('carousel');
    });
});

function startCountdown() {
    const endTime = new Date().getTime() + 3600 * 1000; 
    const countdownElement = document.getElementById('countdown');
  
    const interval = setInterval(function() {
      const now = new Date().getTime();
      const timeRemaining = endTime - now;
  
      if (timeRemaining <= 0) {
        clearInterval(interval);
        countdownElement.innerHTML = "A promoção acabou!";
      } else {
        const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
        countdownElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
      }
    }, 1000);
  
};
window.addEventListener('load', startCountdown);

  let currentTestimonial = 0;

function showTestimonials() {
  const testimonials = document.querySelectorAll('.testimonial');
  testimonials.forEach((testimonial, index) => {
    testimonial.style.display = (index === currentTestimonial) ? 'block' : 'none';
  });

  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
}

window.addEventListener('load', function() {
  showTestimonials();
  setInterval(showTestimonials, 3000);
});