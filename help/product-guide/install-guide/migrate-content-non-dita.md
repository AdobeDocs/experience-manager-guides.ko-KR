---
title: DITA가 아닌 콘텐츠 마이그레이션
description: 비DITA 콘텐츠를 마이그레이션하는 방법에 대해 알아봅니다.
exl-id: 4597d1be-5426-4eba-8490-e42d0e565427
feature: Migration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '2761'
ht-degree: 0%

---

# DITA가 아닌 콘텐츠 마이그레이션 {#id181AH0R02HT}

이 섹션에서는 DITA가 아닌 문서를 DITA 형식으로 마이그레이션하는 마이그레이션 프로세스를 안내합니다. AEM Guides는 다음 소스에서 마이그레이션을 제공합니다.

- [Microsoft Word](#id1949B040Z5Z)

- [InDesign 문서](#id195AD0B0K5Z)

- [XHTML](#id1949B04L0Y4)

- [구조화되지 않은 FrameMaker 문서](#id1949B050VUI)

- [기타 구조화된 문서](#id1949B0590YK)


## Microsoft Word 문서 마이그레이션 {#id1949B040Z5Z}

AEM Guides를 사용하면 기존 Word 문서를 마이그레이션할 수 있습니다.`.docx`\) DITA 주제 유형 문서로 이동합니다. 다른 매개 변수와 함께 입력 및 출력 폴더 위치를 지정해야 하며 문서가 DITA 문서로 변환됩니다. 내용에 따라 .dita 파일과 .ditamap 파일이 있을 수 있습니다.

Word 문서를 성공적으로 변환하려면 문서를 잘 구조화해야 합니다. 예를 들어 문서에 제목, 제목 1, 제목 2 등이 차례로 옵니다. 각 제목에는 일부 콘텐츠가 포함되어 있어야 합니다. 문서의 구조가 좋지 않으면 프로세스가 예상대로 작동하지 않을 수 있습니다.

기본적으로 AEM Guides는 [Word-to-DITA \(Word2DITA\) 변환 프레임워크](http://www.dita4publishers.org/docs/repo/org.dita4publishers.word2dita/word2dita/word2dita-intro.html). 이 변환은 다음에 따라 달라집니다. [스타일-태그 매핑](http://www.dita4publishers.org/docs/repo/org.dita4publishers.word2dita/word2dita/style-to-tag-map-overview.html) 구성 파일입니다. Word2DITA 변환을 성공적으로 사용하려면 변환을 위해 Word 문서를 준비하기 위한 다음 지침을 고려해야 합니다.

>[!NOTE]
>
> 기본 스타일-태그 매핑 구성 파일을 변경하는 경우, 업데이트된 스타일 매핑에 대해 확인 지침을 업데이트하여 사용해야 합니다.

- 문서가 제목에서 시작하는지 확인합니다. 이 제목은 DITA 맵 제목에 매핑됩니다. 또한 제목 뒤에 일부 일반 컨텐츠가 와야 합니다.

- 제목 뒤에 제목 1, 제목 2 등이 있어야 합니다. 각 제목에는 콘텐츠가 포함되어 있어야 합니다. 제목은 새로운 개념 유형 항목으로 변환됩니다. 생성된 주제의 계층 구조는 문서의 제목 수준에 따라 다릅니다. 예를 들어 제목 1은 제목 2, 제목 2는 제목 3 콘텐츠보다 앞에 옵니다.

- 문서에는 하나 이상의 제목 유형 콘텐츠가 있어야 합니다.

- 그룹화된 이미지가 없는지 확인합니다. 문서에 그룹화된 이미지가 있는 경우 해당 이미지를 모두 그룹화하지 마십시오.

- 모든 머리글과 바닥글을 제거합니다.

- 굵게, 기울임체 및 밑줄 같은 인라인 스타일은 `b`, `i`, 및 `u` 요소.

- 모든 순서가 지정된 목록과 순서가 지정되지 않은 목록은 `ol` 및 `ul` 요소. 이는 중첩된 목록, 표, 메모 또는 각주 내의 목록에도 적용됩니다.

- 모든 하이퍼링크는 로 변환됩니다. `xref`.

- 변환된 파일의 파일 이름은 제목 텍스트 다음에 파일 번호가 오는 것을 기반으로 합니다. 파일 번호는 문서의 제목 텍스트 위치를 기준으로 하는 순차적 번호입니다. 예를 들어 제목 텍스트가 &quot;샘플 제목&quot;이고 문서의 10번째 제목인 경우 이 주제의 결과 파일 이름은 Sample\_Heading\_10.dita와 비슷합니다.


다음 단계를 수행하여 기존 Word 문서를 DITA 주제 유형 문서로 변환합니다.

1. AEM에 로그인하고 CRXDE Lite 모드를 엽니다.

1. 다음 위치에서 사용할 수 있는 기본 구성 파일로 이동합니다.

   `/libs/fmdita/config/w2d_io.xml`

1. 의 오버레이 노드 만들기 `config` 폴더 내 `apps` 노드.

1. 에서 사용할 수 있는 구성 파일로 이동합니다. `apps` 노드:

   `/apps/fmdita/config/w2d_io.xml`

   다음 `w2d_io.xml` 파일에는 다음과 같은 구성 가능한 매개변수가 포함되어 있습니다.

   - 다음에서 `inputDir` 요소, 소스 Word 문서를 사용할 수 있는 입력 폴더의 위치를 지정합니다. 예를 들어 Word 문서가 `wordtodita` 위치: `projects` 폴더를 만든 다음 위치를 다음과 같이 지정합니다. `/content/dam/projects/wordtodita/`

   - 다음에서`outputDir` 요소를 사용하여 출력 폴더의 위치를 지정하거나 기본 출력 위치를 유지하여 변환된 DITA 문서를 저장합니다. 지정된 출력 폴더가 DAM에 없으면 변환 워크플로우가 출력 폴더를 만듭니다.

   - 의 경우 `createRev` 요소를 사용하여 변환된 DITA 주제의 새 버전을 만들지 여부를 지정합니다. \(`true`\) 아님 \(`false`\).

   - 다음에서 `s2tMap` 요소를 사용하려면 Word 문서 스타일과 DITA 요소의 매핑이 포함된 맵 파일의 위치를 지정하십시오. 기본 매핑은 다음 위치에 있는 파일에 저장됩니다.

     ```XML
     /libs/fmdita/word2dita/word-builtin-styles-style2tagmap.xml
     ```

     >[!NOTE]
     >
     > 의 구조에 대한 자세한 내용은 `word-builtin-styles-style2tagmap.xml` 파일 및 파일 사용자 지정 방법은 다음을 참조하십시오. [스타일-태그 매핑](http://www.dita4publishers.org/docs/repo/org.dita4publishers.word2dita/word2dita/style-to-tag-map-overview.html) 위치: *게시자용 DITA 사용 안내서*.

   - props2Propagate 요소에서 DITA 맵에 전달할 속성을 지정합니다. 이 속성은 문서 메타데이터에서 변환된 DITA 에셋으로 dc:title,dc:subject,dam:keywords,dam:category와 같은 기본 메타데이터를 전달하는 데 필요합니다.

1. `w2d_io.xml` 파일을 저장합니다.

1. 에서 필요한 매개 변수를 구성한 후 `w2d_io.xml` 파일을 열고 AEM에 로그인한 다음 Assets UI를 엽니다.

1. 입력 폴더 위치 \(`wordtodita`\).

1. 소스 Word 문서를 이 폴더에 업로드합니다. DAM에 콘텐츠를 업로드하는 방법에 대한 자세한 내용은 [기존 DITA 콘텐츠 업로드](migrate-content-upload-existing-dita-content.md#).


사용 `config` `/config` 블록에서는 변환을 위해 하나 이상의 구성 블록을 정의할 수 있습니다. 변환 워크플로우가 실행되고 DITA 주제 형식의 최종 출력이 `outputDir` 요소를 생성하지 않습니다.

## Adobe InDesign 문서 마이그레이션 {#id195AD0B0K5Z}

AEM Guides를 사용하면 InDesign 문서를 변환할 수 있습니다. FrameMaker 과 마찬가지로 InDesign 을 사용하면 구조화되지 않은 문서와 정형 문서를 만들 수도 있습니다. 구조화되지 않은 문서는 단락 및 문자 스타일을 사용하여 컨텐츠의 서식을 지정합니다. 구조화된 문서는 요소와 해당 속성을 사용합니다.

변환 프로세스에서는 단락 및 문자 스타일 형식을 관련 DITA 요소에 매핑해야 합니다. 마찬가지로 구조화된 문서의 경우 매핑 파일에는 DITA 요소 및 속성이 있는 InDesign 요소 및 속성의 일대일 매핑이 포함됩니다.

전환 프로세스에는 백엔드에 다음 작업이 포함됩니다.

- 다음 *InDesign 마크업 언어* \(IDML\) 파일의 압축을 작업 디렉토리에 풉니다.
- designmap.xml 파일을 읽고 개별 InDesign 스토리를 찾습니다.
- 모든 스토리가 단일 XML 인스턴스에 병합되며 &#39;빈&#39; 스토리가 삭제됩니다.
- 포함된 그래픽은 모두 내보내집니다.
- 표 및 그래픽과 같은 표준 구조를 DITA 형식으로 사전 변환합니다.
- 스타일 또는 구조를 매핑 파일을 기반으로 최종 출력에 매핑합니다.
- 개별 DITA 주제 및 DITA 맵 파일의 생성 및 유효성 검사
- 임시 파일 삭제.

변환 프로세스를 진행하려면 다음을 수행해야 합니다 [변환을 위한 InDesign 파일 준비](appendix.md#id195DBF0045Z) 및 [InDesign-DITA 마이그레이션을 위한 매핑 파일 준비](appendix.md#id194AF0003HT) 그런 다음 변환 프로세스를 실행하는 지정된 절차를 따라야 합니다.

다음 단계를 수행하여 기존 InDesign 문서를 DITA 주제 유형 문서로 변환합니다.

1. AEM에 로그인하고 CRXDE Lite 모드를 엽니다.

1. 다음 위치에서 사용할 수 있는 기본 구성 파일로 이동합니다.

   `/libs/fmdita/config/idml2dita_io.xml`

1. 의 오버레이 노드 만들기 `config` 폴더 내 `apps` 노드.

1. 에서 사용할 수 있는 구성 파일로 이동합니다. `apps` 노드:

   `/apps/fmdita/config/idml2dita_io.xml`

   에서 다음 매개 변수를 구성합니다 `idml2dita_io.xml` 파일:

   - 다음에서 `inputDir` 요소, 소스 InDesign 문서를 사용할 수 있는 입력 폴더의 위치를 지정합니다. 예를 들어 InDesign 문서가 이라는 폴더에 저장되어 있는 경우 `indesigntodita` 위치: `projects` 폴더를 만든 다음 위치를 다음과 같이 지정합니다. `/content/dam/idmlfiles/indesigntodita/`

   - 다음에서`outputDir` 요소를 사용하여 출력 폴더의 위치를 지정하거나 기본 출력 위치를 유지하여 변환된 DITA 문서를 저장합니다. 지정된 출력 폴더가 DAM에 없으면 변환 워크플로우가 출력 폴더를 만듭니다.

   - 다음에서 `mapStyle` 요소를 사용하려면 InDesign 문서 스타일과 DITA 요소의 매핑이 포함된 맵 파일의 위치를 지정하십시오. 기본 매핑은 다음 위치에 있는 파일에 저장됩니다.

     ```XML
     /stmap.adobeidml.xml
     ```

     >[!NOTE]
     >
     > 의 구조에 대한 자세한 내용은 `stmap.adobeidml.xml` 파일 및 파일 사용자 지정 방법은 [InDesign-DITA 마이그레이션을 위한 매핑 파일 준비](appendix.md#id194AF0003HT) 의 섹션 *부록*.

1. `idml2dita_io.xml` 파일을 저장합니다.

1. 에서 필요한 매개 변수를 구성한 후 `idml2dita_io.xml` 파일을 열고 AEM에 로그인한 다음 Assets UI를 엽니다.

1. 입력 폴더 위치 \(`indesigntodita`\).

1. 소스 InDesign 문서를 이 폴더에 업로드합니다. DAM에 콘텐츠를 업로드하는 방법에 대한 자세한 내용은 [기존 DITA 콘텐츠 업로드](migrate-content-upload-existing-dita-content.md#).


## XHTML 문서 마이그레이션 {#id1949B04L0Y4}

AEM Guides를 사용하면 기존 XHTML 문서를 DITA 주제 유형 문서로 변환할 수 있습니다. 다른 매개변수와 함께 입력 및 출력 폴더 위치를 지정해야 하며 문서가 DITA 형식으로 변환됩니다. 구조화된 HTML 문서를 변환하는 데 사용할 수 있는 방법에는 두 가지가 있습니다.

- 모든 문서를 입력 폴더로 업로드하거나
- 미디어 파일과 함께 모든 문서의 ZIP을 만들어 입력 폴더에 업로드합니다. 이 방법은 일반적으로 서로 연결되는 HTML 파일 세트에 사용되며 목차 \(index.html\)가 있습니다. index.html 파일에는 집합에 있는 모든 HTML 파일에 대한 링크가 포함되어 있습니다.

모든 파일을 개별적으로 업로드하든 ZIP에 번들로 업로드하든, 변환 프로세스는 HTML 파일과 결과 DITA 파일 간에 일대일 매핑을 생성합니다. 즉, 입력 폴더의 각 .html 파일에 대해 만들어진 .dita 파일이 있습니다.

ZIP 파일에 문서를 업로드하려면 다음 사항을 고려해야 합니다.

- 참조된 모든 항목은 ZIP 파일 내에 배치해야 합니다.

- 참조된 모든 미디어 파일은 상대 링크를 사용하여 주제 파일 내에서 참조해야 합니다.

- index.html 파일을 만들고 목차에 추가할 항목에 대한 링크를 추가합니다. 이 index.html 파일은 DITA 맵 파일을 만드는 데 사용됩니다. index.html 파일에서는 다음 코드 샘플과 같이 나열된 중첩된 주제를 만들 수도 있습니다.

  ```XML
  <?xml version="1.0" encoding="UTF-8"?>
  <html
  xmlns="http://www.w3.org/1999/xhtml">
      <head>
          <title>Sample Index File</title>
      </head>
      <body>
          <h1>Sample Index</h1>
          <div class="content">
              <ul class="book">
                  <li class="topicref">
                      <a href="Topic1.html">Topic 1</a>
                      <ul class="book">
                          <li class="topicref">
                              <a href="Topic1-1.html">Topic 1.1</a>
                          </li>
                          <li class="topicref">
                              <a href="Topic1-2.html">Topic 1.2</a>
                          </li>
                      </ul>
                  </li>
                  <li class="topicref">
                      <a href="Topic2.html">Topic 2</a>
                  </li>
              </ul>
          </div>
      </body>
  </html>
  ```

  모든 항목 `ul` 태그에 가 있어야 함 `class` 속성이 로 설정됨 `book`. 마찬가지로 다음 간격마다 `li` 태그 `class` 은(는) 로 설정되어야 합니다. `topicref`.

- 인라인 스타일을 사용하는 경우 인라인 스타일을 XHTML 파일에서 CSS 기반 스타일 클래스로 변환합니다. 그런 다음 스타일 속성 매핑을 사용하여 이러한 클래스 기반 스타일을 DITA로 변환합니다 `outputclass` 변환된 DITA 파일의 특성.

  이러한 DITA 파일에서 HTML 또는 AEM 사이트 출력을 생성하는 동안 `outputclass` 속성을 사용하여 소스 HTML 컨텐츠와 일치하도록 생성된 HTML 또는 AEM 사이트에 스타일-클래스를 적용할 수 있습니다.


ZIP 파일을 만들기 위한 고려 사항 외에도 XHTML 문서 또한 잘 구조화되어야 합니다. 예를 들어 문서에는 *제목*, 그 다음 *제목 1*, *제목 2*&#x200B;등. 각 제목에는 일부 콘텐츠가 포함되어 있어야 합니다. 문서가 제대로 구성되지 않은 경우 마이그레이션 프로세스가 예상대로 작동하지 않을 수 있습니다.

기존 XHTML 문서를 DITA 주제로 변환하려면 다음 단계를 수행합니다.

1. AEM에 로그인하고 CRXDE Lite 모드를 엽니다.

1. 다음 위치에서 사용할 수 있는 기본 구성 파일로 이동합니다.

   `/libs/fmdita/config/h2d_io.xml`

1. 의 오버레이 노드 만들기 `config` 폴더 내 `apps` 노드.

1. 에서 사용할 수 있는 구성 파일로 이동합니다. `apps` 노드:

   `/apps/fmdita/config/h2d_io.xml`

   다음 `h2d_io.xml` 파일에는 다음과 같은 구성 가능한 매개변수가 포함되어 있습니다.

   - 다음에서 `inputDir` 요소, 소스 XHTML 문서를 사용할 수 있는 입력 폴더의 위치를 지정합니다. 예를 들어 XHTML 문서가 라는 폴더에 저장되어 있는 경우 `xhtmltodita` 위치: `projects` 폴더를 만든 다음 위치를 다음과 같이 지정합니다. `/content/dam/projects/xhtmltodita/`

   - 다음에서`outputDir` 요소, 출력 폴더의 위치를 지정하거나 기본 출력 위치를 유지합니다. 지정된 출력 폴더가 DAM에 없으면 변환 워크플로우가 출력 폴더를 만듭니다.

   - 의 경우 `createRev` 요소를 사용하여 변환된 DITA 주제의 새 버전을 만들지 여부를 지정합니다. \(`true`\) 아님 \(`false`\).

1. `h2d_io.xml` 파일을 저장합니다.

1. 에서 필요한 매개 변수를 구성한 후 `h2d_io.xml` 파일을 열고 AEM에 로그인한 다음 Assets UI를 엽니다.

1. *\(선택 사항\)* 변환된 문서에 관련 링크 섹션을 추가할 수도 있습니다. 이 기능을 활성화하려면 다음 단계를 수행하십시오.

   >[!NOTE]
   >
   > 기본적으로 관련 링크 섹션은 변환된 문서에 만들어지지 않습니다.

   1. 다음 위치에서 h2d.xsl 파일로 이동합니다.

      /libs/fmdita/html2dita/

   2. 다음 매개 변수를 검색합니다.

      `<xsl:param name="generate-related-links" select="false()"/>`

   3. 위의 매개 변수 값을 다음으로 설정 `true()`.
   4. 파일을 저장하고 닫습니다.
1. 입력 폴더 위치 \(`xhtmltodita`\).

1. 소스 XHTML 문서를 이 폴더에 업로드합니다. DAM에 콘텐츠를 업로드하는 방법에 대한 자세한 내용은 [기존 DITA 콘텐츠 업로드](migrate-content-upload-existing-dita-content.md#).


사용 `<config> </config>` 블록에서는 변환을 위해 하나 이상의 구성 블록을 정의할 수 있습니다. 변환 워크플로우가 실행되고 DITA 주제 형식의 최종 출력이 `outputDir` 요소를 생성하지 않습니다.

## 구조화되지 않은 FrameMaker 문서 마이그레이션 {#id1949B050VUI}

AEM Guides를 사용하면 기존의 비정형 FrameMaker \(`.fm` 및 `.book`\) 문서를 DITA 문서로 변환합니다. 첫 번째 단계는 FrameMaker을 사용하여 스타일 매핑을 만들고 이러한 설정을 .sts 파일에 저장하는 것입니다. FrameMaker 그런 다음 사용자 지정 DITA를 사용하는 경우 `ditaElems.xml` 파일. 예를 들어 이라는 사용자 지정 요소를 만든 경우 `impnote` 모든 중요한 메모를 처리하려면에서 이 사용자 지정 요소를 `ditaElems.xml` 파일. 이 사용자 지정 요소가 정의되면 AEM Guides는 이 포함된 FrameMaker 문서를 변환하는 동안 오류를 발생시키지 않습니다 `impnote` 요소를 생성하지 않습니다.

또한 사용자 지정 또는 유효한 DITA 요소와 함께 몇 가지 추가 특성을 지정하려면 style2attrMap.xml 파일에서 이러한 특성을 정의할 수 있습니다. 예를 들어 `type` 값이 인 속성 `important` 을(를) 사용하여 전달합니다. `impnote` 요소를 생성하지 않습니다. 이 추가 정보는 style2attrMap.xml 파일에서 지정할 수 있습니다.

을 지정하는 것 외에

기존의 구조화되지 않은 FrameMaker 문서를 DITA 형식으로 변환하려면 다음 단계를 수행하십시오.

1. FrameMaker에서 스타일 매핑을 만들고 .sts 파일에 저장합니다.

1. AEM에 로그인하고 CRXDE Lite 모드를 엽니다.

1. 사용자 지정 DITA 요소가 있는 경우 `ditaElems.xml` 다음 위치에서 사용할 수 있는 파일:

   `/libs/fmdita/config/ditaElems.xml`

1. 의 오버레이 노드 만들기 `config` 폴더 내 `apps` 노드.

1. 에서 사용할 수 있는 구성 파일로 이동합니다. `apps` 노드:

   `/apps/fmdita/config/ditaElems.xml`

   다음 `ditaElems.xml` 파일에는 구성 가능한 단일 매개 변수가 포함되어 있습니다.

   - 다음에서 `elem` 매개 변수에서 변환된 DITA 문서에 사용할 사용자 지정 요소의 이름을 지정합니다. 이 요소는 생성된 DITA 문서에 있는 그대로 전달됩니다.

1. 추가 속성을 지정하려면 다음에서 속성을 정의합니다. `style2attrMap.xml` 다음 위치에서 사용할 수 있는 파일:

   `/libs/fmdita/config/style2attrMap.xml`

1. 의 오버레이 노드 만들기 `config` 폴더 내 `apps` 노드.

1. 에서 사용할 수 있는 구성 파일로 이동합니다. `apps` 노드:

   `/apps/fmdita/config/style2attrMap.xml`

   다음 `style2attrMap.xml` 파일에는 다음과 같은 구성 가능한 매개변수가 포함되어 있습니다.

   - 다음에서 `fmStyle` 매개 변수에서 매핑할 FrameMaker 문서에 사용되는 소스 형식을 지정합니다.

   - 다음에서`ditaAttr` 요소를 선택하고 소스 형식으로 매핑할 DITA 속성을 지정합니다.

   - 다음에서 `ditaVal` 요소를 지정하고 매핑된 속성의 값을 지정합니다. 값이 없으면 이 항목을 비워 둘 수 있습니다.

1. `style2attrMap.xml` 파일을 저장합니다.

1. 에서 필요한 매개 변수를 구성한 후 `style2attrMap.xml` 파일을 열고 AEM에 로그인한 다음 Assets UI를 엽니다.

1. 변환할 FrameMaker 문서로 이동하여 클릭합니다.

   DITA 맵 콘솔이 나타나고 출력을 생성하는 데 사용할 수 있는 출력 사전 설정 목록이 표시됩니다.

1. DITA 출력 형식을 선택하고 필요한 매개변수를 구성합니다.

   >[!NOTE]
   >
   > FrameMaker에서 만든 것과 동일한 설정 파일 \(.sts\)을 사용해야 합니다. 또한 설정 이름 및 대상 경로를 지정합니다.

1. 다음을 클릭합니다. **생성** 출력 생성 프로세스를 시작하는 아이콘


사용 `<attrMap> </attrMap>` 블록에서는 변환을 위해 하나 이상의 구성 블록을 정의할 수 있습니다. 내용에 따라 변환된 파일로 .dita 파일과 .ditamap 파일이 있을 수 있습니다.

## 다른 구조화된 문서 마이그레이션 {#id1949B0590YK}

AEM Guides를 사용하면 기존의 구조화된 문서를 유효한 DITA 문서로 변환할 수 있습니다. 입력 및 출력 폴더 위치, 변환 파일의 위치, 최종 출력이 저장되는 확장자 및 새 문서 버전이 필요한지 여부를 지정해야 합니다.

기존의 구조화된 문서를 DITA 형식으로 변환하려면 다음 단계를 수행합니다.

1. AEM에 로그인하고 CRXDE Lite 모드를 엽니다.

1. 다음 위치에서 사용할 수 있는 기본 구성 파일로 이동합니다.

   `/libs/fmdita/config/XSLConfig.xml`

1. 의 오버레이 노드 만들기 `config` 폴더 내 `apps` 노드.

1. 에서 사용할 수 있는 구성 파일로 이동합니다. `apps` 노드:

   `/apps/fmdita/config/XSLConfig.xml`

   다음 `XSLConfig.xml` 파일에는 다음과 같은 구성 가능한 매개변수가 포함되어 있습니다.

   - 다음에서 `inputDir` 요소, 소스 구조화된 문서를 사용할 수 있는 입력 폴더의 위치를 지정합니다. 예를 들어 구조화된 문서가 이라는 폴더에 저장되는 경우 `xsltodita` 위치: `projects` 폴더를 만든 다음 위치를 다음과 같이 지정합니다. `/content/dam/projects/xsltodita/`

   - 다음에서`outputDir` 요소, 출력 폴더의 위치를 지정하거나 기본 출력 위치를 유지합니다. 지정된 출력 폴더가 DAM에 없으면 변환 워크플로우가 출력 폴더를 만듭니다.

   - 다음에서 `xslFolder` 요소를 사용하여 XSL 변환 파일이 저장되는 폴더의 위치를 지정합니다.

   - 다음에서 ``xslPath`` 요소를 사용하려면 변환 프로세스를 시작하는 데 사용되는 기본 .XSL 파일의 위치를 지정하십시오.

   - 다음에서 ``outputExt`` 요소를 사용하여 변환 스트림에서 만든 최종 출력 파일의 파일 확장자를 지정합니다.

   - 의 경우 `createRev` 요소를 사용하여 변환된 DITA 주제의 새 버전을 만들지 여부를 지정합니다. \(`true`\) 아님 \(`false`\).

1. `XSLConfig.xml` 파일을 저장합니다.

1. 에서 필요한 매개 변수를 구성한 후 `XSLConfig.xml` 파일을 열고 AEM에 로그인한 다음 Assets UI를 엽니다.

1. 입력 폴더 위치 \(`xsltodita`\).

1. 소스 구조화된 문서를 이 폴더에 업로드합니다. DAM에 콘텐츠를 업로드하는 방법에 대한 자세한 내용은 [기존 DITA 콘텐츠 업로드](migrate-content-upload-existing-dita-content.md#).


사용 `<config> </config>` 블록에서는 변환을 위해 하나 이상의 구성 블록을 정의할 수 있습니다. 변환 워크플로우가 실행되고 DITA 주제 형식의 최종 출력이 `outputDir` 요소를 생성하지 않습니다.

**상위 항목:**[&#x200B;기존 콘텐츠 마이그레이션](migrate-content.md)
