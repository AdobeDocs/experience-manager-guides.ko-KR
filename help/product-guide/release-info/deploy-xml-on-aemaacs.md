---
title: ' [!DNL Experience Manager as a Cloud Service] 환경에  [!DNL Experience Manager Guides] 을(를) 추가하는 방법'
description: ' [!DNL AEM as a Cloud Service] 환경에  [!DNL AEM Guides] 을(를) 추가하는 방법 알아보기'
exl-id: a1e020c2-360c-4d71-b5fd-8179d9ceacda
feature: Installation
role: Leader
source-git-commit: 1b25f1df67fa2442ab79830dc2ac5a6eabd0394c
workflow-type: tm+mt
source-wordcount: '155'
ht-degree: 0%

---

# as a Cloud Service [!DNL Adobe Experience Manager Guides] 배포

[!DNL Experience Manager as a Cloud Service] 환경에 [!DNL Experience Manager Guides]을(를) 추가하는 방법을 알아봅니다.


>[!NOTE]
>
> 2024.2.0 릴리스부터 Experience Manager Guides은 Experience Manager as a Cloud Service용 자동 추가 기능으로만 사용할 수 있습니다. Experience Manager Guides에 대해 수동 배포를 사용하는 경우 프로그램에 대해 Experience Manager Guides을 활성화하기 전에 cloud manage git codebase에서 `<module>dox.installer</module> from file dox/pom.xml` 줄을 제거하십시오.

1. [!UICONTROL Cloud Manager]에 로그인합니다.

1. [!DNL Experience Manager Guides]을(를) 구성할 프로그램을 편집합니다.

1. **[!UICONTROL 솔루션 및 추가 기능]** 탭으로 전환합니다.

1. **[!UICONTROL 솔루션 및 추가 기능]** 테이블에서 **[!UICONTROL Assets]**&#x200B;을 클릭합니다.

1. **[!UICONTROL 안내서]**&#x200B;를 선택하고 **[!UICONTROL 저장]**&#x200B;을 선택합니다.

Experience Manager Guides 솔루션의 자동 프로비저닝을 위해 프로그램을 구성했습니다.

![Experience Manager Guides 솔루션 구성](assets/addon-configuration.png)

>[!NOTE]
>
>통합 프로그램의 환경에 [!DNL Experience Manager Guides]을(를) 설치하려면 환경과 연결된 파이프라인을 실행해야 합니다. [!DNL Experience Manager Guides]을(를) 설치하기 위해 CM git 코드 베이스에 추가 구성이 필요하지 않습니다.
