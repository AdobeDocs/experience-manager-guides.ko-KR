---
title: 클라우드 서비스에 대한 자산 처리 구성
description: 클라우드 서비스를 위한 자산 처리를 구성하는 방법에 대해 알아봅니다.
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 5b29b2b5f725b5d9a2029fb232e62f387a5338fd
workflow-type: tm+mt
source-wordcount: '58'
ht-degree: 3%

---

# 자산 처리 기능 구성

에셋 처리 기능을 구성하려면 다음 단계를 수행하십시오.

1. 구성 파일을 만들려면 [구성 재정의](../cs-install-guide/download-install-additional-config-override.md)의 지침을 사용하십시오.

1. 구성 파일에서 다음 (속성) 세부 사항을 제공합니다.

   | PID | 속성 키 | 속성 값 |
   |---|---|---|
   | `com.adobe.fmdita.config.ConfigManager` | `enable.asset.processing.scheduler` | **기본값:** &quot;true&quot; |
