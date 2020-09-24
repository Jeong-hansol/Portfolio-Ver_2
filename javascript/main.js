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
