---
title: 추가 방법 [!DNL AEM Guides] (으)로 [!DNL AEM as a Cloud Service] 환경
description: 추가 방법 알아보기 [!DNL AEM Guides] (으)로 [!DNL AEM as a Cloud Service] 환경
exl-id: a1e020c2-360c-4d71-b5fd-8179d9ceacda
feature: Installation
role: Leader
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '213'
ht-degree: 0%

---

# [!DNL AEM Guides] as a Cloud Service 배포

추가 방법 알아보기 [!DNL Guides] (으)로 [!DNL AEM as a Cloud Service] 환경.

## Cloud Manager git 파이프라인을 통한 수동 배포

구입한 경우 [!DNL AEM Guides] 2022년 3월 29일 이전에 as a Cloud Service으로 제공하려면 다음 배포 지침을 따르십시오.

* 새로 고침을 시작하는 경우 다음에서 자동으로 생성된 코드를 바꿀 수 있습니다 [!UICONTROL Cloud Manager] 이미 통합된 XML 플러그인이 있는 아래 리포지토리의 코드 사용: https://github.com/Adobe-TCS/XML-documentation-for-AEMaaCS

* 에 이미 체크인 사용자 정의 기능이 있는 경우 [!UICONTROL Cloud Manager] git 리포지토리: 아래 리포지토리에서 기존 코드에 XML 플러그인을 추가하는 방법에 대한 지침을 참조할 수 있습니다. https://github.com/Adobe-TCS/DoX-Installer-for-AEMaaCS

## Cloud Manager를 통한 배포

구매한 고객인 경우 [!DNL AEM Guides] 2022년 3월 29일 또는 그 이후에 as a Cloud Service으로 다음 지침에 따라 추가합니다 [!DNL Guides] (으)로 [!DNL AEM as a Cloud Service] 환경:

1. 다음으로 로그인 [!UICONTROL Cloud Manager].

1. 구성할 프로그램을 편집합니다 [!DNL AEM Guides].

1. 다음으로 전환 **[!UICONTROL 솔루션 및 추가 기능]** 탭.

1. 다음에서 **[!UICONTROL 솔루션 및 추가 기능]** 표, 클릭 **[!UICONTROL 에셋]**.

1. 선택 **[!UICONTROL 안내서]** 및 선택 **[!UICONTROL 저장]**.

AEM Guides 솔루션의 자동 프로비저닝을 위해 프로그램을 구성했습니다.

![AEM Guides 솔루션 구성](assets/addon-configuration.png)

>[!NOTE]
>
>설치하려면 [!DNL AEM Guides] 통합 프로그램의 모든 환경에서 환경과 연결된 파이프라인을 실행해야 합니다. 설치를 위해 CM git 코드베이스에 추가 구성이 필요하지 않습니다 [!DNL AEM Guides].
