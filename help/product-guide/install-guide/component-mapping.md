---
title: AEM Sites에 대한 구성 요소 매핑
description: AEM Sites에 대한 구성 요소 매핑을 수행하는 방법 알아보기
feature: Installation
role: Admin
level: Experienced
source-git-commit: c7157e04f758d08b6402a969a35d0c231a1ca476
workflow-type: tm+mt
source-wordcount: '1046'
ht-degree: 0%

---

# AEM Sites에 대한 구성 요소 매핑(복합 구성 요소 매핑 사용)

이 문서에서는 AEM 사이트에 대한 구성 요소 매핑의 다양한 측면에 대해 설명합니다(복합 구성 요소 매핑 사용).

## 구성 요소 매핑 규칙

JSON 규칙 배열(`componentmapping.json`)을 사용하여 HTML을 구성 요소로 변환합니다. 가능한 단순하고 명료하며 구체적인 규칙을 유지합니다.

### HTML 요소 및 해당 클래스 타깃팅

- `name`에 HTML 태그 이름을 씁니다.
- 클래스가 있는 경우 `class`의 해당 요소에 적용된 CSS 클래스를 포함합니다.
예:

  ```html
  <div class ="sample-class">
  <p> Sample html element </p>
  </div>
  ```

  ```json
  {
  "name": "div",
  "class": "sample-class",
  "resourceType": "guides-components/components/table",
  "attributeMap": []
  }
  ```

위의 요소를 정의할 때 다음을 확인하십시오.

- `name`은(는) 쉼표로 구분된 목록일 수 있습니다(예: `"h1, h2"`).
- `class`이(가) 요소에 있어야 합니다(나열된 모든 클래스가 일치해야 함).
- `resourceType`은(는) `table` 구성 요소를 사용할 것임을 나타냅니다. `guides-components` 패키지는 Guides에서 제공하는 OOTB입니다. 필요에 따라 `core/wcm/`과(와) 같은 다른 구성 요소 패키지를 사용할 수도 있습니다.

### attributeMap을 사용하여 JCR 노드의 속성 저장

출력 노드의 속성을 설정하려면 `attributeMap`에 항목을 추가하십시오. 각 항목은 `attrs[to] = value`을(를) 생성합니다.
일반적인 패턴:

```json
// copy an attribute
{ "attribute": "src", "to": "image-src" }
// read content or tag name
{ "from": "textContent", "to": "jcr:title" }
{ "from": "outerHTML",  "to": "text" }
{ "from": "innerHTML",  "to": "text" }
{ "from": "name",       "to": "type" }  // the tag name, e.g., "h2"
// constant value
{ "value": true, "to": "textIsRich" }
```

다음은 이미지 요소에 대한 HTML to JSON의 예입니다.

```html
<img src="/content/dam/aemg-docs/tragopan.svg" class="cmp-image__image" itemprop="contentUrl" data-cmp-hook-image="image" alt="">
```

```json
{
    "name": "img",
    "resourceType": "core/wcm/components/image/v2/image",
    "attributeMap": [
      {
        "from": "src",
        "to": "fileReference"
      },
      {
        "value": ["fileReference"],
        "to": "path-attributes"
      }
    ]
  }
```

### 전용 항목을 통해 경로 정규화

값을 정규화(절대 값으로 지정)하려면 다음을 사용하여 정규화해야 하는 속성 키를 선언합니다.

```json
{
  "value": ["text"],
  "to": "path-attributes"
}
```

다음과 같은 중요한 사항을 고려해야 합니다.

- `value`에서 정규화할 속성 이름 목록을 넣으십시오(예: `["text"]` 또는 `["href", "src"]`).
- 시스템은 최종 구성 요소를 작성할 때 해당 속성 이름에 있는 모든 값을 표준화합니다.


### 구성 요소로 분할하기 전에 HTML 값 추출

`from`을(를) 사용하여 문서를 별도의 구성 요소로 분할하기 전에 요소에서 값을 읽는 방법을 지정하십시오.

- `"textContent"`: 요소의 일반 텍스트
- `"outerHTML"`: 요소와 내부 마크업
- `"innerHTML"`: 요소의 내부 마크업만
- 다른 모든 문자열: 특성 이름(예: `"src"`, `"href"`)으로 처리됨


예:

```json
{ "from": "textContent", "to": "jcr:title" }
{ "from": "outerHTML",  "to": "text" }
{ "from": "innerHTML",  "to": "snippet" }
{ "from": "src",        "to": "image#src" }
```

### componentmapping.json의 최소 전체 예

```json
[
  {
    "name": "h1, h2",
    "class": "topic-title",
    "resourceType": "core/wcm/components/title/v2/title",
    "attributeMap": [
      { "from": "textContent", "to": "text" },
      { "from": "name",        "to": "type" }
    ]
  },
  {
    "name": "img",
    "class": "hero",
    "resourceType": "weretail/components/content/heroimage",
    "attributeMap": [
      { "from": "src", "to": "image#src" },
      { "value": ["image#src"], "to": "path-attributes" }
    ]
  },
  {
    "name": "#element",
    "resourceType": "core/wcm/components/text/v2/text",
    "attributeMap": [
      { "from": "outerHTML", "to": "text" },
      { "value": true,        "to": "textIsRich" }
    ]
  }
]
```

대상으로 지정할 요소 및 클래스를 정의하고 `attributeMap`을(를) 사용하여 노드 속성을 설정하고 `path-attributes` 항목을 추가하여 경로를 정규화하고 추출할 값에 대해 올바른 `from`을(를) 선택하십시오. 위에 사용된 `heroimage`은(는) `we-retail` 사이트의 구성 요소입니다.

**참고**: 기본 서식 있는 텍스트에 대해 논의하고 이 텍스트가 사용되는 요소를 식별하는 것이 중요합니다.

## 사용자 지정 구성 요소 빌드

셀 내에 이미지를 표시하는 사용자 지정 테이블 구성 요소를 만드는 방법을 알아봅니다. 이 접근 방식을 사용하면 동적 콘텐츠에 대해 깔끔하고 재사용 가능한 디자인을 확보할 수 있습니다. 구축 내용, 효과적인 이유, 주요 사전 요구 사항, 높은 수준의 설계 등을 다룹니다.

### 빌드할 항목

HTML 테이블 콘텐츠를 수락하고 그 안의 모든 `<img>`을(를) AEM 핵심 이미지 구성 요소의 출력으로 바꾸는 사용자 지정 테이블 구성 요소입니다. 이렇게 하면 테이블 마크업을 완벽하게 제어하면서 코어 이미지의 기능(반응형 이미지, 대체 처리, 접근성)을 재사용할 수 있습니다.
이 접근 방식을 사용하면 AEM 사이트(복합 구성 요소 매핑 사용) 웹 사이트에 대한 다른 사용자 지정 구성 요소를 빌드할 수 있습니다.

### 이 접근 방식의 이유

- **재사용**: 핵심 이미지를 다시 구현하는 대신 핵심 이미지의 성숙한 동작을 활용합니다.
- **일관성**: 테이블의 이미지는 사이트의 다른 위치에서 이미지와 동일하게 동작합니다.
- **서버측**: 성능, SEO 및 접근성을 위해 서버에서 이미지가 렌더링됩니다.

### 사전 요구 사항

- AEM SDK이 실행 중이며 이 프로젝트가 체크아웃되었습니다.
- AEM 인스턴스에 설치된 핵심 구성 요소입니다.
- Maven을 빌드하고 배포할 수 있습니다.

### 높은 수준의 디자인

- 작성자는 구성 요소 대화 상자에서 테이블에 대한 HTML을 제공합니다.
- Sling 모델은 해당 HTML을 구문 분석하고 `<img>`개의 태그를 찾은 다음 각 이미지 호출에 대해 서버측에서 핵심 이미지 구성 요소를 렌더링하는 서비스를 호출합니다.
- 이 모델은 원본 `<img>`을(를) 캡처한 핵심 이미지 HTML과 바꾸고 완성된 HTML을 HTL에 전달하여 출력합니다.

테이블이 한 번 출력되며 이미 핵심 이미지 마크업이 들어 있습니다. 클라이언트측 DOM 조작이 필요하지 않습니다.

### 폴더 구조 및 키 파일(이 저장소)

- 구성 요소 HTL 및 clientlibs: `ui.apps/src/main/content/jcr_root/apps/guides-components/components/table/`
   - `table.html`(HTL 렌더러)
   - `_cq_editConfig.xml`(수신기 새로 고침)
   - `clientlibs/`, `css.txt`, `js.txt`, `css/table.css`, `js/table.js`
- Sling 모델: `core/src/main/java/com/adobe/guides/aem/components/core/models/TableModel.java`
- 이미지 렌더링 서비스: `core/src/main/java/com/adobe/guides/aem/components/core/services/ImageComponentRenderer.java`

### 구현 단계

**테이블 구성 요소(구성 요소 노드) 정의**

`apps/guides-components/components/table` 아래에 구성 요소를 만듭니다. 아직 없는 경우 아래와 같이 최소 `.content.xml`을(를) 추가하여 사이드 패널에 등록합니다.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:sling="http://sling.apache.org/jcr/sling/1.0"
          xmlns:jcr="http://www.jcp.org/jcr/1.0"
          jcr:primaryType="cq:Component"
          jcr:title="Table"
          componentGroup="Guides - Custom"/>
```

작성자가 페이지에 추가할 수 있는 구성 요소임을 AEM에 표시합니다.

**HTL로 렌더링 및 스타일 포함**

Sling 모델을 사용하여 처리된 HTML을 출력합니다. CSS/JS에 대한 clientlib 범주를 포함합니다.

```html
<sly data-sly-use.model="com.adobe.guides.aem.components.core.models.TableModel"
     data-sly-use.clientLib="/libs/granite/sightly/templates/clientlib.html">
</sly>
<sly data-sly-call="${clientLib.css @ categories='guides-components.table'}"></sly>
<sly data-sly-test="${wcmmode.edit && !model.hasContent}">
  <div class="cq-placeholder" data-emptytext="${component.title}"></div>
</sly>
<div data-sly-test="${model.hasContent}"
     class="gu-table-wrapper ${model.enableResponsive ? 'gu-table--responsive' : ''} gu-table--style-${model.tableStyle}"
     id="${model.componentId}">
  ${model.processedTableHtml @ context='unsafe'}
</div>
```

모델은 이미 렌더링된 핵심 이미지가 있는 전체 HTML을 반환하므로 HTL은 단지 인쇄만 합니다.

**HTML을 처리하고 핵심 이미지를 렌더링할 슬링 모델을 추가**

이 모델은 대화 상자 필드를 읽고, HTML 테이블을 구문 분석하고, 각 `<img>`을(를) 찾아 서비스를 통해 핵심 이미지 HTML으로 대체합니다.

다음은 `TableModel`에 대한 몇 가지 중요한 방법입니다.

- 리소스 속성에서 `tableHtml`, `enableResponsive`, `tableStyle` 읽음
- Jsup를 사용하여 안전하게 HTML을 구문 분석하고 편집합니다.
- 핵심 이미지를 렌더링하고 HTML을 캡처하기 위해 `ImageComponentRenderer`을(를) 호출합니다.
- 원래 `<img>`에서 CSS 클래스와 스타일을 유지합니다.
- DAM 경로를 정규화합니다(`/jcr:content/renditions/*` 제거).

```java
@Model(adaptables = {Resource.class, SlingHttpServletRequest.class},
       defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class TableModel {
  @ValueMapValue private String tableHtml;
  @ValueMapValue private boolean enableResponsive;
  @ValueMapValue private String tableStyle;
  @OSGiService private ImageComponentRenderer imageRenderer;
  // ...
  @PostConstruct
  protected void init() {
    // parse HTML, for each <img> build image props (fileReference, alt, title)
    // call imageRenderer.renderImageComponent(...)
    // replace <img> with returned Core Image HTML
  }
  public String getProcessedTableHtml() { /* return final HTML */ }
}
```

이렇게 하면 서버에서 논리를 중앙 집중화하고 핵심 이미지 동작을 다시 사용합니다.

**서비스를 통해 코어 이미지 렌더링(서버측 포함)**

`ImageComponentRenderer`에서 핵심 이미지 구성 요소를 렌더링하고 출력을 캡처합니다. It

- `core/wcm/components/image/v2/image`을(를) 강제로 사용하는 리소스를 래핑합니다.
- `RequestDispatcher#include`을(를) 사용하여 렌더링합니다.
- 응답을 문자열로 캡처합니다.

```java
@Component(service = ImageComponentRenderer.class)
public class ImageComponentRenderer {
  private static final String IMAGE_RESOURCE_TYPE = "core/wcm/components/image/v2/image";
  public String renderImageComponent(Resource base, Map<String,Object> props,
                                     SlingHttpServletRequest req, SlingHttpServletResponse resp) {
    // create wrapped resource with IMAGE_RESOURCE_TYPE and props
    // dispatcher.include(...) with a response wrapper to capture HTML
    // return captured HTML
  }
}
```

이렇게 하면 하위 구성 요소뿐만 아니라 필요한 경우 언제든지 **핵심 이미지를**&#x200B;에 넣을 수 있습니다.

**클라이언트 라이브러리**

소규모 스타일 또는 향후 JS에 대한 clientlib을 만듭니다. 위의 HTL은 `guides-components.table` 범주를 로드합니다.

```java
clientlibs/css.txt
  #base=css
  table.css
clientlibs/js.txt
  #base=js
  table.js
  
```

이렇게 하면 스타일/스크립트를 모듈화하고 검색할 수 있습니다.

**대화 상자 필드(작성자 입력)**

다음 속성 이상이 포함된 대화 상자를 추가합니다.

- **테이블 HTML**: `./tableHtml`(textarea); 테이블의 HTML.
- **응답형 사용**: `./enableResponsive`(확인란); 응답형 래퍼 클래스를 전환합니다.
- **테이블 스타일**: `./tableStyle`(선택); 스타일 한정자 클래스를 적용합니다.

이러한 매핑 1:1은(는) Sling 모델의 속성 및 제어 렌더링에 매핑됩니다.

**템플릿에서 구성 요소 허용**

템플릿 편집기에서 레이아웃 컨테이너 정책 > 허용된 구성 요소 > **안내서 - 사용자 지정**&#x200B;에서 테이블 구성 요소를 편집합니다.

정책이 허용할 때까지 작성자가 구성 요소를 추가할 수 없습니다.

## 작성 팁

- 테이블에 대한 유효한 HTML을 붙여넣습니다. 이 모델은 이미지 URL을 청소하고 조정합니다.
- 이미지에 DAM 에셋 경로를 사용합니다. 렌디션은 원래 에셋 경로에 대해 표준화됩니다.
- 가능하면 HTML에 대체 텍스트를 입력하십시오. 그렇지 않으면 이미지가 장식용으로 표시됩니다.

## 제한

- 이 서비스는 코어 이미지 v2를 강제 실행합니다. 버전을 전환하려면 `IMAGE_RESOURCE_TYPE`을(를) 업데이트하세요.
- 합성 렌더링의 경우 모델은 핵심 이미지의 생성된 `.coreimg.` URL을 직접 DAM 경로로 바꾸고 `srcset`을(를) 제거하여 끊어진 URL을 방지합니다.
- 모든 렌더링은 서버에서 한 번 수행됩니다. JavaScript은 선택 사항입니다.

## 빠른 참조(구현)

- HTML: `ui.apps/.../components/table/table.html`
- Clientlibs: `ui.apps/.../components/table/clientlibs/`
- 모델: `core/.../models/TableModel.java`
- 서비스: `core/.../services/ImageComponentRenderer.java`

이 패턴은 핵심 논리를 재사용하는 동안 마크업을 유지하면서 핵심 구성 요소 서버측을 사용하여 사용자 지정 구성 요소를 구성하는 방법을 보여 줍니다.
