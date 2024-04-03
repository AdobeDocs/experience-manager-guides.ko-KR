---
title: NativePDF를 사용하여 목차 게시
description: NativePDF를 사용하여 DITA 북맵에 대한 TOC 및 기타 북리스트 게시
feature: Native PDF Output
role: User, Admin
source-git-commit: 6ccaef5d35d492fe8dbe0f8b52af8d11258f3d2a
workflow-type: tm+mt
source-wordcount: '255'
ht-degree: 0%

---

# PDF 게시에서 북맵의 목차 생성

## 북맵 설정

포함 `<toc>`  요소: 북맵 내 `<frontmatter>`요소, 다음 위치 찾기 `<booklists>` 요소를 생성하지 않습니다.  네스트 a `<toc>` 요소 내부 `<booklists>` 다음과 같이:

```
<frontmatter>
  <booklists>
    <toc/>  <figurelist/>
    <tablelist/>
  </booklists>
</frontmatter>
```

DITA 사양을 사용하여 목차와 북리스트를 `<backmatter>` 섹션도 참조하십시오.


```
<backmatter>
    <booklists>
      <toc/>
      <figurelist/>
      <indexlist/>
    </booklists>
  </backmatter>
```

TOC 및 북리스트는 북맵에 정의된 구조를 기반으로 자동으로 생성됩니다.

북맵이 설정되면 기본 PDF 를 사용하여 PDF 출력을 생성합니다. 이 템플릿은 TOC 및 북리스트를 비롯한 북맵 구조 및 참조를 처리합니다.

## TOC 디자인 및 PDF 순서

기본 PDF 기능을 사용하면 목차의 레이아웃과 디자인을 맞춤화하는 편리한 방법을 사용할 수 있습니다.

layout.css를 통해 TOC 및 스타일에 대한 별도의 페이지 레이아웃을 통해 디자인을 제어할 수 있습니다.

PDF의 TOC 및 기타 북리스트 순서는 북맵의 구조만 기반으로 합니다.

![toc](../assets/publishing/toc.png)


## FAQ

- ### PDF에 Ditamap의 TOC를 포함하는 방법

Ditamaps 자체는 북맵처럼 목차(TOC)를 직접 가지고 있지 않습니다. 그러나 ditamaps는 콘텐츠의 구조를 정의하는 데 중요한 역할을 하며 TOC 생성 프로세스에 간접적으로 기여합니다.

Ditamap을 게시하는 경우 기본 PDF은 TOC 및 북리스트를 자동으로 생성하는 기능을 제공합니다. 기본 PDF 설정에서 ditamap의 TOC 생성을 활성화/비활성화할 수 있습니다.

![목차 비활성화 활성화](../assets/publishing/pageorder.png)

## 추가 리소스 :

- [기본 PDF 디자인 페이지 레이아웃 설명서](https://experienceleague.adobe.com/en/docs/experience-manager-guides/using/install-guide/on-prem-ig/output-gen-config/config-native-pdf-publish/design-page-layout)
- [네이티브 PDF essentials 사전 녹화된 전문가 세션](https://experienceleague.adobe.com/en/docs/experience-manager-guides/using/knowledge-base/expert-session/native-pdf-publishing-essentials-feb23)

<br>
<br>

AEM Guides 커뮤니티에 질문을 게시합니다. [포럼](https://experienceleaguecommunities.adobe.com/t5/experience-manager-guides/ct-p/aem-xml-documentation) 모든 쿼리에 사용됩니다.


