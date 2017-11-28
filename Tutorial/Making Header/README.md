#  Layer Design

## 1. Desktop 헤더

![uni_header_background](Tutorial Image\uni_header_background.png)

이 사진이 데스크톱에서 보는 Full Header 입니다. 이 헤더의 특징은 다음과 같습니다.

### 1. 2개의 헤더로 구성하여 반응형 웹 구현을 더욱 쉽게 만들었습니다.

이 헤더는 background와 container 레이어로 구성되어 있습니다. 물론 이 굳이 2개의 레이어로 쪼개지 않고서도 잘 작동하는 header를 만들 수 있습니다. 하지만 이 레이어를 둔 이유는 이 사이트의 반응형을 javascript를 최대한 고려하지 않고 만들기 위함입니다.

현재 Pillow Studio 홈페이지를 background 레이어 없이 바로 만든다면, 반응형을 작업할 때, 로고, 검색 아이콘, 로그인 아이콘의 위치를 CSS의 calc 기능을 이용해서 만들어야 합니다. 

#### #uni_header_background 
```css
width: 100%; height: 50px;
position: absolute; right: calc(50% + 1010px); top: 5px;
```
이런식으로 말입니다. 이것의 문제는 크기가 지정되지 않은 div 모델인 경우, Javascript를 이용해서 left-margin을 계산해서 css 모델에 대입해야 한다는 것입니다. 이는 잘 작동하기도 힘들고 사이트의 구동속도도 느리게 만듭니다. 그래서 저희가 생각한 방법은 다음과 같습니다.

#### #uni_header_background 
```css
width: 100%; height: 50px;
background: rgba(0,38,32,0.90);
position: fixed;
z-index: 100;
```
#### #uni_header_container

![uni_header_background_basis](/uni_header_background_basis.png)

```css
width: 1800px; height: 50px;
margin: auto;
position: relative;
text-align: center;
```
margin: auto 속성을 통해 div를 (좌우)가운데 정렬을 하는 것입니다. 이 방법대로 홈페이지를 구성한다면 홈페이지 내의 width가 정의되지 모든 요소들까지도 한번에 정렬시킬 수 있습니다. 



### 2. div 안에 div를 배치하기 위해 position: absolute를 자식 요소에 적용하였습니다.

웹 개발자들이 처음 이 분야를 접할 때 맨 처음 고민하는 영역이기도 합니다. div의 박스 모델은 div가 겹쳐지게끔 허락하지 않습니다. 그렇기에 개발자들이 div안에 div를 배치하기위해 사용하는 기법이 여러가지 있습니다. 가장 많이 사용되어왔던것은 table cell처럼 div를 취급하는 방법입니다. 하지만 저희는 이 방법이 깔끔하다고 생각하지 않았기 때문에 다른 방법을 고안해냈습니다. 바로children div에 position relative 속성을 주는 것입니다.

#### 간단한 예제를 통해 보여드리겠습니다. 아래 코드는 Header Source 코드가 아닙니다.

##### HTML

```html
<div id="parent_1">
	<div id="children_1">
		Children
	</div>
</div>
```
######Parent_1
```css
width: 100%; height: 50px;
background: #FF0004;
```
######Children_1
```css
width: 100px; height: 50px;
margin: auto;
background: #001DFF;
color: #FFFFFF;
```
이렇게 div를 설정하면 children div가 부모 요소 속에 잘 자리잡고 있음을 알 수 있습니다.

하지만 아래의 경우엔 children div가 아래로 밀리게 됩니다.

##### HTML

	<div id="parent_1">
		Parent
		<div id="children_1">
			Children
		</div>
	</div>
이런 현상은 parent div에 2가지 이상의 속성이 있을 때 일어납니다. 하지만, 저희의 header에는 레이어 2층엔 4개의 요소(logo, nav, login, search) 가 있습니다. 따라서 div가 밀리는 것을 방지하기 위해서 중앙정렬을 해야하는 div(nav)를 제외한 나머지 div에는 position: absolute를 주었습니다. 이렇게 되면 nav가 나머지 요소에 영향을 받지 않아 밀리지 않게 됩니다.

따라서 저희가 적용한 방법은 다음과 같습니다.

##### HTML

```
<div id="parent_2">
	<span id="children_absolute">Parent</span>
	<div id="children_2">
		Children
	</div>
</div>
```

##### #Parent_2

```css
width: 100%; height: 50px;
background: #FF0004;
```

##### #Children_2

```css
width: 100px; height: 50px;
margin: auto;
background: #001DFF;
color: #FFFFFF;
```

##### #Children_absolute

```css
position: absolute;
```

이렇게 div를 설정하면 children div가 부모 요소 속에 잘 자리잡고 있음을 알 수 있습니다.

#### 이를 활용한 저희의 코드는 다음과 같습니다.

##### HTML

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
#####uni_header_background
	width: 100%; height: 50px;
	background: rgba(0,38,32,0.90);
	position: fixed;
	z-index: 100;
#####uni_header_container
	width: 1800px; height: 50px;
	margin: auto;
	position: relative;
	text-align: center;
#####uni_header_logo
		width: auto; height: 30px;
		position: absolute; left: 0px; top: 10px;
		display: inline-block;
	}
#####uni_header_login
	width: auto; height: 24px;
	position: absolute; right: 70px; top: 13px;
#####uni_header_search
	width: auto; height: 24px;
	position: absolute; right: 0px; top: 13px;
