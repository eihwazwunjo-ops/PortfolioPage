// 샵 페이지 스크립트
document.addEventListener('DOMContentLoaded', function() {
    // 제품 카드와 타이틀 요소
    const productCards = document.querySelectorAll('.shop-product-card');
    const shopTitle = document.getElementById('shopTitle');
    const pageNumbersContainer = document.querySelector('.page-numbers');

    let currentPage = 1;
    let currentFilter = '전체';
    const itemsPerPage = 15;
    let filteredProducts = [];

    // 페이지네이션 업데이트 함수
    function updatePagination() {
        const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

        // 페이지 번호 버튼 생성
        pageNumbersContainer.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = 'page-number' + (i === currentPage ? ' active' : '');
            pageBtn.textContent = i;
            pageBtn.addEventListener('click', function() {
                currentPage = i;
                showPage(currentPage);
            });
            pageNumbersContainer.appendChild(pageBtn);
        }

        // 페이지 번호가 없으면 기본 1페이지만 표시
        if (totalPages === 0) {
            const pageBtn = document.createElement('button');
            pageBtn.className = 'page-number active';
            pageBtn.textContent = '1';
            pageNumbersContainer.appendChild(pageBtn);
        }
    }

    // 페이지 표시 함수
    function showPage(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        // 모든 제품 숨기기
        productCards.forEach(card => {
            card.style.display = 'none';
        });

        // 현재 페이지의 제품만 표시
        filteredProducts.slice(startIndex, endIndex).forEach(card => {
            card.style.display = 'block';
        });

        // 페이지 번호 활성화 업데이트
        const pageNumbers = document.querySelectorAll('.page-number');
        pageNumbers.forEach((btn, index) => {
            btn.classList.toggle('active', index + 1 === page);
        });

        // 스크롤 맨 위로
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 필터 적용 함수
    function applyFilter(filterType) {
        currentFilter = filterType;
        currentPage = 1;

        // 필터링된 제품 찾기
        filteredProducts = Array.from(productCards).filter(card => {
            const category = card.getAttribute('data-category');
            const isNew = card.getAttribute('data-new') === 'true';
            const isBest = card.getAttribute('data-best') === 'true';

            if (filterType === '전체') {
                return true;
            } else if (filterType === '신제품') {
                return isNew === true;
            } else if (filterType === '베스트') {
                return isBest === true;
            } else {
                return category === filterType;
            }
        });

        // 페이지네이션 업데이트 후 첫 페이지 표시
        updatePagination();
        showPage(1);
    }

    // 필터 버튼 클릭 이벤트
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filterType = this.textContent.trim();

            // 타이틀 업데이트
            if (filterType === '전체') {
                if (shopTitle) shopTitle.textContent = 'ALL';
            } else {
                if (shopTitle) shopTitle.textContent = filterType;
            }

            // 필터 적용
            applyFilter(filterType);
        });
    });

    // 정렬 선택 이벤트
    const sortSelect = document.querySelector('.sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const sortType = this.value;
            console.log('Sort:', sortType);
            // 여기에 실제 정렬 로직 추가
        });
    }

    // 첫 페이지 버튼
    const firstPageBtn = document.querySelector('.first-page');
    if (firstPageBtn) {
        firstPageBtn.addEventListener('click', function() {
            currentPage = 1;
            showPage(currentPage);
        });
    }

    // 이전 페이지 버튼
    const prevPageBtn = document.querySelector('.prev-page');
    if (prevPageBtn) {
        prevPageBtn.addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                showPage(currentPage);
            }
        });
    }

    // 다음 페이지 버튼
    const nextPageBtn = document.querySelector('.next-page');
    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', function() {
            const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                showPage(currentPage);
            }
        });
    }

    // 마지막 페이지 버튼
    const lastPageBtn = document.querySelector('.last-page');
    if (lastPageBtn) {
        lastPageBtn.addEventListener('click', function() {
            const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
            currentPage = totalPages;
            showPage(currentPage);
        });
    }

    // 초기 로드: 전체 제품 표시
    applyFilter('전체');

    // 제품 카드 클릭 이벤트 (필터링과 별도로 처리)
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // 필터 버튼 클릭과 충돌 방지
            if (e.target.closest('.filter-btn')) {
                return;
            }
            // 제품 상세 페이지로 이동하는 로직 추가 가능
            console.log('Product clicked');
        });
    });

    // 스크롤 시 헤더 스타일 변경
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
});

