---
title: 웹 편집기에서 파일 자동 저장 구성
description: 웹 편집기에서 파일 자동 저장을 구성하는 방법에 대해 알아봅니다
feature: Web Editor Configuration
role: Admin
level: Experienced
exl-id: 142a588a-3d26-48ee-a3fe-23882922243c
source-git-commit: 2749c0df3bd5640c9491dce3ab6c96f707625969
workflow-type: tm+mt
source-wordcount: '267'
ht-degree: 1%

---

# 웹 편집기에서 파일 자동 저장 구성 {#id199CC0J0M5Z}

브라우저 기반 편집기에서 가장 일반적인 기능 중 하나는 특정 기간 후에 데이터를 저장하는 기능입니다. AEM Guides 웹 편집기는 또한 지정된 시간 간격으로 주제 및 맵 파일을 자동으로 저장할 수 있도록 지원합니다. 이 기능이 트리거되면 주제 또는 맵의 작업 복사본이 저장됩니다. 주제나 맵의 새 버전이 만들어지지 않습니다. 새 버전을 생성하려면 웹 편집기의 도구 모음에서 개정 저장 아이콘을 클릭해야 합니다.

자동 저장 기능은 기본적으로 활성화되어 있지 않으며, Cloud Service용 구성 파일 및 온-프레미스용 `configMgr`을(를) 사용하여 활성화해야 합니다.

Experience Manager Guides 설정을 기반으로 웹 편집기에서 자동 저장 기능을 활성화하기 위한 지침은 Cloud Service 또는 온프레미스입니다.

>[!BEGINTABS]

>[!TAB Cloud Service]

구성 파일을 만들려면 [구성 재정의](download-install-config-override.md#)의 지침을 사용하십시오. 구성 파일에서 다음 \(property\) 세부 정보를 입력하여 파일 자동 저장 및 자동 저장 시간 간격을 구성합니다.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.autosave` | 부울 \(true/false\).<br> **기본값**: false |
| `xmleditor.autosaveinterval` | 자동 저장 기능을 트리거할 시간 간격(초)을 지정합니다. |

>[!TAB 온-프레미스]

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** 번들을 검색하고 클릭합니다.

1. *XmlEditorConfig* 설정에서 **자동 저장** 옵션을 선택합니다.

1. **자동 저장 간격** 필드에서 자동 저장 기능을 트리거할 시간 간격(초)을 지정합니다.

1. **저장**&#x200B;을 클릭합니다.

>[!ENDTABS]
