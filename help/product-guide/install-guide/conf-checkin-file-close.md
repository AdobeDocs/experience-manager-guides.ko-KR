---
title: 닫을 때 파일을 체크 인하도록 프롬프트 구성
description: 닫을 때 파일을 체크 인하도록 프롬프트를 구성하는 방법 알아보기
exl-id: d184c97f-8405-4bcd-963d-635f17584897
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '200'
ht-degree: 1%

---

# 닫을 때 파일을 체크 인하도록 프롬프트 구성 {#id222HC040PE8}

웹 편집기에서 연 파일을 닫으려고 할 때 **닫기** 파일 탭의 단추 또는 **닫기**&#x200B;옵션 메뉴의 옵션은 파일에 저장되지 않은 데이터나 저장되지 않은 버전이 있는 경우 대화 상자가 나타납니다. 파일이 잠겨 있으면 잠금을 해제하라는 메시지가 표시됩니다.

다음 **파일 잠금 해제** 이 확인란은 기본적으로 활성화되어 있지 않으며 configMgr에서 활성화해야 합니다. 웹 편집기에서 기본적으로 옵션을 활성화하려면 다음 단계를 수행하십시오.

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. 을(를) 검색하고 클릭합니다. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** 번들.

1. 다음 항목 선택 **닫을 때 체크인 요청** 옵션을 선택합니다.

1. **저장**&#x200B;을 클릭합니다.


이 구성을 활성화하면 **파일 잠금 해제** 대화 상자에서 확인란이 기본적으로 선택됩니다.

자세한 내용은 *파일 닫기 및 저장 시나리오* 섹션(Adobe Experience Manager Guides as a Cloud Service 사용 안내서)을 참조하십시오.

**상위 항목:**[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
