---
title: 쿼리에 대한 LimitReads 수를 구성합니다.
description: 쿼리에 대한 LimitReads 수를 구성하는 방법에 대해 알아봅니다.
exl-id: f6010cc3-5fec-4ec7-adf7-5ad3c9bd8879
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '99'
ht-degree: 2%

---

# 쿼리에 대한 LimitReads 수를 구성합니다. {#id231RC0HL0ID}

쿼리가 한 번에 읽을 수 있는 노드 수를 늘리려면 다음 단계를 수행하십시오.

1. Adobe Experience Manager 웹 콘솔 JMX 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/jmx
   ```

1. **QueryEngineSettings**&#x200B;를 검색하고 클릭합니다.

1. **LimitReads** 특성에 대한 특성 값을 변경합니다.

1. **저장**&#x200B;을 클릭합니다.


이 속성 값을 늘리면 더 큰 DITA 맵에 대한 보고서를 생성하는 데 도움이 됩니다.

**상위 항목:**[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
