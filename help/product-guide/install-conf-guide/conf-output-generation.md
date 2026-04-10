---
title: 출력 생성 설정 구성
description: 출력 생성 설정을 구성하는 방법 알아보기
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '3314'
ht-degree: 1%

---

# 출력 생성 설정 구성 {#id181AI0B0E30}

AEM Guides에는 출력 생성 프로세스를 사용자 정의할 수 있는 다양한 구성 옵션이 포함되어 있습니다. 이 항목에서는 출력 생성 프로세스를 설정하는 데 도움이 되는 모든 구성 및 사용자 정의에 대해 설명합니다.

## DITA 맵 대시보드에서 기준선 탭 구성 {#id223MD0D0YRM}

Experience Manager Guides 설정을 기반으로 하는 DITA 맵 대시보드에서 기준선 탭을 숨기기 위한 지침을 제공하는 탭은 Cloud Service 또는 온프레미스입니다.

>[!BEGINTABS]

>[!TAB Cloud Service]

1. 구성 파일을 만들려면 [구성 재정의](download-install-config-override.md#)의 지침을 사용하십시오.
1. 구성 파일에서 다음 \(property\) 세부 정보를 입력하여 맵 대시보드에서 기준선 탭을 구성합니다.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `hide.tabs.baseline` | Boolean\(`true/false`\).**기본값**: `true` |

>[!NOTE]
>
> 이 구성은 기본적으로 활성화되어 있으며 맵 대시보드에서 기준선 탭을 사용할 수 없습니다.

>[!TAB 온-프레미스]

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** 번들을 검색하고 클릭합니다.

1. **기준선 탭 숨기기** 옵션을 선택합니다.

1. **저장**&#x200B;을 클릭합니다.

>[!NOTE]
>
> 이 구성은 기본적으로 비활성화되어 있으며 맵 대시보드에서 기준선 탭을 사용할 수 있습니다.

>[!ENDTABS]


## 기존 AEM 사이트 내에서 혼합 게시 구성 {#id1691I0V0MGR}

DITA 콘텐츠가 포함된 AEM 사이트가 있는 경우 DITA 콘텐츠를 사이트 내의 사전 정의된 위치에 게시하도록 AEM 사이트 출력을 구성할 수 있습니다. 예를 들어 AEM 사이트 페이지의 다음 스크린샷에서는 `ditacontent` 노드가 DITA 콘텐츠를 저장하도록 예약되어 있습니다.

![](assets/publish-in-aem-site.png)

페이지의 나머지 노드는 AEM 사이트 편집기에서 직접 작성합니다. DITA 콘텐츠를 사전 정의된 위치에 게시하도록 게시 설정을 구성하면 AEM Guides 게시 프로세스에서 기존의 비 DITA 콘텐츠를 수정하지 않아도 됩니다.

사전 정의된 노드에 DITA 컨텐트를 게시할 수 있도록 기존 사이트에서 다음 구성을 수행해야 합니다.

- 사이트의 템플릿 속성 구성

- 사이트에 노드를 추가하여 DITA 콘텐츠 게시


Experience Manager Guides 설정을 기반으로 기존 사이트의 템플릿 속성을 구성하는 지침은 Cloud Service 또는 온프레미스입니다.

>[!BEGINTABS]

>[!TAB Cloud Service]

1. 패키지 관리자를 사용하여 /libs/fmdita/config/templates/default 파일을 다운로드합니다.

   >[!NOTE]
   >
   > `libs` 노드에서 사용할 수 있는 기본 구성 파일의 사용자 지정을 만들지 마십시오. `libs` 노드에서 `apps` 노드의 오버레이를 만들고 `apps` 노드에서만 필요한 파일을 업데이트해야 합니다.

1. 다음 속성을 추가합니다.

   | 속성 이름 | 유형 | 값 |
   |-------------|----|-----|
   | `topicContentNode` | 문자열 | DITA 컨텐트를 게시할 노드 이름을 지정합니다. 예를 들어 AEM Guides이 DITA 콘텐츠를 게시하는 기본 노드는 <br>입니다. `jcr:content/contentnode` |
   | `topicHeadNode` | 문자열 | DITA 콘텐츠의 메타데이터 정보를 저장할 노드 이름을 지정합니다. 예를 들어 AEM Guides에서 메타데이터 정보를 저장하는 기본 노드는 <br>입니다. `jcr:content/headnode` |


다음에 사이트의 템플릿 구성을 사용하여 DITA 콘텐츠를 게시하면 해당 콘텐츠가 `topicContentNode` 및 `topicHeadNode` 속성에 지정된 노드에 게시됩니다.

>[!TAB 온-프레미스]

1. AEM에 로그인한 다음 CRXDE Lite 모드를 엽니다.

1. 사이트의 템플릿 구성 노드로 이동합니다. 예를 들어 AEM Guides은 기본 템플릿 구성을 다음 노드에 저장합니다.

   `/libs/fmdita/config/templates/default`

   >[!NOTE]
   >
   > `libs` 노드에서 사용할 수 있는 기본 구성 파일의 사용자 지정을 만들지 마십시오. `libs` 노드에서 `apps` 노드의 오버레이를 만들고 `apps` 노드에서만 필요한 파일을 업데이트해야 합니다.

1. 다음 속성을 추가합니다.

   | 속성 이름 | 유형 | 값 |
   |-------------|----|-----|
   | `topicContentNode` | 문자열 | DITA 컨텐트를 게시할 노드 이름을 지정합니다. 예를 들어 AEM Guides이 DITA 콘텐츠를 게시하는 기본 노드는 <br>`jcr:content/contentnode`입니다. |
   | `topicHeadNode` | 문자열 | DITA 콘텐츠의 메타데이터 정보를 저장할 노드 이름을 지정합니다. 예를 들어 AEM Guides에서 메타데이터 정보를 저장하는 기본 노드는 <br>`jcr:content/headnode`입니다. |


다음 스크린샷은 AEM Guides의 기본 템플릿 노드에 추가된 속성을 보여 줍니다.

![](assets/add-content-node.png){width="800" align="left"}

다음에 사이트의 템플릿 구성을 사용하여 DITA 콘텐츠를 게시하면 해당 콘텐츠가 `topicContentNode` 및 `topicHeadNode` 속성에 지정된 노드에 게시됩니다.

그러나 기존 사이트의 경우 `topicContentNode` 및 `topicHeadNode` 노드를 수동으로 추가해야 합니다.

필요한 노드를 기존 사이트에 추가하려면 다음 단계를 수행하십시오.

1. AEM에 로그인한 다음 CRXDE Lite 모드를 엽니다.

1. 사이트 노드 내에서 `jcr:content`을(를) 찾습니다.

1. 사이트의 템플릿 구성에 지정한 것과 같은 이름의 `topicContentNode` 및 `topicHeadNode` 노드를 추가합니다.

>[!ENDTABS]

## 게시할 기본 출력 위치 구성

Experience Manager Guides 설정을 기반으로 기본 출력 위치를 구성하는 지침은 Cloud Service 또는 온프레미스입니다.

>[!BEGINTABS]

>[!TAB Cloud Service]

1. 구성 파일을 만들려면 [구성 재정의](download-install-config-override.md)의 지침을 사용하십시오.

1. 구성 파일에서 다음 (속성) 세부 정보를 제공하여 기본 출력 위치를 구성합니다.

   | PID | 속성 키 | 속성 값 |
   |---|---|---|
   | `com.adobe.fmdita.config.ConfigManager` | `base.output.path` | **기본값:** &quot;/content/dam/fmdita 출력&quot; |

>[!TAB 온-프레미스]

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* 번들을 검색하고 선택합니다.

1. **기본 출력 위치** 속성을 업데이트하여 게시 후 PDF을 저장할 AEM 저장소의 기본 경로를 지정합니다. 또한 잘못된 경로를 입력하면 자동으로 기본 경로 `/content/dam/fmdita-outputs`(으)로 되돌아갑니다.

1. **저장**&#x200B;을 클릭합니다.

>[!ENDTABS]

## DITA-OT를 통해 출력을 게시할 때 메타데이터 사용 {#id191LF0U0TY4}

AEM Guides에서는 DITA-OT를 사용하여 출력을 게시하는 동안 사용자 지정 메타데이터를 전달하는 방법을 제공합니다. 관리자 및 게시자는 게시된 출력에서 사용자 지정 메타데이터를 구성하고 사용하려면 다음 작업을 수행해야 합니다.

- 관리자는 DITA 맵의 등록 정보 페이지에서 사용할 수 있도록 시스템에 필요한 메타데이터를 추가합니다.

- 관리자는 DITA 맵 콘솔에 표시되도록 메타데이터 목록에 사용자 지정 메타데이터를 추가합니다.

- Publisher로 DITA 맵으로 사용자 지정 메타데이터를 구성 및 추가하고 필요한 출력을 생성합니다.


시스템에 필요한 메타데이터를 추가하려면 다음 단계를 수행하십시오.

1. 관리자로 Adobe Experience Manager에 로그인합니다.

1. 맨 위에 있는 Adobe Experience Manager 링크를 클릭하고 **도구**&#x200B;를 선택합니다.

1. 도구 목록에서 **Assets**&#x200B;을(를) 선택합니다.

1. **메타데이터 스키마** 타일을 클릭합니다.

   [메타데이터 스키마 Forms] 페이지가 표시됩니다.

1. 목록에서 **기본** 양식을 선택하십시오.

   >[!NOTE]
   >
   > DITA 맵의 등록 정보 페이지에 표시되는 등록 정보는 이 양식에서 가져온 것입니다.

1. **편집**&#x200B;을 클릭합니다.

1. 게시된 출력에 사용할 사용자 지정 메타데이터를 추가합니다. 예를 들어 다음 단계를 사용하여 대상 메타데이터를 추가합니다.

   1. **양식 작성** 구성 요소 목록에서 **한 줄 텍스트** 구성 요소를 양식으로 끌어서 놓습니다.

   2. 필드의 **설정**&#x200B;을(를) 열려면 새 필드를 선택하십시오.

   3. **필드 레이블**&#x200B;에 메타데이터 이름(대상)을 입력합니다.

   4. **속성에 매핑** 설정에서 을(를) 지정합니다./jcr:content/metadata/&lt;메타데이터의 이름\>. 이 예제에서는 를 로 설정합니다./jcr:content/metadata/audience

   다음 단계를 사용하여 필요한 모든 메타데이터 매개 변수를 추가합니다.

1. **저장**&#x200B;을 클릭합니다.


이제 모든 DITA 맵에 대한 속성 페이지에 새 매개변수가 표시됩니다.

![](assets/properties-page-custom-metadata.PNG)

그런 다음 DITA 맵 콘솔에서 사용자 지정 메타데이터를 사용할 수 있도록 해야 합니다. Experience Manager Guides 설정을 기반으로 DITA 맵 대시 보드에서 사용할 수 있는 사용자 지정 메타데이터를 만들기 위한 지침을 제공하는 탭은 Cloud Service 또는 On-Premise입니다.

>[!BEGINTABS]

>[!TAB Cloud Service]

1. 패키지 관리자를 사용하여 Cloud Manager의 Git 저장소의 다음 위치에 있는 metadataList 파일에 액세스합니다.

   /libs/fmdita/config/metadataList

   >[!NOTE]
   >
   > metadataList 파일에는 맵 대시보드에 있는 DITA 맵의 **속성** 드롭다운 목록에 표시되는 속성 목록이 포함되어 있습니다. 기본적으로 이 파일에는 doctstate, dc:language, dc:description, dc:title 등 네 가지 속성이 있습니다.

1. 메타데이터 스키마 Forms 페이지에서 추가한 사용자 지정 메타데이터를 추가합니다. 이 예제에서는 기본 목록의 끝에 대상 매개 변수를 추가합니다.

>[!TAB 온-프레미스]

1. AEM에 로그인한 다음 CRXDE Lite 모드를 엽니다.

1. 다음 위치에서 사용할 수 있는 metadataList 파일에 액세스합니다.

   /libs/fmdita/config/metadataList

   >[!NOTE]
   >
   > metadataList 파일에는 맵 대시보드에 있는 DITA 맵의 **속성** 드롭다운 목록에 표시되는 속성 목록이 포함되어 있습니다. 기본적으로 이 파일에는 doctstate, dc:language, dc:description, dc:title 등 네 가지 속성이 있습니다.

1. 메타데이터 스키마 Forms 페이지에서 추가한 사용자 지정 메타데이터를 추가합니다. 이 예제에서는 기본 목록의 끝에 대상 매개 변수를 추가합니다.

1. **모두 저장**&#x200B;을 클릭합니다.

>[!ENDTABS]

이제 사용자 지정 메타데이터가 DITA 맵 콘솔의 **속성** 드롭다운 목록에 표시됩니다.

마지막으로 게시자는 게시된 출력에 사용자 지정 메타데이터를 포함해야 합니다. 출력을 생성하는 동안 사용자 지정 메타데이터를 처리하려면 다음 단계를 수행하십시오.

1. Assets UI에서 게시하려는 DITA 맵으로 이동합니다.

1. DITA 맵 파일을 선택하고 해당 특성 페이지를 엽니다.

1. 속성 페이지에서 사용자 지정 메타데이터의 값을 지정합니다. 이 예제에서는 대상 매개 변수에 대해 External 값을 지정했습니다.

   ![](assets/properties-page-custom-metadata-value.png)

1. **저장 및 닫기**&#x200B;를 클릭합니다.

1. DITA 맵 파일을 클릭하여 DITA 맵 콘솔을 엽니다.

1. **출력 사전 설정** 탭에서 출력을 생성하는 데 사용할 출력 사전 설정을 선택합니다.

1. **편집**&#x200B;을 클릭합니다.

1. **속성** 드롭다운 목록에서 게시 프로세스에 전달할 속성을 선택합니다.

   ![](assets/props-in-publish-output.PNG)


선택한 속성/메타데이터는 게시 프로세스에 전달되고 최종 출력에서 사용할 수 있습니다.

### 처리를 위해 DITA-OT로 전달되는 메타데이터의 유효성 검사(Cloud Service에만 해당)

DITA-OT에 전달된 메타데이터 값의 유효성을 검사하기 위해 클라우드 지원 jar를 사용하는 로컬 환경을 사용할 수 있습니다. 클라우드에서 로컬 파일 시스템에 액세스할 수 없으므로 메타데이터 파일의 유효성을 검사하는 유일한 방법은 cloud ready jar를 통해서입니다.

- 파일 이름: metadata.xml
- 파일 위치: crx-quickstart/profiles/ditamaps/&lt;ditamap-1234\>

  metadata.xml에 액세스하려면 다음을 수행하십시오.

   - AEM 인스턴스가 실행 중인 서버 위치에 로그인합니다.
   - crx-quickstart/profiles/ditamaps/&lt;새로 만든 디렉터리 이름\>/metadata.xml으로 마이그레이션합니다.
- 샘플 파일 형식:

  **metadata.xml**

  ```XML
  <?xml version="1.0" encoding="UTF-8" standalone="no"?>
  <root>
     <Path id="/absolutePath/sampleMap.ditamap">
        <metadata>
           <meta isArray="false" key="dc:description">This is a file</meta>
           <meta isArray="false" key="dc:title">Myfile</meta>
           <meta isArray="true" key="multivalueText">One;Two;Three</meta>
        </metadata>
     </Path>
     <Path id="/absolutePath/sampleTopic.dita">
        <metadata>
           <meta isArray="false" key="dc:description">description for the accountability</meta>
           <meta isArray="false" key="dc:title">accountability title</meta>
           <meta isArray="true" key="multivalueText">value1</meta>
        </metadata>
     </Path>
  </root>
  ```


- isArray: 메타데이터가 다중 값 \(Array\)인지 여부를 정의하는 부울 속성. 값은 세미콜론으로 구분됩니다.
- 경로 ID: 임시 디렉터리에 저장된 파일의 절대 경로입니다.

>[!NOTE]
>
> 파일에 특정 메타데이터가 없으면 키가 있는 &lt;meta\> 태그가 metadata.xml 파일에 해당 파일의 속성으로 표시되지 않습니다.

## 루트 맵 메타데이터를 허용하도록 DITA-OT 명령줄 인수 필드를 구성합니다(Cloud Service에만 해당).

DITA-OT 명령줄 인수 필드를 사용하여 루트 맵 메타데이터를 전달하려면 다음 단계를 수행하십시오.

1. 구성 파일을 만들려면 [구성 재정의](download-install-config-override.md#)의 지침을 사용하십시오.
1. 구성 파일에서 다음 \(property\) 세부 정보를 입력하여 사전 설정의 DITA-OT 명령줄 인수 필드를 구성합니다.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `pass.metadata.args.cmd.line` | Boolean\(`true/false`\).**기본값**: `true` |

- 속성 값을 **true**(으)로 설정하면 DITA-OT 명령줄 기능을 사용할 수 있으므로 DITA-OT 명령줄을 통해 메타데이터를 전달할 수 있습니다.
- 속성 값을 **false**(으)로 설정하면 DITA-OT 명령줄 기능이 비활성화됩니다. 그런 다음 사전 설정의 속성 필드를 사용하여 메타데이터를 전달할 수 있습니다.

## DITA 맵 콘솔 사용자 정의 {#id188HC08M0CZ}

AEM Guides은 DITA 맵 콘솔의 기능을 확장할 수 있는 유연성을 제공합니다. 예를 들어 AEM Guides에서 사용할 수 있는 보고서와 다른 보고서 세트가 있는 경우 그러한 보고서를 맵 콘솔에 추가할 수 있습니다. 맵 콘솔을 사용자 정의하려면 필요한 기능을 수행하는 코드가 포함된 AEM 클라이언트 라이브러리 \(또는 ClientLib\)를 만들어야 합니다.

>[!NOTE]
>
> 페이지 구성 요소는 제품의 새 릴리스에서 덮어쓰게 되므로 직접 수정하지 않는 것이 좋습니다.

AEM Guides은 맵 콘솔을 사용자 지정할 `apps.fmdita.dashboard-extn` 범주를 제공합니다. 맵 콘솔이 로드될 때마다 `apps.fmdita.dashboard-extn` 범주에서 만든 기능이 실행되고 로드됩니다.

>[!NOTE]
>
> AEM 클라이언트 라이브러리를 만드는 방법에 대한 자세한 내용은 [클라이언트측 라이브러리 사용](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/implementing/developing/full-stack/clientlibs.html?lang=en)을 참조하십시오.

## 출력 생성 중 이미지 렌디션 처리 {#id177BF0G0VY4}

AEM에는 자산을 처리하는 기본 워크플로우 및 미디어 핸들 세트가 포함되어 있습니다. AEM에는 가장 일반적인 MIME 유형에 대한 에셋 처리를 처리하는 미리 정의된 워크플로가 있습니다. 일반적으로 AEM은 업로드하는 모든 이미지에 대해 동일한 여러 렌디션을 이진 형식으로 만듭니다. 이러한 렌디션은 크기가 다르고 해상도가 다르며 워터마크가 추가되거나 다른 특성이 변경될 수 있습니다. AEM에서 자산을 처리하는 방법에 대한 자세한 내용은 AEM 설명서에서 [미디어 핸들러 및 워크플로우를 사용하여 Assets 처리](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/assets/asset-microservices-overview.html?lang=en)를 참조하십시오.

AEM Guides을 사용하면 문서에 대한 출력을 생성할 때 사용할 이미지 렌디션을 구성할 수 있습니다. 예를 들어 기본 이미지 표현물 중 하나를 선택하거나 표현물을 만들어 이를 사용하여 문서를 게시할 수 있습니다. 문서를 게시하기 위한 이미지 렌디션 매핑은 `/libs/fmdita/config/ **renditionmap.xml**` 파일에 저장됩니다. `renditionmap.xml` 파일의 스니펫은 다음과 같습니다.

>[!NOTE]
>
> 모든 사용자 지정에 대해 `renditionmap.xml` 폴더에 `apps` 파일의 복사본을 만드는 것이 좋습니다.

```XML
<renditionmap>
   <mapelement>
      <mimetype>image/png</mimetype>
      <rendition output="AEMSITE">cq5dam.web.1280.1280.jpeg</rendition>
      <rendition output="PDF">original</rendition>
      <rendition output="HTML5">cq5dam.web.1280.1280.jpeg</rendition>
      <rendition output="HTML5" outputName="ditahtml5">cq5dam.thumbnail.319.319.png</rendition>
      <rendition output="EPUB">cq5dam.web.1280.1280.jpeg</rendition>
      <rendition output="CUSTOM">cq5dam.web.1280.1280.jpeg</rendition>
   </mapelement>
...
</renditionmap>
```

`mimetype` 요소는 파일 형식의 MIME 형식을 지정합니다. `rendition output` 요소는 지정된 출력을 게시하는 데 사용해야 하는 출력 형식 및 렌디션의 이름 \(예: `cq5dam.web.1280.1280.jpeg`\)을 지정합니다. 지원되는 모든 출력 형식(AEMSITE, PDF, HTML5, EPUB 및 CUSTOM)에 사용할 이미지 렌디션을 지정할 수 있습니다.

출력 사전 설정에 대해 다른 이미지 변환을 지정하려면 `outputName` 특성을 사용하여 해당 값을 사전 설정의 제목으로 설정하고 동일한 출력 유형에서 특정 출력 사전 설정에 대한 사용자 지정 변환을 정의할 수 있습니다. 이 기능은 다양한 게시 시나리오에 대해 다양한 이미지 크기나 형식이 필요한 경우에 유용합니다.

예:


```XML
<renditionmap>
   <mapelement>
      <mimetype>image/png</mimetype>
      
      <rendition output="HTML5">cq5dam.web.1280.1280.jpeg</rendition>
      <rendition output="HTML5" outputName="ditahtml5">cq5dam.thumbnail.319.319.png</rendition>
      
   </mapelement>
...
</renditionmap>
```

위의 변환에서 `outputName` 특성이 `ditahtml5`(사전 설정 제목)으로 설정되면 `ditahtml5` 사전 설정에서 썸네일 이미지 `cq5dam.thumbnail.319.319.png`을(를) 사용합니다. `outputName` 특성이 지정되지 않은 경우 모든 HTML5 출력에서 더 큰 이미지 `cq5dam.web.1280.1280.jpeg`을(를) 사용합니다.

지정된 렌디션이 없으면 AEM Guides 게시 프로세스는 먼저 지정된 이미지의 웹 렌디션을 찾습니다. 웹 렌디션도 찾을 수 없는 경우에는 이미지의 원본 렌디션이 사용됩니다.

>[!NOTE]
>
> 이러한 이미지 변환은 출력 생성만 제어합니다. 미리 보기나 검토를 위해 문서를 열 때 이미지의 웹 렌디션이 사용됩니다.

## 출력 기록에 대한 자동 삭제 기간 구성 {#id19AAI070V8Q}

출력을 생성하면 출력 로그와 함께 출력이 생성됩니다. 큰 DITA 맵의 경우 이러한 로그는 저장소에서 많은 공간을 사용할 수 있습니다. 기본적으로 로그는 저장소의 다음 위치에 저장됩니다.

`/var/dxml/metadata/outputHistory`

일정 기간 동안 모든 로그 파일의 전체 크기가 GB로 증가할 수 있습니다. AEM Guides을 사용하면 이러한 로그 파일을 저장소에 보관하도록 기간을 구성할 수 있습니다. 지정된 기간이 지나면 출력 생성 기록과 함께 로그가 저장소에서 삭제됩니다.

>[!NOTE]
>
> 출력 생성 기록은 출력 탭의 생성된 출력 목록에 있는 로그 항목입니다.

기록 지우기 기능을 구성하면 저장소의 모든 DITA 맵에 대한 출력 생성에 영향을 미칩니다. DITA 맵의 출력 탭에서 기록은 지정된 일 수와 설정에 지정된 시간에 삭제됩니다.

>[!NOTE]
>
> 로그 파일 및 출력 생성 기록을 제거해도 생성된 출력에는 영향을 주지 않습니다.

Experience Manager Guides 설정을 기반으로 출력 기록 및 로그를 제거하는 데 하루 및 시간을 설정하는 지침을 제공하는 탭은 Cloud Service 또는 온프레미스입니다.

>[!BEGINTABS]

>[!TAB Cloud Service]

구성 파일을 만들려면 [구성 재정의](download-install-config-override.md#)의 지침을 사용하십시오. 출력 기록 및 로그를 제거할 날짜와 시간을 설정하려면 구성 파일에 다음 \(property\) 세부 정보를 입력하십시오.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager\|output.history.purgeperiod` | 출력 로그와 함께 출력 기록이 삭제되는 일 수를 지정합니다. 이 기능을 사용하지 않으려면 이 속성을 0.Everyday로 설정합니다. 지정된 시간에 이 속성에 지정된 일 수 전에 생성된 출력에서 제거 프로세스가 실행됩니다. | **기본값**: 5 |
| `output.history.purgetime` | 삭제 프로세스가 시작되는 시간을 지정합니다. | **기본값**: 0:00 \(또는 12:00 자정\) |

>[!TAB 온-프레미스]

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** 번들을 검색하고 클릭합니다.

1. **출력 기록 제거 기간** 속성에서 출력 기록과 함께 출력 로그를 제거하는 기간(일)을 지정합니다. 기본적으로 5일로 설정되어 있습니다. 이 기능을 비활성화하려면 이 속성을 0으로 설정합니다.

1. **Output History Purging Time** 속성에서 제거 프로세스를 시작할 시간을 지정합니다. 기본적으로 0:00 \(또는 12:00 자정\)으로 설정됩니다. 매일 이때 제거 프로세스는 **출력 기록 제거 기간** 속성에 지정된 일 수 전에 생성된 출력에서 실행됩니다.

   >[!NOTE]
   >
   > 기본적으로 지우기 기능은 5일 이상 지난 출력에서 자정마다 실행됩니다.

1. **저장**&#x200B;을 클릭합니다.

>[!ENDTABS]

## 최근에 생성된 출력 목록 제한 변경 {#id1679JH0H0O2}

DITA 맵의 출력 탭에 표시되는 생성된 최대 출력 수를 변경할 수 있습니다.

>[!BEGINTABS]

>[!TAB Cloud Service]

구성 파일을 만들려면 [구성 재정의](download-install-config-override.md#)의 지침을 사용하십시오. 구성 파일에서 다음 \(property\) 세부 정보를 입력하여 목록에 표시할 출력 수를 변경합니다.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `output.historylimit` | 정수 값입니다.<br> **기본값**: 25 |

>[!TAB 온-프레미스]

기본적으로 마지막으로 생성된 25개의 출력 목록이 표시됩니다. 목록에 표시할 출력 수를 변경하려면 **번들의**&#x200B;출력 목록 제한`com.adobe.fmdita.config.ConfigManager` 설정을 업데이트하십시오.

>[!ENDTABS]

>[!TIP]
>
> 출력 기록 작업에 대한 모범 사례는 *모범 사례 안내서*&#x200B;의 [출력 기록](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/cs-mar-22/Adobe-Experience-Manager-Guides_Best-Practices_EN.pdf) 섹션을 참조하십시오.

## 출력 생성 성능 최적화(온-프레미스에만 해당) {#id176LB050VUI}

AEM Guides을 사용하면 동시에 실행되는 출력 생성 프로세스의 수를 제어하는 출력 생성 프로세스 풀 크기를 구성할 수 있습니다. 기본적으로 프로세스 풀 크기는 시스템에서 사용할 수 있는 처리 코어 수와 1로 설정됩니다. 순차적 게시를 원하는 경우 이 값을 1로 변경할 수 있습니다. 이 경우 첫 번째 게시 작업이 실행되고 다음 게시 작업이 게시 큐에 저장됩니다.

출력 생성 처리 풀 크기를 변경하려면 **번들의**&#x200B;생성 풀 크기`com.adobe.fmdita.publish.manager.PublishThreadManagerImpl` 설정을 업데이트하십시오.

## FrameMaker Publishing Server 구성(온-프레미스에만 해당) {#id1678G0Z0TN6}

FrameMaker Publishing Server \(FMPS\)를 사용하여 DITA 콘텐츠에 대한 출력을 생성할 수 있습니다. FMPS를 구성하면 FMPS에서 지원하는 다양한 형식으로 출력을 생성할 수 있습니다.

>[!NOTE]
>
> FMPS를 사용하여 출력을 생성하려면 FMPS 서버를 설정해야 합니다. 설치 및 구성에 대한 자세한 내용은 FrameMaker Publishing Server 사용 안내서를 참조하십시오.

FMPS를 사용하도록 AEM Guides을 구성하려면 웹 콘솔에서 `com.adobe.fmdita.config.ConfigManager` 번들의 다음 속성을 업데이트하십시오.

>[!NOTE]
>
> http://<server name\>:<port\>/system/console/configMgr URL에 액세스하여 웹 콘솔을 엽니다.

| 속성 | 설명 |
|--------|-----------|
| FrameMaker Publishing Server 로그인 도메인 | FrameMaker Publishing Server이 호스팅되는 도메인 이름 또는 작업 그룹 이름을 지정합니다. FMPS 버전을 기반으로 도메인 이름을 :-(으)로 제공하십시오.   **FMPS 2020**: IP 주소 192.168.1.101 <br>- **FMPS 2019 및 이전**: IP 주소 또는 도메인 이름 |
| FRAMEMAKER PUBLISHING SERVER URL | FrameMaker Publishing Server의 URL을 지정합니다. FMPS 버전을 기반으로 FMPS URL을 다음과 같이 제공하십시오.<br>- **FMPS 2020**: `http://<fmps_ip>:<port>` \(http://192.168.1.101:7000\) <br> - **FMPS 2019 및 이전**: `http://<fmps_ip>:<port>/fmserver/v1/` |
| FMPS 버전 | FrameMaker Publishing Server의 버전 번호를 지정합니다. FMPS 버전을 기반으로 버전 정보를 다음과 같이 제공하십시오. <br>- **FMPS 2020**: 2020 <br> - **FMPS 2019 및 이전**: 2019 또는 2017 |
| FrameMaker Publishing Server 사용자 이름 및 암호 | FrameMaker Publishing Server에 액세스하기 위한 사용자 이름과 암호를 지정합니다. |
| FMPS 시간 초과 | \(*선택 사항*\) AEM Guides이 FrameMaker Publishing Server의 응답을 기다리는 시간 \(초\)을 지정합니다. 지정된 시간 내에 응답이 수신되지 않으면 AEM Guides이 게시 작업을 종료하고 작업이 실패로 플래그가 지정됩니다. <br> 기본값: 300초 \(5분\) |
| 외부 AEM URL | *\(선택 사항\)* FrameMaker Publishing Server에서 생성된 출력 파일을 배치할 AEM URL입니다. 예: `http://<server-name>:<port>/` |
| AEM 관리자 사용자 이름 및 암호 | *\(선택 사항\)* AEM 설치 관리자의 사용자 이름 및 암호입니다. FrameMaker Publishing Server에서 AEM과 통신하는 데 사용됩니다. |
| FMPS 작업 실행 대기 시간 제한 | 이 설정은 FMPS 2020에만 적용됩니다. 이 프로세스가 실행될 때까지 FMPS가 대기하지 않는 시간 \(초\)을 지정합니다. |


