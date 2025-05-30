---
title: 릴리스 정보 | Adobe Experience Manager Guides, 5.0.0 릴리스의 문제가 해결되었습니다.
description: Adobe Experience Manager Guides 5.0.0 릴리스의 버그 수정에 대해 알아봅니다.
source-git-commit: 410d7c059ff1219b73f2dc6199690c77d1ba0e48
workflow-type: tm+mt
source-wordcount: '1221'
ht-degree: 1%

---

# 5.0.0 릴리스(2025년 3월)의 문제가 해결되었습니다.

이 문서에서는 Adobe Experience Manager Guides 5.0.0 릴리스의 다양한 영역에서 수정된 버그를 다룹니다.


새로운 기능 및 개선 사항에 대한 자세한 내용은 [5.0.0 릴리스의 새로운 기능](whats-new-5-0.md)을 참조하십시오.

[5.0.0 릴리스에 대한 업그레이드 지침](upgrade-instructions-5-0-0.md)에 대해 알아봅니다.


## 작성

- 폴더 프로필에서 조건을 업데이트할 때 모든 조건 그룹이 손실되고 조건이 병합됩니다. (23526)
- **콘텐츠 속성** 패널에서 표의 머리글 행 값을 변경하면 업데이트된 값이 적용되지 않습니다. (23213)
- 이후 Guides 문서 상태 전환의 경우 페이지를 새로 고쳐야 합니다. (19421)
- **작성자** 보기에서 **주제 참조** 요소 대화 상자를 사용하여 DITA 맵의 주제를 추가할 때 선택한 주제가 선택된 역순으로 삽입됩니다. (8031)
- **작성자** 보기와 **Source** 보기 사이를 전환하면 `<pre>` 또는 `<codeblock>` 요소의 선행 공백이 삭제되고 이 삭제로 파일이 저장됩니다. (19987)
- 새 버전을 저장하기 전에 **완료**(으)로 표시된 문서 상태가 **초안**(으)로 되돌아가므로 문서 버전에서 **완료** 상태가 지속되지 않습니다. (20006)
- 목록 항목이 para 태그 외부로 이동되면 목록 항목 내용이 손실됩니다. (22764)
- **작성자** 보기에서 **주제 참조** 요소 대화 상자를 사용하여 DITA 맵의 주제를 추가할 때 선택한 주제가 선택된 역순으로 삽입됩니다. (22858)
- **레이아웃** 보기에서 **주제 참조** 요소 대화 상자를 사용하여 DITA 맵에 새 주제 참조를 추가하면 추가된 참조가 끊어진 링크로 표시됩니다. (22859)
- 주제 내의 `<simpletable>` 태그를 마우스 오른쪽 단추로 클릭하면 **이름 바꾸기** 옵션이 표시되지 않습니다. (22860)
- 링크 텍스트가 있는 키 기반 참조를 사용하는 `xref`을(를) 삽입하면 링크 텍스트가 Experience Manager Guides에 표시되지 않습니다. (18775)
- **작성자** 보기의 주제 내에 이미지를 끌어다 놓으면 이미지 참조가 손상되어 데이터가 손실됩니다. (25769)
- **검색 및 필터** 기능을 사용하여 저장소에서 파일을 검색할 때 여러 파일을 선택할 수 없습니다. (25104)
- 외부 제품(예: MS PowerPoint)에서 이미지를 복사하여 Guides에 붙여넣으면 파일 브레이크에서 사용할 자산을 즉시 업로드하는 기능이 수행됩니다. (24983)
- **작성자** 또는 **레이아웃** 보기에서 `topicref`을(를) 다른 보기로 드래그하면 중첩 대신 교체를 확인하는 메시지가 표시되며, 확인 대화 상자에서 **아니요**&#x200B;를 선택하면 여전히 콘텐츠가 바뀌어 데이터가 손실됩니다. (18602)
- 하나의 이벤트에 여러 단축키를 추가할 수 없으며, 단축키에서 이벤트를 트리거할 때 이벤트에 인수를 추가할 수도 없습니다. (19066)
- 브라우저를 다시 로드하면 이전에 닫은 이미지 탭이 다시 열립니다. (19267)
- 단락 또는 목록 요소에서 텍스트를 부분적으로 선택하고 요소 외부로 드래그하면 **작성자** 보기와 **Source** 보기 간을 전환할 때 콘텐츠가 손실됩니다. (25790)

## 게시

- 콘텐츠에 줄바꿈 없는 공백이 포함된 경우 Salesforce에 게시하지 못합니다. (23664)
- 끊어진 링크가 있는 맵의 경우 Salesforce 게시가 실패하고 진행률 표시줄이 무기한 표시됩니다. (24963)
- 끊어진 링크와 같은 오류가 있는 주제의 경우 Salesforce 게시가 실패하고 진행률 표시줄이 무기한 표시됩니다. (22985)
- **PDF/X-4 문서에 비어 있지 않은 제목이 필요함**&#x200B;이 오류로 인해 **PDF/X-4** 호환 옵션에 대한 기본 PDF를 게시하지 못했습니다. (16904)
- 자리 표시자 텍스트를 사용하는 경우 기본 PDF에서 `<keyref>`을(를) 사용하는 상호 참조를 확인할 수 없습니다. (19365)
- **청크 특성**&#x200B;이 **to-content**(으)로 설정된 콘텐츠에 대해 기본 PDF 생성이 실패합니다. (21772)
- 기본 PDF 출력을 생성할 때 `ditavalref` 요소가 지원되지 않습니다. (16320)
- 기본 PDF CSS 편집기에서 큰 CSS 파일을 편집할 때 상당한 지연이 관찰됩니다. (16915)
- HTML5 기반 게시의 경우 DITA-OT 플래그 generate.copy.outer가 자동으로 적용됩니다. (24299)
- 링크의 **범위**&#x200B;가 **external**(으)로 설정된 경우에도 상호 참조가 상대 링크로 변환됩니다. (23059)
- 내부 경로에서 ICC 파일을 사용할 수 있는 경우 기본 PDF 사전 설정에 대한 **인쇄** 설정에서 선택할 수 없습니다. (14741)
- 동일한 폴더 프로필 사전 설정을 사용하여 서로 다른 맵에 대해 여러 게시 요청이 시작되면 게시가 실패합니다. (18800)
- 다중 값 메타데이터/속성이 있는 주제의 경우 DITA OT로 전달되면 게시가 실패합니다. (19001)
- 기준선에 대한 **속성 편집** 대화 상자에 동적 기준선에 대해 이전에 저장된 기준이 표시되지 않습니다.  (23964)
- 내용이 최종 문서 상태에 있는 경우 베이스라인에는 간접 참조가 포함되지 않습니다. (19148)
- **AEM Sites 및 기타 출력 형식에 대한 페이지 이름 및 파일 이름 삭제** 설정은 모든 출력 형식에 적용할 수 있습니다. (7651)
- 외부 링크에 UUID가 포함되어 있는 경우 사후 처리로 이동하여 외부 링크를 UUID 링크로 변환하므로 웹 편집기와 게시 사이트에서의 링크가 끊어집니다. (22574)


## 관리

- Assets UI에서 **강제 삭제** 대화 상자의 제목과 아이콘이 잘못 정렬되었습니다. (21933)
- XML 편집기 구성에 대한 폴더 프로필에서 JSON이 업데이트되면 저장 작업이 XML 편집기 구성을 중단합니다. (22414)
- 폴더 프로필을 복제할 때 해당 관리자 사용자 목록도 원래 폴더 프로필에서 복사됩니다. (19067)
- Assets UI에서 큰 폴더(대량의 DITA 콘텐츠, 최대 200,000개 항목 포함)를 이동할 때 오류가 발생합니다. (20107)
- 통합 셸을 사용하도록 설정한 **폴더** 프로필을 편집하면 빈 UI로 이어집니다. (22212)
- 많은 수의 파일이 포함된 폴더를 삭제하면 작업이 실패합니다. (17107)
- 번역 작업을 취소/삭제하거나 프로젝트를 삭제하면 번역 대시보드에 **진행 중** 상태가 표시됩니다. (18417)
- 비레거시 번역을 사용하여 번역되지 않은 항목의 두 버전을 동시에 보내고 첫 번째 버전 이전에 두 번째 버전을 승인하면 첫 번째 버전의 번역 프로젝트가 중단됩니다. (22200)


## 검토

- 맵에서 검토할 여러 주제를 선택할 때 검토자가 받는 이메일 알림은 맵에서 선택한 주제뿐만 아니라 모든 주제를 검토할 수 있음을 나타냅니다. (23214)
- 검토 만들기 인터페이스에서 주제 제목과 아이콘이 잘못 정렬되었습니다. (11670)


## API

- Guides API를 사용하여 **BaslinUtlis** 서비스를 트리거하여 **Baseline**&#x200B;을(를) 만들 때 오류가 발생합니다. (19385)

## 알려진 문제

Adobe은 5.0.0 릴리스에 대해 다음과 같은 알려진 문제를 확인했습니다.

- 경우에 따라 CSS 파일에 대한 잠금 기능이 예상대로 작동하지 않아 다른 사용자가 파일을 잠근 경우에도 해당 파일을 편집하고 저장할 수 있습니다.
- 자동 저장이 활성화된 상태에서 기준 요소가 더러워지면 맵 콘솔 보기를 종료할 수 없습니다.
- **조건 패널**&#x200B;의 UI에서 배경색의 위치가 잘못 정렬되었습니다.
- 이미지를 `<keyref>`(으)로 사용하는 경우 이미지의 **참조 형식**&#x200B;이(가) **멀티미디어 보고서**&#x200B;에 표시되지 않습니다.
- 이미지를 PDF 템플릿에서 변수로 사용할 때 출력에서 확인되지 않습니다.
- **주제 목록** 보고서에서 제목에 `<conref>` 또는 `<conkeyref>`이(가) 있는 자산에 대해 제목별로 정렬하지 못해 이러한 항목이 항상 맨 위에 표시됩니다.
- 폴더 프로필을 전환해도 브라우저를 새로 고치지 않고 UI에 변경 사항이 즉시 반영되지 않습니다.
- Guides 5.0.0 이전에 사용자 지정한 확장 프레임워크는 의도한 대로 작동하지 않을 수 있습니다.
- 맵에서 주제를 선택적으로 게시할 때 맵의 전체 TOC가 업데이트되지 않습니다.
- 내부 이미지 참조가 있는 Markdown 파일이 포함된 맵을 Windows 서버에서 게시할 수 없습니다.
- 글머리 기호 목록이 Markdown에서 번호 매기기 목록으로 변환되지 않습니다.
- Markdown 파일이 맵에서 참조되는 경우 기본 AEM 사이트에 게시하지 못합니다.


