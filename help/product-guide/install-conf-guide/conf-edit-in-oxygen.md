---
title: Oxygen에서 편집할 옵션 구성
description: Oxygen 커넥터 플러그인에서 편집할 옵션을 구성하는 방법을 알아봅니다.
feature: Web Editor Configuration
role: Admin
level: Experienced
exl-id: 41ecbbb2-81c3-473d-b48b-7370a74a6474
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
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '104'
ht-degree: 1%
---
# Cloud Service용 Oxygen에서 편집할 옵션 구성

AEM Guides을 사용하면 Oxygen 커넥터 플러그인에서 DITA 주제 및 DITA 맵을 편집할 수도 있습니다.

구성 파일을 만들려면 [구성 재정의](download-install-config-override.md#)의 지침을 사용하십시오. **Edit in Oxygen** 옵션을 구성하려면 구성 파일에서 다음(속성) 세부 정보를 제공합니다.



| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.editinoxygen` | 부울 \(true/false\). **기본값**: false |

>[!NOTE]
>
> 이 구성은 기본적으로 비활성화되며, 편집기에서 옵션을 사용할 수 없습니다.

**상위 항목:**&#x200B;[&#x200B;편집기 사용자 지정](customize-overview.md)
