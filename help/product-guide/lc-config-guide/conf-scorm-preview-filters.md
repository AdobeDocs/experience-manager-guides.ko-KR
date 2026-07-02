---
title: SCORM 미리 보기 필터 구성
description: SCORM 미리 보기 필터를 구성하는 방법 알아보기
feature: Configuration
role: Admin
level: Experienced
source-git-commit: f5b7ae41fe63b31a3b45b38fc73976987a2a5ebe
workflow-type: tm+mt
source-wordcount: '344'
ht-degree: 3%

---

# SCORM 미리 보기 구성

이 문서에서는 SCORM 미리 보기 출력에 스타일시트, 이미지, 글꼴, 미디어 및 임베드된 콘텐츠를 제공할 수 있는 외부 도메인을 관리하도록 Experience Manager Guides SCORM 미리 보기를 구성하는 방법에 대해 설명합니다. 다음 단계에서는 사용 중인 설정에 따라 SCORM 미리 보기에 대한 다양한 필터를 구성하는 방법을 설명합니다.

>[!BEGINTABS]

>[!TAB Cloud Service]

1. 구성 파일을 만들려면 [구성 재정의](../install-conf-guide/download-install-config-override.md)의 지침을 사용하십시오.

1. 구성 파일에서 다음 속성 세부 사항을 제공합니다.

   | PID | 속성 키 | 기본 값 |
   |---|---|---|
   | `com.adobe.fmdita.publishworkflow.ScormPreviewResponseFilter` | `additional.style.src` | `https://fonts.googleapis.com` |
   | `com.adobe.fmdita.publishworkflow.ScormPreviewResponseFilter` | `additional.img.src` | - |
   | `com.adobe.fmdita.publishworkflow.ScormPreviewResponseFilter` | `additional.font.src` | `https://fonts.gstatic.com` |
   | `com.adobe.fmdita.publishworkflow.ScormPreviewResponseFilter` | `additional.media.src` | - |
   | `com.adobe.fmdita.publishworkflow.ScormPreviewResponseFilter` | `additional.frame.src` | `https://www.youtube-nocookie.com`, `https://www.youtube.com` |


1. 구성 파일을 저장하고 Cloud Service 환경에 배포합니다.

저장되면 SCORM 미리보기가 업데이트된 도메인 허용 목록에 추가하다를 적용하기 시작합니다. 이 구성에 추가되지 않은 도메인의 외부 리소스는 미리보기에서 사용할 수 없습니다.

>[!NOTE]
>
> 이는 미리보기 환경에만 적용됩니다. 다운로드 가능한 SCORM 패키지는 모든 작성된 콘텐츠를 의도한 대로 계속 전달합니다.


>[!TAB 온-프레미스]

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **Guides SCORM 미리 보기 필터(com.adobe.fmdita.publishworkflow.ScormPreviewResponseFilter)** 번들을 검색하고 선택합니다.

   ![](assets/scorm-preview-filters.png){width="600"}


1. 필요에 따라 번들 구성에서 각 리소스 유형에 대해 허용되는 도메인 URL을 추가합니다.

   | 필드 | 설명 |
   |---|---|
   | **추가 style-src 호스트** | 외부 CSS 스타일시트가 로드되도록 승인된 도메인입니다(기본적으로 `https://fonts.googleapis.com`). |
   | **추가 image-src 호스트** | 외부 이미지가 로드되도록 승인된 도메인입니다. |
   | **추가 font-src 호스트** | 외부 글꼴 파일(OTF, WOFF 등)이 로드되도록 승인된 도메인입니다(기본적으로 `https://fonts.gstatic.com`). |
   | **추가 media-src 호스트** | 외부 미디어 파일이 로드되도록 승인된 도메인입니다. |
   | **추가 frame-src 호스트** | iframe 콘텐츠를 포함할 수 있는 권한이 있는 도메인입니다(기본적으로 YouTube 비디오 임베드를 허용하려면 `https://www.youtube.com`). |

1. **저장**&#x200B;을 선택합니다.

저장되면 SCORM 미리보기가 업데이트된 도메인 허용 목록에 추가하다를 적용하기 시작합니다. 이 구성에 추가되지 않은 도메인의 외부 리소스는 미리보기에서 사용할 수 없습니다.

>[!NOTE]
>
> 이는 미리보기 환경에만 적용됩니다. 다운로드 가능한 SCORM 패키지는 모든 작성된 콘텐츠를 의도한 대로 계속 전달합니다.

>[!ENDTABS]