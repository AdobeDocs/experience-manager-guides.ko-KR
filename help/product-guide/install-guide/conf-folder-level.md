---
title: 전역 또는 폴더 수준 프로필 구성
description: 전역 또는 폴더 수준 프로필을 구성하는 방법 알아보기
exl-id: d7bf7e69-fe12-4c48-8ce4-17b74a6c61e7
feature: Profiles
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '3896'
ht-degree: 0%

---

# 전역 또는 폴더 수준 프로필 구성 {#id181AH2003PF}

기업에서는 다른 그룹이나 제품이 다른 작성 템플릿, 출력 템플릿, 조건부 속성 프로필 \(또는 주제 스키마\) 및 웹 편집기 구성을 사용할 수 있습니다. 작성자가 엔터프라이즈 \(또는 글로벌\) 수준에서만 구성하면 작성자와 관련 없는 템플릿 또는 프로필이 표시되므로 작성자가 어려움을 겪을 수 있습니다.

AEM Guides을 사용하면 폴더 수준뿐만 아니라 엔터프라이즈 \(전역\) 수준에서 작성 \(topic 또는 map\) 템플릿, 출력 템플릿, 조건부 속성 및 웹 편집기 구성을 구성할 수 있습니다. 이렇게 하면 기업의 다양한 부서나 제품에 대한 구성을 분리할 수 있습니다.

또한 부서나 제품 관리자에게 폴더별 구성을 위임하여 관리를 분산할 수 있습니다.

안내서 설정의 폴더 프로필 타일을 사용하여 다음 탭에서 설정을 구성할 수 있습니다.

![](assets/folder-profile-tabs.png){width="800" align="left"}

- **일반**: 일반 탭은 폴더 수준 \(또는 프로젝트/제품\) 설정을 구성하는 경우에만 사용할 수 있습니다. 설정을 적용할 폴더 경로와 구성을 만들거나 업데이트할 관리 권한이 있는 사용자와 같은 설정을 구성할 수 있습니다.

- **조건부 특성**: 이 탭을 사용하여 전역 또는 폴더 수준에서 조건부 특성을 구성합니다. 조건부 속성은 속성 이름과 값의 조합이며 레이블을 정의할 수도 있습니다. 표준 DITA 속성이나 사용자 지정 속성을 사용할 수 있습니다. 글로벌 수준에서 정의하는 조건부 속성은 프로젝트의 모든 사용자가 사용할 수 있게 됩니다. 폴더 수준 조건부 속성을 정의한 경우 전역적으로 정의된 조건부 속성과 병합됩니다.

- **제작 서식 파일**: 작성자가 DITA 콘텐츠를 만드는 데 사용할 서식 파일을 구성하려면 이 탭을 사용합니다. 다음 주제 템플릿은 즉시 사용할 수 있습니다.

   - 용어 설명

   - 참조

   - 주제

   - 개념

   - 작업

   - 문제 해결

   - 비어 있음

   - DITAVAL

  >[!NOTE]
  >
  > 기존 템플릿을 기반으로 사용하여 새 템플릿을 만들 수 있습니다. 빈 DITA 템플릿에는 다른 템플릿과 같은 구조나 요소가 포함되어 있지 않습니다. 임의의 OOTB DITA 템플릿을 기반으로 사용하여 수정한 후 다른 이름으로 저장할 수 있습니다. 필요한 변경 작업을 수행한 후 업데이트된 템플릿을 전역 또는 폴더 수준 작성 템플릿 구성에 추가하면 작성에 사용할 수 있게 됩니다.

  주제 템플릿과 함께 작성자가 사용할 수 있는 맵 템플릿을 정의할 수도 있습니다. 다음과 같은 맵 템플릿을 즉시 사용할 수 있습니다.

   - 맵

   - 북맵

- **출력 사전 설정**: 작성 템플릿과 마찬가지로 5개의 사전 구성된 출력 사전 설정이 있습니다.

   - AEM 사이트

   - PDF

   - HTML5

   - EPUB

   - 사용자 정의

  게시자는 이러한 기본 출력 사전 설정을 사용하여 콘텐츠를 게시할 수 있습니다. 이러한 사전 설정은 전역 또는 폴더 수준 프로필의 관리자가 구성할 수 있습니다. 구성하고 나면 새로 만든 DITA 맵에 대해 게시자가 게시 사전 설정을 사용할 수 있게 됩니다. 기존 DITA 맵에 게시 사전 설정을 적용할 수도 있습니다. 자세한 내용은 [사전 설정 변경 내용 적용](#id18AGD0K0OHS)을 참조하십시오.

- **XML 편집기 구성**: 이 탭을 사용하여 웹 편집기의 모양과 다양한 기능을 사용자 지정할 수 있습니다. 웹 편집기에서 다음 구성 가능한 설정을 사용할 수 있습니다.

   - XML 편집기 UI 구성
   - CSS 템플릿 레이아웃
   - XML 편집기 조각
   - XML 콘텐츠 버전 레이블
   - Rootmap \(폴더 수준에서만\)

전역 프로필과 폴더 수준 프로필을 모두 구성할 수 있습니다. 폴더 수준 프로필에서는 설정을 적용할 폴더를 정의할 수 있습니다. 이러한 설정에는 조건부 특성, 작성 템플릿, 출력 사전 설정 및 XML 편집기 설정이 포함됩니다. 구성된 폴더에서 작업하는 작성자는 조건부 사전 설정, 작성 템플릿 및 XML 편집기 구성을 사용할 수 있습니다. 마찬가지로 게시자는 구성된 폴더 내에 정의된 구성된 출력 사전 설정에 액세스할 수 있습니다.

폴더 수준 프로필은 전역 프로필에 구성된 설정을 재정의합니다. 즉, 폴더에 폴더 수준 프로필이 있는 경우 해당 폴더 프로필에 구성된 작성 템플릿, 출력 템플릿 및 XML 편집기 설정이 표시됩니다. 전역 프로필에 구성된 설정은 표시되지 않습니다. 단, 이는 조건부 속성에는 적용되지 않습니다. 조건부 속성의 경우 조건부 속성은 전역 및 폴더 수준에서 병합됩니다.

다음 섹션에서는 글로벌 프로필 및 폴더 수준 프로필을 구성하는 프로세스를 안내합니다.

## 전역 프로필 구성

전역 프로필을 구성하려면 다음 단계를 수행하십시오.

1. 관리자로 Adobe Experience Manager에 로그인합니다.

1. 맨 위에 있는 Adobe Experience Manager 링크를 클릭하고 **도구**&#x200B;를 선택합니다.

1. 도구 목록에서 **안내서**&#x200B;를 선택하고 **폴더 프로필**&#x200B;을 클릭합니다.

   처음으로 [전역 프로필] 타일만 있는 [폴더 프로필] 페이지가 표시됩니다.

   ![](assets/folder-profile-global.png){width="800" align="left"}

1. **전역 프로필** 타일을 클릭합니다.

1. **조건부 특성**&#x200B;을 구성하려면 [전역 또는 폴더 수준 프로필에 대한 조건부 특성 구성](#id1889D0I305Z)을 참조하십시오.

1. **제작 템플릿**&#x200B;을 구성하려면 [제작 템플릿 구성](#id1889D0IL0Y4)을 참조하십시오.

1. **출력 사전 설정**&#x200B;을 구성하려면 [출력 사전 설정 구성](#id18AGD0IH0Y4)을 참조하십시오.

1. XML 편집기 구성을 구성하려면 [XML Web Editor 구성 및 사용자 지정](#id2065G300O5Z)을 참조하십시오.

1. 필요한 모든 업데이트를 수행한 후 **전역 프로필**&#x200B;을(를) 저장하고 닫습니다.


## 폴더 수준 프로필 만들기 및 구성

폴더 수준 프로필을 구성하려면 다음 단계를 수행하십시오.

1. 관리자로 Adobe Experience Manager에 로그인합니다.

1. 맨 위에 있는 Adobe Experience Manager 링크를 클릭하고 **도구**&#x200B;를 선택합니다.

1. 도구 목록에서 **안내서**&#x200B;를 선택하고 **폴더 프로필** 타일을 클릭합니다.

   처음으로 폴더 프로필 페이지가 기본 전역 프로필 타일만 표시됩니다.

1. **만들기**&#x200B;를 클릭합니다.

   ![](assets/create-folder-profile.png){width="300" align="left"}

1. **폴더 프로필 만들기** 대화 상자에 다음 세부 정보를 입력하십시오.
   - 폴더 프로필의 이름입니다.
   - 프로필을 적용할 수 있는 폴더의 경로입니다.

     >[!NOTE]
     >
     > 한 폴더에 여러 개의 폴더 프로필을 적용할 수 없습니다. 여기에서 선택하는 폴더에 다른 프로필이 적용되지 않았는지 확인하십시오. 자체 특정 프로필이 있는 상위-하위 폴더의 경우 하위 폴더는 자체 프로필의 구성을 사용합니다. 상위 폴더의 구성이 하위 폴더의 구성을 재정의하지 않습니다.

1. **만들기**&#x200B;를 클릭합니다.

   폴더 프로필 페이지의 폴더 프로필 이름으로 새 타일이 만들어집니다

1. 편집할 폴더 프로필 타일을 클릭합니다.

   폴더 프로필의 이름과 구성된 폴더 정보가 있는 일반 탭이 표시됩니다.

1. 폴더 프로필을 수정할 수 있는 관리자 권한을 갖게 될 여러 폴더 및 사용자를 추가하려면 **편집**&#x200B;을 클릭합니다.

   >[!NOTE]
   >
   > 여기에 추가하는 사용자는 이 폴더 프로필에 대해 구성된 조건부 특성, 작성 템플릿 및 출력 사전 설정을 업데이트할 수 있는 관리 권한을 갖게 됩니다.

1. 폴더를 추가하려면 폴더 경로에서 찾아보기 아이콘을 클릭하고 폴더로 이동하여 선택한 다음 추가 를 클릭하여 폴더를 이 프로필에 추가합니다.

   >[!NOTE]
   >
   > 여기에서 선택한 폴더에 연결된 다른 폴더 수준 프로필이 없는지 확인합니다.

1. 사용자를 추가하려면 **관리자 사용자** 드롭다운에서 사용자를 선택하고 **추가**&#x200B;를 클릭합니다.

   >[!NOTE]
   >
   > 드롭다운 목록에서 폴더 프로필에 여러 사용자를 추가할 수 있습니다. 사용자 ID 옆에 있는 삭제 아이콘을 클릭하여 목록에서 기존 관리 사용자를 제거할 수도 있습니다.

1. 필요한 모든 폴더와 사용자를 폴더 프로필에 추가한 후 **저장**&#x200B;을 클릭합니다.


이제 조건부 특성, 작성 템플릿, 출력 사전 설정 및 XML 편집기를 구성할 준비가 되었습니다.

>[!IMPORTANT]
>
> 폴더 프로필을 만들 때 기본적으로 작성 템플릿이 포함되지 않습니다. 작성자가 사용할 수 있도록 하려면 폴더 프로필에 필요한 작성 템플릿을 추가해야 합니다.

## 전역 또는 폴더 수준 프로필에 대한 조건부 속성 구성 {#id1889D0I305Z}

글로벌 또는 폴더 수준에서 표준 DITA 지원 조건부 속성을 구성하려면 다음 단계를 수행하십시오.

1. 관리자 또는 폴더 수준 프로필에 대한 관리 권한이 있는 사용자로 Adobe Experience Manager에 로그인합니다.

1. 맨 위에 있는 Adobe Experience Manager 링크를 클릭하고 **도구**&#x200B;를 선택합니다.

1. 도구 목록에서 **안내서**&#x200B;를 선택하고 **폴더 프로필** 타일을 클릭합니다.

1. 구성할 프로필 타일을 클릭합니다.

   >[!NOTE]
   >
   > 전역 프로필 또는 폴더 수준 프로필에서 조건부 속성을 구성하도록 선택할 수 있습니다.

1. 프로필 페이지에서 **조건부 특성** 탭을 클릭합니다.

1. **편집**&#x200B;을 클릭합니다.

1. **추가**&#x200B;를 클릭합니다.

1. 조건부 특성에 대해 **이름**, **값** 및 **레이블**&#x200B;을(를) 입력하십시오.

   속성 이름만으로 프로파일을 저장할 수 있습니다. 그러나 속성에 값이 지정된 경우에만 속성을 사용할 수 있습니다. 속성에 대해 - value와 label을 모두 지정하면 웹 편집기에 조건부 속성의 레이블이 표시됩니다. 또한 조건부 사전 설정을 만들 때 게시 관리자에게 레이블이 표시됩니다.

   다음 스크린샷은 가능한 값 및 레이블이 있는 `platform` 특성에 대한 정의를 보여 줍니다.

   ![](assets/add_profile.png){width="650" align="left"}

1. 동일한 특성에 대해 더 많은 값을 추가하려면 **+** 아이콘을 클릭하고 추가 값과 레이블을 입력하십시오.

1. 특성을 더 추가하려면 **추가**&#x200B;를 클릭하세요.

1. **저장**&#x200B;을 클릭합니다.


**사용자 지정 특성 사용**

사용자 지정 속성을 사용하는 경우 DTD에서 지원하는 유효한 DITA 속성이어야 합니다. 표준 DITA 속성이 아닌 속성을 사용하려면 다음 추가 단계를 수행합니다.

1. 사용자 지정 속성을 DTD 파일에 추가합니다. 예를 들어, DTD 파일이 commonElements.mod이면 이 파일은 DTD 디렉토리에서 찾아야 합니다. 시스템 DTD 파일의 기본 경로는

   /libs/fmdita/dita\_resources/DITA-1.3/dtd/base/dtd/commonElements.mod

   >[!IMPORTANT]
   >
   > 특수화된 DTD 파일은 사용자 지정 코드 배포의 일부여야 합니다. /etc 아래의 DTD는 제품 배포의 일부이므로 새 릴리스의 설치로 덮어쓰기됩니다. 프로젝트 폴더 내의 /apps 아래에 특수화된 DTD를 추가하고 DITA 프로필에 DTD/카탈로그 경로를 포함하는 것이 좋습니다. 자세한 내용은 [DITA 특수화 통합](dita-ot-specialization.md#id211MB0E00XA)을 참조하십시오.

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

1. *com.adobe.fmdita.config.ConfigManager* 번들을 검색하고 클릭합니다.

1. 구성을 저장합니다.

   이렇게 하면 시스템 캐시가 지워집니다.

1. 다음 위치에서 사용할 수 있는 condAttrList.xml 파일로 이동합니다.

   /libs/fmdita/config/condAttrList.xml

1. `apps` 노드 내에 `config` 폴더의 오버레이 노드를 만듭니다.

1. 다음으로 이동하여 `apps` 노드의 condAttrList.xml 파일에 사용자 지정 특성을 추가합니다.

   `/apps/fmdita/config/condAttrList.xml`

1. 파일을 저장합니다.

1. 전역 또는 폴더 수준 프로필에 사용자 지정 특성을 추가합니다.


## 작성 템플릿 구성 {#id1889D0IL0Y4}

AEM Guides에는 7개의 기본 제작 템플릿과 2개의 DITA 맵 템플릿이 포함되어 있습니다. 작성자가 사용할 수 있는 템플릿은 몇 개만 선택할 수 있습니다. 사용자 지정 템플릿을 사용하는 경우 동일한 을 구성하여 작성에 사용할 수 있습니다. 폴더 프로필 구성의 작성 템플릿 탭을 사용하여 전역 또는 폴더 수준 프로필에서 주제 또는 맵 템플릿을 추가하거나 제거할 수 있습니다.

전역 또는 폴더 수준에서 주제나 맵 템플릿을 구성하기 전이라도 사용자 지정 작성 템플릿을 저장할 위치를 정의할 수 있습니다. 작성 템플릿을 저장할 사용자 지정 위치를 구성하려면 [사용자 지정 DITA 템플릿 폴더 경로 구성](conf-template-tags-custom-dita-topic-template.md#id191LCF0095Z)을 참조하십시오.

항목을 추가하거나 템플릿을 폴더 프로필에 매핑하려면 다음 단계를 수행하십시오.

1. 관리자 또는 폴더 수준 프로필에 대한 관리 권한이 있는 사용자로 Adobe Experience Manager에 로그인합니다.

1. 맨 위에 있는 Adobe Experience Manager 링크를 클릭하고 **도구**&#x200B;를 선택합니다.

1. 도구 목록에서 **안내서**&#x200B;를 선택하고 **폴더 프로필** 타일을 클릭합니다.

1. 구성할 프로필 타일을 클릭합니다.

   >[!NOTE]
   >
   > 전역 프로필 또는 폴더 수준 프로필에서 작성 템플릿을 구성하도록 선택할 수 있습니다.

1. 프로필 페이지에서 **작성 템플릿** 탭을 클릭합니다.
1. **편집**&#x200B;을 클릭합니다.

   기본 위치에서 검색하거나 검색하여 주제 및 맵 템플릿을 추가할 수 있는 옵션이 제공됩니다.

   >[!NOTE]
   >
   > 기본적으로 모든 작성 템플릿은 /content/dam/dita-templates 폴더에 저장됩니다. `dita-templates` 폴더에는 항목을 저장하고 서식 파일을 매핑할 수 있는 `topics` 및 `maps` 하위 폴더가 있습니다. 기본 템플릿 폴더에 사용자 지정 템플릿 \(.dita,.xml 또는 .ditamapfiles\)을 추가할 수 있습니다. 기본 폴더에 템플릿을 추가하면 전역 또는 폴더 프로필에 추가할 수 있습니다. 웹 편집기를 사용하여 사용자 지정 서식 파일을 만드는 방법에 대한 자세한 내용은 [사용자 지정 제작 서식 파일 만들기](#id1917D0EG0HJ)를 참조하십시오.

   ![](assets/search-author-temp.png){width="550" align="left"}

1. 필요한 항목을 추가하고 템플릿을 프로필에 매핑합니다.

   템플릿을 추가하려면 다음 중 하나를 수행합니다.

   - **검색 또는 유형**&#x200B;을 선택하고 드롭다운 목록에서 템플릿 이름을 입력하거나 선택합니다. 드롭다운 목록은 모든 기본 템플릿과 사용자가 만든 새 템플릿으로 구성됩니다.

     ![](assets/default-template-list.png){width="350" align="left"}

   - **찾아보기**&#x200B;를 클릭하고 DAM에서 템플릿을 선택합니다.

1. **추가**&#x200B;를 클릭합니다.

   선택한 템플릿이 템플릿 목록에 추가됩니다.

   ![](assets/author-templ-added-list.png){width="550" align="left"}

   >[!NOTE]
   >
   > 목록에서 원하는 위치에 템플릿을 끌어다 놓아 템플릿의 순서를 변경할 수 있습니다. 템플릿 위치는 주제 또는 맵 작성 워크플로우에서 블루프린트 페이지에 표시되는 순서를 제어합니다.

1. **저장**&#x200B;을 클릭합니다.


폴더 수준 프로필에 템플릿을 구성한 경우 구성된 템플릿이 구성된 폴더와 연결됩니다. 구성된 폴더에 생성된 모든 프로젝트는 폴더 수준 프로필에 구성된 템플릿에만 액세스할 수 있습니다.

## 사용자 지정 작성 템플릿 만들기 {#id1917D0EG0HJ}

AEM Guides에서는 작성 템플릿을 손쉽게 만들 수 있습니다. 시스템 관리자는 웹 편집기를 사용하여 제작 템플릿을 처음부터 만들 수 있습니다. 그런 다음 글로벌 프로필에 새 템플릿을 추가하거나 폴더별 프로필을 사용하여 특정 폴더에 할당할 수 있습니다.

사용자 지정 작성 템플릿을 만들려면 다음 단계를 수행하십시오.

1. 관리자로 Adobe Experience Manager에 로그인합니다.

1. Assets UI에서 템플릿 파일을 저장하도록 구성된 폴더로 이동합니다. 기본적으로 모든 주제 템플릿은 /content/dam/dita-templates/topics 폴더에 저장됩니다.

   >[!NOTE]
   >
   > 주제 또는 맵 템플릿을 저장하도록 사용자 지정 위치를 구성하려면 [사용자 지정 DITA 템플릿 폴더 경로 구성](conf-template-tags-custom-dita-topic-template.md#id191LCF0095Z)을 참조하십시오.

1. **만들기** \> **DITA 템플릿**&#x200B;을 클릭합니다.

1. 블루프린트 페이지에서 만들려는 DITA 주제 템플릿의 유형을 선택합니다.

   >[!NOTE]
   >
   > 빈 템플릿을 사용하여 처음부터 시작할 수 있습니다. 빈 템플릿에는 구조나 요소가 없습니다.

1. **다음**&#x200B;을 클릭합니다.

1. 새 템플릿 속성 페이지에서 템플릿에 대한 **제목**, **이름** 및 **설명**&#x200B;을 입력하십시오.

   >[!NOTE]
   >
   > 템플릿의 제목 을 기반으로 이름이 자동으로 제안됩니다. 이름을 수동으로 지정하려면 이름에 공백, 아포스트로피 또는 중괄호가 포함되어 있지 않고 .dita로 끝나야 합니다.

1. *\(선택 사항\)***썸네일 추가** 단추를 브라우저에서 클릭하고 템플릿과 연결할 썸네일을 선택합니다.

1. **만들기**&#x200B;를 클릭합니다.

   Topic Created 메시지가 나타납니다.

   웹 편집기에서 편집할 템플릿을 열거나 템플릿 저장소 위치에 템플릿 파일을 저장하도록 선택할 수 있습니다. 템플릿이 생성되면 웹 편집기를 사용하여 작성 요구에 따라 템플릿을 사용자 정의할 수 있습니다. 템플릿이 준비되면 전역 또는 폴더 수준 프로필과 연결해야 합니다.


## 출력 사전 설정 구성 {#id18AGD0IH0Y4}

일반적인 엔터프라이즈 설정에서는 제품이나 사용 안내서마다 다른 출력 템플릿을 사용할 수 있습니다. 또한 모든 게시자가 사용해야 하는 몇 가지 일반적인 출력 생성 프로세스와 특정 게시자 그룹 또는 프로젝트에 대한 일련의 특정 출력 생성 프로세스가 있을 수 있습니다.

AEM Guides을 사용하면 관리자가 특정 설정을 사용하여 출력 사전 설정을 만든 다음 모든 게시자 또는 특정 게시자 세트에서 출력을 생성하는 데 사용할 수 있습니다. 예를 들어 관리자는 하나의 출력 사전 설정을 만들어 모든 게시자에서 공통되는 사용자 안내서를 생성할 수 있습니다. 또한 게시자 집합에 고유한 프로그래밍 사용자 설명서를 만드는 또 다른 방법입니다. 이러한 두 사전 설정은 서로 다른 출력 템플릿을 사용하도록 구성할 수 있습니다. 이 예에서 사용 안내서를 생성하기 위한 공통 게시 사전 설정은 전역 수준에서 구성할 수 있습니다. 또한, 프로그래밍 사용자 매뉴얼을 생성하기 위한 출력 사전 설정은 폴더 레벨로 구성될 수 있다.

시스템에 기본 출력 사전 설정이 만들어지면 그 이후에 만들어진 모든 DITA 맵에서 기본 사전 설정을 사용하여 출력을 생성합니다. 그러나 기존의 모든 DITA 맵은 이전에 구성된 출력 사전 설정을 계속 사용합니다. 기존의 모든 DITA 맵에 새 출력 사전 설정을 적용하려면 사전 설정 변경 사항 적용 워크플로우를 실행해야 합니다.

글로벌 또는 엔터프라이즈 수준에서 구성된 사전 설정 외에도 게시자는 여전히 더 많은 출력 사전 설정을 만들 수 있는 권한을 갖습니다. 그러나 이러한 사전 설정은 해당 사전 설정이 생성되는 DITA 맵에 연결되어 있습니다. DITA 맵에 대한 일반 출력 사전 설정을 만드는 방법에 대한 자세한 내용은 *Adobe Experience Manager Guides 사용*&#x200B;에서 *출력 사전 설정 만들기, 편집, 복제 또는 제거*&#x200B;를 참조하십시오.

전역 또는 폴더별 출력 사전 설정을 구성하려면 다음 단계를 수행하십시오.

1. 폴더별 프로필에 대한 관리자 권한이 있는 사용자 또는 관리자로 Adobe Experience Manager에 로그인합니다.

1. 맨 위에 있는 Adobe Experience Manager 링크를 클릭하고 **도구**&#x200B;를 선택합니다.

1. 도구 목록에서 **안내서**&#x200B;를 선택하고 **폴더 프로필** 타일을 클릭합니다.

1. 구성할 프로필 타일을 클릭합니다.

   >[!NOTE]
   >
   > 전역 프로필 또는 폴더별 프로필에서 출력 사전 설정을 구성하도록 선택할 수 있습니다.

1. 프로필 페이지에서 을 참조하십시오. **출력 사전 설정** 탭을 클릭합니다.

   AEM Site, PDF, HTML5, EPUB 및 CUSTOM을 포함한 즉시 사용 가능한 출력 사전 설정 목록이 표시됩니다.

1. 출력 사전 설정을 만들거나 편집하려면 다음 중 하나를 수행하십시오.

   - 새 출력 사전 설정을 처음부터 만들려면 **만들기**&#x200B;를 클릭합니다.
   - 복제 를 클릭하여 선택한 출력 사전 설정의 복사본을 만듭니다. 중복 사전 설정을 변경하고 저장할 수 있습니다.

   - 선택한 사전 설정의 편집 구성을 열려면 **편집**&#x200B;을 클릭하세요.

     출력 사전 설정 설정에 대한 자세한 내용은 Adobe Experience Manager Guides 사용에서 *출력 사전 설정 이해*&#x200B;를 참조하십시오.

1. 사전 설정 설정을 저장하려면 **저장**&#x200B;을 클릭하세요.


이후에 만들거나 업로드한 모든 DITA 맵에는 새 출력 사전 설정 또는 업데이트된 출력 사전 설정이 있습니다.

## 사전 설정 변경 사항 적용 {#id18AGD0K0OHS}

전역 수준에서 만든 새 출력 사전 설정은 앞으로 만드는 모든 새 DITA 맵에서 사용할 수 있습니다. 마찬가지로 폴더 수준에서 새 출력 사전 설정을 만들면 구성된 폴더에서 만들 모든 맵에서 해당 사전 설정을 사용할 수 있습니다. 기본적으로 새 출력 사전 설정은 기존 DITA 맵에서 사용할 수 없습니다.

기존 출력 사전 설정을 업데이트했거나 기존 DITA 맵에서 새 출력 사전 설정을 사용할 수 있도록 하려면 다음 단계를 수행합니다.

1. 폴더별 프로필에 대한 관리자 권한이 있는 사용자 또는 관리자로 Adobe Experience Manager에 로그인합니다.

1. 맨 위에 있는 Adobe Experience Manager 링크를 클릭하고 **도구**&#x200B;를 선택합니다.

1. 도구 목록에서 **안내서**&#x200B;를 선택하고 **폴더 프로필** 타일을 클릭합니다.

1. 구성할 프로필 타일을 클릭합니다.

   >[!NOTE]
   >
   > 전역 프로필 또는 폴더별 프로필에서 출력 사전 설정을 구성하도록 선택할 수 있습니다.

1. 프로필 페이지에서 을 참조하십시오. **출력 사전 설정** 탭을 클릭합니다.

   AEM Site, PDF, HTML5, EPUB 및 CUSTOM을 포함한 즉시 사용 가능한 출력 사전 설정 목록이 표시됩니다.

1. 기존 DITA 맵에 적용할 출력 사전 설정을 선택합니다.

1. 기본 도구 모음에서 **사전 설정 변경 내용 적용**&#x200B;을 클릭합니다.

1. [사전 설정 변경 내용 적용] 대화 상자에서 다음 중 하나를 선택할 수 있습니다.

   - **기존 사전 설정 덮어쓰기 옵션 선택**: 이 옵션을 선택하면 기존 출력 사전 설정에서 업데이트한 내용이 해당 사전 설정이 사용되는 모든 기존 DITA 맵의 설정을 덮어씁니다. 하지만 이렇게 하면 맵과 관련된 기존의 조건부 사전 설정 및 기준선 정보가 손실됩니다.

   - **기존 사전 설정 덮어쓰기 옵션을 선택하지 않음**: 이 옵션을 선택하지 않으면 기존 출력 사전 설정에서 수행한 모든 업데이트가 기존 DITA 맵에 영향을 주지 않습니다. 새로 추가된 사전 설정만 기존 DITA 맵에 추가됩니다. 새로 만든 DITA 맵은 업데이트된 출력 사전 설정과 새로 추가된 사전 설정을 모두 가져옵니다.

1. 기존의 모든 DITA 맵에서 선택한 출력 사전 설정의 변경 내용을 적용하려면 **확인**&#x200B;을 클릭하십시오.


## XML Web Editor 구성 및 사용자 지정 {#id2065G300O5Z}

기본적으로 XML Web Editor에는 작성자가 DITA 문서를 작성하는 데 도움이 되는 다양한 기능이 포함되어 있습니다. 제한된 환경에서 작업하는 경우 작성자가 볼 수 있는 기능을 선택할 수 있습니다. XML 편집기 구성 탭에서는 기능을 쉽게 제어하고 웹 편집기의 모양과 느낌을 변경할 수 있습니다. 관리자는 웹 편집기의 다음 구성 요소를 사용자 지정할 수 있습니다.

**XML 편집기 UI 구성**

이 설정은 웹 편집기의 도구 모음 및 기타 사용자 인터페이스 요소를 제어합니다. **다운로드** 아이콘을 클릭하여 로컬 시스템에서 최신 ui\_config.json 파일을 다운로드합니다. 그런 다음 파일을 변경하고 동일한 파일을 업로드할 수 있습니다. **기본 다운로드**&#x200B;아이콘을 클릭하여 로컬 시스템에 기본 ui\_config.json 파일을 다운로드합니다. 항상 기본 파일을 다운로드하고 변경한 다음 업로드할 수 있습니다.파일을 업로드하는 위치, 전역 또는 폴더 수준 프로필에 따라 변경 내용이 적절하게 적용됩니다. ui\_config.json 파일을 사용하여 XML 편집기를 사용자 지정하는 방법에 대한 자세한 내용은 [도구 모음 사용자 지정](conf-web-editor-customize-toolbar.md#)을 참조하십시오.

**CSS 템플릿 레이아웃**

이 섹션에서 사용할 수 있는 파일을 다운로드하여 웹 편집기에서 미리 보거나 편집할 수 있도록 열 때 문서의 디자인을 사용자 지정합니다. 다운로드할 수 있는 기본 CSS 파일은 테스트 파일일 뿐이며, 이는 사용자 지정에 사용하면 안 됩니다. 웹 편집기의 사용자 지정 내용이 포함된 CSS 파일을 만들고 업로드할 수 있습니다. 예를 들어 다음 코드를 사용하여 .css 파일을 만들 수 있습니다.

```css
.title {    font-size: 9em;}
```

이 파일을 저장하고 CSS 템플릿 레이아웃 섹션에 업로드합니다. 다음에 파일을 다운로드하면 웹 편집기에서 사용 중인 최신 CSS 파일을 가져옵니다.

**XML 편집기 조각**

이 섹션의 구성 파일을 사용하여 일부 기본 코드 조각을 만들어 작성자와 공유할 수 있습니다. 파일의 기본 구조는 아래에 나와 있습니다.

```css
{
   "snippetID": {
      "name": "snippet Name",
      "description": "snippet Description",
      "value": "<i>this is snippet value</i>"
  }
}
```

코드 조각을 만들려면 다음 세부 정보가 필요합니다.

- **코드 조각 ID:**   코드 조각에 대한 고유 ID입니다. 영숫자 값을 사용할 수 있습니다.

- **이름:**   코드 조각을 식별하는 수사적 이름입니다. 이 이름은 [코드 조각] 패널에 표시됩니다.

- **설명:**   코드 조각에 대한 설명 정보를 추가합니다.

- **값:**   코드 조각의 XML 코드를 제공합니다.

>[!NOTE]
>
> 코드 조각 정의 끝에 쉼표 \(,\)를 추가하고 다음 코드 조각에 대해 동일한 구조를 반복하여 더 많은 코드 조각을 추가할 수 있습니다.

**XML 콘텐츠 버전 레이블**

기본적으로 작성자는 원하는 레이블을 만들고 주제 파일과 연결할 수 있습니다. 하지만 이렇게 하면 주제의 동일한 단계를 식별하기 위한 &quot;릴리스 1.0&quot;, &quot;릴리스 1.0&quot;, &quot;릴리스 1&quot; 레이블이 있는 등 동일한 레이블의 여러 변형이 발생할 수 있습니다. 시스템에서 일관되지 않은 레이블 지정을 방지하기 위해 작성자가 선택할 수 있는 미리 정의된 레이블 목록을 만들 수 있습니다. 일관된 레이블 지정을 사용하면 시스템의 파일을 보다 효율적으로 관리할 수 있습니다.

버전 레이블 구성을 사용하여 조직에 유효한 레이블 목록을 업로드할 수 있습니다. 기본 label.json 파일을 다운로드하고 아래와 같이 수정합니다.

```css
{
"label1":"Draft",
"label2":"PM-Review",
"label3":"Engg-Review",
"label4":"QE-Review",
"label5":"Ready for Loc",
"label6":"Ready for Publish"
}
```

위의 예에서 &quot;label1&quot;은 레이블 시퀀스에 대한 식별자이며 레이블이 필요한 모든 위치에서 작성자에게 표시되는 레이블이 추가됩니다. 이 파일을 저장하고 XML 콘텐츠 버전 레이블 섹션에 업로드합니다.

>[!IMPORTANT]
>
> 폴더 수준 구성을 적용하려면 사용자는 웹 편집기의 사용자 환경 설정에서 프로필을 선택해야 합니다.

**Rootmap**

작성자가 특정 루트 맵으로 작업하는 경우 여기에서 해당 루트 맵을 찾아 선택할 수 있습니다. 폴더 수준 프로필에 대해서만 루트 맵을 정의할 수 있습니다.
