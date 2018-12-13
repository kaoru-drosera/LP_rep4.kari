
// スクロールアニメーション（omronのjqからコピペった…）

// 大鬼門・スクロールアニメーション（コピペッた）
// スクロールアニメーション（ヘッダー）
$(window).on('load', function () {

// スクロールアニメーション（メイン）
	var winh = $(window).height();

	$('.JQ').each(function() {
		$(this).data('top', $(this).offset().top - (winh * 0.75))
	});

	$(window).on('scroll', function () {
		var myTop = $(window).scrollTop();

		$('.JQ').each(function() {
			if( myTop >= $(this).data('top') ) {
				$(this).addClass('fire');
			}
		});
	});
});


$(window).on('load', function () {

// スクロールアニメーション（メイン）
	var winh = $(window).height();

	$('.JQN').each(function() {
		$(this).data('top', $(this).offset().top - (winh * 1))
	});

	$(window).on('scroll', function () {
		var myTop = $(window).scrollTop();

		$('.JQN').each(function() {
			if( myTop >= $(this).data('top') ) {
				$(this).addClass('fire');
			}
		});
	});
});



// ここまでスクロールアニメーション

// 一定スクロールで消滅するfixedメニュー
$(function(){
	var fixed2 = $('#fixed-menu2');
	fixed2.show();
	$(window).scroll(function(){
		if($(this).scrollTop() > 8650){
			fixed2.slideUp();
		}else{
			fixed2.slideDown();
		}
	});
});

// ここまで一定スクロールで消滅するfixedメニュー

// 一定スクロールで消滅するfixedメニュー(タブ・スマホ)
$(function(){
	var fixed2_2 = $('#fixed-menu2-2');
	fixed2_2.show();
	$(window).scroll(function(){
		if($(this).scrollTop() > 10700){
			fixed2_2.hide();
		}else{
			fixed2_2.show();
		}
	});
});

// ここまで一定スクロールで消滅するfixedメニュー(タブ・スマホ)

// スクロールアップで出現する
// ＆スクロールダウンで消滅するメニューバー

$(function(){
  var menuHeight = $('#fixed-menu1').height();
  var startPos = 0;
  $(window).scroll(function(){
    var currentPos = $(this).scrollTop();
    if(currentPos > startPos){
      if($(window).scrollTop() >= 200){
        $('#fixed-menu1').css('top','-' + menuHeight + 'px');
      }
    }else{
      $('#fixed-menu1').css('top', 0 + 'px');
    }
    startPos = currentPos;
  });
});

// fixedメニュー下
$(function(){
  $('.closebtn-wrap').click(function(){
    $('.fx2-2opencont').css('display','none');
    $('.fx2-2closecont').css('display','flex')
  });

  $('.fx2-2cimg').click(function(){
    $('.fx2-2closecont').css('display','none');
    $('.fx2-2opencont').css('display','flex');
  });
});
// ここまでfixedメニュー下

$(function(){
  $('.fx-burg').click(function(){
    $('.burgmenu').slideDown(280,'swing');
  });

  $('.burg-close').click(function(){
    $('.burgmenu').slideUp(280,'swing');
  });

});

$(function(){
  $(window).on('scroll',function(){
    var elem = $('.elem');
    var isAnimate = '.isAnimate'

    elem.each(function(){

      var elemOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();

      if(scrollPos > elemOffset - wh + (wh / 2)){
        $(this).addClass(isAnimate);
      }

    });
  });
});



// swiperスライドベルト1＆2
var mySwiper1 = new Swiper('.swiper1-container',{
  loop:true,
  slidesPerView:5,
  speed:1500,
  autoplay:{
    delay:6000,
    stopOnlastSlide:false,
    disableOnInteraction:false,
    reverseDirection:false
  },
  navigation:{
    nextEl:'.swiper-button-prev1',
    prevEl:'.swiper-button-next1'
  },

});


var mySwiper2 = new Swiper('.swiper2-container',{
  loop:true,
  slidesPerView:5,
  speed:1500,
  autoplay:{
    delay:6000,
    stopOnlastSlide:false,
    disableOnInteraction:false,
    reverseDirection:false
  },
  navigation:{
    nextEl:'.swiper-button-prev2',
    prevEl:'.swiper-button-next2'
  },

});











$
