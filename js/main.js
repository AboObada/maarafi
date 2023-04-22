 // Back to top button
 $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top ').click(function () {
    $('html, body').animate({scrollTop: 0}, 1000, 'easeInOutExpo');
    return false;
});
$(function(){
  $('.scroll').on('click',function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - '93' }, 1000, 'easeInOutExpo');
  });
});


new WOW().init();


document.addEventListener("DOMContentLoaded", function(){
            
    window.addEventListener('scroll', function() {
       
        if (window.scrollY > 30) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
             document.getElementById('navbar_top').classList.remove('fixed-top');
             // remove padding top from body
            document.body.style.paddingTop = '0';
        } 

        
    });
});

// owl carousel
$('.owll').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    rtl:true,
    mouseDrag:false,
    autoplay:true,
    speed: 1700,
    navSpeed: 500,
    autoplayTimeout: 8000,
    lazyLoad: 'progressive',
    // animateOut: 'slideOutIn',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:5
        }
    }
  });




  
  (function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


  window.document.onkeydown = function(e) {
    if (!e) {
      e = event;
    }
    if (e.keyCode == 27) {
      lightbox_close();
    }
  }
  
  function lightbox_open() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    window.scrollTo(0, 0);
        $('#light').fadeIn('slow');
        $('#fade').fadeIn('slow');
   
    lightBoxVideo.play();
  }
  
  function lightbox_close() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    $('#light').fadeOut('slow');
    $('#fade').fadeOut('slow');
    lightBoxVideo.pause();
  }
