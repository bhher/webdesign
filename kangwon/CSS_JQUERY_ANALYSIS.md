# 강원천문대 웹사이트 CSS & jQuery 분석 문서

## 목차
1. [CSS 구조 분석](#css-구조-분석)
2. [jQuery 기능 분석](#jquery-기능-분석)
3. [레이아웃 구조](#레이아웃-구조)
4. [인터랙션 기능](#인터랙션-기능)

---

## CSS 구조 분석

### 1. 초기화 및 기본 설정

```css
*{margin:0; padding:0;}
ul,li{list-style:none;}
img{display:block; border:0;}
a{text-decoration:none; color:#333;}
.cf:after{content:''; display:block; clear:both;}
```

**설명:**
- **전역 리셋**: 모든 요소의 margin과 padding을 0으로 초기화하여 브라우저 기본 스타일 제거
- **리스트 스타일 제거**: `ul`, `li`의 기본 불릿 포인트 제거
- **이미지 설정**: 이미지를 블록 요소로 설정하고 테두리 제거
- **링크 스타일**: 기본 밑줄 제거, 색상은 #333
- **Clearfix**: `.cf` 클래스로 float 해제 (`.cf:after` 가상 요소 사용)

### 2. 기본 레이아웃

```css
body{font-family:'나눔고딕','Nanum Gothic',sans-serif; color:#333;}
#wrap{width:1200px; margin:0 auto;}
```

**설명:**
- **폰트**: 나눔고딕 폰트 사용, 폴백으로 sans-serif
- **컨테이너**: 1200px 고정 너비, 중앙 정렬 (`margin: 0 auto`)

### 3. 헤더 영역 (Header)

```css
.header{position:relative; width:100%; height:100px;}
.header .logo{position:absolute; width:200px; height:100px; 
              background:url("../images/logo.png") no-repeat center /contain; 
              left:20px; top:0;}
.header .gnb{position:absolute; left:575px; top:50px; z-index:1;}
```

**설명:**
- **헤더**: 상대 위치, 전체 너비, 높이 100px
- **로고**: 절대 위치, 왼쪽 20px, 배경 이미지로 로고 표시
- **GNB(Global Navigation Bar)**: 절대 위치, 왼쪽 575px, 상단 50px

#### 네비게이션 메뉴 스타일

```css
.header .gnb ul>li{float:left; width:150px; font-size:24px; 
                   font-weight:bold; line-height:36px; text-align:center;}
.header .gnb ul>li:hover{background-color:#0066ad;}
.header .gnb ul>li:hover>a{color:#fff;}
.header .gnb ul>li>ul{display:none;}
.header .gnb ul>li>ul>li{font-size:20px;font-weight:normal; padding:10px 0;}
.header .gnb ul>li>ul>li>a{color:#fff; display:block; width:100%; height:30px; line-height:30px;}
.header .gnb ul>li>ul>li:hover{background-color:#30a3f3;}
```

**설명:**
- **1차 메뉴**: float로 가로 배치, 각 항목 150px 너비, 큰 폰트(24px), 굵은 글씨
- **호버 효과**: 배경색 #0066ad, 텍스트 흰색
- **2차 메뉴**: 기본적으로 숨김 (`display:none`), jQuery로 표시/숨김 제어
- **서브메뉴 스타일**: 작은 폰트(20px), 패딩 10px, 호버 시 #30a3f3 배경색

### 4. 이미지 슬라이더 (Image Slide)

```css
.img_slide{position:relative; width:100%; height:300px; background-color:#30a3f3;}
.img_slide .image li{position:absolute; left:0; top:0; 
                     background:no-repeat center /cover; width:100%; height:100%;}
.img_slide .image li:nth-child(1){background:url("../images/slider1.jpg");}
.img_slide .image li:nth-child(2){background:url("../images/slider2.jpg"); display:none;}
.img_slide .image li:nth-child(3){background:url("../images/slider3.jpg"); display:none;}
```

**설명:**
- **슬라이더 컨테이너**: 상대 위치, 전체 너비, 높이 300px, 배경색 #30a3f3
- **슬라이드 항목**: 절대 위치로 겹쳐 배치, 배경 이미지 cover로 채움
- **초기 상태**: 첫 번째 슬라이드만 표시, 나머지는 숨김

#### 슬라이더 텍스트 오버레이

```css
.img_slide .image li p{position:absolute; left:50%; top:50%; 
                       transform:translate(-50%, -50%); 
                       font-size:24px; color:#fff; text-align:center; 
                       line-height:36px; padding:30px; 
                       background-color:rgba(0,0,0,0.3); border-radius:20px;}
.img_slide .image li p span{font-weight:bold; color:#30a3f3; 
                            padding:0 20px; cursor:pointer; 
                            background-color:#fff; line-height:30px; border-radius:5px;}
```

**설명:**
- **텍스트 위치**: 중앙 정렬 (`left:50%; top:50%; transform:translate(-50%, -50%)`)
- **스타일**: 큰 폰트(24px), 흰색 텍스트, 반투명 검은 배경(rgba(0,0,0,0.3))
- **버튼 스타일**: span 요소가 버튼 역할, 흰색 배경, 파란색 텍스트, 포인터 커서

### 5. 콘텐츠 영역 (Contents)

```css
.contents{position:relative; width:100%; height:200px;}
.contents .tab_menu{position:absolute; width:33.33%; height:100%; left:0; top:0;}
```

**설명:**
- **콘텐츠 영역**: 상대 위치, 전체 너비, 높이 200px
- **탭 메뉴**: 절대 위치, 너비 33.33% (3분할 중 첫 번째)

#### 탭 메뉴 스타일

```css
.contents .tab_menu .tab_title{position:absolute; left:5px; top:5px;}
.contents .tab_menu .tab_title ul li{float:left; padding:10px 20px; 
                                     background-color:#0066ad; color:#fff; 
                                     border-radius:10px 10px 0 0 ;}
.contents .tab_menu .tab_title ul li.on{background-color:#30a3f3; font-weight:bold;}
```

**설명:**
- **탭 제목**: 절대 위치, 왼쪽 상단
- **탭 버튼**: float로 가로 배치, 파란색 배경(#0066ad), 상단 모서리만 둥글게
- **활성 탭**: `.on` 클래스로 더 밝은 파란색(#30a3f3), 굵은 글씨

#### 탭 콘텐츠 영역

```css
.contents .tab_menu .tab .t_table{position:absolute; left:0px; top:35px; 
                                   width:390px; height:160px; 
                                   background-color:#30a3f3; 
                                   font-size:.95em; line-height:1.8em; 
                                   padding:5px; box-sizing:border-box;}
.contents .tab_menu .tab .t_table tr:hover{text-decoration:underline; 
                                            cursor:pointer; color:#fff;}
.contents .tab_menu .tab .t_gallery{position:absolute; left:0px; top:35px; 
                                     width:390px; height:160px; 
                                     background-color:#30a3f3; 
                                     font-size:.95em; line-height:1.8em; 
                                     padding:5px; box-sizing:border-box; 
                                     display:none;}
.contents .tab_menu .tab .t_gallery a{float:left; margin-left:12px; margin-top:18px;}
```

**설명:**
- **테이블 탭**: 공지사항 표시, 파란색 배경, 행 호버 시 밑줄과 포인터 커서
- **갤러리 탭**: 기본 숨김, jQuery로 전환, 이미지 링크를 float로 배치

#### 배너 및 링크 영역

```css
.contents .banner{position:absolute; width:33.33%; height:100%; left:400px; top:0;}
.contents .banner img{margin-top:5px;}
.contents .link{position:absolute; width:33.33%; height:100%; left:800px; top:0;}
.contents .link a{display:block; width:120px; height:180px;}
.contents .link a:nth-child(1){position:absolute; top:10px; left:10px;}
.contents .link a:nth-child(2){position:absolute; top:10px; left:145px;}
.contents .link a:nth-child(3){position:absolute; top:10px; left:280px;}
```

**설명:**
- **배너 영역**: 중앙 위치(left:400px), 너비 33.33%
- **링크 영역**: 오른쪽 위치(left:800px), 너비 33.33%
- **링크 배치**: 절대 위치로 세로로 배치, 각각 120px 너비, 180px 높이

### 6. 푸터 영역 (Footer)

```css
.footer{position:relative; width:100%; height:100px; background-color:#30a3f3;}
.footer .f_logo{position:absolute; left:0; top:0;}
.footer .f_logo img{position:absolute; left:10px; top:15px; width:200px; height:auto;}
.footer .f_menu{position:absolute; left:400px; top:0;}
.footer .f_menu ul li{float:left; display:block; margin-left:20px; line-height:50px;}
.footer .f_menu ul li:hover{text-decoration:underline;}
.footer .f_menu ul li:first-child{margin-left:0;}
.footer .f_copy{position:absolute; left:400px; top:50px; font-size:14px;}
```

**설명:**
- **푸터**: 상대 위치, 전체 너비, 높이 100px, 파란색 배경
- **로고**: 왼쪽 상단, 200px 너비
- **메뉴**: 중앙(left:400px), float로 가로 배치, 호버 시 밑줄
- **저작권**: 메뉴 아래, 작은 폰트(14px)

### 7. 팝업 모달 (Popup Modal)

```css
#pop{position:fixed; left:0; top:0; width:100%; height:100%; 
     background-color:rgba(0,0,0,0.5); display:none;}
#pop .pop_up{position:absolute; left:50%; top:50%; 
             transform:translate(-50%, -50%); 
             background-color:#fff; width:500px; height:400px;}
#pop .pop_up .p_title{position:absolute; left:30px; top:30px; 
                      font-size:24px; word-break:keep-all;}
#pop .pop_up .p_content{position:absolute; left:30px; top:120px; 
                         line-height:36px; word-break:keep-all;}
#pop .pop_up button{position:absolute; right:30px; bottom:30px; 
                    border:0; padding:10px 30px; cursor:pointer;}
```

**설명:**
- **오버레이**: 고정 위치, 전체 화면, 반투명 검은 배경(rgba(0,0,0,0.5)), 기본 숨김
- **팝업 창**: 중앙 정렬, 흰색 배경, 500x400px 크기
- **내용**: 제목과 본문 절대 위치로 배치, 단어 줄바꿈 방지(`word-break:keep-all`)
- **닫기 버튼**: 오른쪽 하단, 테두리 없음, 패딩 10px 30px

---

## jQuery 기능 분석

### 1. 문서 준비 이벤트

```javascript
$(function(){
    // 모든 코드는 여기에 작성
});
```

**설명:**
- `$(function(){})`는 `$(document).ready(function(){})`의 축약형
- DOM이 완전히 로드된 후 실행되는 코드
- 페이지 로드 완료 후 인터랙션 기능 초기화

### 2. 네비게이션 드롭다운 메뉴

```javascript
$(".gnb>ul>li").mouseover(function(){
    $(this).children("ul").stop().fadeIn();
});
$(".gnb>ul>li").mouseout(function(){
    $(this).children("ul").stop().fadeOut();
});
```

**설명:**
- **mouseover 이벤트**: 메뉴 항목에 마우스 진입 시
  - `$(this)`: 현재 마우스가 올라간 메뉴 항목
  - `.children("ul")`: 해당 항목의 서브메뉴 선택
  - `.stop()`: 진행 중인 애니메이션 중지 (빠른 마우스 이동 시 깜빡임 방지)
  - `.fadeIn()`: 서브메뉴를 페이드 인 효과로 표시

- **mouseout 이벤트**: 메뉴 항목에서 마우스 벗어날 시
  - `.fadeOut()`: 서브메뉴를 페이드 아웃 효과로 숨김

**동작 흐름:**
1. 사용자가 메뉴 항목에 마우스 오버
2. 서브메뉴가 부드럽게 나타남
3. 마우스가 벗어나면 서브메뉴가 사라짐

### 3. 이미지 슬라이더 자동 전환

```javascript
var i = 0
setInterval(function(){
    i++;
    if(i==3){i=0;}
    $(".image li").eq(i).fadeIn(1000);
    $(".image li").eq(i-1).fadeOut(1000);
},3000);
```

**설명:**
- **변수 초기화**: `i = 0` (첫 번째 슬라이드 인덱스)
- **setInterval**: 3초(3000ms)마다 함수 실행
- **인덱스 증가**: `i++`로 다음 슬라이드로 이동
- **순환 로직**: `if(i==3){i=0;}` - 마지막 슬라이드(인덱스 2) 다음은 첫 번째로
- **슬라이드 전환**:
  - `$(".image li").eq(i)`: 현재 인덱스의 슬라이드 선택
  - `.fadeIn(1000)`: 1초 동안 페이드 인
  - `$(".image li").eq(i-1)`: 이전 슬라이드 선택
  - `.fadeOut(1000)`: 1초 동안 페이드 아웃

**동작 흐름:**
1. 페이지 로드 시 첫 번째 슬라이드 표시
2. 3초 후 두 번째 슬라이드로 전환 (페이드 효과)
3. 3초 후 세 번째 슬라이드로 전환
4. 3초 후 다시 첫 번째 슬라이드로 순환

**주의사항:**
- 첫 번째 실행 시 `i-1`이 `-1`이 되어 오류 가능성 있음
- 더 안전한 코드: `$(".image li").not($(".image li").eq(i)).fadeOut(1000);`

### 4. 탭 메뉴 전환

```javascript
$(".tab_menu .tab_title ul li").click(function(){
    var t = $(this).index();
    
    $(".tab_menu .tab .t_tab").css("display","none").eq(t).css("display","block");
    $(".tab_menu .tab_title ul li").removeClass("on").eq(t).addClass("on");
});
```

**설명:**
- **클릭 이벤트**: 탭 제목(`.tab_title ul li`) 클릭 시
- **인덱스 가져오기**: `$(this).index()` - 클릭한 탭의 순서(0, 1, 2...)
- **콘텐츠 전환**:
  - `$(".tab_menu .tab .t_tab")`: 모든 탭 콘텐츠 선택
  - `.css("display","none")`: 모두 숨김
  - `.eq(t)`: 클릭한 탭의 인덱스에 해당하는 콘텐츠 선택
  - `.css("display","block")`: 해당 콘텐츠만 표시
- **탭 버튼 활성화**:
  - `.removeClass("on")`: 모든 탭에서 `on` 클래스 제거
  - `.eq(t).addClass("on")`: 클릭한 탭에만 `on` 클래스 추가

**동작 흐름:**
1. 사용자가 "공지사항" 또는 "갤러리" 탭 클릭
2. 모든 탭 콘텐츠 숨김
3. 클릭한 탭의 콘텐츠만 표시
4. 탭 버튼 스타일 변경 (활성화 표시)

### 5. 팝업 모달 제어

```javascript
$(".t_table table tr").eq(0).click(function(){
    $("#pop").stop().show();		
});
$("#pop .pop_up button").click(function(){
    $("#pop").stop().hide();
});
```

**설명:**
- **팝업 열기**:
  - `.t_table table tr`: 공지사항 테이블의 행 선택
  - `.eq(0)`: 첫 번째 행만 선택
  - `.click()`: 클릭 이벤트 바인딩
  - `$("#pop").stop().show()`: 팝업 오버레이 표시
    - `.stop()`: 진행 중인 애니메이션 중지
    - `.show()`: 즉시 표시 (페이드 효과 없음)

- **팝업 닫기**:
  - `$("#pop .pop_up button")`: 팝업 내 닫기 버튼 선택
  - `.click()`: 클릭 이벤트 바인딩
  - `$("#pop").stop().hide()`: 팝업 오버레이 숨김

**동작 흐름:**
1. 공지사항 첫 번째 행 클릭
2. 팝업 모달이 화면 중앙에 표시
3. 닫기 버튼 클릭 시 팝업 숨김

---

## 레이아웃 구조

### 전체 구조도

```
#wrap (1200px, 중앙 정렬)
├── .header (100px 높이)
│   ├── .logo (왼쪽, 200px)
│   └── .gnb (중앙, 네비게이션)
│       └── ul > li (드롭다운 메뉴)
│
├── .img_slide (300px 높이)
│   └── .image > li (슬라이더, 3개)
│
├── .contents (200px 높이)
│   ├── .tab_menu (33.33% 너비, 왼쪽)
│   │   ├── .tab_title (탭 버튼)
│   │   └── .tab (탭 콘텐츠)
│   │       ├── .t_table (공지사항)
│   │       └── .t_gallery (갤러리)
│   ├── .banner (33.33% 너비, 중앙)
│   └── .link (33.33% 너비, 오른쪽)
│
└── .footer (100px 높이)
    ├── .f_logo (로고)
    ├── .f_menu (메뉴)
    └── .f_copy (저작권)
```

### 포지셔닝 전략

1. **절대 위치(absolute)**: 헤더 내부 요소, 콘텐츠 영역 내부 요소
2. **상대 위치(relative)**: 컨테이너 역할 (.header, .contents, .footer)
3. **고정 위치(fixed)**: 팝업 오버레이 (스크롤해도 고정)

---

## 인터랙션 기능 요약

### 1. 네비게이션 메뉴
- **기능**: 마우스 오버 시 서브메뉴 표시
- **효과**: 페이드 인/아웃
- **사용 기술**: jQuery `.fadeIn()`, `.fadeOut()`, `.stop()`

### 2. 이미지 슬라이더
- **기능**: 3초마다 자동으로 슬라이드 전환
- **효과**: 페이드 전환 애니메이션
- **사용 기술**: `setInterval()`, jQuery `.fadeIn()`, `.fadeOut()`

### 3. 탭 메뉴
- **기능**: 공지사항/갤러리 탭 전환
- **효과**: 콘텐츠 표시/숨김, 탭 버튼 활성화
- **사용 기술**: jQuery `.index()`, `.eq()`, `.css()`, `.addClass()`, `.removeClass()`

### 4. 팝업 모달
- **기능**: 공지사항 클릭 시 상세 내용 표시
- **효과**: 모달 창 표시/숨김
- **사용 기술**: jQuery `.show()`, `.hide()`, `.stop()`

---

## 개선 제안사항

### 1. 슬라이더 개선
```javascript
// 현재 코드의 문제점: 첫 번째 실행 시 i-1이 -1이 됨
// 개선안:
var i = 0;
setInterval(function(){
    $(".image li").eq(i).fadeOut(1000);
    i = (i + 1) % 3; // 0, 1, 2 순환
    $(".image li").eq(i).fadeIn(1000);
}, 3000);
```

### 2. 탭 메뉴 개선
```javascript
// 현재 코드는 .t_tab 클래스를 찾지만 HTML에는 .t_table, .t_gallery만 있음
// 개선안:
$(".tab_menu .tab_title ul li").click(function(){
    var t = $(this).index();
    $(".tab_menu .tab > div").hide().eq(t).show();
    $(this).siblings().removeClass("on");
    $(this).addClass("on");
});
```

### 3. 접근성 개선
- 키보드 네비게이션 지원 추가
- ARIA 속성 추가 (role, aria-label 등)
- 포커스 관리 개선

### 4. 반응형 디자인
- 미디어 쿼리 추가
- 모바일 환경 대응
- 터치 이벤트 지원

---

## 색상 팔레트

- **주요 색상**: #30a3f3 (밝은 파란색)
- **강조 색상**: #0066ad (진한 파란색)
- **텍스트 색상**: #333 (진한 회색)
- **배경 색상**: #fff (흰색)
- **오버레이**: rgba(0,0,0,0.5) (반투명 검은색)

---

## 브라우저 호환성

- jQuery 1.12.3 사용 (IE8+ 지원)
- CSS3 속성 사용 (transform, border-radius 등)
- 모던 브라우저에서 최적 동작

---

## 성능 최적화

### 현재 상태
- jQuery 라이브러리 사용 (상대적으로 무거움)
- 인라인 스타일 변경 (`.css()` 메서드)

### 개선 방안
- CSS 클래스 토글 사용 (`.addClass()`, `.removeClass()`)
- 이벤트 위임 사용 (`.on()`)
- 애니메이션 최적화 (CSS transition 활용)

---

이 문서는 강원천문대 웹사이트의 CSS와 jQuery 코드를 상세히 분석한 것입니다. 각 기능의 동작 원리와 구현 방식을 이해하는 데 도움이 될 것입니다.
