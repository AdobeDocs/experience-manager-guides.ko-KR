---
title: AEM Guides용 기존 AEM 사이트 템플릿 맞춤화
description: AEM Guides용 기존 AEM 사이트 템플릿을 사용자 지정하는 방법 알아보기
feature: Installation
role: Admin
level: Experienced
source-git-commit: 1cec8975e8aad56184793a023d066aa467d8cec5
workflow-type: tm+mt
source-wordcount: '937'
ht-degree: 1%

---

# AEM Guides용 기존 AEM 사이트 템플릿 맞춤화

이 안내서에서는 AEM Guides과 함께 사용하여 DITA 맵 및 주제에서 AEM Sites을 생성할 수 있도록 기존 AEM 사이트 템플릿을 사용자 지정하는 단계별 지침을 제공합니다.

기본 제공 AEM Guides(AEMG Docs) 템플릿을 사용하는 경우 구성 및 구성 요소가 이미 있으며 그대로 사용하여 AEM Guides 콘텐츠를 게시할 수 있습니다. 그러나 기존 AEM Sites 템플릿을 사용자 지정 브랜딩과 함께 사용하여 AEM Guides 콘텐츠를 게시하려면 아래 단계에 따라 사이트 템플릿을 AEM Guides 렌더링 요구 사항에 맞게 조정하십시오.


## 사전 요구 사항

- AEM 템플릿에 대한 적절한 권한과 액세스 권한이 있습니다.
- AEM 편집 가능한 템플릿 및 AEM 사이트 구조를 이해할 수 있습니다.
- 기존 사이트 계층 구조가 편집 가능한 템플릿을 사용하여 구축되어 있습니다.
- 기존 프로젝트에는 최소한 두 개의 템플릿이 있습니다.

   - DITA 맵을 문서 루트로 렌더링하는 데 사용되는 **문서 컨테이너 페이지 템플릿**.
   - 개별 DITA 주제 페이지를 렌더링하는 데 사용되는 **주제 페이지 템플릿**.

## 템플릿 이름 지정 고려 사항

템플릿 이름은 프로젝트 설정에 따라 달라집니다. 예를 들어 OOTB AEMG 문서 구성에서:

- 설명서 컨테이너 페이지: /conf/AEMG-Docs-Site/settings/wcm/templates/kb-content

- 주제 페이지: /conf/AEMG-Docs-Site/settings/wcm/templates/topic-content

**사용자 지정:** 사용자 지정 프로세스에는 다음 두 가지 주요 단계가 포함됩니다.

1. 템플릿 설정: 두 템플릿(컨테이너 및 주제)을 식별하고 구성합니다.
2. 렌더링 가이드 구성 요소: TOC, 탐색 및 메타데이터 표시와 같은 기능을 활성화하는 데 필요한 AEM Guides 구성 요소를 포함합니다.

## 템플릿 설정

AEM 사이트에서 두 개의 편집 가능한 템플릿을 선택하고 구성합니다.

### 설명서 컨테이너 페이지 템플릿

설명서 컨테이너 페이지 템플릿은 DITA 맵의 콘텐츠를 렌더링하는 제품 설명서 컨테이너 페이지를 만드는 데 사용됩니다.

- 특정 설명서 세트(예: 제품 설명서나 안내서)의 진입점 또는 홈 페이지 역할을 합니다.
- id=&quot;category-page&quot; 속성을 템플릿의 초기 노드의 jcr:content에 추가합니다. 이렇게 하면 이 템플릿에서 만든 모든 페이지가 AEM Guides에서 문서 컨테이너로 자동으로 처리됩니다.

  ![id=&quot;category-page&quot;](/help/product-guide/knowledge-base/kb-articles/assets/publishing/add-id-category-page.png){width="650" align="left"} 추가 중

- 필수 속성인 text=&quot;$category.html$&quot;을 사용하여 텍스트 구성 요소를 추가합니다.

  ![텍스트 구성 요소 추가](/help/product-guide/knowledge-base/kb-articles/assets/publishing/add-text-component.png){width="650" align="left"}

- 일반적으로 에는 설명서 내의 섹션 또는 항목에 대한 링크와 같은 탐색 요소가 포함됩니다.
- 브랜딩, 머리글, 바닥글 및 기타 디자인 요소를 포함하도록 사용자 지정할 수 있습니다.

**사용 사례 예:**
제품 설명서에 대한 DITA 맵이 있는 경우 설명서 컨테이너 페이지 템플릿은 해당 설명서에 대한 홈 페이지를 생성하고 개요 및 개별 주제에 대한 링크를 표시합니다.

### 주제 페이지 템플릿

- **주제 페이지 템플릿**&#x200B;은(는) 개별 **DITA 주제**&#x200B;에 대한 페이지를 만드는 데 사용됩니다.
- DITA 맵의 각 항목은 이 템플릿을 사용하여 별도의 페이지로 렌더링됩니다.
- 필수 속성: text=&quot;$topic.content$&quot;이(가) 있는 **Text 구성 요소**&#x200B;를 포함합니다.

  ![필수 속성이 있는 텍스트 구성 요소 추가](/help/product-guide/knowledge-base/kb-articles/assets/publishing/add-text-component-mandatory-property.png){width="650" align="left"}

- 이 자리 표시자는 사이트 생성 중 DITA 주제의 실제 콘텐츠로 대체됩니다.
   - 텍스트 구성 요소는 일반적으로 적절한 레이아웃과 스타일을 위해 **컨테이너 구성 요소** 내부에 배치됩니다.
   - 모든 주제 페이지에서 일관된 머리글, 바닥글 및 탐색 요소를 포함하도록 사용자 지정할 수 있습니다.

**사용 사례 예:**
&quot;설치 지침&quot;에 대한 DITA 주제가 있는 경우 주제 페이지 템플릿에서 해당 주제의 내용을 표시하는 페이지를 생성합니다.

**컨테이너 구성 요소:**

![컨테이너 구성 요소 추가](/help/product-guide/knowledge-base/kb-articles/assets/publishing/add-container-component.png){width="650" align="left"}

>[!NOTE]
>
> wcm/foundation/components 아래의 sling:resourceType을(를) 사용하는 구성 요소가 해당 core/wcm/components로 마이그레이션되는지 확인하십시오.

동일한 템플릿의 구조에 동일한 (컨테이너 및 텍스트 구성 요소) 추가:

![컨테이너 및 텍스트 구성 요소 추가](/help/product-guide/knowledge-base/kb-articles/assets/publishing/add-container-and-text-component.png){width="650" align="left"}

## 사용자 지정된 템플릿의 렌더링 안내선 구성 요소

목차, 페이지 리디렉션, 탐색 및 메타데이터 표시와 같은 핵심 AEM Guides 구성 요소 기능을 활성화하려면 사용자 지정 템플릿에 특정 AEM Guides 구성 요소를 포함해야 합니다. 사이트 생성 및 런타임 중에 의도한 기능을 사용할 수 있도록 이러한 구성 요소를 해당 편집 가능한 템플릿(설명서 컨테이너 페이지 또는 주제 페이지)에 명시적으로 추가해야 합니다.

구성 요소 목록 및 그 사용법은 아래 표를 참조하십시오.

| 기능 | 구성 요소 이름 | 설명 | 추천 템플릿 |
|---|---|---|---|
| 목차 | guidessidenavigation | DITA 맵에서 전체 목차를 렌더링합니다 | 설명서 컨테이너 |
| 페이지 리디렉션 | childredirect | 맵의 첫 번째 주제 페이지로 리디렉션합니다. | 설명서 컨테이너 |
| 미니 TOC | 미니톡 | 현재 주제에 대한 목차를 표시합니다. | 주제 페이지 |
| 마지막 업데이트 | pageproperty | 마지막 수정 날짜 표시 | 주제 페이지 |
| 호출기 | 호출기 | 이전 및 다음 주제 페이지 간 탐색 허용 | 주제 페이지 |
| 언어 탐색 | languagenaviation | 서로 다른 언어 버전 간 전환 사용 | 템플릿 중 하나 |


## 구성 요소 사용 사례

- **구성 요소 리디렉션(childredirect):** DITA 맵에서 생성된 제품 홈 페이지가 자동으로 첫 번째 주제 페이지로 리디렉션되도록 문서 컨테이너 페이지 템플릿에 추가하십시오. 설명서 컨테이너 페이지가 사용자 지정 구성 요소 및 레이아웃과 함께 독립 실행형 홈 페이지 역할을 하도록 디자인된 경우 이 구성 요소는 필요하지 않습니다.

- **목차(guidessidenaviation):** 주제 내용과 함께 탐색 가능한 목차를 렌더링하려면 이 목차를 주제 페이지 템플릿에 추가하십시오. 목차는 DITA 맵에서 파생되며 사용자가 형제 주제를 탐색할 수 있도록 도와줍니다.


## Guides 클라이언트 라이브러리 활성화

기본적으로 AEM Guides 구성 요소 패키지에 제공된 클라이언트 라이브러리(clientlibs)는 사용자 지정 템플릿에 적용되지 않습니다. 활성화하려면:

1. **템플릿 편집:**

   1. **편집기 모드**&#x200B;에서 **제품 페이지**&#x200B;를 엽니다.
   2. **템플릿 편집**&#x200B;을 선택합니다. 그러면 conf/settings/wcm/templates/structure.html과 같은 URL이 열립니다.

      ![템플릿 편집](/help/product-guide/knowledge-base/kb-articles/assets/publishing/edit-template.png){width="650" align="left"}

2. **페이지 정책 업데이트:**

   1. **페이지 정보** 단추로 이동하여 **페이지 정책**&#x200B;을 선택하십시오.
   2. 다음 클라이언트 라이브러리를 추가합니다.
      - **클라이언트 라이브러리**
      - **클라이언트 라이브러리 JavaScript 페이지 헤드**

3. **변경 내용 저장:** 필요한 클라이언트 라이브러리를 추가한 후 템플릿을 저장합니다.

   ![클라이언트 라이브러리 추가](/help/product-guide/knowledge-base/kb-articles/assets/publishing/add-client-libraries.png){width="650" align="left"}


>[!NOTE]
>
> 프로덕션에 배포하기 전에 비프로덕션 환경에서 템플릿을 테스트해야 합니다.<br><br>자세한 내용은 공식 [AEM Guides](https://experienceleague.adobe.com/ko/docs/experience-manager-guides/using/overview) 및 [AEM Sites](https://experienceleague.adobe.com/ko/docs/experience-manager-core-components/using/get-started/authoring) 설명서를 참조하십시오.
