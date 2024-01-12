---
title: UUID 기반 링크 표시 구성
description: UUID 기반 링크 표시를 구성하는 방법 알아보기
exl-id: ab1b0ecf-cb50-4fcd-b36e-d16a8c396054
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '209'
ht-degree: 0%

---

# UUID 기반 링크 표시 구성 {#id2035G20M0QN}

기본적으로 웹 편집기의 참조 삽입 또는 재사용 콘텐츠 삽입 옵션을 사용하여 링크를 만들면 참조된 콘텐츠의 UUID를 사용하여 링크가 만들어집니다. 다음 **링크** 참조된 콘텐츠의 속성 \( 속성 패널\)은 참조된 콘텐츠의 상대 파일 경로 또는 UUID를 표시하도록 구성할 수 있습니다. 이 디스플레이는 **UUID 활성화** configMgr의 옵션입니다. 기본적으로 켜져 있으며, 이는 참조된 콘텐츠의 UUID가 속성 패널에 표시됨을 의미합니다.

웹 편집기에서 참조된 콘텐츠의 상대 경로 또는 UUID를 표시하려면 다음 단계를 수행하십시오.

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. 을(를) 검색하고 클릭합니다. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** 번들.

1. 다음에서 *XmlEditorConfig* 설정, **UUID 활성화** 옵션은 기본적으로 활성화되어 있습니다. 참조된 콘텐츠의 UUID가 **링크** 속성 패널의 속성입니다.

   연결된 콘텐츠의 상대 경로를 표시하려면 선택을 해제합니다. **UUID 활성화** 옵션을 선택합니다.

1. **저장**&#x200B;을 클릭합니다.


**상위 항목:**[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
