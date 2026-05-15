---
title: 동일한 탭에서 DITA 주제 또는 맵 파일 열기
description: 동일한 탭에서 DITA 주제 또는 맵 파일을 여는 방법에 대해 알아봅니다
exl-id: 81ad2e18-3ea7-4cc1-8387-d703d1038a18
feature: Web Editor Configuration
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/-QYM6xoQCkvRcpxpsWtnJb5le7-4RirhgOZk94UvzIg
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0eid: d90290ec-3e61-4ebd-8649-bcafe0836803
subfeature_v2: id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 211
ht-degree: 0%

---

# 동일한 탭에서 DITA 주제 또는 맵 파일 열기 {#id223HI0P202H}

일부 워크플로우에서는 주제나 맵 파일의 링크를 클릭하면 새 탭에서 열립니다. 이렇게 하면 브라우저에서 많은 탭이 열려 생산성에 영향을 줄 수 있습니다. 새 탭에서 주제 또는 맵 파일을 여는 동작을 변경하여 현재 탭 자체에서 강제로 열 수 있습니다. 이렇게 하려면 다음 구성 변경을 수행합니다.

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** 번들을 검색하고 클릭합니다.

1. **같은 탭에서 DITA 주제/맵 열기** 옵션을 선택합니다.

1. **저장**&#x200B;을 클릭합니다.


이 설정은 주제 또는 맵 파일에 액세스할 수 있는 다음 위치에 영향을 줍니다.

- DITA 주제를 만듭니다. \(워크플로우 끝에 **주제 열기** 단추를 클릭하면\)

- DITA 맵 만들기 \(워크플로우 끝에 **맵 열기** 단추를 클릭하면\)

- DITA 맵 콘솔의 주제 탭

- DITA 맵 콘솔의 기준선 탭

- DITA 맵 콘솔의 보고서 탭


**상위 항목:**[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
