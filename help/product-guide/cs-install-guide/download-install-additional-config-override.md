---
title: 구성 재정의
description: 구성 재정의 방법 알아보기
exl-id: dc5f81f7-5b0a-4d12-a944-ba66b0239d5c
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '93'
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


**상위 항목:**[&#x200B;다운로드 및 설치](download-install.md)
