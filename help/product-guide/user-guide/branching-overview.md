---
title: AEM Guides의 분기 | Adobe Experience Manager Guides`
description: AEM Guides에서 DITA 맵의 분기를 만들고 관리하여 설명서 변경 내용의 병렬 작성, 독립 게시 및 병합을 지원하는 방법에 대해 알아봅니다.
TQID: https://experienceleague.adobe.com/pg9zeEg8m3NeDbN-j945SqPbaMX0GgBmuquAsQcrjOM
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
feature_v2:
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
    internal-label: Authoring
  - id: ec4263d9-bf7c-44c7-b3f1-3e664861c8f2
    internal-label: Generative AI
subfeature_v2:
  - id: ad602516-aca3-4247-9ae8-f393d958efa9
    internal-label: Editor
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
topic_v2:
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
  - id: f5c2a4bb-71ca-4d7e-8efd-442250e6ba48
    internal-label: Content reuse
source-git-commit: 3f0d8e31537ade58a4eab5ddf73eb6d263d3dd96
workflow-type: tm+mt
source-wordcount: '747'
ht-degree: 0%
---
# 개요

>[!NOTE]
>
> 분기 및 병합 기능은 Experience Manager Guides as a Cloud Service의 2026.11.0 릴리스에서 도입되었으며 기본적으로 비활성화되어 있습니다. 환경에 대한 기능을 활성화하려면 고객 지원 팀에 문의하십시오.

Adobe Experience Manager Guides의 분기를 사용하면 DITA 맵의 **main** 분기에서 여러 분기를 만들고 관리하여 서로 다른 설명서 릴리스에서 동시에 작업할 수 있습니다. 각 분기를 사용하면 작성자가 다른 분기의 해당 컨텐츠에 영향을 주지 않고 컨텐츠 변경 사항을 독립적으로 관리할 수 있습니다.

분기를 사용하면 여러 팀이 동일한 DITA 맵과 관련된 서로 다른 릴리스, 기능 또는 수정 사항에 대해 동시에 작업할 수 있습니다. 업데이트가 준비되면 분기의 변경 내용을 기본 분기(`main`)에 병합할 수 있습니다.

## 분기 작동 방식

**main** 또는 DITA 맵의 기존 분기에서 분기를 만들 수 있습니다. 분기를 만든 후 분기로 전환하고 맵과 해당 콘텐츠 편집을 시작할 수 있습니다. 선택한 분기에서 콘텐츠를 게시하거나 준비가 되면 변경 내용을 `main`에 병합할 수도 있습니다.

예를 들어 제품에 대한 설치 지침이 포함된 DITA 맵 `install-the-lift.ditamap`을(를) 고려해 보십시오. 설명서 팀은 `main`에서 이 맵의 두 분기를 만들 수 있습니다.

- **릴리스 1:** 팀 A는 기존 설치 지침과 주소 수정 사항을 유지합니다.
- **릴리스 2:** Team B는 새로운 기능에 대한 설치 지침을 개발합니다.

두 팀은 서로의 변화에 영향을 주지 않고 각자의 맵 분기에 대해 독립적으로 작업할 수 있습니다.

>[!NOTE]
>
>분기는 DITA 맵을 기반으로 만들어집니다. 선택한 분기 내에서 맵에서 참조하지 않는 주제를 추가하고 편집할 수도 있습니다. 자세한 내용은 [현재 맵 외부에서 항목을 열거나 편집하세요](./create-manage-branch.md#open-or-edit-topics-outside-the-current-map-context).

DITA 맵의 분기를 만들 때 Experience Manager Guides은 맵에서 참조한 주제를 새 분기에 자동으로 복사하지 않습니다. 변경되지 않은 항목은 소스 분기 또는 기본 분기(주)에서 읽습니다. 주제는 해당 분기에서 편집하고 저장할 때만 새 분기로 복사됩니다.

예를 들어 DITA 맵은 100개의 주제를 참조하고 저장소에는 맵에서 참조하지 않는 50개의 추가 주제가 있습니다. 새 분기(릴리스-1.0)를 만들면 참조된 100개의 모든 항목은 편집된 항목이 없더라도 자동으로 릴리스-1.0에 포함됩니다. 참조되지 않은 50개의 주제는 자동으로 새 분기의 일부가 되지 않습니다. 이 중 10개를 편집하면 10개만 릴리스-1.0에 포함됩니다. 변경되지 않은 나머지 40개의 항목은 기본 분기(주)에서 계속 사용됩니다.

>[!NOTE]
>
> 주제 버전 관리는 분기에서 계속 작동합니다. DITA 맵의 선택한 분기 내에서 주제의 버전을 만들고 관리할 수 있습니다. 각 분기는 다른 분기와 독립적으로 자체 버전 기록을 유지 관리합니다.

## 주요 이점

Experience Manager Guides의 분기를 사용하여 작업하면 다음과 같은 이점이 있습니다.

- **격리된 편집:** 다른 분기의 해당 콘텐츠에 영향을 주지 않고 선택한 맵 분기 내에서 변경합니다.
- **병렬 작성:** 여러 팀이 각 맵 분기 내의 다른 릴리스, 기능 또는 수정 사항에 대해 동시에 작업할 수 있도록 합니다.
- **독립 게시:** 다른 분기의 변경 내용이 완료될 때까지 기다리지 않고 개별 맵 분기에서 설명서를 게시합니다.
- **제어된 병합:** 충돌을 검토하고 해결할 수 있는 기능을 사용하여 맵 분기의 변경 내용을 기본 분기(`main`)에 병합합니다.

## 분기 및 기준선

>[!NOTE]
>
> 베이스라인과 분기는 상호 배타적인 피쳐입니다. 분기가 활성화되면 기준선 기능을 사용할 수 없게 됩니다. 그러나 기존 기준선은 그대로 유지되며 삭제되지 않습니다. 나중에 분기가 비활성화되면 기존 기준선을 다시 사용할 수 있게 됩니다.

**기준선**&#x200B;은(는) DITA 맵에 대한 주제 버전의 특정 조합을 식별하므로 선택한 버전을 사용하여 출력을 생성할 수 있습니다.

**분기**&#x200B;에서는 DITA 맵과 해당 내용에 대해 별도의 편집 환경을 제공하므로 작성자가 동일한 맵의 다른 분기에 영향을 주지 않고 변경할 수 있습니다.

| 기준선 | 분기 |
|---|---|
| DITA 맵에서 주제의 특정 버전을 선택합니다. | DITA 맵의 개별 분기를 만들어 변경 사항을 독립적으로 관리합니다. |
| 특정 항목 버전 조합을 게시하는 데 사용됩니다. | 서로 다른 릴리스를 동시에 개발하고 게시하는 데 사용됩니다. |
| 격리된 편집 컨텍스트를 제공하지 마십시오. | 격리된 편집 및 병합을 지원합니다. |

## 예정된 기능

다음 기능은 현재 기본 분기(`main`)에서만 지원되며, 향후 Experience Manager Guides 릴리스에서 DITA 맵의 다른 분기에서 지원될 예정입니다.

- 검색
- 찾기 및 바꾸기
- 워크플로우 검토

