---
title: AEM Guides과 안내서 지식 AI 연결
description: AEM Guides을 안내서 지식 AI와 연결하는 방법에 대해 알아봅니다
feature: Introduction
role: Admin
level: Experienced
source-git-commit: 05976e2a408e57256a454f181bb93d900dc091ab
workflow-type: tm+mt
source-wordcount: '665'
ht-degree: 1%
---

# Adobe Experience Manager Guides과 안내서 지식 AI 연결(Beta)

>[!IMPORTANT]
>
> 이 기능은 기본적으로 비활성화되어 있습니다. 안내서 지식 AI 기능을 활성화하려면 고객 지원 팀에 문의하십시오.

이 문서에서는 관리자 및 콘텐츠 엔지니어에게 안내서 Knowledge AI 액세스를 구성하고 Knowledge AI 내에서 사용할 수 있도록 Experience Manager Guides 콘텐츠를 업로드하는 전체 프로세스를 제공합니다.

## 프로세스 개요

| 단계 | 수행할 작업 |
|---|---|
| 1 | Adobe Developer Console에서 서비스 계정을 만들고 환경에 맞게 구성합니다. |
| 2 | 서비스 계정 자격 증명 파일에서 기술 계정 이메일을 검색합니다. |
| 3 | 역할을 만들고 사용자를 추가하여 Knowledge AI에서 서비스 계정 액세스 권한을 부여합니다. |
| 4 | Experience Manager Guides에서 지식 AI 출력 사전 설정을 구성하고 콘텐츠를 업로드합니다. |


## 사전 요구 사항

시작하기 전에 다음 액세스 및 권한이 있는지 확인하십시오.

| 요구 사항 | 목적 |
|---|---|
| Adobe Developer Console | 서비스 계정을 만들고 JSON 자격 증명을 다운로드합니다. |
| Adobe Experience Manager Guides | 콘텐츠를 작성하고 Knowledge AI에 대한 출력 사전 설정을 구성합니다. |
| [지식 AI](https://guidesai.adobe.io/) | 역할 및 사용자를 관리하고 업로드된 콘텐츠를 수신합니다. |
| 권한: 서비스 계정 만들기 | 서비스 계정을 만드는 데 Adobe Developer Console에서 필요합니다. |
| 권한: Knowledge AI에서 사용자 및 역할 관리 | 지식 AI에서 서비스 계정 액세스 권한을 부여하는 데 필요합니다. |

## 서비스 계정 만들기

지식 AI는 서비스 계정을 사용하여 안전하게 인증하고 콘텐츠에 액세스합니다.

1. [Microservices IMT 구성](https://experienceleague.adobe.com/en/docs/experience-manager-guides/using/knowledge-base/kb-articles/publishing/configure-microservices-imt-config)의 지침을 따르십시오.

1. 새 서비스 계정을 만들고 생성된 JSON 자격 증명 파일을 다운로드합니다.

1. 다운로드한 자격 증명을 사용하여 필요한 환경 설정을 구성합니다.

완료되면 서비스 계정을 환경과 성공적으로 연결해야 합니다.

>[!NOTE]
>
> 환경에 대한 서비스 계정을 이미 만들고 구성한 경우 다음 단계로 진행할 수 있습니다.


## 기술 계정 이메일 검색

지식 AI에 대한 액세스 권한을 부여하려면 서비스 계정을 식별합니다.

1. 다운로드한 서비스 계정 JSON 파일을 엽니다.
1. 필드 이름 `technical_account_email`을(를) 검색합니다. 다음과 유사한 값을 확인합니다.

   ```json
   {
   "technical_account_email": "a1b2c3d4e5f6@techacct.adobe.com"
   }
   ```

1. `technical_account_email`과(와) 연결된 전자 메일 주소를 복사합니다. 다음 단계에서 이 이메일 주소를 사용합니다.

## Knowledge AI에 액세스 권한 부여

서비스 계정에서 콘텐츠를 관리하고 업로드할 수 있도록 하려면 적절한 권한을 사용하여 해당 서비스를 Knowledge AI에 추가하십시오.

1. [Knowledge AI](https://guidesai.adobe.io/)를 엽니다.
1. **보안 > 역할**(으)로 이동하여 필요한 최소한의 권한으로 역할을 만듭니다.
1. **보안 > 사용자 > 사용자 추가**(으)로 이동합니다. 서비스 계정 JSON에서 복사한 `technical_account_email`을(를) 사용하여 새 사용자를 추가하고, **도메인** 드롭다운에서 도메인을 선택하고, 이전 단계에서 만든 역할을 할당합니다.

이제 서비스 계정에 컨텐츠 관리 및 업로드 작업을 수행할 수 있는 권한이 부여됩니다.

## Knowledge AI 사전 설정 구성 및 콘텐츠 업로드

콘텐츠를 Knowledge AI에 게시하려면 권한을 설정한 후 Experience Manager Guides을 구성하십시오.

1. Experience Manager Guides에서 **맵 콘솔**&#x200B;을 엽니다.
1. **출력 사전 설정** 탭으로 이동합니다.
1. 출력 사전 설정을 만들려면 + 아이콘을 선택합니다.
1. **새 출력 사전 설정** 대화 상자의 **유형** 드롭다운에서 **지식 AI**&#x200B;을(를) 선택합니다. **이름**&#x200B;을(를) 입력하고 **현재 폴더 프로필에 추가**&#x200B;를 선택하여 현재 폴더 프로필 내에 출력 사전 설정을 만듭니다.

   ![knowledge-ai-preset-creation](assets/knowledge-ai-preset.png)

1. **추가**&#x200B;를 선택합니다. 지식 AI 사전 설정이 생성됩니다.
1. 구성된 Knowledge AI 사전 설정을 엽니다.
1. `technical_account_email`에 역할이 부여된 도메인을 선택한 다음 **콘텐츠 업로드**&#x200B;를 선택합니다. 이렇게 하면 지식 AI에 대한 콘텐츠 업로드 워크플로가 트리거됩니다. 업로드 프로세스가 완료될 때까지 기다립니다.

   ![knowledge-ai-domain](assets/knowledge-ai-domain.png)

1. 업로드가 완료되면 **Knowledge AI에서 열기**&#x200B;를 선택합니다. 이렇게 하면 업로드한 콘텐츠를 사용하여 도메인 내에서 지식 AI 채팅이 열립니다.

   ![knowledge-ai-open](assets/open-knowledge-ai.png)

서비스 계정을 성공적으로 구성하고, 필요한 권한을 할당하고, Experience Manager Guides 콘텐츠를 Knowledge AI에서 사용할 수 있도록 설정했습니다. 업데이트된 콘텐츠를 게시하려는 경우 언제든지 새 Knowledge AI 사전 설정을 만들고 [Knowledge AI 사전 설정 구성 및 콘텐츠 업로드](#configure-knowledge-ai-preset-and-upload-content) 섹션에 설명된 단계를 따르십시오.



