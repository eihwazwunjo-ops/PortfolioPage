$(document).ready(function(){
  $('.new-group').on('afterChange', function(){
  //  console.log($('.new-group').slick('slickCurrentSlide'))
  if($('.new-group').slick('slickCurrentSlide') == 7)
  {
    $('.new-group').slick('goTo', 0);
  }
});
    // setInterval(function(){

    //     $('.imgbox').animate({
    //         marginLeft: '-100%'
    //     },1000, function(){
    //         $('.imgbox img').eq(0).appendTo('.imgbox');
    //     });
    // },6000);

    
    // setInterval(function(){

    //     $('.imgbox').animate({
    //         marginLeft: '-100%'
    //     },1000, function(){
    //         $('.imgbox img').eq(0).appendTo('.imgbox');
    //         $('.imgbox').css({
    //             marginLeft: 0
    //         });
    //     });
    // },6000);

  //네비게이션
  $(".gnb > li").mouseover(function () {
    // $(".gnb > li > .mega").stop().slideDown("fast");
    $(this).find(".mega").stop().slideDown("fast");
    console.log("mouseover");
  });

  $(".gnb > li").mouseout(function () {
    // $(".gnb > li > .mega").stop().slideUp("fast");
    $(this).find(".mega").stop().slideUp("fast");
    console.log("mouseout");
  });

  // 배너 슬라이드
  (function initHeroSlider(){
    var $root = $('.slide');

    // 트랙 자동 생성: .frame들을 감싸는 .slide-track 추가
    // 슬라이드 전체 영역 $root, .find('.slide-track') = 그 안에서 .slide-track 요소를 찾아라
    // .length = 찾은 요소 개수, === 0 = 아무것도 없으면 참(true) 
    // 슬라이드 안에 .slide-track이 없다면 실행한다는 조건문.
    if ($root.find('.slide-track').length === 0) {
      //$root 안에서 직계 자식 중 클래스가 .frame인 요소들을 선택.
      //슬라이드 영역 안에 .slide-track이 없다면, .frame 요소들을 전부 감싸서 <div class="slide-track">라는 트랙을 새로 만들어라.
      $root.children('.frame').wrapAll('<div class="slide-track"></div>');
    }

    var $track = $root.find('.slide-track'); // 움직이는 줄(트랙)
    var $items = $track.children('.frame'); // 트랙 안의 개별 슬라이드 아이템

    var slideMs    = 1000;   // 슬라이드 속도
    var intervalMs = 5000;  // 자동 재생 간격
    var timer      = null;  // 자동 재생 제어용 변수

    // css
    $track.css({
      display: 'flex',
      flexWrap: 'nowrap', // 줄바꿈 금지
      width: ($items.length * 100) + '%', // 총 너비 ,슬라이드 아이템 개수
      marginLeft: 0
    });
    $items.css({ flex: '0 0 40%' }); // 0 0 100% -> 0 0 40% 이미지 사이즈

    // 다음으로 한 장 이동
    function next(){
      if ($track.is(':animated')) return;
      $track.animate(
        { marginLeft: '-120%' }, // -100 -> 120
        slideMs,
        function(){
          // 첫 번째 카드 뒤로 보내고 위치 리셋
          $track.children('.frame').eq(0).appendTo($track);
          $track.css({ marginLeft: 0 });
        }
      );
    }

    // 자동재생
    function start(){ stop(); timer = setInterval(next, intervalMs); }
    function stop(){ if (timer){ clearInterval(timer); timer = null; } }

    // 호버 시 일시정지
    // $root.on('mouseenter', stop).on('mouseleave', start);

    start();
  })();

  // 베스트 셀러(왼쪽 사진)
  (function initBestImgSlider(){
    var $items = $('.best-img .best-box');
    var i = 0; // 처음엔 0 (첫 번째 이미지)
    var intervalMs = 4000; // 간격, intervalMs : 몇 밀리초마다 반복할지를 저장하는 변수

    $items.hide().eq(0).show(); //첫 번째 아이템만 보이게

    setInterval(function(){ //아래 코드를 intervalMs(3초)마다 반복
      $items.eq(i).fadeOut(1000);
      i++; //인덱스 1 증가 , 다음 이미지
      if(i >= $items.length) i = 0; //만약 인덱스가 전체 개수 이상이면 다시 0으로 리셋
                                    // 맨 끝까지 갔으면 다시 처음으로 돌아가서 무한 반복
      $items.eq(i).fadeIn(1000);
    }, intervalMs);
  })();
  
  // 베스트 셀러(오른쪽 사진)
  (function initBestsellerRight(){ // 즉시 실행 함수
  var $viewport = $('.best-img2');                 // 슬라이드 영역
  var $track    = $viewport.find('.group');        // 트랙
  var $items    = $track.children('.cor-box-size');// 아이템
  if (!$items.length) return;

  var slideMs    = 300;     // 슬라이드 속도
  var intervalMs = 4000;    // 자동 재생 간격
  var timer      = null;   //  자동 재생 관리용 변수

  // css
  $track.css({
    display: 'flex',
    flexWrap: 'nowrap',
    width: ($items.length * 100) + '%', // 아이템 수 * 100%
    marginLeft: 0
  });
  $items.css({ flex: '0 0 100%' }); // 한 화면에 1장

  // 다음장으로
  function next(){
    if ($track.is(':animated')) return;
    $track.animate(
      { marginLeft: '-100%' },         // 한 장 기준
      slideMs,
      function(){
        $track.children('.cor-box-size').eq(0).appendTo($track); // 
        $track.css({ marginLeft: 0 });                           // 
      }
    );
  }

  function start(){ stop(); timer = setInterval(next, intervalMs); }
  function stop(){ if (timer){ clearInterval(timer); timer = null; } }

 

  start();
})();

   $('.new-group').slick({
    slide:'div',
    slidesToShow: 3.3,       // 한 화면에 3.3개
    slidesToScroll: 1,      // 슬라이드가 이동할 때 한 번에 몇 개씩 넘어갈지
    infinite: false,       
    arrows: true,
    dots: false,
    speed: 300,            // 전환 속도
    autoplay: true,       // 자동으로 슬라이드가 넘어갈지 여부
    draggable:true,
  //   responsive: [
  //   { breakpoint: 1200, settings: { slidesToShow: 3 } },
  //   { breakpoint: 900,  settings: { slidesToShow: 2 } },
  //   { breakpoint: 600,  settings: { slidesToShow: 1 } }
  // ]
});



// 브랜드 스토리
(function initBrandingSlider(){
  var $items = $('.branding-slide .branding-box'); 
  var i = 0; // 처음엔 0 (첫 번째 이미지)
  var intervalMs = 4000; // 간격

  $items.hide().eq(0).show(); // 첫 번째 아이템만 보이게

  setInterval(function(){ // intervalMs마다 반복
    $items.eq(i).fadeOut(1000);
    i++; // 다음 인덱스로
    if(i >= $items.length) i = 0; // 마지막이면 다시 처음으로
    $items.eq(i).fadeIn(1000);
  }, intervalMs);
})();


});