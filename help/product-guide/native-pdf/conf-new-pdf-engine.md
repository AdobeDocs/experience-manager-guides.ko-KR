---
title: 새 PDF 엔진 활성화
description: Experience Manager Guides에서 새 PDF 엔진을 활성화하는 방법 알아보기
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: f3f30400f776f746427e257e2c937ff3413aa9ac
workflow-type: tm+mt
source-wordcount: '74'
ht-degree: 2%

---


# 기본 PDF 엔진 v2 구성

기본 PDF의 새 게시 엔진, 즉 _기본 PDF 엔진 v2_&#x200B;은(는) 업데이트된 PDF 렌더링 기능을 제공하며 _기본 PDF 엔진 v1_ 문제에 대한 수정 사항을 제공합니다.

구성 파일을 만들려면 [구성 재정의](../install-conf-guide/download-install-config-override.md)의 지침을 사용하십시오. 구성 파일에서 다음 (속성) 세부 사항을 제공합니다.

| PID | 속성 키 | 속성 값 |
|-----|--------------|----------------|
| `com.adobe.fmdita.publish.config.GuidesPublishConfiguratorService` | `guides.publish.config` | `{"PDF_ENGINE": "v2"}` <br> 기본값: `v1` |