---
title: DITA가 아닌 콘텐츠 마이그레이션
description: 비DITA 콘텐츠를 마이그레이션하는 방법에 대해 알아봅니다.
exl-id: cf437fb8-ed33-47af-aa7e-ffd8acd232da
feature: Migration
role: Admin
level: Experienced
source-git-commit: 85ba88f5659e066f970583d745a56ec8c51aad7a
workflow-type: tm+mt
source-wordcount: '2480'
ht-degree: 0%

---

# DITA가 아닌 콘텐츠 마이그레이션 {#id181AH0R02HT}

이 섹션에서는 DITA가 아닌 문서를 DITA 형식으로 마이그레이션하는 마이그레이션 프로세스를 안내합니다. AEM Guides은 다음 소스에서 마이그레이션을 제공합니다.

- [Microsoft Word](#id1949B040Z5Z)

- [InDesign 문서](#id195AD0B0K5Z)

- [XHTML](#id1949B04L0Y4)

- [구조화되지 않은 FrameMaker 문서](#id1949B050VUI)

- [기타 구조화된 문서](#id1949B0590YK)


## Microsoft Word 문서 마이그레이션 {#id1949B040Z5Z}

AEM Guides을 사용하면 기존 Word 문서 \(`.docx`\)를 DITA 주제 유형 문서로 마이그레이션할 수 있습니다. 다른 매개 변수와 함께 입력 및 출력 폴더 위치를 지정해야 하며 문서가 DITA 문서로 변환됩니다. 내용에 따라 .dita 파일과 .ditamap 파일이 있을 수 있습니다.

Word 문서를 성공적으로 변환하려면 문서를 잘 구조화해야 합니다. 예를 들어 문서에 제목, 제목 1, 제목 2 등이 차례로 옵니다. 각 제목에는 일부 콘텐츠가 포함되어 있어야 합니다. 문서의 구조가 좋지 않으면 프로세스가 예상대로 작동하지 않을 수 있습니다.

기본적으로 AEM Guides에서는 [Word-to-DITA \(Word2DITA\) 변환 프레임워크](http://www.dita4publishers.org/docs/repo/org.dita4publishers.word2dita/word2dita/word2dita-intro.html)를 사용합니다. 이 변환은 [스타일-태그 매핑](http://www.dita4publishers.org/docs/repo/org.dita4publishers.word2dita/word2dita/style-to-tag-map-overview.html) 구성 파일에 따라 다릅니다. Word2DITA 변환을 성공적으로 사용하려면 변환을 위해 Word 문서를 준비하기 위한 다음 지침을 고려해야 합니다.

>[!NOTE]
>
> 기본 스타일-태그 매핑 구성 파일을 변경하는 경우, 업데이트된 스타일 매핑에 대해 확인 지침을 업데이트하여 사용해야 합니다.

- 문서가 제목에서 시작하는지 확인합니다. 이 제목은 DITA 맵 제목에 매핑됩니다. 또한 제목 뒤에 일부 일반 컨텐츠가 와야 합니다.

- 제목 뒤에 제목 1, 제목 2 등이 있어야 합니다. 각 제목에는 콘텐츠가 포함되어 있어야 합니다. 제목은 새로운 개념 유형 항목으로 변환됩니다. 생성된 주제의 계층 구조는 문서의 제목 수준에 따라 다릅니다. 예를 들어 제목 1은 제목 2, 제목 2는 제목 3 콘텐츠보다 앞에 옵니다.

- 문서에는 하나 이상의 제목 유형 콘텐츠가 있어야 합니다.

- 그룹화된 이미지가 없는지 확인합니다. 문서에 그룹화된 이미지가 있는 경우 해당 이미지를 모두 그룹화하지 마십시오.

- 모든 머리글과 바닥글을 제거합니다.

- 굵게, 기울임체 및 밑줄 같은 인라인 스타일은 `b`, `i` 및 `u` 요소로 변환됩니다.

- 모든 순서가 지정된 목록과 순서가 지정되지 않은 목록은 `ol` 및 `ul` 요소로 변환됩니다. 이는 중첩된 목록, 표, 메모 또는 각주 내의 목록에도 적용됩니다.

- 모든 하이퍼링크가 `xref`(으)로 변환됩니다.

- 변환된 파일의 파일 이름은 제목 텍스트 다음에 파일 번호가 오는 것을 기반으로 합니다. 파일 번호는 문서의 제목 텍스트 위치를 기준으로 하는 순차적 번호입니다. 예를 들어 제목 텍스트가 &quot;샘플 제목&quot;이고 문서의 10번째 제목인 경우 이 주제의 결과 파일 이름은 Sample\_Heading\_10.dita와 비슷합니다.


다음 단계를 수행하여 기존 Word 문서를 DITA 주제 유형 문서로 변환합니다.

1. 패키지 관리자를 사용하여 /libs/fmdita/config/w2d\_io.xml 파일을 다운로드합니다.

1. 다운로드한 w2d\_io.xml 파일을 사용자 정의합니다.

1. Cloud Manager의 Git 저장소의 다음 위치에 파일을 추가합니다.

   /apps/fmdita/config/w2d\_io.xml

   `w2d_io.xml` 파일에는 다음과 같은 구성 가능한 매개 변수가 포함되어 있습니다.

   - `inputDir` 요소에서 원본 Word 문서를 사용할 수 있는 입력 폴더의 위치를 지정합니다. 예를 들어 Word 문서가 `wordtodita` 폴더의 `projects` 폴더에 저장되어 있으면 위치를 `/content/dam/projects/wordtodita/`(으)로 지정하십시오.

   - `outputDir` 요소에서 출력 폴더의 위치를 지정하거나 기본 출력 위치를 유지하여 변환된 DITA 문서를 저장합니다. 지정된 출력 폴더가 DAM에 없으면 변환 워크플로우가 출력 폴더를 만듭니다.

   - `createRev` 요소의 경우 변환된 DITA 주제의 새 버전을 만들 것인지 \(`true`\), 만들 것인지 \(`false`\) 여부를 지정하십시오.

   - `s2tMap` 요소에서 Word 문서 스타일과 DITA 요소의 매핑이 포함된 맵 파일의 위치를 지정합니다. 기본 매핑은 다음 위치에 있는 파일에 저장됩니다.

     ```
     /libs/fmdita/word2dita/word-builtin-styles-style2tagmap.xml
     ```

     >[!NOTE]
     >
     > `word-builtin-styles-style2tagmap.xml` 파일의 구조와 사용자 지정 방법에 대한 자세한 내용은 [게시자용 DITA 사용 안내서](http://www.dita4publishers.org/docs/repo/org.dita4publishers.word2dita/word2dita/style-to-tag-map-overview.html)의 *태그 매핑에 스타일 지정*&#x200B;을 참조하십시오.

   - props2Propagate 요소에서 DITA 맵에 전달할 속성을 지정합니다. 이 속성은 문서 메타데이터에서 변환된 DITA 에셋으로 dc:title,dc:subject,dam:keywords,dam:category과(와) 같은 기본 메타데이터를 전달하는 데 필요합니다.

1. Cloud Manager 파이프라인을 실행하여 업데이트된 구성을 배포합니다.

1. `w2d_io.xml` 파일에서 필요한 매개 변수를 구성한 후 AEM에 로그인하고 Assets UI를 엽니다.

1. 입력 폴더 위치 \(`wordtodita`\)로 이동합니다.

1. 소스 Word 문서를 이 폴더에 업로드합니다. DAM의 콘텐츠 업로드에 대한 자세한 내용은 [기존 DITA 콘텐츠 업로드](migrate-content-upload-existing-dita-content.md#)를 참조하십시오.


`config` `/config` 블록을 사용하여 변환을 위해 하나 이상의 구성 블록을 정의할 수 있습니다. 변환 워크플로우가 실행되고 DITA 주제 형식의 최종 출력이 `outputDir` 요소에 지정된 위치에 저장됩니다.

**기존 사용자에 대한 사용자 지정 업데이트**

AEM Guides as a Cloud Service의 기존 사용자이고 2021년 8월 릴리스에서 2022년 1월 이상 버전으로 업그레이드한 경우 이동된 파일이 거의 없어 주어진 속성을 업데이트합니다.

>[!NOTE]
>
> 이 업데이트는 Microsoft Word에서 DITA로 변환 워크플로우를 이미 사용 중인 경우에만 적용할 수 있습니다.

- 파일 경로: /apps/fmdita/config/w2d\_io.xml
- `<s2tMap>`의 값을 /apps/dxml/word2dita/word-builtin-styles-style2tagmap.xml에서 /libs/fmdita/word2dita/word-builtin-styles-style2tagmap.xml으로 변경합니다.
- 클라우드 서비스의 경우 /apps의 모든 파일이 Cloud Manager Git을 통해 오버레이되므로 Cloud Manager Git 저장소에서 필요한 사항을 변경합니다.

## Adobe InDesign 문서 마이그레이션 {#id195AD0B0K5Z}

AEM Guides을 사용하면 InDesign 문서를 변환할 수 있습니다. FrameMaker과 마찬가지로 InDesign을 사용하면 구조화되지 않은 문서와 정형 문서를 만들 수도 있습니다. 구조화되지 않은 문서는 단락 및 문자 스타일을 사용하여 컨텐츠의 서식을 지정합니다. 구조화된 문서는 요소와 해당 속성을 사용합니다.

변환 프로세스에서는 단락 및 문자 스타일 형식을 관련 DITA 요소에 매핑해야 합니다. 마찬가지로, 구조화된 문서의 경우 매핑 파일에는 DITA 요소 및 속성이 있는 InDesign 요소 및 속성의 일대일 매핑이 포함됩니다.

전환 프로세스에는 백엔드에 다음 작업이 포함됩니다.

- *InDesign 마크업 언어* \(IDML\) 파일의 압축을 작업 디렉터리에 풀었습니다.
- designmap.xml 파일을 읽고 개별 InDesign 스토리를 찾습니다.
- 모든 스토리가 단일 XML 인스턴스에 병합되며 &#39;빈&#39; 스토리가 삭제됩니다.
- 포함된 그래픽은 모두 내보내집니다.
- 표 및 그래픽과 같은 표준 구조를 DITA 형식으로 사전 변환합니다.
- 스타일 또는 구조를 매핑 파일을 기반으로 최종 출력에 매핑합니다.
- 개별 DITA 주제 및 DITA 맵 파일의 생성 및 유효성 검사
- 임시 파일 삭제.

변환 프로세스를 실행하려면 [변환을 위해 InDesign 파일 준비](appendix.md#id195DBF0045Z) [appendix.md\#id195DBF0045Z](appendix.md#id195DBF0045Z) 및 [InDesign에서 DITA로의 마이그레이션 매핑 파일 준비](appendix.md#id194AF0003HT) [appendix.md\#id194AF0003HT](appendix.md#id194AF0003HT)를 수행해야 합니다. 그런 다음 변환 프로세스를 실행하는 지정된 절차를 따라야 합니다.

기존 InDesign 문서를 DITA 주제 유형 문서로 변환하려면 다음 단계를 수행하십시오.

1. AEM에 로그인한 다음 CRXDE Lite 모드를 엽니다.

1. 다음 위치에서 사용할 수 있는 기본 구성 파일로 이동합니다.

   `/libs/fmdita/config/idml2dita_io.xml`
1. 요구 사항에 따라 사용자 지정 구성을 만들려면 `config` 노드 내에 `apps` 폴더의 오버레이 노드를 만드십시오.

1. `libs` 폴더에서 apps 폴더로 다음 파일 또는 폴더를 복사합니다.

   - `/fmdita/config/idml2dita_io.xml`
   - `/fmdita/idml2dita/config`
   - `/fmdita/idml2dita/xsl`

1. `apps` 노드에서 사용할 수 있는 구성 파일로 이동합니다.

   `/apps/fmdita/config/idml2dita_io.xml`

1. `idml12dita` 파일 내의 `idml2dita_io.xml` 폴더에 있는 구성의 매핑을 추가합니다.
1. `idml2dita_io.xml` 파일에 다음 속성을 추가하십시오.

   ```
   <entry          key="idml2DitaConfig">/apps/fmdita/idml2dita/config</entry>
   
   <entry key="idml2DitaXsl">/apps/fmdita/idml2dita/xsl</entry>
   ```

1. `config` 노드 내에 `apps` 폴더의 오버레이 노드를 만듭니다.


   `idml2dita_io.xml` 파일에서 다음 매개 변수를 구성합니다.

   - `inputDir` 요소에서 소스 InDesign 문서를 사용할 수 있는 입력 폴더의 위치를 지정합니다. 예를 들어 InDesign 문서가 `indesigntodita` 폴더의 `projects` 폴더에 저장되어 있는 경우 위치를 `/content/dam/idmlfiles/indesigntodita/`(으)로 지정합니다.

   - `outputDir` 요소에서 출력 폴더의 위치를 지정하거나 기본 출력 위치를 유지하여 변환된 DITA 문서를 저장합니다. 지정된 출력 폴더가 DAM에 없으면 변환 워크플로우가 출력 폴더를 만듭니다.

   - `mapStyle` 요소에서 InDesign 문서 스타일과 DITA 요소의 매핑이 포함된 맵 파일의 위치를 지정합니다. 기본 매핑은 다음 위치에 있는 파일에 저장됩니다.

     ```
     /stmap.adobeidml.xml
     ```

     >[!NOTE]
     >
     > `stmap.adobeidml.xml` 파일의 구조와 이를 사용자 지정하는 방법에 대한 자세한 내용은 부록의 [appendix.md\#id194AF0003HT](appendix.md#id194AF0003HT) 섹션을 참조하십시오.

1. `idml2dita_io.xml` 파일을 저장합니다.

1. `idml2dita_io.xml` 파일에서 필요한 매개 변수를 구성한 후 AEM에 로그인하고 Assets UI를 엽니다.

1. 입력 폴더 위치 \(`indesigntodita`\)로 이동합니다.

1. 소스 InDesign 문서를 이 폴더에 업로드합니다. DAM의 콘텐츠 업로드에 대한 자세한 내용은 [기존 DITA 콘텐츠 업로드](migrate-content-upload-existing-dita-content.md#)를 참조하십시오.


## XHTML 문서 마이그레이션 {#id1949B04L0Y4}

AEM Guides을 사용하면 기존 XHTML 문서를 DITA 주제 유형 문서로 변환할 수 있습니다. 다른 매개변수와 함께 입력 및 출력 폴더 위치를 지정해야 하며 문서가 DITA 형식으로 변환됩니다. 구조화된 HTML 문서를 변환하는 데 사용할 수 있는 방법에는 두 가지가 있습니다.

- 모든 문서를 입력 폴더로 업로드하거나
- 미디어 파일과 함께 모든 문서의 ZIP을 만들어 입력 폴더에 업로드합니다. 이 방법은 일반적으로 서로 연결되는 HTML 파일 세트에 사용되며 목차 \(index.html\)가 있습니다. index.html 파일에는 집합에 있는 모든 HTML 파일에 대한 링크가 포함되어 있습니다.

모든 파일을 개별적으로 업로드하든 ZIP에 번들로 업로드하든 상관없이 변환 프로세스는 HTML 파일과 결과 DITA 파일 간에 일대일 매핑을 생성합니다. 즉, 입력 폴더의 각 .html 파일에 대해 만들어진 .dita 파일이 있습니다.

ZIP 파일에 문서를 업로드하려면 다음 사항을 고려해야 합니다.

- 참조된 모든 항목은 ZIP 파일 내에 배치해야 합니다.

- 참조된 모든 미디어 파일은 상대 링크를 사용하여 주제 파일 내에서 참조해야 합니다.

- index.html 파일을 만들고 목차에 추가할 항목에 대한 링크를 추가합니다. 이 index.html 파일은 DITA 맵 파일을 만드는 데 사용됩니다. index.html 파일에서는 다음 코드 샘플과 같이 나열된 중첩된 주제를 만들 수도 있습니다.

  ```
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

  모든 `ul` 태그에는 `class` 특성이 `book`(으)로 설정되어 있어야 합니다. 마찬가지로 모든 `li` 태그의 `class`을(를) `topicref`(으)로 설정해야 합니다.

- 인라인 스타일을 사용하는 경우 인라인 스타일을 XHTML 파일에서 CSS 기반 스타일 클래스로 변환합니다. 그런 다음 스타일 특성 매핑을 사용하여 이러한 클래스 기반 스타일을 변환된 DITA 파일의 DITA `outputclass` 특성으로 변환합니다.

  이러한 DITA 파일에서 HTML 또는 AEM 사이트 출력을 생성하는 동안 `outputclass` 특성을 사용하여 소스 HTML 콘텐츠와 일치하도록 생성된 HTML 또는 AEM 사이트에 스타일 클래스를 적용할 수 있습니다.


ZIP 파일을 만들기 위한 고려 사항 외에도 XHTML 문서 또한 잘 구조화되어야 합니다. 예를 들어 문서에 *제목*, *제목 1*, *제목 2* 등이 있습니다. 각 제목에는 일부 콘텐츠가 포함되어 있어야 합니다. 문서가 제대로 구성되지 않은 경우 마이그레이션 프로세스가 예상대로 작동하지 않을 수 있습니다.

기존 XHTML 문서를 DITA 주제로 변환하려면 다음 단계를 수행합니다.

1. 패키지 관리자를 사용하여 /libs/fmdita/config/h2d\_io.xml 파일을 다운로드합니다.

1. 다운로드한 h2d\_io.xml 파일을 사용자 정의합니다.

1. Cloud Manager의 Git 저장소의 다음 위치에 파일을 추가합니다.

   /apps/fmdita/config/h2d\_io.xml

   `h2d_io.xml` 파일에는 다음과 같은 구성 가능한 매개 변수가 포함되어 있습니다.

   - `inputDir` 요소에서 소스 XHTML 문서를 사용할 수 있는 입력 폴더의 위치를 지정합니다. 예를 들어 XHTML 문서가 `xhtmltodita` 폴더의 `projects` 폴더에 저장되어 있는 경우 위치를 `/content/dam/projects/xhtmltodita/`(으)로 지정합니다.

   - `outputDir` 요소에서 출력 폴더의 위치를 지정하거나 기본 출력 위치를 유지합니다. 지정된 출력 폴더가 DAM에 없으면 변환 워크플로우가 출력 폴더를 만듭니다.

   - `createRev` 요소의 경우 변환된 DITA 주제의 새 버전을 만들 것인지 \(`true`\), 만들 것인지 \(`false`\) 여부를 지정하십시오.

1. Cloud Manager 파이프라인을 실행하여 업데이트된 구성을 배포합니다.

1. `w2d_io.xml` 파일에서 필요한 매개 변수를 구성한 후 AEM에 로그인하고 Assets UI를 엽니다.

1. *\(선택 사항\)* 변환된 문서에 관련 링크 섹션을 추가할 수도 있습니다. 이 기능을 활성화하려면 다음 단계를 수행하십시오.

   >[!NOTE]
   >
   > 기본적으로 관련 링크 섹션은 변환된 문서에 만들어지지 않습니다.

   1. 패키지 관리자를 사용하여 /libs/fmdita/html2dita/h2d.xsl 파일을 다운로드합니다.

   2. 다음 매개 변수를 검색합니다.

      `<xsl:param name="generate-related-links" select="false()"/>`

   3. 위의 매개 변수 값을 `true()`(으)로 설정하십시오.

   4. Cloud Manager의 Git 저장소의 다음 위치에 업데이트된 파일을 커밋합니다.

      /libs/fmdita/html2dita/

   5. Cloud Manager 파이프라인을 실행하여 업데이트된 구성을 배포합니다.

1. 입력 폴더 위치 \(`xhtmltodita`\)로 이동합니다.

1. 소스 XHTML 문서를 이 폴더에 업로드합니다. DAM의 콘텐츠 업로드에 대한 자세한 내용은 [기존 DITA 콘텐츠 업로드](migrate-content-upload-existing-dita-content.md#)를 참조하십시오.


`<config> </config>` 블록을 사용하여 변환을 위해 하나 이상의 구성 블록을 정의할 수 있습니다. 변환 워크플로우가 실행되고 DITA 주제 형식의 최종 출력이 `outputDir` 요소에 지정된 위치에 저장됩니다.

## 구조화되지 않은 FrameMaker 문서 마이그레이션 {#id1949B050VUI}

AEM Guides을 사용하면 기존의 구조화되지 않은 FrameMaker \(`.fm` 및 `.book`\) 문서를 DITA 문서로 변환할 수 있습니다. 프로세스에 대한 자세한 내용을 보려면 [Adobe FrameMaker의 비정형에서 DITA로의 기술 문서 마이그레이션](https://migrate-from-unstructured-to-dita-step-by-step-guide.meetus.adobeevents.com/)을 참조하십시오.

<!-- Deprecated information -
 //The first step is to create style mappings using FrameMaker and save those settings in a .sts file. Next, if you are using custom DITA, then you can map your custom elements with the source FrameMaker formats in the `ditaElems.xml` file. For example, if you have created a custom element named `impnote` to handle all important notes, then you can define this custom element in the `ditaElems.xml` file. Once this custom element is defined, AEM Guides would not raise an error while converting FrameMaker document containing `impnote` element.

Also, If you want to specify some additional attributes with your custom or valid DITA element, you can define those in the style2attrMap.xml file. For example, you can specify the `type` attribute with the value of `important` to be passed on with the `impnote` element. This additional information can be specified in the style2attrMap.xml file.

In addition to specifying

To convert your existing unstructured FrameMaker documents into DITA format, perform the following steps:

1.  Create style mappings in FrameMaker and save those settings in a .sts file.

1.  Log into AEM and open the CRXDE Lite mode.

1.  If you have custom DITA elements, define those in the `ditaElems.xml` file available at the following location:

    `/libs/fmdita/config/ditaElems.xml`

1.  Create an overlay node of the `config` folder within the `apps` node.

1.  Navigate to the configuration file available in the `apps` node:

    `/apps/fmdita/config/ditaElems.xml`

    The `ditaElems.xml` file contains a single configurable parameter:

    -   In the `elem` parameter, specify the name of the custom element that you want to use in your converted DITA documents. This element would be passed on as is in the generated DITA documents.

1.  If you want to specify additional attributes, define those in the `style2attrMap.xml` file available at the following location:

    `/libs/fmdita/config/style2attrMap.xml`

1.  Create an overlay node of the `config` folder within the `apps` node.

1.  Navigate to the configuration file available in the `apps` node:

    `/apps/fmdita/config/style2attrMap.xml`

    The `style2attrMap.xml` file contains the following configurable parameters:

    -   In the `fmStyle` parameter, specify the source format used in the FrameMaker document that you want to map.

    -   In the`ditaAttr` element, specify the DITA attribute that you want to map with the source format.

    -   In the `ditaVal` element, specify the value for the mapped attribute. If you don't have any value, you can leave this entry blank.

1.  Save the `style2attrMap.xml` file.

1. After configuring the required parameters in the `style2attrMap.xml` file, log into AEM and open the Assets UI.

1. Navigate to and click on the FrameMaker document that you want to convert.

    The DITA map console appears showing the list of Output Presets available to generate output.

1. Select DITA output format and configure the required parameters.

    >[!NOTE]
    >
    > You must use the same settings file \(.sts\) that you created in FrameMaker. Also, specify the Settings Name and Destination Path.

1. Click the **Generate** icon to start the output generation process.


Using the `<attrMap> </attrMap>` block, you can define one or multiple blocks of configurations for conversion. Depending on the content, you could have a .dita file and a .ditamap file as the converted files.

-->

## 다른 구조화된 문서 마이그레이션 {#id1949B0590YK}

AEM Guides을 사용하면 기존의 구조화된 문서를 유효한 DITA 문서로 변환할 수 있습니다. 입력 및 출력 폴더 위치, 변환 파일의 위치, 최종 출력이 저장되는 확장자 및 새 문서 버전이 필요한지 여부를 지정해야 합니다.

기존의 구조화된 문서를 DITA 형식으로 변환하려면 다음 단계를 수행합니다.

1. 패키지 관리자를 사용하여 /libs/fmdita/config/XSLConfig.xml 파일을 다운로드합니다.

1. Cloud Manager의 Git 저장소의 다음 위치에 XSLConfig.xml 파일의 복사본을 만듭니다.

   `/apps/fmdita/config/XSLConfig.xml`

   `XSLConfig.xml` 파일에는 다음과 같은 구성 가능한 매개 변수가 포함되어 있습니다.

   - `inputDir` 요소에서 소스 구조화된 문서를 사용할 수 있는 입력 폴더의 위치를 지정합니다. 예를 들어 구조화된 문서가 `xsltodita` 폴더의 `projects` 폴더에 저장되어 있는 경우 위치를 `/content/dam/projects/xsltodita/`(으)로 지정합니다.

   - `outputDir` 요소에서 출력 폴더의 위치를 지정하거나 기본 출력 위치를 유지합니다. 지정된 출력 폴더가 DAM에 없으면 변환 워크플로우가 출력 폴더를 만듭니다.

   - `xslFolder` 요소에서 XSL 변환 파일이 저장된 폴더의 위치를 지정합니다.

   - ``xslPath`` 요소에서 변환 프로세스를 시작하는 데 사용되는 기본 .XSL 파일의 위치를 지정합니다.

   - ``outputExt`` 요소에서 변환 스트림에서 만든 최종 출력 파일의 파일 확장명을 지정합니다.

   - `createRev` 요소의 경우 변환된 DITA 주제의 새 버전을 만들 것인지 \(`true`\), 만들 것인지 \(`false`\) 여부를 지정하십시오.

1. `XSLConfig.xml` 파일을 저장합니다.

1. `XSLConfig.xml` 파일에서 필요한 매개 변수를 구성한 후 AEM에 로그인하고 Assets UI를 엽니다.

1. 입력 폴더 위치 \(`xsltodita`\)로 이동합니다.

1. 소스 구조화된 문서를 이 폴더에 업로드합니다. DAM의 콘텐츠 업로드에 대한 자세한 내용은 [기존 DITA 콘텐츠 업로드](migrate-content-upload-existing-dita-content.md#)를 참조하십시오.


`<config> </config>` 블록을 사용하여 변환을 위해 하나 이상의 구성 블록을 정의할 수 있습니다. 변환 워크플로우가 실행되고 DITA 주제 형식의 최종 출력이 `outputDir` 요소에 지정된 위치에 저장됩니다.

**상위 항목:**&#x200B;[&#x200B;기존 콘텐츠 마이그레이션](migrate-content.md)
