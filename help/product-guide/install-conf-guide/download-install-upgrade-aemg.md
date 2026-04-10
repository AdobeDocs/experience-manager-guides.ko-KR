---
title: Cloud Service용 AEM Guides 업그레이드
description: AEM Guides 업그레이드 방법 알아보기
feature: Installation
role: Admin
level: Experienced
source-git-commit: b416334318a83e882c32318bc4769d24268cdd1c
workflow-type: tm+mt
source-wordcount: '103'
ht-degree: 2%

---

# Cloud Service용 AEM Guides 업그레이드 {#id213BD050YPH}

AEM Guides을 업그레이드하려면 다음 단계를 수행하십시오.

1. Cloud Manager의 Git 저장소에 액세스합니다.

1. `dox/dox.installer/pom.xml` 파일을 업데이트합니다.

1. `dox.version` 변수의 값을 Adobe에서 제공한 버전 세부 정보로 업데이트하십시오.

1. 변경 사항을 커밋하고 Cloud Manager 파이프라인을 실행하여 업그레이드된 패키지를 배포합니다.


>[!NOTE]
>
> CI/CD 파이프라인 사용에 대한 자세한 내용은 [Adobe Cloud Manager에서 CI/CD 파이프라인 사용](https://experienceleague.adobe.com/docs/experience-manager-learn/foundation/cloud-manager/use-the-cicd-pipeline-in-cloud-manager-for-aem.html?lang=ko)을 참조하십시오.

## 브라우저 캐시를 지웁니다.

업그레이드 프로세스를 완료한 후 업그레이드된 AEM Guides 버전을 사용하기 전에 모든 사용자가 브라우저 캐시를 지워야 합니다.
