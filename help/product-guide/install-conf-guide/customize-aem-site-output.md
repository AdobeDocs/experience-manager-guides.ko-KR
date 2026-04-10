---
title: 출력 생성 설정 구성
description: 출력 생성 설정을 구성하는 방법 알아보기
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '3098'
ht-degree: 0%

---


# AEM 사이트 출력 사용자 지정 {#id166TG0B30WR}

AEM Guides은 다음 형식의 출력 만들기를 지원합니다.

- AEM 사이트
- PDF
- HTML5
- EPUB
- DITA-OT를 통한 사용자 지정 출력

AEM 사이트 출력의 경우 서로 다른 출력 작업이 있는 서로 다른 디자인 템플릿을 할당할 수 있습니다. 이러한 디자인 템플릿은 DITA 콘텐츠를 다른 레이아웃으로 렌더링할 수 있습니다. 예를 들어 내부 및 외부 대상에 대해 서로 다른 디자인 템플릿을 지정할 수 있습니다.

AEM Guides에서 사용자 지정된 DITA Open Toolkit \(DITA-OT\) 플러그인을 사용할 수도 있습니다. 이러한 사용자 지정 DITA-OT 플러그인을 업로드하여 특정 방식으로 PDF 출력을 생성할 수 있습니다.

>[!TIP]
>
> AEM 사이트 출력 만들기에 대한 모범 사례는 *모범 사례 안내서*&#x200B;의 [AEM 사이트 게시](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/cs-mar-22/Adobe-Experience-Manager-Guides_Best-Practices_EN.pdf) 섹션을 참조하십시오.


## 출력 생성을 위한 디자인 템플릿 맞춤화 {#customize_xml-add-on}

AEM Guides에서는 사전 정의된 디자인 템플릿 세트를 사용하여 AEM 사이트 출력을 생성합니다. AEM Guides 디자인 템플릿을 사용자 지정하여 회사 브랜딩에 맞는 출력을 생성할 수 있습니다. 디자인 템플릿은 다양한 스타일 \(CSS\), 스크립트 \(서버측과 클라이언트측\), 리소스 \(이미지, 로고 및 기타 에셋\) 및 이러한 모든 리소스를 하나로 묶는 JCR 노드의 컬렉션입니다. 디자인 템플릿은 두 개의 JCR 노드만 사용하거나 스타일, 리소스 및 JCR 노드의 복잡한 조합을 사용하는 단일 서버측 스크립트처럼 단순할 수 있습니다. 디자인 템플릿은 AEM Guides Site 출력을 생성하는 동안 AEM 게시 하위 시스템에서 사용되며 생성된 출력의 구조, 모양 및 느낌을 제어합니다.

서버에서 디자인 템플릿 리소스를 배치해야 하는 위치에는 제한이 없지만, 일반적으로 함수에 따라 논리적으로 구성됩니다. 예를 들어 기본 템플릿의 모든 JavaScript 및 CSS 파일이 `/etc/designs/fmdita/clientlibs/siteoutput/default` 폴더에 저장되어 있습니다. 이러한 파일은 위치에 관계없이 JCR 노드 컬렉션에 의해 함께 연결됩니다. 이러한 JCR 노드와 파일은 함께 전체 디자인 템플릿을 구성합니다.

AEM Guides과 함께 제공되는 기본 디자인 템플릿을 사용하면 랜딩, 주제 및 검색 페이지 구성 요소를 사용자 정의할 수 있습니다. 기본 설계와 해당 참조 템플릿의 복사본을 만들고 다른 구성 요소를 지정하여 원하는 출력을 생성할 수 있습니다.

Experience Manager Guides 설정을 기반으로 AEM 사이트 출력 생성에 사용할 디자인 템플릿을 지정하는 지침을 제공하는 탭은 Cloud Service 또는 온프레미스입니다.

>[!BEGINTABS]

>[!TAB Cloud Service]

1. 패키지 관리자를 사용하여 다음 위치에서 기본 디자인 템플릿을 다운로드합니다.

   /libs/fmdita/config/templates

1. Cloud Manager의 Git 저장소의 다음 위치에 다운로드한 파일의 복사본을 만듭니다.

   /apps/fmdita/config/templates

1. 또한 기본 템플릿 노드에서 참조된 템플릿을 다운로드하여 복사해야 합니다. 참조된 템플릿은 다음 아래에 배치됩니다.

   /libs/fmdita/templates/default/cqtemplates

>[!TAB 온-프레미스]

1. AEM에 로그인한 다음 CRXDE Lite 모드를 엽니다.

1. 기본 디자인 템플릿 노드로 이동합니다. 기본 디자인 템플릿 노드의 위치는 다음과 같습니다.

   `/libs/fmdita/config/templates/`

   ![](assets/templates-node.png){width="300" align="left"}

   >[!NOTE]
   >
   > `libs` 폴더에서 `apps` 폴더로 기본 디자인 서식 파일을 복사하고 `apps` 폴더를 변경합니다. 기본 템플릿 노드에서 참조된 템플릿도 변경해야 합니다. 참조된 템플릿이 `/libs/fmdita/templates/default/cqtemplates` 노드 아래에 배치되었습니다. 변경하기 전에 `apps` 폴더에서 참조된 템플릿을 복사하십시오.

1. *템플릿* 노드에서 *기본* 구성 요소를 클릭하여 해당 속성에 액세스합니다.

>[!ENDTABS]

다음 표에서는 AEM Guides 디자인 템플릿 속성에 대해 설명합니다.

| 속성 | 설명 |
|--------|-----------|
| `landingPageTemplate`, `searchPageTemplate`, `topicPageTemplate`, `shadowPageTemplate` | 해당 페이지 \(랜딩, 검색 및 항목\)에 대한 `cq:Template` 노드를 지정하십시오. 기본적으로 이러한 페이지에 대한 `cq:Template` 노드는 `/libs/fmdita/templates/default/cqtemplates` 노드에서 찾을 수 있습니다. 이 노드는 랜딩, 검색 및 주제 페이지의 구조 및 속성을 정의합니다.<br> `shadowPageTemplate`은(는) 청크된 콘텐츠를 최적화하는 데 사용됩니다. 이 속성의 값을 다음으로 설정해야 합니다. `fmdita/templates/default/cqtemplates/shadowpage` <br> **참고:** `topicPageTemplate`에 대한 값을 지정해야 합니다. `landingPageTemplate` 및 `searchPageTemplate`은(는) 선택적 속성입니다. 검색 및 랜딩 페이지를 생성하지 않으려면 이러한 속성을 지정하지 마십시오. |
| `title` | 디자인 서식 파일을 설명하는 이름입니다. |
| `topicContentNode` | 주제 페이지의 DITA 컨텐트를 포함할 노드의 위치입니다. 경로는 주제 페이지를 기준으로 합니다. |
| `topicHeadNode` | DITA 콘텐츠에서 파생된 헤드 값 \(또는 메타데이터\)을 포함할 노드의 위치입니다. 경로는 주제 페이지를 기준으로 합니다. |
| `tocNode` | 목차를 포함할 노드의 위치입니다. 경로는 랜딩 페이지 또는 대상 경로를 기준으로 합니다. |
| `basePathProp` | 게시된 사이트의 루트 경로를 저장하는 속성 이름입니다. |
| `indexPathProp` | 게시된 사이트의 랜딩/인덱스 페이지 경로를 저장하는 속성 이름입니다. |
| `pdfPathProp` | 주제 PDF 생성이 활성화된 경우 주제 PDF 경로를 저장하기 위한 속성 이름입니다. |
| `pdfTypeProp` | PDF 생성 유형을 저장하는 속성 이름입니다. 현재 이 속성은 항상 &quot;Topic&quot;을 포함합니다. |
| `searchPathProp` | 템플릿에 검색 페이지가 포함된 경우 검색 페이지의 경로를 저장하는 속성 이름입니다. |
| `siteTitleProp` | 게시 중인 사이트의 제목을 저장하는 속성 이름입니다. 이 제목은 일반적으로 게시 중인 맵의 제목과 동일합니다. |
| `sourcePathProp` | 현재 페이지의 소스 DITA 주제 경로를 저장하는 속성 이름입니다. |
| `tocPathProp` | 게시된 사이트에 대한 목차 루트 경로를 저장하는 속성 이름입니다. |


>[!NOTE]
>
> 사용자 지정 디자인 템플릿 노드를 만든 후 AEM 사이트 출력 사전 설정에서 디자인 옵션을 업데이트하여 사용자 지정 디자인 템플릿 노드를 사용해야 합니다.

자세한 내용은 [첫 번째 Adobe Experience Manager 웹 사이트 만들기](https://experienceleague.adobe.com/docs/experience-manager-learn/getting-started-wknd-tutorial-develop/overview.html?lang=en) 및 AEM에서 자체 웹 사이트 개발 [기본 사항](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/implementing/developing/full-stack/develop-wknd-tutorial.html?lang=en)을 참조하십시오.

## AEM 사이트 출력 생성에 문서 제목 사용

AEM 사이트 출력을 생성할 때 URL을 생성하는 방식은 콘텐츠의 검색 기능에 중요한 역할을 합니다. UUID 기반 파일 이름을 사용하는 경우 파일의 UUID를 기반으로 URL을 생성하면 검색하기 쉽지 않습니다. 관리자 또는 게시자는 AEM 사이트 출력의 URL을 생성하는 방법을 제어할 수 있습니다. AEM Guides은 UUID 기반 파일 이름이 아닌 파일의 제목을 사용하여 AEM 사이트 출력의 URL을 생성하도록 선택할 수 있는 구성을 제공합니다. 기본적으로 UUID 기반 파일 시스템의 경우 이 옵션이 켜져 있습니다. 이는 UUID 기반 파일 시스템에 대해 AEM 사이트 출력을 생성할 때 파일 제목이 파일의 UUID가 아닌 URL을 생성하는 데 사용됨을 의미했습니다.

비 UUID 기반 파일 시스템을 사용하는 온-프레미스 설정의 경우 AEM 사이트 출력은 파일 제목이 아닌 파일 이름을 사용하여 생성됩니다. 기본적으로 이 옵션은 꺼져 있습니다. 이는 AEM 사이트 출력을 생성할 때 파일 이름이 파일 제목이 아닌 URL을 생성하는 데 사용됨을 의미했습니다. 이 옵션을 활성화하여 파일의 제목을 기반으로 URL을 생성하도록 선택할 수 있습니다.

Experience Manager Guides 설정을 기반으로 AEM 사이트 출력에서 URL 생성을 구성하는 지침은 Cloud Service 또는 온프레미스입니다.

>[!NOTE]
>
> AEM 사이트 출력의 URL에 문자 집합만 허용하도록 규칙을 추가로 구성할 수 있습니다. 자세한 내용은 [항목을 만들고 AEM 사이트 출력을 게시하기 위한 파일 이름 정리 규칙 구성](#id2164D0KD0XA)을 참조하십시오.

>[!BEGINTABS]

>[!TAB Cloud Service]

구성 파일을 만들려면 [구성 재정의](download-install-config-override.md#)의 지침을 사용하십시오. 구성 파일에서 다음 \(property\) 세부 정보를 입력하여 AEM 사이트 출력의 URL 생성을 구성합니다.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `aemsite.pagetitle` | 부울 \(true/false\). 페이지 제목을 사용하여 출력을 생성하려는 경우 이 속성을 true로 설정합니다. 기본적으로 파일 이름을 사용하도록 설정되어 있습니다.<br> **기본값**: false |


>[!TAB 온-프레미스]

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** 번들을 검색하고 클릭합니다.

1. **AEM 사이트 페이지 이름에 제목 사용** 옵션을 선택하십시오.

   >[!NOTE]
   >
   > 파일 이름을 사용하여 출력을 생성하려면 이 옵션을 선택 취소합니다.

1. **저장**&#x200B;을 클릭합니다.

>[!ENDTABS]

## 문서 제목을 사용하도록 AEM 사이트 출력의 URL을 구성합니다(Cloud Service의 경우에만).

AEM 사이트 출력의 URL에서 문서 제목을 사용할 수 있습니다. 파일 이름이 존재하지 않거나 모든 특수 문자가 포함되어 있는 경우 AEM 사이트 출력의 URL에서 특수 문자를 구분 기호로 대체하도록 시스템을 구성할 수 있습니다. 첫 번째 하위 항목의 이름으로 바꾸도록 구성할 수도 있습니다.


페이지 이름을 구성하려면 다음 단계를 수행하십시오.

1. 구성 파일을 만들려면 [구성 재정의](download-install-config-override.md#)의 지침을 사용하십시오.
1. 구성 파일에서 다음(등록 정보) 세부 정보를 제공하여 주제에 대한 페이지 이름을 구성합니다.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.common.SanitizeNodeName` | `nodename.systemDefinedPageName` | 부울(`true/false`). **기본값**: `false` |

예를 들어 *의*@navtitle`<topichead>`에 모든 특수 문자가 있고 `aemsite.pagetitle` 속성을 true로 설정한 경우 기본적으로 구분 기호를 사용합니다. `nodename.systemDefinedPageName` 속성을 true로 설정하면 첫 번째 자식 주제의 이름이 표시됩니다.


## AEM Sites 및 기타 형식으로 항목을 만들고 출력을 게시하기 위한 파일 이름 정리 규칙 구성 {#id2164D0KD0XA}

관리자는 파일 이름에 사용할 수 있는 유효한 특수 문자 목록을 정의하여 AEM 사이트 출력의 URL을 형성할 수 있습니다. 이전 릴리스에서는 사용자가 `@`, `$`, `>` 등의 특수 문자가 포함된 파일 이름을 정의할 수 있었습니다. 이러한 특수 문자로 인해 AEM 사이트 페이지가 생성될 때 URL이 인코딩되었습니다.

3.8 릴리스부터 파일 이름에 사용할 수 있는 특수 문자 목록을 정의하는 구성이 추가되었습니다. 기본적으로 올바른 파일 이름 구성에는 &quot;`a-z A-Z 0-9 - _`&quot;이(가) 포함되어 있습니다. 이는 파일을 만드는 동안 파일 제목에 특수 문자를 사용할 수 있지만 내부적으로 파일 이름에 하이픈 \(`-`\)으로 대체됩니다. 예를 들어 파일 제목을 Introduction 1 또는 Introduction@1으로 지정할 수 있습니다. 이 두 경우에 대해 생성되는 해당 파일 이름은 Introduction-1입니다.

올바른 문자 목록을 정의할 때 이러한 문자 &quot;`*/:[\]|#%{}?&<>"/+`&quot; 및 `a space`은(는) 항상 하이픈 \(`-`\)으로 대체됩니다.

>[!NOTE]
>
> 유효한 특수 문자 목록을 구성하지 않으면 파일 생성 프로세스에서 예기치 않은 결과가 발생할 수 있습니다.

Experience Manager Guides 설정을 기반으로 파일 이름 및 AEM 사이트 출력에 유효한 특수 문자를 구성하는 지침은 Cloud Service 또는 온프레미스입니다.

>[!BEGINTABS]

>[!TAB Cloud Service]

구성 파일을 만들려면 [구성 재정의](download-install-config-override.md#)의 지침을 사용하십시오. 구성 파일에서 다음 \(property\) 세부 정보를 제공하여 파일 이름 및 AEM 사이트 출력에 유효한 특수 문자를 구성하십시오.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.common.SanitizeNodeNameImpl` | `aemsite.DisallowedFileNameChars` | 속성이 ``'<>`@$``(으)로 설정되어 있는지 확인하십시오. 이 목록에 더 많은 특수 문자를 추가할 수 있습니다. |

>[!NOTE]
> 
> 위의 구성은 모든 출력 형식에 적용됩니다. 즉, PDF, HTML 또는 사용자 지정 출력을 생성할 때 최종 출력은 구성된 파일 이름 정리 규칙을 따릅니다.

파일 이름에서 소문자 사용, 잘못된 문자를 처리하는 구분 기호, 파일 이름에 사용할 수 있는 최대 문자 수와 같은 다른 속성을 구성할 수도 있습니다. 이러한 속성을 구성하려면 구성 파일에 다음 키 값 쌍을 추가합니다.

| 속성 키 | 속성 값 |
|------------|--------------|
| `nodename.uselower` | 부울 \(true/false\).<br> **기본값**: true |
| `nodename.separator` | 모든 문자 <br> **기본값**: \_ *\(밑줄\)* |
| `nodename.maxlength` | 정수 값입니다.<br> **기본값**: 50 |

>[!TAB 온-프레미스]

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.common.SanitizeNodeNameImpl* 번들을 검색하고 클릭합니다.

1. **AEM Sites에 게시하는 데 허용되지 않는 문자 집합** 속성에서 속성이 ```'<>`@$```(으)로 설정되어 있는지 확인하십시오. 이 목록에 더 많은 특수 문자를 추가할 수 있지만 필수 특수 문자가 있어야 합니다.

   >[!NOTE]
   >
   > 파일 이름에 **소문자 사용**, 잘못된 문자를 처리하는 **구분 기호**, 파일 이름에 허용되는 **최대 문자 수**&#x200B;와 같은 다른 속성을 구성할 수도 있습니다.

1. **저장**&#x200B;을 클릭합니다.

1. **com.adobe.fmdita.config.ConfigManager** 번들을 검색하고 클릭합니다.

1. **Regex for Valid Characters** 속성에서 속성이 `[-a-zA-Z0-9_]`(으)로 설정되어 있는지 확인하십시오. 이 목록에 더 많은 문자를 추가할 수 있지만 기본 문자가 있어야 하며 목록은 하이픈 \(`-`\)으로 시작해야 합니다.

   >[!NOTE]
   >
   > 이 속성은 새 파일을 만드는 데 사용되는 유효한 문자 목록을 정의합니다.

1. **저장**&#x200B;을 클릭합니다.

>[!ENDTABS]

## AEM 사이트 노드 구조의 평면화 구성

AEM 사이트 출력을 생성하면 주제의 모든 요소에 대한 노드가 내부적으로 생성됩니다. 수천 개의 주제가 있는 DITA 맵의 경우 이 노드 구조가 너무 깊어질 수 있습니다. 이러한 유형의 깊게 중첩된 노드 구조는 더 큰 사이트에 대해 성능 문제가 발생할 수 있습니다. 다음 스냅샷은 AEM 사이트 출력에 대해 깊게 중첩된 노드 구조를 표시합니다.

![](assets/deep-nested-aem-site-node-structure.png)

위의 스냅숏에서는 모든 `p` 요소 및 후속 하위 요소에 대해 노드가 만들어지고 주제에 사용되는 다른 모든 요소에 대해 유사한 구조가 만들어지는 것을 확인합니다.

AEM Guides을 사용하면 AEM 사이트 출력의 노드 구조를 내부적으로 만드는 방법을 구성할 수 있습니다. 지정된 요소에서 노드 구조를 평면화할 수 있습니다. 즉, 주 요소로 간주될 요소를 정의할 수 있으며 해당 요소 내의 모든 하위 요소가 주 요소와 병합됩니다. 예를 들어 `p` 요소를 병합하기로 결정한 경우 `p` 요소 내에 나타나는 모든 요소는 기본 `p` 요소와 병합됩니다. `p` 요소 내의 하위 요소에 대해서는 별도의 메모가 만들어지지 않습니다. 다음 스냅숏은 `p` 요소에서 병합된 노드 구조를 표시합니다.

![](assets/flattened-aem-site-node-structure.png)

AEM 설정을 기반으로 Experience Manager Guides 사이트 노드 구조를 평면화하기 위한 지침을 제공하는 탭은 Cloud Service 또는 온프레미스입니다.

>[!BEGINTABS]

>[!TAB Cloud Service]

1. 노드 구조를 평면화할 요소를 식별합니다.

1. `libs` 노드의 `apps` 노드를 오버레이하고 elementmapping.xml 파일을 엽니다.

1. 노드 구조를 평면화할 요소의 정의에 `<flatten>true</flatten>` 속성을 추가합니다. 예를 들어 `p` 요소에서 노드 구조를 병합하려면 아래와 같이 `p` 요소의 정의에 병합된 특성을 추가합니다.

   ```XML
   <ditaelement>
         <name>p</name>
         <class>- topic/p</class>
         <componentpath>fmdita/components/dita/wrapper</componentpath>
         <type>COMPOSITE</type>
         <target>para</target>
         <flatten>true</flatten>
         <wrapelement>div</wrapelement>
      </ditaelement>
   ```

   >[!NOTE]
   >
   > 기본적으로 `p` 요소에 플랫 노드 속성이 구성되었습니다.

1. 구성 파일을 만들려면 [구성 재정의](download-install-config-override.md#)의 지침을 사용하십시오.
1. 구성 파일에서 다음 \(property\) 세부 정보를 제공합니다.

   | PID | 속성 키 | 속성 값 |
   |---|------------|--------------|
   | `com.adobe.dxml.flattening.FlatteningConfigurationService` | `flattening.enabled` | 부울 \(true/false\).<br> **기본값**: `false` |


이제 AEM 사이트 출력을 생성하면 `p` 요소 내의 노드가 병합되어 `p` 요소 자체에 저장됩니다. CRXDE에서 `p` 요소에 대한 새 병합 속성을 찾을 수 있습니다.

![](assets/flatten-aem-site-note-props-crxde.png)

>[!TAB 온-프레미스]

1. 노드 구조를 평면화할 요소를 지정합니다.

   1. `libs` 노드의 `apps` 노드를 오버레이하고 elementmapping.xml 파일을 엽니다.

   1. 노드 구조를 평면화할 요소의 정의에 `<flatten>true</flatten>` 속성을 추가합니다. 예를 들어 `p` 요소에서 노드 구조를 병합하려면 아래와 같이 `p` 요소의 정의에 병합된 특성을 추가합니다.

      ```XML
      <ditaelement>
          <name>p</name>
          <class>- topic/p</class>
          <componentpath>fmdita/components/dita/wrapper</componentpath>
          <type>COMPOSITE</type>
          <target>para</target>
          <flatten>true</flatten>
          <wrapelement>div</wrapelement>
      </ditaelement>
      ```

      >[!NOTE]
      >
      > 기본적으로 `p` 요소에 플랫 노드 속성이 구성되었습니다.

1. configMgr에서 사이트 노드 병합 구성을 사용하도록 설정합니다.

   1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

      구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

      ```http
      http://<server name>:<port>/system/console/configMgr
      ```

   1. *com.adobe.dxml.flattening.FlatteningConfigurationService* 번들을 검색하고 클릭합니다.

   1. **Property flattening.enabled** 옵션을 선택하십시오.

   1. **저장**&#x200B;을 클릭합니다.


>[!IMPORTANT]
>
> elementmapping.xml 파일을 변경한 경우 configMgr을 열고 변경 내용을 적용할 번들을 저장해야 합니다.

이제 AEM 사이트 출력을 생성하면 `p` 요소 내의 노드가 병합되어 `p` 요소 자체에 저장됩니다. CRXDE에서 `p` 요소에 대한 새 병합 속성을 찾을 수 있습니다.

![](assets/flatten-aem-site-note-props-crxde.png){width="650" align="left"}

>[!ENDTABS]

**AEM 사이트 출력의 콘텐츠 내에서 문자열을 검색합니다(Cloud Service에만 해당)**

기본적으로 AEM 사이트 출력 내에서만 제목의 문자열을 검색할 수 있습니다. 제목과 AEM 사이트 출력의 콘텐츠 또는 본문에서 문자열을 검색하도록 시스템을 구성할 수 있습니다.

>[!NOTE]
>
> 검색은 콘텐츠의 일부 요소에 대해 작동할 수도 있지만, 전체 콘텐츠에 대해 작동하도록 구성할 수 있습니다.

![](assets/flatten-aem-site-note-props-crxde-search.png)

검색을 활성화하려면 AEM 사이트 노드 구조의 병합을 구성해야 합니다.

주의:

병합된 콘텐츠를 최대 1MB까지 검색할 수 있습니다. 예를 들어 이전 스크린샷에서 &lt;p\> 태그 아래의 컨텐츠가 1Mb 미만인지 검색할 수 있습니다.

>[!NOTE]
>
> `<flatten>` 특성이 true로 설정된 경우에만 요소에서 검색이 작동합니다. 기본적으로 AEM Guides에는 &lt;p\> &lt;ul\> &lt;lI\>과 같이 일반적으로 사용되는 텍스트 요소에 대해 `<flatten>` 특성이 true로 설정되어 있습니다. 그러나 사용자 지정 요소를 만든 경우 elementmapping.xml 파일에서 `<flatten>` 특성을 true로 설정해야 합니다.

**AEM 사이트 노드 구조의 병합을 방지합니다**

AEM 사이트 출력에서 평면화할 노드를 지정하는 것과 마찬가지로 이 구성에서 제외할 요소를 지정할 수도 있습니다. 예를 들어 `body` 요소의 노드를 병합하려고 하지만 `table` 내의 `body` 요소를 병합하지 않으려는 경우 `table` 요소의 정의 내에 exclude 속성을 추가할 수 있습니다.

병합에서 `table` 요소를 제외하려면 `table` 요소의 정의에 다음 속성을 추가하십시오.

`<preventancestorflattening>true|false</preventancestorflattening>`

## AEM 사이트 출력에서 삭제된 페이지에 대한 버전 관리 구성

기존 출력 페이지 설정에 대해 **삭제 및**&#x200B;만들기&#x200B;****옵션이 선택된 AEM 사이트 출력을 생성하면 삭제되는 페이지에 대한 버전이 만들어집니다. 삭제하기 전에 버전 생성을 중단하도록 시스템을 구성할 수 있습니다.

Experience Manager Guides 설정에 따라 삭제되는 페이지의 버전 만들기를 중지하는 지침을 제공합니다. Cloud Service 또는 온프레미스.

>[!BEGINTABS]

>[!TAB Cloud Service]

1. 구성 파일을 만들려면 [구성 재정의](download-install-config-override.md#)의 지침을 사용하십시오.
1. 구성 파일에서 다음 \(property\) 세부 정보를 제공하여 **삭제된 페이지에 대한 버전을 만들지 않음** 옵션을 구성하십시오.

   | PID | 속성 키 | 속성 값 |
   |---|------------|--------------|
   | `com.adobe.fmdita.confi g.ConfigManager` | `no.version.creation.on.deletion` | 부울 \(true/false\).<br> **기본값**: `true` |

   >[!NOTE]
   >
   > 이 옵션을 선택하면 사용자는 자신의 버전을 작성하지 않고도 원하는 페이지를 직접 삭제할 수 있습니다. 옵션을 선택하지 않으면 페이지가 삭제되기 전에 버전이 작성됩니다.

>[!TAB 온-프레미스]

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* 번들을 검색하고 클릭합니다.

1. **삭제된 페이지에 대한 버전을 만들지 않음** 옵션을 선택합니다.

   >[!NOTE]
   >
   > 이 옵션을 선택하면 사용자는 자신의 버전을 작성하지 않고도 원하는 페이지를 직접 삭제할 수 있습니다. 옵션을 선택하지 않으면 페이지가 삭제되기 전에 버전이 작성됩니다.

1. **저장**&#x200B;을 클릭합니다.

>[!ENDTABS]

## Experience Manager Guides으로 사용자 지정 재작성기 설정(Cloud Service에만 해당) {#custom-rewriter}

Experience Manager Guides에는 교차 맵(서로 다른 두 맵의 주제 간 링크)의 경우 생성되는 링크를 처리하기 위한 사용자 지정 sling [**rewriter**](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html) 모듈이 있습니다. 이 재작성기 구성은 다음 경로에 설치됩니다. <br> `/apps/fmdita/config/rewriter/fmdita-crossmap-link-patcher`

코드베이스에 다른 사용자 지정 sling 재작성기가 있는 경우, Experience Manager Guides sling 재작성기는 `'order'` 50을 사용하므로 50보다 큰 `'order'` 값을 사용하십시오.  재정의하려면 50 이상의 값이 필요합니다. 자세한 내용은 [출력 다시 쓰기 파이프라인](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html)을 참조하십시오.



