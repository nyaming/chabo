 ////////* スクロールアクション *////////
 $(function() {
	 
	 $(window).scroll(function (){
		$(".js-scroll").each(function(){
		  var imgPos = $(this).offset().top;    
		  var scroll = $(window).scrollTop();
		  var windowHeight = $(window).height();
		  if (scroll > imgPos - windowHeight +150){
			$(this).addClass("js-scroll-in");
		  }
		});
	  });
	 
	 $(window).scroll(function (){
		$(".js-scroll-slow").each(function(){
		  var imgPos = $(this).offset().top;    
		  var scroll = $(window).scrollTop();
		  var windowHeight = $(window).height();
		  if (scroll > imgPos - windowHeight +150){
			$(this).addClass("js-scroll-in");
		  }
		});
	  });
	 $(window).scroll(function (){
		$(".js-scroll-up").each(function(){
		  var imgPos = $(this).offset().top;    
		  var scroll = $(window).scrollTop();
		  var windowHeight = $(window).height();
		  if (scroll > imgPos - windowHeight +150){
			$(this).addClass("js-scroll-up-in");
		  }
		});
	  });
 });