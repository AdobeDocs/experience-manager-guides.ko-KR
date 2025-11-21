---
title: 기본 PDF 게시 기능 | 바코드 추가
description: 바코드를 추가하는 방법을 알아봅니다.
exl-id: 206bdcf9-2bcd-4bf1-815a-c97cdf0dc415
source-git-commit: 6e23f52fc9124d0f07f8108da1b5fe574f553469
workflow-type: tm+mt
source-wordcount: '778'
ht-degree: 0%

---

# PDF 출력에 바코드 추가

바코드는 기계가 읽을 수 있는 데이터 패턴이다. 바코드 스캐너나 스마트폰 카메라로 바코드를 스캔할 수 있다. 제품 세부 사항, 재고 번호 또는 웹 사이트 URL 등의 인코딩 정보가 유용할 수 있습니다. 바코드를 추가하면 데이터를 쉽게 캡처하고 고객 경험을 향상시키며 데이터 관리 및 보안을 향상시킬 수 있습니다.

바코드에 대한 스타일을 만들 수 있습니다. 그리고 페이지 레이아웃에 바코드를 삽입하는 데 사용합니다. 원하는 페이지 레이아웃의 샘플 바코드에 스타일을 적용할 수 있습니다.


이 자습서는 PDF 출력에 바코드를 추가하는 데 도움이 됩니다.

## 바코드를 생성하는 단계

바코드를 생성하려면 다음 단계를 수행하십시오.

### 템플릿의 CSS를 업데이트하여 바코드 값 렌더링

PDF 생성 중에 바코드를 렌더링하도록 `layout.css` 파일을 수정하십시오. &#39;qrcode&#39; 및 &#39;pdf417&#39;과 같은 다양한 바코드 유형이 지원됩니다.  자세한 내용은 [바코드 형식](#barcode-types)을 참조하세요.



```css
...
.barcode { 
-ro-replacedelement: barcode;   
-ro-barcode-type: code128;   
-ro-barcode-size: 100%;   
-ro-barcode-content: content();   
object-fit: contain;   
margin-top: 2mm;
 
}
...
```

### CSS 스타일을 사용하여 바코드를 생성합니다

다양한 방법으로 바코드를 생성할 수 있습니다. 몇 가지 예는 다음과 같습니다.

**예 1**

템플릿 헤더에 바코드 자리 표시자를 추가한 다음 스타일을 적용합니다.

1. **템플릿** > **페이지 레이아웃** 편집
1. 페이지 레이아웃을 선택합니다. 예를 들어 머리글이나 바닥글이 포함된 표지 페이지 레이아웃을 선택할 수 있습니다.
1. 바코드를 삽입할 위치에 다음 범위를 추가합니다.

   `<span class="barcode">Sample barcode</span></p>`

   >[!NOTE]
   >
   > `layout.css`에 정의한 것과 동일한 클래스 이름을 사용합니다.

1. `<Sample barcode>`을(를) 바코드 스캐너에서 읽을 값으로 바꾸십시오.

페이지 레이아웃이 포함된 템플릿을 사용하여 출력 PDF을 생성할 때 바코드를 볼 수 있습니다. 이전 단계를 수행한 후에는 바코드로 PDF 출력을 생성할 수 있습니다.

다음 스크린샷에는 PDF 출력에 샘플 바코드가 표시됩니다.

<img src="./assets/barcode-output-sample.png" alt="바코드가 있는 샘플 출력" width="700" border="2px">

**예 2**

프로젝트 제목 뒤에 바코드를 추가하려면 `Common.plt`기본&#x200B;**템플릿에서** 파일을 수정하십시오.

ISBN 번호에 대한 바코드를 만들려면 ISBN 번호를 추가하십시오. 그런 다음 ISBN 번호를 사용하여 바코드를 생성합니다.

```html
...

  <div data-region="header">
    <p class="chapter-header"><span data-field="project-title" data-format="default">Project Title</span> </p>
    <p><span class="barcode">978-1-56619-909-4</span></p>
  </div>
} 
...
```

**예 3**

맵 메타데이터를 사용하여 바코드를 생성하려면 다음을 수행합니다.

DITA 맵의 `<topicmeta>` 요소에 있는 모든 메타데이터를 사용하여 바코드로 표시합니다. 올바른 XPath를 사용해야 합니다. 예를 들어 DITA 맵의 `<resourceid>`에 `<topicmeta>`을(를) 추가할 수 있습니다.

다음 예제에서는 리소스 ID가 바코드를 생성하는 주 입력 역할을 합니다.

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



다음과 같이 페이지 레이아웃에서 리소스 ID를 사용할 수 있습니다.


```html
  <div data-region="header">
    <p class="chapter-header"><span data-field="project-title" data-format="default">Project Title</span> </p>
    <p><span class="barcode" data-field="metadata" data-format="default" data-subtype="//resourceid/@id">Resource ID (barcode)</span></p>
  </div>
} 
```

## 바코드 유형 {#barcode-types}

일반적으로 사용되는 바코드 중 일부는 다음과 같습니다.

| 유형 | -ro-바코드-type | 추가 세부 정보 |
| ---| --- | --- |
| QR 코드 | qrcode | ISO/IEC 18004:2015에 따른 QR 코드 바코드 기호. |
| 코드 128 | 코드128 | ISO/IEC 15417:2007에 정의된 코드 128 바코드 기호. |
| 코드 32 | code32 | 코드 32, 또한 이탈리아어 harmacode. |
| 코드 49 | code49 | ANSI/AIM-BC6-2000에 따른 코드 49. |
| 코드 11 | code11 |                            |
| 코드 93 | code93 |                            |
| 코드16k | code16k |                            |
| PDF417 | pdf417 | ISO/IEC 15438:2006 및 ISO/IEC 24728:2006에 따른 PDF417/MicroPDF417 바코드 기호. |
| 코드 3/9 | code39 | ISO/IEC 16388:2007에 따른 9개의 바코드 기호 코드 3. |
| 플레시 | 매시플레시 |                            |
| 채널 코드 | 채널코드 | ANSI/AIM BC12-1998에 따른 채널 코드. |
| 코다바르 | 코다바 | BS EN 798:1996에 따른 코다바 바코드 기호. |
| EAN-8 | ean-8 | BS EN 797:1996에 따른 EAN 바코드 기호. |
| EAN-13 | ean- | BS EN 797:1996에 따른 EAN 바코드 기호. |
| UPC-A | upc-a | BS EN 797:1996에 따른 UPC 바코드 기호. |
| UPC-E | upc-e | BS EN 797:1996에 따른 UPC 바코드 기호. |
| Ean/UPC 추가 | 어미 | BS EN 797:1996에 따른 EAN/UPC 추가 기능 바코드 기호. |
| 텔레펜 | 텔레펜 | 텔레펜 Alpha 라고도 합니다. |
| GS1 데이터베이스 / 데이터베이스 14 | 데이터 베이스 | ISO/IEC 24724:2011에 따른 GS1 데이터 막대 |
| GS1 Databar Expanded / Databar 14 Expanded | 데이터 베이스로 확장됨 | GS1 DataBar는 ISO/IEC 24724:2011에 따라 확장되었습니다. |
| GS1 데이터베이스 제한 | 데이터 베이스 제한 | ISO/IEC 24724:2011에 따라 GS1 DataBar가 제한됩니다. |
| POSTNET(우편 번호 인코딩 기술) | postnet | 미국 우편 서비스에서 사용하는 POSTNET(우편 번호 인코딩 기법) 바코드 기호. |
| 파마젠트랄머(PZN-8) | pzn8 | 독일 제약업계가 사용하는 코드39 기반 상징물이다. |
| 약전 | 약전 |                            |
| 코다블락 | 코다블락 | 기호학 AIM Europe &quot;Uniform Symbology Specification Codablock F&quot;, 1995. |
| 로그마르스 | 로그마르스 | 미국 국방부에서 사용하는 LOGMARS(Logistics Applications of Automated Marking and Reading Symbols) 표준. |
| 아즈텍 룬스 | 아즈텍룬 | Aztec은 ISO/IEC 24778:2008 Annex A에 따라 바코드 기호를 실행합니다. |
| Aztec 코드 | aztec-code | ISO/IEC 24778:2008에 따른 Aztec 코드 바코드 기호. |
| 데이터 매트릭스 | 자료 행렬 | ISO/IEC 16022:2006에 따른 데이터 매트릭스 ECC 200 바코드 기호. |
| 코드 1 | code-one |                            |
