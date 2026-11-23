---
title: 릴리스 정보 | Adobe Experience Manager Guides 5.2.0 서비스 팩 3 릴리스의 문제가 해결되었습니다.
description: Adobe Experience Manager Guides 5.2.0 서비스 팩 3 릴리스의 버그 수정에 대해 알아봅니다
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
source-git-commit: a3144f0078b2073289043befacc5e2358b9c0e02
workflow-type: tm+mt
source-wordcount: '816'
ht-degree: 0%
---
# 5.2.0 서비스 팩 3 릴리스(2026년 11월)의 문제가 해결되었습니다.

이 문서에서는 Adobe Experience Manager Guides 5.2.0 서비스 팩 3 릴리스의 다양한 영역에서 수정된 버그를 다룹니다.

[5.2.0 서비스 팩 3 릴리스의 업그레이드 지침](upgrade-instructions-5-2-0-sp3.md)에 대해 알아봅니다.

## 편집기 2.0

- 작성자 모드에서 표를 복사하여 작성자 모드로 붙여넣으면 `colwidth`과(와) 같은 특성과 `colspec`에 정의된 다른 특성이 제거되어 열 너비 설정이 손실됩니다. (GUIDES-52916)
- Microsoft Word에서 표를 붙여넣으면 머리글 행 셀이 만들어지지만 해당 내용은 손실됩니다. (GUIDES-49847)
- Ctrl+V를 사용하여 Microsoft Word 또는 유사한 텍스트 편집기에서 `codeblock` 요소에 코드를 붙여넣으면 줄바꿈과 선행 공백이 손실되고 코드가 한 줄로 병합됩니다. (GUIDES-33247)

## 자산 관리

- 에셋 상태 API는 경로에 쉼표가 포함된 에셋에 대해 올바른 상태를 반환하지 않습니다. (GUIDES-49065)

## 게시

- 기존 구성 요소 매핑을 사용하여 AEM Sites에 `processing-role=resource-only` 요소가 있는 DITA 맵을 게시하면 `topicgroup` 요소 및 특정 콘텐츠 구성과 같은 추가 시나리오에서 해당 요소에 대해 분리된 사이트 페이지가 생성됩니다. (GUIDES-37650)
- 분기 필터링은 `keydef`(DITA-OT에 의해 `resource-only ="true"`(으)로 표시된) 원치 않는 주제에 대한 추가 페이지를 생성합니다. (GUIDES-19701)
- 맵 대시보드에서 다른 사전 설정을 선택하면 피어 링크를 가져오는 호출이 트리거되어 추가 처리가 발생합니다. (GUIDES-53703)
- 기본 PDF 출력에서 `toc="no"` 특성으로 표시된 항목 참조가 TOC에 포함되어 있어 목차가 길고 복잡합니다. (GUIDES-20156)
- 일부 경우, 전체 DITA 맵이 생성되고 동적 기준선을 사용하여 AEM Sites에 게시되면 특정 주제가 현재 승인된 버전 대신 이전 또는 승인되지 않은 버전으로 게시됩니다. (GUIDES-55646)
- 많은 수의 자산을 처리할 때 `PurgePresetExecutionDataJob`에 처리되지 않은 `RuntimeNodeTraversalException`이(가) 발생하는 경우가 있어 작업이 무한 루프에 걸려 과도한 로그를 생성합니다. (GUIDES-53897)
- 네이티브 PDF 출력에서 `topichead` 또는 `topicgroup` 요소에 설정된 `outputclass` 특성이 결과 PDF 섹션에 적용되지 않거나 전달되지 않습니다. (GUIDES-22950)
- 기본 PDF 엔진 v1로 게시할 때 액세스 가능성이 `settingsenabled`인 콘텐츠의 읽기 순서가 올바르지 않은 경우가 있습니다. 바닥글의 페이지 번호는 끝이 아닌 기본 콘텐츠 앞에 읽혀집니다(GUIDES-27790).


## 번역

- 에셋이 많은 맵에 기준선을 적용하면 선택한 언어에 대한 번역 보고서의 로드가 지연되며 이로 인해 보고서가 렌더링되기 전에 요청 시간 초과가 발생하는 경우가 있습니다. (GUIDES-45508)
- 선택한 언어 폴더에서 밑줄 형식(`da_dk`) 대신 하이픈이 연결된 로케일 코드(예: `da-DK`)를 사용하는 경우 Workspace 설정 아래의 번역 탭의 언어 그룹은 유지되지 않습니다. (GUIDES-37843)
- XLIFF 프로젝트를 사용하여 번역을 시작하면 진행 중 상태로 이동하지 않는 빈 프로젝트가 만들어집니다. (GUIDES-51759)
- 기여자 역할만 있는 사용자가 편집기에 액세스할 때 전역 폴더 프로필의 `propagateVersionLabel` 설정이 간헐적으로 `false`(으)로 재설정됩니다. (GUIDES-51870)

## 베이스라인

- 기준선을 삭제한 후 또는 동적 기준선을 만드는 동안 사전 설정의 저장된 기준선 선택 사항이 *기준선 없음*(으)로 잘못 표시됩니다. (GUIDES-52690)
- 경우에 따라 동적 기준선이 재구축 실패 후 처리 상태에서 멈춘 상태로 유지되어 내보내기 및 출력 생성에서 오류를 표시하지 않고 오래된 주제 및 맵 버전을 사용합니다. (GUIDES-56739)

## 검토

- 검토 작업이 많은 시나리오에서는 검토 패널을 열거나 프로젝트 필터를 적용하면 작업 목록을 로드하는 데 예상보다 시간이 오래 걸립니다. (GUIDES-48893)
- 검토 UI의 콘텐츠 창에는 권장 1600px 해상도를 비롯한 특정 화면 해상도에 가로 스크롤 막대가 표시되므로 콘텐츠가 창 너비를 초과할 때 검토 주석이 숨겨집니다. (GUIDES-44082)

## Platform

- 이동 API, 이름 바꾸기 API 및 Assets UI를 사용하면 GUID 기반 파일 이름이 있는 DITA 에셋의 이름을 사람이 읽을 수 있는 파일 이름으로 변경하지 못합니다. 이제 Assets의 이름을 사람이 읽을 수 있는 파일 이름으로 바꿀 수 있지만 GUID 기반 파일 이름을 다른 GUID 기반 파일 이름으로 바꾸는 것은 여전히 허용되지 않습니다. (GUIDES-43006, GUIDES-59684)
- 비UUID 설정에서 UUID 설정으로 마이그레이션된 이미지와 같은 비DITA 자산을 다른 버전으로 되돌리거나 분기하면 해당 UUID가 변경됩니다. 에셋에 대한 기존 참조가 더 이상 확인되지 않고 해당 에셋을 참조하는 항목에서 이미지가 손상되어 표시됩니다. (GUIDES-58414)
- Experience Manager Guides 서비스 팩을 설치하면 AEM **도구** 섹션에서 ACS Commons와 같이 이전에 설치된 외부 도구가 제거됩니다. (GUIDES-60365)

## 알려진 문제

Adobe은 5.2.0 서비스 팩 3 릴리스에 대해 다음과 같은 알려진 문제를 확인했습니다.

- 서비스 팩을 설치한 후 Schematron 유효성 검사가 `NoClassDefFoundError` 예외와 함께 실패할 수 있으며 편집기에 항목을 저장할 수 없습니다. (GUIDES-60062)<br>**해결 방법:** AEM 웹 콘솔에서 `com.adobe.fmdita.schematron-wrapper` 번들을 새로 고칩니다(`/system/console/bundles`).
