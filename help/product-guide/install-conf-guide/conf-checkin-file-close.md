---
title: 닫을 때 파일을 체크 인하도록 프롬프트 구성
description: 닫을 때 파일을 체크 인하도록 프롬프트를 구성하는 방법 알아보기
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '319'
ht-degree: 1%

---

# 닫을 때 파일을 체크 인하도록 프롬프트 구성 {#id222HC040PE8}

사용자가 파일 탭의 **닫기** 단추나 옵션 메뉴의 **닫기** 옵션을 사용하여 웹 편집기에서 연 파일을 닫으려고 하면 파일에 저장되지 않은 데이터나 저장되지 않은 버전이 있으면 대화 상자가 나타납니다. 파일이 잠겨 있으면 잠금을 해제하라는 메시지가 표시됩니다.

Experience Manager Guides 설정을 기반으로 웹 편집기에서 기본적으로 파일을 닫을 때 옵션을 선택하도록 메시지를 구성하는 지침을 제공하는 탭은 Cloud Service 또는 온프레미스입니다.

>[!BEGINTABS]

>[!TAB Cloud Service]

구성 파일을 만들려면 [구성 재정의](download-install-config-override.md#)의 지침을 사용하십시오. 구성 파일에서 다음 \(property\) 세부 정보를 입력하여 닫을 때 파일을 체크 인하라는 메시지를 구성합니다.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.checkin` | 부울 \( true/ false\).<br> **기본값**: false |

이 구성을 사용하면 대화 상자에서 기본적으로 **파일 잠금 해제** 확인란이 선택됩니다.

자세한 내용은 Adobe Experience Manager Guides as a Cloud Service 사용 안내서의 *파일 닫기 및 저장 시나리오* 섹션을 참조하십시오.

>[!TAB 온-프레미스]

>[!NOTE]
>
>**파일 잠금 해제** 확인란은 기본적으로 활성화되어 있지 않으므로 configMgr에서 활성화해야 합니다. 웹 편집기에서 기본적으로 옵션을 활성화하려면 다음 단계를 수행하십시오.

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** 번들을 검색하고 클릭합니다.

1. **닫을 때 체크 인 요청** 옵션을 선택합니다.

1. **저장**&#x200B;을 클릭합니다.


이 구성을 사용하면 대화 상자에서 기본적으로 **파일 잠금 해제** 확인란이 선택됩니다.

자세한 내용은 Adobe Experience Manager Guides as a Cloud Service 사용 안내서의 *파일 닫기 및 저장 시나리오* 섹션을 참조하십시오.

>[!ENDTABS]

**상위 항목:**[&#x200B;웹 편집기 사용자 지정](customize-overview.md)
