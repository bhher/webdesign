$(document).ready(function(){
    // ============================================
    // 슬라이더 초기화
    // ============================================
    let slider = $('.bxslider').bxSlider({
        auto: true,
    });

    $('.slider-basic').slick({
        autoplay: true,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // ============================================
    // 모바일 메뉴 토글 기능
    // ============================================
    var $mobileToggle = $('.mobile-menu-toggle');
    var $navigation = $('.main-navigation');
    var $body = $('body');

    // 메뉴 열기 함수
    function openMobileMenu() {
        $mobileToggle.addClass('active');
        $mobileToggle[0].setAttribute('aria-expanded', 'true');
        $navigation.addClass('active');
        $body.css('overflow', 'hidden');
    }

    // 메뉴 닫기 함수
    function closeMobileMenu() {
        $mobileToggle.removeClass('active');
        if ($mobileToggle[0]) {
            $mobileToggle[0].setAttribute('aria-expanded', 'false');
        }
        $navigation.removeClass('active');
        $body.css('overflow', '');
        
        // 모든 아코디언 메뉴 닫기
        $('.menu-item').removeClass('active');
        $('.submenu-toggle').each(function() {
            this.setAttribute('aria-expanded', 'false');
        });
    }

    // 햄버거 버튼 클릭 이벤트
    $mobileToggle.off('click').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        var $this = $(this);
        var isActive = $this.hasClass('active');
        
        if (isActive) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
        
        // 이벤트 전파 완전 차단
        return false;
    });


    // ESC 키로 메뉴 닫기
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' && $mobileToggle.hasClass('active')) {
            closeMobileMenu();
        }
    });

    // ============================================
    // 모바일 아코디언 메뉴 기능
    // ============================================
    $('.submenu-toggle').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        var $toggle = $(this);
        var toggleEl = this;
        var $menuItem = $toggle.closest('.menu-item');
        var isExpanded = toggleEl.getAttribute('aria-expanded') === 'true';
        
        // 다른 메뉴 아이템들 닫기 (하나만 열리도록)
        $('.menu-item').not($menuItem).removeClass('active');
        $('.submenu-toggle').not($toggle).each(function() {
            this.setAttribute('aria-expanded', 'false');
        });
        
        if (isExpanded) {
            // 현재 메뉴 닫기
            $menuItem.removeClass('active');
            toggleEl.setAttribute('aria-expanded', 'false');
        } else {
            // 현재 메뉴 열기
            $menuItem.addClass('active');
            toggleEl.setAttribute('aria-expanded', 'true');
        }
    });

    // 모바일에서 메뉴 링크 클릭 시 (서브메뉴가 없는 경우)
    $('.menu-link').on('click', function(e) {
        const $menuItem = $(this).closest('.menu-item');
        const hasSubmenu = $menuItem.hasClass('has-submenu');
        
        // 모바일에서만 동작
        if ($(window).width() <= 1024 && hasSubmenu) {
            e.preventDefault();
            const $toggle = $menuItem.find('.submenu-toggle');
            $toggle.trigger('click');
        }
    });

    // ============================================
    // 윈도우 리사이즈 처리
    // ============================================
    let resizeTimer;
    $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // PC 사이즈로 변경 시 모바일 메뉴 닫기
            if ($(window).width() > 1024) {
                closeMobileMenu();
            }
        }, 250);
    });

    // ============================================
    // 접근성 개선: 키보드 네비게이션
    // ============================================
    // 햄버거 버튼 포커스 처리
    $mobileToggle.on('focus', function() {
        $(this).css('outline', '2px solid #003f8c');
    }).on('blur', function() {
        $(this).css('outline', 'none');
    });

    // 서브메뉴 토글 버튼 포커스 처리
    $('.submenu-toggle').on('focus', function() {
        $(this).css('outline', '2px solid #003f8c');
    }).on('blur', function() {
        $(this).css('outline', 'none');
    });
});
