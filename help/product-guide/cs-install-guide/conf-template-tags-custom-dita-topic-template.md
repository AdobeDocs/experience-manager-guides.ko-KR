---
title: 사용자 지정 DITA 주제 템플릿 구성
description: 사용자 지정 DITA 주제 템플릿을 구성하는 방법 알아보기
exl-id: 5a2f4897-9697-4c5c-b5be-8fdb3a211948
feature: Template Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '354'
ht-degree: 2%

---

# 사용자 지정 DITA 주제 템플릿 구성 {#id16A7G0O02TD}

AEM Guides에는 다음과 같은 DITA 주제 템플릿이 포함되어 있습니다.

- 주제

- 작업

- 개념

- 참조

- 용어 설명

- 문제 해결

- 비어 있음


이러한 템플릿을 사용하여 작성 요구 사항에 따라 주제 템플릿을 만들 수 있습니다. 빈 DITA 템플릿에는 다른 템플릿과 같은 구조나 요소가 포함되어 있지 않습니다. 템플릿이 고도로 사용자 지정되고 일반 DITA 주제 템플릿을 기반으로 하지 않는 경우 빈 템플릿을 기반으로 사용할 수 있습니다.

DITA 주제 템플릿을 사용자 정의하고 작성에 사용하려면 다음 세 가지 주요 작업을 수행해야 합니다.

1. *\(선택 사항\)* [사용자 지정 DITA 템플릿 폴더 경로 구성](#id191LCF0095Z)

1. [사용자 지정 작성 템플릿 만들기](conf-folder-level.md#id1917D0EG0HJ)

1. [작성 템플릿 구성](conf-folder-level.md#id1889D0IL0Y4) 섹션에 설명된 대로 사용자 지정 템플릿을 전역 또는 폴더 수준 프로필에 추가합니다.


## 사용자 지정 DITA 템플릿 폴더 경로 구성 {#id191LCF0095Z}

AEM Guides을 사용하면 사용자 정의된 DITA 맵 및 템플릿을 저장하도록 폴더를 구성할 수 있습니다. 기본적으로 템플릿 파일은 DAM의 다음 폴더에 저장됩니다.

`/content/dam/dita-templates/`

주제 및 맵 템플릿 파일을 관리하기 위해 주제 및 맵 템플릿을 저장하는 전용 폴더가 있습니다. 기본적으로 모든 주제 템플릿은 `/content/dam/dita-templates/topics` 아래에 저장됩니다.

폴더를 삭제합니다. 모든 맵 템플릿은 `/content/dam/dita-templates/maps` 폴더에 저장됩니다.

관리자는 기본 폴더에 사용자 지정 맵 또는 주제 템플릿을 만들거나 사용자 지정 템플릿을 저장할 자체 폴더를 만들 수 있습니다. 기본 폴더를 사용하려는 경우 이 프로세스를 건너뛸 수 있습니다.

구성 파일을 만들려면 [구성 재정의](download-install-additional-config-override.md#)의 지침을 사용하십시오. 구성 파일에서 다음 \(property\) 세부 정보를 제공하여 사용자 정의 DITA 주제 템플릿에 대한 폴더를 구성하십시오.

>[!IMPORTANT]
>
> 기본 폴더를 사용하여 사용자 지정 템플릿을 저장하려면 이 프로세스를 건너뛸 수 있습니다.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `topic.templates` | 사용자 지정 템플릿을 저장할 위치를 지정하십시오.<br> 지정된 위치가 DAM에 있으면 모든 기본 맵 및 주제 템플릿이 해당 폴더에 복사됩니다. 위치가 존재하지 않으면 모든 기본 맵 및 주제 템플릿으로 폴더가 생성됩니다. |

**상위 항목:**&#x200B;[&#x200B;항목 및 맵 템플릿 구성](conf-template-tags.md)
