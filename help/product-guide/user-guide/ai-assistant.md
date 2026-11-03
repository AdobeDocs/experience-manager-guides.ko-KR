---
title: AI Assistant를 사용하여 문서를 스마트하게 작성 `
description: AI Assistant를 사용하여 Adobe Experience Manager Guides에서 문서를 지능적으로 검색하고 작성하는 방법에 대해 알아봅니다.
exl-id: c18e8761-333e-40ef-9e16-e71a194a754a
TQID: https://experienceleague.adobe.com/pg9zeEg8m3NeDbN-j945SqPbaMX0GgBmuquAsQcrjOM
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
feature_v2:
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
    internal-label: Authoring
  - id: ec4263d9-bf7c-44c7-b3f1-3e664861c8f2
    internal-label: Generative AI
subfeature_v2:
  - id: ad602516-aca3-4247-9ae8-f393d958efa9
    internal-label: Editor
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
topic_v2:
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
  - id: f5c2a4bb-71ca-4d7e-8efd-442250e6ba48
    internal-label: Content reuse
source-git-commit: 082688d62ed871fa52947e5152df35575b622164
workflow-type: tm+mt
source-wordcount: '773'
ht-degree: 0%
---
# AI 어시스턴트

>[!NOTE]
>
> AI Assistant 기능은 현재 Adobe Experience Manager Guides as a Cloud Service에서 사용할 수 있습니다.

Adobe Experience Manager Guides의 AI Assistant는 콘텐츠 생성, 관리 및 작성 워크플로를 단순화하여 생산성을 향상시키도록 설계된 AI 기반 도구입니다. 아젠틱과 스탠다드, 이렇게 두 가지 모드를 제공합니다. **에이전트 모드**&#x200B;에서 AI Assistant를 사용하면 자연어 상호 작용을 통해 콘텐츠 관련 작업을 수행할 수 있으며 가져오기, 만들기, 스마트 태깅과 같은 기술을 사용하여 콘텐츠 생성, 구성 및 메타데이터 관리를 간소화할 수 있습니다. **표준 모드**&#x200B;에서 AI Assistant는 보다 효율적으로 콘텐츠를 만들고, 다듬고, 관리하는 데 도움이 되는 작성 지원을 제공합니다.

## AI Assistant 모드

>[!NOTE]
>
>사용자 환경에 대해 에이전트 모드에서 AI Assistant를 활성화하려면 고객 지원 팀에 문의하십시오.

AI Assistant는 **Agentic** 및 **Standard** 두 가지 모드로 사용할 수 있습니다. 관리자는 **Workspace 설정**&#x200B;의 **일반** 탭에 있는 **AI 기능** 섹션에서 모드를 선택할 수 있습니다. 편집기의 AI 도우미 패널은 두 모드에서 동일하게 유지되지만, 사용할 수 있는 기능은 다음과 같이 다릅니다.

- **에이전트 모드:** 스킬 **가져오기**, **만들기** 및 **스마트 태그 지정**&#x200B;을 사용하여 파일을 구조화된 주제로 변환하고, 콘텐츠의 첫 번째 초안을 만들고, 조직의 분류법에 따라 관련 태그를 추천합니다.
- **표준 모드:** 콘텐츠 재사용, 번역 및 콘텐츠 품질 개선과 같은 상황별 작업을 통해 AI 기반의 작성 지원을 제공하여 작성 워크플로를 간소화합니다.

## 무생식

>[!NOTE]
>
> 아젠틱 모드에서 AI Assistant를 사용하려면 조직이 Adobe CX Enterprise Coworker에 온보딩되어야 하며 사용 가능한 크레딧이 있어야 합니다. 온보딩되면 고객 성공 팀에 연락하여 기능을 활성화하십시오. 구성 세부 정보는 [에이전트 모드에서 AI Assistant 구성](../install-conf-guide/configure-ai-assistant-agentic-mode-cs.md)을 참조하십시오.

AI Assistant의 에이전트 모드를 사용하면 콘텐츠 생성 및 가져오기, 주제 요약, 맵에 주제 추가 및 메타데이터 관리와 같은 자연어 상호 작용을 통해 광범위한 콘텐츠 관련 작업을 수행할 수 있습니다. 채팅 패널에서 요구 사항을 설명할 수 있으며, AI Assistant는 진행 상황을 가시적으로 파악하면서 작업을 계획 및 실행합니다. 에이전트 모드에서는 다음 기술에 빠르게 액세스할 수 있습니다.

- **가져오기**: 장치 또는 콘텐츠 저장소의 PDF, Word 또는 Markdown 파일을 구조화된 항목으로 변환합니다. 자세한 내용은 [AI Assistant로 콘텐츠 가져오기](./import-ai-assistant.md)를 참조하십시오.

- **만들기**: 색조 및 스타일에 기존 콘텐츠를 사용하는 옵션과 함께 사양, 화이트보드 이미지, 스크린샷 및 기타 참조 콘텐츠와 같은 입력 자료에서 초안 주제 및 맵을 생성합니다. 자세한 내용은 [AI Assistant를 사용하여 콘텐츠 만들기](./create-ai-assistant.md)를 참조하십시오.

- **스마트 태그 지정**: 메타데이터 일관성을 향상시키기 위해 조직의 분류법에 따라 주제에 대한 관련 태그를 권장합니다. 자세한 내용은 [AI Assistant를 사용하여 스마트 태그 지정](./ai-assistant-agentic.md)을 참조하십시오.

AI Assistant 패널의 다음 구성 요소를 통해 컨텐츠를 추가하고, 프롬프트를 입력하고, 작업을 시작할 수 있습니다.

![ai 길잡이 스마트 태그 지정](./images/panel-new-agentic.png)

- **(A)** 대화 기록: 이전 대화 내용을 보고 다시 열어 이전 요청 및 응답을 검토합니다.
- **(B)** 전체 화면: AI Assistant 패널을 전체 화면으로 확장합니다.
- **(C)** 프롬프트 공간: 프롬프트 요청을 입력하거나 `/`을(를) 입력하여 파일을 추가하고 태그를 생성합니다.
- **(D)** 파일 첨부 또는 컨텍스트 추가: 로컬 시스템의 주제, 맵 또는 파일을 추가하여 AI Assistant가 작동하는 콘텐츠를 제공합니다.
- **(E)** 보내기: AI Assistant에 프롬프트 및 첨부된 콘텐츠를 제출합니다.
- **(F)** 빠른 작업: **가져오기**, **만들기** 또는 **태그** 바로 가기 중 하나에서 작업을 시작합니다.

## 표준 모드

표준 모드를 사용하면 작성 프로세스를 보다 스마트하고 빠르게 수행할 수 있습니다. 편집기에서 텍스트를 선택하면 AI 도우미가 선택한 콘텐츠를 기반으로 콘텐츠 재사용을 위한 지능형 제안 생성, 콘텐츠 번역, 콘텐츠 품질 개선 등과 같은 빠른 작업을 제공합니다. 이를 통해 전체적인 작성 경험과 작성자의 생산성이 향상됩니다.

자세한 내용은 [AI Assistant를 사용하여 문서 작성](./ai-assistant-right-panel.md)을 참조하십시오.

![ai 길잡이](./images/ai-assistant-panel.png)


## AI 어시스턴트 시작하기

**AI Assistant**&#x200B;를 처음 사용하는 경우 Experience Manager Guides Generative AI 기능을 사용하기 전에 동의를 제출하라는 메시지가 표시됩니다.

AI Assistant를 시작하려면 다음 단계를 수행하십시오.

1. Experience Manager Guides에 로그인.
1. 홈 페이지의 맨 위에서 **AI 길잡이**&#x200B;를 선택합니다. 관리자가 원하는 모드에서 AI Assistant 기능을 활성화했는지 확인합니다.

AI 도우미에는 주요 기능, 사용자 지침 링크 및 **시작** 단추가 표시됩니다.
사용자 지침을 주의 깊게 읽은 다음 **시작하기**&#x200B;를 선택하여 AI 도우미를 시작합니다.

>[!NOTE]
>
>도움말 도우미 기능 사용 지침에 이미 동의한 경우 다시 동의 메시지가 표시되지 않으며 AI 도우미 기능을 계속 사용할 수 있습니다.

**관련 항목**

[AI Assistant 보안 FAQ](./ai-assistant-faq.md)

[Adobe Experience Manager Guides Generative AI 공개](./adobe-generative-ai-disclosures.md)

[스마트 도움말 및 작성을 위한 AI Assistant 구성](../cs-install-guide/conf-smart-suggestions.md)
