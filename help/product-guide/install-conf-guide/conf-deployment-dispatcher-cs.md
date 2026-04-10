---
title: 배포 및 Dispatcher 구성
description: Experience Manager Guides as a Cloud Service의 배포 및 Dispatcher 구성 알아보기
feature: Introduction, Installation
role: Admin
level: Experienced
source-git-commit: 834959a6a0e22cd5d2b2c5d0e57ceb6d45c0c666
workflow-type: tm+mt
source-wordcount: '308'
ht-degree: 3%

---

# 배포 및 Dispatcher 구성

이 문서에서는 Experience Manager Guides as a Cloud Service을 배포하고 Dispatcher를 구성하는 방법에 대해 설명합니다.

## Experience Manager Guides as a Cloud Service 배포

Cloud Manager을 통해 Experience Manager Guides을 배포하여 시작할 수 있습니다. 모듈을 배포하려면 [AEM Guides as a Cloud Service 배포](../release-info/deploy-xml-on-aemaacs.md)에 설명된 지침을 따르십시오.

>[!NOTE]
>
> 2024.2.0 릴리스부터 Experience Manager Guides은 Experience Manager as a Cloud Service용 자동화된 추가 기능으로만 사용할 수 있습니다. 2023년 12월 또는 이전 릴리스를 사용하는 경우 GitHub 저장소에서 Adobe Experience Manager Guides을 다운로드하여 설치할 수 있습니다. Experience Manager Guides에 대해 수동 배포를 사용하는 경우 프로그램에 대해 Experience Manager Guides을 활성화하기 전에 cloud manage git codebase에서 `<module>dox.installer</module> from file dox/pom.xml` 줄을 제거하십시오.

Experience Manager Guides 모듈을 배포하려면 다음 단계를 수행하십시오.

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


## Dispatcher 구성

Dispatcher는 Adobe Experience Manager의 캐싱 및/또는 로드 밸런싱 도구입니다. 자세한 내용은 [클라우드의 Dispatcher](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/implementing/content-delivery/disp-overview.html?lang=en)를 참조하세요.

1. AMS에서 클라우드 서비스로 Dispatcher 구성을 마이그레이션하려면 [AMS에서 AEM as a Cloud Service으로 Dispatcher 구성 마이그레이션](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/implementing/content-delivery/ams-aem.html?lang=en)을 참조하십시오.
1. Dispatcher 구성 방법에 대한 자세한 내용은 [Dispatcher 구성](https://experienceleague.adobe.com/docs/experience-manager-dispatcher/using/configuring/dispatcher-configuration.html?lang=ko-KR)을 참조하십시오.

>[!NOTE]
>
> AEM as a Cloud Service은 작성자 인스턴스에 대한 dispatcher를 지원하지 않습니다.
