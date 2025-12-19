---
title: 릴리스 정보 | Adobe Experience Manager Guides 5.1.0 서비스 팩 3 릴리스의 문제가 해결되었습니다
description: Adobe Experience Manager Guides 5.1.0 서비스 팩 3 릴리스의 버그 수정에 대해 알아봅니다
role: Leader
source-git-commit: 64d7e4f8028ade36c4fee9bb3407e70b10da6869
workflow-type: tm+mt
source-wordcount: '251'
ht-degree: 1%

---

# 5.1.0 서비스 팩 3 릴리스(2025년 12월)의 문제가 해결되었습니다.


이 문서에서는 Adobe Experience Manager Guides 5.1.0 서비스 팩 3 릴리스의 다양한 영역에서 수정된 버그를 다룹니다.

[5.1.0 서비스 팩 3 릴리스의 업그레이드 지침](upgrade-instructions-5-1-0-sp3.md)에 대해 알아봅니다.


## 작성

- 주제 또는 맵의 폴더 수준 프로필에 적용된 사용자 지정 CSS는 브라우저를 새로 고칠 때 미리 보기 모드에서 기본 스타일로 되돌아갑니다. (GUIDES-31098)
- **새 버전으로 저장** 대화 상자에서 여러 **버전 레이블**&#x200B;을 항목에 추가할 수 없습니다. (GUIDES-32716)


## 자산 관리

- Assets UI의 **버전 내역** 패널에서 버전 레이블을 제거할 수 없습니다. (GUIDES-38276)


## 검토

- 검토자가 검토 작업을 완료하거나 개시자가 주석을 입력하지 않고 검토 작업을 업데이트하면 전송된 알림 이메일에 가장 최근의 이전 주석이 표시됩니다. (GUIDES-33590)

## 게시

- 기존 구성 요소 매핑을 사용하여 AEM Sites 출력을 생성하면 `copy-to` 특성을 사용하는 항목이 `copy-from` 특성에 설정된 이름 대신 `copy-to` 항목의 이름으로 게시됩니다. (GUIDES-22155)
- 동적 기준선을 사용하여 기본 PDF 출력이 생성되면 실제 맵 제목 대신 **PDFProject** 용어가 PDF 제목으로 표시됩니다. (GUIDES-31102)

## Platform

- 항목 또는 맵 내에서 DAM 콘텐츠에 대한 참조에 `scope="external"`을(를) 사용하면 자산의 상대 경로가 GUID로 대체됩니다. (GUIDES-35605)




