---
title: 도구를 사용하여 데이터 소스 커넥터 구성
description: 도구를 사용하여 데이터 소스 커넥터를 구성하는 방법을 알아봅니다.
exl-id: 2a0ac0a0-b2a9-453e-851b-fb04c8903526
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '521'
ht-degree: 0%

---

# 사용자 인터페이스에서 데이터 소스 커넥터 구성

Experience Manager 안내서에는 **데이터 소스** 데이터 소스에 대한 기본 제공 커넥터를 구성하는 데 도움이 되는 도구입니다. JIRA, SQL(MySQL, PostgreSQL, Microsoft SQL Server, SQLite, MariaDB, H2DB), AdobeCommerce 및 Elasticsearch 데이터베이스에 대한 커넥터를 설정할 수 있습니다.

커넥터를 구성하려면 다음 단계를 수행하십시오.

1. 다음 항목 선택 **Adobe Experience Manager** 맨 위에 있는 링크를 클릭하고 [도구]를 선택합니다.
1. 선택 **안내서** 을 클릭합니다.
1. 다음 항목 선택 **데이터 소스** 타일. 다음 **데이터 소스** 페이지가 표시됩니다. 연결된 데이터 소스를 볼 수 있습니다.

   다음 항목 간에 전환할 수 있습니다. **목록 보기** 또는 **타일 보기** 연결된 다양한 데이터 소스를 목록 또는 타일로 봅니다.

   <img src="./assets/data-sources-create-window.png" alt= "데이터 소스 페이지에 나열된 데이터 소스" width="800">

   *데이터 소스 커넥터 보기 또는 만들기*
1. **만들기**&#x200B;를 클릭합니다.
1. 커넥터를 생성할 데이터베이스를 선택합니다. 예를 들어 Elasticsearch 커넥터입니다.
   >[!NOTE]
   >
   >기본적으로 사용할 수 있는 모든 데이터베이스가 나열됩니다.

1. **다음**&#x200B;을 클릭합니다.
1. 데이터베이스에 따라 구성 및 연결 세부 정보를 입력합니다.

   >[!TIP]
   >* 마우스로 가리키기 <img src="./assets/info-details.svg" alt= "정보 아이콘" width="25"> 필드 근처에서 세부 정보를 볼 수 있습니다.
   > * *가 있는 필드는 필수입니다. 예를 들어 Elasticsearch 커넥터에 대해 다음 세부 정보를 입력할 수 있습니다.

   * **이름**: 데이터 소스의 이름을 입력합니다.
   * 인증 유형: 드롭다운에서 인증 유형을 선택합니다. 예: 기본 사용자 이름-암호 인증
   * **사용자 이름**: 사용자 이름을 입력합니다.
   * **암호**: 사용자 이름과 암호를 입력합니다.
   * **URL**: API URL을 추가합니다.

1. 선택 **연결 테스트**. 다음을 볼 수 있습니다. **연결 테스트** 필요한 세부 정보를 추가한 후에만 버튼이 활성화되었습니다. 연결 세부 사항이 올바른 경우 성공 메시지를 표시합니다. 그렇지 않으면 오류 메시지가 표시될 수 있습니다.



1. 선택 **저장** 커넥터를 저장하려면 맨 위에 있어야 합니다.     보기 **저장** 모든 세부 정보를 입력한 후 연결이 성공하면 버튼이 활성화됩니다.


   커넥터가 성공적으로 저장되면 페이지에서 연결된 데이터 소스를 볼 수 있습니다.

## 커넥터에 사용할 수 있는 기능

* 다음 간 전환 **목록 보기** 또는 **타일 보기**  연결된 다양한 데이터 소스를 목록 또는 타일로 봅니다.
* 단일 커넥터에 대한 확인란을 선택합니다. 클릭 **모두 선택** 모든 커넥터를 선택합니다. 다음을 클릭할 수 있습니다. **모두 선택 해제** 모든 커넥터를 선택한 경우.

<img src="./assets/data-sources-features.png" alt= "데이터 소스 페이지의 데이터 소스 기능" width="800">

*데이터 소스 커넥터를 편집, 재연결, 복제 또는 삭제합니다.*

의 커넥터에 대해 다음 기능을 사용할 수 있습니다. **데이터 소스** 페이지:

* **편집**: 선택한 커넥터에 대한 구성 세부 정보를 편집합니다.

* **다시 연결**: 연결이 끊어진 커넥터에 다시 연결합니다.

* **복제**: 현재 커넥터를 기준으로 새 중복 커넥터를 만듭니다. 중복 커넥터는 기본적으로 접미사(예: connectorname_1)로 생성됩니다. 예: sample-elastic-search_1.
동일한 이름의 커넥터가 있는 경우 오류가 표시됩니다.

* **삭제**: 선택한 커넥터를 삭제합니다.


데이터 소스를 구성했으면 아래에 커넥터가 나열됩니다 **데이터 소스 패널** 웹 편집기에서 사용할 수 있습니다. 그런 다음 데이터 소스에 연결하고 주제에 콘텐츠 스니펫을 삽입할 수 있습니다. 자세한 내용은 [데이터 소스에서 콘텐츠 조각 삽입](../user-guide/web-editor-content-snippet.md).
