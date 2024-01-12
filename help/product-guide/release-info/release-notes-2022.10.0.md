---
title: 릴리스 정보 | Adobe Experience Manager Guides as a Cloud Service, 2022년 10월 릴리스
description: Adobe Experience Manager Guides as a Cloud Service 10월 릴리스
exl-id: 38638080-625c-49c3-9e54-56cc23831546
feature: Release Notes
role: Leader
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '491'
ht-degree: 1%

---

# Adobe Experience Manager Guides as a Cloud Service 10월 릴리스

## 10월 릴리스로 업그레이드

최신 Adobe Experience Manager Guides as a Cloud Service 업그레이드(나중에 참조) *AEM Guides as a Cloud Service*) 다음 단계를 수행하여 설정합니다.
1. Cloud Service의 Git 코드를 체크아웃하고 업그레이드하려는 환경에 해당하는 Cloud Service 파이프라인에 구성된 분기로 전환합니다.
1. 업데이트 `<dox.version>` 의 속성 `/dox/dox.installer/pom.xml` Cloud Service 파일 Git 코드 2022.10.183.
1. 변경 사항을 커밋하고 Cloud Service 파이프라인을 실행하여 AEM Guides as a Cloud Service의 10월 릴리스로 업그레이드합니다.

## 호환성 매트릭스

이 섹션에서는 2022년 10월 AEM Guides as a Cloud Service 릴리스에서 지원하는 소프트웨어 애플리케이션에 대한 호환성 매트릭스를 나열합니다.

### FrameMaker 및 FrameMaker Publishing Server

| FMPS | FrameMaker |
| --- | --- |
| 호환되지 않음 | 2020 업데이트 4 이상 |
| | |

*AEM에서 생성된 기준 및 조건은 2020.2년부터 FMPS 릴리스에서 지원됩니다.

### 산소 연결기

| AEM Guides as a Cloud 릴리스 | 산소 커넥터 창 | 산소 커넥터 Mac | Oxygen 창에서 편집 | Oxygen Mac에서 편집 |
| --- | --- | --- | --- | --- |
| 2022.10.0 | 2.7.13 | 2.7.13 | 2.3 | 2.3 |
|  |  |  |  |


## 새로운 기능 및 향상된 기능

AEM Guides as a Cloud Service에서는 10월 릴리스의 개선 사항 및 새로운 기능을 제공합니다.


### 빠른 생성 패널

이제 AEM Guides에서는 **빠른 생성** DITA 맵용으로 만들어진 사전 설정의 출력을 빠르게 생성하고 볼 수 있는 패널입니다.

![빠른 생성 아이콘](assets/quick-generate-icon.png)

다음에서 **빠른 생성** 패널에서 DITA 맵에 대해 만들어진 모든 출력 사전 설정 목록을 볼 수 있습니다.

![빠른 생성 패널](assets/quick-generate-panel.png)

하나 이상의 사전 설정을 선택하여 출력을 빠르게 생성합니다. 사전 설정에 대해 생성된 출력을 빠르게 볼 수도 있습니다. 출력 생성에 성공 메시지가 표시됩니다. 출력 생성에 실패하면 오류 메시지가 표시됩니다. 오류 로그를 보고 생성 프로세스에서 발생한 오류의 세부 정보를 확인할 수도 있습니다.


## 해결된 문제

다양한 영역에서 수정된 버그는 다음과 같습니다.

* 기본 PDF | PDF 출력에서 리소스 전용 항목을 제거하는 동안 오류가 발생했습니다. (10554)
* 기본 PDF | PDF 출력에 빈 키 참조가 나타납니다. (10553)
* 기본 PDF | `navtitle` 대상 `topichead` 은(는) 영광스럽지 않습니다. (10509)
* 기본 PDF | amd64 JDK 버전에 필요한 지원 (10465)
* 기본 PDF | 목차에서 주요 주제를 숨길 수 없습니다. (10355)
* 기본 PDF | 챕터 레이아웃에서 페이지 번호를 다시 시작하면 이전 챕터가 끝날 때부터 임의로 번호가 매겨집니다. (10154)
* Chrome 브라우저 | UI에서 요소를 드래그하여 놓을 때 화면이 비어 있습니다. 예를 들어, 조건 패널에서 조건을 드래그할 때 사용합니다. (10524)
* 에셋의 복사-붙여넣기 작업 후 노드 속성이 제거됩니다. (10053)
* 클릭 시  **닫기** 사용자가 assets로 리디렉션되고 있습니다. AEM 홈페이지로 사용자를 안내하도록 경험이 수정되었습니다. (9654)
