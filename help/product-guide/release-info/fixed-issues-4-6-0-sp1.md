---
title: 릴리스 정보 | Adobe Experience Manager Guides 4.6.0 서비스 팩 1 릴리스의 문제가 해결되었습니다
description: Adobe Experience Manager Guides 4.6.0 서비스 팩 1 릴리스의 버그 수정에 대해 알아봅니다
role: Leader
source-git-commit: 2362870e0e3e6c08df03e8c547bb77de7faa0a02
workflow-type: tm+mt
source-wordcount: '316'
ht-degree: 0%

---


# 4.6.0 서비스 팩 1 릴리스(2024년 10월)의 문제가 해결되었습니다.


이 문서에서는 Adobe Experience Manager Guides 4.6.0 서비스 팩 1 릴리스의 다양한 영역에서 수정된 버그를 다룹니다.

[4.6.0 서비스 팩 1 릴리스의 업그레이드 지침](upgrade-instructions-4-6-0-sp1.md)에 대해 알아봅니다.

## 작성

- `XMLEditorConfig`에서 `xmleditor.uniquefilenames`을(를) 사용하도록 설정하면 UUID 인스턴스에서 DITA 맵을 만들 수 없습니다. (21201)
- 파일을 닫을 때 **변경 내용 저장 및 파일 잠금 해제** 대화 상자에 추가된 주석 및 레이블이 새 버전의 버전 내역에 저장되지 않습니다. 이는 `XMLEditorConfig`에서 **Close에 체크 인 요청** 또는 **Close에 새 버전 요청**&#x200B;을 사용하도록 설정한 사용 사례와 관련이 있습니다. (20065)
- 새 버전을 저장하기 전에 **완료**(으)로 표시된 문서 상태가 **초안**(으)로 되돌아가므로 문서 버전에서 **완료** 상태가 지속되지 않습니다. (20006)
- 웹 편집기의 항목에 PDF 파일을 이미지 참조로 추가할 수 없습니다. (21206)
- Assets UI에서 DITA 파일을 선택하면 구성에서 비활성화된 경우에도 **FrameMaker에서 열기** 옵션이 표시됩니다. (20082)


## 게시

- 첨부 파일 경로가 허용된 길이를 초과하면 Salesforce에 첨부 파일을 업로드할 수 없습니다. (19420)
- 항목을 Salesforce에 게시할 때 PDF 파일 링크를 확인하지 못합니다. (19304)
- Salesforce에서 기존 문서를 다시 게시하려고 할 때 `DUPLICATE_VALUE` 오류가 간헐적으로 발생합니다. (17932)
- 기본 PDF 출력의 TOC에서 챕터 제목이 누락되어 잘못된 계층 구조가 발생합니다. (21840)
- AEM Sites을 게시할 때 TOC에 포함할 수 있는 속성의 수는 제한되어 있습니다. (7483)

## 관리

- 로그에서 닫히지 않은 **ResourceResolver** 오류로 인해 리소스 누수가 발생합니다. (18488)
- 새 기준선이나 중복 기준선을 만들 때 임의의 순서로 레이블이 표시됩니다. (19307)









