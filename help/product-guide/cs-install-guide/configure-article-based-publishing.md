---
title: 문서 기반 게시용 패키지 설치
description: 문서 기반 게시용 패키지를 설치하는 방법 알아보기
exl-id: d83fc1a9-0822-47f0-8099-22a74b9ced2a
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '348'
ht-degree: 0%

---

# 문서 기반 게시용 패키지 설치 {#id21BNL02052Z}

AEM Guides는 웹 편집기와 통합된 강력한 문서 기반 게시 기능을 제공합니다. 이 기능을 사용하면 하나 이상의 주제를 동시에 게시할 수 있습니다. 맵 편집기에서 맵을 열면 출력 탭으로 이동하여 사전 설정을 만든 다음 하나 이상의 주제를 선택하여 출력을 생성할 수 있습니다. 문서 기반 게시 기능을 사용하여 하나 이상의 주제의 출력을 점진적으로 생성하거나 컨텐츠를 문서 단위 방식으로 기술 자료 플랫폼에 게시할 수 있습니다. 자세한 내용은 *웹 편집기 섹션의 문서 기반 게시* 사용 안내서에서 참조하십시오.

문서 기반 출력을 게시하기 위한 AEM 사이트를 만들려면 다음 단계를 수행하십시오.

1. 다운로드 **Cloud Service을 위한 XML Documentation 구성 요소 컨텐츠 패키지** (으)로부터 [Adobe 소프트웨어 배포 포털](https://experience.adobe.com/#/downloads/content/software-distribution/en/general.html).
1. AEM 패키지 관리자를 엽니다. 패키지 관리자에 액세스할 수 있는 기본 URL은 다음과 같습니다. `https://<hostname>/crx/packmgr/index.jsp`
1. Cloud Service을 위해 XML Documentation 구성 요소 콘텐츠 패키지를 업로드한 다음 설치합니다.
1. 다운로드 `Knowledge-base-template-for-article-based-publishing-for-cloud-service.zip` 파일 출처: [Adobe 소프트웨어 배포 포털](https://experience.adobe.com/#/downloads/content/software-distribution/en/general.html).
1. 전역 탐색에서 을 선택합니다. **사이트**.
1. Sites UI에서 **만들기** 오른쪽 상단의 버튼입니다.
1. 선택 **템플릿의 사이트** 다음에서 **만들기** 드롭다운입니다.
1. 다음을 클릭합니다. **가져오기** 버튼을 누른 다음 `Knowledge-base-template-for-article-based-publishing-for-cloud-service.zip` 시스템에 다운로드되었습니다. 사이트 템플릿을 가져오면 맨 아래에 나열됩니다.

   >[!NOTE]
   >
   > ZIP 파일은 처음에만 가져오면 됩니다. 가져온 사이트 템플릿은 목록에서 사용할 수 있습니다.

   선택 **문서 기반 게시에 대한 기술 자료 템플릿** AEM 사이트를 만들고 **다음** 오른쪽 상단 모서리입니다.

1. 다음을 입력합니다. **사이트 제목** 및 **사이트 이름** 및 클릭 **만들기** 오른쪽 상단 모서리입니다. AEM 사이트는 Target 사이트 템플릿을 사용하여 만들어집니다. \(Tragopan 사이트는 카테고리, 섹션 및 문서 페이지에 대한 템플릿이 있는 샘플 기술 자료 AEM 사이트입니다.\)

   >[!NOTE]
   >
   > 동일한 템플릿을 사용하여 여러 AEM 사이트를 만들 수 있습니다.


AEM 사이트를 사용하여 웹 편집기의 출력 사전 설정을 사용하여 문서를 게시할 수 있습니다.

**상위 항목:**[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
