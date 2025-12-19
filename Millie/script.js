// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Book card animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.book-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Button click handlers
document.querySelector('.btn-login')?.addEventListener('click', () => {
    alert('로그인 기능은 준비 중입니다.');
});

document.querySelector('.btn-primary')?.addEventListener('click', () => {
    alert('서비스 시작하기 기능은 준비 중입니다.');
});

document.querySelector('.btn-secondary')?.addEventListener('click', () => {
      document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  });
  
  // Banner Slider
  let currentSlide = 0;
  const slides = document.querySelectorAll('.banner-slide');
  const totalSlides = slides.length;
  let autoSlideInterval;
  
  function showSlide(index) {
      // 인덱스 범위 체크
      if (index < 0) {
          currentSlide = totalSlides - 1;
      } else if (index >= totalSlides) {
          currentSlide = 0;
      } else {
          currentSlide = index;
      }
      
      // 모든 슬라이드에서 active 클래스 제거
      slides.forEach((slide, i) => {
          if (i === currentSlide) {
              slide.classList.add('active');
          } else {
              slide.classList.remove('active');
          }
      });
  }
  
  function nextSlide() {
      showSlide(currentSlide + 1);
  }
  
  function prevSlide() {
      showSlide(currentSlide - 1);
  }
  
  function startAutoSlide() {
      autoSlideInterval = setInterval(() => {
          nextSlide();
      }, 7000); // 7초마다 자동 전환
  }
  
  function stopAutoSlide() {
      if (autoSlideInterval) {
          clearInterval(autoSlideInterval);
      }
  }
  
  // 화살표 버튼 이벤트 (모든 배너의 화살표 버튼에 적용)
  document.querySelectorAll('.banner-arrow-left').forEach(button => {
      button.addEventListener('click', () => {
          stopAutoSlide();
          prevSlide();
          startAutoSlide();
      });
  });
  
  document.querySelectorAll('.banner-arrow-right').forEach(button => {
      button.addEventListener('click', () => {
          stopAutoSlide();
          nextSlide();
          startAutoSlide();
      });
  });
  
  // 배너 컨테이너에 마우스 올리면 자동 슬라이드 일시 정지
  const bannerContainer = document.querySelector('.banner-container');
  if (bannerContainer) {
      bannerContainer.addEventListener('mouseenter', stopAutoSlide);
      bannerContainer.addEventListener('mouseleave', startAutoSlide);
  }
  
// 초기 슬라이드 설정 및 자동 슬라이드 시작
if (slides.length > 0) {
    showSlide(0);
    startAutoSlide();
}

// 밀리랭킹 카테고리 버튼 클릭 이벤트
const rankingCategoryButtons = document.querySelectorAll('.ranking-categories .category-btn');
const rankingContent = document.getElementById('rankingContent');
const rankingContentNovel = document.getElementById('rankingContentNovel');
const rankingContentBusiness = document.getElementById('rankingContentBusiness');
const rankingContentSelf = document.getElementById('rankingContentSelf');
const rankingContentPoetry = document.getElementById('rankingContentPoetry');
const rankingContentHumanities = document.getElementById('rankingContentHumanities');
const rankingContentHobby = document.getElementById('rankingContentHobby');
const rankingContentChildren = document.getElementById('rankingContentChildren');
const rankingContentMagazine = document.getElementById('rankingContentMagazine');
const rankingBanner = document.querySelector('.ranking-banner');
const rankingSmallBanners = document.querySelector('.ranking-small-banners');
const rankingArrow = document.getElementById('rankingArrow');

rankingCategoryButtons.forEach(button => {
    button.addEventListener('click', function() {
        // 밀리랭킹 섹션의 모든 버튼에서 active 클래스 제거
        rankingCategoryButtons.forEach(btn => btn.classList.remove('active'));
        // 클릭한 버튼에 active 클래스 추가
        this.classList.add('active');
        
        const category = this.getAttribute('data-category');
        
        // 모든 콘텐츠 숨기기
        if (rankingContent) rankingContent.style.display = 'none';
        if (rankingContentNovel) rankingContentNovel.style.display = 'none';
        if (rankingContentBusiness) rankingContentBusiness.style.display = 'none';
        if (rankingContentSelf) rankingContentSelf.style.display = 'none';
        if (rankingContentPoetry) rankingContentPoetry.style.display = 'none';
        if (rankingContentHumanities) rankingContentHumanities.style.display = 'none';
        if (rankingContentHobby) rankingContentHobby.style.display = 'none';
        if (rankingContentChildren) rankingContentChildren.style.display = 'none';
        if (rankingContentMagazine) rankingContentMagazine.style.display = 'none';
        
        // 오늘의 테마 탭 클릭 시 Arrow 숨김
        if (category === 'theme') {
            if (rankingBanner) rankingBanner.style.display = 'block';
            if (rankingSmallBanners) rankingSmallBanners.style.display = 'flex';
            if (rankingArrow) rankingArrow.style.display = 'none';
        }
        // 종합 탭 클릭 시 이미지 표시, 기존 배너 숨김, Arrow 표시
        else if (category === 'general') {
            if (rankingContent) rankingContent.style.display = 'block';
            if (rankingBanner) rankingBanner.style.display = 'none';
            if (rankingSmallBanners) rankingSmallBanners.style.display = 'none';
            if (rankingArrow) rankingArrow.style.display = 'block';
        } 
        // 소설 탭 클릭 시 소설 이미지 표시, 기존 배너 숨김, Arrow 표시
        else if (category === 'novel') {
            if (rankingContentNovel) rankingContentNovel.style.display = 'block';
            if (rankingBanner) rankingBanner.style.display = 'none';
            if (rankingSmallBanners) rankingSmallBanners.style.display = 'none';
            if (rankingArrow) rankingArrow.style.display = 'block';
        }
        // 경제/경영 탭 클릭 시 경제/경영 이미지 표시, 기존 배너 숨김, Arrow 표시
        else if (category === 'business') {
            if (rankingContentBusiness) rankingContentBusiness.style.display = 'block';
            if (rankingBanner) rankingBanner.style.display = 'none';
            if (rankingSmallBanners) rankingSmallBanners.style.display = 'none';
            if (rankingArrow) rankingArrow.style.display = 'block';
        }
        // 자기계발 탭 클릭 시 자기계발 이미지 표시, 기존 배너 숨김, Arrow 표시
        else if (category === 'self') {
            if (rankingContentSelf) rankingContentSelf.style.display = 'block';
            if (rankingBanner) rankingBanner.style.display = 'none';
            if (rankingSmallBanners) rankingSmallBanners.style.display = 'none';
            if (rankingArrow) rankingArrow.style.display = 'block';
        }
        // 시/에세이 탭 클릭 시 시/에세이 이미지 표시, 기존 배너 숨김, Arrow 표시
        else if (category === 'poetry') {
            if (rankingContentPoetry) rankingContentPoetry.style.display = 'block';
            if (rankingBanner) rankingBanner.style.display = 'none';
            if (rankingSmallBanners) rankingSmallBanners.style.display = 'none';
            if (rankingArrow) rankingArrow.style.display = 'block';
        }
        // 인문/교양 탭 클릭 시 인문/교양 이미지 표시, 기존 배너 숨김, Arrow 표시
        else if (category === 'humanities') {
            if (rankingContentHumanities) rankingContentHumanities.style.display = 'block';
            if (rankingBanner) rankingBanner.style.display = 'none';
            if (rankingSmallBanners) rankingSmallBanners.style.display = 'none';
            if (rankingArrow) rankingArrow.style.display = 'block';
        }
        // 취미/실용 탭 클릭 시 취미/실용 이미지 표시, 기존 배너 숨김, Arrow 표시
        else if (category === 'hobby') {
            if (rankingContentHobby) rankingContentHobby.style.display = 'block';
            if (rankingBanner) rankingBanner.style.display = 'none';
            if (rankingSmallBanners) rankingSmallBanners.style.display = 'none';
            if (rankingArrow) rankingArrow.style.display = 'block';
        }
        // 어린이/청소년 탭 클릭 시 어린이/청소년 이미지 표시, 기존 배너 숨김, Arrow 표시
        else if (category === 'children') {
            if (rankingContentChildren) rankingContentChildren.style.display = 'block';
            if (rankingBanner) rankingBanner.style.display = 'none';
            if (rankingSmallBanners) rankingSmallBanners.style.display = 'none';
            if (rankingArrow) rankingArrow.style.display = 'block';
        }
        // 매거진 탭 클릭 시 매거진 이미지 표시, 기존 배너 숨김, Arrow 표시
        else if (category === 'magazine') {
            if (rankingContentMagazine) rankingContentMagazine.style.display = 'block';
            if (rankingBanner) rankingBanner.style.display = 'none';
            if (rankingSmallBanners) rankingSmallBanners.style.display = 'none';
            if (rankingArrow) rankingArrow.style.display = 'block';
        }
    });
});
  
  // Recommendation book click handler
function handleBook1Click() {
    const content = document.getElementById('recommendationContent');
    const mainImage = document.getElementById('recommendationMainImage');
    const book1 = document.getElementById('book1');
    const book1Original = document.getElementById('book1-original');
    const book2 = document.getElementById('book2');
    const book2Middle = document.getElementById('book2-middle');
    const book3 = document.getElementById('book3');
    const booksLeft = document.getElementById('recommendationBooksLeft');
    const booksMiddle = document.getElementById('recommendationBooksMiddle');
    const booksMiddle2 = document.getElementById('recommendationBooksMiddle2');
    const bookLeft = document.getElementById('bookLeft');
    
    // 궤도 내용으로 변경
    mainImage.src = 'Image/501290b715e24d518f6fe9bc560b21bb.webp';
    mainImage.alt = '궤도';
    
    content.innerHTML = `
        <h3 class="recommendation-title">궤도</h3>
        <p class="recommendation-author">서맨사 하비</p>
        <div class="recommendation-rating">
            <img src="Image/Star 1.png" alt="별점" class="star-icon">
            <span class="rating-text">3.5<span class="rating-date">(2025.11.20)</span></span>
        </div>
        <div class="recommendation-quote-group">
            <p class="recommendation-quote">"24시간 만에 세상을 16번 봤다.<br>그제야 알았다, 내가 몰랐던 것들을."</p>
        </div>
        <p class="recommendation-description">국제우주정거장의 6명. 24시간, 16번의 궤도.<br>창밖의 태풍, 가족의 부고, 그리고 질문들 지구<br>없이 우리는 무엇인가?</p>
    `;
    
    // 혼모노를 book22.png로 변경하고 왼쪽에 표시
    bookLeft.src = 'Image/book22.png';
    bookLeft.alt = '혼모노';
    booksLeft.style.display = 'block';
    
    // img1.png를 숨기기 (가운데와 원래 위치 모두)
    if (book1) {
        book1.style.display = 'none';
    }
    if (booksMiddle) {
        booksMiddle.style.display = 'none';
    }
    if (book1Original) {
        book1Original.style.display = 'none';
    }
    
    // img2.png를 원래 위치에 표시하고 중간 컨테이너는 숨기기
    if (book2) {
        book2.style.display = 'block';
    }
    if (book2Middle) {
        book2Middle.style.display = 'none';
    }
    if (booksMiddle2) {
        booksMiddle2.style.display = 'none';
    }
    
    // 궤도 내용일 때 마지막 이미지를 img3.png로 변경하고 표시
    if (book3) {
        book3.src = 'Image/img3.png';
        book3.alt = '책 3';
        book3.style.display = 'block';
    }
}

document.getElementById('book1')?.addEventListener('click', handleBook1Click);
document.getElementById('book1-original')?.addEventListener('click', handleBook1Click);

// book22.png 클릭 시 혼모노 내용으로 복원
document.getElementById('bookLeft')?.addEventListener('click', function() {
    const content = document.getElementById('recommendationContent');
    const mainImage = document.getElementById('recommendationMainImage');
    const book1 = document.getElementById('book1');
    const book1Original = document.getElementById('book1-original');
    const book2 = document.getElementById('book2');
    const book2Middle = document.getElementById('book2-middle');
    const book3 = document.getElementById('book3');
    const booksLeft = document.getElementById('recommendationBooksLeft');
    const booksMiddle = document.getElementById('recommendationBooksMiddle');
    const booksMiddle2 = document.getElementById('recommendationBooksMiddle2');
    
    // 혼모노 내용으로 복원
    mainImage.src = 'Image/ab86ed4d9c8145a2a8b29e3eb63796ff.webp';
    mainImage.alt = '추천 도서';
    
    content.innerHTML = `
        <h3 class="recommendation-title">혼모노</h3>
        <p class="recommendation-author">성해나</p>
        <div class="recommendation-rating">
            <img src="Image/Star 1.png" alt="별점" class="star-icon">
            <span class="rating-text">3.5<span class="rating-date">(2025.09.29)</span></span>
        </div>
        <div class="recommendation-quote-group">
            <p class="recommendation-quote">논란의 감독님 팬이라는 게 죄인가요?<br>저도 모르겠어요.. 이게 사랑인지 공범인지.</p>
            <p class="recommendation-chapter">챕터 - 길티 클럽: 호랑이 만지기</p>
        </div>
        <p class="recommendation-description">천재 감독 '김곤'의 골수팬 '나'. 폐쇄형 팬클럽 '길티 클럽'에서 26명만이 그를 사랑할 수 있다. 엄격한 규정 아래, 오직 애정만 허락된 이곳에서</p>
    `;
    
    // 왼쪽 book22.png 숨기기
    booksLeft.style.display = 'none';
    
    // 모든 중간 컨테이너 숨기기
    if (booksMiddle) {
        booksMiddle.style.display = 'none';
    }
    if (booksMiddle2) {
        booksMiddle2.style.display = 'none';
    }
    if (book1) {
        book1.style.display = 'none';
    }
    if (book2Middle) {
        book2Middle.style.display = 'none';
    }
    
    // 모든 원래 위치 이미지를 표시
    if (book1Original) {
        book1Original.style.display = 'block';
    }
    if (book2) {
        book2.style.display = 'block';
    }
    if (book3) {
        book3.src = 'Image/img3.png';
        book3.alt = '책 3';
        book3.style.display = 'block';
    }
});

// img2.png 클릭 시 종착역 내용으로 변경
function handleBook2Click() {
    const content = document.getElementById('recommendationContent');
    const mainImage = document.getElementById('recommendationMainImage');
    const book1 = document.getElementById('book1');
    const book1Original = document.getElementById('book1-original');
    const book2 = document.getElementById('book2');
    const book3 = document.getElementById('book3');
    const booksLeft = document.getElementById('recommendationBooksLeft');
    const booksMiddle = document.getElementById('recommendationBooksMiddle');
    const bookLeft = document.getElementById('bookLeft');
    
    // 종착역 내용으로 변경
    mainImage.src = 'Image/9791194655190.jpg';
    mainImage.alt = '종착역에서 기다리는 너에게';
    
    content.innerHTML = `
        <h3 class="recommendation-title">종착역에서 기다리는 너에게</h3>
        <p class="recommendation-author">이누준</p>
        <div class="recommendation-rating">
            <img src="Image/Star 1.png" alt="별점" class="star-icon">
            <span class="rating-text">3.5<span class="rating-date">(2025.11.20)</span></span>
        </div>
        <div class="recommendation-quote-group">
            <p class="recommendation-quote">"간절히 만나고 싶은 사람을 떠올리며 개표구를<br>나서면, 그 사람이 당신을 기다리고 있다."</p>
        </div>
        <p class="recommendation-description">간절히 만나고 싶은 사람을 떠올리며 개표구를 나<br>서면, 그 사람이 당신을 기다리고 있다." 네 사람이<br>추억 열차를 타고 다시 만난 사람은 누구였을까?</p>
    `;
    
    // book22.png를 왼쪽에 표시
    bookLeft.src = 'Image/book22.png';
    bookLeft.alt = '혼모노';
    booksLeft.style.display = 'block';
    
    // img1.png를 가운데에 표시 (book22.png 다음, 종착역 내용 전)
    if (book1) {
        book1.style.display = 'block';
    }
    if (booksMiddle) {
        booksMiddle.style.display = 'block';
    }
    if (book1Original) {
        book1Original.style.display = 'none';
    }
    
    // img2.png 숨기기 (원래 위치와 중간 컨테이너 모두)
    if (book2) {
        book2.style.display = 'none';
    }
    const book2Middle = document.getElementById('book2-middle');
    if (book2Middle) {
        book2Middle.style.display = 'none';
    }
    const booksMiddle2 = document.getElementById('recommendationBooksMiddle2');
    if (booksMiddle2) {
        booksMiddle2.style.display = 'none';
    }
    
    // 마지막 이미지를 img3.png로 유지하고 표시
    if (book3) {
        book3.src = 'Image/img3.png';
        book3.alt = '책 3';
        book3.style.display = 'block';
    }
}

document.getElementById('book2')?.addEventListener('click', handleBook2Click);
document.getElementById('book2-middle')?.addEventListener('click', handleBook2Click);

// img3.png 클릭 시 내가 없던 어느밤에 내용으로 변경
document.getElementById('book3')?.addEventListener('click', function() {
    const content = document.getElementById('recommendationContent');
    const mainImage = document.getElementById('recommendationMainImage');
    const book1 = document.getElementById('book1');
    const book1Original = document.getElementById('book1-original');
    const book2 = document.getElementById('book2');
    const book2Middle = document.getElementById('book2-middle');
    const book3 = document.getElementById('book3');
    const booksLeft = document.getElementById('recommendationBooksLeft');
    const booksMiddle = document.getElementById('recommendationBooksMiddle');
    const booksMiddle2 = document.getElementById('recommendationBooksMiddle2');
    const bookLeft = document.getElementById('bookLeft');
    
    // 내가 없던 어느밤에 내용으로 변경
    mainImage.src = 'Image/556b164546e3433493e0ca9bc69dfc53.webp';
    mainImage.alt = '내가 없던 어느밤에';
    
    content.innerHTML = `
        <h3 class="recommendation-title">내가 없던 어느밤에</h3>
        <p class="recommendation-author">이꽃님</p>
        <div class="recommendation-rating">
            <img src="Image/Star 1.png" alt="별점" class="star-icon">
            <span class="rating-text">신작 공개예정<span class="rating-date">(2026.01.06)</span></span>
        </div>
        <div class="recommendation-quote-group">
            <p class="recommendation-quote">"누군가 나를 부르고 있어.<br>아득하고 먼, 그 목소리를 따라갔어."</p>
        </div>
        <p class="recommendation-description">3년 전 문을 닫은 놀이공원 판타지아. 만 열일곱<br>소녀의 실종을 계기로 10년 전 묻어둔 비밀이 드<br>러나기 시작한다</p>
    `;
    
    // book22.png를 왼쪽에 표시
    bookLeft.src = 'Image/book22.png';
    bookLeft.alt = '혼모노';
    booksLeft.style.display = 'block';
    
    // img1.png를 가운데에 표시 (book22.png 다음)
    if (book1) {
        book1.style.display = 'block';
    }
    if (booksMiddle) {
        booksMiddle.style.display = 'block';
    }
    if (book1Original) {
        book1Original.style.display = 'none';
    }
    
    // img2.png를 가운데에 표시 (img1.png 다음)
    if (book2Middle) {
        book2Middle.style.display = 'block';
    }
    if (booksMiddle2) {
        booksMiddle2.style.display = 'block';
    }
    if (book2) {
        book2.style.display = 'none';
    }
    
    // img3.png 숨기기
    book3.style.display = 'none';
});

