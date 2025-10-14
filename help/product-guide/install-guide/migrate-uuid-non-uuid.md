---
title: 비 UUID에서 UUID로의 콘텐츠 마이그레이션
description: UUID가 아닌 콘텐츠를 UUID로 마이그레이션하는 방법 알아보기
exl-id: f8b723bf-84c0-4fe6-936e-63970fb3e417
feature: Migration
role: Admin
level: Experienced
source-git-commit: e38cd858201ea657ce276eb4b358b0d4eff502b2
workflow-type: tm+mt
source-wordcount: '205'
ht-degree: 0%

---

# 비 UUID에서 UUID로의 콘텐츠 마이그레이션 {#id226TI0U20XA}


사용 중인 Experience Manager Guides의 현재 버전을 기반으로 하여 UUID가 아닌 콘텐츠를 UUID로 마이그레이션할 수 있습니다.

>[!IMPORTANT]
>
> UUID 서버로 콘텐츠를 마이그레이션하기 전에 호환되는 AEM Guides 버전이 있는 비 UUID 서버가 설치되어 있는지 확인하십시오.

## 호환성 매트릭스

다음 매트릭스를 사용하여 UUID가 아닌 현재 버전을 기반으로 올바른 마이그레이션 경로를 파악하십시오. 이렇게 하면 마이그레이션 후 원활하게 전환할 수 있습니다.

| 마이그레이션에 필요한 UUID가 아닌 버전 | 마이그레이션 후 UUID 버전 | 마이그레이션 후 지원되는 업그레이드 경로 |
|---|---|---|
| 4.3.1 비 UUID | 4.3.2 UUID | 버전 4.3.2 UUID로 마이그레이션한 후 4.6.0 (UUID)을 직접 설치할 수 있습니다. 4.6.0을 사용하고 나면 버전 5.1.0으로 업그레이드한 다음 5.1.0 서비스 팩 1을 설치하십시오. |
| 4.6.0 서비스 팩 4 비 UUID | 4.6.1 UUID | 버전 4.6.1 UUID로 마이그레이션한 후 직접 5.1.0 (UUID)으로 업그레이드할 수 있습니다. 업그레이드가 완료되면 버전 5.1.0 서비스 팩 1을 설치합니다. |

콘텐츠 마이그레이션에 대한 자세한 단계는 다음 문서를 참조하십시오.

- [**4.3.1 비 UUID를 4.3.2 UUID 콘텐츠 마이그레이션으로**](./migrate-non-uuid-4-3.md)
- [**4.6.0 서비스 팩 4 비 UUID를 4.6.1 UUID 콘텐츠 마이그레이션으로**](./migrate-non-uuid-uuid-4-6.md)



