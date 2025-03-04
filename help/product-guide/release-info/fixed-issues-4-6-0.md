---
title: 릴리스 정보 | Adobe Experience Manager Guides 4.6.0 릴리스의 문제가 해결되었습니다.
description: Adobe Experience Manager Guides 4.6.0 릴리스의 버그 수정에 대해 알아봅니다
role: Leader
source-git-commit: d51cc5ed621d5f533815c677e23bd4c1f4a52de3
workflow-type: tm+mt
source-wordcount: '2011'
ht-degree: 0%

---


# 4.6.0 릴리스(2024년 9월)의 문제가 해결되었습니다


이 문서에서는 Adobe Experience Manager Guides 4.6.0 릴리스의 다양한 영역에서 수정된 버그를 다룹니다.


새로운 기능 및 향상된 기능에 대한 자세한 내용은 [4.6.0 릴리스의 새로운 기능](whats-new-4-6.md)을 참조하세요.

[4.6.0 릴리스에 대한 업그레이드 지침](../release-info/upgrade-instructions-4-6-0.md)에 대해 알아봅니다.

## 작성

- **찾기** 옵션이 **Source** 보기에서 작동하지 않습니다. (18610)
- `autocheckout`이(가) xmleditor에 구성되면 **체크 아웃**&#x200B;과(와) **체크 인** 아이콘이 함께 표시됩니다. (18088)
- 큰 DITA 맵이 느리게 로드되고 **레이아웃** 보기로 전환하는 데 시간이 걸립니다.  (17590)
- 항목의 중복 이미지 ID에 대한 오류는 사용자가 항목을 저장하거나 작성하지 못하도록 제한합니다. (17528)
- 15KB를 초과하는 항목의 복사 및 붙여넣기 작업이 예기치 않은 오류로 실패합니다. (17171)
- **파일 속성** 패널에서 문서 상태를 변경하는 기능이 제대로 작동하지 않고 *초안* 상태로 변경됩니다. (17088)
- 사용자 지정 폴더 프로필을 사용하여 XML 편집기 설정을 변경할 때 `ui_config.json`이(가) 잘못된 파일로 업데이트됩니다. (17011)
- **사용자 환경 설정**&#x200B;이(가) **파일 이름**&#x200B;으로 파일을 보도록 설정되어 있으면 재사용 가능한 콘텐츠 패널에 요소가 나열되지 않습니다. (16896)
- 테이블 제목 요소 내의 하위 요소가 Experience Manager Guides의 **미리 보기** 모드에서 렌더링되지 않습니다. (16691)
- 이스케이프 문자로 작성된 **특수 문자**&#x200B;를 Experience Manager Guides에 업로드한 후 항목에서 제거합니다. (16495)
- Vimeo 비디오는 Experience Manager Guides에서 전체 화면 기능을 지원하지 않습니다. (15996)
- `<pre>` 또는 `<codeblock>` 요소에 서식 있는 텍스트 시퀀스를 붙여 넣으면 텍스트가 잘립니다. (15859)
- 템플릿을 코드를 통해 설치할 때 처리되지 않은 상태로 유지되면 중복 GUID로 인해 콘텐츠가 삭제됩니다. (15858)
- Experience Manager Guides이 **미리 보기** 모드에서 **처리 역할** 특성을 준수하지 못했습니다. (15787)
- 편집기에서 선택한 영역 이외의 추가 텍스트가 간헐적으로 삭제됩니다. (15708)
- Word 문서 또는 HTML에서 큰 표를 복사하여 웹 편집기에 붙여넣을 수 없습니다. (15369)
- 요소에 대한 속성 추가 또는 새 요소 삽입을 캡처하기 위한 API 또는 이벤트 부족. (15351)
- 웹 편집기의 `<ol>` 태그 내에 `<data>` 태그를 추가할 수 없습니다. (15161)
- **Element** 자리 표시자 구성 요소로 인해 UI가 중지됩니다. (14957)
- 웹 편집기에서 .pptx 파일을 업로드할 수 없습니다. (14837)
- 웹 편집기에서 텍스트를 찾는 동안 커서는 Enter 키를 누르면 검색된 텍스트의 첫 번째 발생으로 돌아갑니다. (14820)
- 자동 저장은 여러 문제를 일으키고 커서의 위치를 변경하며 문서에서 수동으로 클릭해야 합니다. (14253)
- 텍스트 내의 테이블 셀에서 **Enter** 키를 눌러도 단락이 예상대로 분할되지 않습니다. (14251)
- 큰 파일이 웹 편집기에 로드되지 않아 브라우저가 중지됩니다. (13227)
- 글로벌 **찾기 및 바꾸기**&#x200B;를 통해 찾은 파일을 연 후에는 검색 결과를 사용할 수 없습니다. (12142)
- 소스 보기에서 `</conbody>`이(가) 잘못된 위치에 삽입되는 경우가 있습니다. (11305)
- 구성 요소 경로 `/libs/fmdita/components/versions`이(가) 하드코딩되어 있으므로 사용자가 오버레이할 수 없습니다. (8779)
- DITA 맵 내에서 참조된 주제에 대한 `<conref>`이(가) 편집기 내의 미리 보기에 반영되지 않습니다. (17794)
- 자동 들여쓰기 기능을 사용한 후 Experience Manager DITA 안내서에서 저장 함수를 트리거하지 못합니다. (16482)
- 툴팁 기능이 XML 편집기의 Source 필드를 업데이트하지 못했습니다. (15847)
- Adobe Experience Manager의 이미지에 대해 **UUID 링크 공유** 기능이 작동하지 않습니다. (15598)
- **작성자** 보기에서 줄바꿈 없는 공백을 사용할 때 복사 및 붙여넣기 문제가 발생하여 텍스트가 오버플로됩니다. (15541)
- `<reltable>` 및 `<fig>` 태그에서 겹치는 텍스트 문제가 발생합니다. (15238)
- **특성** 패널에서 깜박임 문제가 발생합니다. (15237)
- `<topicmeta>` 내의 `<othermeta>` 요소에서 다른 DITA 맵에 `<conref>`을(를) 추가할 때 맵 ID도 요소의 ID와 함께 추가됩니다. (15226)
- 커서는 콘텐츠 내의 문자나 단어를 삭제할 때 블록 요소 사이를 이동합니다. (15224)
- 다른 탭에서 파일을 이동할 때, 토큰이 만료될 때 또는 사용자가 로그아웃될 때 &quot;&quot;로 체크 아웃된 파일&quot; 오류 메시지가 잘못 표시됩니다. (15223)
- 변경할 때 **특성** 패널에서 `<conref>`을(를) 업데이트할 수 없습니다. (15209)
- 표 셀 내에서 이미지를 선택하면 전체 셀이 선택됩니다. (15188)
- **특성** 패널이 웹 편집기의 Source 보기에 표시되지 않습니다. (14387)
- `<keyref>`을(를) 사용하여 추가된 `<Topicref>`이(가) 기본 PDF에 표시되지 않습니다. (11974)
- 웹 편집기에서 태그의 끝에 편집하는 동안 원하지 않는 줄바꿈하지 않는 공백이 추가됩니다. (11786)
- DITA 파일의 맞춤법 오류를 수정하는 동안 콘텐츠가 삭제됩니다. (11610)
- 편집을 위해 새 탭에서 DITA 주제 또는 맵을 열면 Assets UI에서 선택 탐색이 중지됩니다. (4992)
- 검토 노드를 삭제하면 Adobe Experience Manager Guides에서 주석을 열고 보는 기능이 중단됩니다. (15366)
- DITA 버전에서 Assets UI에 사용자 이름이 잘못 표시됩니다. (17580)
- `<fig>` 요소가 코드 조각으로 삽입되면 `<title>` 요소가 자동으로 추가됩니다. (18562)
- 고밀도 데이터 세트가 있는 많은 파일을 Experience Manager Guides에 업로드하는 동안 문제가 발생합니다.(17008)
- 특히 키워드가 하위 맵에 다르게 정의된 경우 웹 편집기는 기본적으로 올바른 키워드를 표시하지 않습니다. (14748)
- 웹 편집기의 맵 보기에서 50개가 넘는 파일의 속성을 대량으로 편집할 때 **문서 상태**&#x200B;이(가) 표시되지 않습니다. (14574)
- 자동 저장 기능을 사용할 때 닫기 버튼의 동작이 일관되지 않습니다. (10996)
- 새 요소를 삽입하거나 방정식을 수정할 때 MathML 요소에서 유효성 검사 문제가 발생합니다. (10624)
- 변경 내용 추적 기능은 한국어 문자로 시작되는 텍스트에서는 작동하지 않습니다. (14538)
- 버전 생성 후 주제의 연결된 이미지가 기준선에 표시되지 않습니다. (16931)

## 게시

- 키에 대한 상호 참조가 기본 PDF 출력에서 해결되지 않습니다. (18087)
- Salesforce에서 기존 문서를 다시 게시할 때 **duplicate_value** 오류가 간헐적으로 발생합니다. (17932)
- 라이트닝 URL로 Salesforce 연결 유효성 검사가 실패합니다. (17797)
- **topicmeta에 추가된 메타데이터 사용** 옵션을 선택하면 메타데이터 속성이 기본 PDF 출력의 문서 고유성에 전파되지 않습니다.(17283)
- 기본 PDF 출력의 조건 필터링이 DITA-OT와 비교하여 예상대로 작동하지 않습니다. (17095)
- TOC는 기본 PDF 출력에서 `<sub>` 또는 `<sup>` 태그를 사용하지 않습니다. (17028)
- 교차 맵 연결이 `scope="peer"` 이(가) 있는 링크에 대한 게시 컨텍스트 설정에 모든 상위 맵을 표시하지 못했습니다. (16700)
- AEM 사이트 생성 및 증분 게시 API가 예상대로 작동하지 않습니다. (16666)
- **고아 사이트 삭제** 옵션이 활성화된 경우 AEM 사이트 출력 생성에 실패합니다. (15896)
- 새 특성 또는 기존 특성을 추가하거나 제거할 때 이전 특성은 **조건 사전 설정**&#x200B;에 유지됩니다. (15890)
- JSON 출력에서 DITA 맵 또는 주제의 메타데이터가 JSON 출력 파일로 전파되지 않습니다. (15713)
- RTL 언어 콘텐츠가 기본 PDF 게시 출력에서 올바르게 처리되지 않습니다. (15709)
- 사전 설정의 이름을 바꾸면 기본 PDF 게시가 실패합니다. (15662)
- 게시된 AEM 사이트 출력의 **sourcePath** 속성이 잘못되었습니다. (15502)
- 언어 변수의 선택 및 사용자 지정이 기본 PDF 출력 사전 설정에서 제대로 작동하지 않습니다. (15399)
- 큰 스타일시트나 레이아웃 템플릿을 사용할 때 네이티브 PDF 생성이 실패합니다. (15344)
- `<conref>`을(를) 절대 경로와 함께 사용하는 경우 게시된 출력에서 콘텐츠가 제대로 렌더링되지 않습니다. (15222)
- `fmdita rewriter`과(와) `ResourceResolver` 사이의 충돌로 인해 AEM Sites URL 단축이 작동하지 않습니다. (14793)
- Node.js에 대한 종속성 가져오기와 관련된 오류와 함께 네이티브 PDF 생성이 실패합니다. (14445)
- **processing-role=&quot;resource-only&quot;**, **search=&quot;no&quot;** 및 **chunk=&quot;to-content&quot;** 특성은 각각 AEM Sites 출력에 표시되지 않습니다. (14442)
- `<Conref>`은(는) 웹 편집기의 `Preview` 모드 및 기본 PDF 출력에서 확인되지 않습니다. (17827)
- 기본 PDF에서 중첩된 DITA 주제가 목차(TOC)에 잘못 표시됩니다. (16742)
- 비디오 파일에 대해 **Dynamic Media**&#x200B;에서 생성된 썸네일이 게시된 출력에서 유지되지 않습니다. (15656)
- 게시된 PDF의 일괄 활성화 중에 **일괄 Publish 대시보드**&#x200B;에서 참조된 콘텐츠가 활성화되지 않았습니다. (17793)
- 2k 맵이 포함된 폴더가 폴더 프로필 내의 폴더 경로에 설정되어 있으면 출력 사전 설정에 적용된 변경 사항이 실패합니다. (14852)
- OOTB 주제 재생성 또는 증분 게시 API 실패로 인해 주제 재생성에 실패합니다. (18452)
- 조건 사전 설정은 Experience Manager Guides 업그레이드 후 업데이트된 속성을 가져오지 않습니다. (18174)
- 키 정의가 포함된 파일이 DITA 맵과 동일한 폴더에 없는 경우 기본 PDF 출력에 대해 컨텐트 참조가 올바르게 해석되지 않습니다. (15062)
- 벌크 Publish 대시보드 는 아직 번역 프로세스에 있는 맵에 대해 빈 을 표시합니다. (19352)
- 현지화된 맵에서는 게시된 콘텐츠의 벌크 활성화가 작동하지 않습니다. (17638)



## 관리


- InDesign 대 DITA 변환에는 사용자 지정 구성 파일이 선택되지 않도록 하드코딩된 구성 경로가 있습니다. (16891)
- 닫히지 않은 **리소스 확인자**&#x200B;로 인해 세션 수가 증가하고 `PathNotFoundException`개의 오류가 Experience Manager Guides 4.3.1 릴리스를 게시합니다. (15604)
- 대형 저장소에서 안내서 패키지를 설치하는 중 오류가 발생했습니다. (15160)
- Java API를 사용하여 기준선을 만드는 것은 Experience Manager Guides에서 작동하지 않습니다. (14787)
- 자산 업로드가 500MB를 초과할 때 `/bin/fmdita/import` API가 보류 중인 요청에서 무기한 보류됩니다. (14743)
- 기존 베이스라인을 편집하고 특정 버전을 선택하면 응용 프로그램 오류가 트리거됩니다. (14451)
- **FileNotFoundException** 예외로 인해 사후 프로세스 스크립트 실행이 실패했습니다. (16517)
- `<conkeyref>`이(가) 있는 동적 제목은 보고서 주제 목록에 표시되지 않습니다. (16967)
- DITA 에셋을 복사할 때 패치되지 않은 속성으로 인해 Experience Manager Guides Reports UI에 부정확한 **주제 목록** 수가 발생합니다. (15529)
- URL에 %20이(가) 있는 외부 참조가 포함된 항목은 손상된 파일 참조를 표시합니다. (15347)
- fmditaMaprefs 및 fmditakeydeffs 속성은 DITA 맵과 주제에 대한 절대 경로를 설정하더라도 상대 경로를 표시합니다. (18353)
- 오버레이 기능의 경로가 한국어 파일용으로 하드 코딩되어 있고 올바르게 선택되어 있지 않습니다. (17089)
- 웹 편집기에서 기준 요소 만들기의 기본 시간은 현재 시간이 아닌 00:00으로 표시됩니다. (15215)

## 검토

- 사용자 수가 25개를 초과하는 경우 검토 작업을 만드는 동안 사용자 목록을 가져오지 못합니다. (17329)
- 검토 주제가 올바른 순서로 표시되지 않습니다. (16319)
- 웹 편집기에서 검토 패널이 느리게 로드됩니다. (14680)
- 검토자는 Experience Manager Guides에서 문서 검토를 수행할 때 공백을 추가, 강조 표시 또는 제외할 수 없습니다. (14752)
- 사용자가 검토 작업을 업데이트할 때 할당된 모든 검토자에게 업데이트에 대한 알림이 전송되지 않습니다. (9496)

## 번역

- 번역된 에셋의 참조는 업데이트되지 않습니다. (18086)
- 사람 번역으로 XLIFF 프로젝트를 만들 수 없습니다. (16964)
- `<conref>` 또는 `<conkeyref>`이(가) 있는 제목이 웹 편집기의 기본 및 번역 대시보드에서 확인되지 않습니다. (16961, 16879)
- Experience Manager Guides 4.3.1 릴리스에서 번역 프로젝트가 Adobe Experience Manager 6.5 SP18에 새 언어 작업을 추가하지 못했습니다. (15398)
- **번역 수락**&#x200B;이(가) 임시 파일의 번역을 완료하지 못했습니다. (14665)
- 활성 번역 프로젝트에서 업데이트된 주제를 추가하면 항목이 중복되고 프로세스가 실패합니다. (7688)
- 참조가 여러 언어로 번역되는 동안 직접 또는 간접으로 올바르게 필터링되지 않습니다. (17891)
- 관리자가 아닌 사용자의 경우 오류로 XLIFF 기반 번역이 실패합니다.(17296)
- 번역된 파일의 제목은 두 번째 번역 후 콘텐츠가 번역되었더라도 영어로 되돌아갑니다. (15200)
- **번역 상태**&#x200B;가 **진행 중**(으)로 설정된 번역 프로젝트를 선택하면 잘못된 페이지가 열립니다. (13248)
- **구조만 만들기** 옵션을 선택하여 만든 번역 프로젝트에 할당된 UUID가 없습니다. (18980)


## 알려진 문제

Adobe은 4.6.0 릴리스에 대해 다음과 같은 알려진 문제를 확인했습니다.
- **AEM Sites** 사전 설정(비레거시)을 열면 주제가 더럽혀지는 것으로 표시됩니다.
- 선택한 패널은 브라우저 새로 고침 시 **출력** 탭에서 유지되지 않습니다.
- **작성자** 보기에서 두 `topicrefs` 사이에 주제를 끌어다 놓을 수 없습니다.
- 사전 설정에 적용된 조건 필터링은 **PDF으로 다운로드**&#x200B;를 통해 적용되지 않습니다.
- 맵 패널에서 단일 주제를 생성하면 **AEM Sites** 사전 설정에서 선택한 모든 주제가 생성됩니다(비레거시).
- DITA 맵의 맨 위 도구 모음에서 주제의 참조를 삽입하면 사용자 인터페이스에서 깨진 상태로 표시됩니다.
- 참조가 누락된 경우 DITA 맵에 대한 기본 PDF 생성에 실패합니다.
- 주제의 문서 상태가 **완료**(으)로 업데이트되면 **새 릴리스 시작** 아이콘은 주제의 **미리 보기** 모드에서만 사용할 수 있습니다.
- 에셋 UI에서 DITA 파일을 선택하면 구성 설정에서 **FrameMaker에서 열기** 옵션이 비활성화되어 있지만 표시됩니다.




