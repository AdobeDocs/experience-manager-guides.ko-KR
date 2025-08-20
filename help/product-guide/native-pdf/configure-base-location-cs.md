---
title: 기본 PDF | 클라우드 서비스용 PDF 게시를 위한 기본 출력 위치 구성
description: 클라우드 서비스용 PDF 게시를 위한 기본 출력 위치 구성
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: ab6f1f09de2ef758d7f05ba0a49194ac9f387dea
workflow-type: tm+mt
source-wordcount: '79'
ht-degree: 2%

---

# 클라우드 서비스에 대한 출력을 게시하기 위한 기본 출력 위치 구성

기본 출력 위치를 구성하려면 다음 단계를 수행하십시오.

1. 구성 파일을 만들려면 [구성 재정의](../cs-install-guide/download-install-additional-config-override.md)의 지침을 사용하십시오.

1. 구성 파일에서 다음 (속성) 세부 정보를 제공하여 기본 출력 위치를 구성합니다.

   | PID | 속성 키 | 속성 값 |
   |---|---|---|
   | `com.adobe.fmdita.config.ConfigManager` | `base.output.path` | **기본값:** &quot;/content/dam/fmdita 출력&quot; |
