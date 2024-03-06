---
title: 추가 방법 [!DNL Experience Manager Guides] (으)로 [!DNL Experience Manager as a Cloud Service] 환경
description: 추가 방법 알아보기 [!DNL AEM Guides] (으)로 [!DNL AEM as a Cloud Service] 환경
exl-id: a1e020c2-360c-4d71-b5fd-8179d9ceacda
feature: Installation
role: Leader
source-git-commit: 1b25f1df67fa2442ab79830dc2ac5a6eabd0394c
workflow-type: tm+mt
source-wordcount: '155'
ht-degree: 0%

---

# [!DNL Adobe Experience Manager Guides] as a Cloud Service 배포

추가 방법 알아보기 [!DNL Experience Manager Guides] (으)로 [!DNL Experience Manager as a Cloud Service] 환경.


>[!NOTE]
>
> 2024.2.0 릴리스부터 Experience Manager 안내서는 Experience Manager as a Cloud Service용 자동화된 추가 기능으로만 사용할 수 있습니다. Experience Manager 가이드에 수동 배포를 사용하는 경우 줄을 제거하십시오. `<module>dox.installer</module> from file dox/pom.xml` 프로그램에 대한 Experience Manager 안내서를 활성화하기 전에 클라우드에서 git 코드베이스를 관리합니다.

1. 다음으로 로그인 [!UICONTROL Cloud Manager].

1. 구성할 프로그램을 편집합니다 [!DNL Experience Manager Guides].

1. 다음으로 전환 **[!UICONTROL 솔루션 및 추가 기능]** 탭.

1. 다음에서 **[!UICONTROL 솔루션 및 추가 기능]** 표, 클릭 **[!UICONTROL 에셋]**.

1. 선택 **[!UICONTROL 안내서]** 및 선택 **[!UICONTROL 저장]**.

Experience Manager 가이드 솔루션의 자동 프로비저닝을 위해 프로그램을 구성했습니다.

![Experience Manager 가이드 솔루션 구성](assets/addon-configuration.png)

>[!NOTE]
>
>설치하려면 [!DNL Experience Manager Guides] 통합 프로그램의 모든 환경에서 환경과 연결된 파이프라인을 실행해야 합니다. 설치를 위해 CM git 코드베이스에 추가 구성이 필요하지 않습니다 [!DNL Experience Manager Guides].
