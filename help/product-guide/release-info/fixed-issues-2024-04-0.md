---
title: 릴리스 정보 | Adobe Experience Manager Guides, 2024.4.0 릴리스의 문제가 해결되었습니다.
description: Adobe Experience Manager Guides as a Cloud Service 4의 2024.0.0 릴리스 버그 수정에 대해 알아봅니다.
exl-id: 35351d71-7739-4ad3-a063-67adf64906bf
source-git-commit: 5d99274da8fdacbd255d426fa4913b5773ca45f8
workflow-type: tm+mt
source-wordcount: '578'
ht-degree: 3%

---

# 2024.04.0 릴리스의 문제가 해결되었습니다.

이 문서에서는 Adobe Experience Manager Guides as a Cloud Service 의 2024.04.0 릴리스의 다양한 영역에서 수정된 버그를 다룹니다.

새로운 기능 및 개선 사항에 대한 자세한 내용은 [2024.04.0 릴리스의 새로운 기능](whats-new-2024-04-0.md)을 참조하십시오.

[2024.04.0 릴리스의 업그레이드 지침](upgrade-instructions-2024-04-0.md)에 대해 알아봅니다.

## 작성

- **Copy** 함수가 Adobe Experience Manager as a Cloud Service의 빈 폴더를 복제하지 못했습니다. (15353)
- 웹 편집기에서 .pptx 파일을 업로드할 수 없습니다. (14837)
- 웹 편집기에서 텍스트를 찾는 동안 커서는 Enter 키를 누르면 검색된 텍스트의 첫 번째 발생으로 돌아갑니다. (14820)
- 자동 저장은 여러 문제를 일으키고 커서의 위치를 변경하며 문서에서 수동으로 클릭해야 합니다. (14253)
- 글로벌 **찾기 및 바꾸기**&#x200B;를 통해 찾은 파일을 연 후에는 검색 결과를 사용할 수 없습니다. (12142)
- 소스 보기에서 `</conbody>`이(가) 잘못된 위치에 삽입되는 경우가 있습니다. (11305)
- XML 편집기에서 툴팁 기능이 Source 필드를 업데이트하지 못했습니다. (15847)
- Adobe Experience Manager의 이미지에 대해 **UUID 링크 공유** 기능이 작동하지 않습니다. (15598)
- `<reltable>` 및 `<fig>` 태그에서 겹치는 텍스트 문제가 발생합니다. (15238)
- **특성** 패널에서 깜박임 문제가 발생합니다. (15237)
- 콘텐츠 내에서 문자나 단어를 삭제할 때 커서는 블록 요소 사이를 이동합니다. (15224)
- **특성** 패널이 웹 편집기의 Source 보기에 표시되지 않습니다. (14387)
- 웹 편집기에서 태그의 끝에 편집하는 동안 원하지 않는 줄바꿈하지 않는 공백이 추가됩니다. (11786)
- DITA 파일의 맞춤법 오류를 수정하는 동안 콘텐츠가 삭제됩니다. (11610)


## 게시

- **고아 사이트 삭제** 옵션이 활성화된 경우 AEM 사이트 출력 생성에 실패합니다. (15896)
- 맵 컬렉션에 파일을 추가할 때 편집 기능이 작동하지 않습니다. (15813)
- JSON 출력에서 DITA 맵 또는 주제의 메타데이터가 JSON 출력 파일로 전파되지 않습니다. (15713)
- 사전 설정의 이름을 바꾸는 동안 기본 PDF 게시가 실패합니다. (15662)
- 게시된 AEM 사이트 출력의 **sourcePath** 속성이 잘못되었습니다. (15502)
- 언어 변수 선택 및 사용자 지정이 기본 PDF 출력 사전 설정에서 제대로 작동하지 않습니다. (15399)
- 큰 스타일시트나 레이아웃이 있는 템플릿을 사용할 때 기본 PDF 생성이 실패합니다. (15344)
- `<conref>`을(를) 절대 경로와 함께 사용하는 경우 게시된 출력에서 콘텐츠가 제대로 렌더링되지 않습니다.
- `fmdita rewriter`과(와) `ResourceResolver` 사이의 충돌로 인해 AEM Sites URL 단축이 작동하지 않습니다. (14793)
- **processing-role=&quot;resource-only&quot;**, **search=&quot;no&quot;** 및 **chunk=&quot;to-content&quot;** 특성은 각각 AEM Sites 출력에 표시되지 않습니다. (14442)
- 2k 맵이 포함된 폴더가 폴더 프로필 내의 폴더 경로에 설정되어 있으면 출력 사전 설정에 적용된 변경 사항이 실패합니다.(14852)

## 관리

- 닫히지 않은 **리소스 확인자**&#x200B;로 인해 세션 수가 증가하고 PathNotFoundException 오류가 Experience Manager Guidesas a Cloud Service 의 2023년 10월 릴리스 이후 발생합니다. (15604)
- 기능 플래그 **fmdita.useapproval**&#x200B;이(가) 예상대로 작동하지 않습니다. (15310)
- Java API를 사용하여 기준선을 만드는 것은 Experience Manager Guidesas a Cloud Service 의 2023년 6월 릴리스에서는 작동하지 않습니다. (14787)
- 자산 업로드가 500MB를 초과할 때 `/bin/fmdita/import` API가 보류 중인 요청에서 무기한 보류됩니다. (14743)

## 검토

- 검토 노드를 삭제하면 Adobe Experience Manager Guides에서 주석을 열고 보는 기능이 중단됩니다. (15366)
- 웹 편집기에서 검토 패널이 느리게 로드됩니다. (14680)

## 번역

- **번역 수락**&#x200B;이(가) 임시 파일의 번역을 완료하지 못했습니다. (14665)
