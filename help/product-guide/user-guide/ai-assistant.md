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
source-git-commit: 71ddd55d2a6848449d5810701b60e9f69a29112b
workflow-type: tm+mt
source-wordcount: '615'
ht-degree: 0%
---
# AI Assistant(Beta)

Adobe Experience Manager Guides의 **AI Assistant**&#x200B;은(는) 스마트 도움말, 작성 및 태그 지정 기능을 통해 생산성을 향상시키도록 설계된 강력한 AI 기반 도구입니다. **표준** 모드에서는 두 가지 강력한 AI 기능인 **작성** 및 **도움말**&#x200B;을 Experience Manager Guides 인터페이스에 통합하므로 콘텐츠를 작성하고 Experience Manager Guides 설명서에서 정보에 보다 빠르고 효율적으로 액세스할 수 있습니다. 대신 **Agentic** 모드에서 AI Assistant는 **스마트 태그 지정**&#x200B;을 제공합니다. 대화 프롬프트 창을 통해 콘텐츠에 대한 태그 권장 사항을 요청하고 하나 이상의 주제에 적용할 수 있습니다.

>[!NOTE]
>
> AI Assistant 기능은 현재 Adobe Experience Manager Guides as a Cloud Service에서 사용할 수 있습니다.

## AI Assistant 모드

>[!NOTE]
>
>사용자 환경에 대해 에이전트 모드에서 AI Assistant를 활성화하려면 고객 지원 팀에 문의하십시오.

AI Assistant는 **Agentic** 및 **Standard** 두 가지 모드로 사용할 수 있습니다. 관리자는 **Workspace 설정**&#x200B;의 **일반** 탭에 있는 **AI Assistant** 섹션에서 두 모드 중 하나를 선택할 수 있습니다. AI 지원 패널은 편집기의 두 모드에서 동일하게 유지되지만, 그 내에서 사용할 수 있는 기능은 서로 다릅니다.

* **에이전트** 모드에서는 Adobe CX Enterprise Coworker의 **스마트 태그 지정** 스킬을 사용하여 콘텐츠를 분석하고 조직의 분류법에 따라 관련 태그를 추천합니다.
* **표준** 모드는 AI Assistant 패널의 **도움말** 및 **작성** 탭을 사용하여 기존 AI Assistant 환경을 제공합니다.

## 무생식

### 스마트 태그 지정

에이전트 모드의 AI 어시스턴트는 대화 프롬프트 창을 통해 콘텐츠를 더 빠르고 쉽게 태깅할 수 있습니다. AI Assistant는 Adobe CX Enterprise Coworker의 아젠틱 스마트 태그 지정 기술을 사용하여 사용자가 요청할 때 컨텐츠에 관련 태그를 권장합니다. 제안된 태그를 검토하고 맵 내의 여러 주제를 포함하여 하나 이상의 주제에 적용하도록 선택하여 계속 제어할 수 있습니다.

자세한 내용은 [Agentic AI Assistant 시작](./ai-assistant-agentic.md)을 참조하십시오.

![ai 길잡이 스마트 태그 지정](./images/suggested-prompts.png)

## 표준 모드

### 작성

AI Assistant가 **표준** 모드로 구성된 경우 AI Assistant의 **작성** 기능을 통해 작성 프로세스를 보다 스마트하고 빠르게 수행할 수 있습니다. 선택한 콘텐츠를 기반으로 콘텐츠 재사용을 위한 지능형 제안 생성, 콘텐츠 번역, 콘텐츠 품질 개선 등의 기능을 제공합니다. 이 기능은 전반적인 작성 환경과 작성자의 생산성을 향상시킵니다.

자세한 내용은 [작성](./ai-assistant-right-panel.md)을 참조하세요.

![ai 길잡이](./images/ai-assistant-panel.png)

### 도움말

AI Assistant가 **표준** 모드로 구성된 경우 **도움말** 기능은 Experience Manager Guides을 이해하고, 문제를 해결하며, Adobe Experience Manager Guides 설명서에서 정보를 찾는 데 도움이 되는 직관적인 채팅 기반 환경을 제공합니다. 사용 안내서와 참조 문서를 검색하는 대신 **도움말** 기능을 사용하여 쿼리에 대한 적절한 답변을 빠르게 찾을 수 있습니다. 따라서 시간을 절약하고 컨텐츠 작성에 집중할 수 있으므로 생산성과 효율성이 향상됩니다.

자세한 내용은 [도움말](./ai-based-smart-help.md)을 참조하세요.


![고급 도움말 패널](images/smart-help-panel.png)

## 표준 모드에서 AI Assistant 시작

표준 모드에서 **AI Assistant**&#x200B;를 처음 사용하는 경우 Experience Manager Guides Generative AI 기능을 사용하기 전에 동의를 제출하라는 메시지가 표시됩니다.

AI Assistant를 시작하려면 다음 단계를 수행하십시오.

1. Experience Manager Guides에 로그인합니다.
1. 홈 페이지의 맨 위에서 **AI 길잡이**&#x200B;를 선택합니다. 관리자가 원하는 모드에서 AI Assistant 기능을 활성화했는지 확인합니다.

AI 도우미에는 주요 기능, 사용자 지침 링크 및 **시작** 단추가 표시됩니다.

![고급 도움말 패널](images/get-started-ai.png)

사용자 지침을 주의 깊게 읽은 다음 **시작하기**&#x200B;를 선택하여 AI 도우미를 시작합니다.

**관련 항목**

[AI Assistant 보안 FAQ](./ai-assistant-faq.md)

[Adobe Experience Manager Guides Generative AI 공개](./adobe-generative-ai-disclosures.md)

[스마트 도움말 및 작성을 위한 AI Assistant 구성](../cs-install-guide/conf-smart-suggestions.md)
