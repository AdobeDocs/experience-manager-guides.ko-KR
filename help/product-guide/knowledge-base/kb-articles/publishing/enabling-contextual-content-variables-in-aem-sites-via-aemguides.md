---
title: AEM Guides을 통해 AEM Sites에서 컨텍스트 기반 콘텐츠 변수(CCVAR) 활성화
description: AEM Guides을 통해 AEM Sites에서 컨텍스트 기반 콘텐츠 변수(CCVAR) 작업
feature: Web Editor
role: User, Admin
source-git-commit: cd5b8329153f598365a640f50d2c003af72dac50
workflow-type: tm+mt
source-wordcount: '466'
ht-degree: 2%

---

# AEM Guides을 통해 AEM Sites에서 컨텍스트 기반 콘텐츠 변수(CCVAR) 활성화

컨텍스트 콘텐츠 변수(CCVAR)는 작성자가 작성한 텍스트에서 직접 동적 콘텐츠 변수를 사용할 수 있도록 해주는 ACS Commons 기능입니다. CCVAR는 AEM Sites에서 일반적으로 사용되지만, 이 문서에서는 주로 DITA 맵에 정의된 키워드를 사용하여 **AEM Guides** *에서 작성된 콘텐츠에서 생성된 페이지를 통해 유사한 기능을 수행하는 방법을 설명합니다*.


## 컨텍스트 콘텐츠 변수(CCVAR)란 무엇입니까?

CCVAR를 사용하면 작성자가 컨텍스트에 따라 런타임 시 해결되는 콘텐츠에 동적 변수를 삽입할 수 있습니다. 예를 들어 `((page_properties.pageTitle))`과(와) 같은 변수는 콘텐츠 렌더링 중에 페이지 제목을 동적으로 가져올 수 있습니다.


## AEM Guides에서 생성된 AEM Sites에서 CCVAR를 활성화하는 방법

AEM Guides이 모든 컨텐츠(AEM Sites, PDF 또는 HTML5 포함)의 소스로 사용되는 것을 고려하여 AEM Guides에서 생성된 페이지에서 CCVAR를 활성화하려면 키워드를 사용하여 CCVAR 이름을 정의해야 합니다. 안내서에서 이를 수행하려면 `<keydef>` 요소를 사용하여 DITA 맵에서 **키워드**&#x200B;를 정의하십시오. 이러한 키워드는 동적 값(또는 CCVAR 이름)에 해당할 수 있으므로 DITA 주제에서 참조할 수 있습니다.


## 전제 조건

계속하기 전에 다음 전제 조건이 충족되는지 확인하십시오.

1. **AEM ACS Commons 설치됨**:
   - **ACS AEM Commons**&#x200B;이(가) AEM 인스턴스에 설치되어 있는지 확인합니다. CCVAR를 사용하는 데 필요합니다.

2. **컨텍스트 콘텐츠 변수 구성**:
   - [공식 설명서](https://adobe-consulting-services.github.io/acs-aem-commons/features/contextual-content-variables/index.html)를 사용하여 AEM에서 **컨텍스트 콘텐츠 변수**&#x200B;에 대한 설정을 완료합니다. 여기에는 다음이 포함됩니다.
      - **속성 집계**&#x200B;를 사용하도록 설정하는 중입니다.
      - **HTML 다시 쓰기**&#x200B;를 구성하는 중입니다(HTML 출력을 사용하는 경우).
      - **JSON 재작성**&#x200B;을 구성하는 중입니다(JSON 출력을 사용하는 경우).



## AEM Guides에서 CCVAR를 활성화하는 단계

### 1. DITA 맵에서 키워드 정의

- AEM Guides에서 CCVAR에 해당하도록 DITA 맵의 `<keydef>` 요소를 사용하여 키워드를 정의합니다.
- 예:

```xml
  <keydef keys="product">
    <topicmeta>
      <keywords>
        <keyword>((page_properties.pageTitle))</keyword>
      </keywords>
    </topicmeta>
  </keydef>
```

- `keys` 특성(이 예제의 경우 `product`)은 DITA 주제에서 이 변수를 참조하는 데 사용됩니다.


## 2. DITA 주제에서 키워드 사용

- 이 항목에서는 CCVar를 사용할 위치에 관계없이 키워드를 사용합니다.
- 예:

```xml
  <p>This is the title of the product: <keyword keyref="product"/> </p>
```

- `keyref` 특성은 `<keydef>` 요소에 정의된 `keys` 값을 가리킵니다(이 경우 `product`).
- 출력 생성 중에 키워드는 해당 CCVar 값으로 대체됩니다.


## 3. 출력 생성

- AEM Sites에 대한 출력을 생성하면 키워드 참조가 해당 동적 값으로 확인됩니다.
- 예:
   - `((page_properties.pageTitle))`이(가) `My Product`(으)로 확인되는 경우 출력이 표시됩니다.

```xml
   This is the title of the product: My Product.
```


## 예제 사용 사례

페이지의 언어를 DITA 주제에 동적으로 삽입한다고 가정합니다. 이를 수행하는 방법은 다음과 같습니다.

**DITA 맵에 키워드 정의**:

```xml
   <keydef keys="pageLanguage">
     <topicmeta>
       <keywords>
         <keyword>((inherited_page_properties.jcr:language))</keyword>
       </keywords>
     </topicmeta>
   </keydef>
```

**DITA 주제의 키워드 참조**:

```xml
   <p>The title of this page is: <keyword keyref="pageLanguage"/>.</p>
```

**생성된 출력**:

`((inherited_page_properties.jcr:language))`이(가) `en`(으)로 확인되는 경우 출력이 표시됩니다.

```
     The language of this page is: en.
```


### 리소스

**컨텍스트 콘텐츠 변수**&#x200B;에 대한 자세한 내용은 공식 설명서를 참조하세요.\
[AEM Commons의 컨텍스트 콘텐츠 변수](https://adobe-consulting-services.github.io/acs-aem-commons/features/contextual-content-variables/index.html)