---
title: 벌크 활성화 맵 컬렉션 만들기
description: AEM Guides에서 벌크 활성화 맵 컬렉션을 만드는 방법을 알아봅니다.
feature: Publishing, Bulk Activation
role: User
hide: true
exl-id: a242efde-2b29-4d2b-8a50-fd4ae7e8f239
source-git-commit: 4801f0d327b4bd0641aa195d39ec2c4be2a2ce74
workflow-type: tm+mt
source-wordcount: '735'
ht-degree: 0%

---

# 벌크 활성화 맵 컬렉션 만들기 {#id214GG0E90EV}

벌크 활성화 맵 컬렉션을 만들려면 다음 단계를 수행하십시오.

1. 도구 목록에서 **안내서**&#x200B;를 선택합니다.

1. 맨 위에 있는 Adobe Experience Manager 링크를 선택하고 **도구**&#x200B;를 선택합니다.

1. **일괄 게시 대시보드** 타일을 선택합니다.

   처음으로 빈 컬렉션 페이지가 표시됩니다. 이전에 일괄 활성화 컬렉션을 만든 경우 이 페이지에 표시됩니다.

1. **만들기**&#x200B;를 클릭합니다.

1. 벌크 활성화 맵 컬렉션의 제목을 입력하고 **만들기**&#x200B;를 클릭합니다.

   일괄 활성화 맵 컬렉션을 만들 때 성공 메시지가 표시됩니다.

1. 성공 메시지에서 **열기**&#x200B;를 클릭합니다.

1. **편집**&#x200B;을 선택한 다음 **맵 추가**&#x200B;를 선택하십시오.

1. 벌크 활성화 맵 컬렉션에 추가할 DITA 맵을 찾아 추가합니다.

   기본적으로 맵과 연결된 모든 사전 설정 및 로케일이 자동으로 추가됩니다.

1. 슬라이딩 버튼을 켜거나 끔으로써 원하는 출력을 선택합니다.

   사용 가능한 로케일에서 여러 출력 사전 설정을 선택할 수 있습니다.

1. **완료**&#x200B;를 클릭합니다.

DITA 맵 파일이 벌크 활성화 맵 컬렉션에 추가됩니다.

![이(가) 일괄 활성화 컬렉션을 만들었습니다](images/bulk-activation-collection-created.png){width="800" align="left"}

## 맵 및 사전 설정 탭

**맵 및 사전 설정** 탭에는 다음 열에 정보가 표시됩니다.

- **맵**: DITA 맵 파일의 제목을 표시합니다.
- **맵 경로**: DITA 맵 파일의 전체 경로를 표시합니다.

- **UUID**: 파일과 연결된 고유 식별자를 표시합니다.

- **언어**: DITA 맵의 언어 코드를 표시합니다.
- **사전 설정**: 맵 파일에 구성된 출력 사전 설정의 제목을 표시합니다. 또한 출력 사전 설정 유형에 따라 아이콘이 표시됩니다.

  >[!NOTE]
  >
  > 작은 ![](images/global-preset-icon.svg) 아이콘은 폴더 프로필 수준 사전 설정을 나타냅니다.

- **수정됨**: 마지막 게시 후 DITA 맵이 업데이트되는지 여부를 나타냅니다. 이 정보를 기반으로 이 DITA 맵에 대한 출력을 활성화할지 여부를 결정할 수 있습니다.
- **생성됨**: 마지막으로 생성된 출력의 날짜와 시간을 표시합니다.
- **게시됨**: 마지막으로 게시된(또는 활성화된) 출력의 날짜와 시간을 표시합니다. 링크를 선택하면 콘텐츠가 활성화된 루트 경로에 대한 정보와 함께 로그가 들어 있는 **활성화 결과** 페이지가 표시됩니다.

## 감사 기록 탭

**감사 기록** 탭에는 다음 열에 활성화된 맵 출력에 대한 정보가 표시됩니다.
- **맵**: DITA 맵 파일의 제목을 표시합니다.
- **맵 경로**: DITA 맵 파일의 전체 경로를 표시합니다.
- **UUID** : 파일과 연결된 고유 식별자를 표시합니다.
- **언어**: DITA 맵의 언어 코드를 표시합니다.
- **사전 설정**: 맵 파일에 구성된 출력 사전 설정의 제목을 표시합니다. 또한 출력 사전 설정 유형에 따라 아이콘이 표시됩니다.
- **상태**: 활성화 상태를 성공 또는 실패로 표시합니다.
- **대상**: Experience Manager Guides as a Cloud Service에서 출력을 생성하는 경우 출력의 대상을 게시 또는 미리 보기로 볼 수 있습니다.

  >[!NOTE]
  >
  > 작은 ![](images/global-preset-icon.svg) 아이콘은 폴더 프로필 수준 사전 설정을 나타냅니다.

- **수정됨**: 마지막 게시 후 DITA 맵이 업데이트되었는지 여부를 나타냅니다. 이 정보를 기반으로 이 DITA 맵에 대한 출력을 활성화할지 여부를 결정할 수 있습니다.
- **게시됨**: 마지막으로 게시된(또는 활성화된) 출력의 날짜와 시간을 표시합니다. 링크를 선택하면 콘텐츠가 활성화된 루트 경로에 대한 정보와 함께 로그가 포함된 활성화 결과 페이지가 표시됩니다.
  ![이(가) 일괄 활성화 컬렉션 감사 기록 탭을 만들었습니다](images/bulk-collection-audit-history.png){width="800" align="left"}

  ***감사 기록**&#x200B;탭에서 활성화된 맵 출력에 대한 정보를 봅니다.*


  >[!NOTE]
  >
  > **감사 기록** 탭의 출력은 **게시됨** 열을 기준으로 정렬됩니다.



## 왼쪽 패널

왼쪽 패널에서 사용할 수 있는 필터링 옵션은 다음과 같습니다.

- **수정됨**: 예 또는 아니오를 선택할 수 있습니다. 예를 선택하면 수정된 DITA 맵만 표시됩니다. 수정된 맵은 마지막으로 게시된 이후 생성된 맵입니다.
- **사전 설정**: 맵 파일을 필터링할 사전 설정을 선택합니다. 이 열에는 맵 파일에 구성된 출력 사전 설정의 제목이 표시됩니다. 예를 들어 *AEM 사이트* 사전 설정을 선택하면 *AEM 사이트* 출력 사전 설정이 구성된 맵만 표시됩니다.
- **언어**: 사용 가능한 언어 코드를 선택하고 맵 및 사전 설정 탭에서 선택한 언어만 표시할 수 있습니다.

**맵 및 사전 설정** 탭에서 **감사 기록** 탭으로 전환하거나 그 반대로 전환하면 필터가 업데이트됩니다.

**상위 항목: &#x200B;** [게시된 콘텐츠의 일괄 활성화](conf-bulk-activation.md)
