
#  Header 디자인

Tutorial Course의 목적에 대해서 알고 싶다면 https://github.com/iknowSteven/Web-Programming 의 README 를 읽어보십시오. Tutorial Course에서는 이 사이트의 주요 기능 구현에 대한 상세한 설명을 담고 있습니다. 자신의 실력이 충분하다고 생각하는 분은 바로 Source Code를 봐도 좋습니다.

이 프로젝트에 기여(Contribute)하고 싶으신 분은 Pull Request 하여 주십시오. 이 글은 Pillow Studio 개발자 센터 레퍼런스에도 올라갑니다. Pull Request가 오면 Pillow Studio Web 개발 팀에서 검토 후 적용 시키겠습니다. Request 가 받아들여지면 Pillow Studio 홈페이지에도 이름이 오르게 됩니다.

## 1. Desktop 헤더

### 1. 두 개의 Layer로 헤더를 구성하여 반응형 웹 구현을 더욱 쉽게 만들었습니다.

이 헤더는 크게 background와 container 레이어로 구성되어 있습니다. 그 이유는 사이트의 반응형 모델을 javascript를 최대한 고려하지 않고 만들기 위함입니다. 레이어 구분없이 현재 홈페이지 레이아웃을 구현하려면 Container에 있는 모든 요소를 CSS calc()를 이용하여 구현해야 합니다.
##### #uni_header_background 
```css
#test_div {
	position: absolute; right: calc(50% + 1010px);
}
```
이것의 문제는 크기가 지정되지 않은 div 모델(예를 들어 %로 사이즈를 지정)인 경우, Javascript를 이용하더라도 test_div를 원하는 곳에 위치시키기 힘듭니다. 따라서 저희가 생각해낸 방법은 다음과 같습니다.

##### Layer를 2개로 나누고(부모 레이어: background, 자식 레이어: container), margin: auto; 속성을 통해 자식 레이어를 부모 레이어 안에서 가운데 정렬하는 것입니다.

이 방법대로 홈페이지를 구성한다면 container내의 모든 요소들을 손쉽게 정렬시킬 수 있습니다. 그 이유는 요소들이 window기준에 맞춰지는 것이 아니라 container기준에 맞춰지기 때문입니다. 즉 container는 window기준으로 정렬하기 쉽고 Container내의 요소는 정렬하기 어렵기 때문에 위 방법으로 접근하면Container내의 요소들도 비교적 손쉽게 handling 할 수 있습니다.

##### 따라서 이를 이용한 반응형 웹 모델은 다음과 같습니다.

#### #uni_header_background 
```css
#uni_header_background {
	width: 100%; height: 50px;
	background: rgba(0,38,32,0.90);
	position: fixed;
	z-index: 100;
}
```
#### #uni_header_container
```css
#uni_header_container {
	width: 1800px; height: 50px;
	margin: auto;
	position: relative;
	text-align: center;
}

@media (max-width: 1969px) and (min-width: 1000px){
	#uni_header_container {
		width: calc(100% - 140px);

	}
}
@media (max-width: 999px) and (min-width: 905px){
	#uni_header_container {
		width: 825px;
	}
}
@media (max-width: 904px) {
	#uni_header_container {
		width: calc(100% - 40px);
	}
}
```
background 레이어와 container 레이어를 구분하였기 때문에 단순히 몇 줄만으로도 끊김없는 반응형 웹을 만들 수 있습니다.


### 2. div container 안에 여러 요소를 배치했을 때 밀리는 현상을 방지하기 위해 position: absolute; 속성을 자식 요소에 사용하였습니다.

이 부분은 처음 이 분야를 접하는 분들이 무조건 겪는 문제 중 하나입니다. div의 박스 모델의 특징은 div가 차지한 공간을 다른 div가 침범할 수 없다는 것입니다.

Container내에 요소가 1개만 있을 땐 container안에 div가 잘 자리잡고 있음을 알 수 있습니다.

##### #HTML
```html
<div id="parent_1">
	<div id="children_1">
		Children
	</div>
</div>
```
##### #Parent_1
```css
#Parent_1 {
	width: 100%; height: 50px;
	background: #FF0004;
}
```
##### #Children_1
```css
#Children_1 {
	width: 100px; height: 50px;
	background: #001DFF;
}
```
하지만 Contaier에 요소가 2가지 이상 존재하면 요소들이 순서대로 아래로 밀리게 됩니다.

##### HTML
```html
<div id="parent_1">
	Parent
	<div id="children_1">
		Children
	</div>
</div>
```
##### #Parent_1
```css
#Parent_1 {
	width: 100%; height: 50px;
	background: #FF0004;
}
```
##### #Children_1
```css
#Children_1 {
	width: 100px; height: 50px;
	background: #001DFF;
}
```
##### 그래서 저희는 container안에서 중앙 정렬이 아닌 요소들에 position: absolute; 속성을 줌으로서 해결하였습니다.
저희의 header에는 4개의 요소(logo, nav, login, search) 가 있습니다. 즉 position: absolute가 없으면 container에서 요소들이 밀리게 됩니다. 따라서 div가 밀리는 것을 방지하기 위해서 중앙정렬을 해야하는 div(nav)를 제외한 나머지 div에는 position: absolute; 를 주었습니다.

##### HTML
```html
<div id="parent_2">
	<span id="children_absolute">Parent</span>
	<div id="children_2">
		Children
	</div>
</div>
```
##### #Parent_2
```css
#Parent_2 {
	width: 100%; height: 50px;
	background: #FF0004;
}
```
##### #Children_2
```css
#Children_2
	width: 100px; height: 50px;
	margin: auto;
	background: #001DFF;
	color: #FFFFFF;
}
```

##### #Children_absolute

```css
#Children_absolute {
	position: absolute;
}
```
##### 따라서 이를 이용한 헤더 모델은 다음과 같습니다.

#### HTML
```html
<header id="uni_header_background">
	<div id="uni_header_container">
		<a href="http://www.pillowstudio.co.kr">
			<img id="uni_header_logo" src="image/pillowstudio_logo.svg">
		</a>
		<nav id="uni_header_nav_container">
			<li><a href="crew.html">서비스</a></li>
			<li><a href="product.html">인공지능</a></li>
			<li><a href="product.html">보안</a></li>
			<li><a href="lab.html">웹 개발</a></li>
			<li><a href="product.html">개발자 센터</a></li>
			<li><a href="support.html">크루</a></li>
			<li><a href="support.html">고객 지원</a></li>
		</nav>
		<img id="uni_header_login" src="image/login.svg">
		<img id="uni_header_search" src="image/search.svg">
	</div>
</header>
```
#### #uni_header_background
```css
#uni_header_background {
	width: 100%; height: 50px;
	background: rgba(0,38,32,0.90);
	position: fixed;
	z-index: 100;
}
```
#### #uni_header_container
```css
#uni_header_container {
	width: 100%; height: 50px;
	background: rgba(0,38,32,0.90);
	position: fixed;
	z-index: 100;
}
```
#### #uni_header_nav_container
```css
#uni_header_nav_container {
	width: auto; height: 50px;
	line-height: 50px;
	list-style: none;
	margin-left: 15px;
	display: inline-block;
}
```
#### #uni_header_logo
```css
#uni_header_logo {
	width: auto; height: 30px;
	position: absolute; left: 0px; top: 10px;
	display: inline-block;
}
```
#### #uni_header_login
```css
#uni_header_login {
	width: auto; height: 24px;
	position: absolute; right: 70px; top: 13px;
}
```
#### #uni_header_search
```css
#uni_header_search {
	width: auto; height: 24px;
	position: absolute; right: 0px; top: 13px;
}
```

### 3. 자식 요소 위치가 부모 요소 위치에 영향을 받을 수 있도록 position: relative; 속성을 부모 요소에 적용하였습니다.

코드를 꼼꼼이 보신 분이라면 위에서 position: relative; 속성을 부모 요소에 적용한 이유가 궁금할 것입니다. 그 이유는 position: absolute; 가 적용된 자식 요소를 부모 컨테이너를 기준으로 정렬하기 위함입니다. 즉 position: relative; 속성을 부모 요소에 적용하지 않으면 자식 요소의 위치가 부모 요소 기준이 아니라 window를 기준으로 정렬됩니다. 이는 #uni_header_logo로 설명드리겠습니다.

#uni_header_container의 반응형 모델은 다음과 같습니다.

#### #uni_header_container
```css
#uni_header_container {
	width: 100%; height: 50px;
	background: rgba(0,38,32,0.90);
	position: fixed;
	z-index: 100;
}

@media (max-width: 1969px) and (min-width: 1000px){
	#uni_header_container {
		width: calc(100% - 140px);
	}
}

@media (max-width: 999px) and (min-width: 905px){
	#uni_header_container {
		width: 825px;
	}
}

@media (max-width: 904px) {
	#uni_header_container {
		width: calc(100% - 40px);
	}
}
```

위 모델을 요약해서 설명하면 다음과 같습니다.

1. ~1970px: #uni_header_container(이하 Container)의 크기: 1800px, 화면 가운데 정렬.
2. 1969px~1000px: Container의 크기: Window(화면 크기) - 140px, 화면 가운데 정렬, 좌우 여백 각각 70px.
3. 999px~905px: Conainer의 크기: 825px, 화면 가운데 정렬, 좌우 여백이 70px에서 화면을 줄임에 따라 부드럽게 20px까지 줄어.
4. 904px~: Container의 크기: Window - 40px, 화면 가운데 정렬, 좌우 여백 각각 20px.

그 다음, #uni_header_logo의 반응형 웹 설계는 다음과 같습니다.

#### #uni_header_logo
```css
@media (min-width: 905px) {
	#uni_header_logo {
		width: auto; height: 30px;
		position: absolute; left: 0px; top: 10px;
		display: inline-block;
	}
} 
```

위 모델을 요약해서 설명하면 다음과 같습니다. (실제 소스코드에는 904px 이하 부분도 정의되어 있으나 이 부분은 모바일 용이기 때문에 무시해도 됩니다)

1. ~905px: Container요소(Window 아님)의 왼쪽에 딱 붙입니다.
2. 904px~: Container요소의 중앙에 배치합니다.

##### 만약 #uni_header_container(이하 Container)에 position: relative; 속성을 없앤다면 브라우저는 Logo의 위치를 Container 기준 left: 0px이 아닌 Window 기준 left: 0px 로 인식합니다. (이는 자식 요소에 position: absolute; 속성을 적용하였기 때문입니다)

### 4. #uni_header_nav_container의 글자에 마우스를 hover 시켰을 때 색 변화를 Fade-in, Fade-Out 하기 위해 CSS Transtion 속성을 이용하였습니다.

데스크톱 사이트에서 #uni_header_nav_container의 글자에 마우스를 올리거나 내리면 색이 흰색에서 회색으로, 회색에서 흰색으로 변하는 것을 볼 수 있습니다. 이 변화는 매우 부드럽고 우아합니다. 이를 저희는 CSS Trainsiton 요소를 활용하여 만들었습니다.

#### #uni_header_nav_container li
```css
#uni_header_nav_container li {
  display: inline-block;
  margin-right: 25px;
  font-family: 'NanumSquare', sans-serif;
  font-size: 15px; font-weight: 400;
}
```
#### #uni_header_nav_container li A:link 
```css
#uni_header_nav_container li A:link {
  text-decoration: none;
  color: #FFFFFF;
}
```
#### #uni_header_nav_container li A:hover

```css
#uni_header_nav_container li A:hover {
  text-decoration: none;
  color: #909090;
}
```

#### #uni_header_nav_container li A:visited

```css
uni_header_nav_container li A:visited {
  text-decoration: none;
  color: #FFFFFF;
}
```
#### #uni_header_nav_container li A:active
```css
#uni_header_nav_container li A:active {
  text-decoration: none;
  color: #FFFFFF;
}
```
#### #uni_header_nav_container li A
```css
#uni_header_nav_container li A {
  color: #FFFFFF;
  -moz-transition: color .2s ease;
  -o-transition: color .2s ease;
  -ms-transition: color .2s ease;
  -webkit-transition: color .2s ease;
  transition: color .2s ease;
}
```
##### 여기서 핵심은 가장 마지막에 있는 #uni_header_nav_container li A 입니다. transition 효과를 통해 hover 시켰을 때 효과를 부드럽게(ease) 주는 것입니다.

1. color: #FFFFFF : Transition이 시작되는 색을 지정합니다. Transition이 끝나는 색은 #uni_header_nav_container li A:hover 에 color에 지정되어 있습니다.
2. (-moz, -o, -ms, -webkit) -transition, transition : 각 브라우저들을 지원하는 코드입니다.
3. color : 위에 정의한 색을 받아오는 변수 입니다.
4. .2s : 변화 시간을 정해줍니다. 현재 0.2 초 입니다.
5. ease : 부드럽게 변하는 효과입니다. Fade-In, Fade-Out을 생각하면 좋습니다.





### 5. position: fixed; 를 통해 Header를 상단에 계속 유지시켰습니다.

Pillow Studio 홈페이지를 보면 Header가 항상 Window 최상단에 유지 됩니다. 이 것은 position: fixed; 를 통해 구현 하였습니다.

#####uni_header_background
```css
#uni_header_background {
  width: 100%; height: 50px;
  background: rgba(0,38,32,0.90);
  position: fixed;
  z-index: 100;
}
```




## 2. Mobile 헤더

Mobile 헤더에서 로고를 가운데로 보내고, 햄버거 메뉴와 로그인 아이콘, 검색 아이콘을 좌우로 배치하는 방법은 Desktop 헤더 부분의 2, 3 장과 같은 원리로 만들었습니다. 여기서는 햄버거 메뉴와 Modal에 관하여 다루겠습니다.

### 1. 햄버거 메뉴와 Modal을 활용하여 Mobile 메뉴를 만들었습니다.

##### Javascript로 <li>를 복사하여 Mobile 모달 내의 내용을 얻고 불필요한 코드 중복을 방지했습니다.

먼저 앞서본 Desktop용 헤더와는 다르게 Mobile을 위해 HTML구조를 변형했습니다. 그 차이점은 다음과 같습니다.

HTML

```html
	<nav id="uni_header_nav_container">
			<li><a href="crew.html">서비스</a></li>
			<li><a href="product.html">인공지능</a></li>
			<li><a href="product.html">보안</a></li>
			<li><a href="lab.html">웹 개발</a></li>
			<li><a href="product.html">개발자 센터</a></li>
			<li><a href="support.html">크루</a></li>
			<li><a href="support.html">고객 지원</a></li>
		</nav>
```

Desktop용 헤더에서는 <li>를 이용하여 목록을 작성했습니다. 

HTML

```html
	<div id="uni_header_hamburger_container">
		<a href="#">
			<span id="uni_header_hamburger_bar1"></span>
			<span id="uni_header_hamburger_bar2"></span>
		</a>
	</div>
		<div id="uni_header_modal_container">
	<nav id="uni_header_modal" class="uni_header_modal"></nav>
	</div>
```

반면, Mobile용 헤더는 훨씬 간소화된 모습을 볼 수 있습니다. 당연히 모바일 버전이니 로그인과 검색 아이콘을 없앤 것은 당연하고, Desktop용에서 보였던 <li>목록이 사라진 것을 알 수 있습니다. <li>태그 자리를 대신하여 들어간 <span>은 햄버거 아이콘을 위함입니다. 또한 모달을 위해 아래에 <div>태그가 달린것을 확인할 수 있습니다. 

여기서 <li>목록을 제거한 이유는 같은 코드가 반복될 필요도 없거니와, 이후 수정하는 사람들에게 Desktop용 <li>의 텍스트만 편집하면 자동으로 Mobile 모달내의 텍스트도 변경되게 함으로써 편의를 제공히기 위함입니다. 

그렇다면 어떤 방법으로 <li>의 텍스트를 복사할수 있을까요?  간단한 스크립트를 사용해 해결할 수 있습니다. 

#### Javascript

```javascript
$('#uni_header_nav_container').find('li').clone(Node).addClass('card_clone').prependTo('.uni_header_modal');
```

 먼저 Desktop용 HTML에서 ''#uni_header_nav_container' 를 셀렉트하여 하위 범위 주중 <li>를 모두 찾아 복사합니다. 그리고 이를 'prependTo()' 메서드를 통해 넣어줍니다. 이때, '.card_clone' 이라는 class를 추가해준 이유는 Desktop 화면에서 복사한 <li>를 숨기기 위해서였습니다. 

#### .card_clone

```css
.card_clone {
	@media (min-width: 905px) {.card_clone {display: none;}
 }
```

```css
.card_clone {
	@media (max-width: 904px) {.card_clone {display: block;}
}
```

이렇게 미디어 쿼리로 복사한 <li>를 보여주거나 가립니다. 



### 2. 모달과 햄버거 메뉴를 활용하여 Mobile 헤더를 만들었습니다.

이어서 모달을 생성하고 없애는 방법입니다.

#### Javascript

```javascript
$(document).ready(function(){
	$("#uni_header_hamburger_container").click(function(){
		var submenu = $("#uni_header_modal_container");
			if( submenu.is(":visible") ){
				submenu.fadeOut(400);
				enableScroll();
			}else{
				submenu.fadeIn(300);
				$("#uni_header_modal_container").css('height', $(window).height());
				disableScroll();
	}
});
```

햄버거 컨테이너가 클릭되었을 때  미리 CSS로 디자인된 모달창을 페이드인 하거나 페이드아웃 시켜줍니다. 여기서 'enableScroll()', 'disableScroll()' 이라는 함수를 호출하여 모달창이 전개되었을때 스크롤이 되지 못하게 해 줍니다. 

> https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily

마지막으로 햄버거 아이콘을 클릭하였을때 나타나는 효과는 다음 코드로 구현합니다. 

#### Javscript

```javascript
var submenu = $("#uni_header_modal_container");
	$('#uni_header_hamburger_container').click(function(e){
	e.preventDefault();
		if( submenu.is(":visible") ){
			$(this).removeClass("after");
		}else{
			$(this).addClass("after");
		}
	});
});
```

#####uni_header_hamburger_container a span 

```css
#uni_header_hamburger_container a span { 
	overflow:hidden;
	display: block;
	width: 22px; height:2px;
	margin-bottom:7px;
	background: #FFFFFF;
	transition: all 0.4s ease-in-out; -webkit-transition: all 0.4s ease-in-out;
}
```

#####uni_header_hamburger_container.after #uni_header_hamburger_bar1

```css
#uni_header_hamburger_container.after #uni_header_hamburger_bar1 {
	ransform: translate(0, 3px) rotate(45deg);
	-webkit-transform: translate(0, 3px) rotate(45deg);
	-ms-transform: translate(0, 3px) rotate(45deg);
}
```

#####uni_header_hamburger_container.after #uni_header_hamburger_bar2

```css
#uni_header_hamburger_container.after #uni_header_hamburger_bar2 {
	transform: translate(0, -6px) rotate(-45deg);
}
```

uni_header_hamburger_container a span' 에서는 햄버거 아이콘의 스타일을 지정하며, #uni_header_hamburger_container.after #uni_header_hamburger_bar1', #uni_header_hamburger_container.after #uni_header_hamburger_bar2'는 JS에서 제어되는 클래스로, 햄버거 아이콘 어떤 움직임으로 변화할지 지정합니다.

본 코드 외에도 많은 햄버거 스타일들이 있으니 여러가지를 참조하셔도 좋습니다. 
