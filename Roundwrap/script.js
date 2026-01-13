// 배너 슬라이더
document.addEventListener('DOMContentLoaded', function() {
    const bannerSlides = document.querySelectorAll('.banner-slide');
    let currentSlide = 0;

    // 슬라이드 표시 함수
    function showSlide(index) {
        bannerSlides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    // 다음 슬라이드
    function nextSlide() {
        currentSlide = (currentSlide + 1) % bannerSlides.length;
        showSlide(currentSlide);
    }

    // 이전 슬라이드
    function prevSlide() {
        currentSlide = (currentSlide - 1 + bannerSlides.length) % bannerSlides.length;
        showSlide(currentSlide);
    }

    // 화살표 클릭 이벤트
    const prevArrow = document.getElementById('prevArrow');
    const nextArrow = document.getElementById('nextArrow');

    if (prevArrow) {
        prevArrow.addEventListener('click', function(e) {
            e.stopPropagation();
            prevSlide();
        });
    }

    if (nextArrow) {
        nextArrow.addEventListener('click', function(e) {
            e.stopPropagation();
            nextSlide();
        });
    }

    // 자동 슬라이드 (5초마다)
    setInterval(nextSlide, 5000);

    // 초기 슬라이드 표시
    showSlide(0);

    // 제품 라인 버튼 클릭 이벤트
    const lineButtons = document.querySelectorAll('.line-btn');
    const productCardsContainer = document.querySelector('.product-cards');
    
    // 제품 데이터
    const productData = {
        '1025 독도': [
            {
                image: 'image/img1.png',
                title: '1025 독도 토너 대용량 500ml',
                description: '민감 피부도 걱정없이 저자극 결 케어'
            },
            {
                image: 'image/img2.png',
                title: '1025 독도 토너 + 독도 로션 200ml 2종 세트',
                description: '민감 피부 맞춤 저자극 로션 + 토너'
            },
            {
                image: 'image/img3.png',
                title: '1025 독도 클렌저 150ml',
                description: '초미세먼지까지 깨끗하게 클렌징'
            }
        ],
        '자작나무 수분': [
            {
                image: 'image/img6.png',
                title: '자작나무 수분 선크림 50ml',
                description: '지친 피부를 충전하는 수분라인 촉촉하고 오래 유지되는'
            },
            {
                image: 'image/img7.png',
                title: '자작나무 수분 클렌저 150ml',
                description: '촉촉 탱클 수분 젤 클렌저'
            },
            {
                image: 'image/img8.png',
                title: '자작나무 수분 패드 (80매입) 2개 세트',
                description: '수분가득 자작 패드 강력한 수분 한장'
            }
        ],
        '소나무 진정 시카': [
            {
                image: 'image/img10.png',
                title: '소나무 진정 시카 샴푸 400ml',
                description: '두피 고민 집압 소나무 샴푸'
            },
            {
                image: 'image/img11.png',
                title: '소나무 진정 시카 마스크 (10매)',
                description: '바쁜 일상 속 자극으로 지친 피부에 휴식을'
            },
            {
                image: 'image/img9.png',
                title: '소나무 시카 딥 포어 클렌징 오일 200ml',
                description: '트러블 원인 싹-! 소나무 클렌징 오일'
            }
        ]
    };
    
    // 제품 카드 업데이트 함수
    function updateProductCards(lineName) {
        const products = productData[lineName] || productData['1025 독도'];
        const cards = productCardsContainer.querySelectorAll('.product-card');
        
        products.forEach((product, index) => {
            if (cards[index]) {
                const img = cards[index].querySelector('.product-image-wrapper img');
                const title = cards[index].querySelector('.product-title');
                const description = cards[index].querySelector('.product-description');
                
                if (img) img.src = product.image;
                if (img) img.alt = product.title;
                if (title) title.textContent = product.title;
                if (description) description.textContent = product.description;
            }
        });
    }
    
    lineButtons.forEach(button => {
        button.addEventListener('click', function() {
            lineButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const lineName = this.textContent.trim();
            updateProductCards(lineName);
        });
    });

    // 제품 카드 호버 효과
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // 매거진 아이템 클릭 이벤트
    const magazineItems = document.querySelectorAll('.magazine-item');
    magazineItems.forEach(item => {
        item.addEventListener('click', function() {
            // 매거진 상세 페이지로 이동하는 로직 추가 가능
            console.log('Magazine item clicked');
        });
    });

    // 스크롤 시 헤더 스타일 변경 (배경 투명 유지)
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.backdropFilter = 'none';
        }
    });

    // 부드러운 스크롤
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

    // STORY 버튼 호버 시 화살표 이미지 변경
    const storyBtn = document.querySelector('.story-btn');
    const storyArrow = document.querySelector('.story-arrow');
    
    if (storyBtn && storyArrow) {
        storyBtn.addEventListener('mouseenter', function() {
            storyArrow.src = 'image/ArrowW.png';
        });
        
        storyBtn.addEventListener('mouseleave', function() {
            storyArrow.src = 'image/Arrow.png';
        });
    }
});

