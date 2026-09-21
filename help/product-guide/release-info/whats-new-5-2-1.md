---
title: 릴리스 정보 | Adobe Experience Manager Guides 5.2.0 서비스 팩 1 릴리스의 새로운 기능
description: Adobe Experience Manager Guides 5.2.0 서비스 팩 1 릴리스의 새로운 기능 및 향상된 기능에 대해 알아봅니다
role: Leader
TQID: https://experienceleague.adobe.com/dXXQ1YvVduT11vvF5qyXHLqnuo1xMKkAb5I-EoD2JAA
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
    internal-label: Publishing
subfeature_v2:
  - id: fd6cc9e1-e5e5-494e-b7b1-a32f2d6cd7c9
    internal-label: Output generation
role_v2:
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
source-git-commit: 788d0b9a2e2f07d2990bcc4f984f3ba4a4aabf17
workflow-type: tm+mt
source-wordcount: '390'
ht-degree: 0%
---
# 5.2.0 서비스 팩 1 릴리스의 새로운 기능(2026년 9월)

이 문서에서는 Adobe Experience Manager Guides 버전 5.2.0 서비스 팩 1에 도입된 새로운 기능 및 향상된 기능을 다룹니다.

이 릴리스에서 해결된 문제 목록을 보려면 [5.2.0 서비스 팩 1 릴리스에서 해결된 문제](fixed-issues-5-2-0-sp1.md)를 확인하십시오.

[5.2.0 서비스 팩 1 릴리스의 업그레이드 지침](../release-info/upgrade-instructions-5-2-0-sp1.md)에 대해 알아봅니다.


## Experience Manager Guides, MCP 지원 추가

Experience Manager Guides은 이제 MCP(Model Context Protocol)를 지원합니다. 사용자 정의 작업 없이 Claude, Cursor 등과 같은 AI 도구를 가이드에 연결할 수 있습니다. 이 버전에서 단일 MCP 엔드포인트를 통해 인증된 사용자는 기존 AEM 권한으로 작동하면서 Guides를 Headless 시스템으로 사용하고 주제 및 맵을 관리하고 기준선을 만들고 내보내며 보고서를 생성할 수 있습니다. 이를 통해 설명서 팀은 AI 애플리케이션 및 에이전트를 사용하여 보다 효율적으로 작업할 수 있습니다.

자세한 내용은 [Adobe Experience Manager Guides MCP 서버 사용](../install-conf-guide/conf-aem-guides-mcp.md)을 참조하세요.


## 이제 새 편집기에서 외부 데이터 소스 및 인용에 대한 지원을 사용할 수 있습니다

새 편집기는 이제 외부 데이터 소스와 연결하고 문서의 인용 부호를 사용하는 기능이라는 두 가지 기존 Experience Manager Guides 기능을 지원합니다.

작성자는 새 편집기에서 콘텐츠를 만들거나 업데이트하는 동안 구성된 외부 데이터 소스를 계속 사용할 수 있습니다. 또한 인용이 지원되므로 작성자는 편집기를 전환하지 않고도 콘텐츠에 참조를 추가하고 관리할 수 있습니다.

## AMA 인용 스타일 지원

Experience Manager Guides은 이제 미국 의료 협회(AMA) 인용 스타일을 지원하여 의료, 규제 및 생명 과학 분야에서 고객이 요구하는 문서 표준을 충족하도록 기존 인용 프레임워크를 확장합니다.

**Workspace 설정**&#x200B;에서 AMA를 인용 스타일로 선택하면 숫자 위 첨자 렌더링, 일련 번호 매기기 및 정확한 참조 목록 순서 지정 등 AMA 지침에 따라 인용 형식이 자동으로 지정됩니다. 편집기의 **구문 분석 인용** 옵션은 AMA를 선택한 경우에만 사용할 수 있으므로 작성자는 컨텍스트를 전환하지 않고 인용을 추가하고 구문 분석할 수 있습니다.

AMA 인용 스타일은 기본 PDF 및 AEM Sites 출력 형식 전반에서 지원됩니다. 인용 스타일을 구성하려면 **Workspace 설정**(으)로 이동하여 인용 스타일 옵션에서 AMA를 선택하십시오. 자세한 내용은 [피인용 작업](../user-guide/web-editor-apply-citations.md)을 참조하세요.


