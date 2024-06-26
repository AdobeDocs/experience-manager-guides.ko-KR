---
title: 릴리스 정보 | Adobe Experience Manager Guides 4.4.0 릴리스의 문제가 해결되었습니다
description: Adobe Experience Manager 안내서 4.4.0 릴리스의 버그 수정에 대해 알아봅니다
role: Leader
source-git-commit: 8f8075b205725a55b93286c804b879353b4d965d
workflow-type: tm+mt
source-wordcount: '1434'
ht-degree: 0%

---

# 4.4.0 릴리스(2024년 1월)의 문제가 해결되었습니다.


이 문서에서는 Adobe Experience Manager Guides의 4.4.0 릴리스의 다양한 영역에서 수정된 버그를 다룹니다.

새로운 기능 및 향상된 기능에 대한 자세한 내용은 [4.4.0 릴리스의 새로운 기능](./whats-new-4-4.md).

다음에 대해 알아보기 [4.4.0 릴리스에 대한 업그레이드 지침](../release-info/upgrade-instructions-4-4.md).


## 작성

- 편집기의 맞춤법 검사에서는 제안 사항을 선택할 수 없습니다. (15045)
- 전역 탐색 버튼이 작동하지 않고 대시보드가 로드되지 않습니다. (14968)
- 웹 편집기에서 맵 다운로드 기능이 다운로드할 준비가 되면 팝업 알림을 트리거하지 못합니다. (14626)
- 웹 편집기에서 맵 다운로드 기능이 기준선이 있는 맵을 다운로드하지 못합니다. (14622)
- Experience Manager 안내서에 잘못된 DTD 오류가 있습니다. (14482)
- 웹 편집기 탭의 제목은 점(.) 다음에 잘립니다. 표시합니다. (14372)
- Assets UI의 중복 맵 이름에 대한 오류 메시지가 업데이트되지 않습니다. (14320)
- 에셋 드래그 앤 드롭 중 버전 생성 논리에 오류가 발생합니다. (14291)
- 재사용 가능한 콘텐츠는 요소 ID를 건너뜁니다. (14213)
- 숨길 설정 컨트롤 **언어 변수** 패널 아래 **출력** 탭이 누락되었습니다. (14194)
- 웹 편집기는에서 특수 스키마를 사용하여 새 참조 또는 주제를 추가할 때 애플리케이션 오류가 발생합니다. **레이아웃** 보기. (14094)
- conref 뒤의 공백 `<ph>` 항목을 저장하면 요소가 사라집니다. (13642)
- 사후 처리가 완료되기 전에 DITA 파일을 저장하려고 하면 응용 프로그램 오류가 발생합니다. (13571)
- 다음에 대한 앵커 링크 `<dlentry>` 또는 `<dt>` 요소가 링크 텍스트를 표시하지 못합니다. (13543)
- 다음 **즐겨찾기** 웹 편집기의 컬렉션이 로드되지 않습니다. (13495)
- 항목 제목에 슬래시가 포함된 경우 `/`웹 편집기의 탭에는 뒤에 오는 문자만 표시됩니다. (13455)
- 웹 편집기에서 미리 보기를 표시한 후에도 이미지 미리 보기가 사라지지 않습니다. (13454)
- 공백이 있는 고유 ID로 만든 경우 인용 부호에 클릭 불가능한 링크가 표시됩니다. (13447)
- 항목을 편집한 후 닫으면 폴더 보기로 돌아가는 대신 AEM 홈 페이지로 리디렉션됩니다. (13306)
- 다른 주제에서 루트 맵 정의 키를 사용할 때는 키워드 삽입 팝업이 표시되지 않습니다. (12950)
- 매우 큰 그래픽을 미리 볼 때 닫기 아이콘이 표시되지 않습니다 **버전 기록** 패널. (12867)
- 의 시간대를 수정할 수 없음 **버전 생성일** 기준선용 열입니다. (12711)
- Zip 파일은 웹 편집기에서 인식되지 않으며 드래그하여 놓을 수 없습니다. (12709)
- 다음 **버전 기록** 에셋 UI의 패널에 잘못된 타임스탬프가 표시됨 **현재** 필드. (12624)
- 다음에서 **레이아웃** 북맵 보기, 사용 **오른쪽으로 이동** 선택한 챕터를 하위 요소로 만들려면 하위 요소가 작동하지 않습니다. (12567)
- 파일 이름이 숫자로 시작하는 템플릿에서 DITA 파일을 만들면 네임스페이스 오류가 발생합니다. (12188)
- rootmap 설정은 사용자가 웹 편집기에서 명시적으로 설정하지 않았더라도 웹 편집기에서 유지됩니다. **사용자 환경 설정**. (11551)
- 일부 속성이 적용된 컨텐츠가에서 강조 표시되지 않습니다. **작성자** 또는 **미리 보기** 모드. (11063)
- 웹 편집기에서 **주요 참조** 를 삽입할 때 창이 열립니다. `varname` 태그에 가깝게 배치하십시오. (10940)
- 저장소에서 용어집 주제를 용어집 맵으로 드래그하면 `topicref`. (10767)
- Google Chrome 및 Microsoft Edge 브라우저에서 XML 편집기의 미리 보기 창이 잘립니다. (10755)
- 웹 편집기에는 가능한 상위 요소 내에 요소를 래핑하는 기능이 없습니다. (8791)
- Adobe Experience Manager Guides 버전 4.3.1을 다시 설치하면 웹 편집기가 제거됩니다. (14519)
- 버전 4.3.1의 설치 관리자에서 필터 충돌이 발생하여 `apps/cq/core/content/projects/properties`. (14517)
- 자체 참조 링크가 목록 아래에 나타납니다. **끊어진 링크** 보고서. (13539)
- 코드 조각의 미리 보기 화면이 고정되어 있습니다. (14840)
- 한국어로 코드 조각을 만드는 동안 끊어진 문자가 나타납니다. (13489)

## 게시

- AEM Sites 게시가 실패하고 다음과 같은 파일의 범위 오류가 발생합니다. `xref` &quot;HTTP&quot;로 시작하는 DITA 파일로 복사합니다. (15154)
- 기본 PDF 게시에서는 DITA 맵 메타데이터 속성을 사용하여 PDF 파일 출력을 위한 메타데이터를 채울 수 없습니다. (15159)
- 기본 PDF 게시에서 조건 사전 설정 내의 사용자 지정 특성은 기본 PDF 게시에서 작동하지 않습니다. (14943)
- 에서 사용자 지정 템플릿을 추가할 수 없음 **출력** 편집기의 탭입니다. (14846)
- **AEM 사이트** 빈 템플릿 경로로 인해 사전 설정이 작동하지 않습니다. (14804)
- MathML 방정식이 포함된 주제가 있는 DITA 맵에 대한 AEM 사이트 재생성이 실패합니다. (14790)
- 기본 PDF 게시에서 PDF 생성으로 인해 다음에 대한 종속성을 가져오는 동안 오류가 발생했습니다. `Node.js` 게시. (14445)
- **AEM 사이트** 사전 설정에서 외부 템플릿을 선택할 수 없음 `/content` 웹 편집기의 계층 구조. (14260)
- 콘텐츠 조각으로 게시하는 기능이 검색 결과에 나열된 파일에 대해 작동하지 않습니다. (14090)
- Fmdita 구성 요소에는 다음과 같은 하드코딩된 경로가 있습니다. `delegator.jsp`: AEM Sites 구성 요소의 오버레이가 방지됩니다. (13993)
- 기본 PDF 게시 출력의 PDF 반응기의 태그가 지정된 보기가 예상대로 작동하지 않습니다. (13622)
- 기본 PDF 게시에서 배경색 선택 **템플릿** 레이아웃을으로 되돌리려면 페이지를 다시 로드해야 합니다. `None`. (13621)
- 범위 피어 링크가 있는 큰 맵에 대해 데이터 저장소에 커밋할 때 AEM 사이트 게시에서 문제가 발생합니다. (13531)
- AEM Site 게시의 범위 피어 링크를 사용하여 큰 DITA 맵에 대한 데이터 저장소를 커밋할 때 문제가 발생합니다. (13530)
- 에 대해 잘못된 아이콘 및 툴팁이 표시됨  **콘텐츠 편집** 의 옵션 **페이지 레이아웃** 기본 PDF 게시에 사용되는 템플릿의 도구 모음입니다. (13492)
- Experience Manager 안내서를 사용하여 사이트를 활성화할 수 없음 **벌크 게시 대시보드**. (13439)
- 기본 PDF 게시에서는 머리글과 바닥글의 이미지에 대체 텍스트가 표시되지 않으므로 접근성이 저하됩니다. (12829)
- AEM Sites 출력에서 의 스타일 또는 줄 바꿈이 손실되었습니다. `<lines>` 하위 요소를 포함하는 요소입니다.(12542)
- 자동으로 확장이 추가되지 않은 경우 기본 PDF에서 페이지 레이아웃 복제가 작동하지 않습니다. (12534)
- 요소 레이블의 현지화가 AEM Sites 출력에서 제대로 작동하지 않습니다. (12144)
- 최종 출력에서 사용자 지정 메타데이터를 사용할 수 없습니다. (12116)
- `fmdita rewriter` 가 사용자의 재작성기 구성과 충돌하여 링크 대신 긴 URL이 표시됩니다. (12076)
- 누락 **난간** 웹 편집기 UI를 통해 생성된 폴더 프로필 수준 출력 사전 설정의 옵션입니다. (11903)
- 다음에서 **AEM 사이트**  사전 설정, 옵션 **모든 주제에 대해 별도의 PDF 생성** 은(는) 작동하지 않습니다. (11555)
- 기본 PDF 게시에서는 CMYK 색상 공간 변환을 지원하지 않습니다. (10754)
- 버전 4.3.1로 업그레이드할 때 일부 예외는 기본 PDF 노드에서 발생합니다. (14492)
- 기본 PDF 게시로 PDF 출력을 생성할 때 파일 이름이 마침표 뒤에 잘립니다. (13620)


## 관리

- GUID가 없는 자체 참조 링크가 있는 DITA 파일을 복사 붙여넣을 때 콘텐츠 참조가 끊어졌습니다. (13540)
- **기준선 필터** 웹 편집기에서 파일이 파일 이름으로 작동하지 않습니다. (13486)
- 웹 편집기에서 기준선은 선택한 버전의 DITA 파일 대신 이전 버전에 대한 제목을 표시합니다. (13444)
- 성능을 향상하기 위해 상위 DITA 맵의 색인화를 비활성화하면 특정 기능의 기능에 영향을 줄 수 있습니다.(12213)
- 큰 DITA 맵에 대한 조건 사전 설정이 만들어지지 않습니다. (10936)
- 맵 컬렉션을 편집하는 동안 컬렉션의 첫 번째 맵에 대한 사전 설정을 편집할 수 없습니다. (10649)
- 의 레이블 `labels.json` 파일이 웹 편집기에서 임의의 순서로 나타납니다. (10508)
- 동적 기준 요소 호출에서 제목 대신 이름을 사용하므로 DITA 맵 API 내보내기가 실패합니다. (14268)

## 검토

- 마우스 오른쪽 버튼 클릭 컨텍스트 메뉴가 다음 경우에 작동하지 않음 **Accept** 또는 **거부** 변경 사항을 추적합니다. (14607)
- Adobe Experience Manager Guides 버전 4.3.1에서 검토 화면의 DITA 주제를 닫으려면 전환하지 않습니다. (14537)
- 웹 편집기에서 이전 버전과 현재 버전의 나란히 표시된 검토 패널에서 대칭 문제가 발생합니다. (14156)
- 검토 워크플로우에 대한 이메일 템플릿 사용자 지정은 오버레이에서 작동하지 않습니다. (13954)
- Experience Manager 가이드 검토 화면의 한국어 첨부 파일을 클릭할 수 없습니다. (13436)
- 검토 및 공동 작업 화면에서 맵 제목이 잘리고 전체 제목을 볼 수 있는 옵션이 없습니다. (13012)

## 번역

- 다음 **수락/거부** 자동 승인된 사람 번역에 대한 버튼이 잘못 표시됩니다. (14318)
- 다국어화(i18n) 문제는 영어가 아닌 DITA 파일을 AEM 페이지로 변환하는 동안 발생합니다. (14286)
- 자동 승인은 가끔 작동하지 않으며, 잘못된 값이에 설정된 경우 예외가 발생합니다. **번역 상태**. (13607)
- 번역 대시보드에서 내보낸 기준선은 실패하고 대상 언어로 열리지 않습니다. (12993)
- 번역된 콘텐츠가 임시 번역 프로젝트에서 동기화되지 않고 DITA XML 편집기 번역 마법사가 잘못 표시됨 **진행 중** 승인된 작업의 상태입니다. (9938)

## 알려진 문제

Adobe은 4.4.0 릴리스에 대해 다음과 같은 알려진 문제를 확인했습니다.

- 버전 1.0은 복제된 DITA 파일의 UI에 표시되지 않습니다.