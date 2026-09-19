---
title: 기본 PDF | 기본 PDF 게시를 위한 노드 프로세스 구성
description: 기본 PDF 게시를 위한 노드 프로세스를 구성하는 방법에 대해 알아봅니다.
feature: Output Generation
role: Admin
level: Experienced
exl-id: 5321c785-8259-4ee2-9ada-ee70fb99b4fd
source-git-commit: 82c93529b8535532cf50f6428c41a1881b24859e
workflow-type: tm+mt
source-wordcount: '122'
ht-degree: 1%
---
# Cloud Service용 기본 PDF 게시를 위한 노드 프로세스 구성

기본 PDF 게시는 별도의 NodeJs 프로세스를 시작하여 게시 프로세스에서 생성된 파일을 최종 PDF으로 변환합니다. 다른 시나리오를 지원하려면 기본 PDF 게시를 실행하는 이 노드 프로세스의 구성을 조정해야 할 수 있습니다. 예를 들어 더 큰 워크로드를 실행하려면 생성된 NodeJs 프로세스에 사용할 수 있는 최대 힙 크기를 늘려야 합니다.

구성 파일을 만들려면 [구성 재정의](../install-conf-guide/download-install-config-override.md)의 지침을 사용하십시오.구성 파일에서 다음 (속성) 세부 사항을 제공합니다.

| PID | 속성 키 | 속성 값 |
|---|---|---|
| `com.adobe.fmdita.config.ConfigManager` | `native.pdf.node.opts` | 표준 `NODE_OPTIONS`.<BR>을(를) 설정할 문자열 값 기본값: &quot;&quot; |
