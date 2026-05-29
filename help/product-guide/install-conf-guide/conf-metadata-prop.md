---
title: 메타데이터 속성 무시 목록 구성
description: AEM Guides에서 메타데이터 속성에 대한 무시 목록을 구성하는 방법을 알아봅니다.
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 8e8b24bea8504ad9fcca1117bd9e7b400e757dff
workflow-type: tm+mt
source-wordcount: '251'
ht-degree: 0%

---

# 메타데이터 속성 무시 목록 구성

파일을 편집할 때 **파일 속성**&#x200B;에서 사용하거나 백엔드에서 적용하는 메타데이터 필드의 변경 사항은 문서 버전에서 별표(*)를 트리거합니다. 시스템에서 생성한 메타데이터 업데이트가 이 지표에 영향을 주지 않도록 하기 위해 관리자는 메타데이터 속성에 대한 무시 목록을 구성할 수 있습니다.

>[!BEGINTABS]

>[!TAB Cloud Service]

구성 파일을 만들려면 [구성 재정의](download-install-config-override.md#)의 지침을 사용하십시오. 구성 파일에서 **더티 버전에 대한 메타데이터 속성 무시** 옵션을 구성하기 위해 다음(속성) 세부 정보를 제공합니다.


| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.dirtychecker.ignoremetadata` | `<comma-separated list / array of metadata properties>` |

>[!TAB 온-프레미스]

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** 번들을 검색하고 클릭합니다.

1. *XmlEditorConfig* 설정에서 **더티 버전에 대한 메타데이터 속성 무시** 옵션으로 이동합니다.

   현재 무시하도록 구성된 기본 메타데이터 속성 목록을 검토하십시오.

1. 요구 사항에 따라 메타데이터 속성을 추가하거나 제거합니다.
1. 업데이트된 구성을 저장하려면 **저장**&#x200B;을 선택하십시오.


>[!ENDTABS]

## 무시 목록의 기본 메타데이터 속성

AEM Guides에는 무시 목록에 기본 메타데이터 속성 세트가 포함되어 있습니다. 이 목록을 수정하여 필요에 따라 메타데이터 속성을 추가하거나 제거할 수 있습니다.

* &quot;jcr:mixinTypes&quot;
* &quot;jcr:primaryType&quot;
* &quot;jcr:frozenMixinTypes&quot;
* &quot;jcr:frozenPrimaryType&quot;
* &quot;jcr:frozenUuid&quot;
* &quot;jcr:uuid&quot;
* &quot;dam:extracted&quot;
* &quot;jcr:lastModified&quot;
* &quot;jcr:lastModifiedBy&quot;
* &quot;dc:modified&quot;,
* &quot;dam:sha1&quot;
* &quot;dam:size&quot;
* &quot;안내서:wordCount&quot;,
* &quot;dam:scene7UploadTimeStamp&quot;
* &quot;dam:scene7LastModified&quot;

무시 목록에 포함되지 않은 메타데이터 속성만 문서 버전을 더티(dirty)하게 표시할 수 있습니다.

**상위 항목:**[&#x200B;웹 편집기 사용자 지정](customize-overview.md)
