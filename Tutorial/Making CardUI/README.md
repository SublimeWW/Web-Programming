# CardUI 디자인

## 1. Card UI 호버

### 1. JS의 hover메서드를 이용해 호버를 구현했습니다. 

이미지를 이용하여 Card 형식의 UI로 홈페이지를 구현했다면 이용자에게 정보를 보여주기 위해서는 호버창과 같은 방법을 이용하는 것이 좋습니다. 호버를 구현하기위한 CSS, JS 작성에 앞서 간단한 HTML구조 규칙이 필요합니다. 

#### HTML

```html
<div class="index_cardui_card">		
		<nav class="index_cardui_card_discription">
			<h1>벡터를 이용한 단어 모델링</h1>
			<p>Wire, NLP</p>
		</nav>
		<img src="image/cardui/1.jpg" class="index_cardui_card_image" alt="Wire">
	</div>
	<div class="index_cardui_card">
		<nav class="index_cardui_card_discription">
			<h1>벡터를 이용한 단어 모델링</h1>
			<p>Wire, NLP</p>
		</nav>
		<img src="image/cardui/2.jpg" class="index_cardui_card_image" alt="Wire">
	</div>
	<div class="index_cardui_card">
		<nav class="index_cardui_card_discription">
			<h1>벡터를 이용한 단어 모델링</h1>
			<p>Wire, NLP</p>
		</nav>
		<img src="image/cardui/3.jpg" class="index_cardui_card_image" alt="Wire">
	</div>
```
위를 보시는 것과 같이, 매 <div>안에 <nav class="index_cardui_card_discription">를 넣어주어 호버창을 구현할 구조를 완성했습니다. <nav>안에는 호버에 들어갈 글자들이 <h1>태그와 <p>태그로 작성되어 있습니다.

요구되는 HTML구조가 간단한 만큼 CSS와 JS작성도 그리 어렵지 않습니다. 

#### Javascript

```javascript
$(document).ready(function(){
	$(".index_cardui_card").hover(function(){
		var $ImageHeight = $(this).height();
		var $ImageWidth = $(this).width();
		$(this).find("nav").fadeIn(0);
		$(".index_cardui_card_discription").css("margin-top", ($ImageHeight - 134) + "px");
		$(".index_cardui_card_discription").css("width", ($ImageWidth) + "px");
},	
function(){
	$(this).find("nav").fadeOut(0);
		$(".index_cardui_card_discription").delay(0).css("margin-top", " ");
}); });
```
안에 내용이 길어져서 그렇지 외관 구조는 아래와 같습니다.

#### Javascript

```javascript
$('select').hover(function(){ //when mouse over }, function(){ //when mouse out })
```
쉼표를 기준으로 앞은 마우스가 객체에 호버되었을때, 쉼표 뒤는 마우스가 객체를 벗어났을 때의 영역입니다. 

이를 바탕으로 JS는 다음과 같이 작성되어있습니다. 

1. '$(this).height()' 과 '$(this).width()' 로 대상 객체의 너비, 높이를 구합니다.
2. '$(this).find("nav").fadeIn(0)'로 호버된 대상 객체에서 하위 항목중 <nav>를 찾아 페이드인 합니다. 이때의 <nav>는 호버될 창 입니다. 앞서 보이지 않게 CSS로 'display: none' 처리 되어있습니다. 
3. 호버창이 페이드인 되는 동시, 호버창의 크기와 위치를 지정해 줍니다. 'css("","")'메서드를 통해 CSS를 추가해주며 추가된 항목은 이미지 너비를 그대로 본딴 '($ImageWidth) + "px"'과, ''$ImageHeight - 134px' 만큼의 'margin-top'을 주었습니다. 
4. 마우스가 객체를 벗어났을때 호버창은 페이드아웃 되며 'margin-top'은 초기화 됩니다. 



적용한 CSS는 다음과 같습니다. 

#### .index_cardui_card_discription

```css
.index_cardui_card_discription {
	position: absolute; margin-top: 0px; z-index: 1;
	height: 130px;
	background: rgba(0,0,0,0.80);
	display: none;
}
```
호버창의 크기와 스타일을 지정합니다. 앞서 말한것 처럼 처음에 보이지 않게 CSS로 'display: none' 처리되어있는 것을 확인할 수 있습니다. 

#### .index_cardui_card_image

```css
.index_cardui_card_image{
	width: 100%; height: 100%;
}
```
#### .index_cardui_card_discription

```css
.index_cardui_card_discription h1{
	margin-left: 20px;
	padding-top: 20px;
	font-family: 'NanumSquare', sans-serif; font-size: 20px;
}
```
#### .index_cardui_card_discription

```css
.index_cardui_card_discription p{
	margin: 0px;
	margin-left: 20px;
}
```


## CardUI 가변 그리드

### 1. column-count를 이용하여 가변 그리드를 구현하였습니다.

가변 그리드를 구현한 목적은 다음 예제를 통해 보여드리겠습니다.

#### HTML

```html
<section id="index_cardui_container">
	<div class="index_cardui_card">
		<nav class="index_cardui_card_discription">
			<h1>벡터를 이용한 단어 모델링</h1>
			<p>Wire, NLP</p>
		</nav>
		<img src="image/cardui/card_1.jpg" class="index_cardui_card_image" alt="Wire">
	</div>
	<div class="index_cardui_card">
		<nav class="index_cardui_card_discription">
			<h1>벡터를 이용한 단어 모델링</h1>
			<p>Wire, NLP</p>
		</nav>
		<img src="image/cardui/card_1.jpg" class="index_cardui_card_image" alt="Wire">
	</div>
	<div class="index_cardui_card">
		<nav class="index_cardui_card_discription">
			<h1>벡터를 이용한 단어 모델링</h1>
			<p>Wire, NLP</p>
		</nav>
		<img src="image/cardui/card_1.jpg" class="index_cardui_card_image" alt="Wire">
	</div>
	<div class="index_cardui_card">
		<nav class="index_cardui_card_discription">
			<h1>벡터를 이용한 단어 모델링</h1>
			<p>Wire, NLP</p>
		</nav>
		<img src="image/cardui/card_1.jpg" class="index_cardui_card_image" alt="Wire">
	</div>
</section>
```
#### .index_cardui_card 

```css
.index_cardui_card {
  width: calc(25% - 15px); 
  height: auto;
  display: inline-block;
  margin-bottom: 20px;
}
```
위에서 볼 수 있듯이 저희는 맨 처음에 margin으로 그리드를 구현하려고 하였습니다. 하지만 이렇게 되면 항상 맨 오른쪽 카드와 window 사이의 거리가 본래 의도했던 것보다 margin만큼 더 띄어지게 됩니다. 이것을 자바스크립트로 Handling 하려고 하였으나 실패하였습니다.

#### Javascript

```javascript
$(document).ready(function(){
  var n = $('.index_cardui_card').length;
  if(n%4 == 0){
      $(".index_cardui_card").css("margin-right", 10+"px");
  } else {
      $(".index_cardui_card").css("margin-right", 20+"px");
  }
  $(".index_cardui_card").hover(function(){
  	var $ImageHeight = $(this).height();
  	$(this).find("nav").fadeIn(0);
  	$(".index_cardui_card_discription").css("margin-top", ($ImageHeight - 134) + "px");
  },
  function(){
  	$(this).find("nav").fadeOut(0);
  		$(".index_cardui_card_discription").delay(0).css("margin-top", " ");
	});
});
```
Jquery의 ( ).length 함수는 이미지의 개수는 세어주나, 매 n번째 이미지마다 효과를 줄 수는 없습니다. 따라서 다른 방법을 찾아봤습니다.

##### 이 사이트에서 작동을 확인한 방법은 2가지 입니다.

1. column
2. display: flex

이 중에서 저희는 column을 선택하였습니다. display: flex의 경우 다음 버전에 올리도록 하겠습니다.

#####index_cardui_container
```css
#index_cardui_container {
	column-count: 2;
	-moz-column-count: 2;
	-webkit-column-count: 2;
}
```
#### .index_cardui_card

	.index_cardui_card {
		height: auto;
		display: inline-block;
		margin-bottom: 20px;
		cursor: pointer;
	}
여기서 주의할 점은 card의 크기를 지정하지 않았다는 것입니다. card의 크기를 지정하지 않아도 가로에 2개의 content를 두겠다고 선언했기 때문에 알아서 card의 크기가 줄어들게 됩니다.

##### 하지만 여기에 버그가 있습니다. column 특성상 가로 첫 번째 줄이 채워져야 두 번째 줄이 채워지는 것이 아닌 세로 첫 번째 줄이 채워져야 세로 두 번째 줄이 채워집니다. 즉, 카드의 개수가 여러개일 때, 의도치 않은 배열이 나오게 됩니다. 이로 인해 저희는 카드의 가로 개수를 2개로만 설정했고, 이 버그는 추후에 Jquery 로 수정할 예정입니다.

##### display: flex의 경우에도 버그가 있습니다. 저희는 justify-content: space-between; 속성을 이용하였는데, 이렇게 되면 한 줄에 카드를 4장 배열할 때, 마지막 줄에 카드가 4장이 없으면 가운데가 비게 됩니다. (카드가 맨 왼쪽, 오른쪽부터 채워져 점점 가운데로 오면서 채워지게 됩니다) 이는 display: flex로 주고, justify-content: center; 를 이용, 각 card는 background와 content로 레이어를 구분하면 버그 없이 구현할 수 있을거 같습니다. 이는 다음 버전에 구현할 예정입니다.

