---
title: Adobe Experience Manager Guides용 MCP 설정
description: Cloud Service 및 온프레미스 배포용 Experience Manager Guides MCP 서버에 AI 도우미를 연결하는 방법에 대해 알아봅니다
meta-feature: Authoring
meta-product: Experience Manager, Experience Manager Guides
meta-role: User
meta-type: Documentation
source-git-commit: e234425f1e277990de25057971f3e2453c93360f
workflow-type: tm+mt
source-wordcount: '1539'
ht-degree: 1%
---

# Experience Manager Guides MCP 서버 설정

이 문서에서는 Experience Manager Guides MCP 서버 연결을 위한 환경별 세부 사항을 다룹니다. 설정은 Experience Manager Guides 인스턴스가 as a Cloud Service을 실행하는지 또는 온프레미스를 실행하는지에 따라 다릅니다. 사용자 환경과 일치하는 탭을 선택합니다.

>[!BEGINTABS]

>[!TAB Cloud Service]

## MCP 서버 엔드포인트

Experience Manager Guides은 단일 HTTP 끝점을 통해 MCP 기능을 노출합니다.

| MCP 서버 | 엔드포인트 | 설명 |
|---|---|---|
| **Experience Manager Guides** | `https://mcp.adobeaemcloud.com/adobe/mcp/guides` | Experience Manager Guides에서 주제 및 맵, [새 기준선](../user-guide/web-editor-baseline-v2.md), 보고서 작업을 수행합니다. |

환경에 대한 현재 도구 목록을 검색하려면 도우미에게 문의하십시오.

```
List all Experience Manager Guides tools available from the author https://author-pXXXX-eXXXX.adobeaemcloud.com and describe what they do.
```

## 조직에 대한 액세스 권한 요청

Experience Manager Guides MCP 서버에 대한 액세스는 **조직당 옵트인**&#x200B;입니다. 조직의 모든 사용자가 연결하기 전에:

- Experience Manager Guides은 AEM as a Cloud Service 환경에서 활성화되어야 합니다.
- Adobe Guides 팀에서 조직의 IMS 조직 ID(Org ID)를 허용 목록에 추가해야 합니다.

액세스 권한을 요청하려면 Adobe 고객 성공 팀에 문의하십시오.

## 설정

로컬에 아무 것도 설치하지 않습니다. 클라이언트를 서버 URL로 지정하고 Adobe IMS 로그인 흐름을 통해 인증합니다.

### 인류 클로드

공식 설명을 따르십시오. [AEM MCP용 클라우드 설정](https://experienceleague.adobe.com/ko/docs/experience-manager-cloud-service/content/ai-in-aem/mcp-support/chat-applications/setup-claude). 사용자 지정 커넥터를 추가할 때 Experience Manager Guides 엔드포인트를 사용합니다.

```
https://mcp.adobeaemcloud.com/adobe/mcp/guides
```

### 커서/Visual Studio 코드

MCP 구성에 서버를 추가합니다. Cursor의 경우 `.cursor/mcp.json`에 추가하십시오.

```json
{
  "mcpServers": {
    "aem-guides": {
      "url": "https://mcp.adobeaemcloud.com/adobe/mcp/guides"
    }
  }
}
```

로컬(stdio) 서버만 지원하는 클라이언트의 경우 [`mcp-remote`](https://www.npmjs.com/package/mcp-remote)을(를) 사용하여 원격 끝점에 브리지하십시오.

```json
{
  "mcpServers": {
    "aem-guides": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://mcp.adobeaemcloud.com/adobe/mcp/guides"]
    }
  }
}
```

>[!TAB 온-프레미스]

MCP(모델 컨텍스트 프로토콜)를 사용하여 지원되는 AI 클라이언트를 Experience Manager Guides 온프레미스 인스턴스에 연결할 수 있습니다. 연결을 설정하면 클라이언트는 AEM 사용자 계정에서 사용할 수 있는 Experience Manager Guides 작업에 액세스할 수 있습니다.

모든 작업은 **AEM ID 및 권한**&#x200B;을 사용하여 수행됩니다. 연결된 클라이언트는 AEM 계정이 액세스할 수 있는 권한이 있는 컨텐츠 및 리소스만 보거나 수정할 수 있습니다.

인증은 PKCE(Proof Key for Code Exchange)와 함께 OAuth 2.0 인증 코드 흐름을 사용합니다. 클라이언트를 처음 연결할 때 AEM을 사용하여 인증합니다. 인증이 성공하면 연결은 액세스 토큰을 자동으로 새로 고침합니다.

다음 클라이언트를 연결할 수 있습니다.

| 클라이언트 | 연결 방법 | AEM 인스턴스 요구 사항 |
| ------------------ | ----------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **클라우드 데스크톱** | 데스크톱 확장(`.mcpb`) | 회사 네트워크에서 액세스할 수 있는 내부 호스트를 포함하여 HTTP 및 HTTPS 끝점을 지원합니다. |
| **ChatGPT(웹 및 데스크톱)** | 사용자 지정 커넥터 | 유효하고 신뢰할 수 있는 TLS 인증서가 있는 공개적으로 액세스할 수 있는 HTTPS 끝점이 필요합니다. |
| **커서** | `~/.cursor/mcp.json`의 MCP 구성 | 회사 네트워크에서 액세스할 수 있는 내부 호스트를 포함하여 HTTP 및 HTTPS 끝점을 지원합니다. |

## 사전 요구 사항

클라이언트를 연결하기 전에 AEM 관리자와 함께 다음 구성을 확인하십시오.

1. **MCP 기능이 배포되었는지 확인합니다.**: MCP 기능이 배포되어 Experience Manager Guides 인스턴스에서 실행되고 있는지 확인합니다.

2. **Granite 기본 URL을 구성합니다.**: AEM 웹 콘솔 구성 관리자(`/system/console/configMgr`)에서 **Experience Manager Guides OAuth PKCE 토큰 래퍼** 구성을 찾아 Granite 기본 URL이 구성되어 있는지 확인하십시오. Granite 기본 URL이 올바르게 구성되지 않은 경우 클라이언트가 연결을 설정할 수 없습니다.

3. **일 CQ 링크 외부화를 구성합니다.**: AEM 웹 콘솔 구성 관리자에서 **일 CQ 링크 외부화** 구성을 찾아 외부 작성자 URL이 올바른 AEM 작성자 인스턴스를 가리키는지 확인하십시오. 외부 작성자 URL은 OAuth 검색 중에 사용됩니다. 잘못된 URL로 인해 클라이언트가 연결을 완료할 수 없습니다.

   자세한 내용은 [AEM Guides 온-프레미스용 MCP 연결 설정 구성](./configure-aem-guides-mcp-on-prem.md)을 참조하세요.

4. **MCP 서버 URL을 가져옵니다.**: MCP 서버 URL은 다음 형식을 사용합니다.

   ```
   http(s)://<AEM-HOST>/bin/guides/v1/mcp/sse
   ```

   >[!NOTE]
   >
   > 클라이언트를 구성할 때 전체 SSE 끝점을 사용합니다. URL에 슬래시를 추가하지 마십시오.

   예:

   **내부 AEM 작성자 인스턴스:**

   ```
   http://10.42.42.20:4502/bin/guides/v1/mcp/sse
   ```

   **공개 AEM 작성자 인스턴스:**

   ```
   https://author.example.com/bin/guides/v1/mcp/sse
   ```



5. **AEM 자격 증명 및 사용 권한을 확인하십시오.**: AEM 인스턴스에 대한 올바른 계정이 있어야 합니다. AEM 사용자 인터페이스에 로그인하는 데 사용하는 것과 동일한 자격 증명을 사용합니다. MCP를 통해 사용할 수 있는 작업은 이 계정에 할당된 권한에 의해 결정됩니다.

## 클라우드 데스크톱 연결

클라우드 데스크톱은 데스크톱 확장(`.mcpb`)을 지원합니다. Experience Manager Guides MCP 확장은 MCP JSON 구성을 수동으로 편집할 필요가 없도록 연결 구성을 패키징합니다.

1. [AEM Guides .mcpb zip 파일](./mcpbfile.zip)을 추출하고 `aem-guides-mcp.mcpb` 확장 파일을 가져옵니다.

2. **데스크톱 관리**&#x200B;를 열고 **설정 > 확장**(으)로 이동합니다.

3. 파일을 두 번 클릭하거나 확장 창으로 끌어 `aem-guides-mcp.mcpb`을(를) 설치합니다.

   설치 대화 상자에 **Adobe Experience Manager Guides MCP**&#x200B;이(가) 표시됩니다.

4. **설치**&#x200B;를 선택합니다.

5. **Experience Manager Guides MCP 서버 URL** 필드에 AEM 인스턴스의 전체 SSE 끝점을 입력합니다.

   예:

   ```
   http://<AEM-HOST>:4502/bin/guides/v1/mcp/sse
   ```

6. **저장**&#x200B;을 선택하고 확장이 활성화되어 있는지 확인하십시오.

## ChatGPT 연결

Experience Manager Guides MCP 서버를 ChatGPT에서 사용자 지정 커넥터로 구성할 수 있습니다.

>[!IMPORTANT]
>
> ChatGPT를 사용하려면 MCP 서버를 **공개적으로 액세스할 수 있는 HTTPS 끝점과 신뢰할 수 있는 올바른 TLS 인증서를 통해 사용**&#x200B;해야 합니다.
>
> HTTP 끝점, `localhost`, 개인 IP 주소 및 자체 서명된 인증서는 지원되지 않습니다. AEM 인스턴스는 로드 밸런서, 역방향 프록시 또는 TLS로 구성된 Dispatcher과 같은 HTTPS 호스트를 통해 노출되어야 합니다.
>
> **일 CQ 링크 외부화**&#x200B;에 구성된 외부 작성자 URL도 공개 HTTPS 주소를 가리켜야 합니다. 그렇지 않으면 OAuth 검색 메타데이터가 잘못된 인증 끝점을 알리고 로그인을 방지할 수 있습니다.

1. MCP 서버가 공개 HTTPS URL에서 다음 형식으로 사용할 수 있는지 확인합니다.

   ```
   https://<PUBLIC-AEM-HOST>/bin/guides/v1/mcp/sse
   ```

   브라우저에서 끝점을 열고 인증서 경고 또는 연결 오류 없이 호스트에 연결할 수 있는지 확인합니다.

2. ChatGPT에서 **설정 > 플러그인**&#x200B;을 엽니다.

   >[!NOTE]
   >
   > 커넥터 사용 가능 여부는 ChatGPT 계획 및 작업 영역 구성에 따라 다릅니다. 작업 공간 관리자가 사용자 지정 또는 개발자 커넥터를 활성화해야 할 수 있습니다.

3. 플러그인을 추가하거나 만들려면 옵션을 선택합니다.

4. 커넥터 세부 사항을 지정합니다.

   * **이름:** `Experience Manager Guides` 또는 다른 수사적 이름을 입력하십시오.
   * **MCP 서버 URL:** 공개 HTTPS SSE 끝점을 입력하십시오.
   * **인증:** **OAuth**&#x200B;을(를) 선택하십시오.

   OAuth 클라이언트 ID 또는 클라이언트 암호를 제공할 필요가 없습니다. MCP 서버는 자동 클라이언트 등록을 지원합니다.

5. 커넥터를 만듭니다.

## 연결 커서

MCP 구성에 서버 세부 사항을 추가하여 커서에서 Experience Manager Guides MCP 서버를 구성합니다.

1. 커서에서 **사용자 지정 > MCP > 새로 만들기**&#x200B;로 이동합니다.

   커서가 `~/.cursor/mcp.json` 구성 파일을 엽니다.

2. Experience Manager Guides MCP 서버 구성을 추가합니다.

   예:

   ```json
   {
     "mcpServers": {
       "aem-guides": {
         "url": "http://10.42.34.176:4502/bin/guides/v1/mcp/sse",
         "type": "http"
       }
     }
   }
   ```

3. 예제 URL을 AEM 인스턴스의 MCP SSE 끝점으로 바꿉니다.

4. 구성을 저장합니다.

5. 구성된 MCP 서버를 사용하도록 설정합니다.

>[!ENDTABS]

## Experience Manager Guides 인증 및 사용

클라이언트에서 MCP 연결을 구성한 후 AEM 계정을 인증합니다.

1. 클라이언트에서 인증 프로세스를 시작합니다.

   * **클라우드 데스크톱:** 인증 흐름은 클라우드 컴퓨터에서 Experience Manager Guides 연결을 처음 사용하려고 할 때 시작됩니다.
   * **ChatGPT:** Experience Manager Guides 커넥터를 만들고 연결한 후에 인증이 시작됩니다.
   * **커서:** 구성된 MCP 서버를 사용하도록 설정하고 **인증**&#x200B;을 선택합니다.

2. 브라우저에서 AEM 로그인 페이지가 열리면 AEM 자격 증명을 사용하여 로그인합니다.

3. 메시지가 표시되면 액세스 요청을 승인합니다.

4. 인증이 완료되면 클라이언트로 돌아갑니다.

이제 계정에서 사용할 수 있는 Experience Manager Guides 작업을 사용할 수 있습니다. 예를 들어 다음과 같은 프롬프트를 시도할 수 있습니다.

```
List the available Experience Manager Guides operations.
```

```
Get the topic list for my map in Experience Manager Guides.
```

```
Show me the broken-link report for my map.
```

>[!NOTE]
>
> MCP를 통해 사용할 수 있는 작업 및 콘텐츠는 인증에 사용되는 AEM 계정의 권한에 의해 결정됩니다. MCP 연결은 추가 AEM 권한을 제공하지 않습니다.

인증이 성공하면 클라이언트는 자동으로 인증 토큰을 새로 고침합니다. 일반적으로 세션이 만료되거나 액세스가 해지되지 않는 한 다시 로그인할 필요가 없습니다.

## 연결 문제 해결

다음 정보를 사용하여 일반적인 연결 및 인증 문제를 해결하십시오.

| 클라이언트 | 문제 | 가능한 원인 및 해결 방법 |
| -------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 클라우드 데스크탑 | 확장을 설치할 수 없거나 확장을 사용할 수 없습니다. | 사용 중인 Cloud Desktop 버전은 확장을 지원하지 않을 수 있습니다. 클라우드 데스크탑을 업데이트하고 다시 시도하십시오. |
| 클라우드 데스크탑 | 인증을 위해 브라우저가 열리지 않거나 연결이 완료되지 않습니다. | MCP 서버 URL을 확인합니다. `/bin/guides/v1/mcp/sse`(으)로 끝나야 하며 뒤에 슬래시가 있으면 안 됩니다. 또한 컴퓨터에서 AEM 인스턴스에 액세스할 수 있는지 확인합니다. |
| ChatGPT | ChatGPT가 MCP 서버에 연결할 수 없거나 커넥터를 추가할 수 없습니다. | HTTPS를 통해 엔드포인트에 공개적으로 액세스할 수 있는지 확인합니다. HTTP 끝점, `localhost`, 개인 IP 주소 및 개인 네트워크 끝점은 지원되지 않습니다. |
| ChatGPT | 인증서 또는 보안 오류가 표시됩니다. | 서버가 공개적으로 신뢰할 수 있는 인증 기관에서 발급한 유효하고 만료되지 않은 인증서를 사용하는지 확인하십시오. 자체 서명된 인증서는 지원되지 않습니다. |
| ChatGPT | 인증이 잘못된 호스트로 리디렉션되거나 검색 중에 실패합니다. | **일 CQ 링크 외부화**&#x200B;의 외부 작성자 URL이 공개 HTTPS AEM 작성자 주소를 가리키는지 확인하십시오. |
| 모든 클라이언트 | 인증하는 동안 등록에 실패합니다. | AEM 관리자와 함께 서버측 OAuth 등록 구성을 확인하십시오. |
| 모든 클라이언트 | 인증이 실패하거나 완료되지 않습니다. | Granite 기본 URL, Day CQ Link Externalizer 구성, MCP 서버 URL 및 AEM 인스턴스에 대한 연결을 확인합니다. |
| 모든 클라이언트 | 연결은 성공하지만 Experience Manager Guides 작업 또는 결과를 사용할 수 없습니다. | 인증된 AEM 계정에 필요한 Experience Manager Guides 권한이 있는지, 그리고 요청한 작업을 계정에서 사용할 수 있는지 확인합니다. |
| 모든 클라이언트 | 클라이언트가 이전에 연결이 작동한 후 인증을 요청합니다. | 인증 세션이 만료되었거나 액세스 권한이 취소되었을 수 있습니다. AEM으로 다시 인증합니다. |



