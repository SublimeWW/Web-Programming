---
typora-root-url: Tutorial Image
---

#  Layer Design

## 1. Desktop 헤더

![uni_header_background](Tutorial Image\uni_header_background.png)

이 사진이 데스크톱에서 보는 Full Header 입니다. 이 헤더의 특징은 다음과 같습니다.

#### 1. 2개의 헤더로 구성하여 반응형 웹 구현을 더욱 쉽게 만들었습니다.

이 헤더는 background와 container 레이어로 구성되어 있습니다. 물론 이 굳이 2개의 레이어로 쪼개지 않고서도 잘 작동하는 header를 만들 수 있습니다. 하지만 이 레이어를 둔 이유는 이 사이트의 반응형을 javascript를 최대한 고려하지 않고 만들기 위함입니다.

현재 Pillow Studio 홈페이지를 background 레이어 없이 바로 만든다면, 반응형을 작업할 때, 로고, 검색 아이콘, 로그인 아이콘의 위치를 CSS의 calc 기능을 이용해서 만들어야 합니다. 

######uni_header_background 
```css
width: 100%; height: 50px;
position: absolute; right: calc(50% + 1010px); top: 5px;
```
이런식으로 말입니다. 이것의 문제는 크기가 지정되지 않은 div 모델인 경우, Javascript를 이용해서 left-margin을 계산해서 css 모델에 대입해야 한다는 것입니다. [right: calc(50% + 1010px)]이는 잘 작동하기도 힘들고 사이트의 구동속도도 느리게 만듭니다. 그래서 저희가 생각한 방법은 다음과 같습니다.

######uni_header_background 
```css
width: 100%; height: 50px;
background: rgba(0,38,32,0.90);
position: fixed;
z-index: 100;
```
######uni_header_container

![uni_header_background_basis](/uni_header_background_basis.png)

```css
width: 1800px; height: 50px;
margin: auto;
position: relative;
text-align: center;
```
margin: auto 속성을 통해 div를 (좌우)가운데 정렬을 하는 것입니다. 이 방법대로 홈페이지를 구성한다면 홈페이지 내의 width가 정의되지 모든 요소들까지도 한번에 정렬시킬 수 있습니다. 

<<<<<<< HEAD
#### 2.  position: relative와 absolute를 이용하여 div안에 div를 넣었습니다.
=======
### 1.  
>>>>>>> 89dd9dd69bb2821a0ea206ab9cc49f193184e93f