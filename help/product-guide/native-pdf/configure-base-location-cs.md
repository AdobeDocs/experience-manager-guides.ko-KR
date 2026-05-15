---
title: 기본 PDF | Cloud Services용 PDF 게시를 위한 기본 출력 위치 구성
description: 클라우드 서비스용 PDF 게시를 위한 기본 출력 위치 구성
feature: Output Generation
role: Admin
level: Experienced
exl-id: d79085d6-938a-4e80-84a2-03562e6b76e0
TQID: https://experienceleague.adobe.com/E4J5BCDQBZdyqfQ-ksOCrMZYO1Bg9BMI-wQZRK96yqY
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a3bd6397-2eb2-4908-a61c-226e26855dcaid: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2: id: fd6cc9e1-e5e5-494e-b7b1-a32f2d6cd7c9
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 80
ht-degree: 2%

---

# 클라우드 서비스에 대한 출력을 게시하기 위한 기본 출력 위치 구성

기본 출력 위치를 구성하려면 다음 단계를 수행하십시오.

1. 구성 파일을 만들려면 [구성 재정의](../cs-install-guide/download-install-additional-config-override.md)의 지침을 사용하십시오.

1. 구성 파일에서 다음 (속성) 세부 정보를 제공하여 기본 출력 위치를 구성합니다.

   | PID | 속성 키 | 속성 값 |
   |---|---|---|
   | `com.adobe.fmdita.config.ConfigManager` | `base.output.path` | **기본값:** &quot;/content/dam/fmdita 출력&quot; |
