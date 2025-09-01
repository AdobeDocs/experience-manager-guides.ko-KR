---
title: 클라우드 서비스용 AEM Sites 템플릿 다운로드 및 설치
description: Cloud Services용 AEM Sites 템플릿을 다운로드하고 설치하는 방법 알아보기
feature: Installation
role: Admin
level: Experienced
source-git-commit: 1cec8975e8aad56184793a023d066aa467d8cec5
workflow-type: tm+mt
source-wordcount: '692'
ht-degree: 1%

---

# AEM Sites 템플릿(클라우드 서비스) 다운로드 및 설치

이 안내서에서는 클라우드 환경에서 AEM Sites 페이지를 생성하기 위해 최신 AEM Guides 템플릿을 설정하고 구성하는 단계별 지침을 제공합니다. 다음 단계에 따라 필요한 패키지를 설치하고 사전 설정을 만들고 구성하며 AEM Sites을 생성합니다.

## 사전 요구 사항

설치를 계속하기 전에 다음 전제 조건이 충족되는지 확인하십시오.

- **Adobe Experience Manager(AEM) 클라우드**: **AEM Guides 2502 이상 버전**&#x200B;을(를) 가진 **AEM as a Cloud Service**&#x200B;의 실행 중인 인스턴스.

- **필요한 권한**: 다음 권한이 있어야 합니다.

   - 패키지를 배포하려면 **Cloud Manager**&#x200B;에 액세스하십시오.
   - 환경과 연결된 **Git 저장소**&#x200B;에 대한 액세스 권한.
   - AEM Guides에서 사전 설정을 만들고 수정할 수 있는 권한.

- **패키지 다운로드**: 소프트웨어 배포 포털에서 다음 패키지를 다운로드합니다.

   - 구성 요소 패키지: guides-components.all-1.x.0.zip
   - 사이트 템플릿: aemg-docs-1.x.0.zip

## 클라우드 배포를 통한 패키지 설치

**구성 요소 패키지(guides-components.all-1.x.x.zip)**&#x200B;를 설치하고 다음 단계를 수행하십시오

1. **Git 리포지토리 복제:**
   1. Cloud Manager의 왼쪽 패널에서 **저장소**(으)로 이동합니다.
   2. **저장소 정보 액세스**&#x200B;를 선택하고 git clone 명령을 복사합니다.

      ![저장소 정보 액세스 선택](/help/product-guide/knowledge-base/kb-articles/assets/publishing/access-repo.png){width="350" align="left"}

   3. 제공된 사용자 이름과 암호를 사용하여 로컬 시스템에 저장소를 복제합니다(필요한 경우 암호 생성).
2. **Maven 번들에 패키지 추가:**
   1. 로컬로 복제된 저장소에서 새 Maven 번들을 생성하거나 기존 번들에 추가합니다.
   2. Maven 프로젝트에 /jcr_root/apps/fmdita/install 구조가 있는지 확인합니다.

      Maven 프로젝트의 ![구조](/help/product-guide/knowledge-base/kb-articles/assets/publishing/maven-structure.png){width="650" align="left"}


   3. 다운로드한 guides-components.all-1.x.x.zip 파일을 설치 폴더에 넣습니다.

3. **filters.xml 업데이트:**

   1. 상위 콘텐츠 디렉터리의 META-INF 폴더에 있는 filters.xml 파일을 엽니다.
   2. 필터 루트=&quot;/apps/fmdita&quot; mode=&quot;merge&quot;/


      ![필터 추가](/help/product-guide/knowledge-base/kb-articles/assets/publishing/add-filter-xml.png){width="650" align="left"}


4. **pom.xml 구성:** 환경 요구 사항에 따라 pom.xml 파일을 업데이트합니다.
5. **변경 내용을 푸시하고 파이프라인 실행:**
   1. 변경 사항을 기본 Git 저장소에 푸시합니다.
   2. Cloud Manager의 **파이프라인**(으)로 이동하여 원하는 환경에 대해 파이프라인을 실행합니다.
6. **설치 확인:** 배포가 완료되면 구성 요소 패키지가 AEM 클라우드 환경에 설치됩니다.

## 설치된 템플릿을 사용하여 사이트 생성

1. **사이트 템플릿 가져오기:**
   1. AEM Sites 페이지(servername/sites.html/content)로 이동합니다.
   2. 템플릿에서 **만들기** > **사이트**&#x200B;를 선택합니다.
   3. **가져오기** 옵션을 사용하여 사이트 템플릿 aemg-docs-1.x.x.zip을 가져옵니다.
2. **템플릿 선택:** **AEMG 문서 1.x.x**&#x200B;을 선택한 후 **다음**&#x200B;을 선택합니다.
3. **사이트 세부 정보 입력:** **사이트 제목** 및 **사이트 이름**&#x200B;을 입력하십시오.

   ![사이트 만들기](/help/product-guide/knowledge-base/kb-articles/assets/publishing/create-site.png){width="350" align="left"}

4. **만들기**&#x200B;를 선택합니다.

## AEM 사이트 사전 설정 만들기

1. **새 사전 설정 만들기:**
   1. AEM Guides에서 DITA 맵을 열고 **출력** 패널로 이동합니다.
   2. **사전 설정 만들기**&#x200B;를 선택합니다.
   3. 유형을 **AEM Sites**(으)로 선택합니다.
   4. 사전 설정의 이름을 입력합니다.
   5. **기존 구성 요소 매핑 사용** 설정을 선택 취소합니다.

      ![새 AEM 사이트 사전 설정 만들기](/help/product-guide/knowledge-base/kb-articles/assets/publishing/create-new-output-preset.png){width="350" align="left"}

   6. **추가**&#x200B;를 선택하여 사전 설정을 만드십시오.
2. **AEM 사이트 사전 설정 구성:** 기본 제공(OOTB) 사이트를 구성하는 두 가지 옵션이 있습니다.

   **옵션 1: 사이트 드롭다운 사용**

   1. 위에서 만든 사이트(예: AEMG 문서 사이트)로 **사이트**&#x200B;를 선택합니다.
   2. **게시 경로** 및 **주제 페이지** 템플릿이 자동으로 다음으로 설정되어 있는지 확인하십시오.
      - 게시 경로: /content/AEMG-Docs-Site/en/docs/product
      - 주제 페이지 템플릿: 주제 페이지

      ![사이트 드롭다운을 사용하여 AEM 사이트 구성](/help/product-guide/knowledge-base/kb-articles/assets/publishing/use-site-dropdown-cs.png){width="350" align="left"}

   **옵션 2: 사이트 경로 사용**

   1. **사이트 경로**&#x200B;을(를) /content/AEMG-Docs-Site/en/docs/product로 수동으로 설정합니다.
   2. **주제 페이지** 템플릿이 자동으로 주제 페이지로 설정되어 있는지 확인하십시오.

      ![사이트 경로를 사용하여 AEM 사이트를 구성하십시오](/help/product-guide/knowledge-base/kb-articles/assets/publishing/use-site-path-cs.png){width="650" align="left"}

3. **사전 설정 저장:** 사전 설정 변경 내용을 저장합니다.

## AEM Sites 생성

1. **사이트 생성:**
   1. 사전 설정이 구성된 상태에서 해당 DITA 맵에 대한 AEM 사이트를 생성합니다.
   2. 생성된 사이트는 /content/AEMG-Docs-Site/en/docs/product 경로에서 사용할 수 있습니다.
2. **기본 생성 경로 변경(선택 사항):** 사이트 생성을 위한 기본 경로를 변경하려면 다음 단계를 수행하십시오.
   1. **AEM Sites**(으)로 이동합니다.
   2. OOTB 사이트 구조 아래에 새 제품 페이지를 만듭니다.
   3. **AEMG 문서** > **영어** > **문서**(으)로 이동합니다.

      ![페이지 제작](/help/product-guide/knowledge-base/kb-articles/assets/publishing/create-page-cs.png){width="650" align="left"}

   4. **홈 페이지** 타일을 선택한 다음 **다음**&#x200B;을 선택합니다.

      ![홈 타일 선택](/help/product-guide/knowledge-base/kb-articles/assets/publishing/home-tile-cs.png){width="650" align="left"}

   5. 페이지의 **제목** 및 **이름**&#x200B;을 입력하십시오.
   6. **만들기**&#x200B;를 선택합니다.

>[!NOTE]
>
> 프로덕션에 배포하기 전에 모든 구성을 비프로덕션 환경에서 테스트하십시오. <br><br> 자세한 내용은 공식 [AEM as a Cloud Service에 배포](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/deploying/overview)를 참조하십시오.
