
$(document).ready(function(){


	// Sticky Header 
	$(window).scroll(function(){
		var scrl = $(window).scrollTop();
		if(scrl < 160){
			$('.header-1').removeClass('fixedbar');
		}
		else{
			$('.header-1').addClass('fixedbar');	
		}
	})

	//Back to top button
	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
			$('.back-to-top').fadeIn('slow');
		}
		else{
			$('.back-to-top').fadeOut('slow');
		}
	});
	$('.back-to-top').click(function(){
		$('html, body').animate({scrollTop : 0}, 1500, 'easeInOutExpo');
	});

	//Modal Popup portfolio
	 $('.popup').magnificPopup({
        type:'inline',
        fixedContentPos:false,
        fixedBgPos:true,
        overflow:'auto',
        closeBtnInside:true,
        preloader:false,
        midClick:true,
        removeDelay:300,
        mainClass:'my-mfp-slide-button'
    });

	 //Team Swiper Slider
	 var swiper = new Swiper('.swiper-container', {
	      effect: 'coverflow',
	      grabCursor: true,
	      centeredSlides: true,
	      slidesPerView: 'auto',
	      coverflowEffect: {
	        rotate: 50,
	        stretch: 0,
	        depth: 100,
	        modifier: 1,
	        slideShadows : true,
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	      pagination: {
	        el: '.swiper-pagination',
	      },
	    });
})



	// Slider 
	var slideIndex = 1;
	showSlides(slideIndex);

	function plusSlides(n){
		showSlides(slideIndex += n);
	}

	function showSlides(n){
		var i;
		var slides = document.getElementsByClassName("myslides");
		if(n > slides.length){
			slideIndex = 1
		}
		if(n < 1){slideIndex = slides.length}

			for(i=0; i< slides.length; i++){
				slides[i].style.display = "none";
			}
			slides[slideIndex-1].style.display = "block";
	}