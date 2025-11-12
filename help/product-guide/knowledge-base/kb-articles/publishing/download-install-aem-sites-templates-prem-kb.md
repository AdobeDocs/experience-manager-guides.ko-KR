---
title: On-Premise Services용 AEM Sites 템플릿 다운로드 및 설치
description: Prem Services에서 용 AEM Sites 템플릿을 다운로드하고 설치하는 방법을 알아봅니다
feature: Installation
role: Admin
level: Experienced
exl-id: aa843a72-ff0d-4c9a-a87d-48d099087b5e
source-git-commit: 4c564a0ffaa8f287bcaf012634d49dbf1e0682b4
workflow-type: tm+mt
source-wordcount: '440'
ht-degree: 0%

---

# AEM Sites 템플릿 다운로드 및 설치(On-Premise 서비스)

이 안내서에서는 AEM Sites을 생성하기 위해 최신 AEM Guides 템플릿을 설정하고 구성하는 단계별 지침을 제공합니다. 다음 단계에 따라 필요한 패키지를 설치하고 사전 설정을 만들고 구성하며 AEM Sites을 생성합니다.

## 사전 요구 사항

설치를 계속하기 전에 다음 전제 조건이 충족되는지 확인하십시오.

- **Adobe Experience Manager(AEM):** **서비스 팩** 21, 20, 19 및 **AEM Guides 4.6.0** 이상이 설치된 **AEM 6.5**&#x200B;의 실행 중인 인스턴스.

- **필요한 권한**: 다음 권한이 있는지 확인하십시오.

   - 필요한 패키지를 다운로드하려면 **소프트웨어 배포 포털**&#x200B;에 액세스하십시오.
   - AEM에서 패키지를 설치하려면 **CRX 패키지 관리자**&#x200B;에 액세스하십시오.
   - AEM Guides에서 사전 설정을 만들고 수정할 수 있는 권한.

- **패키지 다운로드**: **소프트웨어 배포 포털**&#x200B;에서 다음 패키지를 다운로드합니다.

   - 구성 요소 패키지: on-prem-guides-components.all-1.x.0.zip
   - 사이트 패키지: aemg-docs.all-1.x.0.zip

## CRX 패키지 관리자를 사용한 패키지 설치

1. **구성 요소 패키지 설치:**
   1. [**CRX 패키지 관리자**](http://&lt;your-aem-instance>/crx/packmgr)&#x200B;(으)로 이동합니다.
   2. on-prem-guides-components.all-1.x.0.zip 패키지를 업로드하고 설치합니다.

2. **사이트 패키지 설치:** CRX 패키지 관리자를 사용하여 aemg-docs.all-1.x.0.zip 패키지를 업로드하고 설치합니다.


## AEM 사이트 사전 설정 만들기 및 구성

1. **새 사전 설정 만들기:**
   1. AEM Guides에서 DITA 맵을 열고 **출력** 패널로 이동합니다.
   2. **사전 설정 만들기**&#x200B;를 선택합니다.
   3. 유형을 **AEM Sites**(으)로 선택합니다.
   4. 사전 설정의 이름을 입력합니다.
   5. **기존 구성 요소 매핑 사용** 설정을 선택 취소합니다.
   6. **추가**&#x200B;를 선택하여 사전 설정을 만드십시오.

      ![새 출력 사전 설정 대화 상자](/help/product-guide/knowledge-base/kb-articles/assets/publishing/new-output-preset.png){width="350" align="left"}


2. **AEM 사이트 사전 설정 구성:** 기본 제공(OOTB) 사이트를 구성하는 두 가지 옵션이 있습니다.

   **옵션 1: 사이트 드롭다운 사용**

   1. **사이트**&#x200B;를 **AEMG 문서**(으)로 선택합니다.
   2. **게시 경로** 및 **주제 페이지 템플릿**&#x200B;이(가) 자동으로 다음으로 설정되어 있는지 확인하십시오.
      - 게시 경로: `aemg-docs/en/docs/product1`
      - 주제 페이지 템플릿: 주제 페이지

      ![사이트 드롭다운 사용](/help/product-guide/knowledge-base/kb-articles/assets/publishing/use-site-dropdown.png){width="350" align="left"}

   **옵션 2: 사이트 경로 사용**

   1. **사이트 경로**&#x200B;을(를) 수동으로 `/content/aemg-docs/en/docs/product1`(으)로 설정하십시오.
   2. **주제 페이지 템플릿**&#x200B;이(가) 자동으로 주제 페이지로 설정되어 있는지 확인하십시오.

      ![사이트 경로 사용](/help/product-guide/knowledge-base/kb-articles/assets/publishing/use-site-path.png){width="350" align="left"}

3. **사전 설정 저장:** 사전 설정 변경 내용을 저장합니다.

## AEM Sites 생성

1. **사이트 생성:**
   1. 이제 사전 설정이 구성되면 해당 DITA 맵에 대한 AEM 사이트를 생성할 수 있습니다.
   2. 생성된 사이트는 `/content/aemg-docs/en/docs/product1` 경로에서 사용할 수 있습니다.
2. **기본 생성 경로 변경(선택 사항):** 사이트 생성을 위한 기본 경로를 변경하려면 다음 단계를 수행하십시오.

   1. **AEM Sites**(으)로 이동합니다.
   2. OOTB 사이트 구조 아래에 새 제품 페이지를 만듭니다.
   3. **AEMG 문서** > **영어** > **문서**(으)로 이동합니다.

      ![AEM 사이트 구조 &#x200B;](/help/product-guide/knowledge-base/kb-articles/assets/publishing/create-new-page.png){width="350" align="left"}에서 페이지 만들기

   4. **홈 페이지** 타일을 선택한 다음 **다음**&#x200B;을 선택합니다.

      ![홈 페이지 타일 선택](/help/product-guide/knowledge-base/kb-articles/assets/publishing/home-page-tile.png){width="350" align="left"}

   5. 페이지의 **제목** 및 **이름**&#x200B;을 입력하십시오.
   6. **만들기**&#x200B;를 선택합니다.
