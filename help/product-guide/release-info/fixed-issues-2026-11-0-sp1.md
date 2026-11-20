---
title: 릴리스 정보 | Adobe Experience Manager Guides, 2026.11.0 서비스 팩 1 릴리스의 문제를 해결했습니다
description: Adobe Experience Manager Guides as a Cloud Service의 2026.11.0 서비스 팩 1 릴리스의 버그 수정에 대해 알아봅니다.
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
source-git-commit: 8821e671951d83439688aa33f88ac1f91f0919eb
workflow-type: tm+mt
source-wordcount: '315'
ht-degree: 0%
---
# 2026.11.0 서비스 팩 1 릴리스의 문제가 해결되었습니다

이 문서에서는 Adobe Experience Manager Guides as a Cloud Service의 2026.11.0 서비스 팩 1 릴리스에서 수정된 버그를 다룹니다.

## 게시

AEM Sites에 게시할 때(복합 구성 요소 매핑 사용) 다음과 같은 문제가 발생합니다.

- `microservice-based`을(를) 게시하여 선택한 항목이나 하위 맵을 다시 만드는 데는 전체 맵을 생성하는 데 걸리는 시간이 소요됩니다. (GUIDES-59322)
- 청크 항목이 포함된 하위 맵을 다시 생성하면 TOC에 잘못된 제목과 링크가 표시됩니다. 청크된 모든 주제 항목에는 마지막으로 청크된 주제의 제목이 표시됩니다. (GUIDES-58650)

동적 기준선인 기준선(레거시) 또는 새 기준선을 사용하여 AEM Sites에 게시할 때 다음 문제가 발생합니다.

- 기준선은 동일한 게시 작업 동안 두 번 이상 다시 작성되므로 게시 시간이 길어지고 경우에 따라 다시 작성되지 않습니다. 새 기준선을 사용하면 증분 게시에서는 현재 기준선이 아닌 부실 기준선도 사용하므로 출력에서 최신 콘텐츠를 반영하지 않을 수 있습니다. (GUIDES-60189)
- 맵 대시보드를 사용할 때 몇 가지 성능 문제가 발생합니다. (GUIDES-60189, GUIDES-55646)

## 알려진 문제

Adobe은 2026.11.0 서비스 팩 1 릴리스에 대해 다음과 같은 알려진 문제를 확인했습니다.

- Experience Manager Guides as a Cloud Service 2026.11.0 이상을 사용하는 경우, 서버 인스턴스가 시작되는 경우와 같이 게시 프로세스 중에 AEM이 특정 내부 서비스를 다시 시작하는 경우 애플리케이션 오류가 발생하여 게시가 실패합니다. (GUIDES-60804)<br>**해결 방법:** 문제를 해결하려면 게시를 다시 시도하십시오.
- **맵 컬렉션** 또는 API를 통해 여러 AEM Sites(복합 구성 요소 매핑 사용) 사전 설정 또는 기본 PDF 사전 설정에 대한 출력을 생성할 때 `Rebuild the Baseline` 예외와 함께 출력 생성이 실패합니다. <br>**해결 방법:** 사전 설정을 동시에 게시하지 않고 순차적으로 게시하여 문제를 방지하십시오.