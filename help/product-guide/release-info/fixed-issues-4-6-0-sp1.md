---
title: 릴리스 정보 | Adobe Experience Manager Guides 4.6.0 서비스 팩 1 릴리스의 문제가 해결되었습니다.
description: Adobe Experience Manager Guides 4.6.0 서비스 팩 1 릴리스의 버그 수정에 대해 알아봅니다
role: Leader
exl-id: ab45ac10-8a97-4ade-accc-2b884da0e973
TQID: https://experienceleague.adobe.com/-PGxudGeachzaYoru1fHTObZcwRuXzle5s7KRRJlfBA
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: ad602516-aca3-4247-9ae8-f393d958efa9
  - id: d4f22c6d-7923-41e5-9da3-527ff8df4bc8
  - id: f89f75b0-cf2e-4e96-aec8-fe8c39cbd0ef
role_v2:
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
source-git-commit: cc73b81787a3c3dbe8390d93e558064327e59965
workflow-type: tm+mt
source-wordcount: 311
ht-degree: 4%

---

# 4.6.0 서비스 팩 1 릴리스(2024년 10월)의 문제가 해결되었습니다.


이 문서에서는 Adobe Experience Manager Guides 4.6.0 서비스 팩 1 릴리스의 다양한 영역에서 수정된 버그를 다룹니다.

[4.6.0 서비스 팩 1 릴리스의 업그레이드 지침](upgrade-instructions-4-6-0-sp1.md)에 대해 알아봅니다.

## 작성

- `XMLEditorConfig`에서 `xmleditor.uniquefilenames`을(를) 사용하도록 설정하면 UUID 인스턴스에서 DITA 맵을 만들 수 없습니다. (21201)
- 파일을 닫을 때 **변경 내용 저장 및 파일 잠금 해제** 대화 상자에 추가된 주석 및 레이블이 새 버전의 버전 내역에 저장되지 않습니다. 이는 `XMLEditorConfig`에서 **Close에 체크 인 요청** 또는 **Close에 새 버전 요청**&#x200B;을 사용하도록 설정한 사용 사례와 관련이 있습니다. (20065)
- 새 버전을 저장하기 전에 **완료**(으)로 표시된 문서 상태가 **초안**(으)로 되돌아가므로 문서 버전에서 **완료** 상태가 지속되지 않습니다. (20006)
- 편집기의 항목에 PDF 파일을 이미지 참조로 추가할 수 없습니다. (21206)
- Assets UI에서 DITA 파일을 선택하면 구성에서 비활성화된 경우에도 **FrameMaker에서 열기** 옵션이 표시됩니다. (20082)


## 게시

- 첨부 파일 경로가 허용된 길이를 초과하면 Salesforce에 첨부 파일을 업로드할 수 없습니다. (19420)
- 항목을 Salesforce에 게시하면 PDF 파일 링크가 확인되지 않습니다. (19304)
- Salesforce에서 기존 문서를 다시 게시하려고 할 때 `DUPLICATE_VALUE` 오류가 간헐적으로 발생합니다. (17932)
- 기본 PDF 출력에서 TOC에 챕터 제목이 누락되어 잘못된 계층 구조가 발생합니다. (21840)
- AEM Sites을 게시할 때 TOC에 포함할 수 있는 속성의 수는 제한되어 있습니다. (7483)

## 관리

- 로그에서 닫히지 않은 **ResourceResolver** 오류로 인해 리소스 누수가 발생합니다. (18488)
- 새 기준선이나 중복 기준선을 만들 때 임의의 순서로 레이블이 표시됩니다. (19307)
