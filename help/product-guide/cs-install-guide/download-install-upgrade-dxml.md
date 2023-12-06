---
title: AEM Guides 업그레이드
description: AEM Guides를 업그레이드하는 방법 알아보기
exl-id: 57ae906f-69e3-4319-89f6-0fa9ddb7a3ff
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '98'
ht-degree: 0%

---

# AEM Guides 업그레이드 {#id213BD050YPH}

1. Cloud Manager의 Git 저장소에 액세스합니다.

1. dox/dox.installer/pom.xml 파일을 업데이트합니다.

1. dox.version 변수의 값을 Adobe에서 제공한 버전 세부 사항으로 업데이트합니다.

1. 변경 사항을 커밋하고 Cloud Manager 파이프라인을 실행하여 업그레이드된 패키지를 배포합니다.


>[!NOTE]
>
> CI/CD 파이프라인 사용에 대한 자세한 내용은 을 참조하십시오. [Adobe Cloud Manager에서 CI/CD 파이프라인 사용](https://experienceleague.adobe.com/docs/experience-manager-learn/foundation/cloud-manager/use-the-cicd-pipeline-in-cloud-manager-for-aem.html).

## 브라우저 캐시 지우기

업그레이드 프로세스를 완료한 후 업그레이드된 AEM Guides 버전을 사용하기 전에 모든 사용자가 브라우저 캐시를 지워야 합니다.

**상위 항목:**[&#x200B;다운로드 및 설치](download-install.md)
