---
title: AEM의 기본 사전 사용자 지정
description: AEM의 기본 사전을 사용자 지정하는 방법 알아보기
exl-id: ecffcd14-6728-4938-a209-5c4b12af6fbb
feature: Web Editor Configuration
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/omWGECpXvtuNBUH8dcOnggOHmG8z1PevjBmZ-ZcYWjY
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2: id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 174
ht-degree: 1%

---

# AEM의 기본 사전 사용자 지정 {#id209SD8000WU}

웹 편집기는 AEM의 맞춤법 검사기 또는 브라우저의 맞춤법 검사기를 사용하도록 구성할 수 있습니다. AEM의 맞춤법 검사기로 작업하는 경우 사용자 정의 단어 목록을 유연하게 정의할 수 있습니다. 그런 다음 이러한 사용자 정의 단어는 AEM 사전에 추가되며 웹 편집기에서 \(부정확함\) 로 플래그가 지정되지 않습니다.

다음 단계를 수행하여 AEM 사전에 추가된 사용자 정의 단어 목록을 만듭니다.

1. 사용자 지정 사전에 정의할 단어 목록을 사용하여 user\_dictionary.txt 파일을 만듭니다.

   >[!NOTE]
   >
   > 각 사용자 정의 단어는 새 줄에 정의해야 합니다.

1. Cloud Manager의 Git 저장소의 다음 위치에 파일을 저장합니다.

   /apps/fmdita/config

1. 파일을 저장합니다.

   변경 사항을 커밋하고 Cloud Manager \(CI/CD\) 파이프라인을 실행하여 구성 변경 사항을 배포합니다.


작성자는 웹 편집기 세션을 다시 시작하여 AEM 사전에 업데이트된 사용자 정의 단어 목록을 가져와야 합니다.

**상위 항목:**[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
