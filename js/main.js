$(document).ready(function(){
    var content=$(".ProjectImg"),tabs=$("span");
    
    tabs.on('click', function(){
  
      tabs.removeClass('active').filter(this).addClass('active');
      var filter=$(this).data('filter');
      
      content.isotope({
        filter: filter
      });
      return false;
    });
  });


  // carousel COmment

  $(document).ready(function(){
    $('.CommentCaousel').slick({
      dots: true,
      nextArrow: false,
      prevArrow: false
    });
  });

/////event for hamburger

$(document).ready(function(){
	$('.hamburger,slice').click(function(){
		$(this).toggleClass('open');
	});
});
$(document).ready(function(){
	$('.hamburger').click(function(){
		$('.MoblieNav').slideToggle(300);
	});
});
//////serarch button
$(document).ready(function(){
	$('.SearchDesk').click(function(){
		$('.bagContainer input').slideToggle(300);
	});
});

  // ExpertTag Carousel
  $('.CarouselStaff').slick({
    nextArrow: '<i class="ion-arrow-right-c"></i>',
    prevArrow: '<i class="ion-arrow-left-c"></i>',
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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
  
