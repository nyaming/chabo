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
		$(".js-scroll-stay").each(function(){
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

////////* SP ドロワーメニュー *//////// 
$("#sp_menu_btn").on('click', function(){
	$('.header_nav').fadeIn(0);
	$(this).toggleClass('open');
	$('.header_nav').toggleClass('open');
	if ($('#sp_menu_btn').hasClass('open')) {
		setTimeout(function () {
			$('.header_nav').removeClass('close');
			$('.nav_btn_txt').html('CLOSE');
		}, 0);
		// スクロールを無効にする
		$('body,html').css({"overflow":"hidden","height":"100%"});
	}
	else{
		setTimeout(function () {
			$('.header_nav').addClass('close');
			$('.header_nav').fadeOut();
			$('.nav_btn_txt').html('MENU');
		}, 0);
		// スクロール無効を解除する
		$('body,html').css({"overflow":"visible","height":"auto"});
	}
})
$('.header_nav a').click (function(){
	// スクロール無効を解除する
	$('body,html').css({"overflow":"visible","height":"auto"});
});


