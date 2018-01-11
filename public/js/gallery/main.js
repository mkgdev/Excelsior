$(document).ready(function() {



	for (var i=1; i<=38; i++){
		
   if(i==26 || i==36 || i==32){
	   continue;
   }
	   var image=document.getElementById(i);
	   var ref=document.getElementById("a"+i);
   
	   image.setAttribute("src", "../images/SRDTU_16/"+i+".jpg") ;
	   ref.setAttribute("href", "../images/SRDTU_16/"+i+".jpg");
   
	   console.log(image);
	   console.log(ref);
	}
   
	   
	   /*
   
	   var fragment = document.createDocumentFragment();
	   var doc=document.createElement("img");
	   var src;
	   var elem="images/SRDTU_16/";
	   
	   fragment.appendChild(doc);
	   for(i = 1; i <= 38; i++){
		   src=elem+i+".jpg";
		   doc.src=src;
   
		   fragment.appendChild(doc.cloneNode(true));
	   }
	   
	   document.body.appendChild(fragment);
   */
	   // Header Scroll
	   $(window).on('scroll', function() {
		   var scroll = $(window).scrollTop();
   
		   if (scroll >= 50) {
			   $('#header').addClass('fixed');
		   } else {
			   $('#header').removeClass('fixed');
		   }
	   });
   
	   // Fancybox
	   $('.work-box').fancybox();
   
	   // Flexslider
	   $('.flexslider').flexslider({
		   animation: "fade",
		   directionNav: false,
	   });
   
	   // Page Scroll
	   var sections = $('section')
		   nav = $('nav[role="navigation"]');
   
	   $(window).on('scroll', function () {
			 var cur_pos = $(this).scrollTop();
			 sections.each(function() {
			   var top = $(this).offset().top - 76
				   bottom = top + $(this).outerHeight();
			   if (cur_pos >= top && cur_pos <= bottom) {
					 nav.find('a').removeClass('active');
					 nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
			   }
			 });
	   });
	   nav.find('a').on('click', function () {
			 var $el = $(this)
			   id = $el.attr('href');
		   $('html, body').animate({
			   scrollTop: $(id).offset().top - 75
		   }, 500);
		 return false;
	   });
   
	   // Mobile Navigation
	   $('.nav-toggle').on('click', function() {
		   $(this).toggleClass('close-nav');
		   nav.toggleClass('open');
		   return false;
	   });	
	   nav.find('a').on('click', function() {
		   $('.nav-toggle').toggleClass('close-nav');
		   nav.toggleClass('open');
	   });
   });