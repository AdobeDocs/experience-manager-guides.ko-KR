---
title: 기본 PDF | 기본 PDF 게시를 위한 노드 프로세스 구성
description: 기본 PDF 게시를 위해 노드 프로세스를 구성하는 방법 알아보기
exl-id: f470939b-a5cb-4d28-92d1-7a0a52c4c637
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '118'
ht-degree: 1%

---

# 기본 PDF 게시를 위한 노드 프로세스 구성

기본 PDF 게시는 별도의 NodeJs 프로세스를 시작하여 게시 프로세스에서 생성된 파일을 최종 PDF으로 변환합니다. 다른 시나리오를 지원하려면 기본 PDF 게시를 실행하는 이 노드 프로세스의 구성을 조정해야 할 수 있습니다. 예를 들어 더 큰 워크로드를 실행하려면 생성된 NodeJs 프로세스에 사용할 수 있는 최대 힙 크기를 늘려야 합니다.

에 제공된 지침 사용 [구성 재정의](../cs-install-guide/download-install-additional-config-override.md) 구성 파일을 만들려면 구성 파일에 다음(등록 정보) 세부 정보를 입력합니다.

| PID | 속성 키 | 속성 값 |
|---|---|---|
| `com.adobe.fmdita.config.ConfigManager` | `native.pdf.node.opts` | 표준을 설정할 문자열 값 `NODE_OPTIONS`.<BR> 기본값: &quot;&quot; |
