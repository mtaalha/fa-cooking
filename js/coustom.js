$(function(){
    $('.benner_slide').slick({
        dots: true,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 2500,
        speed:700,
        margin:50,
        prevArrow: false,
        nextArrow:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      window.addEventListener("scroll", function(){
        var nav = document.querySelector("nav");
        header.classList.toggle("sticky", window.scrollY > 0)
      });












});