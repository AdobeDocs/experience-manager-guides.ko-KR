---
title: 콘텐츠 관리
description: AEM Guides에서 콘텐츠를 관리하고 역할 및 권한을 식별합니다. 콘텐츠 관리의 주요 개념과 전역 또는 폴더 수준 프로필 작업에 대해 알아봅니다.
feature: Content Management
role: User
source-git-commit: 76c731c6a0e496b5b1237b9b9fb84adda8fa8a92
workflow-type: tm+mt
source-wordcount: '717'
ht-degree: 10%

---

# 콘텐츠 관리 {#id164JBG0M0T1}

실제 콘텐츠 작성을 시작하기 전에 AEM Guides의 콘텐츠 관리에 대한 몇 가지 기본 개념을 숙지해야 합니다. 그런 다음 다양한 사용자 그룹을 만들고 에셋을 구성하는 것부터 시작합니다.

## 주요 개념

AEM의 콘텐츠 관리에 대한 몇 가지 주요 개념은 다음과 같습니다.

**자산 관리**

AEM Guides은 AEM의 DAM\(디지털 에셋 관리)을 사용하여 DITA 파일을 관리합니다. 업로드하거나 DAM에 체크 인하는 파일은 디지털 에셋으로 저장됩니다. AEM Assets에서 에셋을 관리하고 편집할 수 있습니다. 자산 관리에 대한 자세한 내용은 [자산 관리](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/assets/manage/manage-digital-assets.html?lang=en)를 참조하십시오.

**링크 관리**

참조가 손상될 염려가 없이 컨텐츠 리포지토리에서 파일을 이동하거나 이름을 바꾸거나 폴더 구조를 변경합니다. 영향을 받는 콘텐츠에 대한 참조와 콘텐츠 간 참조는 모두 자동으로 업데이트됩니다. 다른 곳에서 참조되는 콘텐츠를 삭제할 때 의도하지 않은 손상을 방지하기 위해 경고를 받습니다.

**버전 관리**

AEM Guides은 디지털 에셋에 대한 버전 관리를 제공합니다. 선택한 DITA 작성 응용 프로그램에서 이 기능을 쉽게 활성화할 수 있습니다. 작성자가 체크인 및 체크아웃 등의 표준 버전 제어 기능을 수행할 수 있습니다.

버전을 만들거나 특정 버전으로 되돌리는 방법에 대한 자세한 내용은 [분기, 되돌리기 및 후속 버전 관리](web-editor-preview-topics.md#id193PG0Y051X)를 참조하십시오.

**기본 DITA 처리**

AEM Guides은 DITA 파일의 구조를 유지하지만 AEM에서 요소 매핑을 사용하여 DITA 요소를 AEM 구성 요소에 매핑하여 DITA를 기본적으로 처리할 수도 있습니다. 기본 DITA 처리는 주제 미리 보기, AEM Sites 게시 및 검토 워크플로와 같은 기능에 사용됩니다.

## 역할 및 권한 식별 {#id181TF0K0MHT}

AEM Guides은 세 가지 기본 제공 그룹을 제공합니다. 이러한 그룹은 *작성자*, *검토자* 및 *게시자*&#x200B;입니다. 연결된 그룹에 따라 아래 표에 언급된 대로 특정 작업을 수행할 수 있는 권한이 있습니다. 예를 들어 게시 작업은 게시자만 수행할 수 있고 작성자나 검토자는 수행할 수 없습니다. 마찬가지로 작성자는 새 주제를 만들 수 있고 검토자는 주제만 검토할 수 있습니다.

>[!TIP]
>
> 사용자 권한 설정에 대한 모범 사례는 모범 사례 안내서의 *권한*&#x200B;섹션을 참조하십시오.

다음 표에는 다양한 작업과 이러한 작업을 수행할 수 있는 그룹이 나열되어 있습니다.

| 작업 | 작성자 | 리뷰어 | 게시자 |
|----|-------|---------|----------|
| DITA 주제 만들기 | 예 |   | 예 |
| DITA 맵 만들기 | 예 |   | 예 |
| 컬렉션 매핑 | 예 |   | 예 |
| 리뷰 작업 만들기 | 예 |   | 예 |
| 항목 검토[1](#fntarg_1) | 예 | 예 | 예 |
| 키 해결 | 예 |   | 예 |
| 체크아웃/체크인 | 예 |   | 예 |
| 주제 편집 | 예 |   | 예 |
| 주제 이동 | 예 |   | 예 |
| 주제 속성 편집 | 예 |   | 예 |
| 복사 | 예 |   | 예 |
| 삭제 | 예 |   | 예 |
| 공유 | 예 |   | 예 |
| **문서 상태** |
| 문서 상태 프로필 만들기/편집 |   |   | 예 |
| 문서 상태 변경[2](#fntarg_2) | 예 | 예 | 예 |
| **DITA 맵 콘솔에서 사용할 수 있는 기능 \(출력 사전 설정 탭\)** |
| 생성 |   |   | 예 |
| 편집 |   |   | 예 |
| 복제 |   |   | 예 |
| 만들기 |   |   | 예 |
| 사전 설정 삭제 |   |   | 예 |
| **DITA 맵 콘솔에서 사용할 수 있는 기능 \(출력 탭\)** |
| 생성된 출력 보기 | 예 |   | 예 |
| **DITA 맵 콘솔에서 사용할 수 있는 기능 \(항목 탭\)** |
| 리뷰 작업 만들기 | 예 |   | 예 |
| 편집 | 예 |   | 예 |
| **DITA 맵 콘솔에서 사용할 수 있는 기능 \(기준선 탭\)** |
| 만들기 |   |   | 예 |
| 편집 |   |   | 예 |
| 복제 |   |   | 예 |
| 제거 |   |   | 예 |
| DITA 맵 콘솔 \(보고서 탭\) | 예 |   | 예 |
| **DITA 맵 콘솔에서 사용할 수 있는 기능 \(조건 사전 설정\)** |
| 조건 사전 설정 만들기/편집 |   |   | 예 |

[1](#fnsrc_1) *작성자* 및 *게시자*&#x200B;가 리뷰를 위해 초대된 경우

[2](#fnsrc_2) 문서 상태 프로필에서 사용자에게 부여된 권한에 따라 다릅니다.

## 콘텐츠 작성에 대한 전제 조건

**전역 또는 폴더 수준 프로필을 사용하여 작업**

기업에서는 다른 그룹이나 제품이 다른 작성 템플릿, 출력 템플릿, 조건부 속성 프로필 \(또는 주제 스키마\) 및 웹 편집기 구성을 사용할 수 있습니다. 작성자가 엔터프라이즈 \(또는 글로벌\) 수준에서만 구성하면 작성자와 관련 없는 템플릿 또는 프로필이 표시되므로 작성자가 어려움을 겪을 수 있습니다.

AEM Guides을 사용하면 폴더 수준뿐만 아니라 엔터프라이즈 \(전역\) 수준에서 작성 \(topic 또는 map\) 템플릿, 출력 템플릿, 조건부 속성 및 웹 편집기 구성을 구성할 수 있습니다. 이렇게 하면 기업의 다양한 부서나 제품에 대한 구성을 분리할 수 있습니다.

또한 부서나 제품 관리자에게 폴더별 구성을 위임하여 관리를 분산할 수 있습니다.

전역 및 폴더 수준 프로필 설정에 대한 자세한 내용은 Adobe Experience Manager Guides as a Cloud Service 설치 및 구성에서 *전역 또는 폴더 수준 프로필 구성*&#x200B;을 참조하십시오.