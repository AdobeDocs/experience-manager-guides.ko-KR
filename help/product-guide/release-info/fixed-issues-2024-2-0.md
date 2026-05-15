---
title: 릴리스 정보 | Adobe Experience Manager Guides, 2024.2.0 릴리스의 문제가 해결되었습니다.
description: Adobe Experience Manager Guides as a Cloud Service 2024.2.0 릴리스의 버그 수정에 대해 알아봅니다.
exl-id: fae1ff07-6232-4e9a-a89e-5e760e807b9d
TQID: https://experienceleague.adobe.com/z-L0sZ2HH720nI3LyDjiIqujxSBP-QLdPqvEInNNRnE
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a3bd6397-2eb2-4908-a61c-226e26855dcaid: ab01a588-7dea-43f2-a699-0b3f128465d6
subfeature_v2: id: ad602516-aca3-4247-9ae8-f393d958efa9id: d6596f3f-92a7-43ec-b444-237db6adad05id: f89f75b0-cf2e-4e96-aec8-fe8c39cbd0ef
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554
topic_v2: id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 504
ht-degree: 8%

---

# 2024.2.0 릴리스의 문제가 해결되었습니다.

이 문서에서는 Adobe Experience Manager Guides as a Cloud Service의 2024.2.0 릴리스의 다양한 영역에서 수정된 버그를 다룹니다.

새로운 기능 및 개선 사항에 대한 자세한 내용은 [2024.2.0 릴리스의 새로운 기능](whats-new-2024-2-0.md)을 참조하십시오.

[2024.2.0 릴리스의 업그레이드 지침](upgrade-instructions-2024-2-0.md)에 대해 알아봅니다.



## 작성

- 편집기의 맞춤법 검사에서는 제안 사항을 선택할 수 없습니다. (15045)
- 전역 탐색 버튼이 작동하지 않고 대시보드가 로드되지 않습니다. (14968)
- 웹 편집기에서 맵 다운로드 기능이 다운로드할 준비가 되면 팝업 알림을 트리거하지 못합니다. (14626)
- 웹 편집기에서 맵 다운로드 기능이 기준선이 있는 맵을 다운로드하지 못합니다. (14622)
- Experience Manager Guides as a Cloud Service의 2023년 10월 릴리스에서 DTD 오류가 발생했습니다. (14482)
- 저장소에서 용어집 주제를 용어집 맵으로 드래그하면 `topicref`이(가) 만들어집니다. (10767)
- 코드 조각의 미리 보기 화면이 고정되어 있습니다. (14840)
- `labels.json` 파일의 레이블은 웹 편집기에서 임의의 순서로 나타납니다. (10508)

## 게시

- 기본 PDF 게시에서 조건 사전 설정 내의 사용자 지정 특성은 기본 PDF 게시에서 작동하지 않습니다. (14943)
- 기본 PDF 게시에서는 Adobe Experience Manager Guides의 2023년 12월 릴리스에 대한 주요 참조가 확인되지 않습니다. (15085)
- AEM Sites 게시가 실패하고 &quot;HTTP&quot;로 시작하는 DITA 파일에 `xref`이(가) 있는 파일의 범위 오류가 발생합니다. (15154)
- 편집기의 **출력** 탭에서 사용자 지정 템플릿을 추가할 수 없습니다. (14846)
- 빈 템플릿 경로로 인해 **AEM 사이트** 사전 설정이 작동하지 않습니다. (14804)
- AEM 방정식이 포함된 주제가 있는 DITA 맵에 대한 MathML 사이트 재생성이 실패합니다. (14790)
- 기본 PDF 게시에서 PDF 생성으로 인해 `Node.js` 게시에 대한 종속성을 가져오는 동안 오류가 발생했습니다. (14445)
- AEM 사전 설정에서 웹 편집기의 `/content` 계층 외부에 있는 템플릿을 선택할 수 없습니다. (14260)
- AEM Sites 출력에서 하위 요소가 있는 `<lines>` 요소에 대해 스타일 또는 줄 바꿈이 손실되었습니다. (12542)
- 최종 출력에서 사용자 지정 메타데이터를 사용할 수 없습니다. (12116)
- 기본 PDF 게시에서는 DITA 맵 메타데이터 속성을 사용하여 PDF 파일 출력의 메타데이터를 채울 수 없습니다. (15159)



## 관리

- **기본 필터** 파일이 웹 편집기에서 파일 이름으로 작동하지 않습니다. (13486)
- 성능을 개선하기 위해 상위 DITA 맵의 색인화를 비활성화하면 특정 기능의 기능에 영향을 줄 수 있습니다(12213).


## 검토

- 마우스 오른쪽 버튼 클릭 컨텍스트 메뉴가 **승인** 또는 **거부** 추적 변경 내용에 대해 작동하지 않습니다. (14607)
- 검토 화면의 DITA 주제를 닫으려면 전환하십시오. 전환 기능은 2023년 12월 Adobe Experience Manager Guides 릴리스에서 작동하지 않습니다. (14537)
- 검토 워크플로우에 대한 이메일 템플릿 사용자 지정은 오버레이에서 작동하지 않습니다. (13954)

## 알려진 문제

Adobe은 2024.2.0 릴리스에 대해 다음과 같은 알려진 문제를 확인했습니다.

- 버전 1.0은 복제된 DITA 파일의 UI에 표시되지 않습니다.
- 사전 설정에 대해 마이크로 서비스가 활성화된 2024.2.0 릴리스에서는 자산 메타데이터 전파가 작동하지 않습니다.
