---
title: 맵 편집기의 기타 기능
description: 기본 및 고급 맵 편집기의 몇 가지 공통 기능을 살펴보십시오. 맵 편집기에서 주요 참조를 확인하는 방법을 알아봅니다.
feature: Authoring, Map Editor
role: User
source-git-commit: 76c731c6a0e496b5b1237b9b9fb84adda8fa8a92
workflow-type: tm+mt
source-wordcount: '467'
ht-degree: 0%

---

# 맵 편집기의 기타 기능 {#id1942D0T0HUI}

기본 및 고급 맵 편집기의 몇 가지 공통 기능은 다음과 같습니다.

## 키 참조 확인 {#id176GD01H05Z}

DITA 콘텐츠 키 참조 또는 `conkeyref`은(는) 한 주제의 콘텐츠 일부를 다른 주제에 삽입하기 위한 메커니즘입니다. 이 메커니즘은 키를 사용하여 직접 콘텐츠 참조 메커니즘이 아닌 재사용할 콘텐츠를 찾습니다. DITA의 직접 및 간접 참조에 대한 자세한 내용은 OASIS DITA 언어 사양의 *DITA 주소 지정*&#x200B;을 참조하십시오.

DITA 주제에 연관된 키 참조가 있는 경우 주제를 미리 보거나, 편집하거나, 검토하기 전에 키 참조를 해결해야 합니다.

주요 참조는 다음 우선 순위 순서로 설정된 루트 맵을 기준으로 확인됩니다.

1. 사용자 환경 설정
1. 맵 보기 패널
1. 폴더 프로필

사용자 환경 설정에서 선택한 루트 맵이 가장 우선하여 주요 참조를 해결한 다음 맵 보기 패널 및 폴더 프로필 루트 맵이 뒤따릅니다. 따라서 [사용자 환경 설정]에 맵이 설정되어 있지 않으면 [맵 보기] 패널에서 연 맵이 사용됩니다. 맵 보기 패널에서 맵이 열리지 않으면 폴더 프로필에 설정된 맵이 주요 참조를 확인하는 데 사용됩니다.

키 참조는 DITA 맵 파일이나 별도의 DITA 파일 내에 저장할 수 있습니다. AEM Guides에서는 프로젝트 수준 또는 세션 수준에서 주요 참조를 지정할 수 있습니다. 사용자 세션에 대해 루트 맵이 이미 정의된 경우 키 확인에 사용됩니다. 그렇지 않으면 해당 폴더에 대한 기본 루트 맵이 사용됩니다. 기본 루트 맵이 구성되지 않은 경우 누락된 키 참조가 사용자에게 강조 표시됩니다.

다음 위치에서 사용할 DITA 맵을 정의하여 DITA 주제의 주요 참조를 해결하는 방법에는 여러 가지가 있습니다.

**프로젝트 속성** - 프로젝트 속성 섹션에서 프로젝트를 만드는 동안 키 참조를 확인하는 루트 맵을 정의할 수 있습니다.

이 루트 맵은 해당 프로젝트와 연결된 모든 자산 \(폴더 및 하위 폴더\)에 적용할 수 있습니다. 여러 프로젝트에서 참조되는 콘텐츠의 경우 알파벳 프로젝트 목록이 유지되고 첫 번째 프로젝트와 연결된 기본 루트 맵이 사용됩니다. 주요 참조를 확인하기 위해 목록에서 사용할 DITA 맵을 선택할 수도 있습니다.

**주제 미리 보기** - 주제 미리 보기 모드에서 도구 모음의 키 해상도 아이콘을 클릭하고 키 참조에 사용할 DITA 파일을 선택합니다.

**주제 편집 보기** - DITA 주제를 편집하는 동안 키 확인 아이콘을 클릭하고 키 참조를 확인하는 데 사용할 DITA 파일을 선택하십시오.

**상위 항목:**[&#x200B;맵 편집기 작업](map-editor.md)