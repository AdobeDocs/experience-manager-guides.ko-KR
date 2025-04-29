---
title: 릴리스 정보 | Adobe Experience Manager Guides 2025.04.0 릴리스의 새로운 기능
description: Adobe Experience Manager Guides 2025.04.0 릴리스의 새로운 기능과 향상된 기능에 대해 알아봅니다
role: Leader
source-git-commit: 2d0be1a3b3d4b625333e5b8c93e6b01f38e00b39
workflow-type: tm+mt
source-wordcount: '570'
ht-degree: 2%

---

# 2025.04.0 릴리스의 새로운 기능(2025년 4월)

이 문서에서는 Adobe Experience Manager Guides as a Cloud Service 2025.04.0 릴리스와 함께 도입된 새로운 기능 및 향상된 기능을 다룹니다.

이 릴리스에서 해결된 문제 목록을 보려면 [2025.04.0 릴리스에서 해결된 문제](fixed-issues-2025-04-0.md)를 확인하십시오.

[2025.04.0 릴리스의 업그레이드 지침](../release-info/upgrade-instructions-2025-04-0.md)에 대해 알아봅니다.

## 참조 링크에 대해 &#39;Format&#39; 속성이 추가됨

이제 Adobe Experience Manager Guides은 편집기 내에 참조 링크에 대한 **format** 특성을 추가합니다. 이 특성은 **Source 보기**&#x200B;에 표시되며 다음과 같은 파일 형식을 명확하게 나타냅니다.

- 확장명이 **.pdf**&#x200B;인 파일의 경우 형식이 **pdf**(으)로 설정됩니다.
- 확장명이 **.html**&#x200B;인 파일의 경우 형식이 **html**(으)로 설정됩니다.
- **.dita** 또는 **.ditamap** 파일이 있는 파일의 경우 형식이 **dita**(으)로 설정됩니다.

또한 확장명이 **.xml**&#x200B;인 파일의 형식도 **dita**(으)로 설정됩니다. 확장명이 없는 파일의 경우 형식은 비어 있습니다. 또한 범위가 **external**(으)로 설정된 모든 참조 링크의 경우 참조 링크의 파일 확장명에 관계없이 형식이 **html**(으)로 설정됩니다.


## 편집기에서 대용량 파일에 대한 정확한 통신

이제 Experience Manager Guides에서 파일이 큰 파일로 분류되고 실행 취소, 다시 실행, 윤곽선 패널 및 더티 마커와 같은 특정 기능이 예상대로 작동하지 않을 수 있음을 알립니다. 아래 코드 조각에 표시된 대로 큰 파일에 대한 인터페이스 맨 위에 경고 메시지가 표시되어 **uiconfig.json** 파일의 **largeFileTagCount** 매개 변수를 기반으로 요소 수를 나타냅니다.

또한 맨 아래 막대에 태그 수가 표시되며, 태그 위로 마우스를 가져가면 도구 설명이 표시됩니다. **자세히 알아보기** 탭을 선택하면 대용량 파일 처리에 대한 자세한 정보가 제공됩니다. 이 경고는 DITA 파일에만 사용할 수 있으며 작성자, Source 및 레이아웃과 같은 모든 보기에서 볼 수 있습니다.

자세한 내용은 [편집기에서 대용량 파일 처리](../user-guide/web-editor-other-features.md#handling-large-files-in-the-editor)를 참조하십시오.

![](assets/add-toast-tag-count.png){width="800" align="left"}

## 내보낸 기준선에 문서 상태가 포함됨

이제 기준선 내보내기 기능에 기준선 스냅숏의 제목, 파일 이름, 파일 형식 및 버전 번호와 같은 주요 세부 정보와 함께 **문서 상태**&#x200B;가 포함됩니다. 이러한 향상된 기능은 기준선에 대한 보다 포괄적인 개요를 제공함으로써 기준선 관리를 개선합니다.

자세한 내용은 [맵 콘솔에서 기준선 만들기 및 관리](../user-guide/web-editor-baseline.md#manage-baselines)를 참조하십시오.

## 재사용 가능한 콘텐츠 패널에 대한 검색 환경 개선

Experience Manager Guides에서는 재사용 가능한 콘텐츠 패널에서 향상된 검색 환경을 도입했습니다. 이 업데이트를 통해 키워드를 검색하면 이제 열려 있는 파일 뿐만 아니라 재사용 가능한 컨텐츠로 추가된 모든 파일이 검색되므로 컨테이너가 열려 있는지 축소되었는지 상관없이 모든 발생 항목에서 키워드의 정확한 위치를 찾을 수 있습니다. 또한 검색 막대를 지우면 모든 컨테이너의 원래 상태가 유지되므로 보다 효율적이고 사용자 친화적인 검색 기능을 사용할 수 있습니다.

자세한 내용은 [재사용 가능한 콘텐츠](../user-guide/web-editor-features.md#reusable-content)를 참조하세요.


## 마이크로서비스 컨테이너에 대한 DITA OT 버전 업데이트

마이크로서비스 지원 클라우드 환경의 경우 Java 21 사용으로 전환하여 기존 DITA-OT 및 기본 PDF 생성 프로세스가 영향을 받지 않도록 합니다. DITA-OT 3의 기존 워크플로우는 Java 21에서 계속 원활하게 작동합니다.  또한 DITA-OT 4는 완전히 작동하므로 사용자가 DITA-OT 및 기본 PDF을 사용하여 PDF를 생성하고 기본 AEM 사이트 및 기타 형식에 대한 출력을 생성할 수 있습니다.