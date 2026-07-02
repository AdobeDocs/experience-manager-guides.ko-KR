---
title: 릴리스 정보 | Adobe Experience Manager Guides, 2026.07.0 릴리스의 업그레이드 지침 및 해결된 문제
description: 호환성 매트릭스와 Adobe Experience Manager Guides as a Cloud Service 2026.07.0 릴리스로 업그레이드하는 방법에 대해 알아보십시오.
source-git-commit: 40c6c9e3c041eee77ed5d2caf24d08b8b6d60d11
workflow-type: tm+mt
source-wordcount: '266'
ht-degree: 1%

---

# 2026.07.0 릴리스에 대한 업그레이드 지침

이 문서에서는 Adobe Experience Manager Guides as a Cloud Service 2026.07.0 릴리스의 업그레이드 지침 및 호환성 매트릭스를 다룹니다.

이 릴리스에서 수정된 문제 목록을 보려면 [2026.07.0 릴리스에서 수정된 문제](fixed-issues-2026-07-0.md)를 확인하십시오.

## 호환성 매트릭스

이 섹션에서는 Experience Manager Guides as a Cloud Service 2026.07.0 릴리스에서 지원되는 소프트웨어 애플리케이션에 대한 호환성 매트릭스를 살펴봅니다.

### FrameMaker 및 FrameMaker Publishing Server

| Experience Manager Guides as a Cloud 릴리스 | FMPS | FrameMaker | Oxygen 작성자 |
| --- | --- | --- | --- |
| 2026.07.0 | 호환되지 않음 | 2022년 이상 | 26.1 |


### 산소 연결기

| Experience Manager Guides as a Cloud 릴리스 | 산소 커넥터 창 | 산소 커넥터 Mac | Oxygen 창에서 편집 | Oxygen Mac에서 편집 |
| --- | --- | --- | --- | --- |
| 2026.07.0 | 3.8 -uuid 1 | 3.8 -uuid 1 | 2.3 | 2.3 |


### AEM 사이트 템플릿 버전

| 구성 요소 버전 | 사이트 버전 |
|---|---|
| guides-components.all-1.5.1 | aemg-sites-template-1.3.0 |

### 기술 자료 템플릿 버전

| 구성 요소 패키지 이름 | 구성 요소 버전 | 템플릿 버전 |
|---|---|---|
| Cloud Service용 Experience Manager Guides 구성 요소 콘텐츠 패키지 | guides-components.all-1.4.0 | aem-site-template-dxml-1.0.17 |

## 2026.07.0 릴리스로 업그레이드

Experience Manager Guides은 Experience Manager as a Cloud Service 최신 릴리스로 업그레이드하면 자동으로 업그레이드됩니다.

설정 구성을 검토하고 유효성을 검사하여 올바르게 구현되었는지 확인합니다. 사용자 지정 구성 변경 내용을 적용한 경우 [Cloud Service 업그레이드를 위한 추가 구성](../install-conf-guide/additional-config-for-upgrade.md)을 참조하여 업그레이드 중인 버전에 적용할 수 있는 추가 절차를 확인하십시오.
