---
title: 콘텐츠 번역
description: 콘텐츠 번역 방법 알아보기
exl-id: 5af78233-343e-47ba-b60c-b7f4789e2406
feature: Translation
role: Admin
level: Experienced
source-git-commit: ea3083542e955a56c27cd833600370a7962c6b8d
workflow-type: tm+mt
source-wordcount: '773'
ht-degree: 9%

---

# 콘텐츠 번역 {#id181GB0400UI}

페이지 콘텐츠, 에셋 및 사용자 생성 콘텐츠의 번역을 자동화하여 다국어 웹 사이트를 만들고 관리할 수 있습니다. 번역 워크플로를 자동화하려면 번역 서비스 공급업체를 AEM과 통합하고 콘텐츠를 다국어로 번역하는 프로젝트를 제작해야 합니다. AEM은 인간 번역 및 기계 번역 워크플로를 지원합니다.

- 사람 번역: 콘텐츠를 전문 번역사가 번역할 수 있도록 번역 공급업체로 보냅니다. 번역이 완료되면 번역된 콘텐츠는 반환되어 AEM으로 가져와집니다. 번역 공급업체를 AEM과 통합하면 콘텐츠가 AEM과 번역 공급업체 간에 자동으로 교환됩니다

- 기계 번역: 콘텐츠를 즉시 번역합니다


콘텐츠 번역의 단계는 다음과 같습니다.

1. [번역 서비스 공급자](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/administering/reusing-content/translation/integration-framework.html?lang=ko)와 AEM을 연결하고 번역 통합 프레임워크 구성을 만듭니다.

1. 번역 서비스 및 프레임워크 구성과 언어 마스터의 페이지를 연결합니다.

1. 번역할 [콘텐츠 유형 식별](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/administering/reusing-content/translation/rules.html?lang=ko).

1. 언어 마스터를 작성하고 언어 사본의 루트 페이지를 만들어 [번역할 콘텐츠를 준비](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/administering/reusing-content/translation/preparation.html?lang=ko)합니다.

1. [번역 프로젝트](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/administering/reusing-content/translation/managing-projects.html?lang=ko)를 만들어 번역할 콘텐츠를 수집하고 번역 프로세스를 준비합니다.

1. 번역 프로젝트를 사용하여 [콘텐츠 번역을 관리](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/administering/reusing-content/translation/managing-projects.html?lang=ko) 합니다.


번역 서비스 공급자가 AEM과의 통합에 대한 커넥터를 제공하지 않는 경우, AEM은 번역된 콘텐츠를 XML 형식으로 수동으로 내보내고 가져올 수 있도록 지원합니다.

>[!TIP]
>
> 콘텐츠 번역에 대한 모범 사례는 모범 사례 안내서의 *번역* 섹션을 참조하십시오.

## DITA 맵 대시보드에서 번역 탭 구성

DITA 맵 대시보드에서 변환 탭을 숨기려면 다음 단계를 수행합니다.

1. 구성 파일을 만들려면 [구성 재정의](download-install-additional-config-override.md#)의 지침을 사용하십시오.
1. 구성 파일에서 다음 \(property\) 세부 정보를 입력하여 맵 대시보드에서 번역 탭을 구성합니다.

   | PID | 속성 키 | 속성 값 |
   |---|------------|--------------|
   | `com.adobe.fmdita.config.ConfigManager` | `tabs.translation` | 부울 \( true/ false\).<br> **기본값**: `true` |

   >[!NOTE]
   >
   > 이 구성은 기본적으로 활성화되어 있으며 맵 대시보드에서는 번역 탭을 사용할 수 없습니다.


## 구성 요소 기반 번역 워크플로우 구성

번역 공급업체용 커넥터가 DITA 콘텐츠를 지원하지 않는 경우 구성 요소 기반 번역 워크플로를 활성화해야 합니다. 활성화되면 번역 가능한 콘텐츠가 에셋 메타데이터로 전송됩니다. 그러나 이 워크플로우가 작동하려면 커넥터가 에셋 메타데이터 번역을 지원해야 합니다.

설정에 사용된 번역 워크플로에 따라 구성 요소 기반 번역 워크플로 옵션이 구성되어야 합니다. 구성 파일을 만들려면 [구성 재정의](download-install-additional-config-override.md#)의 지침을 사용하십시오. 구성 파일에서 다음 \(property\) 세부 정보를 제공하여 구성 요소 기반 번역 워크플로를 구성하십시오.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `component.translation` | 부울: <br> -   사람 번역을 사용하는 경우 **구성 요소 기반 번역 워크플로** 옵션을 *비활성화* \(`false`\) 합니다. <br> -   기계 번역을 사용하는 경우 **구성 요소 기반 번역 워크플로** 옵션을 *활성화 \(`true`\)*&#x200B;합니다. |



## 기존 번역 워크플로우 구성

>[!IMPORTANT]
>
> 성능을 향상시키려면 AEM Guides 2024.06.0 이상에서 사용할 수 있는 최신 번역 워크플로우를 사용하는 것이 좋습니다. 그러나 번역 프로세스에서 사용자 지정을 활성화했으며 새 워크플로의 영향을 받는 경우에는 기존 번역 워크플로로 되돌리는 것을 해결 방법으로 고려하십시오.

구성 파일을 만들려면 [구성 재정의](download-install-additional-config-override.md#)의 지침을 사용하십시오. 구성 파일에서 다음 (속성) 세부 정보를 제공하여 기존 번역 워크플로를 구성합니다.


| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `translation.workflow.version.legacy` | 부울: <br> - 최신 번역 워크플로를 사용하는 경우 **레거시 번역 워크플로 실행** 옵션을 *비활성화* \(`false`\) 합니다.  <br> -   기존 번역을 사용하는 경우 *활성화 \( `true`\)*, **기존 번역 워크플로 실행** 옵션을 사용하십시오. <br> **기본값**: false |




>[!NOTE]
>
> 번역 커넥터를 사용하는 경우 Adobe Experience Manager 설명서의 *[번역 통합 프레임워크 구성](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/administering/reusing-content/translation/integration-framework.html?lang=ko)* 항목에 설명된 대로 커넥터를 구성했는지 확인하십시오.

>[!IMPORTANT]
>
> 번역 구성을 설정한 후에는 언어 폴더에 적절한 클라우드 구성을 설정해야 합니다.

## 임시 언어 사본 후 처리 구성

번역 워크플로를 시작하면 시스템이 소스 콘텐츠의 임시 언어 사본을 만듭니다. 이러한 임시 파일에 대한 사후 처리 작업을 활성화하거나 비활성화하도록 선택할 수 있습니다. 사후 처리 작업에서 파일의 들어오는 참조와 나가는 참조가 해결되고 문서 상태가 다른 작업과 함께 설정됩니다. 이러한 임시 파일에 사후 처리를 활성화하는 경우 번역 프로세스를 완료하는 데 시간이 더 오래 걸릴 수 있습니다. 따라서 사후 처리 옵션을 비활성화하는 것이 좋습니다.

구성 파일을 만들려면 [구성 재정의](download-install-additional-config-override.md#)의 지침을 사용하십시오. 구성 파일에서 다음 \(property\) 세부 정보를 입력하여 임시 언어 사본의 사후 처리를 구성합니다.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `postprocess.temporary.langcopies` | 부울: <br> -   임시 파일에서 사후 처리 작업을 실행하지 않으려면 **사후 처리 언어 사본** 옵션을 *비활성화* \( false\)합니다.<br> -   임시 파일에서 사후 처리 작업을 실행하려면 *언어 사본&#x200B;**사후 처리**&#x200B;옵션을 활성화* \( true\)합니다.<br> **기본값**: false |

