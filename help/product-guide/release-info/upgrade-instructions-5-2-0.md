---
title: 릴리스 정보 | Adobe Experience Manager Guides 5.2.0 릴리스에 대한 업그레이드 지침
description: 호환성 매트릭스와 Adobe Experience Manager Guides 5.2.0 릴리스로 업그레이드하는 방법에 대해 알아봅니다.
source-git-commit: 1dc529ba8913c30fba876f101c3b52474e8a71dd
workflow-type: tm+mt
source-wordcount: '859'
ht-degree: 4%

---

# 5.2.0 릴리스에 대한 업그레이드 지침(2026년 5월)

이 문서에서는 Adobe Experience Manager Guides 5.2.0 릴리스의 업그레이드 지침 및 호환성 매트릭스를 다룹니다.

새로운 기능 및 향상된 기능에 대한 자세한 내용은 [5.2.0 릴리스의 새로운 기능](../release-info/whats-new-5-2-0.md)을 참조하세요.

이 릴리스에서 수정된 문제 목록을 보려면 [5.2.0 릴리스에서 수정된 문제](../release-info/fixed-issues-5-2-0.md)를 확인하십시오.

## 호환성 매트릭스

이 섹션에서는 Experience Manager Guides 5.2.0 릴리스에서 지원하는 소프트웨어 응용 프로그램에 대한 호환성 매트릭스를 나열합니다.

| AEM Guides | AEM 버전 | 서비스 팩 |
| --- | --- | --- |
| 5.2.0(UUID) | 6.5 LTS | 2 |
| 5.2.0(UUID) | 6.5 | 24, 23, 22 |

자세한 내용은 On-Premise 설치 및 구성 안내서의 [기술 요구 사항](../install-guide/download-install-technical-requirements.md) 섹션을 참조하십시오.

### FrameMaker 및 FrameMaker Publishing Server

| 릴리스 | FMPS | FM |
| --- | --- | --- |
| 5.2.0(UUID) | 지원됨 | 2026 이상 |

### 산소 연결기

| 릴리스 | 산소 커넥터 창 | 산소 커넥터 Mac | Oxygen 창에서 편집 | Oxygen Mac에서 편집 |
| --- | --- | --- |--- |--- |
| 5.2.0(UUID) | 3.8-uuid.1 | 3.8-uuid.1 | 2.3 | 2.3 |

### 기술 자료 템플릿 버전

| 구성 요소 패키지 이름 | 구성 요소 버전 | 템플릿 버전 |
|---|---|---|
| Cloud Service용 Experience Manager Guides 구성 요소 콘텐츠 패키지 | guides-components.all-1.4.0 | aem-site-template-dxml-1.0.17 |

### 새 AEM 사이트 템플릿 버전


| AEM Guides | AEM 버전 | 구성 요소 버전 | 사이트 버전 |
|---|---|---| ---|
| 5.2.0 UUID | 6.5 LTS | guides-components.all-1.4.1 | NA |
| 5.2.0 UUID | 6.5 | guides-components.all-1.4.0 | aemg-sites-template-1.3.0 |

## 사전 요구 사항

Experience Manager Guides 5.2.0 업그레이드 프로세스를 시작하기 전에 다음을 확인하십시오.

1. Experience Manager Guides 버전 5.0.0, 5.0.3, 5.1.0, 5.1.3 또는 5.1.4로 업그레이드되었습니다.
1. (선택 사항) 모든 번역 작업을 마감했습니다.
1. `com.adobe.fmdita.translationservices.TranslationMapUpgradeScript` 클래스의 로그 수준을 **INFO**(으)로 변경하고 이 로그를 새 로그 파일(예: `logs/translation_upgrade.log`)에 추가했습니다.

## Experience Manager Guides 5.2.0 업그레이드 경로

**Experience Manager Guides 6.5** 또는 **AEM 6.5 LTS**&#x200B;에서 현재 버전의 AEM을 버전 5.2.0으로 쉽게 업그레이드할 수 있습니다.

>[!IMPORTANT]
>
> - **AEM 6.5 LTS의 경우**: Experience Manager Guides 5.2.0은 AEM 6.5 LTS 서비스 팩 2에서만 지원됩니다.
> - **AEM 6.5**&#x200B;의 경우: Experience Manager Guides 5.2.0은 AEM 6.5 서비스 팩 24, 23 및 22에서만 지원됩니다.
> - 현재 AEM 6.5를 사용 중이며 AEM 6.5 LTS로 이동할 계획이라면 Experience Manager Guides 5.2.0 업그레이드를 진행하기 전에 먼저 AEM 업그레이드를 완료해야 합니다. 자세한 내용은 [Adobe Experience Manager(AEM) 6.5 LTS로 업그레이드](https://experienceleague.adobe.com/en/docs/experience-manager-65-lts/content/implementing/deploying/upgrading/upgrade)를 참조하십시오.

Experience Manager Guides 버전 5.2.0으로 업그레이드하기 전에 다음 사항을 고려해야 합니다.

- 버전 5.0.0, 5.0.3, 5.1.0, 5.1.3 또는 5.1.4를 사용하는 경우 버전 5.2.0으로 직접 업그레이드할 수 있습니다.
- 버전 4.6.3, 4.6.4, 5.0.x를 사용 중인 경우 버전 5.1.0으로 바로 업그레이드할 수 있습니다.
- 버전 4.6.0, 4.6.1을 사용 중인 경우 버전 5.1.0으로 업그레이드하기 전에 버전 4.6.3, 4.6.4 또는 5.0.0으로 업그레이드해야 합니다.
- 버전 4.3.x, 4.2, 4.2.1(핫픽스 4.2.1.3), 4.1 또는 4.1.x를 사용하는 경우 버전 5.1.0으로 업그레이드하기 전에 버전 4.4로 업그레이드해야 합니다.
- 버전 4.0을 사용 중인 경우 버전 4.3.x로 업그레이드하기 전에 버전 4.2로 업그레이드해야 합니다.
- 버전 3.8.5를 사용하는 경우 버전 4.2로 업그레이드하기 전에 버전 4.0으로 업그레이드해야 합니다.
- 3.8.5 이전 버전을 사용하는 경우 [Experience Manager Guides 도움말 PDF 보관](https://helpx.adobe.com/xml-documentation-for-experience-manager/archive.html)에 있는 제품별 설치 안내서의 Adobe Experience Manager Guides 업그레이드 섹션을 참조하십시오.

## Experience Manager Guides 5.2.0 업그레이드 프로세스

>[!IMPORTANT]
>
> 사후 처리 및 인덱싱에는 몇 시간이 걸릴 수 있습니다. 사용량이 적은 시간 동안 업그레이드 프로세스를 시작하는 것이 좋습니다.

1. [Adobe 소프트웨어 배포 포털](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)에서 5.2.0 버전 패키지를 다운로드합니다.
1. 업그레이드할 버전 패키지를 설치하고 번들이 설치될 때까지 기다립니다.
1. 업그레이드하려는 버전과 함께 릴리스된 *(선택 사항)* Upgrade Oxygen 커넥터 플러그인입니다.
1. 패키지를 설치한 후 브라우저 캐시를 지웁니다.
1. 이전에 캡처한 콘텐츠에 대해 소스 보기의 찾기 및 바꾸기 기능에 액세스할 수 있도록 설정 `Enable markup find and replace`을(를) 활성화한 경우 `guidesAssetLucene` 인덱스를 다시 인덱싱해야 합니다. 자세한 내용은 [Find 및 Replace에 대한 리인덱싱](../install-conf-guide/custom-indexing-on-prem.md)을(를) 참조하십시오.
1. 버전 5.2.0에 도입된 새로운 설정을 포함하도록 시스템 구성을 업데이트하여 다음 개선 사항을 지원합니다.


| 구성 추가됨 | 구성 파일 | 설정의 레이블 표시 | 설정 이름 |
|-----|-----|------|-----|
| 새 편집기 활성화 또는 비활성화 | `com.adobe.fmdita.config.ConfigManager` | 편집기 2.0 활성화 | `enable.markup.editor` |
| 새 기준선 활성화 또는 비활성화 | `com.adobe.fmdita.config.ConfigManager` | 더 빠른 기준선(v2) 활성화 | `enable.baseline.v2` |
| 버전을 더티로 표시하기 위한 메타데이터 속성 무시 | `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | 더티 버전에 대한 메타데이터 속성 무시 | `xmleditor.dirtychecker.ignoremetadata` |
| Source 보기에서 기능 찾기 및 바꾸기 | `com.adobe.fmdita.config.ConfigManager` | 마크업 찾기 및 바꾸기 활성화 | `enable.markup.findreplace` |
| 이전 기준선에 대한 피어 링크 건너뛰기 활성화 또는 비활성화 | `com.adobe.fmdita.config.ConfigManager` | 기준선 V1에 대한 피어 링크 건너뛰기 | `guides.baseline.v1.skip.peer.links` |
| 번역 워크플로우에서 소스 콘텐츠가 있는 대상 복사본의 초기화를 활성화하거나 비활성화합니다. 레거시 번역 워크플로가 비활성화된 경우에만 적용됩니다.  | `com.adobe.fmdita.config.ConfigManager` | 원본 콘텐츠로 대상 언어 사본 초기화 | `translation.workflow.propagate.source.content` |
| 참조 저장소 정리 | `com.adobe.fmdita.config.ConfigManager` | 가이드 트리 삭제 활성화됨 | `btree.deletion.enabled` |
| DITA 에셋 복제 | `com.adobe.fmdita.config.ConfigManager` | DITA 에셋 복제 | `publish.replicate` |
| 자산 처리 | `com.adobe.fmdita.config.ConfigManager` | 가이드 자산 처리 예약 작업 활성화 | `enable.asset.processing.scheduler` |

이러한 구성 설정에 대한 자세한 내용은 [구성 업데이트](../install-conf-guide/configuration-on-prem.md)를 참조하세요.







