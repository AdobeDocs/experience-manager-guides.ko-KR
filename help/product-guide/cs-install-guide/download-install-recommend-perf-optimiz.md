---
title: 성능 최적화를 위한 Recommendations
description: 성능 최적화를 위한 Recommendations 학습
exl-id: 92ac1f81-2f51-44b0-82c3-56b39e8f3027
feature: Performance Optimization
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '149'
ht-degree: 0%

---

# 성능 최적화를 위한 Recommendations {#id213BD0JG0XA}

성능 최적화를 위해 다음 사항을 고려하십시오.

- 콘텐츠 및 색인화 환경을 최적화하려면 AEM 설명서에서 [콘텐츠 검색 및 색인화 최적화](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/operations/indexing.html)를 참조하십시오.

- 게시에 사용자 지정 DITA-OT를 사용하는 동안 Patch Xerces Jar가 발생했습니다. 사용 사례에 따라 필수 구성입니다. 이 변경 사항은 게시 출력에 사용자 지정 DITA-OT를 사용하는 경우에만 필요합니다.

  *필수 구성*: 사용자 지정 DITA-OT 패키지의 Xerces Jar 파일을 제공된 OOTB로 바꿉니다. 기본 OOTB xercesImpl-2.11.0.jar 파일은 /libs/fmdita/dita\_resources/DITA-OT.zip 파일 내에서 사용할 수 있습니다. 대체되는 이전 Xerces Jar 파일과 일치하도록 xercesImpl-2.11.0.jar 파일의 이름을 바꾸십시오. 이 작업은 런타임에 수행할 수 있습니다.

  이렇게 하면 주제가 많은 DITA 맵을 게시하는 동안 게시 시간과 메모리 활용도가 줄어듭니다.


**상위 항목:**&#x200B;[&#x200B;다운로드 및 설치](download-install.md)
