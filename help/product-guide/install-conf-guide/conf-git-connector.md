---
title: AEM Guides에서 Git 커넥터 구성
description: Experience Manager Guides에서 Git을 구성하는 방법을 알아봅니다.
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 5f626c210e74c6d11e2441f719cfbfeb33bf55c5
workflow-type: tm+mt
source-wordcount: '325'
ht-degree: 1%

---

# 사용자 인터페이스에서 Git 커넥터 만들기 및 구성

Experience Manager Guides의 데이터 소스 도구를 사용하여 사용자 인터페이스에서 Git 커넥터를 만들고 구성합니다. 커넥터를 구성했으면 이 커넥터를 사용하여 Git 저장소의 콘텐츠를 Experience Manager Guides으로 가져올 수 있습니다.


1. 맨 위에 있는 **Adobe Experience Manager** 링크를 선택하고 **도구**&#x200B;를 선택합니다.
1. 도구 목록에서 **안내서**&#x200B;를 선택합니다.
1. **데이터 원본** 타일을 선택하십시오. **데이터 원본** 페이지가 표시됩니다.
1. **만들기**&#x200B;를 선택합니다.
1. 데이터 소스 커넥터 목록에서 **GitHub**&#x200B;를 선택합니다.

   ![](assets/github-connector-tile.png){width="600"}

1. **다음**&#x200B;을 선택합니다.
1. 구성 및 연결 세부 정보를 입력합니다.

   ![](assets/conf-git-connector.png){width="600"}

   >[!TIP]
   >
   >* 마우스로 가리키기 자세한 내용을 보려면 필드 근처 <img src="./assets/info-details.svg" alt= "정보 아이콘" width="25">에서 확인하십시오.
   >* *가 있는 필드는 필수입니다. 예를 들어 Elasticsearch 커넥터에 대해 다음 세부 정보를 입력할 수 있습니다.

   * **이름**: 데이터 원본 이름을 입력하십시오.
   * **대상 AEM 루트 경로**: Git에서 가져온 콘텐츠를 저장할 AEM 저장소의 경로를 입력하십시오.
   * **파일 형식 필터(포함)**: 가져오는 동안 포함할 파일 형식을 지정합니다.
   * **제외된 경로(정규 표현식)**: 가져오기에서 제외할 경로 패턴을 지정합니다.
   * **인증 유형**: 드롭다운 목록에서 인증 유형을 선택합니다. 현재 **PAT(개인 액세스 토큰)**&#x200B;만 지원되는 인증 방법입니다. 커넥터를 설정하는 동안 PAT를 입력하여 Git 저장소를 인증하고 액세스합니다.
   * **저장소 URL**: 콘텐츠를 가져올 Git 저장소 URL을 입력하십시오.
   * **분기**: 콘텐츠 가져오기에 사용할 분기를 입력하십시오.

1. 연결을 테스트합니다. **연결 테스트** 단추는 필요한 세부 정보를 입력한 후에만 사용할 수 있습니다. 연결 세부 정보가 정확하면 성공 메시지가 나타납니다. 그렇지 않으면 오류 메시지가 나타납니다.

   ![](assets/git-connector-test-connection.png){width="600"}

1. 맨 위에 있는 **저장**&#x200B;을 선택하여 커넥터를 저장합니다.

   저장 버튼은 필요한 모든 세부 정보를 입력하고 연결이 성공한 후에만 활성화됩니다. 커넥터가 저장되면 **데이터 원본** 페이지에서 구성된 Github 커넥터를 볼 수 있습니다.

   ![](assets/git-connector-connected.png){width="600"}

