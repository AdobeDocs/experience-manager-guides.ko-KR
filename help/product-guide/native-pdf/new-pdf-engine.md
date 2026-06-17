---
title: 기본 PDF용 새 게시 엔진 | PDF 출력 생성
description: 기본 PDF 게시를 위한 새 게시 엔진으로 작업하는 방법을 알아봅니다.
feature: Publishing, Native PDF Output
role: User
TQID: https://experienceleague.adobe.com/GV3iYtBdFVrQwFjdvfqnfDIWPMugO3hFjS4FZqspG2M
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
  - id: afb45297-4313-4f67-818e-bc0b03abe086
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: ad602516-aca3-4247-9ae8-f393d958efa9
  - id: d6596f3f-92a7-43ec-b444-237db6adad05
  - id: f6b497f1-f8e0-42ce-8e95-56c28d94026e
  - id: f9dbea21-a714-40dd-bc90-080d8046c93f
  - id: fd6cc9e1-e5e5-494e-b7b1-a32f2d6cd7c9
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
  - id: cc72dcf1-72e1-48cc-b434-e7c27d62d67c
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
source-git-commit: 010a11e20d518064549ce7d66648586f49f572ec
workflow-type: tm+mt
source-wordcount: 913
ht-degree: 0%

---

# 기본 PDF 엔진 v2를 사용하여 작업

새 게시 엔진 *기본 PDF 엔진 v2*&#x200B;은(는) 업그레이드된 PDF 생성 프레임워크를 기반으로 하며 글꼴 처리, CSS 처리 및 렌더링 동작에 대한 변경 사항을 포함합니다.

따라서 새 게시 엔진을 사용하여 생성된 PDF 출력은 기존 PDF 엔진(*기본 PDF 엔진 v1*)을 사용하여 생성된 출력과 다를 수 있습니다. 텍스트 레이아웃, 간격, 스타일, 이미지 렌더링 및 각주 서식과 같은 영역에서 차이가 표시될 수 있습니다.

예를 들어 기본 PDF 엔진 v2는 `OpenType` 글꼴을 지원하는 반면 기본 PDF 엔진 v1은 주로 `TrueType` 글꼴을 사용합니다. 유사한 렌더링 개선 사항은 생성된 PDF의 전체 모양에 영향을 줄 수 있습니다.

사용자 환경에서 기본 PDF 엔진 v2를 활성화하는 방법에 대한 자세한 내용은 [기본 PDF에 대한 새 게시 엔진 구성](./conf-new-pdf-engine.md)을 참조하십시오.

## 새 게시 엔진에 대한 권장 CSS 업데이트

기본 PDF 엔진 v2를 사용하는 동안 기본 PDF 엔진 v1에서 생성한 PDF 출력의 모양을 유지하려면 사용자 지정 CSS를 업데이트해야 할 수 있습니다. 아래 설명된 권장 CSS 변경 사항은 새 설정을 활성화한 후 출력 일관성을 유지하는 데 도움이 될 수 있습니다.

| 설명 | 권장 CSS 업데이트 |
|-------------|------------------------------------------------|
| 이미지 렌더링 동작의 변경 사항으로 인해 배율 조정된 이미지가 다르게 나타날 수 있습니다. | 이미지 렌더링 동작을 복원하려면 다음을 추가하십시오.<br><br><pre><code>&quot;css
이미지 렌더링: 픽셀화;
&quot;</code></pre> |
| 지시선 렌더링 동작이 변경되어 목차(TOC) 지시선 정렬이 약간 다르게 나타날 수 있습니다. | 목차 지시선 정렬을 복원하려면 사용자 정의 스타일시트에서 목차 지시선 요소의 스타일을 조정합니다. 필요한 CSS 변경 사항은 목차 레이아웃 및 서식에 따라 달라질 수 있습니다. |
| 글꼴 렌더링 및 글리프 레이아웃 처리 변경 사항으로 인해 텍스트 간격 및 줄 바꿈이 다를 수 있습니다. | 스타일시트에서 `sans-serif` 글꼴 모음 또는 간격 차이가 있는 글꼴을 사용하는 경우 다음을 추가하십시오.<br><br><pre><code>&quot;css
본문 { -ro-glyph-layout-mode: quality; }
&quot;</code></pre> |
| 기본 각주 스타일이 변경되어 각주 참조가 더 이상 위 첨자 마커로 표시되지 않을 수 있습니다. | 위 첨자 스타일의 각주 마커를 복원하려면 <br><br>을(를) 추가하십시오.<pre><code>&quot;css
.fn::footnote-marker &lbrace;
  내용: counter(각주) &quot; &quot;;
  vertical-align: 초;
  font-size: 65%;
&rbrace;
&quot;</code></pre> |
| 밑줄 배치가 변경되어 밑줄이 그어진 텍스트가 텍스트와 밑줄 사이에 더 많은 간격으로 나타날 수 있습니다. | 밑줄 위치를 복원하려면 `text-underline-offset` 속성을 사용하고 필요에 따라 오프셋 값을 조정합니다. 예: <br><br><pre><code>&quot;css
텍스트 장식: 밑줄;
text-underline-offset: -0.1em;
&quot;</code></pre> |
| 목록 렌더링 동작이 변경되어 목록 표시자와 목록 항목 텍스트 사이의 간격이 달라질 수 있습니다. | 간격을 복원하려면 목록 항목의 왼쪽 패딩을 늘립니다. 예: <br><br><pre><code>&quot;css
.step &lbrace;
  margin-top: 0.3rem;
  margin-bottom: 0.5rem;
  padding-left: calc(1.5rem + 1ch);
&rbrace;
&quot;</code></pre> |
| 여백 축소 동작의 변경 사항으로 인해 제목 앞의 간격이 다를 수 있습니다. | 간격을 복원하려면 인접한 요소의 여백을 검토하고 필요한 경우 겹치는 위쪽 및 아래쪽 여백을 줄이거나 제거하십시오. 예: <br><br><pre><code>&quot;css
h1.chapter { margin-top: 0; }
.chaptoc-body { margin-bottom: 0; }
&quot;</code></pre> |
| CSS로 생성된 체크 표시 마커는 서로 다른 대체 글꼴을 사용하여 렌더링되므로 크기나 스타일이 다르게 나타날 수 있습니다. | 마커를 일관되게 렌더링하려면 두 글리프가 모두 포함된 글꼴 모음을 사용합니다. 예: <br><br><pre><code>&quot;css
::마커 &lbrace;
  font-family: -ro-symbols !important;
&rbrace;
&quot;</code></pre> |
| CSS에서 생성한 원형 목록 마커는 마커 위치 동작의 변경 때문에 부분적으로 잘리거나 잘릴 수 있습니다. | 원형 목록 마커의 모양을 복원하려면 마커에 절대 위치를 사용하지 마십시오. 절대 위치가 필요한 경우 적절한 `top` 값을 명시적으로 지정하여 마커를 올바르게 배치하십시오. |
| 목록 항목에서 `position: relative`과 같은 위치 지정 스타일을 사용하는 경우 PDF/UA 출력의 목록 항목 읽기 순서가 다를 수 있습니다. | 읽기 순서가 원본 문서 구조를 더 가깝게 따르도록 하려면 목록 항목에 다음 CSS 속성을 적용하세요. <br><br><pre><code>&quot;css
리 &lbrace;
  -ro-paint-reorder: 방지;
&rbrace;
&quot;</code></pre> |


## 알려진 문제에 대한 해결 방법

다음 해결 방법은 기본 PDF 엔진 v2를 사용할 때 생성된 PDF 출력에서 알려진 문제를 해결하는 데 도움이 될 수 있습니다.

- 테이블 콘텐츠에 적용된 `text-decoration` css 속성이 PDF 출력에서 렌더링되지 않습니다.

  **해결 방법**: 표 요소에 바로 적용하는 대신 표 콘텐츠 내의 `span`개 요소에 텍스트 장식 속성을 적용합니다.

- `-ro-colorbar-top-left` 및 `-ro-colorbar-top-right` CSS 속성은 PDF 출력의 색상 막대에 영향을 주지 않습니다.

  **해결 방법**: `mergedHTML.json`의 사용자 스타일 시트에서 해당 값을 제거하거나 `!important`을(를) 문서 CSS의 속성 값에 추가하여 사용자 스타일 시트로 인해 재정의되지 않도록 합니다.

- PDF 출력에서 색상 막대는 페이지 크기에 맞게 축소되지 않으므로 페이지 너비가 제한될 때 색상 막대가 병합되어 표시될 수 있습니다.

  **해결 방법**: 페이지의 서로 다른 면에 회색 및 색 막대를 표시하거나 더 작은 페이지 너비에서 겹치지 않도록 색 막대 설정을 조정합니다.

## 새 게시 엔진에 대한 문제가 해결되었습니다.

_기본 PDF 엔진 v1_&#x200B;을 사용하여 생성된 PDF 출력의 다음 문제는 _기본 PDF 엔진 v2_&#x200B;에서 해결되었습니다.

- 특정 컨텐츠에 대한 기본 PDF 출력을 생성할 때, 여러 페이지에 걸쳐 전체 컨텐츠가 들어 있는 중간 HTML에도 불구하고 PDF에서 첫 번째 페이지만 렌더링됩니다. (GUIDES-28270)
- 접근성 설정이 활성화된 기본 PDF 출력의 콘텐츠 읽기 순서가 잘못되었습니다. 바닥글의 페이지 번호는 끝이 아닌 기본 콘텐츠 앞에 읽혀집니다. (GUIDES-27790)
- 기본 PDF 출력의 색상 막대는 전체 페이지 너비를 넘지 않고 페이지 크기를 사용자 지정할 때 겹쳐 일부 색상 상자가 숨겨집니다. (GUIDES-15505)
- `CSS:is()pseudo-class` 선택기가 기본 PDF 출력에서 적용되지 않으므로 브라우저 렌더링과 스타일이 다릅니다. (GUIDES-11328)