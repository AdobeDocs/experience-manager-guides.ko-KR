---
title: 기본 PDF 출력에서 맵 참조에 대한 부록 렌더링 구성
description: 부록 내의 하위 맵 아래에 추가된 항목을 기본 PDF 출력의 부록 콘텐츠로 렌더링하도록 Experience Manager Guides을 구성하는 방법에 대해 알아봅니다.
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 63ae0f947d50646bed34cd815db6b9fb585fc015
workflow-type: tm+mt
source-wordcount: '284'
ht-degree: 0%
---

# 기본 PDF 출력에서 맵 참조에 대한 부록 렌더링 구성

기본 PDF 출력에서 `<appendix>` 요소 내의 하위 맵에 참조된 주제를 부록이 아닌 장으로 렌더링할 수 있습니다. 기본적으로 Experience Manager Guides은 맵 참조를 요소 이름별로 분류하므로 처리하는 동안 맵이 병합되면 정보가 손실됩니다.

이 설정을 사용하여 DITA-OT에서 생성한 `class` 특성을 대신 사용하여 맵 참조를 분류합니다. 부록 하위 맵의 주제를 부록으로 렌더링합니다.

>[!NOTE]
>
>이 설정은 맵 참조의 분류 방법을 변경합니다. 기본적으로 비활성화되어 있습니다. 컨텐츠가 `<appendix>` 내의 하위 맵에 주제를 배치하고 기본 PDF 출력에서 챕터로 렌더링된 것이 표시되는 경우에만 활성화합니다.

## 이 구성을 사용해야 하는 경우

책 맵의 다음 예를 생각해 보십시오.

- `<appendix>` 요소는 주제를 직접 참조합니다. 이러한 항목은 생성된 PDF에서 부록으로 렌더링됩니다.

  ```XML
  <booktitle>
      <mainbooktitle>Product Guide</mainbooktitle>
    </booktitle>
    <frontmatter>
      <booklists>
        <toc/>
        <tablelist/>
      </booklists>
      <preface href="topics/preface.dita">
      </preface>
    </frontmatter>
    <chapter class="foo" href="topics/getting-started.dita">
    </chapter>  
    <appendix href="topics/appendix-reference-tables.dita">
    </appendix>
    <appendix href="topics/appendix-troubleshooting.dita">
    </appendix>
    <backmatter>
      <booklists>
        <indexlist/>
      </booklists>
    </backmatter>
  </bookmap>`
  ```

- 다른 `<appendix>` 요소는 하위 맵을 참조하고, 하위 맵은 `<topicref>`을(를) 사용하여 주제를 참조합니다.

  ```xml
  <booktitle>
      <mainbooktitle>Product Guide</mainbooktitle>
    </booktitle>
    <frontmatter>
      <booklists>
        <toc/>
        <tablelist/>
      </booklists>
      <preface href="topics/preface.dita">
      </preface>
    </frontmatter>
    <chapter class="foo" href="topics/getting-started.dita">
    </chapter>  
    <appendix format="ditamap" href="submap-for-appendix.ditamap" type="map">
    </appendix>
    <backmatter>
      <booklists>
        <indexlist/>
      </booklists>
    </backmatter>
  </bookmap>
  ```

  부록의 하위 맵:

  ```xml
  <map id="GUID-cc306264-825c-455e-89db-d27af9197a2f">
    <title>submap-for-appendix</title>
    <topicref href="topics/appendix-reference-tables.dita" type="reference">
    </topicref>
    <topicref href="topics/appendix-troubleshooting.dita" type="topic">
    </topicref>
  </map>
  ```

이 구성이 없으면 첫 번째 부록의 항목은 부록으로 렌더링되지만 하위 맵의 항목은 챕터로 렌더링됩니다. 주제만 게시됩니다. 하위 맵 자체는 계층 구조에 사용되며 출력에 표시되지 않습니다.

## 설정 구성

다음은 이 설정을 구성하는 지침입니다.

1. 구성 파일을 만들려면 [구성 재정의](../install-conf-guide/download-install-config-override.md)의 지침을 사용하십시오.

2. 구성 파일에서 다음 (속성) 세부 사항을 제공합니다.

   | PID | 속성 키 | 속성 값 |
   | --------------------------------------- | -------------------------------- | ----------------------------- |
   | `com.adobe.fmdita.config.ConfigManager` | `guides.publish.config` | {USE_DITA_OT_GENERATED_CLASS&quot;: false} |

3. 값을 `true`(으)로 설정하여 설정을 사용하도록 설정하고 Cloud Manager을 사용하여 구성을 배포합니다.