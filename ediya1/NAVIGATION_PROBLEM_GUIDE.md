# 반응형 네비게이션 문제 해결 가이드

## 문제 개요

EDIYA COFFEE 웹사이트의 네비게이션 메뉴를 반응형으로 구현하는 연습 문제입니다.

## 파일 구조

- `navigation_problem.html`: 문제가 포함된 HTML 파일
- `NAVIGATION_PROBLEM_GUIDE.md`: 이 가이드 문서

## 문제 목록

### 문제 1: 햄버거 버튼이 PC에서도 보임

**현재 상태:**
- 햄버거 버튼이 모든 화면 크기에서 표시됨

**해결 방법:**
```css
@media (min-width: 1025px) {
    .mobile-menu-toggle {
        display: none;
    }
}
```

### 문제 2: PC 네비게이션이 모바일에서도 보임

**현재 상태:**
- PC 스타일의 가로 네비게이션이 모바일에서도 그대로 표시됨
- 화면이 작을 때 레이아웃이 깨짐

**해결 방법:**
- 모바일에서는 네비게이션을 사이드 메뉴로 전환
- PC 네비게이션 스타일을 모바일에서 숨기거나 변경

### 문제 3: 모바일 반응형 스타일 누락

**현재 상태:**
- 미디어 쿼리 내부가 비어있음
- 모바일 네비게이션 스타일이 없음

**해결 방법:**
다음과 같은 스타일을 구현해야 합니다:

```css
@media (max-width: 1024px) {
    /* 햄버거 버튼 표시 */
    .mobile-menu-toggle {
        display: flex;
    }

    /* 네비게이션을 사이드 메뉴로 변경 */
    .main-navigation {
        position: fixed;
        top: 120px;
        right: -100%;  /* 화면 밖에 숨김 */
        width: 80%;
        max-width: 400px;
        height: calc(100vh - 120px);
        background-color: #fff;
        z-index: 999;
        transition: right 0.3s ease;
        overflow-y: auto;
        box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    }

    /* 메뉴가 열렸을 때 */
    .main-navigation.active {
        right: 0;  /* 화면 안으로 슬라이드 */
    }

    /* 메뉴 리스트 세로 배치 */
    .main-navigation > .gnb {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 20px 0;
    }

    .main-navigation .gnb > .menu-item {
        width: 100%;
        float: none;
        border-bottom: 1px solid #e5e5e5;
    }

    .main-navigation .menu-link {
        padding: 15px 20px;
        padding-right: 60px;
        height: auto;
        line-height: 1.5;
        font-size: 16px;
    }

    /* 서브메뉴 토글 버튼 표시 */
    .submenu-toggle {
        display: block;
    }

    /* 서브메뉴 아코디언 스타일 */
    .main-navigation .submenu {
        position: static;
        height: auto;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
        background-color: #f8f8f8;
    }

    .main-navigation .menu-item.active .submenu {
        max-height: 1000px;
    }

    .main-navigation .submenu li a {
        display: block;
        padding: 12px 20px 12px 40px;
        height: auto;
        line-height: 1.5;
    }
}
```

### 문제 4: JavaScript 기능 누락

**현재 상태:**
- 햄버거 버튼 클릭해도 아무 동작 없음
- 서브메뉴 토글 버튼 동작 없음

**해결 방법:**
다음과 같은 JavaScript 코드를 구현해야 합니다:

```javascript
$(document).ready(function(){
    var $mobileToggle = $('.mobile-menu-toggle');
    var $navigation = $('.main-navigation');
    var $body = $('body');

    // 메뉴 열기 함수
    function openMobileMenu() {
        $mobileToggle.addClass('active');
        $mobileToggle.attr('aria-expanded', 'true');
        $navigation.addClass('active');
        $body.css('overflow', 'hidden');
    }

    // 메뉴 닫기 함수
    function closeMobileMenu() {
        $mobileToggle.removeClass('active');
        $mobileToggle.attr('aria-expanded', 'false');
        $navigation.removeClass('active');
        $body.css('overflow', '');
        
        // 모든 아코디언 메뉴 닫기
        $('.menu-item').removeClass('active');
        $('.submenu-toggle').attr('aria-expanded', 'false');
    }

    // 햄버거 버튼 클릭 이벤트
    $mobileToggle.on('click', function(e) {
        e.preventDefault();
        var isActive = $(this).hasClass('active');
        
        if (isActive) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    // ESC 키로 메뉴 닫기
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' && $mobileToggle.hasClass('active')) {
            closeMobileMenu();
        }
    });

    // 서브메뉴 토글 버튼 클릭 이벤트
    $('.submenu-toggle').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        var $toggle = $(this);
        var $menuItem = $toggle.closest('.menu-item');
        var isExpanded = $toggle.attr('aria-expanded') === 'true';
        
        // 다른 메뉴 아이템들 닫기
        $('.menu-item').not($menuItem).removeClass('active');
        $('.submenu-toggle').not($toggle).attr('aria-expanded', 'false');
        
        if (isExpanded) {
            $menuItem.removeClass('active');
            $toggle.attr('aria-expanded', 'false');
        } else {
            $menuItem.addClass('active');
            $toggle.attr('aria-expanded', 'true');
        }
    });

    // 윈도우 리사이즈 처리
    $(window).on('resize', function() {
        if ($(window).width() > 1024) {
            closeMobileMenu();
        }
    });
});
```

## 추가 개선 사항

### 햄버거 버튼 애니메이션

햄버거 버튼이 클릭되면 X 모양으로 변하는 애니메이션을 추가할 수 있습니다:

```css
.mobile-menu-toggle.active .hamburger-line:nth-child(1) {
    transform: rotate(45deg) translate(0, 0);
    top: 50%;
}

.mobile-menu-toggle.active .hamburger-line:nth-child(2) {
    opacity: 0;
}

.mobile-menu-toggle.active .hamburger-line:nth-child(3) {
    transform: rotate(-45deg) translate(0, 0);
    top: 50%;
}
```

### 서브메뉴 화살표 애니메이션

서브메뉴가 열릴 때 화살표가 회전하도록:

```css
.submenu-toggle[aria-expanded="true"] .icon-arrow {
    transform: rotate(225deg);
}
```

### 오버레이 추가

메뉴가 열렸을 때 배경에 반투명 오버레이를 추가:

```css
.main-navigation::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.main-navigation.active::before {
    opacity: 1;
    pointer-events: auto;
}
```

## 테스트 체크리스트

- [ ] PC 화면(1025px 이상)에서 햄버거 버튼이 숨겨지는가?
- [ ] PC 화면에서 가로 네비게이션이 정상적으로 표시되는가?
- [ ] 모바일 화면(1024px 이하)에서 햄버거 버튼이 보이는가?
- [ ] 햄버거 버튼 클릭 시 사이드 메뉴가 슬라이드되는가?
- [ ] 서브메뉴 토글 버튼 클릭 시 아코디언이 동작하는가?
- [ ] 메뉴가 열렸을 때 body 스크롤이 막히는가?
- [ ] ESC 키로 메뉴를 닫을 수 있는가?
- [ ] 화면 크기를 변경하면 메뉴가 자동으로 닫히는가?
- [ ] 메뉴 링크 클릭 시 정상적으로 동작하는가?

## 참고 자료

- [CSS Media Queries](https://developer.mozilla.org/ko/docs/Web/CSS/Media_Queries)
- [jQuery Documentation](https://api.jquery.com/)
- [ARIA Attributes](https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA)

## 완성 예시

모든 문제를 해결하면 다음과 같은 기능이 구현됩니다:

1. **PC 화면**: 가로 네비게이션 메뉴, 호버 시 서브메뉴 표시
2. **모바일 화면**: 햄버거 버튼, 사이드 메뉴, 아코디언 서브메뉴
3. **접근성**: 키보드 네비게이션, ARIA 속성, 포커스 관리
4. **사용자 경험**: 부드러운 애니메이션, 스크롤 방지, ESC 키 지원
