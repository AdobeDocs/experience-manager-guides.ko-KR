---
title: DITA PDF에 사용자 정의 글꼴 추가
description: 사용자 정의 글꼴 통합을 통해 기본 DITA PDF의 모든 콘텐츠에서 브랜드 정체성과 시각적 일관성을 강화할 수 있습니다.
feature: Native PDF Output
author: Pulkit Nagpal(punagpal)
role: User, Admin
source-git-commit: 518bec870dc07e88a422d889a1c54be26c248799
workflow-type: tm+mt
source-wordcount: '222'
ht-degree: 0%

---

# DITA 기본 글꼴에 사용자 정의 PDF 추가

## 이 문서에서는 다음 사항을 다룹니다.

사용자 지정 글꼴을 추가하여 모든 콘텐츠에서 브랜드 정체성과 시각적 일관성을 강화합니다.

이 프로세스에는 다음 3단계가 포함됩니다.

- [사용자 지정 글꼴 업로드](#step-1--upload-the-custom-font-to-the-resource-folder-of-your-template)
- [PDF 템플릿의 스타일시트에서 필요한 변경](#step-2--make-necessary-changes-in-pdf-templatess-stylesheet)

- [사용된 글꼴 포함(선택 사항)](#step-3-optional--embed-used-font-in-pdf)

## 1단계 : 사용자 지정 글꼴을 템플릿의 리소스 폴더에 업로드

![사용자 지정 글꼴 업로드 및 가져오기 &#x200B;](../assets/publishing/custom-font1.png)

## 2단계 : PDF 템플릿의 스타일시트에서 필요한 변경

![PDF 템플릿의 스타일시트 &#x200B;](../assets/publishing/custom-font2.png)에 있는 글꼴

## 3단계 (선택 사항) : 사용된 글꼴을 PDF에 포함

![DITA PDF에 포함된 사용자 지정 글꼴 &#x200B;](../assets/publishing/custom-font3.png)

## FAQ

- ### Adobe Fonts을 사용할 수 있습니까?

> 예, fonts.adobe.com으로 이동한 다음 &quot;웹 프로젝트에 추가&quot;를 클릭합니다.
> 
> `" @import url("https://use.typekit.net/xxxx.css")` 같은 가져오기 코드 복사;
>
> 콘텐츠 CSS에 붙여넣고 CSS 파일에서 원하는 대로 변경합니다.

![DITA PDF에서 adobe 글꼴 사용](../assets/publishing/custom-font4.png)


- ### 내 글꼴이 PDF에 표시되지 않습니다.

> 글꼴 이름 맞춤법을 다시 확인하십시오(가장 일반적인 실수).
>
> PDF이 열려 있는 시스템에서 글꼴을 사용할 수 없는 경우 글꼴을 임베드하고 있는지 확인합니다.

- ## 다른 쿼리의 경우 해당 CSM에 문의하십시오


## 기타 리소스:

- [PDF에 DITA Bookmap의 목차를 포함하는 방법](./how-to-include-bookmap-toc-in-pdf-publishing.md)
- [PDF 게시에 TOC를 포함하는 방법](./how-to-include-bookmap-toc-in-pdf-publishing.md)
- [기본 PDF에 대한 전문가 세션 비디오](../../expert-sessions/native-pdf-publishing-eamples-part1-june2023.md)