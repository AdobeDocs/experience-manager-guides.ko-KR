---
title: AEM Guides On-Premise에 대한 MCP 연결 설정 구성
description: AEM Guides On-Premise에 대한 MCP 연결 설정을 구성하는 방법에 대해 알아봅니다.
meta-feature: Authoring
meta-product: Experience Manager, Experience Manager Guides
meta-role: Admin
meta-type: Documentation
source-git-commit: e234425f1e277990de25057971f3e2453c93360f
workflow-type: tm+mt
source-wordcount: '361'
ht-degree: 3%
---

# Experience Manager Guides에 대한 MCP 연결 설정 구성(온-프레미스)

클라우드, 커서, 코덱스 등 AI 도구가 MCP(Model Context Protocol)를 사용해 Experience Manager Guides에 연결할 수 있다. Adobe Experience Manager 웹 콘솔 구성 페이지에서 MCP 연결 및 인증 설정을 구성할 수 있습니다.

사용 가능한 구성은 토큰 처리, 레퍼러 정보가 없는 요청 및 AEM 작성자 인스턴스에 대한 외부 URL을 제어합니다.

## 로그인 토큰 처리 구성

로그인 토큰 처리를 구성하려면 다음 단계를 수행하십시오.

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```
   http://<server name>:<port>/system/console/configMgr
   ```

2. **AEM Guides OAuth PKCE 토큰 래퍼**&#x200B;를 검색하고 선택합니다.

3. 다음 속성을 구성합니다.

   | 속성 | 기본값 | 설명 |
   |---|---|---|
   | Granite 기본 URL | `http://localhost:4502` | 인증 중에 AEM이 작성자 인스턴스와 통신하는 데 사용하는 URL을 지정합니다. 작성자 인스턴스가 다른 포트를 사용하는 경우에만 기본 포트 4502를 변경합니다. |
   | Granite 시간 초과(ms) | `5000` | 인증 요청이 완료될 때까지 대기하는 최대 시간(밀리초)을 지정합니다. |

4. **저장**&#x200B;을 선택합니다.

## 레퍼러 정보 없이 요청 구성

>[!NOTE]
>
> Cursor를 사용하는 경우에만 이 설정을 구성해야 합니다.

Cursor를 포함한 일부 MCP 클라이언트는 레퍼러 정보 없이 요청을 전송할 수 있습니다. 이러한 요청을 허용하려면 다음과 같이 Apache Sling Referrer 필터를 구성합니다.

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```
   http://<server name>:<port>/system/console/configMgr
   ```

2. **Apache Sling 레퍼러 필터**&#x200B;를 검색하여 선택하십시오.

3. **Allow Empty** 속성에서 값을 `true`(으)로 설정합니다.

   이 설정을 사용하면 인증 중에 레퍼러 정보를 포함하지 않는 요청이 허용됩니다.

4. **저장**&#x200B;을 선택합니다.

## 작성자 인스턴스의 외부 URL 구성

**일 CQ 링크 외부화** 서비스를 사용하면 AEM 작성자 인스턴스의 URL을 포함하여 리소스 경로를 접두사로 사용하는 외부 URL을 중앙에서 정의할 수 있습니다.

외부 URL을 구성하려면 다음 단계를 수행하십시오.

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```
   http://<server name>:<port>/system/console/configMgr
   ```

2. **일 CQ 링크 외부화**&#x200B;를 검색하고 선택하십시오.

3. **도메인**&#x200B;에서 다음 형식을 사용하여 `author` 매핑을 추가하거나 업데이트하십시오.

   ```
   author [scheme://]server[:port][/contextpath]
   ```

   예:

   ```
   author https://author.mycompany.com
   ```

4. **저장**&#x200B;을 선택합니다.