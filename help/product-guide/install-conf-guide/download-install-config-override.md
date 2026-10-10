---
title: Cloud Service에 대한 구성 무시
description: 구성 재정의 방법 알아보기
feature: Installation
role: Admin
level: Experienced
exl-id: baf48913-ced7-444f-a125-661c0213d847
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
feature_v2:
  - id: e88e74c7-6080-446a-8eb0-496f1ac5f7e6
    internal-label: Administration
subfeature_v2:
  - id: e557051c-ff02-4ff8-9421-cf452af0edd5
    internal-label: Installation
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '91'
ht-degree: 0%
---
# Cloud Service에 대한 구성 무시 {#id216IFC003XA}

Experience Manager Guides as a Cloud Service에서 구성을 업데이트하려면 다음과 같은 일반적인 접근 방식을 사용해야 합니다.

1. Cloud Manager의 Git 저장소에 액세스합니다.

1. 다음 위치에 새 JSON 파일을 만듭니다.

   `src/main/content/jcr\_root/apps/fmditaCustom/config/`

1. 파일 이름을 다음 형식으로 지정합니다.

   `$\{PID\}.cfg.json`

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
