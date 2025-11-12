---
title: 릴리스 정보 | Adobe Experience Manager Guides, 2025.11.0 릴리스의 문제가 해결되었습니다.
description: Adobe Experience Manager Guides as a Cloud Service 2025.11.0 릴리스의 버그 수정에 대해 알아봅니다.
source-git-commit: d9a46a009477b1110208a509d4ad8c0616139661
workflow-type: tm+mt
source-wordcount: '704'
ht-degree: 3%

---

# 2025.11.0 릴리스의 문제가 해결되었습니다.

이 문서에서는 Adobe Experience Manager Guides as a Cloud Service의 2025.11.0 릴리스의 다양한 영역에서 수정된 버그를 다룹니다.

새로운 기능 및 개선 사항에 대한 자세한 내용은 [2025.11.0 릴리스의 새로운 기능](whats-new-2025-11-0.md)을 참조하십시오.

[2025.11.0 릴리스의 업그레이드 지침](upgrade-instructions-2025-11-0.md)에 대해 알아봅니다.

## 작성

- 특성이나 값이 없는 빈 `prop` 요소를 DITAVAL 파일에 추가하면 `prop` 요소를 추가할 수 없습니다. (GUIDES-33597)
- Experience Manager Guides을 2025.08.0 버전으로 업그레이드한 후 사용자 지정 **Acrolinx** 탭을 활성화하거나 비활성화하는 옵션이 **Workspace 설정**&#x200B;에 더 이상 표시되지 않습니다. (GUIDES-35261)
- 주제 또는 맵의 폴더 수준 프로필에 적용된 사용자 지정 CSS는 브라우저를 새로 고칠 때 미리 보기 모드에서 기본 스타일로 되돌아갑니다. (GUIDES-31098)
- **실행 취소** 및 **다시 실행** 작업이 DITA 파일용 편집기의 Source 보기에서 예상대로 작동하지 않습니다. (GUIDES-24914, GUIDES-25034)
- `Xref` 요소를 사용하여 항목에서 DITA 맵을 참조할 때 맵 제목 대신 참조된 맵의 파일 이름이 표시됩니다. (GUIDES-21759)
- 편집기 인터페이스의 오른쪽 패널을 통해 유효성 검사를 위해 여러 개의 Schematron 파일을 추가할 때 추가된 파일이 유효하고 오류가 없는 경우에도 오류 **Schematron 파일이 없거나 오류가 있습니다**&#x200B;이(가) 표시됩니다. (GUIDES-33731)
- 크거나 복잡한 MathML 방정식이 편집기에 표시되지 않습니다. (GUIDES-29095)

## 자산 관리

- Experience Manager Guides UI를 통해 편집된 이미지를 다시 업로드하면 이미지의 원래 렌디션이 업데이트되지만 관련 DITA 컨텐츠는 이전 버전의 이미지를 계속 표시합니다. (GUIDES-33693)
- 두 개 이상의 폴더를 원본 위치에서 다른 위치로 이동하려고 할 때(일괄 이동 도구 사용), 폴더 이름이 같은 문자열로 시작하면 작업이 실패합니다(예: Product 및 ProductImages). (GUIDES-29096)
- Omnisearch Assets UI에서 검색된 에셋을 삭제하면 **강제 삭제** 경고 대화 상자가 생략되고 에셋이 기존 DITA 콘텐츠에서 참조되는 경우에도 에셋이 직접 삭제됩니다. (GUIDES-17232)

## 게시

- 기존 구성 요소 매핑과 함께 AEM Sites의 기준선을 사용하여 DITA 맵을 게시할 때 `processing-role = resource-only` 특성이 있는 맵 요소도 게시되고 있습니다. (GUIDES-37649)
- 기존 구성 요소 매핑이 있는 AEM Sites 출력 페이지에서 `jcr:content/fmUuidOfSource` 속성이 누락된 것이 발견되어 새로 만든 콘텐츠 페이지를 검색할 수 없게 되는 경우도 있습니다.
- DITAVal 필터 및 조건부 사전 설정을 통한 콘텐츠 필터링은 Salesforce 게시에서 작동하지 않습니다. (GUIDES-33515)
- 컨텐츠 계층 구조에 이름이 같은 폴더가 있는 경우 맵에 대한 기본 PDF 사전 설정을 만들 수 없습니다. (GUIDES-33012)
- 동적 기준선을 사용하여 기본 PDF 출력이 생성되면 실제 맵 제목 대신 **PDFProject** 용어가 PDF 제목으로 표시됩니다. (GUIDES-31102)
- 주제 참조에서 특정 `print` 특성 값을 사용하여 기본 PDF 출력을 생성하는 작업이 예상대로 작동하지 않습니다. (GUIDES-31101)
- Assets UI 또는 **일괄 이동** 옵션을 사용하여 DITA 맵이 포함된 폴더를 이동하면 기존 맵 컬렉션과 해당 맵을 참조하는 일괄 활성화 컬렉션이 로드되지 않습니다. (GUIDES-28355)
- 조건 사전 설정이 있는 맵이 포함된 폴더를 이동하면 이동 후 생성된 출력에 조건이 적용되지 않습니다. (GUIDES-28352)
- 기존 구성 요소 매핑을 사용하여 AEM Sites 출력을 생성하면 `copy-to` 특성을 사용하는 항목이 `copy-from` 특성에 설정된 이름 대신 `copy-to` 항목의 이름으로 게시됩니다. (GUIDES-22155)
- **일괄 게시 대시보드**&#x200B;에서 하나 이상의 DITA 맵을 활성화하면 너무 큰 로그가 생성됩니다. (GUIDES-20746)

## Platform

- Assets UI를 통해 자산을 업로드하거나 편집기 인터페이스에서 새 파일을 만드는 동안 생성된 오류 로그는 로그 메시지에서 `predecessor` 대신 `successor` 용어를 잘못 사용합니다. (GUIDES-35607)

## 알려진 문제

Adobe은 2025.11.0 릴리스에 대해 다음과 같은 알려진 문제를 확인했습니다.

- `copy-to` 특성을 사용하여 중복 항목을 만들고 `scope=peer` 특성과 함께 참조하면 AEM Sites 출력에서 링크가 AEM Sites(복합 구성 요소 매핑 사용)에서 AEM Sites(레거시 구성 요소 매핑 사용)로 리디렉션되거나 그 반대로 리디렉션되는 문제가 발생합니다. (GUIDES-37656)











