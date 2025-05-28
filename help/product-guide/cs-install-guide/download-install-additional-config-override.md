---
title: 구성 재정의
description: 구성 재정의 방법 알아보기
exl-id: dc5f81f7-5b0a-4d12-a944-ba66b0239d5c
feature: Installation
role: Admin
level: Experienced
source-git-commit: e4b213b5f0efda18fb24f100f3ee8237947890bf
workflow-type: tm+mt
source-wordcount: '306'
ht-degree: 0%

---

# 구성 재정의 {#id216IFC003XA}

구성 업데이트를 수행하려면 다음과 같은 일반적인 접근 방식을 사용해야 합니다.

1. Cloud Manager의 Git 저장소에 액세스합니다.

1. 다음 위치에 새 JSON 파일을 만듭니다.

   src/main/content/jcr\_root/apps/fmditaCustom/config/

1. 파일 이름을 다음 형식으로 지정합니다.

   $\{PID\}.cfg.json

   여기서 PID는 구성의 프로세스 ID입니다.

1. 다음 형식을 사용하여 JSON 파일에 속성을 추가하십시오.

   ```
   {
      "aem.adminuname": "updatedUserjson",
      "valid.characters": "[-a-zA-Z0-9_@$]",
      "dita.serialization": true
   }
   ```

1. 변경 사항을 커밋하고 Cloud Manager 파이프라인을 실행하여 업데이트된 구성을 배포합니다.

## Experience Manager Guides UI 구성

Adobe Experience Manager Guides의 2025.02.0 릴리스에서는 이전보다 빠르고 효율적으로 작업할 수 있도록 개선된 UI 및 향상된 기능을 제공합니다. 여기에는 완전히 새로운 홈 페이지, 보다 깔끔하고 조직화된 편집기 도구 모음, 전용 맵 콘솔 및 향상된 기능이 포함됩니다.

원활한 전환을 보장하고 중단을 최소화하기 위해 Experience Manager Guides은 필요에 따라 이전 UI로 다시 전환하거나 그 반대로 전환할 수 있는 구성 옵션을 제공합니다.

>[!IMPORTANT]
>
> 새 UI와 이전 UI 간에 전환하는 이 구성 옵션은 2025.4.0 릴리스까지 지원되었습니다. 2025.6.0 릴리스에서는 이 설정이 더 이상 사용되지 않으며 더 이상 이전 UI로 되돌리는 데 사용할 수 없습니다.

Experience Manager Guides UI를 구성하려면 다음 단계를 수행하십시오.

1. Adobe Experience Manager을 열고 구성할 환경이 포함된 프로그램을 선택합니다.
2. **환경** 탭으로 전환합니다.
3. 구성할 환경 이름을 선택합니다. **환경 정보** 페이지로 이동해야 합니다.
4. **구성** 탭으로 전환합니다.
5. **추가/업데이트**&#x200B;를 선택합니다.
6. UI 구성 세부 사항을 추가합니다. 다음 스크린샷과 동일한 이름과 구성을 사용하고 있는지 확인합니다.

   ![](assets/enable-penultimate-ui.png){width="800" align="left"}

   값을 **true**(으)로 설정하면 이전 UI가 유지되지만 **false**&#x200B;은(는) 새 UI를 활성화합니다.



**상위 항목:**[&#x200B;다운로드 및 설치](download-install.md)
