$(document).ready(function () {
  $(".menu-area").mouseenter(function () {
    $(".submenu").stop().slideDown("fast");
    $(".bg").stop().slideDown("fast");
  });

  $(".menu-area").mouseleave(function () {
    $(".submenu").stop().slideUp("fast");
    $(".bg").stop().slideUp("fast");
  });
  
  // 모바일용 네비
  $(".menu-toggle").on("click", function () {
    $(".mobile-menu").addClass("active");
  });

   $(".menu-close").on("click", function () {
    $(".mobile-menu").removeClass("active");
  });

  // Top 버튼
$(function(){
  var $btn = $('#toTop');
  var SHOW_AT = 300; // px: 이 높이 이상 스크롤되면 버튼 보이기

  // 스크롤 버튼 표시/숨김
  $(window).on('scroll', function(){
    if ($(this).scrollTop() > SHOW_AT){
      $btn.addClass('show');
    } else {
      $btn.removeClass('show');
    }
  });

  // 클릭 시 맨 위로 이동
  $btn.on('click', function(){
    $('html, body').animate({ scrollTop: 0 }, 500, 'swing');
  });
});



  // 초기 상태: 첫 번째만 보이기
  $('.but-cont').hide().eq(0).show();
  $('.but-list li').removeClass('active').eq(0).addClass('active');

  // 탭 클릭
  $('.but-list li').on('click', function () {
    var index = $(this).index();
    $('.but-list li').removeClass('active');
    $(this).addClass('active');
    
    $('.but-cont').hide().eq(index).show();
  });


});














