---
title: 새 PDF 엔진 활성화
description: Experience Manager Guides에서 새 PDF 엔진을 활성화하는 방법 알아보기
feature: Web Editor Configuration
role: Admin
level: Experienced
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
    internal-label: Configuration
subfeature_v2:
  - id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
    internal-label: Web Editor configuration
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: f89becea89888f7dec81e18c9220dcabda8f4e7d
workflow-type: tm+mt
source-wordcount: '161'
ht-degree: 4%
---

# 기본 PDF 엔진 v2 구성

기본 PDF의 새 게시 엔진, 즉 _기본 PDF 엔진 v2_&#x200B;은(는) 업데이트된 PDF 렌더링 기능을 제공하며 _기본 PDF 엔진 v1_ 문제에 대한 수정 사항을 제공합니다.

>[!BEGINTABS]
>[!TAB Cloud Service]

구성 파일을 만들려면 [구성 재정의](../install-conf-guide/download-install-config-override.md)의 지침을 사용하십시오. 구성 파일에서 다음 (속성) 세부 사항을 제공합니다.

| PID | 속성 키 | 속성 값 |
|-----|--------------|----------------|
| `com.adobe.fmdita.publish.config.GuidesPublishConfiguratorService` | `guides.publish.config` | `{"PDF_ENGINE": "v2"}` <br> 기본값: `v1` |

>[!TAB 온-프레미스]


온-프레미스 배포의 경우 가용성은 AEM 및 Java 버전에 따라 다릅니다.

_기본 PDF 엔진 v2_&#x200B;에는 **Java 17 이상이 필요합니다**.

- **AEM 6.5:** AEM 6.5가 Java 8에서 실행되므로 기본 PDF Publishing Engine v2가 지원되지 않습니다.
- **AEM 6.5 LTS:** 기본 PDF Publishing Engine v2가 기본적으로 활성화되어 있습니다. 추가 구성은 필요하지 않습니다.

AEM 6.5 LTS를 사용하는 _기본 PDF 엔진 v2_(으)로 다시 전환하려면 PDF 게시자 패키지를 제거하십시오.
CRX 패키지 관리자의 `/crx/packmgr/index.jsp#/etc/packages/com.adobe.guides/pdf-publisher-package-3.0.0.zip`.

>[!ENDTABS]

