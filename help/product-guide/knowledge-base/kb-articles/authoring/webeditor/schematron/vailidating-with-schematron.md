---
title: 웨비터에서의 스키마 지원
description: 웨비저에서 Schematron 작업
exl-id: 3e61432f-d81e-446e-b0ad-560f5b9fa91a
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '379'
ht-degree: 0%

---

# 웹 편집기 내 콘텐츠 품질 제어

이 문서에서는 AEM Guides 웹 편집기의 유효성 검사 가능성에 대한 개요를 제공합니다.
디자인 웹 편집기에서 시스템의 DITA 스키마 설정을 활용하여 사용자가 DITA 규격 콘텐츠를 만들도록 강제합니다. 이를 통해 시스템에 저장된 모든 콘텐츠는 구조화되고 재사용 가능하며 유효한 DITA 콘텐츠입니다.

DITA 규칙에 대한 지원 외에도 웹 편집기는 를 기반으로 하는 콘텐츠 유효성 검사도 지원합니다.*도식 문자*&quot;규칙.

&quot;*도식 문자*&#x200B;는 XML 파일에 대한 테스트를 정의하는 데 사용되는 규칙 기반 유효성 검사 언어를 나타냅니다. Schematron 파일을 가져와서 웹 편집기에서 편집할 수도 있습니다. &quot;Schematron&quot; 파일을 사용하여 특정 규칙을 정의한 다음 DITA 주제 또는 맵에 대해 유효성을 검사할 수 있습니다. Schematron 규칙은 규칙으로 정의된 제한을 적용하여 XML 구조의 일관성을 보장할 수 있습니다. 이러한 제약은 콘텐츠의 품질과 일관성을 소유한 중소기업에 의해 이루어진다.

    참고: 웹 편집기는 ISO Schematron을 지원합니다.


## 웹 편집기에서 &quot;Schematron&quot;이 작동하는 방법 알아보기

### 스키마 규칙 구성

의 &quot;Schematron 파일 지원&quot; 섹션을 참조하십시오. [사용 안내서](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/4-2/Adobe-Experience-Manager-Guides_UUID_User-Guide_EN.pdf#page=148)


### 파일 저장에 유효성 검사 규칙 적용

Webeditor 설정을 사용하면 사용자가 콘텐츠를 업데이트할 때마다 실행되는 Schematron 규칙/파일을 설정할 수 있습니다. 자세한 내용은 의 &quot;유효성 검사&quot; 섹션을 참조하십시오. [사용 안내서](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/4-2/Adobe-Experience-Manager-Guides_UUID_User-Guide_EN.pdf#page=58)

![웹 편집기 설정에서 규칙 설정](../../../assets/authoring/schematron-editorsettings-validation-tab.png)


### 유효성 검사를 수동으로 실행할 수 있습니까?

예. 콘텐츠를 만드는 동안 작성자/사용자로서 웹 편집기의 Schematron 패널을 사용하여 schematron 파일을 업로드하고 편집기에서 열려 있는 파일에 유효성 검사를 실행할 수 있습니다.

    이 작업을 수행하려면 폴더 프로필 관리자는 모든 사용자가 유효성 검사 패널에서 Schemtron 파일을 추가하도록 허용해야 합니다. 편집기 설정(위의 스크린샷)을 참조하십시오.

![스키마 파일 선택](../../../assets/authoring/schematron-rightpanel-validation-addsch.png)
![유효성 검사 실행](../../../assets/authoring/schematron-rightpanel-validation-runsch.png)


### 지원되는 규칙

현재 버전의 AEM Guides에서는 &quot;어설션&quot; 기반 규칙을 사용하는 유효성 검사만 지원합니다. (참조 [에셋과 보고서](https://schematron.com/document/205.html)) &quot;보고서&quot;를 기반으로 하는 모든 규칙은 아직 지원되지 않습니다.


### 샘플 및 Schematron 규칙에 대한 추가 도움말

#### 샘플 사용 사례

- 링크가 외부인지, 범위에 &quot;외부&quot;가 있는지 확인

  ```
  <sch:pattern>
      <sch:rule context="xref[contains(@href, 'http') or contains(@href, 'https')]">
          <sch:assert test="@scope = 'external' and @format = 'html'">
              All external xref links must be with scope='external' and format='html'
          </sch:assert>
      </sch:rule>
  </sch:pattern>
  ```

- 맵에 &quot;topicref&quot;가 하나 이상 있는지, &quot;ul&quot; 아래에 &quot;li&quot;가 하나 이상 있는지 확인하십시오.

  ```
  <sch:pattern>
      <sch:rule context="map">
          <sch:assert test="count(topicref) > 0">
              There should be atleast one topicref in map
          </sch:assert>
      </sch:rule>
  
      <sch:rule context="ul">
          <sch:assert test="count(li) > 1" >
              A list must have more than one item.
          </sch:assert>
      </sch:rule>
  </sch:pattern>
  ```

- &quot;indexterm&quot; 요소는 항상 &quot;prolog&quot;에 있어야 합니다.

  ```
  <sch:pattern>
      <sch:rule context="*[contains(@class, ' topic/indexterm ')]">
          <sch:assert test="ancestor::node()/local-name() = 'prolog'">
              The indexterm element should be in a prolog.
          </sch:assert>
      </sch:rule>
  </sch:pattern>
  ```

#### 리소스

- 이해  [Schematron 기본 사항](https://da2022.xatapult.com/#what-is-schematron)
- 다음에 대한 추가 정보 [Schematron의 어설션 규칙](https://www.xml.com/pub/a/2003/11/12/schematron.html#Assertions)
- [샘플 Schematron 파일](../../../assets/authoring/sample_schematron.sch)
