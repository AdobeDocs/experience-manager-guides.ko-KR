---
title: 출력 생성
description: AEM Guides의 맵 콘솔 및 맵 대시보드에서 DITA 맵에 대한 출력을 생성합니다.
exl-id: d6cbd44c-e74c-4192-bcc4-fb7752c59508
feature: Publishing
role: User
TQID: https://experienceleague.adobe.com/za9qWiDoXKDhu4nnbi37Tnl-QClwQra9XCXL4G-AgEg
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: afb45297-4313-4f67-818e-bc0b03abe086
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: b1ef4d86-3917-4b76-a0bc-4a4771f9b3b0
  - id: f9dbea21-a714-40dd-bc90-080d8046c93f
  - id: fd6cc9e1-e5e5-494e-b7b1-a32f2d6cd7c9
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 567
ht-degree: 0%

---

# 출력 생성

DITA 맵에 대한 출력을 생성하는 방법에는 두 가지가 있습니다.

- [맵 콘솔에서 DITA 맵에 대한 출력 생성](#generate-output-for-a-dita-map-from-the-map-console)
- [맵 대시보드에서 DITA 맵에 대한 출력 생성](#generate-output-for-a-dita-map-from-the-map-dashboard)

## 맵 콘솔에서 DITA 맵에 대한 출력 생성

맵 콘솔을 사용하여 DITA 맵에 대한 출력을 생성하려면 다음 단계를 수행하십시오.

1. [맵 콘솔에서 맵 파일을 엽니다](./open-files-map-console.md).
2. DITA 맵 콘솔에는 출력을 생성하는 데 사용할 수 있는 **출력 사전 설정** 목록이 표시됩니다.

3. 출력을 생성하는 데 사용할 사전 설정을 열고 **출력 생성**&#x200B;을 선택하여 생성 프로세스를 시작합니다.

   <img src="images/generate-output-pdf.png" alt="메타데이터 탭" width="600">

   또는 사전 설정 위로 마우스를 가져간 후 사전 설정 컨텍스트 메뉴에서 **생성**&#x200B;을 선택합니다.


   <img src="images/generate-preset-map-console.png" alt="메타데이터 탭" width="600">

출력 생성이 완료되면 출력을 보려면 **출력 보기**&#x200B;를 선택하십시오.

**성공** 대화 상자가 화면 오른쪽 아래에 표시됩니다.

출력이 성공하지 않으면 아래 오류 메시지가 표시됩니다.

<img src="images/error-log.png" alt="오류 로그" width="250">

오류 로그를 보려면 **취소**&#x200B;를 선택하고 선택한 사전 설정 탭을 마우스로 가리킨 다음 사전 설정 컨텍스트 메뉴에서 **로그 보기**&#x200B;를 선택하십시오.

>[!NOTE]
>
> 맵에서 DITAVAL 파일을 사용하는 경우 DITAVAL 파일에서 참조되는 플래그가 지정된 모든 이미지가 출력에서 게시된 맵과 관련된 위치에 복사됩니다.  또한 동일한 맵 내에서 필터링하는 데 여러 DITAVAL 파일을 사용하는 경우 게시하는 동안 파일 이름이 중복되지 않도록 고유한 `.ditaval` 파일 이름을 사용해야 합니다.

## 맵 대시보드에서 DITA 맵에 대한 출력 생성

맵 대시보드를 사용하여 DITA 맵에 대한 출력을 생성하려면 다음 단계를 수행하십시오.

1. Assets UI에서 로 이동하고 게시할 DITA 맵 파일을 선택합니다.

   DITA 맵 콘솔에는 출력을 생성하는 데 사용할 수 있는 출력 사전 설정 목록이 표시됩니다.

1. 출력을 생성하는 데 사용할 [출력 사전 설정]을 하나 이상 선택합니다.

   ![](images/generate-multiple-outputs-uuid.png)

1. **생성** 아이콘을 선택하여 출력 생성 프로세스를 시작합니다.


**출력** 탭에서 출력 생성 요청의 현재 상태를 볼 수 있습니다. 자세한 내용은 [출력 생성 작업의 상태를 확인](./generate-output-manage-process.md#view-the-status-of-the-output-generation-task)하세요.

>[!IMPORTANT]
>
> 사전 설정에 대한 출력 생성 프로세스가 큐에 있거나 진행 중인 경우 동일한 사전 설정에 대해 다른 출력 생성 작업을 시작할 수 없습니다.

맵 콘솔에서 하나 이상의 주제에 대한 AEM Sites 출력 또는 전체 DITA 맵을 생성할 수도 있습니다. 자세한 내용은 [기술 자료 출력 생성](web-editor-article-publishing.md#id218CK0U019I)을 참조하세요.

## `chunk` 특성을 사용하여 DITA 맵 내에서 다른 주제 병합

DITA 맵에는 참조, 개념 및 작업과 같은 다양한 주제 유형이 포함될 수 있습니다. `chunk=to-content` 특성을 사용하면 이러한 주제를 병합하여 AEM Sites에서 단일 페이지 출력을 생성할 수 있습니다. 그러나 병합된 주제를 제대로 게시하려면 관리자가 DITA 프로필에 올바른 XML 카탈로그를 구성했는지 확인하십시오.

적절한 DTD 규칙을 올바르게 식별하고 적용하려면 XML 카탈로그에 `composite` 키워드가 있는 공용 ID가 필요합니다.
이 구성은 기본적으로 표준 XML 카탈로그에 포함되어 있습니다. 그러나 사용자 지정 XML 카탈로그를 사용하는 경우 관리자가 이 공개 ID를 구성에 추가했는지 확인하십시오. 이 항목이 없으면 병합된 주제가 제대로 게시되지 않을 수 있습니다.

사용자 지정 DTD/XSD에서 공개 ID 및 시스템 ID를 사용하는 방법에 대한 자세한 내용은 [DITA 특수화 통합](../cs-install-guide/dita-ot-specialization.md#integrate-dita-specialization-id211mb0e00xa)을 참조하십시오.



**상위 항목:**&#x200B;[&#x200B;출력 생성](generate-output.md)
