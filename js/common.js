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
	  
	//   $(window).scroll(function (){
	// 	$(".js-scroll-blur").each(function(){
	// 	  var imgPos = $(this).offset().top;    
	// 	  var scroll = $(window).scrollTop();
	// 	  var windowHeight = $(window).height();
	// 	  if (scroll > imgPos - windowHeight +200){
	// 		$(this).addClass("js-scroll-blur-in");
	// 	  }
	// 	});
	//   });
 });

/*スクロールアクション*/	
// $(window).scroll(function (){
//     $(".effect").each(function(){
//       var imgPos = $(this).offset().top;    
//       var scroll = $(window).scrollTop();
//       var windowHeight = $(window).height();
//       if (scroll > imgPos - windowHeight + windowHeight/5 + 50){
//         $(this).addClass("effect-in");
//       } else {
        
// 		$(this).removeClass("effect-in");
//       }
//     });
//   });