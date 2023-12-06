---
title: 기본 PDF 게시 기능 | 바코드 추가
description: 바코드를 추가하는 방법을 알아봅니다.
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '302'
ht-degree: 0%

---

# PDF 출력에 바코드 추가

바코드는 기계가 쉽게 처리할 수 있는 정보를 포함하는 데 유용하다. 마찬가지로 QR 코드는 독자가 모바일 장치로 열 수 있는 링크에 사용됩니다.

이 자습서는 PDF 출력의 모든 페이지 위에 바코드를 추가하는 데 도움이 됩니다.

## 바코드를 생성하는 단계

바코드를 생성하려면 다음 단계를 수행하십시오.

### DITA 맵에 리소스 ID 추가

리소스 ID 요소를 DITA 맵에 추가합니다. 리소스 ID는 바코드를 생성하는 주 입력 역할을 합니다.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE map PUBLIC "-//OASIS//DTD DITA Map//EN" "technicalContent/dtd/map.dtd">
<map id="GUID-3c330691-4dac-4020-904a-d2d6246aeeb1-en">
  <title>Barcode Sample</title>
  <topicmeta>
    <resourceid id="7a5bda1c-b1db-4fd8-8763-a731e2e8abba">
    </resourceid>
  </topicmeta>
  <topicref href="GUID-139f6c64-bea3-4f17-8b22-ee131557e249-en.dita" type="topic">
  </topicref>
</map>  
```

작성 모드에서 리소스 ID를 편집할 수도 있습니다.

<img src="./assets/barcode-map.png" alt="바코드가 있는 샘플 출력" width="700" border="2px solid blue">


### 템플릿 헤더에 바코드 자리 표시자 추가

수정 `Common.plt` 파일 위치: **기본** 템플릿을 사용하여 프로젝트 제목 뒤에 바코드를 추가합니다.

```html
...
  <div data-region="header">
    <p class="chapter-header"><span data-field="project-title" data-format="default">Project Title</span> </p>
    <p><span class="barcode" data-field="metadata" data-format="default" data-subtype="//resourceid/@id">Resource ID (barcode)</span></p>
  </div>
} 
...
```


### 템플릿의 CSS를 업데이트하여 바코드 값 렌더링

수정 `content.css` PDF 생성 중 바코드를 렌더링할 파일입니다. &#39;qrcode&#39; 및 &#39;pdf417&#39;과 같은 다양한 바코드 유형이 지원됩니다.  자세한 내용은 [바코드 유형](#barcode-types).



```css
...
.barcode {
  -ro-replacedelement: barcode;
  -ro-barcode-type: code128;
}
...
```

이전 단계를 수행한 후에는 바코드로 PDF 출력을 생성할 수 있습니다.

다음 스크린샷에는 PDF 출력에 샘플 바코드가 표시됩니다.

<img src="./assets/barcode-output-sample.png" alt="바코드가 있는 샘플 출력" width="700">


## 바코드 유형 {#barcode-types}

| 유형 | CSS 속성 | 추가 속성 |
| ------------------------------- | ----------------------- | -------------------------- |
| QR 코드 | qrcode |                            |
| PDF417 | pdf417 |                            |
| 데이터 매트릭스 | 자료 행렬 |                            |
| Aztec 코드 | aztec-code |                            |
| 격자 행렬 | 격자 행렬 |                            |
| Maxicode | maxicode mode-4 |                            |
| 마이크로 QR | microqr |                            |
| 코드 1 | code-one |                            |
| 코다블락 | 코다블락 |                            |
| GS1 데이터베이스 제한 | 데이터 베이스 제한 |                            |
| GS1 데이터베이스 전방향 | 데이터 베이스 전방위 |                            |
| EAN-13 | ean- |                            |
| GS1-128 (EAN-128) | 코드128 | -ro-barcode-encoding: gs1; |
| ITF- | itf14 |                            |
| UPC-A | upc-a |                            |
| 코드 128 | 코드128 |                            |
| 인터리브된 2/5 | code2of5 인터리브됨 |                            |
| POSTNET | postnet |                            |
| 네덜란드 우편 Kixcode | kixcode |                            |
| 우정사업본부 | 우정사업본부 |                            |
| 도이치 포스트 레이트코드 | dp-leitcode |                            |
| 오스트레일리아 포스트 | 어스포스트 |                            |
| 로그마르스 | 로그마르스 |                            |
| 약전 | 약전 |                            |
| USPS OneCode(Intelligent Mail) | usps-onecode |                            |


