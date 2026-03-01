$(function(){
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
    const $mobileToggle = $('.mobile-menu-toggle');
    const $navigation = $('.main-navigation');
    const $overlay = $('.mobile-overlay');
    const $body = $('body');

    // 햄버거 버튼 클릭 이벤트
    $mobileToggle.on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const isActive = $(this).hasClass('active');
        
        if (isActive) {
            // 메뉴 닫기
            closeMobileMenu();
        } else {
            // 메뉴 열기
            openMobileMenu();
        }
    });

    // 오버레이 클릭 시 메뉴 닫기
    $overlay.on('click', function() {
        closeMobileMenu();
    });

    // ESC 키로 메뉴 닫기
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' && $mobileToggle.hasClass('active')) {
            closeMobileMenu();
        }
    });

    // 메뉴 열기 함수
    function openMobileMenu() {
        $mobileToggle.addClass('active').attr('aria-expanded', 'true');
        $navigation.addClass('active');
        $overlay.addClass('active');
        $body.css('overflow', 'hidden');
    }

    // 메뉴 닫기 함수
    function closeMobileMenu() {
        $mobileToggle.removeClass('active').attr('aria-expanded', 'false');
        $navigation.removeClass('active');
        $overlay.removeClass('active');
        $body.css('overflow', '');
        
        // 모든 아코디언 메뉴 닫기
        $('.menu-item').removeClass('active');
        $('.submenu-toggle').attr('aria-expanded', 'false');
    }

    // ============================================
    // 모바일 아코디언 메뉴 기능
    // ============================================
    $('.submenu-toggle').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const $toggle = $(this);
        const $menuItem = $toggle.closest('.menu-item');
        const $submenu = $menuItem.find('.submenu');
        const isExpanded = $toggle.attr('aria-expanded') === 'true';
        
        // 다른 메뉴 아이템들 닫기 (하나만 열리도록)
        $('.menu-item').not($menuItem).removeClass('active');
        $('.submenu-toggle').not($toggle).attr('aria-expanded', 'false');
        
        if (isExpanded) {
            // 현재 메뉴 닫기
            $menuItem.removeClass('active');
            $toggle.attr('aria-expanded', 'false');
        } else {
            // 현재 메뉴 열기
            $menuItem.addClass('active');
            $toggle.attr('aria-expanded', 'true');
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
    // PC 호버 효과 (기존 기능 유지)
    // ============================================
    // PC에서는 hover로 동작하므로 별도 처리 불필요
    // CSS로 처리됨

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

    // ============================================
    // 스크롤 시 헤더 고정 (선택사항)
    // ============================================
    let lastScroll = 0;
    $(window).on('scroll', function() {
        const currentScroll = $(window).scrollTop();
        
        // 모바일 메뉴가 열려있으면 스크롤 무시
        if ($mobileToggle.hasClass('active')) {
            return;
        }
        
        // 필요시 헤더 고정 기능 추가 가능
        // if (currentScroll > 100) {
        //     $('.header_middle').addClass('fixed');
        // } else {
        //     $('.header_middle').removeClass('fixed');
        // }
        
        lastScroll = currentScroll;
    });
});
