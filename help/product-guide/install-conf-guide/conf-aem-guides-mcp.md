---
title: Adobe Experience Manager Guides에서 MCP 사용
description: AEM Guides과 함께 MCP(Model Context Protocol)를 사용하여 AI 도우미를 통해 주제, 맵, 기준선 및 보고서로 작업하는 방법에 대해 알아봅니다
feature: Authoring
role: User
source-git-commit: 864884f26389d256b0e054e3c0b7400b89f6d6ce
workflow-type: tm+mt
source-wordcount: '814'
ht-degree: 0%
---

# Adobe Experience Manager Guides MCP 서버 사용

MCP(Model Context Protocol)는 AI 비서가 외부 도구와 데이터에 연결할 수 있는 표준 방법이며, 고객이 직접 해당 도구를 작동시키기 위해 컨텍스트를 전환하는 대신 사용됩니다.

Adobe Experience Manager Guides MCP 서버는 이 기능을 Experience Manager Guides에 제공합니다. 이를 통해 Anthropic Claude와 같은 MCP 지원 AI 어시스턴트가 Experience Manager Guides 환경에 연결하고 AEM 권한에 따라 귀하를 대신하여 활동할 수 있습니다. 연결되면 일반 자연어를 사용하여 Experience Manager Guides as a Cloud Service에 대한 지도, 주제, 기준선 및 보고서로 작업할 수 있습니다.

이 문서에서는 MCP가 Experience Manager Guides에 유용한 이유, MCP 서버가 다루는 내용, 작동하는 애플리케이션 및 사용 방법에 대해 설명합니다.

## Experience Manager Guides용 MCP가 유용한 이유

설명서 팀은 종종 큰 맵에서 주제 찾기, 문서 상태 확인, 끊어진 링크 추적, 릴리스의 기준선 만들기 또는 보고서 내보내기와 같이 반복적이고 탐색이 많은 작업에 상당한 시간을 보냅니다. Experience Manager Guides MCP 서버를 사용하면 Experience Manager Guides UI로 전환하지 않고도 AI 도우미에게 이를 직접 처리하도록 요청할 수 있습니다.

예:

- 맵을 열고 각 주제의 상태를 하나씩 확인하는 대신 도우미에게 주제와 해당 상태를 나열하도록 요청하십시오.
- 끊어진 링크 보고서를 수동으로 시작하고 Experience Manager Guides UI를 기다리는 대신 도우미에게 보고서 실행을 요청하고 보고서 실행 시기를 알려 주십시오.
- 기준선 화면으로 이동하지 말고 도우미에게 특정 맵에 대한 기준선을 만들도록 요청하십시오.

## Experience Manager Guides 제공 MCP 서버

Experience Manager Guides은 Experience Manager Guides 콘텐츠 및 관련 워크플로 작업을 위한 MCP 기능을 제공합니다. AEM 권한에 따라, MCP 서버는 다음 기능에 대한 액세스를 제공합니다.

* **주제 및 맵**: 콘텐츠 생성과 보기부터 업데이트, 버전 관리, 잠금 및 삭제에 이르기까지 콘텐츠 라이프사이클 전체에서 주제 및 맵을 사용하여 작업합니다.
* **기준선**: 기준선을 만들고, 나열하고, 내보내고, 복제하고, 다시 작성하고, 레이블을 지정하여 기준선을 사용합니다.
  >[!NOTE]
  >
  > Cloud Service 및 온-프레미스 환경 모두에서 기준선 기능은 [새 기준선](../user-guide/web-editor-baseline-v2.md)이 활성화되어 있을 때만 사용할 수 있습니다.
* **보고서**: 주제 목록 및 메타데이터에 액세스하고, 끊어진 링크를 식별하고, 멀티미디어 사용을 검토하여 콘텐츠에 대한 통찰력을 얻으십시오.
* **시스템**: 패키지 버전, 번들 상태 및 환경 진단을 확인하여 시스템의 상태를 파악합니다.

AEM에서 작업을 수행할 권한이 없는 경우 MCP를 통해 동일한 작업을 수행할 수 없습니다.

사용 가능한 정확한 도구는 시간이 지남에 따라 변경될 수 있습니다. 고정된 목록에 의존하는 대신 도우미에게 사용 가능한 목록을 보여 달라고 요청하십시오.

`List all Experience Manager Guides tools available and describe what they do.`


## 지원되는 애플리케이션

Experience Manager Guides MCP 서버는 호환 가능한 MCP 클라이언트와 연결할 수 있는 원격 MCP 서버입니다. 귀하의 환경을 기반으로, MCP 클라이언트를 연결하고 Experience Manager Guides MCP 서버를 인증합니다. 자세한 내용은 [Experience Manager Guides MCP 서버 설정](./configure-aem-guides-mcp.md)을 참조하세요.

## Experience Manager Guides MCP 서버 사용

연결되면 원하는 내용을 일반 언어로 설명하십시오. 이 도우미는 적절한 도구를 선택하고 맵 경로나 기준선 이름과 같은 해당 매개 변수를 채웁니다.

>[!IMPORTANT]
>
> 내보내기, 기준선 빌드 및 대량 업데이트와 같이 여러 단계와 관련이 있거나 완료하는 데 시간이 걸리는 요청은 생각하는 모델에서 가장 잘 작동합니다. 이러한 작업은 백그라운드에서 실행됩니다. 도우미는 작업을 시작한 다음 결과 또는 다운로드 링크가 준비될 때까지 상태를 확인합니다.

### 프롬프트 예

다음 프롬프트는 일반적인 요청을 나타내며, 각 요청은 다른 도구를 트리거합니다.

1. **맵에서 주제 상태 확인**

   > `/content/dam/docs/user-guide.ditamap`에 있는 맵의 모든 항목을 나열하고 제목 및 문서 상태를 표시합니다.

1. **기준선 만들기**

   > &quot;릴리스 3.2&quot;라는 `/content/dam/docs/user-guide.ditamap`의 정적 기준선을 만듭니다.

1. **보고서 실행**

   > 사용 안내서의 끊어진 링크 보고서를 실행하고 다운로드 링크가 준비되면 제공합니다.

## 예상 관리

- **결과 확인** - 도우미가 잘못된 맵 또는 주제를 선택하는 등의 실수를 할 수 있습니다. 보고서나 새 기준선을 사용하기 전에 검토하십시오.
- **시간이 지남에 따라 개선됩니다** - 도우미가 개선되면 오늘 몇 가지 프롬프트가 표시되는 작업이 나중에 한 가지 프롬프트가 표시될 수 있습니다.
- **계속 호출합니다** - 도우미가 주제의 상태를 알려주거나 끊어진 링크를 나열할 수 있지만 콘텐츠를 게시할 준비가 되었는지 여부는 검토자 또는 게시자가 결정할 수 있습니다.
- **자동 승인에 주의하세요** - Claude를 포함한 일부 MCP 클라이언트는 각 MCP를 확인하는 대신 작업을 자동 승인할 수 있도록 해줍니다. 보고서 실행과 같은 읽기 전용 작업에는 사용할 수 있습니다. 콘텐츠를 만들거나, 변경하거나, 잠그는 작업의 경우 내용을 확인하기 전에 검토할 수 있도록 각 내용을 확인합니다.

Experience Manager Guides MCP에 대한 질문이 있는 경우 Adobe 고객 성공 팀에 문의하십시오.


