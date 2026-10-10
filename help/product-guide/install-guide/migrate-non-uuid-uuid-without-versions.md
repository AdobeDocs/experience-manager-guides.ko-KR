---
title: 버전이 없는 비 UUID 콘텐츠를 UUID 콘텐츠로 변환
description: 버전 없이 UUID가 아닌 콘텐츠를 마이그레이션하는 방법에 대해 알아봅니다.
exl-id: 44b5660d-9961-4463-9686-53085249fb05
feature: Migration
role: Admin
level: Experienced
hidefromtoc: 'yes'
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
feature_v2:
  - id: 5be0fc8f-1cff-5c3e-bb92-2903a56a3de6
    internal-label: Migration
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '88'
ht-degree: 0%
---
# 버전 없는 콘텐츠 마이그레이션

>[!IMPORTANT]
>
> 자산 버전을 무시하거나 마이그레이션하지 않으려는 경우 이 마이그레이션 접근 방식을 선택할 수 있습니다.


1. AEM 데스크탑 앱과 같은 Adobe 도구를 사용하여 UUID가 아닌 인스턴스의 자산을 AEM Assets UI에서 직접 UUID 인스턴스로 다운로드하여 업로드합니다.

1. GUID 작성을 위해 콘텐츠를 가져온 후 DAM 자산 업데이트 워크플로우를 활성화하고 모든 자산에서 실행해야 합니다.
