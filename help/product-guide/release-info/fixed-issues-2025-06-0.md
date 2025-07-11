---
title: 릴리스 정보 | Adobe Experience Manager Guides, 2025.06.0 릴리스의 문제가 해결되었습니다.
description: Adobe Experience Manager Guides as a Cloud Service 2025.06.0 릴리스의 버그 수정에 대해 알아봅니다.
exl-id: 0f362ab3-0fae-4eba-bbd6-0b64ae1f2599
source-git-commit: c137f18d3cb85ed47547d5523c4dea08c22f9560
workflow-type: tm+mt
source-wordcount: '516'
ht-degree: 4%

---

# 2025.06.0 릴리스의 문제가 해결되었습니다.

이 문서에서는 Adobe Experience Manager Guides as a Cloud Service의 2025.06.0 릴리스의 다양한 영역에서 수정된 버그를 다룹니다.

새로운 기능 및 개선 사항에 대한 자세한 내용은 [2025.06.0 릴리스의 새로운 기능](whats-new-2025-06-0.md)을 참조하십시오.

[2025.06.0 릴리스의 업그레이드 지침](upgrade-instructions-2025-06-0.md)에 대해 알아봅니다.

## 작성

- 항목을 업데이트하거나 만드는 동안 JCR 세션 연결을 닫지 않으면 메모리 누수가 발생하고 서비스 다운타임이 발생합니다. (GUIDES-26282)
- 열을 드래그하면 너비가 백분율에서 픽셀 값으로 변경되어 테이블이 왜곡되거나 잘못 정렬됩니다.(GUIDES-23128)
- 콘텐츠를 `code block`에 붙여넣거나 `code block`에 공백을 추가하고 보기를 전환하면 간격이 손실됩니다. (GUIDES-27478)
- `bookmap`에 맵을 추가하면 `fmditamaprefs` 대신 `fmditatopicrefs`에 저장됩니다. (GUIDES-25480)
- **이미지 삽입** 대화 상자가 고해상도 또는 축소된 화면에서 올바르게 렌더링되지 않아 그림 제목과 대체 텍스트 필드가 사라집니다. (GUIDES-26459)


## 게시

- DITA 콘텐츠에 `external` 범위가 없는 웹 링크가 있는 경우 기본 PDF 게시가 무기한 계속됩니다. (GUIDES-26434)
- 콘텐츠에 오류가 있으면 기본 PDF 및 AEM 사이트 게시가 중지되고 큐에 대기합니다. (GUIDES-26516)
- 많은 레이블로 새 기준선을 만들 때 모든 레이블을 가져올 수 없습니다. (GUIDES-16232)
- 공백으로 구분된 여러 단어를 포함하는 제목으로 AEM 사이트 페이지를 생성할 때 맵 제목에 공백 대신 하이픈이 표시됩니다. (GUIDES-27903)
- 네이티브 PDF의 경우 잘못된 메타데이터 속성 이름이 확인되지 않고 **문서 속성**&#x200B;에 `unresolved property name`(으)로 표시됩니다. (GUIDES-25680)
- `codeblock` 내의 여러 줄 텍스트로 인해 PDF 생성 중 텍스트 오버플로 문제가 발생합니다. (GUIDES-15541)
- 맵을 맵 컬렉션에 추가할 때 맵 이외의 에셋(좋아요 항목 등)이 표시되고, 번역된 맵 언어도 제대로 정렬되지 않습니다.(GUIDES-25085)


## 검토

- 검토 UI의 문서 보기는 일부 화면 크기에 대한 컨텐츠를 둘러싸지 않으므로 사용자가 전체 컨텐츠를 보려면 가로로 스크롤해야 합니다. (GUIDES-25292)


## 알려진 문제

Adobe은 2025.06.0 릴리스에 대해 다음과 같은 알려진 문제를 확인했습니다.

- [찾기 및 바꾸기] 옵션을 사용하는 경우 파일에 [단일 발생 항목 바꾸기] 작업을 적용한 후 [찾기 및 바꾸기] 패널에서 추가 작업을 수행할 수 없습니다. (GUIDES-28930)

- 통합 셸이 활성화된 DITA 맵을 열면 편집기가 간헐적으로 새로 고쳐집니다. (GUIDES-26919)

- 폴더 프로필의 AI 구성의 경우 이미 인덱싱된 에셋이 UI에서 삭제되면 해당 인덱싱된 경로가 제거되지 않고, 다시 인덱싱하려는 시도가 실패하고 오류 메시지가 표시됩니다. (GUIDES-29147) <br>**해결 방법:** 다시 색인화를 시작하기 전에 더 이상 존재하지 않는 오래된 경로를 제거해야 합니다.

- 맵에 순환 의존성이 포함되어 있고 맵 미리보기를 여는 경우, 브라우저를 새로 고칠 때까지 Source, 작성자 및 레이아웃 보기에 액세스할 수 없습니다. (GUIDES-28334) <br>**해결 방법:** 이러한 보기에 대한 액세스를 복원하려면 브라우저를 새로 고쳐야 합니다.
