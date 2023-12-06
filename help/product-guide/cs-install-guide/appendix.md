---
title: 부록
description: 마이그레이션을 위한 InDesign 문서를 준비하는 방법 알아보기
exl-id: 71b09039-b220-45f3-b334-c23f5b09dadc
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '2852'
ht-degree: 0%

---

# 부록 {#id195AD0L60Y4}

## AEM 문제 해결 안내서

AEM Guides를 설치 및 구성했으면 문제를 해결할 수 있습니다.

## 참조 유효성 검사

제공된 스크립트를 실행하여 참조를 확인할 수 있습니다. 이러한 스크립트는 손상된 참조를 식별한 다음 패치하거나 수정하는 데 도움이 될 수 있습니다.

- `/bin/fmdita/validatebtree?operation=validate` - 손상된 콘텐츠 참조를 보고하지만 수정하지 않습니다.

- `/bin/fmdita/validatebtree?operation=patch` - 끊어진 콘텐츠 참조 및 패치를 나열하거나 수정합니다.


**스크립트 유효성 검사**

제품 패키지에서 사용할 수 있는 유효성 검사 스크립트를 사용하여 참조를 확인하려면 다음 단계를 수행하십시오.

1. 유효성 검사 스크립트 실행 \[`/bin/fmdita/validatebtree?operation=validate`\] 끊어진 새 참조가 있는지 확인합니다.
1. 유효성 검사 스크립트에서 오류가 보고되는 경우 패치 스크립트를 사용하여 패치할 수 있습니다.
1. 아래에 제공된 세부 정보를 기록하고 필요한 경우 고객 성공 팀과 공유하십시오.
1. 
   - 유효성 확인 스크립트로 인쇄된 로그
- 패키지`/content/fmdita/references`&quot;
- 보고된 시나리오에 따른 기타 필수 세부 정보

**패치 스크립트**

제품 패키지에서 사용할 수 있는 패치 스크립트를 사용하여 끊어진 참조를 패치하려면 다음 단계를 수행하십시오.

1. 패치 스크립트 실행 `[/bin/fmdita/validatebtree?operation=patch]` 를 클릭하여 끊어진 참조를 수정합니다. 스크립트 실행은 몇 분 정도 소요되며 진행됨에 따라 로그가 인쇄됩니다. 실행이 완료되면 &quot;&quot;가 인쇄됩니다.`Done`끝에 &quot;이 있습니다.

>[!NOTE]
>
> 참조를 위해 로그를 복사하고 저장하는 것이 좋습니다.

1. 패치 스크립트가 성공적으로 실행되면 다음 검사를 수행할 수 있습니다.
1. 
   - 새 노드 확인 &quot;`references_backup_<timestamp>"` 이(가) 아래에 생성되었습니다. `/content/fmdita`
- 참조가 수정되었는지 확인합니다.

**Logger**

아래 제공된 세부 정보에 따라 이 스크립트 실행에 대해 별도의 로거를 만들 수도 있습니다.

- 클래스 &quot;에 로거 추가`adobe.fmdita.common.BTreeReferenceValidator`&quot;
- 다음으로 설정 `DEBUG`

작성된 로그 파일은 스크립트 실행과 관련된 모든 정보를 기록하며 브라우저에서 스크립트를 트리거하는 동안 브라우저 세션 시간 초과에 유용합니다.

## 변환을 위한 InDesign 파일 준비 {#id195DBF0045Z}

InDesign은 작성자에게 매력적이고 복잡한 문서를 만들 수 있는 다양한 기능을 제공합니다. 따라서 문서의 여러 부분이 시각적으로 페이지에 배치되지만 이러한 텍스트 프레임 간에 흐름을 제공하려고 시도하지 않는 경우가 많습니다. &#39;*읽는 순서*&#x200B;텍스트 프레임의 &#39; 은 정의되지 않았습니다. IDML 파일에는 의미 있는 순서를 따르지 않을 수 있는 스토리가 포함됩니다. 최종 결과는 임의의 순서로 단락, 표 및 그래픽이 있는 하나 이상의 DITA 주제가 됩니다.

DITA 편집기에서 DITA 컨텐트를 적절한 순서로 편집할 수 있지만 IDML 파일을 생성하기 전에 InDesign 파일을 수정하는 것이 훨씬 쉽습니다. 이 작업은 소스 문서의 모양을 변경하지 않고 수행할 수 있습니다. 또한 읽기 순서를 적절히 정의하여 소스 문서에 액세스할 수 있는 이점이 있습니다.

***텍스트 프레임 스레딩***

InDesign은 이 용어를 사용합니다 *&#39;스레딩&#39;* 한 프레임을 다른 프레임에 연결하는 프로세스입니다. 텍스트 프레임 스레딩에 대한 자세한 내용은 *[스레딩 텍스트](https://helpx.adobe.com/in/indesign/using/threading-text.html)* InDesign 설명서의 항목입니다.

***프레임 겹침***

일부 InDesign 문서에서는 레이아웃으로 인해 스레드되지 않은 겹치는 프레임을 사용합니다. 이 콘텐츠를 주 스레드로 병합하는 것은 매우 어려울 수 있습니다. 가장 좋은 방법은 DITA 환경에서 결과를 편집하는 것입니다.

***스토리 InDesign***

InDesign 문서에 있는 컨텐츠의 각 스레드 흐름을 라고 합니다.*story*&#39;. 최상의 결과를 얻으려면 스토리 수를 제한적으로 유지하는 것이 좋습니다. 그러나 문서의 일부 부분이 DITA 출력에 필요하지 않을 수 있습니다. 예를 들어 페이지 바닥글은 거의 필요하지 않지만, 신중하게 다루지 않을 경우 주제 중간에 표시될 수 있습니다.

문서에서 필요하지 않은 텍스트를 제외하는 가장 쉬운 방법은 특수 문자를 제공하는 것입니다 *단락 태그* 원하지 않는 콘텐츠에만 사용됩니다. 예를 들어, 를 재사용하는 대신 *\[기본 단락\]* 바닥글에 대해 전용 을 만듭니다. *바닥글* 태그에 가깝게 배치하십시오. 그런 다음 MapStyle 파일에서 *바닥글* 다음과 같이 삭제할 단락:

```
<paraRule style="Footer" local="0" refactor="drop">
   <attributeRules createID="false"/>
</paraRule>
```

***DITA 문서 유형에 매핑***

소스 문서에는 항목의 시작을 표시할 수 있는 단락 스타일 또는 요소가 하나 이상 있어야 합니다. 일반적으로 문서를 사용합니다 *제목1* 를 문서에 있는 최상위 제목의 이름으로 사용하십시오. 그런 다음 해당 스타일에서 특정 DITA doctype으로의 매핑을 만들 수 있습니다. 문서가 잘 정리되어 있고 *제목1* 는 항상 변함없이 있으므로 좋은 결과를 얻을 수 있습니다.

***여러 DITA 문서 유형***

일부 *제목1* 단락은 다른 DITA doctype으로 변환한 다음 InDesign에서 단락 스타일을 복제해야 합니다. 이러한 스타일에 다음과 같은 이름을 쉽게 인식하도록 합니다. *제목1\_genTask* 또는 *제목1\_troubleshooting* 적절합니다. 그런 다음 아래와 같이 mapStyle 파일을 설정합니다.

```
<doctypes>
   <doctypeParaRule style="Heading1" local="0" mapToDoctype="concept">
      <attributeRules createID="true"/>
   </doctypeParaRule>
   <doctypeParaRule style="Heading1_genTask" local="0" mapToDoctype=" generalTask">
      <attributeRules createID="true"/>
   </doctypeParaRule>
   <doctypeParaRule style="Heading1_troubleshooting" local="0"mapToDoctype=" troubleshooting">
      <attributeRules createID="true"/>
   </doctypeParaRule>
</doctypes>
```

***구조화된 InDesign 문서***

InDesign은 XML과 느슨한 관계를 맺고 있습니다. 문서에는 XML DTD가 포함될 수 있으며 기본 스토리가 해당 DTD에 대해 유효할 수도 있지만, 일부 내용이 XML이지만 DTD가 포함되지 않은 하이브리드 문서를 만들 수도 있습니다. 이는 DITA로 성공적으로 변환하는 데 바람직하지 않은 경우입니다. 문서에 XML 부분이 포함되어 있는 경우 출력을 XML에 저장하고 결과를 수용할 수 있는지 확인합니다. 그렇지 않으면 DITA 컨텐트에도 잘못된 컨텐트가 포함되거나 완전히 실패할 수 있습니다.

***표 서식***

InDesign 테이블 서식 지정 규칙에서 DITA의 동일한 테이블 서식 지정으로의 변환은 복잡한 프로세스입니다. 이는 DITA에서 사용되는 Oasis \(CALS\) 테이블 모델에서 제공하는 기본 옵션과 비교하여 소스 파일에서 사용할 수 있는 서식 기능이 풍부하기 때문입니다. [InDesign]는 [왼쪽 맞춤] 및 [오른쪽 맞춤]을 허용하지만 [균등 배치] 텍스트가 텍스트 방향에 따라 항상 균등 배치되지만, [세로 및 가로 텍스트 맞춤]이 제공되어 유사한 결과를 얻을 수 있습니다.

InDesign이 열 및 행 구분 기호를 처리하는 것이 Oasis 테이블 모델의 기본 옵션보다 훨씬 더 효율적입니다. InDesign은 테두리 유형 \(단색 또는 패턴\), 테두리 두께, 테두리 색상, 테두리 색조, 테두리 간격 색상 및 테두리 간격 색조의 네 가지 셀 테두리를 제공합니다. 이러한 모든 항목은 0 또는 1만 선택할 수 있는 각 셀 \(entry element\)의 오른쪽과 아래쪽에 있는 테두리에 매핑해야 합니다. 테두리를 숨기거나 테두리를 표시합니다.

InDesign의 국경 통제는 다음 수준에서 적용할 수 있습니다.

- 표 스타일
- 셀 스타일
- 각 셀의 로컬 재정의

DITA에 대한 InDesign 변환 프로세스는 다음과 같이 테두리 결정을 적용합니다.

- 표 스타일은 다음에 매핑됩니다 `colspec/@colsep` 세로 규칙의 속성입니다. 가로 규칙은 다음에 매핑됩니다. `row/@rowsep` 특성. 두 경우 모두 테두리가 정의되지 않으면 속성이 만들어지지 않습니다.
- 셀 스타일은 `entry/@colsep` 및 `entry/@rowsep` 속성. 이러한 값은 테이블 스타일 파생 테두리 규칙을 재정의합니다.
- 로컬 오버라이드는 셀에 서식을 직접 적용하고 표 스타일과 셀 스타일을 오버라이드합니다.

***교대 패턴***

InDesign 표 스타일을 사용하면 열과 셀 규칙이 교대 패턴을 따르도록 할 수 있습니다. 이 기능은 변환을 위해 지원되지만, 한 패턴 그룹이 결정 \(1\)을 표시하도록 매핑되고 다른 패턴 그룹이 결정 \(0\)을 숨기도록 매핑될 때만 결과가 명확해집니다.

## InDesign-DITA 마이그레이션을 위한 매핑 파일 준비 {#id194AF0003HT}

올바른 DITA 변환에는 소스 문서의 컨텐트와 일치하는 매핑 파일이 필요합니다. 비정형 InDesign 문서의 경우 사용 가능한 모든 단락 스타일과 문자 스타일을 매핑해야 합니다. XML 구조화된 InDesign 문서의 경우 연관된 DTD의 모든 요소를 매핑해야 합니다.

비정형 및 정형 InDesign 문서에 대한 매핑 파일이 다릅니다. 비정형 소스 콘텐츠를 DITA로 변환하는 데 필요한 처리 요구 사항이 복잡하기 때문입니다.

매핑 파일의 샘플은 아래에 나와 있습니다.

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE styleMap SYSTEM "mapStyle.dtd">
<styleMap xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="mapStyle.xsd" >
   <doctypes>
      <mapDoctypeParaRule root="itpx:stories" mapToDoctype="map">
         <attributeRules createID="true">
            <addNew name="outputclass" value="map"/>
         </attributeRules>
      </mapDoctypeParaRule>
      <doctypeParaRule style="Heading 1" local="0" mapToDoctype="concept">
         <attributeRules createID="true"/>
      </doctypeParaRule>
      <doctypeParaRule style="Heading A" local="0" mapToDoctype="topic">
         <attributeRules createID="true"/>
      </doctypeParaRule>
   </doctypes>
   <wrappingRules>
      <wrap elements="li+" context="number" wrapper="ol">
         <attributeRules createID="true"/>
      </wrap>
      <wrap elements="li+" context="bullet" wrapper="ul">
         <attributeRules createID="true"/>
      </wrap>
   </wrappingRules>
   <paragraphStyleRules>
      <paraRule style="Heading 2" local="0"  mapTo="p">
         <attributeRules createID="true"/>
      </paraRule>
      <paraRule style="Heading 3" local="0"  mapTo="p">
         <attributeRules createID="true"/>
      </paraRule>
      <paraRule style="List Paragraph" local="p[-|-|-|-|-|b|-|-]" context="bullet" mapTo="li">
         <attributeRules createID="true"/>
      </paraRule>
      <paraRule style="List Paragraph" local="p[-|-|-|-|-|n|-|-]" context="number" mapTo="li">
         <attributeRules createID="true"/>
      </paraRule>
      <paraRule style="List Paragraph" local="0" context="bullet" mapTo="li">
         <attributeRules createID="true"/>
      </paraRule>
      <paraRule style="Normal" local="0"  mapTo="p">
         <attributeRules createID="true"/>
      </paraRule>
      <paraRule style="Normal" local="p[-|-|-|-|-|b|-|-]" context="bullet" mapTo="li">
         <attributeRules createID="true"/>
      </paraRule>
      <paraRule style="Title" local="0"  mapTo="p">
         <attributeRules createID="true"/>
      </paraRule>
   </paragraphStyleRules>
   <characterStyleRules>
      <charRule style="Bold" local="0" mapTo="b">
         <attributeRules createID="false"/>
      </charRule>
      <charRule style="Code" local="0" mapTo="codeph">
         <attributeRules createID="false"/>
      </charRule>
      <charRule style="[No character style]" local="c[Bold|-|-|-|-|-|-|-]" mapTo="b">
         <attributeRules createID="false"/>
      </charRule>
      <charRule style="[No character style]" local="c[Italic|-|-|-|-|-|-|-]" mapTo="i">
         <attributeRules createID="false"/>
      </charRule>
   </characterStyleRules>
</styleMap>
```

매핑 파일은 모든 소스 단락 스타일과 문자 스타일 코드를 나열하는 간단한 구조의 XML 파일입니다. 파일 내용은 아래에 설명되어 있습니다.

**스타일 매핑**

다음에서 `styleMap` 요소를 사용하여 두 개의 선택적 속성을 지정할 수 있습니다. `@map_date` 및 `@map_version` 매핑 파일의 버전을 기록하는 경우.

**문서 유형**

다음 `doctypes` 요소는 지원되는 DITA 맵과 주제 매핑을 나열합니다.

**문서 유형 단락 규칙 매핑**

다음 `mapDoctypeParaRule` 요소는 필수입니다. 소스 XML의 루트 요소는 항상 DITA 맵의 루트에 매핑되므로 이 요소의 속성을 편집해서는 안 됩니다 `map` 요소를 생성하지 않습니다.

**문서 유형 단락 규칙**

다음 `doctypeParaRule` 요소는 필수입니다. 이렇게 하면 변환 프로세스에서 새 주제의 시작을 식별할 수 있습니다. 일반적으로 `@style` 속성은 단독으로 `@local` 속성이 0으로 설정되어 있습니다. 그러나 선택한 스타일에 항상 로컬 서식 재정의가 있는 경우 각 스타일과 로컬 재정의에 대한 규칙을 추가해야 합니다. 이렇게 하면 생성된 매핑 파일에서 다음 항목 또는 유사한 항목을 찾을 수 있음을 쉽게 알 수 있습니다.

```
<paraRule style="Heading 1" local="0" mapTo="p">
   <attributeRules createID="true"/>
</paraRule>
<paraRule style="Heading 1" local="p[Italic|-|-|-|-|-|-|-]" mapTo="p">
   <attributeRules createID="true"/>
</paraRule>
```

위의 예에는 두 가지가 있습니다 `paraRule` 요소 `@style` = &quot;제목1&quot;. 간단히 동등한 사용자를 생성합니다. `doctypeParaRule` 이 포함된 요소 `@mapToDoctype` 속성을 필요에 따라 설정합니다.

에 사용된 속성 `doctypeParaRule` 아래에 설명되어 있습니다.

- `@style`: 소스 InDesign 문서의 스타일 이름.
- `@local`: 를 참조하십시오 [\#id194CG0V005Z](#id194CG0V005Z).
- `@mapToDoctype`: 유효한 모든 열거형 목록의 DITA 주제 유형 이름 `doctypes`.

**요소 줄바꿈 규칙**

요소 줄바꿈 규칙은 일련의 속성 값에 따라 들어오는 문서의 요소를 사전 정의된 요소로 줄바꿈하거나 이동하는 방법을 정의합니다.

***`wrap`요소***

선택적 요소입니다. 다음 `wrap` element는 래핑 또는 이동할 요소를 나열합니다. 래핑은 일반적으로 일련의 요소에 공통 상위 요소를 지정해야 하는 경우에 사용됩니다. 예를 들어, 여러 `li` 요소를 래핑하는 중 `ol` 요소를 생성하지 않습니다. 또한, `wrap` 는 그림 및 표의 제목과 같은 요소를 이동하는 데 사용할 수 있습니다.

에 사용된 속성 `wrap` 아래에 설명되어 있습니다.

- `@element`: 요소 이름 뒤에 더하기 기호가 있으면 이름이 같은 모든 인접 요소가 `@wrapper`특성.
- `@wrapper`: 줄바꿈 요소의 이름입니다.
- `@context`: 주어진 요소를 래핑하는 방법을 세분화하는 방법을 제공합니다. 다음 예제는 일련의 를 매핑하는 방법을 보여 줍니다 `li` 순서가 지정된 목록의 요소 `ol` 또는 비순차 목록 `ul` 에 따라 `@context` 값 \(컨텍스트는 `paraRule` element\):

  ```
  <wrap elements="li+" context="number" wrapper="ol">
     <attributeRules createID="true"/>
  </wrap>
  <wrap elements="li+" context="bullet" wrapper="ul">
     <attributeRules createID="true"/>
  </wrap>
  ```


다음 예에서는 를 만드는 방법을 보여 줍니다. `fig` 의 요소 `title` 및 `image` 요소:

- `@elements`: 쉼표로 구분된 나열되는 요소는 `@wrapper` 특성. 이미지 아래에 그림 제목을 포함하는 일반적인 방법으로 인해 제목은 다음과 같습니다. `title` 요소 바로 뒤 `image`.

  다음 줄바꿈 규칙:

  ```
  <wrap elements="title, image" context="FigTitle" wrapper="fig">
     <attributeRules createID="true"/>
  </wrap>
  ```

  다음 중간 XML을 변환합니다.

  ```
  <image href="Links/myImage.png" scale="59">
     <title>IDML2DITA workflow</title>
  ```

  다음과 같은 유효한 DITA 그림 구조로 바꿉니다.

  ```
  <fig id="id397504">
     <title>IDML2DITA workflow</title>
     <image href="Links/myImage.png" scale="59">
  </fig>
  ```

- `@wrapper`: 줄바꿈 요소의 이름입니다.
- `@context`: 해당 요소를 래핑하는 방법을 세분화하는 방법을 제공합니다. \(컨텍스트는 `paraRule` element\)를 참조하십시오.

다음 예제에서는 를 이동하는 방법을 보여 줍니다. `title` 로 `table`:

- `@elements`: `title` 의 바로 앞 또는 바로 뒤에 있는 요소입니다. `table` 이(가) 다음에서 이름이 인 요소에 래핑됩니다. `@wrapper` 특성. XPath 스타일 조건자는 제목 요소의 위치를 다음과 같이 식별할 수 있습니다. `[before]` 또는 `[after]`.

  예: 다음 줄바꿈 규칙:

  ```
  <wrap elements="title[before]" context="TableTitle" wrapper="table">
     <attributeRules createID="true"/>
  </wrap>
  ```

  다음 중간 XML을 변환합니다.

  ```
  <title>IDML2DITA workflow</title>
  <table id="id289742" outputclass="BasicTable">
     <tgroup cols="2">
        <colspec colname="0" colwidth="0.7*">
           <colspec colname="1" colwidth="0.3*">
  ```

  이 유효한 DITA 그림 구조로 바꿉니다.

  ```
  <table id="id289742" outputclass="BasicTable">
     <title>IDML2DITA workflow</title>
     <tgroup cols="2">
        <colspec colname="0" colwidth="0.7*">
           <colspec colname="1" colwidth="0.3*">
  ```

- `@wrapper`: 줄바꿈 요소의 이름입니다.

- `@context`: 해당 요소를 래핑하는 방법을 세분화하는 방법을 제공합니다. \(컨텍스트는 `paraRule` element\)를 참조하십시오.


**단락 스타일 규칙**

다음 `paragraphStyleRule` 요소는 아래에 설명되어 있습니다.

** `paraRule` 요소**

다음 `paraRule` 요소는 필수입니다. 모든 단락 스타일에 대한 매핑 규칙을 지정합니다. InDesign 문서에서 모든 텍스트는 단락 스타일의 하위 구조 내에 포함되어 있으며 스타일이 없는 단락에도 이름이 지정됩니다 `\[No paragraph style\]`. 대괄호는 기본 제공 InDesign 스타일 이름을 나타냅니다.

>[!NOTE]
>
> 대괄호는 기본 제공 InDesign 스타일 이름을 나타냅니다.

에 사용된 속성 `paraRule` 아래에 설명되어 있습니다.

- `@style`: 소스 InDesign 문서의 스타일 이름.
- `@local`: 를 참조하십시오 [\#id194CG0V005Z](#id194CG0V005Z).
- `@mapTo`: DITA 대상 요소의 이름입니다.

- `@context`: 이 속성은 특정 링크에 사용됩니다 **줄바꿈** 두 개 이상의 래퍼 선택 사항을 사용할 수 있는 경우 규칙입니다. 예: `li` 요소는 다음 중 하나로 래핑될 수 있습니다. `ol`또는 `ul` 요소를 생성하지 않습니다. 다른 목록 유형을 식별하기 위해 특정 스타일 이름 또는 `@local` 속성을 사용하여 다음을 표시할 수 있습니다.
   - `local="p[-|-|-|-|-|b|-|-]"` 위치: &#39;`b`필드 6의 &#39;은(는) 글머리 기호 목록 항목을 나타냅니다. 이 경우 설정됨 `@context` 대상: &#39;`bullet`&#39;.
   - `local="p[-|-|-|-|-|n|-|-]"` 위치: &#39;`n`필드 6의 &#39;은(는) 번호가 매겨진 목록 항목을 나타냅니다. 이 경우 설정됨 `@context` 대상: &#39;`number`&#39;.

- `@commentOut`: 이 속성을 사용하면 XML 주석의 대상 요소를 래핑하여 정보가 손실되지 않지만 사용자가 수동으로 처리할 수 있습니다. 이 기능은 소스 컨텐트가 DITA 구조 규칙을 준수하도록 강제할 수 없는 경우에 유용합니다.

- `@refactor`: 이 선택적 속성에는 다음 두 가지 값이 있습니다.

- `unwrap`: 일치하는 요소는 콘텐츠를 유지하면서 제거됩니다.

- `drop`: 일치하는 요소와 모든 해당 콘텐츠가 제거됩니다.


**문자 스타일 규칙**

다음 `charRule` 요소는 아래에 설명되어 있습니다.

>[!NOTE]
>
> 기본 제공 문자 스타일에 대한 매핑이 없습니다. `[No character style]` 조건 `local="0"`: 사전 처리 중에 제거되기 때문입니다.

***`charRule`요소***

선택적 요소입니다.

모든 문자 스타일에 대한 매핑 규칙입니다. InDesign 문서에서 모든 텍스트는 문자 스타일의 하위 요소 내에 포함되어 있습니다.

에 사용된 속성 `charRule` 아래에 설명되어 있습니다.

- `@style`: 소스 InDesign 문서의 스타일 이름.
- `@local`: 를 참조하십시오 [\#id194CG0V005Z](#id194CG0V005Z).
- `@mapTo`: DITA 대상 요소의 이름입니다.
- `@refactor`: 이 선택적 속성에는 다음 두 가지 값이 있습니다.
   - `unwrap`: 일치하는 요소는 콘텐츠를 유지하면서 제거됩니다.

   - `drop`: 일치하는 요소와 모든 해당 콘텐츠가 제거됩니다.


**속성 규칙**

이 요소는 다음 요소 컨텍스트의 하위 요소가 될 수 있습니다.

- `mapDoctypeParaRule`
- `mapDoctypeElemRule`
- `doctypeParaRule`
- `doctypeElemRule`
- `paraRule`
- `charRule`
- `elementRule`

속성 규칙의 목적은 일치하는 요소의 속성을 관리하는 것입니다.

컨텍스트에 따라 다음 속성을 사용할 수 있습니다. `attributeRules` 요소:

- `@createID`: 일치하는 요소에 대한 고유 ID를 생성합니다. 허용된 값 `true` 또는 `false`. 모든 컨텍스트에서 사용할 수 있습니다.
- `@copyAll`: 구조화된 소스 파일에 대해서만 소스 XML 컨텐츠의 모든 속성을 복사합니다. 허용되는 값은 다음과 같습니다. `true` 또는 `false`. 컨텍스트에 사용 가능 `mapDoctypeParaRule`, `mapDoctypeElemRule`, `doctypeElemRule` 및 `elementRule`.


에 사용된 속성 `attributeRules` 아래에 설명되어 있습니다.

>[!NOTE]
>
> 이 요소에는 여러 하위 요소가 포함될 수 있습니다.

- `addNew`: 일치하는 요소에 새 속성을 추가합니다. 모든 컨텍스트에 사용 가능합니다. 여기에는 두 가지 속성이 있습니다.
   - `@name`: 유효한 XML 이름이어야 하며, DITA 컨텍스트에 적합한 것이 좋습니다.
   - `@value`: 리터럴 텍스트 또는 단순 XPath 표현식일 수 있습니다.
- `copyAtt`: 단일 속성을 대상에 복사하는 동시에 프로세스에서 속성 이름을 선택적으로 변경합니다. 값은 변경되지 않습니다. 컨텍스트에 사용 가능 `mapDoctypeParaRule`, `mapDoctypeElemRule`, `doctypeElemRule` 및 `elementRule`. 이 요소가 있으면 `@copyAllAtts` 값은 다음과 같습니다. `false`. 여기에는 두 가지 속성이 있습니다.
   - `@name`: 소스 XML 요소에 있는 특성의 이름이어야 합니다.
   - `@mapTo`: 유효한 XML 이름이어야 하며, DITA 컨텍스트에 적합한 것이 좋습니다.

**로컬 서식 코드**

모든 InDesign 문서에서 단락 스타일과 문자 스타일은 수백 개의 서로 다른 서식 재정의를 전달할 수 있습니다. 이러한 속성의 대부분은 전환 프로세스에서 유용한 역할을 제공하지 않습니다. 하지만 문서의 의미에 영향을 주고 변환 프로세스에 영향을 줘야 하는 서식 지정 기능의 핵심 세트를 확인했습니다.

다음 `@local` 속성은 서식 재정의 유형을 보여 주는 접두사와 함께 8개의 필드가 제공되는 특별한 구분 형식으로 제공됩니다. 서식 코드 필드는 아래에 나열되어 있습니다.

- 접두사 **p** para 스타일 로컬 오버라이드 또는 **c** 문자 스타일의 로컬 재정의용.
- **글꼴 스타일** 패밀리 이름 및 속성(예: &#39; )입니다.***굵은 기울임꼴***&#39;.
- **글꼴 크기** 포인트 단위로.
- **문자 위치** 위 첨자 또는 아래 첨자의 경우
- **아래** 밑줄
- **스트라이크** 취소선용입니다.
- **목록 코드** 목록 유형을 글머리 기호 또는 번호 매기기 로 식별합니다. InDesign에서 항상 사용하지 않습니다.
- **글머리 기호 코드** 문서에 정의된 글머리 기호 유형을 모두 나열합니다.
- **숫자 코드** 문서에 정의된 모든 번호 매기기 스타일을 나열합니다.

이 기능을 신중하게 사용하면 로컬 서식이 손실되어 스타일이 지정된 콘텐츠에서 DITA로 전송되는 품질을 개선하는 데 도움이 될 수 있습니다. 이 예는 글머리 기호 목록에서 기울임꼴, 16pt 텍스트를 의미하도록 해결할 수 있습니다. `p[Italic|16|-|-|-|b|-|-]`.

**구조 매핑**

구조 매핑 파일은 모든 소스 요소와 관련 속성 유형을 나열하는 간단한 구조의 스타일 매핑 파일과 유사합니다. 두 개의 속성, `@map_date` 및 `@map_version` 사용할 매핑 파일의 버전을 기록하는 데 사용됩니다.

**문서 유형**

다음 `doctypes` 요소는 지원되는 DITA 맵과 주제 매핑을 나열합니다.

**문서 유형 요소 규칙 매핑**

다음 `mapDoctypeElemRule` 요소는 필수입니다. 소스 XML의 루트 요소는 항상 DITA 맵의 루트에 매핑되므로 이 요소의 속성을 편집해서는 안 됩니다 `map` 요소를 생성하지 않습니다.

**요소 줄바꿈 규칙**

다음을 참조하십시오 [\#id194CG600NY4](#id194CG600NY4).

**`elementRules`요소**

다음을 모두 나열합니다. [\#id194CGC00SHS](#id194CGC00SHS)요소.

**`elementRule`요소**

다음 `elementRule` 요소는 필수입니다. 모든 소스 요소에 대한 매핑 규칙입니다. InDesign 문서에는 비정형 스타일 요소가 포함되어 있지만 정형 콘텐츠에는 &#39;***하이브리드 모드***&#39; 처리가 활성화되었습니다.

에 사용된 속성 `elementRule` 아래에 설명되어 있습니다.

- `@elementName`: 소스 InDesign 문서의 요소 이름입니다.

- `@local`: 를 참조하십시오 [\#id194CG0V005Z](#id194CG0V005Z). \(하이브리드 문서에만 유용합니다\).

- `@mapTo`: DITA 대상 요소의 이름입니다.

- `@refactor`: 이 선택적 속성에는 다음 두 가지 값이 있습니다.

   - `unwrap`: 일치하는 요소는 콘텐츠를 유지하면서 제거됩니다.

   - `drop`: 일치하는 요소와 모든 해당 콘텐츠가 제거됩니다.

- `@context`: 이 속성은 두 개 이상의 래퍼 선택을 사용할 수 있을 때 특정 래핑 규칙에 연결하는 데 사용됩니다. 예: `li` 요소는 다음 중 하나로 래핑될 수 있습니다. `ol`또는 `ul` 요소를 생성하지 않습니다.

- `@commentOut`: 이 속성을 사용하면 XML 주석의 대상 요소를 래핑하여 정보가 손실되지 않지만 사용자가 수동으로 처리할 수 있습니다. 이 기능은 소스 컨텐트가 DITA 구조 규칙을 준수하도록 강제할 수 없는 경우에 유용합니다.
