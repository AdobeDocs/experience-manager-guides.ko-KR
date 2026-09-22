---
title: 에이전트 모드에서 AI Assistant 구성
description: Experience Manager Guides에서 Agentic AI Assistant를 구성하는 방법 알아보기
source-git-commit: 5ed0a5191e1852dd65e0461f02d520b195f7cc39
workflow-type: tm+mt
source-wordcount: '432'
ht-degree: 1%
---

# Cloud Service의 Agentic 모드에서 AI Assistant 구성

관리자는 Experience Manager Guides에서 조직의 에이전트 모드에서 AI Assistant를 구성할 수 있습니다. 구성 단계는 AEM as a Cloud Service 환경에서 통합 셸 설정을 사용하는지 여부 및 사용자가 SSO 또는 Non-SSO 인증을 통해 로그인했는지 여부에 따라 다릅니다. 이 문서에서는 각 시나리오의 구성 프로세스에 대해 설명합니다.

## 전제 조건

Agentic 모드에서 AI Assistant를 구성하려면 먼저 조직을 **CX Enterprise Coworker**&#x200B;에 온보딩해야 합니다.

## 사용자 환경을 기반으로 AI Assistant 구성

다음 표를 사용하여 사용자에게 적용되는 구성 경로를 식별한 다음 해당 단계를 수행합니다.

| 통합 쉘 | 로그인 유형 | 구성 필요 |
|---|---|---|
| 활성화됨 | SSO | 추가 구성이 없습니다. 모든 것이 즉시 작동합니다 |
| 활성화됨 | 비 SSO | 환경에 IMS 구성 추가 |
| 비활성화됨 | SSO | 환경에 IMS 구성 추가 |
| 비활성화됨 | 비 SSO | 환경에 IMS 구성 추가 |

### 통합 셸이 활성화된 사용자

**SSO 로그인**

통합 셸이 활성화되어 있고 사용자가 SSO를 통해 로그인하는 경우 추가 구성이 필요하지 않습니다. 조직이 CX Enterprise Coworker에 온보딩되면 아젠틱 모드의 AI 어시스턴트가 자동으로 작동합니다.

**SSO 이외 로그인**

통합 셸이 활성화되어 있지만 사용자가 SSO 없이 로그인하는 경우 아래 환경에 [IMS 구성을 추가](#add-ims-configuration-to-the-environment)해야 합니다.

### 통합 셸이 비활성화된 사용자

통합 셸을 사용하지 않도록 설정한 경우 다음 두 항목에 대해 [환경에 IMS 구성을 추가](#add-ims-configuration-to-the-environment)해야 합니다.

- SSO 로그인
- SSO 이외 로그인

## 환경에 IMS 구성 추가

다음 단계를 수행하여 환경에 IMS 구성을 추가합니다.

1. Experience Manager을 열고 구성할 환경이 포함된 프로그램을 선택합니다.

2. **환경** 탭으로 전환합니다.

3. 구성할 환경 이름을 선택합니다. **환경 정보** 페이지로 이동합니다.

4. **구성** 탭으로 전환합니다.

5. JSON 서비스 세부 정보(Adobe Developer Console에서 IMS 구성을 만들 때 다운로드됨)를 `SERVICE_ACCOUNT_DETAILS`에 해당하는 **값** 필드에 붙여 넣습니다. 환경에 필요한 동일한 이름 및 구성을 사용해야 합니다.

>[!NOTE]
>환경에 대한 OAuth/IMS 자격 증명을 아직 만들지 않은 경우 이 단계를 완료하기 전에 Adobe Developer Console에서 먼저 하십시오.

![ims 서비스 계정 구성](assets/ims-service-account-config.png){width="800"}

## 에이전트 모드 활성화

환경에 대한 구성이 완료되면 고객 지원 팀에 문의하여 에이전트 모드를 활성화하십시오.

사용자의 환경에 대해 에이전트 모드를 활성화한 상태에서 **Workspace 설정**(으)로 이동하여 **AI Assistant** 섹션의 **일반** 탭에서 **에이전트** 토글을 활성화하십시오.
