---
title: 기본 PDF Publish 기능 | 각주에서 사용자 정의 스타일 사용
description: 각주의 숫자에 스타일을 적용하는 방법에 대해 알아봅니다.
exl-id: f1068f2f-2ace-4bdb-b5a4-46b03d4e43d6
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '667'
ht-degree: 0%

---

# 각주 스타일 적용


각주는 텍스트의 지정된 부분에 대한 참조를 설명하거나 인용하는 페이지 하단에 배치됩니다.

각주마다 페이지 하단에 각주 표식이 있는데, 일반적으로 숫자 또는 별표와 같은 기호입니다. 주 컨텐츠 내에서는 동일한 각주 표식이 각주 호출로 나타나며 위 첨자와 동일한 숫자 또는 기호로 표시됩니다.




## 각주 통화 및 표식 스타일 변경

각주 호출과 표식의 스타일을 변경하고 PDF 출력에서 모양을 관리할 수 있습니다. 이러한 스타일을 사용하면 문서의 각주를 빠르게 식별할 수 있습니다.


**예 1**:

해당 예제를 사용하여 각주 호출 및 마커 전후에 대괄호를 추가합니다.

* `footnote-call` 스타일에서 콘텐츠 특성을 사용하여 접두사 &quot;(&quot; 및 접미사 &quot;)&quot;를 추가하십시오. 그러면 주제 콘텐츠의 각주 번호 주위에 대괄호가 추가됩니다.
* `footnote-marker` 스타일에서 콘텐츠 특성을 사용하여 접두사 &quot;(&quot; 및 접미사 &quot;)&quot;를 추가하십시오. 그러면 페이지 맨 아래에 있는 각주 번호 주위에 대괄호가 추가됩니다.

```css
...
.fn::footnote-call { 
content: "(" counter(footnote, decimal) ")"; 
} 

.fn::footnote-marker { 
content: "(" counter(footnote, decimal) ")"; 
} 

...
```



<img src="./assets/pdf-output-footer-numbers.png" alt="PDF 출력의 바닥글" width="500" border="2px">

*각주 호출과 각주 마커 주위에 대괄호를 추가합니다.*

**예 2**:

각주 호출과 표식에 숫자 대신 별표나 그리스어 하단의 문자로 플래그를 지정할 수도 있습니다.


```css
.fn::footnote-call {
 content: counter(footnote, asterisks);
}
.fn::footnote-marker {
 content: counter(footnote, asterisks) " ";
}
```

출력에서 다음과 같은 항목을 볼 수 있습니다.

<img src="./assets/footnote-number-2.png" alt="PDF 출력의 바닥글" width="500" border="2px">

*각주 호출과 표식에 별표를 추가합니다.*

## 각주 통화 숨기기

특정 특성이 있는 각주 호출에 스타일을 적용할 수도 있습니다. 예를 들어 다음 스타일을 사용하여 ID가 있는 각주를 숨깁니다.
각주 호출은 기본 콘텐츠에 숨겨져 있지만 각주 마커는 페이지 하단에 나타납니다.

```css
.fn[id]::footnote-call {
		display: none;
                        }
```

## 각주 영역 서식 지정

각주 영역은 일반적으로 페이지 하단에 모든 각주가 배치되는 위치입니다. 페이지 레이아웃이나 CSS 스타일을 사용하여 각주 영역의 서식을 지정할 수 있습니다.


### 페이지 레이아웃

페이지 레이아웃의 페이지 속성을 사용하여 PDF 문서의 여러 섹션에서 각주 영역의 스타일을 지정할 수 있습니다. 예를 들어, 챕터에서 각주 영역의 여백 및 패딩 속성을 지정할 수 있습니다. 테두리 면, 스타일, 색상, 너비 및 반경을 변경할 수도 있습니다.

[페이지 레이아웃의 페이지 속성을 사용하여 작업](./design-page-layout.md#page-props-page-layout)하는 방법에 대해 알아봅니다.

### CSS 스타일

PDF 문서에서 스타일을 적용하고 각주 영역의 서식을 지정할 수 있습니다. 예를 들어 테두리 길이, 스타일, 색상 및 너비를 변경할 수 있습니다.

```css
	@page {
	  @footnote {
   		border-top-style: solid;
   		border-top-color: #FF0000;
   		border-top-width: 3px;
 		        }
	      }
```

## 각주 번호 매기기 다시 시작

기본적으로 각주는 문서에서 계속 번호가 매겨집니다. 그러나 페이지 레이아웃이나 CSS 스타일을 사용하여 각주의 번호 매기기를 다시 시작할 수 있습니다.


### 페이지 레이아웃

페이지 레이아웃에서 숫자를 지정하여 PDF 문서의 여러 섹션에서 각주 번호 매기기를 다시 시작할 수 있습니다. 예를 들어, [페이지 속성] 패널의 **번호 매기기 다시 시작** 필드에서 번호를 선택하여 각 장에 대한 각주 번호 매기기를 다시 시작합니다.

### CSS 스타일

다음 스타일을 사용하여 PDF 출력의 각 페이지에서 각주 번호 매기기를 재설정합니다.

```css
@page
{
counter-reset: footnote
}
```

따라서 각 페이지의 각주는 1에서 다시 시작됩니다.

## 인라인 각주 표시

일반적으로 각 각주는 블록으로 표시되거나 새 라인에서 시작됩니다. 하지만 여러분은 그것들을 일렬로 놓거나 서로 옆에 놓을 수도 있어요.

```css
.fn{
  	display: inline;
              }
```

## 각주 상호 참조에 스타일 적용

각주를 상호 참조하고 PDF 출력에서 동일한 각주를 여러 번 참조할 수도 있습니다. 이렇게 하면 동일한 인용문이나 상세 노트를 다시 각주를 만들지 않고 문서에서 여러 번 참조할 수 있습니다.

예를 들어 다음 스크린샷은 동일한 각주가 PDF 출력의 모든 도시에 상호 참조되는 방법을 보여 줍니다.
<img width="550" alt="pdf의 각주 참조" src="./assets/link-footnotes.png" border="2px">

*각주에 상호 참조를 삽입합니다.*





CSS 스타일을 사용하여 각주에 대한 상호 참조의 서식을 지정할 수도 있습니다. 예를 들어 상호 참조의 배경색을 변경할 수 있습니다.

```css
    .xref-fn{
	background-color: red;
	}
```



