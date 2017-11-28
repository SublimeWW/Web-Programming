#  Footer 디자인

Tutorial Course의 목적에 대해서 알고 싶다면 https://github.com/iknowSteven/Web-Programming 의 README 를 읽어보십시오. Tutorial Course에서는 이 사이트의 주요 기능 구현에 대한 상세한 설명을 담고 있습니다. 자신의 실력이 충분하다고 생각하는 분은 바로 Source Code를 봐도 좋습니다.

이 프로젝트에 기여(Contribute)하고 싶으신 분은 Pull Request 하여 주십시오. 이 글은 Pillow Studio 개발자 센터 레퍼런스에도 올라갑니다. Pull Request가 오면 Pillow Studio Web 개발 팀에서 검토 후 적용 시키겠습니다. Request 가 받아들여지면 Pillow Studio 홈페이지에도 이름이 오르게 됩니다.

## 1. Desktop 푸터

레이아웃의 구현은 Desktop 헤더 구현과 같습니다. 레이아웃 구현의 원리가 궁금하신 분은 헤더 관련 Tutorial을 보십시오.

### 1. Footer 1과 Footer 2를 분리하기 위해 CSS 박스 모델에 border-bottom; 속성을 주었습니다.

Pillow Studio 홈페이지 푸터는 총 3개의 푸터로 구성되어 있습니다. 저희는 홈페이지에 안정감과 넓어보이기 위한 효과를 주기 위해 Footer 1과 Footer 2를 구분하였습니다. 그 구분선을 저희는 border-bottom; 속성을 통해 해결하였습니다.

#### #uni_footer_1_background 
```css
#uni_footer_1_background {
	width: 100%; height: auto;
	border-bottom: #000000 solid 1px;
}
```
HTML에 선을 그리는 태그(Hr)가 있음에도 불구하고 div 밑에 border를 준 이유는 사이트 레이아웃을 간단하게 하기 위해서입니다. hr을 넣어 새로운 층을 만드는 것보다 이렇게 하는 것이 더욱 더 관리하기에도 좋습니다.




## 2. Mobile 푸터

모바일 푸터의 핵심은 아코디언 메뉴입니다. 헤더의 Modal과 비슷하다고 느낄수도 있지만 그 구현 원리는 전혀 다릅니다.

### 1. max-height 속성을 이용하여 아코디언 메뉴를 구현하였습니다.

#### 1. 실패기

##### Javascirpt

```javascript
$(document).ready(function(){
  $("#Universial_Footer_Hamburger_Menu_Category_1").click(function(){
      var submenu = $('#Main_Footer_2_Category_1_Ul');
      if( submenu.is(":visible") ){
          submenu.slideUp();
      }else{
          submenu.slideDown();
      }
  });
});
```
저희가 처음에 구현한 아코디언 메뉴 푸터는 jquery의 slideUp 코드를 이용하였습니다. 하지만 이는 큰 문제를 가지고 있습니다.

바로 slideUp 코드가 visibility: none 속성을 이용하는데, slideUp이 일어났을 때 데스크톱 모드로 반응형 디자인을 변경하면 해당 부분이 안보이게 되는 것이였습니다. 물론 이를 수정하기 위해 다양한 방법을 시도하였습니다.

##### 하지만 Javascipt가 CSS를 컨트롤하기 시작하면 해당 ID나 Class는 무조건 Javascript로만 컨트롤해야 하기 때문에 결국 모두 실패하였습니다.

실패한 코드는 다음과 같습니다.

#### 2. 성공기

결국 저희는 방향을 틀게 되었습니다.  visibility: true; 속성으로는 도저히 데스크톱 반응형까지 컨트롤할 수 없었기 때문입니다. 실제로 slideUp으로 아코디언 메뉴를 구성한 사이트들을 보면 데스크톱 모드까지 고려한 사이트는 아직까지 못봤습니다.

저희가 다음으로 시도한 코드는 max-height를 이용한 방법이였습니다. 글씨가 담긴 .uni_footer_2_list의 height를 조절하면 마치 아코디언 메뉴처럼 구현할 수 있을 것이라는 아이디어에서 시작하였습니다.

#### .uni_footer_2_list

	.uni_footer_2_list {
		width: calc(100% - 40px);
		margin-left: 20px; margin: auto;
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.2s ease-out;
	}
#### Javascript

```javascript
$(document).ready(function(){
  var object = document.getElementsByClassName("uni_footer_2_panel");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    object[i].onclick = function() {
      this.classList.toggle("active");
      var list = this.nextElementSibling;
      if (list.style.maxHeight){
        list.style.maxHeight = null;
      } else {
        list.style.maxHeight = panel.scrollHeight + "px";
      } 
    };
  }
});
```
code from: https://www.w3schools.com/howto/howto_js_accordion.asp



### 2. 아코디언 메뉴의 패널(.uni_footer_2_panel)의 색을 가득 채우기 위해 레이아웃을 변경하였습니다.

기존의 헤더 및 여타 모델 레이아웃들은 Background가 있고, content가 담겨있는 요소는 일정크기로 설정하고 margin: auto; 속성을 통해 가운데 정렬을 하였습니다.

##### 하지만 이 모델로 푸터를 적용시키면, 패널의 배경 색상이 꽉 채워지지 않고 패널의 width 만큼만 채워지게 됩니다. 따라서 저희는 Background(.uni_footer_2_container)안에 Background(.uni_footer_2)를 두고 그 안에 Content(.uni_footer_2_panel, .uni_footer_2_list)를 담았습니다.

#### #uni_footer_2_container

```html
<div id="uni_footer_2_container">
	<div class="uni_footer_2">
		<div class="uni_footer_2_panel">
			<span>Pillow Studio</span>
			</div>
			<nav class="uni_footer_2_list">
			<li>Pillow Studio 소개</li>
			<li>Thinkagen Studio 소개</li>
			<li>크루</li>
			<li>Pillow Studio 후원</li>
		</nav>
	</div>
	<div class="uni_footer_2">
		<div class="uni_footer_2_panel">
			<span>활동 분야</span>
		</div>
		<nav class="uni_footer_2_list">
			<li>인공지능</li>
			<li>보안</li>
			<li>웹 개발</li>
			<li>앱 개발</li>
			<li>디자인</li>
		</nav>
	</div>
	<div class="uni_footer_2">
		<div class="uni_footer_2_panel">
			<span>개발자 센터</span>
		</div>
		<nav class="uni_footer_2_list">
			<li>레퍼러스</li>
			<li>API</li>
			<li>Wire</li>
		</nav>
	</div>
	<div class="uni_footer_2">
		<div class="uni_footer_2_panel">
			<span>스토어 및 지원</span>
		</div>
		<nav class="uni_footer_2_list">
			<li>앱</li>
			<li>솔루션</li>
			<li>환불</li>
			<li>개인 고객 지원</li>
			<li>기업 고객 지원</li>
		</nav>
	</div>
	<div class="uni_footer_2">
		<div class="uni_footer_2_panel">
			<span>Pillow Studio 가치</span>
		</div>
		<nav class="uni_footer_2_list">
            <li>사회에 대한 책임</li>
			<li>개인 정보 보호 의무</li>
			<li>경영 가치관</li>
			<li>커리어</li>
			<li>투자 정보</li>
		</nav>
	</div>
	<div class="uni_footer_2">
		<div class="uni_footer_2_panel">
			<span>Family Site</span>
		</div>
		<nav class="uni_footer_2_list">
			<li>Pillow Studio</li>
			<li>Thinkagen Studio</li>
			<li>Wire</li>
			<li>Beta Engine</li>
		</nav>
	</div>
</div>
```


### 3. 알려진 버그

#### 1. Footer 배경 색 문제

#### html 

```css
html {
  margin: 0px; padding: 0px;
  background: #EFEFEF;
}
```
##### 이렇게 html에 background 속성을 준 이유는 footer에만 배경색을 줄 경우, footer_3에 배경색이 안 들어가기 때문입니다. 이 버그는 추후 수정할 예정입니다.

#### footer

```css
footer {
	background: #EFEFEF;
}
```
저희는 아코디언 메뉴를 너무 빠른 시일내 구현한 나머지 코드에 불필요한 부분이 있게 된 것이 이 버그의 원인이라고 생각합니다. 빠른 시일내에 버그를 수정하여 글을 새로 업로드하겠습니다.