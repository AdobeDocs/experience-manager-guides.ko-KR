---
title: DITA AEM Guides에서 Markdown 사용
description: DITA AEM Guides에서 Markdown 마이그레이션 및 사용
author: Pulkit Nagpal(punagpal)
exl-id: a94c0129-df40-4b61-ac60-679b2ffe7e86
TQID: https://experienceleague.adobe.com/z41KjrBkAeDaH-iKXOFLH44qOQElziip1FqcRhnKaUI
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a3bd6397-2eb2-4908-a61c-226e26855dcaid: ab01a588-7dea-43f2-a699-0b3f128465d6
subfeature_v2: id: ad602516-aca3-4247-9ae8-f393d958efa9
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554
topic_v2: id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 281
ht-degree: 0%

---

# AEM Guides에서 Markdown 사용

## 사용 가능한 옵션

AEM Guides에서 Markdown 파일을 사용하는 방법에는 두 가지가 있습니다.

- 옵션 1 : AEM Guides에서 기존 Markdown을 가져와서 ditamap 내에서 직접 사용하여 게시합니다

- 옵션 2 : 기존 Markdown 파일을 DITA로 변환

각 옵션에 대해 살펴보겠습니다.

### 옵션 1: AEM Guides에서 기존 Markdown을 가져와서 ditamap 내에서 직접 사용하여 게시합니다

설정이 더 간단하고 구현이 더 빠릅니다. 그러나 콘텐츠 재사용 사례와 같은 AEM Guides 기능의 제한된 기능 활용률.

게시 엔진이 파일 형식을 이해하고 그에 따라 게시하도록 `format="markdown" ` 또는 `format="mdita"` 특성을 추가해야 합니다.

샘플 파일: [Markdown Ditamap](https://acrobat.adobe.com/id/urn:aaid:sc:AP:da31137e-be84-44fb-8974-d038eeff0283)

![참조용 스크린샷](../../assets/authoring/markdown_map.png)


#### PDF 및 웹 출력에 게시

AEM Guides은 Markdown 콘텐츠로 ditamap을 게시하는 웹(Html5/AEM Site)과 PDF(Native-PDF/DITA-OT) 옵션을 모두 제공합니다

### 옵션 2 : Markdown을 DITA 형식으로 변환

콘텐츠 재사용 가능성, 조건부 처리 번역, 기준선 등을 제공하는 AEM Guides 기능의 전체 활용입니다. 그러나 `.md`을(를) `.dita` 형식으로 변환하려면 먼저 노력해야 합니다.

Adobe FrameMaker 및 DITA-OT와 같은 외부 도구를 사용하여 DITA로 Markdown을 변환할 수 있습니다.


Adobe FrameMaker의 경우 [Markdown 가져오기](https://www.adobe.com/in/products/framemaker/features.html#import-markdown)를 참조하십시오.

DITA-OT에 대해서는 [입력으로 Markdown](https://www.dita-ot.org/dev/topics/markdown-input.html)을 참조하세요.

Adobe FrameMaker을 사용하여 변환된 샘플 파일: [DITA 샘플로 Markdown](https://acrobat.adobe.com/id/urn:aaid:sc:AP:874881f3-ba43-410c-abc6-2df899536d79)

#### PDF 및 웹 출력에 게시

Markdown 파일이 DITA로 변환되면 사용자는 AEM Guides에서 사용할 수 있는 모든 형식으로 출력을 원활하게 게시할 수 있습니다.

AEM Guides에서 사용 가능한 형식: [출력 형식](../../../../user-guide/generate-output-understand-presets.md)
