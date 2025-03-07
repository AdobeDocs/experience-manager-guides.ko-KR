---
title: 기술 자료
description: 웹 편집기 및 맵 대시보드에서 기술 자료 사전 설정을 만드는 방법을 알아봅니다. AEM Guides에서 기술 자료 출력 사전 설정을 구성합니다.
feature: Publishing
role: User
hide: true
exl-id: 5fc81de9-9ae0-4cd4-a7ef-b52eed2479f7
source-git-commit: 1426cdaecdd358f06e76908b09330e65997e8452
workflow-type: tm+mt
source-wordcount: '1158'
ht-degree: 2%

---

# 기술 자료 {#knowledge-base}

웹 편집기에서 **기술 자료** 사전 설정을 만들 수 있습니다.

저장소 패널의 **맵 보기**&#x200B;에서 DITA 맵 파일을 열고 **출력** 탭에서 + 아이콘을 선택하여 출력 사전 설정을 만든 다음 **새 출력 사전 설정** 대화 상자의 **유형** 드롭다운에서 **기술 자료**&#x200B;를 선택합니다. 사전 설정 이름을 지정하고 **Adobe Experience Manager**, **Salesforce** 또는 **ServiceNow**&#x200B;를 사용하여 출력을 생성할 대상을 선택할 수 있습니다.




## 기술 자료 구성{#knowledge-base-configuration}


웹 편집기에서 다음 구성은 **일반** 및 **기사** 탭에 구성되어 있습니다. 대상으로 선택한 특정 **기술 자료**, **Adobe Experience Manager**, **Salesforce** 또는 **ServiceNow**&#x200B;에 대한 설정을 구성할 수도 있습니다.


### 일반

| 기술 자료 옵션 | 설명 |
| --- | --- |
| 다음을 사용하여 조건 적용 | 다음 옵션 중 하나를 선택하십시오.<br><br>* **적용되지 않음**: 게시된 출력에 조건을 적용하지 않으려면 이 옵션을 선택하십시오.<br>* **DITAVAL 파일**: 개인화된 콘텐츠를 생성하려면 DITAVAL 파일을 선택하십시오. 찾아보기 대화 상자를 사용하거나 파일 경로를 입력하여 여러 DITAVAL 파일을 선택할 수 있습니다. 파일 이름 근처에 있는 교차 아이콘을 사용하여 제거합니다. DITAVAL 파일은 지정된 순서대로 평가되므로 첫 번째 파일에 지정된 조건이 이후 파일에 지정된 조건에 우선합니다. 파일을 추가하거나 삭제하여 파일 순서를 유지할 수 있습니다. DITAVAL 파일을 다른 위치로 이동하거나 삭제하는 경우 사전 설정에서 자동으로 삭제되지 않습니다. 파일이 이동되거나 삭제될 경우에 대비하여 위치를 업데이트해야 합니다. 파일 이름 위로 마우스를 가져가면 파일이 저장된 Adobe Experience Manager 저장소의 경로를 볼 수 있습니다. DITAVAL 파일만 선택할 수 있으며 다른 파일 유형을 선택한 경우 오류가 표시됩니다.<br>* **조건 사전 설정**: 출력을 게시하는 동안 조건을 적용할 조건 사전 설정을 드롭다운에서 선택합니다. DITA 맵 콘솔의 조건 사전 설정 탭에 있는 조건을 추가한 경우 옵션이 표시됩니다. 조건 사전 설정에 대해 자세히 알아보려면 [조건 사전 설정 사용](generate-output-use-condition-presets.md#id1825FL004PN)을 확인하십시오. |
| 기준선 사용 | 선택한 DITA 맵에 대한 베이스라인을 생성한 경우 이 옵션을 선택하여 게시할 버전을 지정합니다.<br><br>자세한 내용은 [기준선으로 작업](generate-output-use-baseline-for-publishing.md#id1825FI0J0PF)을 참조하세요. |
| 사후 생성 워크플로 | 이 옵션을 선택하면 Adobe Experience Manager에 구성된 모든 워크플로우가 포함된 새로운 게시물 생성 워크플로우 드롭다운 목록이 표시됩니다. 출력 생성이 완료된 후 실행할 워크플로우를 선택해야 합니다.<br><br>**참고**: Cloud Services 설치 및 구성 안내서의 [사후 출력 생성 워크플로 사용자 지정](/help/product-guide/cs-install-guide/customize-workflows.md#id17A6GI004Y4) 섹션에 대해 자세히 알아보십시오. |

### ServiceNow

| ServiceNow 옵션 | 설명 |
| --- | --- |
| 프로필 게시 | 드롭다운을 사용하여 관리자가 구성하는 ServiceNow 연결 프로필에서 선택합니다. 관리자가 게시 프로필을 만드는 방법에 대한 자세한 내용은 [왼쪽 패널](./web-editor-features.md#id2051EA0M0HS) 섹션에서 **편집기 설정** 기능 설명을 참조하십시오. |
| 기술 자료 | 이 필드를 사용하여 필요한 ServiceNow 기술 자료를 선택하십시오. ServiceNow 사이트에서 사용 권한에 따라 콘텐츠를 저장하도록 기술 자료를 구성할 수 있습니다. 이 DITA 맵의 문서를 이러한 기술 자료로 게시할 수 있습니다. |
| 범주 및 하위 범주 | 카테고리는 ServiceNow 기술 자료 문서를 찾고 분류하는 데 사용되는 계층 구조 트리와 같습니다. 범주 및 하위 범주를 추가하여 TOC의 주제 및 하위 주제를 ServiceNow 사이트의 해당 범주 및 하위 범주에 게시합니다. |

### Salesforce

| Salesforce 옵션 | 설명 |
| --- | --- |
| 프로필 게시 | 드롭다운을 사용하여 관리자가 구성하는 Salesforce 연결 프로필에서 선택합니다. 관리자가 게시 프로필을 만드는 방법에 대한 자세한 내용은 [왼쪽 패널](./web-editor-features.md#id2051EA0M0HS) 섹션에서 **편집기 설정** 기능 설명을 참조하십시오. |
| 레코드 유형 | 드롭다운을 사용하여 사용자 프로필에 따른 가시성 설정에 따라 Salesforce에 설정된 레코드 유형 중에서 선택합니다. Salesforce 레코드 유형은 해당 개체에 대해 한 유형의 여러 레코드를 그룹화하는 방법입니다. 발행물의 구성 방법을 정의합니다. 예를 들어 FAQ 페이지 레이아웃 및 필드에 따라 FAQ 레코드 유형 및 게시를 선택할 수 있습니다. |
| 문서 콘텐츠 필드 | 각 레코드 유형 템플릿에 대해 서로 다른 필드와 고유한 레이아웃을 가질 수 있습니다. 이러한 필드를 사용하여 문서 유형에 따라 특정 정보를 입력합니다. 예를 들어 FAQ 문서의 제목, 답변 및 방정식을 볼 수 있습니다. |
| 범주 | 드롭다운에서 카테고리를 선택하여 Salesforce 사이트에 해당 카테고리의 TOC 주제를 게시합니다. |

Salesforce 및 ServiceNow 사전 설정에서 다음 옵션을 볼 수도 있습니다.

| 옵션 | 설명 |
| --- | --- |
| 문서 본문에서 주제 머리글을 제거합니다. | 게시된 출력의 문서에서 주제 머리글을 제거하려면 이 옵션을 선택합니다. |
| 초안으로 업로드 | 이 옵션을 선택하면 항목을 업로드하여 사용자가 사용할 수 있도록 하기 전에 초안으로 공유합니다. |
| 이미지 업로드 | 주제에 있는 이미지를 게시된 출력에 포함하려면 이 옵션을 선택합니다. |
| 연결된 문서 업로드 | 주제에 링크된 문서를 게시된 출력에 포함하려면 이 옵션을 선택합니다. |


### Adobe Experience Manager

>[!NOTE]
>
>관리자가 Adobe Experience Manager 기술 자료 사전 설정을 구성한 경우 이를 사용할 수 있습니다. 자세한 내용은 설치 및 구성 안내서의 [웹 편집기에서 문서 기반 게시](/help/product-guide/install-guide/configure-article-based-publishing.md) 섹션을 참조하십시오.

| Adobe Experience Manager 옵션 | 설명 |
| --- | --- |
| 문서 경로 사용 | 기술 자료 서식 파일이 포함된 폴더의 **문서 경로**&#x200B;을(를) 보려면 이 옵션을 선택하십시오. |
| 문서 경로 | **문서 경로 사용** 옵션을 선택하면 이 필드가 표시됩니다. Adobe Experience Manager 저장소 내에서 출력이 저장된 기술 자료 사이트를 검색하여 선택하십시오. |
| Site | 이 필드를 사용하여 필요한 Adobe Experience Manager 기술 자료를 선택하십시오. Adobe Experience Manager 사이트에서 지식 베이스를 구성하여 권한에 따라 콘텐츠를 저장할 수 있습니다. 이 DITA 맵의 문서를 이러한 기술 자료로 게시할 수 있습니다. |
| 범주 | 드롭다운에서 카테고리를 선택하여 Adobe Experience Manager 사이트에 해당 카테고리의 TOC 주제를 게시합니다. |
| 섹션 템플릿 및 문서 템플릿 | 출력 내용을 구성하는 데 사용되는 구조 구성 요소입니다. 이는 Adobe Experience Manager 사이트 템플릿에 사전 정의되어 있습니다. |
| 사후 생성 워크플로 | 이 옵션을 선택하면 Adobe Experience Manager에 구성된 모든 워크플로우가 포함된 새로운 게시물 생성 워크플로우 드롭다운 목록이 표시됩니다 . 출력 생성 워크플로우가 완료된 후 실행할 워크플로우를 선택해야 합니다.<br>설치 및 구성 안내서의 [사후 출력 생성 워크플로 사용자 지정](/help/product-guide/install-guide/customize-workflows.md#id17A6GI004Y4) 섹션에 대해 자세히 알아보십시오. |

>[!TIP]
> 
>선택한 기술 자료 템플릿에 따라 필드에 있는 각 템플릿을 채우려면 **새로 고침** ![새로 고침 아이콘](images/navtitle-refresh-icon.svg)을 선택하십시오.

### 기사

이 탭에는 맵의 트리 또는 계층 보기가 표시됩니다. 기술 자료에 게시할 주제를 선택합니다. 목차 노드를 확장하고 게시하려는 항목을 선택합니다.

**상위 항목:** [출력 사전 설정 이해](generate-output-understand-presets.md)
