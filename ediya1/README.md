# EDIYA COFFEE 웹사이트 프로젝트

## 📋 프로젝트 개요

이디야 커피 공식 웹사이트의 메인 페이지입니다. HTML, CSS, jQuery를 활용하여 구현된 반응형 웹사이트입니다.

## 📁 프로젝트 구조

```
EDIYA/
├── index.html          # 메인 HTML 파일
├── css/                # 스타일시트 파일
│   ├── style.css       # 메인 스타일시트
│   ├── jquery.bxslider.css  # BXSlider 플러그인 스타일
│   ├── slick.css       # Slick 슬라이더 스타일
│   └── slick-theme.css # Slick 슬라이더 테마
├── js/                 # JavaScript 파일
│   ├── jquery-3.1.1.min.js  # jQuery 라이브러리
│   ├── jquery.bxslider.js   # BXSlider 플러그인
│   ├── slick.js        # Slick 슬라이더 플러그인
│   └── main.js         # 메인 JavaScript 파일
├── images/             # 이미지 파일들
└── media/              # 미디어 파일들
    └── brand_video.mp4 # 브랜드 비디오
```

## 🏗️ HTML 구조

### 1. 헤더 영역 (Header)

#### 1.1 상단 헤더 (`.header_top`)
- **브랜드 사이트/기업 사이트** 전환 메뉴
- **로그인, 매장찾기, 고객의 소리** 등 유틸리티 메뉴
- **SNS 링크** (블로그, 인스타, 페이스북, 유튜브)
- **검색 폼** (`#ediyaSearchForm`)

#### 1.2 중간 헤더 (`.header_middle`)
- **로고** (`.logo`)
- **언어 선택** (`.language`)
- **주 메뉴 네비게이션** (`.gnb`)
  - 원두
  - 메뉴
  - 유통제품
  - 이디야멤버스
  - 상품권·제휴카드
  - 브랜드 소식
  - 고객 지원·케이터링
- 각 메뉴는 **드롭다운 서브메뉴** 포함

### 2. 메인 콘텐츠 영역 (`.main`)

#### 2.1 섹션1 (`.section1`) - 메인 슬라이더
- **BXSlider**를 사용한 이미지 슬라이더
- 5개의 슬라이드 이미지
- 자동 재생 기능

```html
<ul class="bxslider">
    <li><a href="#"><img src="images/..." alt=""></a></li>
    ...
</ul>
```

#### 2.2 섹션2 (`.section2`) - 브랜드 비디오
- 자동 재생, 음소거, 컨트롤 가능한 비디오
- `brand_video.mp4` 파일 사용

#### 2.3 섹션3 (`.section3`) - 스틱커피 정보 카드
- **Slick 슬라이더**를 사용한 제품 소개
- 3개의 슬라이드 그룹:
  - `slide-1`: 아메리카노 제품 (4개)
  - `slide-2`: 라떼 제품 (3개)
  - `slide-3`: 믹스 제품 (2개)

```html
<div class="slick slider-basic">
    <div class="slide slide-1">...</div>
    <div class="slide slide-2">...</div>
    <div class="slide slide-3">...</div>
</div>
```

#### 2.4 섹션4 (`.section4`) - 드림 팩토리
- 이디야 커피의 제조 시설 소개
- 드림 팩토리와 드림 물류센터 정보

#### 2.5 섹션5 (`.section5`) - 브랜드 메시지
- "ALWAYS BESIDE YOU, EDIYA COFFEE" 슬로건
- 메뉴보기 링크

#### 2.6 섹션6 (`.section6`) - 회사 소개
- 고객과 가맹점주, 협력사 상생 가치
- 창업안내, 창업설명회 안내, 브랜드 소개 버튼

#### 2.7 섹션7 (`.section7`) - 하단 정보
- **가맹점 개설 안내** (`.main_franchise`)
- **매장찾기** (`.main_store`) - 검색 폼 포함
- **뉴스** (`.main_right_t`) - 최신 뉴스 목록
- **브로슈어 다운로드** (`.main_right_b`)

### 3. 푸터 영역 (Footer)

- **하단 유틸리티 메뉴** (`.bottom_util`)
  - 개인정보처리방침
  - 멤버스 이용약관
  - 가맹 안내
  - Sitemap 등
- **CCM 인증 로고** (`.bottom_ccm`)
- **하단 로고** (`.bottom_logo`)
- **저작권 정보** (`.copy_info`, `.copy`)

## 🎨 CSS 구조

### 주요 스타일 클래스

#### 레이아웃 유틸리티
- `.cf` - Clearfix (float 해제)
- `.fl` - Float left
- `.fr` - Float right

#### 헤더 스타일
- `.header_top` - 상단 헤더 (배경색: #243C84)
- `.header_middle` - 중간 헤더
- `.gnb` - 주 메뉴 네비게이션
- `.shadow` - 드롭다운 메뉴 그림자 효과

#### 섹션별 스타일
- 각 섹션은 고유한 클래스명으로 구분
- 반응형 디자인을 위한 미디어 쿼리 포함 가능

### CSS 파일 설명

1. **style.css** - 메인 스타일시트
   - 전체 레이아웃 및 컴포넌트 스타일
   - 헤더, 네비게이션, 섹션별 스타일 정의

2. **jquery.bxslider.css** - BXSlider 플러그인 스타일
   - 메인 슬라이더 스타일링

3. **slick.css** - Slick 슬라이더 기본 스타일
   - 제품 슬라이더 기본 스타일

4. **slick-theme.css** - Slick 슬라이더 테마
   - 제품 슬라이더 테마 스타일

## ⚙️ JavaScript / jQuery 기능

### 사용 라이브러리

1. **jQuery 3.1.1** - 기본 JavaScript 라이브러리
2. **BXSlider** - 메인 이미지 슬라이더 플러그인
3. **Slick** - 제품 정보 카드 슬라이더 플러그인

### main.js 주요 기능

```javascript
$(function(){
    // BXSlider 초기화 - 메인 슬라이더
    let slider = $('.bxslider').bxSlider({
        auto: true,  // 자동 재생
    });

    // Slick 슬라이더 초기화 - 제품 정보 카드
    $('.slider-basic').slick({
        autoplay: true,      // 자동 재생
        dots: true,          // 하단 점 표시
        arrows: false,       // 화살표 숨김
        infinite: true,      // 무한 루프
        speed: 500,          // 전환 속도 (ms)
        slidesToShow: 1,     // 한 번에 보여줄 슬라이드 수
        slidesToScroll: 1    // 한 번에 스크롤할 슬라이드 수
    });
});
```

### 슬라이더 기능 설명

#### 1. BXSlider (메인 슬라이더)
- **위치**: 섹션1 (`.section1`)
- **기능**: 
  - 자동 재생 (`auto: true`)
  - 이미지 슬라이드 전환
  - 5개의 슬라이드 이미지

#### 2. Slick Slider (제품 정보 카드)
- **위치**: 섹션3 (`.section3`)
- **기능**:
  - 자동 재생
  - 하단 점 네비게이션
  - 무한 루프
  - 부드러운 전환 애니메이션

## 🔧 주요 기능 및 특징

### 1. 반응형 디자인
- 다양한 화면 크기에 대응하는 레이아웃
- 모바일, 태블릿, 데스크톱 최적화

### 2. 슬라이더 기능
- **메인 슬라이더**: 홈페이지 상단의 주요 이미지 슬라이더
- **제품 슬라이더**: 스틱커피 제품 소개 슬라이더

### 3. 네비게이션 메뉴
- 드롭다운 서브메뉴 지원
- 호버 효과 및 그림자 효과

### 4. 비디오 재생
- HTML5 비디오 태그 사용
- 자동 재생, 음소거, 컨트롤 기능

### 5. 검색 기능
- 상단 헤더 검색 폼
- 매장 찾기 검색 폼

## 📝 사용 방법

### 1. 로컬 실행
```bash
# 프로젝트 폴더로 이동
cd EDIYA

# 로컬 서버 실행 (예: Python)
python -m http.server 8000

# 브라우저에서 접속
# http://localhost:8000
```

### 2. 파일 구조 확인
- 모든 파일 경로는 상대 경로로 설정되어 있음
- `index.html`을 기준으로 경로 설정

### 3. 수정 시 주의사항
- 이미지 경로: `images/` 폴더 내
- CSS 경로: `css/` 폴더 내
- JavaScript 경로: `js/` 폴더 내
- 미디어 파일: `media/` 폴더 내

## 🎯 주요 섹션별 설명

### 섹션1 - 메인 슬라이더
- 홈페이지 첫 화면에 표시되는 주요 이미지 슬라이더
- BXSlider 플러그인 사용
- 자동으로 이미지 전환

### 섹션2 - 브랜드 비디오
- 이디야 커피 브랜드 소개 비디오
- 자동 재생되며 사용자가 컨트롤 가능

### 섹션3 - 제품 소개
- 스틱커피 제품 카드 형태로 소개
- Slick 슬라이더로 여러 제품 그룹 표시
- 각 슬라이드에 제품 이미지와 설명 포함

### 섹션4 - 드림 팩토리
- 제조 시설 소개 섹션
- 고품질 원두 생산 시설 홍보

### 섹션5 - 브랜드 메시지
- 브랜드 슬로건 및 메뉴 안내

### 섹션6 - 회사 소개
- 이디야 커피의 가치와 철학
- 창업 관련 정보 제공

### 섹션7 - 하단 정보
- 가맹점 안내, 매장 찾기, 뉴스 등
- 사용자 편의 기능 제공

## 📚 참고 자료

### 사용된 라이브러리
- [jQuery](https://jquery.com/) - JavaScript 라이브러리
- [BXSlider](http://bxslider.com/) - 이미지 슬라이더 플러그인
- [Slick Carousel](https://kenwheeler.github.io/slick/) - 슬라이더 플러그인

### 브라우저 호환성
- 모던 브라우저 지원 (Chrome, Firefox, Safari, Edge)
- IE11 이상 지원 가능

## 🔄 향후 개선 사항

1. **반응형 디자인 강화**
   - 모바일 최적화 개선
   - 태블릿 레이아웃 조정

2. **성능 최적화**
   - 이미지 최적화 (WebP 형식 활용)
   - CSS/JS 파일 압축 및 최소화

3. **접근성 개선**
   - ARIA 레이블 추가
   - 키보드 네비게이션 지원

4. **기능 추가**
   - 검색 기능 구현
   - 매장 찾기 지도 연동
   - 뉴스 더보기 기능

---

**작성일**: 2026년  
**프로젝트**: EDIYA COFFEE 웹사이트  
**기술 스택**: HTML5, CSS3, jQuery, BXSlider, Slick
