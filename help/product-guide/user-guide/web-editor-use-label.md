---
title: 레이블 사용
description: Adobe Experience Manager Guides에서 다양한 버전의 파일에 대한 레이블을 사용하는 방법을 알아봅니다. 항목 버전에 레이블을 추가하거나 삭제하는 방법에 대해 알아봅니다.
exl-id: d116906d-b469-4a97-b0af-4fadbe15222b
feature: Authoring, Features of Web Editor, Publishing
role: User
source-git-commit: b8f3756e0e8f0338942efb77f00600703be8f6d8
workflow-type: tm+mt
source-wordcount: '536'
ht-degree: 0%

---

# 레이블 사용 {#id164JBG0M0T1}

Adobe Experience Manager Guides을 사용하면 파일의 다른 버전에 레이블을 추가할 수 있습니다. 이러한 레이블을 사용하여 게시를 위한 기준선에 포함할 버전을 지정할 수 있습니다. 레이블을 사용하여 기준선을 만드는 방법에 대한 자세한 내용은 [기준선으로 작업](generate-output-use-baseline-for-publishing.md#)을 참조하세요.

예를 들어, *릴리스 1.0*&#x200B;에 있는 주제의 *버전 1.0*&#x200B;과 *릴리스 2.0*&#x200B;에 있는 동일한 주제의 *버전 1.1*&#x200B;을 사용하려면 *버전 1.1*&#x200B;에 있는 *버전 1.0*&#x200B;과 *릴리스 2.0* 레이블에 *릴리스 1.0* 레이블을 추가할 수 있습니다.

레이블을 추가한 후에는 기준선을 만들고 해당 기준선을 사용하여 게시하기 위해 포함해야 하는 주제 버전을 지정할 수 있습니다. 기준 요소에 포함 또는 제외할 버전을 보려면 버전 기록 옵션을 사용할 수 있습니다.

## 편집기에서 레이블 추가

편집기에서 주제에 레이블을 추가하려면 다음 단계를 수행하십시오.

1. 저장소 패널에서 항목으로 이동하여 편집기에서 엽니다.
1. **메뉴** 드롭다운에서 **버전 레이블**&#x200B;을(를) 선택합니다.

   ![](images/version-label-option.png){width="400" align="left"}

   **버전 레이블 관리** 대화 상자가 표시됩니다.

1. **버전 레이블 관리** 대화 상자에서 레이블을 추가할 버전을 선택합니다.
1. 선택한 버전의 레이블을 선택하고 **레이블 추가**&#x200B;를 선택합니다.

   ![](images/version-label-management-dialog-new.png){width="650" align="left"}

   >[!NOTE]
   >
   > 동일한 레이블을 다른 버전의 주제에 추가할 수 없습니다. 그러나 동일한 버전의 주제에 여러 레이블을 추가할 수 있습니다.
1. 확인 프롬프트에서 레이블을 적용하려면 확인하십시오.

   선택한 주제의 버전 내역에 레이블이 표시됩니다.

   ![](images/label-comparison-version-history.png){width="650" align="left"}

   >[!NOTE]
   >
   > 기준선을 사용하여 여러 주제에 레이블을 추가할 수 있습니다. 기준선을 사용하여 레이블을 추가하는 방법에 대한 자세한 내용은 [기준선에 레이블 추가](generate-output-use-baseline-for-publishing.md#id184KD0T305Z)를 참조하십시오.

항목에서 버전 레이블을 삭제하려면 [버전 레이블 관리] 대화 상자에서 추가한 각 레이블에 대해 제공된 **제거** 아이콘을 사용하십시오.

![](images/remove-version-label.png){width="800" align="left"}


## Assets UI의 레이블로 작업

주제에 레이블을 추가하고 Assets UI에서 필요에 따라 삭제할 수도 있습니다.

Assets UI에서 주제에 레이블을 추가하려면 다음 단계를 수행하십시오.

1. Assets UI에서 주제를 선택하고 엽니다.
1. 왼쪽 레일 선택기 아이콘을 선택하고 **버전 기록**&#x200B;을 선택합니다.
1. 버전 기록 드롭다운에서 레이블을 추가할 버전을 선택합니다.
1. 선택한 버전의 레이블을 입력하고 Enter 키를 누릅니다. 예: *2.6 릴리스*.

   >[!NOTE]
   >
   > 동일한 레이블을 다른 버전의 주제에 추가할 수 없습니다. 그러나 동일한 버전의 주제에 여러 레이블을 추가할 수 있습니다.

   선택한 주제의 버전 내역에 레이블이 표시됩니다. 다음 스크린샷에는 강조 표시된 버전의 주제에 추가된 레이블 *x.x 릴리스* 및 *사용 안내서*&#x200B;가 표시됩니다.

   ![](images/labels.png){width="300" align="left"}

>[!NOTE]
>
> 기준선을 사용하여 여러 주제에 레이블을 추가할 수 있습니다. 기준선을 사용하여 레이블을 추가하는 방법에 대한 자세한 내용은 [기준선에 레이블 추가](generate-output-use-baseline-for-publishing.md#id184KD0T305Z)를 참조하십시오.

항목에서 버전 레이블을 삭제하려면 [버전 기록] 패널의 각 레이블에 대해 제공된 **삭제** 단추를 사용하십시오.

![](images/delete-labels.png){width="300" align="left"}


**상위 항목:**[&#x200B;편집기 소개](web-editor.md)
