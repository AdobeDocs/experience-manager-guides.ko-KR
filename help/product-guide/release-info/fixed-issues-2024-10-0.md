---
title: 릴리스 정보 | Adobe Experience Manager Guides, 2024.10.0 릴리스의 문제가 해결되었습니다.
description: Adobe Experience Manager Guidesas a Cloud Service 의 2024.1.0 릴리스 버그 수정에 대해 알아봅니다.
source-git-commit: 64c5318a064d28a42f3f11d2fe5b7d8548e341d8
workflow-type: tm+mt
source-wordcount: '1166'
ht-degree: 2%

---

# 2024.10.0 릴리스의 문제가 해결되었습니다.

이 문서에서는 Adobe Experience Manager Guides as a Cloud Service 의 2024.10.0 릴리스의 다양한 영역에서 수정된 버그를 다룹니다.

새로운 기능 및 개선 사항에 대한 자세한 내용은 [2024.10.0 릴리스의 새로운 기능](whats-new-2024-10-0.md)을 참조하십시오.

[2024.10.0 릴리스의 업그레이드 지침](upgrade-instructions-2024-10-0.md)에 대해 알아봅니다.


## 작성

- **찾기** 옵션이 **Source** 보기에서 작동하지 않습니다. (18610)
- `<fig>` 요소가 코드 조각으로 삽입되면 `<title>` 요소가 자동으로 추가됩니다. (18562)
- OOTB 주제 재생성 또는 증분 게시 API 실패로 인해 주제 재생성에 실패합니다. (18452)
- Experience Manager Guides UI에 액세스한 후 Assets 인스턴스가 불안정해지고 오류 로그의 크기가 최대 30-40GB로 늘어납니다. (18414)
- `autocheckout`이(가) xmleditor에 구성되면 **체크 아웃**&#x200B;과(와) **체크 인** 아이콘이 함께 표시됩니다. (18088)
- Adobe Experience Manager Guidesas a Cloud Service 의 2024.06.0 릴리스에서는 작성자 보기에서 이미지 복사-붙여넣기가 작동하지 않습니다.(18062)
- DITA 맵 내에서 참조된 주제에 대한 `<conref>`이(가) 편집기 내의 미리 보기에 반영되지 않습니다. (17794)
- 큰 DITA 맵이 느리게 로드되고 **레이아웃** 보기로 전환하는 데 시간이 걸립니다. (17590)
- DITA 버전에서 Assets UI에 사용자 이름이 잘못 표시됩니다. (17580)
- 항목의 중복 이미지 ID에 대한 오류는 사용자가 항목을 저장하거나 작성하지 못하도록 제한합니다. (17528)
- 고밀도 데이터 세트가 있는 많은 파일을 Experience Manager Guides에 업로드하는 동안 문제가 발생합니다.(17008)
- Experience Manager Guidesas a Cloud Service 에서 PDF 렌더링 기능이 간헐적으로 작동하지 않습니다. (16966)
- 템플릿을 기반으로 DITA 맵을 만드는 동안 OOTB DXML 워크플로우가 프로세스를 중단하면 503 서비스 불가 오류가 발생합니다. (16529)
- 이스케이프 문자로 작성된 **특수 문자**&#x200B;를 Experience Manager Guides에 업로드한 후 항목에서 제거합니다. (16495)
- 다른 탭에서 파일을 이동할 때, 토큰이 만료될 때 또는 사용자가 로그아웃될 때 &quot;&quot;로 체크 아웃된 파일&quot; 오류 메시지가 잘못 표시됩니다. (15223)
- 큰 파일이 웹 편집기에 로드되지 않아 브라우저가 중지됩니다. (13227)
- `<keyref>`을(를) 사용하여 추가된 `<Topicref>`이(가) 기본 PDF에 표시되지 않습니다. (11974)
- 구성 요소 경로 `/libs/fmdita/components/versions`이(가) 하드코딩되어 있으므로 사용자가 오버레이할 수 없습니다. (8779)
- 편집을 위해 새 탭에서 DITA 주제 또는 맵을 열면 Assets UI에서 선택 탐색이 중지됩니다. (4992)
- 큰 비디오 파일이 있는 DITA 맵을 다운로드하면 로그에서 메모리 부족 오류가 발생하고 UI에서 오류가 발생합니다. (18884)
- &quot;&lt;&quot; 기호가 포함된 MathML 방정식을 삽입하면 **잘못된 문자** 오류가 생성됩니다. (18742)
- 콘텐츠 수집 프로세스 중에 잘못된 UUID가 생성되면 수집된 맵에서 하위 맵 참조가 손상됩니다. (18308)
- 웹 편집기에서 만들 때 새 DITA 주제의 처리가 지연되는 경우가 있습니다. (16836)
- 웹 편집기의 **저장소**&#x200B;에서 파일을 검색하는 데 시간이 너무 오래 걸리고 경우에 따라 결과를 로드하지 못합니다. (16837)

## 게시

- 키에 대한 상호 참조가 기본 PDF 출력에서 해결되지 않습니다. (18087)
- Salesforce에서 기존 문서를 다시 게시할 때 **duplicate_value** 오류가 간헐적으로 발생합니다. (17932)
- 레이아웃에 메타데이터 필드가 포함된 경우 고객 템플릿의 스타일 및 컨텐츠 서식이 자동으로 변경되어 게시된 PDF에서 잘못된 서식이 발생합니다. (17900)
- 라이트닝 URL로 Salesforce 연결 유효성 검사가 실패합니다. (17797)
- 게시된 PDF의 일괄 활성화 중에 **일괄 Publish 대시보드**&#x200B;에서 참조된 콘텐츠가 활성화되지 않았습니다. (17793)
- 게시된 콘텐츠의 벌크 활성화가 현지화된 맵에서 작동하지 않습니다. (17638)
- **topicmeta에 추가된 메타데이터 사용** 옵션을 선택하면 메타데이터 속성이 기본 PDF 출력의 문서 고유성에 전파되지 않습니다. (17283)
- 기본 PDF 출력의 조건 필터링이 DITA-OT와 비교하여 예상대로 작동하지 않습니다. (17095)
- TOC는 기본 PDF 출력에서 `<sub>` 또는 `<sup>` 태그를 사용하지 않습니다. (17028)
- AEM 사이트 생성 및 증분 게시 API가 예상대로 작동하지 않습니다. (16666)
- Node.js에 대한 종속성 가져오기와 관련된 오류와 함께 네이티브 PDF 생성이 실패합니다. (14445)
- `<Conref>`은(는) 웹 편집기의 `Preview` 모드 및 기본 PDF 출력에서 확인되지 않습니다. (17827)
- 키 정의가 포함된 파일이 DITA 맵과 동일한 폴더에 없는 경우 기본 PDF 출력에 대해 컨텐트 참조가 올바르게 해석되지 않습니다. (15062)
- DITA 맵에 최대 7개 이상의 제목 수준이 포함된 경우 수준 7 제목은 기본 PDF 출력에서 수준 1 제목으로 잘못 처리됩니다. (19698)
- 컨텐츠 조각(텍스트)을 요소 내부에 래핑하면 텍스트 앞과 뒤의 공백이 미리 보기 또는 출력 형식으로 표시되지 않습니다. (19308)
- 수동으로 트리거된 게시 생성 워크플로우가 워크플로우의 NULL POINTER 예외로 인해 실패하여 컨텐츠가 11번 업로드됩니다. (18880)
- **일괄 Publish 대시보드**&#x200B;에 아직 번역 프로세스에 있는 맵에 대한 빈 항목이 표시됩니다. (19352)


## 관리

- 오버레이 기능의 경로가 한국어 파일용으로 하드 코딩되어 있고 올바르게 선택되어 있지 않습니다. (17089)
- **버전 저장** 대화 상자에 대한 변경/사용자 지정은 Guides 확장 프레임워크를 사용할 때 반영되지 않습니다. (17828)
- InDesign 대 DITA 변환에는 사용자 지정 구성 파일이 선택되지 않도록 하드코딩된 구성 경로가 있습니다. (16891)
- 큰 종속성/참조가 포함된 DITA 맵이 기준선을 사용하여 다운로드되면 전체 참조/에셋이 다운로드되지 않습니다. (19099)


### 검토

- 사용자 수가 25개를 초과하는 경우 검토 작업을 만드는 동안 사용자 목록을 가져오지 못합니다. (17329)
- 작업 항목에 하나 이상의 단계에 `<cmd>` 태그가 포함되어 있으면 검토 패널에 태그가 포함된 모든 단계에서 `importance` 특성이 접두사로 표시됩니다. (19699)

## 번역

- 번역된 에셋의 참조는 업데이트되지 않습니다. (18086)
- 참조가 여러 언어로 번역되는 동안 직접 또는 간접으로 올바르게 필터링되지 않습니다. (17891)
- 사람 번역으로 XLIFF 프로젝트를 만들 수 없습니다. (16964)
- 활성 번역 프로젝트에서 업데이트된 주제를 추가하면 항목이 중복되고 프로세스가 실패합니다. (7688)
- **구조만 만들기** 옵션을 선택하여 만든 번역 프로젝트에 할당된 UUID가 없습니다. (18980)
- **번역 상태**&#x200B;가 **진행 중**(으)로 설정된 번역 프로젝트를 선택하면 잘못된 페이지가 열립니다. (13248)
- `<conref>`이(가) 있는 제목이 웹 편집기의 기준선 및 번역 대시보드에서 확인되지 않습니다. (16961)

## 알려진 문제

- AEM Sites 사전 설정(비레거시)을 열면 주제가 [더러움]으로 표시됩니다.
- 선택한 패널은 [출력] 탭에서 브라우저를 새로 고칠 때 유지되지 않습니다.
- **작성자** 보기의 두 topicrefs 간에 주제를 끌어다 놓을 수 없습니다.
- 사전 설정에 적용된 조건 필터링은 **PDF으로 다운로드**&#x200B;를 통해 적용되지 않습니다.
- 맵 패널에서 단일 주제를 생성하면 AEM Sites 사전 설정(레거시 아님)에서 선택한 모든 주제가 생성됩니다.
- DITA 맵의 맨 위 도구 모음에서 주제의 참조를 삽입하면 사용자 인터페이스에서 깨진 상태로 표시됩니다.
- 참조가 누락된 경우 DITA 맵에 대한 기본 PDF 생성에 실패합니다.
- 마이크로서비스 사용 환경에서 조건이 있는 AEM 사이트의 단일 주제 게시가 실패합니다.
- 주제의 문서 상태가 **완료**(으)로 업데이트되면 **새 릴리스 시작** 아이콘은 주제의 **미리 보기** 모드에서만 사용할 수 있습니다.
