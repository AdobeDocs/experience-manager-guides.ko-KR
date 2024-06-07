---
title: 콘텐츠를 검색하도록 안내서 도우미 구성
description: 콘텐츠를 검색하도록 안내서 도우미를 구성하는 방법에 대해 알아봅니다
source-git-commit: 8ac0ed6b867a3efdef750cb19ed4955a67def9ee
workflow-type: tm+mt
source-wordcount: '603'
ht-degree: 0%

---


# 콘텐츠를 검색하도록 AI 기반 안내선 지원 구성

관리자는 작성자를 위해 안내서 지원 기능을 구성할 수 있습니다. Guides Assistant 서비스는 Adobe IMS 인증 기반 인증을 통해 보호됩니다. Adobe의 보안 토큰 기반 인증 워크플로와 환경을 통합하고 새로운 안내서 지원 기능을 사용하십시오. 다음 구성은 다음을 추가하는 데 도움이 됩니다. **AI 구성** 폴더 프로필로 이동합니다. 추가한 후에는 웹 편집기에서 안내서 길잡이 기능을 사용할 수 있습니다.

## Adobe Developer 콘솔에서 IMS 구성 만들기

Adobe Developer 콘솔에서 IMS 구성을 만들려면 다음 단계를 수행하십시오.

>[!NOTE]
>
>스마트 제안 기능 또는 마이크로서비스 기반 게시를 구성하기 위해 OAuth 프로젝트를 이미 만든 경우 다음 단계를 건너뛰고 프로젝트를 만들 수 있습니다.

1. 시작 [Adobe Developer 콘솔](https://developer.adobe.com/console).
1. Developer Console에 로그인하면 **홈** 화면. 다음 **홈** 화면은 프로젝트 및 다운로드에 대한 위쪽 탐색 링크를 포함하여 정보와 빠른 링크를 쉽게 찾을 수 있는 곳입니다.
1. 새 빈 프로젝트를 만들려면 **새 프로젝트 만들기** 다음에서 **빠른 시작** 링크.
   ![빠른 시작 링크](assets/conf-ss-quick-start.png) {width="550" align="left"}
   *새 프로젝트를 만듭니다.*

1. 선택 **API 추가** 다음에서 **프로젝트** 화면.  다음 **API 추가** 화면이 나타납니다. 이 화면에는 응용 프로그램을 개발할 수 있는 Adobe 제품 및 기술에 사용 가능한 모든 API, 이벤트 및 서비스가 표시됩니다.

1. 다음 항목 선택 **I/O 관리 API** 프로젝트에 추가합니다.
   ![IO 관리 API](assets/confi-ss-io-management.png)
   *프로젝트에 I/O 관리 API를 추가합니다.*

1. 새로 만들기 **OAuth 자격 증명** 구해
   ![구성 API의 OAuth 자격 증명 타일](assets/conf-ss-OAuth-credential.png) {width="3000" align="left"}
   *API에 대한 OAuth 자격 증명을 구성합니다.*

1. 다음에서  **프로젝트** 탭에서 다음을 선택합니다. **OAuth 서버-서버** 옵션을 선택한 다음 새로 만든 자격 증명을 선택합니다.

1. 다음 항목 선택 **OAuth 서버 간** 프로젝트의 자격 증명 세부 정보를 보기 위한 링크입니다.

   ![연결된 자격 증명](assets/conf-ss-connected-credentials.png) {width="800" align="left"}

   *자격 증명 세부 정보를 보려면 프로젝트에 연결하십시오.*

1. (으)로 돌아가기 **프로젝트** 탭하고 선택 **프로젝트 개요** 왼쪽이요

   <img src="assets/project-overview.png" alt="프로젝트 개요" width="500">

   *새 프로젝트를 시작합니다.*

1. 다음을 클릭합니다. **다운로드** 서비스 JSON을 다운로드하려면 맨 위에 있는 버튼을 클릭합니다.

   <img src="assets/download-json.png" alt="json 다운로드" width="500">

   *JSON 서비스 세부 정보를 다운로드합니다.*

OAuth 인증 세부 사항을 구성하고 JSON 서비스 세부 사항을 다운로드했습니다. 다음 섹션에서 이 파일을 필요로 하므로 이 파일을 가까이에 두십시오.

### 환경에 IMS 구성 추가

다음 단계를 수행하여 환경에 IMS 구성을 추가합니다.

1. Experience Manager을 열고 구성할 환경이 포함된 프로그램을 선택합니다.
1. 다음으로 전환 **환경** 탭.
1. 구성할 환경 이름을 선택합니다. 다음으로 이동해야 합니다. **환경 정보** 페이지를 가리키도록 업데이트하는 중입니다.
1. 다음으로 전환 **구성** 탭.
1. SERVICE_ACCOUNT_DETAILS JSON 필드를 업데이트합니다. 다음 스크린샷과 동일한 이름과 구성을 사용하고 있는지 확인합니다.

![ims 서비스 계정 구성](assets/ims-service-account-config.png){width="800" align="left"}


*환경 구성 세부 정보를 추가합니다.*




환경에 IMS 구성을 추가한 후 다음 단계를 수행하여 OSGi를 사용하여 이러한 속성을 AEM Guides와 연결합니다.

1. Cloud Manager Git 프로젝트 코드에서 아래에 주어진 두 개의 파일을 추가합니다(파일 콘텐츠의 경우 보기) [부록](#appendix)).

   * `com.adobe.aem.guides.eventing.ImsConfiguratorService.cfg.json`

1. 새로 추가된 파일에 다음이 적용되는지 확인합니다. `filter.xml`.
1. Git 변경 사항을 커밋하고 푸시합니다.
1. 파이프라인을 실행하여 환경에 변경 사항을 적용합니다.

이 작업을 마치면 다음을 사용할 수 있습니다. **안내 도우미** 기능.



## 부록 {#appendix}

**파일**:
`com.adobe.aem.guides.eventing.ImsConfiguratorService.cfg.json`

**콘텐츠**:

```
{
 "service.account.details": "$[secret:SERVICE_ACCOUNT_DETAILS]",
}
```


구성을 완료하면 **안내 도우미** ![안내 도우미](assets/guides-assistant-icon.svg) 아이콘은 웹 편집기의 오른쪽 패널에 표시됩니다. 아이콘을 선택하여 **안내 도우미** 패널.
자세한 내용은 [콘텐츠 검색을 위한 AI 기반 안내서 지원](../user-guide/ai-based-guides-assistant.md) Experience Manager 섹션에 자세히 설명되어 있습니다.
