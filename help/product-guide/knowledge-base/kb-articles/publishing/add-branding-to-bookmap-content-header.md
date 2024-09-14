---
title: DITA PDF의 첫 페이지에 엔터프라이즈 브랜딩 추가
description: 표지와 챕터 페이지를 통합하여 기업의 정체성이 컨텐츠의 맨 위에 명확하게 표시되도록 하여 기업 브랜드를 달성할 수 있습니다.
feature: Native PDF Output
author: Pulkit Nagpal(punagpal)
role: User, Admin
source-git-commit: a9f8622dc5a2647bcff32c8895700d5c5933be4a
workflow-type: tm+mt
source-wordcount: '419'
ht-degree: 0%

---

# DITA PDF의 첫 페이지에 엔터프라이즈 브랜딩 추가

## 이 문서에서는 다음 내용을 다룹니다.

FrontCover 페이지를 챕터 페이지와 원활하게 병합하여 엔터프라이즈 브랜딩을 구현하고, 기업의 ID가 콘텐츠의 맨 위에 두드러지게 표시되도록 합니다.

- [콘텐츠 설정](#set-up-your-content)
- [PDF 템플릿에서 필요한 변경 작업 수행](#create-necessary-changes-in-pdf-template)

**이전:**

![브랜딩을 수정하기 전: 미리 브랜딩된 PDF 레이아웃을 표시하는 스크린샷](../assets/publishing/branding-image1.png)
<br>
<br>

**이후:**

![브랜딩 수정 후: 사후 브랜드 PDF 레이아웃을 보여 주는 스크린샷](../assets/publishing/branding-image2.png)

## 콘텐츠 설정

콘텐츠를 PDF 형식으로 게시하려면 Ditamap 또는 Bookmap을 만들어야 합니다.

샘플 북맵 구조 :

```
<bookmap>
  <title>My Bookmap Title </title>
  <frontmatter>
    <booklists>
      <toc/>
      <figurelist/>
      <tablelist/>
    </booklists>
  </frontmatter>

  <chapter href="chapter1.ditamap">
  <chapter href="chapter2.ditamap">
  </chapter>

  <backmatter>
    <booklists>
      <indexlist/>
    </booklists>
  </backmatter>
</bookmap>
```

샘플 Ditamap 구조:

```
<map title="My map Title">

  <topicref href="topic1.dita" >
  </topicref>
  <topicref href="topic2.dita">
  </topicref>
  
</map>
```

Bookmap에 `<frontmatter>`이(가) 포함된 경우 PDF의 FrontCover가 자동으로 생성됩니다.


## PDF 템플릿에서 필요한 변경 작업 수행

이 섹션에서는 템플릿을 설정합니다. (시작하는 데 하이테크 템플릿을 사용하거나 복제할 수 있습니다.)

### 템플릿 설정:

- 기본 PDF 템플릿으로 이동합니다.
- FrontCover 페이지 레이아웃으로 이동하여 편집합니다.
- 여기에 `data-region="content"`에 브랜딩 이미지를 추가하십시오.
- 필요한 경우 챕터 템플릿에 다른 필요한 변경 사항을 추가합니다.
- 이제 콘텐츠를 기반으로 아래 단계를 따르십시오.


#### PDF 생성에 Ditamap을 사용하는 경우:

DITAMAP을 게시할 때 네이티브 PDF은 FrontCover 페이지를 자동으로 생성하는 기능을 제공합니다. FrontCover Page 생성을 활성화하거나 비활성화하는 옵션은 기본 PDF 템플릿에서 구성할 수 있습니다.

병합하려면:
- 기본 PDF 템플릿 설정 —> 페이지 레이아웃 순서로 이동합니다.
- 이제 FrontCover를 다음 페이지(예: 챕터 및 주제)와 병합합니다.
  ![FrontCover를 챕터와 병합: 기본 PDF 템플릿 설정을 보여 주는 스크린샷](../assets/publishing/branding-image3.png)
- 템플릿을 저장하고, 사전 설정에 사용할 이 템플릿을 선택하고 게시합니다!


#### PDF 생성에 Bookmap을 사용하는 경우

북맵의 경우, 페이지 레이아웃 순서의 순서는 템플릿의 순서가 아닌 북맵 구조에 의해 제어됩니다.

북맵에서 이를 달성하기 위해 NativePDF의 JavaScript 기능을 활용합니다.

- 템플릿의 리소스 폴더에서 JavaScript 아래에 추가

```
window.addEventListener('DOMContentLoaded', function () {
    window.pdfLayout.onAfterPagination(function () {
        var frontMatterWrappers = document.querySelectorAll('.rh-front-matter-wrapper');

        frontMatterWrappers.forEach(function(wrapper) {
            var contentDiv = wrapper.querySelector('div[data-region="content"]');
            var chapterBody = document.querySelector('.chapter-body');

            if (contentDiv && chapterBody) {
                chapterBody.insertBefore(contentDiv, chapterBody.firstChild);
            }

            wrapper.remove();
        });
    });
});
```

- 이 JavaScript을 챕터 템플릿에 포함하십시오.
  ![챕터 템플릿에 JavaScript 포함: 페이지 레이아웃 PDF 템플릿에 항목을 표시하는 스크린샷](../assets/publishing/branding-image4.png)

- 사전 설정 옵션에서 JavaScript 활성화
  ![JavaScript 사전 설정 사용: JavaScript을 사용하도록 설정하는 사전 설정 설정을 보여 주는 스크린샷](../assets/publishing/branding-image5.png)

- Publish!

## 첨부 파일 :

- [샘플 PDF 템플릿 패키지를 다운로드하여 적용된 변경 사항을 확인합니다.](../assets/publishing/NativePDF_DemoTemplate.zip)
- [샘플 PDF 사전 설정 패키지를 다운로드하여 적용된 변경 사항을 확인합니다.](../assets/publishing/Preset_Package.zip)


## 기타 리소스:

- [PDF에 DITA Bookmap의 목차를 포함하는 방법](./how-to-include-bookmap-toc-in-pdf-publishing.md)
- [기본 PDF에 대한 전문가 세션 비디오](../../expert-sessions/native-pdf-publishing-eamples-part1-june2023.md)

