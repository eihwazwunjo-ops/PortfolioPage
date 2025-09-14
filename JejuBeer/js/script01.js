$(document).ready(function(){
    $(".menu-area").mouseenter(function () {
    $(".submenu").stop().slideDown("fast");
    $(".bg").stop().slideDown("fast");
  });

  $(".menu-area").mouseleave(function () {
    $(".submenu").stop().slideUp("fast");
    $(".bg").stop().slideUp("fast");
  });

  $('body').addClass('page-loaded');

  $(window).on('scroll',function(){
		let scrollTop = $(window).scrollTop();
		console.log(scrollTop);
		if (scrollTop >= 100){
			$('header').css({
			backgroundColor: '#b0fbff'
		});
		}else if (scrollTop < 100){
			$('header').css({
			backgroundColor: '#fff'
		});
		}
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


var PRODUCTS = {
  "제주위트": {
    slug: "wit",
    title: "제주위트",
    desc: "제주 감귤껍질의 상큼함과 섬세한 꽃향, 입안 가득 부드럽게 퍼지는 시트러스향이 만나 산뜻한 첫 잔을 선사하는 밀맥주입니다.",
    img: "images/jeju-white.png",
    specs: { type: "WIT ALE", alc: "5.3", ibu: "21" },
    ingredients: "정제수, 보리맥아, 홉, 제주산 감귤껍질, 코리앤더, 건조오렌지껍질 등",
    pairing: "각종 바베큐 및 스테이크류, 기름진 생선회, 파스타 등의 국수류에 더욱 잘 어울립니다.",
    colors: {
      heroBg: "linear-gradient(180deg,#00c9cf 0%,#0fd4db 100%)",
      chipBg: "#ED8268",
      chipText: "#ffffff"
    },
    chips: ["#적당히쓴맛", "#도수 조금높은편", "#달콤한 향"]
  },
  "제주펠롱": {
    slug: "pellong",
    title: "제주펠롱",
    desc: "‘펠롱’은 반짝이라는 의미의 제주 방언입니다. 다양한 식물들이 조화를 이루어 제주 곶자왈을 만드는 것처럼 다양하고 개성있는 홉을 블렌딩하여 반짝이는 시트러스 향을 느낄 수 있는 제주스러운 페일 에일입니다.",
    img: "images/jeju-pale.png",
    specs: { type: "PALE ALE", alc: "5.5", ibu: "34" },
    ingredients: "정제수, 보리맥아, 홉, 효모  등",
    pairing: "흑돼지 두루치기, 생선조림, 회무침 등의 매콤하거나 차가운 음식과 더욱 잘 어울립니다.",
    colors: {
      heroBg: "linear-gradient(180deg,#9ED0BF 0%,#6FCCAC 100%)",
      chipBg: "#EA5C87",
      chipText: "#ffffff"
    },
    chips: ["#홉향 가득", "#쓴맛강함", "#시러스트향"]
  },
  "제주거멍": {
    slug: "geomung",
    title: "제주거멍",
    desc: "‘거멍’은 '검다'라는 의미의 제주 방언입니다. 제주 흑보리와 초콜릿 밀을 사용하여 제주의 여름밤을 떠올리게 하는 경쾌한 흑맥주입니다.",
    img: "images/jeju-dark.png",
    specs: { type: "DARK ALE", alc: "4.3", ibu: "16" },
    ingredients: "정제수, 보리맥아, 초콜릿 밀 맥아, 제주 흑보리, 홉, 효모 등",
    pairing: "스테이크, 로스트 비프, 족발 등의 풍미가 짙은 고기 요리와 잘 어울립니다.",
    colors: {
      heroBg: "linear-gradient(180deg,#67645F 0%,#4B4945 100%)",
      chipBg: "#5BC5C5",
      chipText: "#ffffff"
    },
    chips: ["#흑맥주", "#부드러운맛", "#가벼움"]
  },
  "제주누보": {
    slug: "nouveau",
    title: "제주누보",
    desc: "‘누보’의 뜻은 New&Fresh 를 뜻하는 프랑스어입니다.제주누보는 프리미엄 논알콜로 유럽/미국산 프리미엄 맥주 원료를 사용하여 깊고 진한 맛을 살렸습니다.",
    img: "images/jeju-nubo.png",
    specs: { type: "Non-alcoholic", alc: "1% 미만", ibu: "48" },
    ingredients: "정제수, 보리맥아, 호프펠렛, 감귤피, 효모 등",
    pairing: "감자칩, 팝콘과 같은 가벼운 간식, 멕시칸/타이푸드와 같이 매콤한 음식과 잘 어울립니다.",
    colors: {
      heroBg: "linear-gradient(180deg,#9CD9DD 0%,#7FCBD0 100%)",
      chipBg: "#FB805B",
      chipText: "#ffffff"
    },
    chips: ["#논알콜 맥주", "#상큼함", "#낮은 칼로리"]
  },
  "누보망고": {
    slug: "nubomango",
    title: "누보망고",
    desc: "‘누보’의 뜻은 New&Fresh 를 뜻하는 프랑스어입니다.제주누보망고는 프리미엄 논알콜로 부드럽고 달콤상큼한 망고의 맛과 청량감을 느낄 수 있습니다.",
    img: "images/nubo-mango.png",
    specs: { type: "Non-alcoholic", alc: "1% 미만", ibu: "14" },
    ingredients: "정제수, 보리맥아,밀맥아, 망고농축액,향료(망고) 등",
    pairing: "샐러드, 가벼운 간식, 해산물, 치즈 플래터, 타코, 팝콘 등과 잘 어울립니다.",
    colors: {
      heroBg: "linear-gradient(180deg,#FDE384 0%,#EAD072 100%)",
      chipBg: "#FEA412",
      chipText: "#ffffff"
    },
    chips: ["#논알콜", "#달콤상큼", "#청량감"]
  },
  "돌코롬": {
    slug: "dolchorom",
    title: "돌코롬",
    desc: "‘돌코롬’은 ‘달콤’의미의 제주 방언이며,달콤한 망고와 청량한 라거의 만남으로 트로피칼한 리프레시함을 전합니다.",
    img: "images/dol-chorom.png",
    specs: { type: "LIGHT LAGER", alc: "3.5", ibu: "9" },
    ingredients: "정제수, 보리맥아, 망고농축액,향료(망고), 호프펠렛 등",
    pairing: "샐러드, 가벼운 간식, 해산물, 치즈 플래터, 타코, 팝콘 등과 잘 어울립니다.",
    colors: {
      heroBg: "linear-gradient(180deg,#D3F27E 0%,#BFDE6A 100%)",
      chipBg: "#FEA412",
      chipText: "#ffffff"
    },
    chips: ["#달달함", "#라거", "#트로피칼"]
  },
  "제주라거": {
    slug: "lager",
    title: "제주라거",
    desc: "맥주의 기본 4대 원료를 사용하는 독일 맥주 순수령 원칙을 지킨 제주 하얀 파도의 시원함과 부드러움을 닮은 올 몰트 라거입니다.",
    img: "images/jeju-lager.png",
    specs: { type: "ALL MALT LAGER", alc: "5.6", ibu: "16" },
    ingredients: "정제수, 보리맥아, 홉, 효모",
    pairing: "맥주와 즐기는 모든 음식, 안주와 잘 어울리고,기름기 있는 짭짤한 음식들과 더욱 잘 어울리는 청량한 맛의 라거입니다.",
    colors: {
      heroBg: "linear-gradient(180deg,#1E50B4 0%,#183F8D 100%)",
      chipBg: "#30ACC2",
      chipText: "#ffffff"
    },
    chips: ["#시원함", "#부드러움", "#몰트라거"]
  },
  "제주맥주": {
    slug: "brewery",
    title: "제주맥주",
    desc: "배럴 시리즈는 맥주 미식 문화의 저변을 넓히기 위해 각자의 영역에서 철학을 가진 브랜드와 함께 배럴 숙성을 거쳐 출시되는 한정 맥주입니다.",
    img: "images/jeju-brewery.png",
    specs: { type: "IMPERIAL STOUT", alc: "1.3", ibu: "32" },
    ingredients: "정제수, 보리맥아, 밀맥아 등",
    pairing: "초콜릿, 아이스크림, 케이크 등 달달한 음식이 잘 어울립니다. ",
    colors: {
      heroBg: "linear-gradient(180deg,#464646 0%,#373636 100%)",
      chipBg: "#A1DFD9",
      chipText: "#333333"
    },
    chips: ["#시즌한정", "#배럴시리즈", "#숙성"]
  }
};

// 공용: 제품 렌더링 함수
function renderProduct(p) {
  if (!p) return; // p === null || p === undefined || p === false || p === 0 || p === "" 
  // 제목/설명
  $('.beer-hero_title').text(p.title);
  $('.beer-hero_desc').html(p.desc.replace(/\n/g,'<br>'));
  // 이미지
  $('.beer-hero_visual img').attr({ src: p.img, alt: p.title });
  // 스펙
  var $table = $('.specs-table');
  $table.html(
    '<div><dt>TYPE</dt><dd>: ' + p.specs.type + '</dd></div>' +
    '<div><dt>ALC(%)</dt><dd>: ' + p.specs.alc + '</dd></div>' +
    '<div><dt>IBU</dt><dd>: ' + p.specs.ibu + '</dd></div>'
  );
  // 상세
  $('.specs-detail').html(
    '<p><strong>재료</strong> : ' + p.ingredients + '</p>' +
    '<p><strong>푸드페어링</strong> : ' + p.pairing + '</p>'
  );

  // 
  $('body').removeClass('page-loaded');
  setTimeout(function(){ $('body').addClass('page-loaded'); }, 20);
}

// 클릭 > 데이터 교체 + 주소 갱신
$(document).on('click', '.others-grid .product-card', function(e){
  e.preventDefault();
  var name = $(this).find('img').attr('alt'); // 제주위트 등
  var p = PRODUCTS[name]; // Object
  if (!p) return;
  renderProduct(p);
  // 주소에 쿼리 파라미터 추가
  if (history.pushState) {
    var url = new URL(window.location.href);
    url.searchParams.set('p', p.slug);
    history.pushState({slug: p.slug}, '', url.toString());
  }
});

// 뒤로가기/앞으로가기
window.addEventListener('popstate', function(){
  var slug = (history.state && history.state.slug) || new URL(location.href).searchParams.get('p');
  if (!slug) return;
  //
  var target = null;
  $.each(PRODUCTS, function(k, v){ if (v.slug === slug) { target = v; return false; }});
  renderProduct(target);
});

// 
$(function(){
  var slug = new URL(window.location.href).searchParams.get('p');
  if (slug) {
    var target = null;
    $.each(PRODUCTS, function(k, v){ if (v.slug === slug) { target = v; return false; }});
    if (target) renderProduct(target);
  }
});

function renderProduct(p) {
  if (!p) return;

  // 제목/설명
  $('.beer-hero_title').text(p.title);
  $('.beer-hero_desc').html(p.desc.replace(/\n/g,'<br>'));
  $('.beer-hero_visual img').attr({ src: p.img, alt: p.title });

  // 스펙
  $('.specs-table').html(
    '<div><dt>TYPE</dt><dd>: ' + p.specs.type + '</dd></div>' +
    '<div><dt>ALC(%)</dt><dd>: ' + p.specs.alc + '</dd></div>' +
    '<div><dt>IBU</dt><dd>: ' + p.specs.ibu + '</dd></div>'
  );
  $('.specs-detail').html(
    '<p><strong>재료</strong> : ' + p.ingredients + '</p>' +
    '<p><strong>푸드페어링</strong> : ' + p.pairing + '</p>'
  );

  //chips 내용 교체
  if (p.chips && p.chips.length) {
    var chipHTML = p.chips.map(function(text){
      return '<li>'+text+'</li>';
    }).join('');
    $('.beer-chips').html(chipHTML);

    // chip 색상 적용 (색상 데이터가 있으면)
    if (p.colors) {
      $('.beer-chips li').css({
        background: p.colors.chipBg,
        color: p.colors.chipText
      });
    }
  }


  // 배경색/칩 색상 변경
  if (p.colors) {
    $('.beer-hero').css('background', p.colors.heroBg);
    $('.beer-chips li')
      .css({
        background: p.colors.chipBg,
        color: p.colors.chipText
      });
  }

  // 
  $('body').removeClass('page-loaded');
  setTimeout(function(){ $('body').addClass('page-loaded'); }, 20);
}

//슬라이더 설정 
var $viewport = $('.others-viewport');
var $track    = $('.others-grid');
var $cards    = $track.find('.product-card');

function cardStep(){              // 한 칸 이동폭(마진 포함)
  return $cards.first().outerWidth(true); // = 280 + 24
}
function maxIndex(){              // 끝으로 갈 수 있는 최대 인덱스
  var visCount = Math.max(1, Math.floor($viewport.innerWidth() / cardStep()));
  return Math.max(0, $cards.length - visCount);
}

var current = 0;

function goTo(index){
  current = Math.max(0, Math.min(index, maxIndex()));         // 범위 고정
  var x = -(current * cardStep());                             // 왼쪽(-)으로 이동
  $track.css('transform', 'translateX(' + x + 'px)');
  updateNavState();
}

function updateNavState(){
  $('.others-nav.prev').prop('disabled', current <= 0);
  $('.others-nav.next').prop('disabled', current >= maxIndex());
}

// 좌/우 버튼
$('.others-nav.prev').on('click', function(){ goTo(current - 1); });
$('.others-nav.next').on('click', function(){ goTo(current + 1); });

// 리사이즈 시 최대 인덱스 재계산
$(window).on('resize', function(){ goTo(current); });

// 초기 상태
goTo(0);


});