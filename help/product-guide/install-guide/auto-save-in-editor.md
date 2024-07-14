---
title: 웹 편집기에서 파일 자동 저장 구성
description: 웹 편집기에서 파일 자동 저장을 구성하는 방법에 대해 알아봅니다
exl-id: 23fe404c-c76d-43ba-9b28-c49ab1e524de
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '197'
ht-degree: 1%

---

# 웹 편집기에서 파일 자동 저장 구성 {#id199CC0J0M5Z}

브라우저 기반 편집기에서 가장 일반적인 기능 중 하나는 특정 기간 후에 데이터를 저장하는 기능입니다. AEM Guides 웹 편집기는 지정된 시간 간격으로 주제 및 맵 파일을 자동으로 저장할 수도 있습니다. 이 기능이 트리거되면 주제 또는 맵의 작업 복사본이 저장됩니다. 주제나 맵의 새 버전이 만들어지지 않습니다. 새 버전을 생성하려면 웹 편집기의 도구 모음에서 개정 저장 아이콘을 클릭해야 합니다.

자동 저장 기능은 기본적으로 활성화되지 않으며 configMgr에서 활성화해야 합니다. 웹 편집기에서 자동 저장 기능을 활성화하려면 다음 단계를 수행하십시오.

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** 번들을 검색하고 클릭합니다.

1. *XmlEditorConfig* 설정에서 **자동 저장** 옵션을 선택합니다.

1. **자동 저장 간격** 필드에서 자동 저장 기능을 트리거할 시간 간격(초)을 지정합니다.

1. **저장**&#x200B;을 클릭합니다.


**상위 항목:**[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
