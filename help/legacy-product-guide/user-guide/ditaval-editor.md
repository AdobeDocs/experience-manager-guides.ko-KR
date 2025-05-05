---
title: DITAVAL 편집기 사용
description: AEM Guides의 DIVATAL 편집기를 사용하여 DITAVAL 파일을 만들고 편집하는 방법을 이해합니다. DITAVAL 편집기가 작성자 및 소스 보기에서 DITAVAL 파일을 지원하는 방법을 알아봅니다.
feature: Authoring, DITAVAL Editor
role: User
hide: true
exl-id: 8eee347d-840e-4eaf-9441-c7c53a7c3aa0
source-git-commit: 26fa1e52920c1f1abd5655b9ca7341600a9bca67
workflow-type: tm+mt
source-wordcount: '758'
ht-degree: 0%

---

# DITAVAL 편집기 {#ditaval-editor}

DITAVAL 파일은 조건부 출력을 생성하는 데 사용됩니다. 단일 항목에서 요소 속성을 사용하여 조건을 추가하여 콘텐츠를 조건화할 수 있습니다. 그런 다음 컨텐츠를 생성하기 위해 선택해야 하는 조건과 최종 출력에서 제외해야 하는 조건을 지정하는 DITAVAL 파일을 만듭니다.

AEM Guides을 사용하면 DITAVAL 편집기를 사용하여 DITAVAL 파일을 쉽게 만들고 편집할 수 있습니다. DITAVAL 편집기는 시스템에 정의된 \(또는 tags\) 속성을 검색하며, 이 속성을 사용하여 DITAVAL 파일을 만들거나 편집할 수 있습니다. AEM에서 태그를 만들고 관리하는 방법에 대한 자세한 내용은 AEM 설명서의 [태그 관리](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/authoring/features/tags.html?lang=ko) 섹션을 참조하십시오.

## DITAVAL 파일 만들기

DITAVAL 파일을 생성하려면 다음 단계를 수행하십시오.

1. Assets UI에서 DITAVAL 파일을 생성할 위치로 이동합니다.

1. **만들기** \> **DITA 항목**&#x200B;을 클릭합니다.

1. 블루프린트 페이지에서 DITAVAL 파일 템플릿을 선택하고 **다음**&#x200B;을 클릭합니다.

1. 속성 페이지에서 DITAVAL 파일에 대해 **제목** 및 **이름**&#x200B;을 지정하십시오.

   >[!NOTE]
   >
   > 이 이름은 파일의 제목을 기반으로 자동으로 제안됩니다. 파일 이름을 수동으로 지정하려면 이름에 공백, 아포스트로피 또는 중괄호가 포함되어 있지 않고 .ditaval로 끝나야 합니다.

1. **만들기**&#x200B;를 클릭합니다. Topic Created 메시지가 나타납니다.

   편집할 DITAVAL 파일을 DITAVAL 편집기에서 열거나 주제 파일을 AEM 저장소에 저장하도록 선택할 수 있습니다.


## DITAVAL 파일 편집

DITAVAL 파일을 편집하려면 다음 단계를 수행하십시오.

1. Assets UI에서 편집할 DITAVAL 파일로 이동합니다.

1. 파일을 단독으로 잠그려면 파일을 선택하고 **체크 아웃**&#x200B;을 클릭합니다.

1. 파일을 선택하고 **편집**&#x200B;을 클릭하여 AEM Guides DITAVAL 편집기에서 파일을 엽니다.

   DITAVAL 편집기를 사용하여 다음 작업을 수행할 수 있습니다.

   A: 왼쪽 패널 전환
왼쪽 패널 보기를 전환합니다. DITA 맵을 통해 DITAVAL 파일을 연 경우 이 패널에 맵과 저장소가 표시됩니다. DITA 맵을 통해 파일을 여는 방법에 대한 자세한 내용은 [DITA 맵을 통해 주제 편집](map-editor-advanced-map-editor.md#id17ACJ0F0FHS)을 참조하십시오.

   B: 저장
파일에서 변경한 사항을 저장합니다. 모든 변경 사항은 파일의 현재 버전에 저장됩니다.

   C: 속성 추가
DITAVAL 파일에 단일 속성을 추가합니다.

   ![](images/ditaval-editor-props.png)

   첫 번째 드롭다운에는 DITAVAL 파일에서 사용할 수 있는 허용된 DITA 속성이 나열됩니다. 지원되는 특성은 `audience`, `platform`, `product`, `props` 및 `otherprops`입니다.

   두 번째 드롭다운 목록에는 선택한 속성에 대해 구성된 값이 표시됩니다. 그런 다음 다음 드롭다운 목록에 선택한 속성에서 구성할 수 있는 작업이 표시됩니다. 작업 드롭다운에서 허용되는 값은 `include`, `exclude`, `passthrough` 및 `flag`입니다. 이러한 값에 대한 자세한 내용은 OASIS DITA 설명서에서 [prop](http://docs.oasis-open.org/dita/dita/v1.3/errata01/os/complete/part3-all-inclusive/langRef/ditaval/ditaval-prop.html#ditaval-prop) 요소의 정의를 참조하십시오

   D: 모든 속성 추가
한 번의 클릭으로 시스템에 정의된 모든 조건부 속성이나 속성을 추가하려면 모든 속성 추가 기능을 사용합니다.

   >[!NOTE]
   >
   > 정의된 모든 조건부 속성이 DITAVAL 파일에 이미 있는 경우 속성을 더 추가할 수 없습니다. 이 시나리오에서는 오류 메시지가 표시됩니다.

   ![](images/ditaval-all-props.png)

1. DITAVAL 파일 편집을 마쳤으면 **저장**&#x200B;을 클릭합니다.

   >[!NOTE]
   >
   > 파일을 저장하지 않고 닫으면 변경 내용이 손실됩니다. 변경 내용을 AEM 저장소에 커밋하지 않으려면 **닫기**&#x200B;를 클릭한 다음 **저장하지 않은 변경 내용** 대화 상자에서 **저장하지 않고 닫기**&#x200B;를 클릭합니다.


## DITAVAL 편집기 뷰

AEM Guides의 DITAVAL 편집기는 두 가지 다른 모드 또는 보기에서 DITAVAL 파일 보기를 지원합니다.

**작성자**:   이는 DITAVAL 편집기의 \(WYSISYG\) 보기에 표시되는 일반적인 모습입니다. 드롭다운 목록에 속성, 해당 값 및 작업을 표시하는 간단한 사용자 인터페이스를 사용하여 속성을 추가하거나 제거할 수 있습니다. 작성자 보기에서는 한 번의 클릭으로 개별 속성을 삽입하고 모든 속성을 삽입할 수 있습니다.

파일 이름 위로 포인터를 가져가면 현재 작업 중인 DITAVAL 파일의 버전을 찾을 수도 있습니다.

**Source**:   Source 보기에는 DITAVAL 파일을 구성하는 기본 XML이 표시됩니다. 이 보기에서 일반 텍스트 편집 작업을 수행할 수 있을 뿐만 아니라 작성자는 스마트 카탈로그를 사용하여 속성을 추가하거나 편집할 수도 있습니다.

스마트 카탈로그를 호출하려면 속성 정의의 끝에 커서를 놓고 &quot;&lt;&quot;를 입력합니다. 해당 위치에 삽입할 수 있는 모든 유효한 XML 요소 목록이 편집기에 표시됩니다.

![](images/ditaval-source-view.png)
