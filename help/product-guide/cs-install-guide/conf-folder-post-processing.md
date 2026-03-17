---
title: 파일 이름 구성
description: Adobe Experience Manager Assets에 업로드된 폴더에 대해 사후 처리를 비활성화하는 방법에 대해 알아보기
feature: Filename Configuration
role: Admin
level: Experienced
exl-id: 42722c6f-1b1c-4a7e-89ef-a373623eb774
source-git-commit: 635206ca34db633a998b0156e2549d86a83f8131
workflow-type: tm+mt
source-wordcount: '574'
ht-degree: 0%

---

# 폴더에 대한 사후 처리 비활성화

기본적으로 업로드된 모든 자산은 DAM 자산 업데이트 워크플로우를 사용하여 처리됩니다. Experience Manager Guides은 이 워크플로우의 일부로 후처리라는 추가 처리를 실행합니다. UUID를 생성하는 데도 도움이 됩니다

*Adobe Experience Manager Assets* 서버에 파일과 폴더를 업로드하는 동안 사후 처리 및 UUID 생성을 비활성화할 수도 있습니다.

[구성 재정의](download-install-additional-config-override.md#)의 지침을 사용하여 구성 파일을 만듭니다. 구성 파일에서 다음 (속성) 세부 정보를 제공하여 지정된 경로에서 후처리를 비활성화하거나 폴더에 대한 후처리를 무시합니다.

>[!NOTE]
>
> 정규 표현식(정규 표현식)을 사용하여 여러 폴더 또는 전체 폴더 계층에 적용되는 규칙을 정의할 수도 있습니다. 자세한 내용은 [정규 표현식을 사용하여 사후 처리를 활성화하거나 비활성화하십시오](#use-regex-to-enable-or-disable-post-processing)섹션을 참조하십시오.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `ignored.post.processing.paths` | 표준 NODE_OPTIONS(다중 값 속성, 끝에 `/`이(가) 없는 경로가 있거나 regex인 문자열) <br>을(를) 설정하는 문자열 값 **기본값**: `/content/dam/projects/translation_output` |

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `enabled.post.processing.paths` | 표준 NODE_OPTIONS(다중 값 속성, 끝에 `/`이(가) 없는 경로가 있거나 regex인 문자열) <br>을(를) 설정하는 문자열 값 **기본값**: `/content/dam` |

## 후처리를 활성화 또는 비활성화하는 규칙

기본적으로 후처리는 Experience Manager DAM 폴더 아래의 모든 폴더 경로에 대해 수행됩니다. 구성은 다음 규칙에 따라 모든 폴더에 적용됩니다.

* 사후 처리에 대해 상위가 무시되지만 하위 폴더가 활성화된 경우 하위 및 모든 후속 항목이 활성화된 것으로 간주됩니다.
* 상위 항목을 사후 처리에 사용할 수 있지만 하위 항목이 무시되면 하위 항목과 모든 후속 항목이 무시된 것으로 간주됩니다.
* 동일한 폴더 경로가 `ignored.post.processing.paths`과(와) `enabled.post.processing.paths` 구성에 모두 있으면 사후 처리에서 무시된 것으로 간주됩니다.

## 정규 표현식을 사용하여 사후 처리 활성화 또는 비활성화

개별 폴더 경로를 지정하는 대신 정규 표현식(정규 표현식)을 사용하여 여러 폴더 또는 전체 폴더 계층에 적용되는 규칙을 정의할 수 있습니다.

정규 표현식 패턴은 사후 처리 동안 전체 에셋 경로에 대해 평가됩니다.

정규 표현식(regex)을 사용하여 무시되고 활성화된 후 처리 경로를 구성하면 AEM Guides은 자산 경로에 대해 두 구성을 모두 평가합니다. 경로가 무시 규칙 및 활성화 규칙과 모두 일치하는 경우 무시 규칙이 항상 우선합니다.

다음 예제는 regex 기반 무시 및 활성화 규칙을 평가하는 방법을 보여 줍니다.

## 사후 처리를 위한 정규 표현식 평가 시나리오

### 상위 계층 무시, 특정 폴더 활성화

**정규 표현식 무시**

`regex:/content/dam/lang-test/.*`

**정규 표현식 사용**

`regex:/content/dam/lang-test/.*/parent1`

위의 예에서는 `/content/dam/lang-test/en/parent1`에 대해 사후 처리가 비활성화됩니다.

경로가 regex 활성화와 일치하지만 regex 무시와 이미 일치합니다. 규칙 무시가 우선하므로 사후 처리가 활성화되지 않습니다.

### 특정 폴더 무시, 더 광범위한 계층 구조 활성화

**정규 표현식 무시**

`regex:/content/dam/lang-test/.*/parent1`

**정규 표현식 사용**

`regex:/content/dam/lang-test/.*`

위의 예에서 사후 처리는 `/content/dam/lang-test/en/parent1`에 대해 비활성화되고 `/content/dam/lang-test/en/parent2`에 대해 활성화됩니다.

`parent1` 경로는 명시적으로 무시되며 비활성화 상태로 유지됩니다. 정규 표현식 활성화만 일치하는 다른 폴더가 처리됩니다.

### 상위 폴더 무시, 하위 폴더 활성화

**정규 표현식 무시**

`regex:/content/dam/lang-test/.*/parent1`

**정규 표현식 사용**

`regex:/content/dam/lang-test/.*/parent1/child1`

위의 예에서 사후 처리는 `/content/dam/lang-test/en/parent1` 및 `/content/dam/lang-test/en/parent1/child2`에 대해 비활성화되고 `/content/dam/lang-test/en/parent1/child1`에 대해 활성화됩니다.

regex에서 명시적으로 활성화한 하위 폴더가 처리됩니다. 다른 하위 폴더는 상위 경로가 ignore 정규 표현식과 일치하므로 비활성화된 상태로 유지됩니다.

### 특정 하위 폴더 무시, 상위 계층 활성화

**정규 표현식 무시**

`regex:/content/dam/lang-test/.*/parent1/child1`

**정규 표현식 사용**

`regex:/content/dam/lang-test/.*/parent1`

위의 예에서 사후 처리는 `/content/dam/lang-test/en/parent1/child1`에 대해 비활성화되고 `/content/dam/lang-test/en/parent1` 및 `/content/dam/lang-test/en/parent1/child2`에 대해 활성화됩니다.

명시적으로 무시된 하위 폴더만 건너뜁니다. 상위 폴더 및 기타 하위 폴더는 regex 활성화와 일치하고 regex 무시와 일치하지 않으므로 처리됩니다.

