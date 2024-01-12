---
title: 버전이 없는 비 UUID 콘텐츠를 UUID 콘텐츠로 변환
description: 버전 없이 UUID가 아닌 콘텐츠를 마이그레이션하는 방법에 대해 알아봅니다.
exl-id: 44b5660d-9961-4463-9686-53085249fb05
feature: Migration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '85'
ht-degree: 0%

---

# 버전 없는 콘텐츠 마이그레이션

>[!IMPORTANT]
>
> 자산 버전을 무시하거나 마이그레이션하지 않으려는 경우 이 마이그레이션 접근 방식을 선택할 수 있습니다.


1. AEM 데스크탑 앱과 같은 Adobe 도구를 사용하여 UUID가 아닌 인스턴스의 자산을 AEM Assets UI에서 직접 UUID 인스턴스로 다운로드하여 업로드합니다.

1. GUID 작성을 위해 콘텐츠를 가져온 후 DAM 자산 업데이트 워크플로우를 활성화하고 모든 자산에서 실행해야 합니다.
