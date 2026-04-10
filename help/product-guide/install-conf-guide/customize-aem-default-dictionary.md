---
title: AEM의 기본 사전 사용자 지정
description: AEM의 기본 사전을 사용자 지정하는 방법 알아보기
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '269'
ht-degree: 2%

---

# AEM의 기본 사전 사용자 지정 {#id209SD8000WU}

웹 편집기는 AEM의 맞춤법 검사기 또는 브라우저의 맞춤법 검사기를 사용하도록 구성할 수 있습니다. AEM의 맞춤법 검사기로 작업하는 경우 사용자 정의 단어 목록을 유연하게 정의할 수 있습니다. 그런 다음 이러한 사용자 정의 단어는 AEM 사전에 추가되며 웹 편집기에서 \(부정확함\) 로 플래그가 지정되지 않습니다.

Experience Manager Guides 설정을 기반으로 AEM 사전에 추가되는 사용자 정의 단어 목록을 만드는 지침은 Cloud Service 또는 온프레미스 탭을 제공합니다.

>[!BEGINTABS]

>[!TAB Cloud Service]

1. 사용자 지정 사전에 정의할 단어 목록을 사용하여 user\_dictionary.txt 파일을 만듭니다.

   >[!NOTE]
   >
   > 각 사용자 정의 단어는 새 줄에 정의해야 합니다.

1. Cloud Manager의 Git 저장소의 다음 위치에 파일을 저장합니다.

   /apps/fmdita/config

1. 파일을 저장합니다.

   변경 사항을 커밋하고 Cloud Manager \(CI/CD\) 파이프라인을 실행하여 구성 변경 사항을 배포합니다.


작성자는 웹 편집기 세션을 다시 시작하여 AEM 사전에 업데이트된 사용자 정의 단어 목록을 가져와야 합니다.

>[!TAB 온-프레미스]

1. AEM에 로그인한 다음 CRXDE Lite 모드를 엽니다.

1. 다음 노드로 이동합니다.

   /apps/fmdita/config

1. user\_dictionary.txt라는 새 파일을 생성합니다.

1. 파일을 열고 사용자 지정 사전에 정의할 단어 목록을 추가합니다.

   다음 스크린샷은 user\_dictionary.txt 파일에 추가된 사용자 정의 단어 목록을 보여 줍니다.

   ![](assets/custom-words-list-dictionary.png){width="650" align="left"}

1. 파일을 저장하고 닫습니다.


작성자는 웹 편집기 세션을 다시 시작하여 AEM 사전에 업데이트된 사용자 정의 단어 목록을 가져와야 합니다.

>[!ENDTABS]

**상위 항목:**[&#x200B;웹 편집기 사용자 지정](customize-overview.md)
