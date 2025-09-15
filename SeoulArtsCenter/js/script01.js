$("document").ready(function(){
    $(".gnb > li").mouseenter(function(){
    $(this).children(".submenu").stop().slideDown("fast");
});
    $(".gnb > li").mouseleave(function(){
    $(this).children(".submenu").stop().slideUp("fast");
}); 



        
  $(".tab-content").hide().eq(0).show();

  $(".music-tabs li").click(function () {
    $(".music-tabs li").removeClass("active");
    $(this).addClass("active");

    var index = $(this).index();
    $(".tab-content").hide().eq(index).show();
  });

});