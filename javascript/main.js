// AOS 애니메이션 라이브러리
AOS.init();

// niceScroll(페이지 자동 스크롤)
jQuery.fn.niceScroll = function() {
  $(this).click(function(e) {
    var h = $(this).attr('href'),
    target;

    if (h.charAt(0) == '#' && h.length > 1 && (target = $(h)).length > 0){
      var pos = Math.max(target.offset().top, 0);
      e.preventDefault();
      $('body,html').animate({
        scrollTop : pos-70
      }, 'slow', 'swing');
    }
  });
};
$('.scroll').niceScroll();


$(window).on('load', function () {
     $("#load").hide();
}); // loading 되면 이미지 숨기기


// Top Button 동작
var $backToTop = $("#back-top");
$backToTop.hide();

$(window).on('scroll', function() {
  if ($(this).scrollTop() > 150) {
    $backToTop.fadeIn();
  } else {
    $backToTop.fadeOut();
  }
});

$backToTop.on('click', function(e) {
  $("html, body").animate({scrollTop: 0}, 500);
});


// 메뉴바 고정
$(document).ready(function() {
   		var menu_offset = $('nav').offset();
   		$(window).scroll(function() {
     		if ($(document).scrollTop()-600 > menu_offset.top) {
       			$('nav').addClass('menu-fixed');
     		} else {
       			$('nav').removeClass('menu-fixed');
     		}
   		});
});


// 이미지 슬라이드
var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});


// 포트폴리오 view more 페이지
$(".pulse-button.btn.btn1").click(function (evt) {
    evt.preventDefault();
    $(".morepage01").fadeIn();
});

$(".pulse-button.btn.btn2").click(function (evt) {
    evt.preventDefault();
    $(".morepage02").fadeIn();
});

$(".pulse-button.btn.btn3").click(function (evt) {
    evt.preventDefault();
    $(".morepage03").fadeIn();
});

$(".pulse-button.btn.btn4").click(function (evt) {
    evt.preventDefault();
    $(".morepage04").fadeIn();
});

$(".close,.morepage").click(function () {
    $(".morepage").fadeOut();
});

$(document).keyup(function (evt) {
    if (evt.which == 27) { $(".morepage").hide(); };
}); // ESC 키로 닫기

$(".morepage .more_cont").on({
    "click": function (evt) {
        evt.stopPropagation();
    }
}); // 창 밖 클릭 시에만 화면 닫기
