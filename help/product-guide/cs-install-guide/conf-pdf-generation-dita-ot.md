---
title: 단일 주제 PDF 생성 구성
description: 단일 주제 PDF 생성을 구성하는 방법에 대해 알아봅니다.
exl-id: 5b66fd3b-6450-49ce-b06e-d2d5bab37990
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '268'
ht-degree: 0%

---

# 단일 주제 PDF 생성 구성 {#id22ADC70M0XA}

AEM Guides을 사용하면 개별 주제 PDF 또는 전체 맵 파일을 생성할 수 있습니다. 기본 PDF 또는 DITA-OT 메서드를 사용하여 PDF 형식으로 주제를 게시할 수 있습니다. 기본 PDF 방법을 사용하여 W3C CSS3 및 CSS 페이지 미디어 표준을 기반으로 하는 기능이 풍부한 PDF 출력을 생성합니다. DITA-OT 메서드를 사용하여 맵 대시보드에서 맵에 대한 PDF 출력을 생성할 수 있습니다.

>[!NOTE]
>
> 기본 PDF은 현재 버전의 AEM Guides에서 PDF을 생성하는 기본 방법입니다.

주제 미리 보기 모드에서 DITA-OT를 통해 이전 PDF 생성을 활성화하려면 다음 단계를 수행합니다.

1. Adobe Experience Manager에 관리자로 로그인하고 UI 구성 파일을 다운로드합니다.

1. 이렇게 하려면 상단의 Adobe Experience Manager 링크를 클릭하고 **도구**&#x200B;를 선택하십시오.
1. 도구 목록에서 **안내서**&#x200B;를 선택하고 **폴더 프로필**&#x200B;을 클릭합니다.
1. **전역 프로필** 타일을 클릭합니다.
1. **XML 편집기 구성** 탭을 선택하고 상단의 **편집** 아이콘을 클릭합니다
1. **다운로드** 아이콘을 클릭하여 로컬 시스템에서 ui\_config.json 파일을 다운로드합니다. 그런 다음 파일을 변경한 다음 동일한 파일을 업로드할 수 있습니다.
1. `ui_config.json` 파일에서 다음 구성을 찾습니다.

   ```
   {
                           "component": "button",
                           "variant": "action",
                           "quiet": true,
                           "icon": "filePDF",
                           "title": "Download as PDF",
                           "on-click": "EDITOR_SAVE_AS_PDF"
                           }
   ```

   바꿀 내용:

   ```
   {
                           "component": "button",
                           "icon": "filePDF",
                           "variant": "action",
                           "quiet": true, "title": "Export as PDF",
                           "on-click": "DOWNLOAD_TOPIC_PDF",
                           "show" : ["@isPreviewMode", "@isXmlMode"]
                           }
   ```

1. 파일을 저장하고 업로드합니다.

위의 단계를 수행한 후 웹 편집기의 사용자 환경 설정에서 동일한 폴더 프로필을 선택하면 주제의 미리 보기 모드에서 PDF 생성 옵션이 표시됩니다.

**상위 항목:**[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
