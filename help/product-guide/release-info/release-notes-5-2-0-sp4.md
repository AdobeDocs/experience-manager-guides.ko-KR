---
title: 릴리스 정보 | Adobe Experience Manager Guides 5.2.0 서비스 팩 4 릴리스의 릴리스 노트
description: Adobe Experience Manager Guides 5.2.0 서비스 팩 4 릴리스의 업그레이드 프로세스 및 버그 수정에 대해 알아봅니다
role: Leader
TQID: https://experienceleague.adobe.com/HEWV5RxPUfqUYf6m6kQW-fU-LiAM0UFGbfzKjtOCZxk
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
    internal-label: Publishing
role_v2:
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
source-git-commit: a232c8a03cda9b0ef7ae8114c3d901df5fb5bcb4
workflow-type: tm+mt
source-wordcount: '530'
ht-degree: 1%
---
# 5.2.0 서비스 팩 4 릴리스(2026년 11월)의 릴리스 정보

이 문서에서는 Adobe Experience Manager Guides 5.2.0 서비스 팩 4 릴리스의 업그레이드 지침, Java SDK 호환성, 해결된 문제 및 알려진 문제에 대한 정보를 제공합니다.

## Java SDK 리소스

사용자 지정 Java 플러그인 또는 Experience Manager Guides과의 통합을 개발할 때 다음 리소스를 사용하십시오. SDK 버전이 설치된 Experience Manager Guides 릴리스와 일치하는지 확인합니다.

| 릴리스 | Java SDK 버전 | Maven Central | Java API 참조 |
|---|---|---|----|
| 5.2.0 서비스 팩 4(UUID) | 5.2.2 | [AEM Guides SDK API 5.2.2](https://central.sonatype.com/artifact/com.adobe.aem/aem-guides-sdk-api/5.2.2/) | [Javadoc 5.2.2](https://javadoc.io/doc/com.adobe.aem/aem-guides-sdk-api/latest/index.html) |

자세한 내용은 [Maven Central 저장소에서 API JAR 구성 및 사용](https://experienceleague.adobe.com/en/docs/experience-manager-guides/using/api-reference/introduction)을 참조하십시오.

## Experience Manager Guides 5.2.0 서비스 팩 4 릴리스로 업그레이드

Experience Manager Guides 5.2.0 서비스 팩 4 릴리스를 설치하는 방법을 알아봅니다.

>[!NOTE]
>
>이 릴리스는 AEM 6.5 LTS에만 사용할 수 있습니다. 지원되는 서비스 팩은 AEM 6.5 LTS 서비스 팩 2입니다.

### 사전 요구 사항

Experience Manager Guides 5.2.0 서비스 팩 4 업그레이드 프로세스를 시작하기 전에 버전 5.2.0 서비스 팩 1을 사용 중인지 확인하십시오.

### 5.2.0 서비스 팩 4 릴리스의 업그레이드 프로세스

1. Experience Manager Guides 패키지 버전 5.2.0 서비스 팩 4 를 다운로드합니다.
1. 패키지 관리자(`/crx/packmgr`)를 사용하여 패키지를 인스턴스에 업로드합니다.
1. 패키지를 설치합니다. 그런 다음 `fmdita` 번들이 **Active** 상태로 반환되었는지 확인하십시오. `/system/console/bundles`에서 번들 상태를 확인할 수 있습니다.
1. 브라우저 캐시를 지웁니다.

## 해결된 문제

다양한 영역에서 수정된 버그는 다음과 같습니다.

### 작성

- 다른 작성자가 자산을 이동한 후 새로 고쳐지지 않은 탐색기 패널에서 맵으로 자산을 드래그하면 깨진 참조가 맵에 추가됩니다. (GUIDES-57869)

### 자산 관리

- **기존 파일 덮어쓰기** 옵션을 사용하여 이미지와 같은 기존의 비DITA 에셋을 덮어쓰면 업로드된 이미지에 대한 새 버전이 만들어지지 않습니다. 결과적으로 기준선을 사용하여 생성된 출력에는 이전 에셋이 포함됩니다. (GUIDES-59287)

- 비UUID 설정에서 UUID 설정으로 마이그레이션된 이미지와 같은 비DITA 자산을 다른 버전으로 되돌리거나 분기하면 해당 UUID가 변경됩니다. 에셋에 대한 기존 참조가 더 이상 확인되지 않고 해당 에셋을 참조하는 항목에서 이미지가 손상되어 표시됩니다. (GUIDES-58414)

### 게시

- 다른 맵을 내보내는 동안 맵을 게시할 때 출력에서 원본 벡터 이미지 대신 낮은 품질의 이미지 형식을 간헐적으로 사용합니다. (GUIDES-55221)

## 알려진 문제

Adobe은 5.2.0 서비스 팩 4 릴리스에서 다음과 같은 알려진 문제를 확인했습니다.

- 잘못된 위치에 요소를 드래그 앤 드롭하면 편집기는 가장 가까운 유효한 위치로 해당 요소를 이동하며 그 동안 참조는 저장소 경로를 유지할 수 있습니다. 마찬가지로 끌어서 놓기를 사용하여 DITA 맵의 기존 참조를 바꾸면 새 참조가 저장소 경로를 유지할 수 있습니다. (GUIDES-60688)