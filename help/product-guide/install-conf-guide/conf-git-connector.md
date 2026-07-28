---
title: AEM Guides에서 Git 커넥터 구성
description: Experience Manager Guides에서 Git을 구성하는 방법을 알아봅니다.
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: eb30be6342a50ba52e8afd8b4a31148b3ad9c340
workflow-type: tm+mt
source-wordcount: '551'
ht-degree: 0%

---

# 사용자 인터페이스에서 Git 커넥터 만들기 및 구성

>[!NOTE]
>
> 이 기능은 기본적으로 비활성화되어 있습니다. 환경을 활성화하려면 고객 지원 팀에 문의하십시오.

Experience Manager Guides의 데이터 소스 도구를 사용하여 사용자 인터페이스에서 Git 커넥터를 만들고 구성합니다. 커넥터를 구성했으면 이 커넥터를 사용하여 Git 저장소의 콘텐츠를 Experience Manager Guides으로 가져올 수 있습니다.

>[!NOTE]
>
> 시작하기 전에 Git 커넥터가 Cloud Manager 프로젝트에 배포되어 있는지 확인합니다. 자세한 내용은 [Cloud Manager 프로젝트에 Git 커넥터 추가](#add-git-connector-to-your-cloud-manager-project)를 참조하십시오.


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

   - **이름**: 데이터 원본 이름을 입력하십시오.
   - **대상 AEM 루트 경로**: Git에서 가져온 콘텐츠를 저장할 AEM 저장소의 경로를 입력하십시오.
   - **파일 형식 필터(포함)**: 가져오는 동안 포함할 파일 형식을 지정합니다.
   - **제외된 경로(정규 표현식)**: 가져오기에서 제외할 경로 패턴을 지정합니다.
   - **인증 유형**: 드롭다운 목록에서 인증 유형을 선택합니다. 현재 **PAT(개인 액세스 토큰)**&#x200B;만 지원되는 인증 방법입니다. 커넥터를 설정하는 동안 PAT를 입력하여 Git 저장소를 인증하고 액세스합니다.

     [GitHub 개인 액세스 토큰을 생성](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic)하는 방법에 대해 알아봅니다.

     GitHub에서 PAT 생성 중 범위를 선택하는 동안 다음 범위를 활성화해야 합니다.
     - **저장소**: 최상위 확인란을 선택합니다. 모든 하위 범위가 자동으로 선택되어 저장소 콘텐츠, 커밋 상태 및 배포에 대한 액세스 권한이 부여됩니다.
     - **관리자:org**: **읽기:org**&#x200B;만 선택하십시오. 조직 및 팀 멤버십을 해결하는 데 필요합니다.
   * **저장소 URL**: 콘텐츠를 가져올 Git 저장소 URL을 입력하십시오.
   * **분기**: 콘텐츠 가져오기에 사용할 분기를 입력하십시오.

1. 연결을 테스트합니다. **연결 테스트** 단추는 필요한 세부 정보를 입력한 후에만 사용할 수 있습니다. 연결 세부 정보가 정확하면 성공 메시지가 나타납니다. 그렇지 않으면 오류 메시지가 나타납니다.

   ![](assets/git-connector-test-connection.png){width="600"}

1. 맨 위에 있는 **저장**&#x200B;을 선택하여 커넥터를 저장합니다.

   저장 버튼은 필요한 모든 세부 정보를 입력하고 연결이 성공한 후에만 활성화됩니다. 커넥터가 저장되면 **데이터 원본** 페이지에서 구성된 Github 커넥터를 볼 수 있습니다.

   ![](assets/git-connector-connected.png){width="600"}

## Cloud Manager 프로젝트에 Git 커넥터 추가

Git 커넥터를 **데이터 소스** 페이지에서 구성하려면 먼저 Git 커넥터를 AEM 프로젝트에 종속성으로 포함해야 합니다. 종속성을 추가하려면 다음 단계를 수행하십시오.

1. AEM 프로젝트의 `all/pom.xml`에서 Git 커넥터를 `<dependencies>` 아래에 종속성으로 추가합니다.

   ```xml
   <dependency>
       <groupId>com.adobe.aem.addon.guides</groupId>
       <artifactId>konnect-github</artifactId>
       <version>1.0.0</version>
   </dependency>
   ```

1. 같은 `pom.xml`에서 `filevault-package-maven-plugin` 구성의 `<embeddeds>` 섹션에 종속성을 추가하십시오.

   ```xml
   <embedded>
       <groupId>com.adobe.aem.addon.guides</groupId>
       <artifactId>konnect-github</artifactId>
       <type>jar</type>
       <target>/apps/YOUR-vendor-packages/content/install</target>
   </embedded>
   ```

   `YOUR-vendor-packages`을(를) 프로젝트의 공급업체 패키지 이름으로 바꾸십시오.

1. 변경 사항을 커밋하고 Cloud Manager Git 저장소에 푸시한 다음 파이프라인을 실행하여 배포합니다.

파이프라인이 완료되면 Git 커넥터가 환경에 설치되고 **데이터 소스** 페이지에서 를 구성할 수 있습니다.





