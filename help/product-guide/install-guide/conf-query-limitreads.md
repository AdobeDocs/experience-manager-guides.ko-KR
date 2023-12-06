---
title: 쿼리에 대한 LimitReads 수를 구성합니다.
description: 쿼리에 대한 LimitReads 수를 구성하는 방법에 대해 알아봅니다.
exl-id: f6010cc3-5fec-4ec7-adf7-5ad3c9bd8879
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
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

1. 을(를) 검색하고 클릭하십시오. **쿼리 엔진 설정**.

1. 다음에 대한 속성 값 변경 **LimitReads** 특성.

1. **저장**&#x200B;을 클릭합니다.


이 속성 값을 늘리면 더 큰 DITA 맵에 대한 보고서를 생성하는 데 도움이 됩니다.

**상위 항목:**[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
