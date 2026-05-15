---
title: 성능 최적화를 위한 권장 사항
description: 성능 최적화를 위한 권장 사항 알아보기
exl-id: 92ac1f81-2f51-44b0-82c3-56b39e8f3027
feature: Performance Optimization
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/vh0hogZNMjKrCL12WdKVuwF2qXdzy64KxIhhB-K4esA
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: b1210526-416b-4ef6-bcc0-1692e99f30e9
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
  - id: e88e74c7-6080-446a-8eb0-496f1ac5f7e6
subfeature_v2:
  - id: baa3aa24-d162-4a57-b73a-d27341145083
  - id: c8841798-1a28-4264-a46a-984860f8e6f6
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
topic_v2:
  - id: cdd65e7e-8839-44a2-bc21-0e03623b5dd1
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
  - id: eddd9b14-83bd-4ff4-9072-54a4a484abb7
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 162
ht-degree: 5%

---

# 성능 최적화를 위한 권장 사항 {#id213BD0JG0XA}

성능 최적화를 위해 다음 사항을 고려하십시오.

- 콘텐츠 및 색인화 환경을 최적화하려면 AEM 설명서에서 [콘텐츠 검색 및 색인화 최적화](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/operations/indexing.html)를 참조하십시오.

- 게시에 사용자 지정 DITA-OT를 사용하는 동안 Patch Xerces Jar가 발생했습니다. 사용 사례에 따라 필수 구성입니다. 이 변경 사항은 게시 출력에 사용자 지정 DITA-OT를 사용하는 경우에만 필요합니다.

  *필수 구성*: 사용자 지정 DITA-OT 패키지의 Xerces Jar 파일을 제공된 OOTB로 바꿉니다. 기본 OOTB xercesImpl-2.11.0.jar 파일은 /libs/fmdita/dita\_resources/DITA-OT.zip 파일 내에서 사용할 수 있습니다. 대체되는 이전 Xerces Jar 파일과 일치하도록 xercesImpl-2.11.0.jar 파일의 이름을 바꾸십시오. 이 작업은 런타임에 수행할 수 있습니다.

  이렇게 하면 주제가 많은 DITA 맵을 게시하는 동안 게시 시간과 메모리 활용도가 줄어듭니다.


**상위 항목:**&#x200B;[&#x200B;다운로드 및 설치](download-install.md)
