$("document").ready(function(){
    $(".gnb > li").mouseenter(function(){
    $(this).children(".submenu").stop().slideDown("fast");
});
    $(".gnb > li").mouseleave(function(){
    $(this).children(".submenu").stop().slideUp("fast");
}); 



        $('.opera-tabs li').click(function(){
    // 오페라 탭 중 하나를 클릭하면 실행
    $('.opera-tabs li').removeClass('active');
    $(this).addClass('active');

    // 모든 공연 내용 숨기기
    $('.opera-container .opera').removeClass('opera-active');

    // 클릭한 탭의 순서(index)에 맞는 공연 내용 보여주기
    var index = $(this).index();
    $('.opera-container .opera').eq(index).addClass('opera-active');
    });

    $(".academy-tabs .notice-tab").click(function () {
    $(".academy-tabs h2").removeClass("active");
    $(this).addClass("active");

    $(".academy").addClass("on");
    $(".faq").removeClass("on");
});

    $(".academy-tabs .faq-tab").click(function () {
    $(".academy-tabs h2").removeClass("active");
    $(this).addClass("active");

    $(".faq").addClass("on");
    $(".academy").removeClass("on");
});



  $(".tab-content").hide().eq(1).show(); // 오페라하우스 보이게

  $(".music-tabs li").click(function () {
    $(".music-tabs li").removeClass("active");
    $(this).addClass("active");

    var index = $(this).index();
    $(".tab-content").hide().eq(index).show();
  });

});
