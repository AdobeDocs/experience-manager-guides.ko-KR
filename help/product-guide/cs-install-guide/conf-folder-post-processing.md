---
title: 파일 이름 구성
description: Adobe Experience Manager Assets에 업로드된 폴더에 대해 사후 처리를 비활성화하는 방법에 대해 알아보기
feature: Filename Configuration
role: Admin
level: Experienced
source-git-commit: fedd04f4a261ec199f86cb38ecd57e76b9393ae5
workflow-type: tm+mt
source-wordcount: '258'
ht-degree: 1%

---


# 폴더에 대한 사후 처리 비활성화

기본적으로 업로드된 모든 자산은 DAM 자산 업데이트 워크플로우를 사용하여 처리됩니다. Experience Manager 안내서는 이 워크플로우의 일부로 후처리라는 추가 처리를 실행합니다. UUID를 생성하는 데도 도움이 됩니다

에 파일 및 폴더를 업로드하는 동안 *Adobe Experience Manager Assets* 서버에서 사후 처리 및 UUID 생성을 비활성화할 수도 있습니다.


의 지침 사용 [구성 재정의](download-install-additional-config-override.md#) 구성 파일을 만듭니다. 구성 파일에서 다음 (속성) 세부 정보를 제공하여 지정된 경로에서 후처리를 비활성화하거나 폴더에 대한 후처리를 무시합니다.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `ignored.post.processing.paths` | 표준 NODE_PROPERTIES를 설정하는 문자열 값(다중 값 OPTIONS, 누락된 경로가 있는 문자열) `/` 끝 부분에서) <br> **기본값**: `/content/dam/projects/translation_output` |


| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `enabled.post.processing.paths` | 표준 NODE_PROPERTIES를 설정하는 문자열 값(다중 값 OPTIONS, 누락된 경로가 있는 문자열) `/` 끝 부분에서) <br> **기본값**: `/content/dam` |


## 후처리를 활성화 또는 비활성화하는 규칙

기본적으로 후처리는 Experience Manager DAM 폴더 아래의 모든 폴더 경로에 대해 수행됩니다. 구성은 다음 규칙에 따라 모든 폴더에 적용됩니다.

* 사후 처리에 대해 상위가 무시되지만 하위 폴더가 활성화된 경우 하위 및 모든 후속 항목이 활성화된 것으로 간주됩니다.
* 상위 항목을 사후 처리에 사용할 수 있지만 하위 항목이 무시되면 하위 항목과 모든 후속 항목이 무시된 것으로 간주됩니다.
* 무시된.post.processing.paths 및 enabled.post.processing.paths 구성에 동일한 폴더 경로가 있으면 사후 처리에서 무시된 것으로 간주됩니다.
